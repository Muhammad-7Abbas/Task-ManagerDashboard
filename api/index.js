require('dotenv').config({ path: './.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://admin:Admin1234@cluster0.lmg8dpg.mongodb.net/taskmanager';
const PORT = process.env.PORT || 5000;

const taskRoutes = require('./routes/tasks');

// Mount routes at root — Vercel strips /api when calling the function
app.use('/tasks', taskRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API is running!' });
});

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected!');
  })
  .catch(err => {
    console.log('❌ MongoDB connection error:', err);
  });

// Local development server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;