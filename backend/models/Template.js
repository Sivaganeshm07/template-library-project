const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    format: { type: String, required: true },
    file: { type: String, required: true } // Assuming file is stored as a URL or path
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
