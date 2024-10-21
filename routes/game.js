const express = require('express');
const router = express.Router();
const Session = require('../models/session');

// Create a game session
router.post('/create-session', (req, res) => {
    // Code to create a new game session
});

// Join a session
router.post('/join-session', (req, res) => {
    // Code to join an existing session
});

module.exports = router;
