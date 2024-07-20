const express = require('express');
const router = express.Router();
const Template = require('../models/Template');

// Get all templates
router.get('/', async (req, res) => {
    try {
        const templates = await Template.find(); // Fetch templates from the database
        res.json(templates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
