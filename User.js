   // User.js
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
       user: { type: String, required: true, unique: true },
       pass: { type: String, required: true },
   });

   const User = mongoose.model('User', userSchema, 'user'); // Specify the collection name here

   module.exports = User;