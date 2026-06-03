import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const TaskContext = createContext()

// Use full URL for production
const API_URL = 'https://task-manager-dashboard-seven.vercel.app/api/tasks';

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(API_URL)
        setTasks(res.data)
      } catch (err) {
        console.log('Error fetching tasks:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchTasks()
  }, [])

  const addTask = async (newTask) => {
    try {
      const res = await axios.post(API_URL, newTask)
      setTasks(prev => [res.data, ...prev])
    } catch (err) {
      console.log('Error adding task:', err)
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setTasks(prev => prev.filter(task => task._id !== id))
    } catch (err) {
      console.log('Error deleting task:', err)
    }
  }

  const toggleTask = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`)
      setTasks(prev => prev.map(task =>
        task._id === id ? res.data : task
      ))
    } catch (err) {
      console.log('Error updating task:', err)
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, loading, addTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}