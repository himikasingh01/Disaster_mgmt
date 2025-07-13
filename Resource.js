const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Longitude1: { type: Number, required: true },
    Longitude2: { type: Number, required: true },
    Latitude1: { type: Number, required: true },
    Latitude2: { type: Number, required: true },
    resource: { type: String, required: true }
});

// Export the schema
module.exports = resourceSchema;