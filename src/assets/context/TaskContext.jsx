import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const TaskContext = createContext()

const API = '/api';

export function TaskProvider({ children }) {

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  // ✅ Fetch all tasks from backend when app loads
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(API)
        setTasks(res.data)
      } catch (err) {
        console.log('Error fetching tasks:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchTasks()
  }, [])

  // ✅ Add task to backend
  const addTask = async (newTask) => {
    try {
      const res = await axios.post(API, newTask)
      setTasks(prev => [res.data, ...prev])
    } catch (err) {
      console.log('Error adding task:', err)
    }
  }

  // ✅ Delete task from backend
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`)
      setTasks(prev => prev.filter(task => task._id !== id))
    } catch (err) {
      console.log('Error deleting task:', err)
    }
  }

  // ✅ Toggle complete in backend
  const toggleTask = async (id) => {
    try {
      const res = await axios.put(`${API}/${id}`)
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