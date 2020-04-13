// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const { listOrgs } = require('./routes/orgs');

// const {
//     showUser
// } = require('./routes/user');

const { authenticate, showUser } = require('./routes/user');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

app.get('/api/v1/orgs', (req, res) => {
    listOrgs()
        .then((result) => res.json(result))
        .catch((error) => res.json({ error }));
});

app.get('/api/v1/user', (req, res) => {
    authenticate('cyborg')
        .then((result) => res.json(result))
        .catch((error) => res.json({ error }));
    showUser('cyborg')
        .then((result) => res.json(result))
        .catch((error) => res.json({ error }));
});

// Add another get here that will invoke the function for user display

app.listen(PORT, () =>
    console.log(`✅  API Server started: http://${HOST}:${PORT}/api/v1/`)
);
