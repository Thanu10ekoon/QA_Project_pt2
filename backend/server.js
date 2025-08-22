// server.js
require('dotenv').config(); // load .env early
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require("./routes/auth");

const eventsRouter = require("./routes/events");

const invitationsRouter = require("./routes/invitations");

const feedbackRouter = require("./routes/feedback");

const app = express();

app.use(cors()); // enable CORS for React
app.use(bodyParser.json()); // parses application/json

// routes
app.use('/api/auth', authRouter);
app.use('/api/events', eventsRouter);
app.use('/api/invitations', invitationsRouter);
app.use('/api/feedback', feedbackRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    if (process.env.DEMO_UNSAFE === 'true') {
        console.log('[DEMO] UNSAFE mode enabled: call /api/events/search?q=...&mode=unsafe to execute vulnerable SQL (for educational demo only)');
    }
    if (process.env.DEMO_IDOR === 'true') {
        console.log('[DEMO] IDOR demo enabled: call /api/events/idor/:id?mode=unsafe for vulnerable access; supply x-user-email header for safe check');
    }
});
