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

// Local development: /api/tasks
app.use('/api/tasks', taskRoutes);

// Vercel serverless: /tasks (without /api prefix)
app.use('/tasks', taskRoutes);

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

// Export for Vercel serverless
module.exports = app;