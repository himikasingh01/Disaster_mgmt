// Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Specify the collection name as 'admin'
const Admin = mongoose.model('Admin', adminSchema, 'admin');

module.exports = Admin;