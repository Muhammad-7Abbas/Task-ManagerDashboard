require('dotenv').config({ path: './.env' });

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://admin:Admin1234@cluster0.lmg8dpg.mongodb.net/taskmanager';

// Connect to MongoDB (cached for serverless)
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: String,
  dueDate: String,
  completed: { type: Boolean, default: false }
}, { timestamps: true });

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

module.exports = async (req, res) => {
  await connectDB();
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const tasks = await Task.find().sort({ createdAt: -1 });
      return res.json(tasks);
    }
    
    if (req.method === 'POST') {
      const task = new Task(req.body);
      const saved = await task.save();
      return res.status(201).json(saved);
    }
    
    if (req.method === 'PUT') {
      const { id } = req.query;
      const task = await Task.findById(id);
      task.completed = !task.completed;
      const updated = await task.save();
      return res.json(updated);
    }
    
    if (req.method === 'DELETE') {
      const { id } = req.query;
      await Task.findByIdAndDelete(id);
      return res.json({ message: 'Task deleted!' });
    }
    
    res.status(405).json({ message: 'Method not allowed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
