# Load & Security Testing Guide

This guide explains how to perform the required tasks:

- Load Testing with JMeter
  1. Choose one critical API endpoint.
  2. Create a JMeter test plan simulating concurrent users.
  3. Run load test and capture key metrics (response times, throughput).
  4. Analyze results and identify bottlenecks.
- Security Testing (OWASP Top 10 basics)
  1. Review your app for at least two OWASP Top 10 vulnerabilities.
  2. Demonstrate how to fix these issues.

---
## Prerequisites
| Component | Requirement |
|-----------|------------|
| Backend   | Node.js server running on `http://localhost:5000` |
| Frontend  | React dev server (`npm start`) or production build (not required for load test) |
| Database  | MySQL reachable with credentials in `backend/.env` |
| JMeter    | Apache JMeter 5.6+ installed (Java required) |
| Shell     | Windows PowerShell (commands below use this) |

To start backend (from repo root):
```powershell
cd backend
npm install
npm start
```
Confirm endpoint works:
```powershell
curl http://localhost:5000/api/events-public
```
Should return JSON (array, maybe empty).

---
## LOAD TESTING WITH JMETER
### 1. Choose Critical Endpoint
**Endpoint:** `GET /api/events-public`

Rationale: Public read endpoint (safe to stress), limited data (50 rows), simulates core list retrieval.

### 2. Create JMeter Test Plan (GUI)
1. Launch JMeter: `"C:\Path\to\apache-jmeter-5.6.3\bin\jmeter.bat"`.
2. Rename **Test Plan** to `Events Public Load`.
3. Add **Thread Group** (Right‑click Test Plan > Add > Threads (Users) > Thread Group):
   - Number of Threads (Users): `50`
   - Ramp-Up Period (seconds): `30`
   - Loop Count: `5` (Total requests = 50 * 5 = 250)
4. Add **HTTP Request Defaults** (Config Element):
   - Protocol: `http`
   - Server Name or IP: `localhost`
   - Port: `5000`
5. Add **HTTP Request** (Sampler):
   - Name: `GET Events Public`
   - Method: `GET`
   - Path: `/api/events-public`
6. Add **Listeners**:
   - Summary Report
   - Aggregate Report
   (Avoid View Results Tree for large runs; only enable if debugging.)
7. Save plan as `test/jmeter/events_load.jmx` (or overwrite existing file).

### 3. Run Load Test (Non-GUI Recommended)
From repository root in PowerShell:
```powershell
# Adjust JMETER_HOME to your installation path
$JMETER_HOME = "C:\Path\to\apache-jmeter-5.6.3"
& "$JMETER_HOME\bin\jmeter.bat" -n -t test\jmeter\events_load.jmx -l test\jmeter\results.jtl -e -o test\jmeter\report
```
Artifacts:
- Raw results: `test/jmeter/results.jtl`
- HTML dashboard: `test/jmeter/report/index.html`

### 4. Capture Key Metrics
Open `test/jmeter/report/index.html` in a browser. Record:
- Samples (total requests)
- Throughput (requests/sec)
- Average response time (ms)
- Percentiles: p90, p95, p99
- Min / Max
- Error % (should be 0)

(Optional quick view: Open plan in GUI and add an Aggregate Report to load the `.jtl` file.)

### 5. Analyze & Identify Bottlenecks
| Symptom | Possible Cause | Suggested Action |
|---------|----------------|------------------|
| High Error % | Backend crashes / DB errors | Check server logs, validate DB connectivity |
| p95 >> average | Slow queries / resource spikes | Add DB indexes, optimize queries, increase pool limit |
| Low Throughput | Connection pool saturation | Raise `DB_POOL_LIMIT` or optimize code |
| Increasing latency over time | Memory pressure / GC | Profile heap, review large responses |

**DB Index Example:**
```sql
CREATE INDEX idx_events_event_date ON events (event_date);
```
**Connection Pool Tuning:** In `.env`, raise `DB_POOL_LIMIT=20` (test carefully).

### 6. Document Results
Create a short table (example):
```
| Scenario | Users | Loops | Avg (ms) | p95 (ms) | Throughput (req/s) | Error % |
|----------|-------|-------|----------|----------|--------------------|---------|
| Baseline | 50    | 5     | 120      | 180      | 8.0                | 0       |
```
Add notes: *p95 acceptable; no errors; no action required* (or describe tuning performed).

---
## SECURITY TESTING (OWASP BASICS)
### Targeted Categories
1. **Injection (A03:2021)** – Risk from unvalidated / unsanitized inputs.
2. **Sensitive Data Exposure / Security Misconfiguration (A05/A02)** – Hard-coded credentials, missing headers.
(Optional) XSS as supporting evidence of sanitization.

### 1. Review Application
Already implemented defenses:
- Parameterized MySQL queries using `?` placeholders.
- Input validation via `express-validator` in auth, events, invitations, feedback routes.
- Sanitization with `xss` on request bodies.
- Removed hard-coded credentials; using `.env` + `dotenv`.
- Security headers via `helmet`.
- Rate limiting on `/api/auth` endpoints.

### 2. Demonstrate Fixes (Manual Tests)
#### Injection Attempt
```powershell
curl "http://localhost:5000/api/events-public?title=' OR 1=1 --"
```
Expected: Normal limited list (no dumped table, no error).

#### Invalid Data Validation
```powershell
curl -X POST http://localhost:5000/api/events/create `
  -H "Content-Type: application/json" `
  -d '{"creator_email":"bad","title":"a","event_date":"not-a-date"}'
```
Expected: HTTP 400 with validation errors array.

#### Sensitive Data Exposure
1. Inspect `backend/db.js` – ensures environment vars only.
2. Confirm `.env` NOT committed (add to `.gitignore` if missing).
3. Search repository for previous credential string (should return nothing):
```powershell
git grep b0wfogeparw9tbiqltdk
```
(If results appear in history, rotate credentials.)
4. View headers (helmet):
```powershell
curl -I http://localhost:5000/api/events-public
```
Look for `X-Content-Type-Options`, `X-DNS-Prefetch-Control`, etc.

#### (Optional) XSS Check
Submit feedback containing a script tag:
```powershell
curl -X POST http://localhost:5000/api/feedback/submit `
  -H "Content-Type: application/json" `
  -d '{"event_id":1,"user_email":"user@test.com","message":"<script>alert(1)</script>"}'
```
Then fetch it (adjust endpoint) and verify the frontend displays escaped text (no alert).

### 3. Evidence to Capture
| Evidence | How |
|----------|-----|
| Parameterized query usage | Screenshot/snippet of code with `?` placeholders |
| Validation working | 400 response JSON from invalid create event attempt |
| Secrets externalized | Screenshot of `.env` (redacted) & `db.js` without literals |
| Security headers | Curl `-I` output showing helmet headers |
| Injection blocked | Output of crafted query attempt returning normal data |
| (Optional) XSS mitigated | Stored payload rendered harmless |

### 4. Residual Risks / Next Steps
- No JWT/role-based authorization yet (recommend adding for protected routes).
- Expand rate limiting to other mutation endpoints.
- Consider stricter Content Security Policy via helmet custom config.
- Add automated dependency scanning in CI (already using `npm audit`; consider `npm audit fix --force` carefully or tools like Snyk/Dependabot).

---
## QUICK RUN SUMMARY
```powershell
# 1. Start backend
cd backend
npm start

# 2. (Optional) Start frontend
cd ..\frontend
npm start

# 3. Load test (from repo root)
$JMETER_HOME = "C:\Path\to\apache-jmeter-5.6.3"
& "$JMETER_HOME\bin\jmeter.bat" -n -t test\jmeter\events_load.jmx -l test\jmeter\results.jtl -e -o test\jmeter\report

# 4. Security checks
curl http://localhost:5000/api/events-public
curl "http://localhost:5000/api/events-public?title=' OR 1=1 --"
```
Open `test/jmeter/report/index.html` & record metrics.

---
## Report Template (Copy/Paste)
```
### Load Test Summary
Endpoint: /api/events-public
Config: 50 users, ramp 30s, 5 loops (250 requests)
| Avg | p95 | p99 | Throughput (req/s) | Error % | Notes |
|-----|-----|-----|--------------------|---------|-------|
|     |     |     |                    |         |       |

### Security Review
- Injection: mitigated via parameterized queries + validation.
  Evidence: (attach screenshot / snippet)
- Sensitive Data Exposure: secrets moved to .env, helmet headers active.
  Evidence: (headers output, db.js snippet)
Residual Risks: add auth tokens, expand rate limits, CSP tightening.
Actions Taken: none / index added / pool size changed.
```

---
## Appendix: Troubleshooting
| Issue | Fix |
|-------|-----|
| 100% errors in JMeter | Endpoint URL wrong, backend not running, firewall blocking |
| High latency spikes | Add DB index, check MySQL slow query log |
| Access denied DB | Re-check `.env` credentials, user grants, host whitelist |
| Helmet headers missing | Ensure `app.use(helmet())` executes before routes |

---
End of guide.
