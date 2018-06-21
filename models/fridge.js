const mongoose = require('mongoose');

// Define schema
const FridgeSchema = mongoose.Schema({
    name: String,
    category: String,
    Freshness: Number
});

// Initialize the model
const Fridge = mongoose.model('Fridge', FridgeSchema);

module.exports = Fridge;