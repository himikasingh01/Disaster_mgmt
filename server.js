const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User'); // Import the User model
const Admin = require('./Admin'); // Import the Admin model
const resourceSchema = require('./Resource'); // Import the Resource schema from the same directory

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB for Logindb
const MONGODB_URI = 'mongodb://localhost:27017/Logindb';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected to Logindb'))
    .catch(err => console.error('MongoDB connection error for Logindb:', err));

// Define models using the default connection
const ResourceModel = mongoose.model('Resource', resourceSchema); // Use the schema here

// Define a simple route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Example of a user login route
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('Received credentials:', { username, password }); // Log received credentials

    try {
        const user = await User.findOne({ user: username });

        if (user && user.pass === password) {
            return res.json({ success: true, message: 'User login successful!' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid user credentials' });
        }
    } catch (error) {
        console.error('Error during user login:', error);
        return res.status(500).json({ success: false, message: 'An error occurred' });
    }
});

// Example of an admin login route
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('Received admin credentials:', { username, password }); // Log received credentials

    try {
        const admin = await Admin.findOne({ username });

        if (admin && admin.password === password) {
            return res.json({ success: true, message: 'Admin login successful!' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        return res.status(500).json({ success: false, message: 'An error occurred' });
    }
});

// Update the Express.js backend route
app.get('/api/resources/nearby', async (req, res) => {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ error: "Latitude and Longitude are required" });
    }

    try {
        const resources = await ResourceModel.find({
            Latitude1: { $lte: lat },
            Latitude2: { $gte: lat },
            Longitude1: { $lte: lng },
            Longitude2: { $gte: lng }
        });
        res.json(resources); // Return resources as JSON
    } catch (error) {
        res.status(500).json({ error: "Error fetching resources" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
