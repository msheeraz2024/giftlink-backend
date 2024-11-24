const mongoose = require('mongoose');

// MongoDB URI
const MONGO_URI = "mongodb+srv://OakGDiSccj07pw20:%40Mongo%40DB%402024@cluster0.l8rdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB سے کنیکٹ کرنے کی کوشش کریں
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
