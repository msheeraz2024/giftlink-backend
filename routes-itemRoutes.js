const express = require('express');
const Item = require('../models/itemModel');
const router = express.Router();

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new item
router.post('/items', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a single item by ID
router.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an item by ID
router.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an item by ID
router.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
