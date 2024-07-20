const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate and create user (example code)
        const newUser = new User({ username, email, password });
        await newUser.save();

        // Send a JSON response
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
