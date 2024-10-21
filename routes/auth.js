const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register user
router.post('/register', async (req, res) => {
    // Code to register user
});

// Login user
router.post('/login', async (req, res) => {
    // Code to authenticate user
});

module.exports = router;
