// routes/events.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create event
router.post('/create', (req, res) => {
    const { creator_email, title, event_date, location, reminders } = req.body;

    db.query('INSERT INTO events SET ?',
        { creator_email, title, event_date, location },
        (err, result) => {
            if (err) return res.status(500).json({error:'Server Error'})
            const eventId = result.insertId;

            // Insert event_reminders
            if (reminders && reminders.length) {
                let values = reminders.map(r => [eventId, r]);
                db.query('INSERT INTO event_reminders (event_id, days_before) VALUES ?',
                    [values],
                    (err) => {
                        if (err) return res.status(500).json({error:'Server Error'})
                        res.json({msg:'Event successfully created'})
                    });
            } else {
                res.json({msg:'Event successfully created'})
            }
        });
});

// Get events by creator
router.get('/created/:email', (req, res) => {
    db.query('SELECT * FROM events WHERE creator_email = ?',
        [req.params.email],
        (err, results) => {
            if (err) return res.status(500).json({error:'Server Error'})
            res.json(results);
        });
});

// ------------------------------------------------------------
// Injection Demonstration Route (must be BEFORE '/:id' catchall)
// Path: /api/events/search?q=term
// BEFORE (commented) vs AFTER (active secure) patterns.
// ------------------------------------------------------------
router.get('/search', (req, res) => {
    const q = req.query.q || '';
    // Optional toggle to demonstrate difference WITHOUT editing code:
    // 1. Add to .env: DEMO_UNSAFE=true (restart server)
    // 2. Call endpoint with ?mode=unsafe to execute vulnerable concatenated SQL
    // 3. Omit mode=unsafe (or set DEMO_UNSAFE!=true) to use SAFE parameterized query
    const demoUnsafeEnabled = process.env.DEMO_UNSAFE === 'true' && req.query.mode === 'unsafe';

    if (demoUnsafeEnabled) {
        // BEFORE (intentionally vulnerable)
        const rawSql = "SELECT id,title,event_date FROM events WHERE title LIKE '%" + q + "%' LIMIT 50";
        db.query(rawSql, (err, rows) => {
            if (err) return res.status(500).json({ error: 'Server Error (unsafe query)' });
            return res.json({ mode: 'UNSAFE_DEMO', rawSql, rowsCount: rows.length, rows });
        });
    } else {
        // AFTER (secure)
        const like = `%${q}%`;
        db.query('SELECT id, title, event_date FROM events WHERE title LIKE ? LIMIT 50', [like], (err, rows) => {
            if (err) return res.status(500).json({ error: 'Server Error' });
            res.json({ mode: 'SAFE', parameter: like, rowsCount: rows.length, rows });
        });
    }
});

// ------------------------------------------------------------
// Broken Access Control / IDOR Demonstration Route
// Path: /api/events/idor/:id
// Shows BEFORE (unsafe) vs AFTER (secure) handling of direct object access.
// Toggle: add DEMO_IDOR=true to .env and use ?mode=unsafe to invoke vulnerable logic.
// Demonstration Steps:
// 1. Ensure you have at least one event (note its id and creator_email).
// 2. In .env set DEMO_IDOR=true and restart server.
// 3. UNSAFE: curl "http://localhost:5000/api/events/idor/1?mode=unsafe" (returns event to anyone, leaks creator_email)
// 4. SAFE (unauthorized): curl -H "x-user-email: attacker@example.com" http://localhost:5000/api/events/idor/1  -> 403
// 5. SAFE (authorized): curl -H "x-user-email: actual_creator@example.com" http://localhost:5000/api/events/idor/1 -> event json
// Educational only – never gate sensitive access logic on a client-supplied header without auth.
// ------------------------------------------------------------
router.get('/idor/:id', (req, res) => {
    const demoUnsafe = process.env.DEMO_IDOR === 'true' && req.query.mode === 'unsafe';
    const requestedId = req.params.id;
    const userEmail = (req.header('x-user-email') || '').trim().toLowerCase();

    db.query('SELECT * FROM events WHERE id = ?', [requestedId], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Server Error' });
        if (!rows.length) return res.status(404).json({ error: 'Not found' });
        const event = rows[0];

        if (demoUnsafe) {
            // BEFORE : no ownership check, full record returned to anyone
            return res.json({ mode: 'UNSAFE_IDOR_DEMO', event });
        }

        // AFTER : enforce ownership via header (placeholder for real auth)
        if (!userEmail) {
            return res.status(401).json({ error: 'Missing x-user-email header (demo auth)' });
        }
        if (event.creator_email.toLowerCase() !== userEmail) {
            return res.status(403).json({ error: 'Forbidden: not owner', mode: 'SAFE' });
        }

        // Owner gets the event data (could further minimize fields if needed)
        res.json({ mode: 'SAFE', event });
    });
});

// Get event by id (kept after /search to avoid route shadowing)
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM events WHERE id = ?',
        [req.params.id],
        (err, results) => {
            if (err) return res.status(500).json({error:'Server Error'})
            if (results.length == 0) return res.status(404).json({error:'Not found'})
            res.json(results[0]);
        });
});

// Get event's invitations
router.get('/:id/invitations', (req, res) => {
    db.query('SELECT * FROM invitations WHERE event_id = ?',
        [req.params.id],
        (err, results) => {
            if (err) return res.status(500).json({error:'Server Error'})
            res.json(results);
        });
});

// Get event's feedback
router.get('/:id/feedback', (req, res) => {
    db.query('SELECT * FROM event_feedback WHERE event_id = ?',
        [req.params.id],
        (err, results) => {
            if (err) return res.status(500).json({error:'Server Error'})
            res.json(results);
        });
});


// Export router
module.exports = router;
