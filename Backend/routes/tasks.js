const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 })
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// POST create task
router.post('/', async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      dueDate: req.body.dueDate,
    })
    const savedTask = await task.save()
    res.status(201).json(savedTask)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// PUT toggle complete
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    task.completed = !task.completed
    const updatedTask = await task.save()
    res.json(updatedTask)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// DELETE task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: 'Task deleted!' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


module.exports = router