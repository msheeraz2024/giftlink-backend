const mongoose = require('mongoose');

// Define the schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String }
});

// Create the model
const Item = mongoose.model('Item', itemSchema);

// Export the model
module.exports = Item;
