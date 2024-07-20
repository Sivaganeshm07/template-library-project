const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config');
const authRoutes = require('./routes/auth');
const templateRoutes = require('./routes/templates');
const path = require('path');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/templates', templateRoutes);

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
