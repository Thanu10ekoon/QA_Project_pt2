// server.js (enhanced security & load test endpoint)
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss');

const authRouter = require('./routes/auth');
const eventsRouter = require('./routes/events');
const invitationsRouter = require('./routes/invitations');
const feedbackRouter = require('./routes/feedback');
const db = require('./db');

const app = express();

// Security middlewares
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json({ limit: '200kb' }));

// Simple body sanitization (string fields)
app.use((req, _res, next) => {
    if (req.body && typeof req.body === 'object') {
        Object.keys(req.body).forEach(k => {
            if (typeof req.body[k] === 'string') {
                req.body[k] = xss(req.body[k]);
            }
        });
    }
    next();
});

// Rate limit auth endpoints
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false
});
app.use('/api/auth', authLimiter);

// Routes
app.use('/api/auth', authRouter);
app.use('/api/events', eventsRouter);
app.use('/api/invitations', invitationsRouter);
app.use('/api/feedback', feedbackRouter);

// Lightweight public list for load testing (limited fields & rows)
app.get('/api/events-public', (req, res) => {
    db.query('SELECT id, title, event_date FROM events ORDER BY id DESC LIMIT 50', (err, rows) => {
        if (err) return res.status(500).json({ error: 'Server Error' });
        res.json(rows);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started on http://localhost:' + PORT);
});
