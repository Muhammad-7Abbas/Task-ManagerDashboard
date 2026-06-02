import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './assets/Components/Header/Header.jsx'
import SideBar from './assets/Components/sidebar/sidebar.jsx'
import GlobalStyles from './assets/styles/GlobalStyles.js'
import TaskForm from './assets/Components/TaskForm/TaskForm.jsx'
import Dashboard from './assets/pages/Dashboard.jsx'
import Tasks from './assets/pages/Tasks.jsx'
import Completed from './assets/pages/Completed.jsx'
import styled from 'styled-components'
import { TaskProvider } from './assets/context/TaskContext.jsx'

const Layout = styled.div`
  display: flex;
`

const MainContent = styled.div`
  margin-left: 240px;
  width: calc(100% - 240px);
  min-height: 100vh;
  background-color: #0F0F13;
  box-sizing: border-box;
`

function App() {
 const [tasks ,setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks(prev => [...prev, { ...newTask, id: Date.now(), completed: false }])
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <TaskProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <SideBar />
          <MainContent>
            <Header />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/completed' element={<Completed />} />
            </Routes>
            <TaskForm onAdd={addTask} />
          </MainContent>
        </Layout>
      </BrowserRouter>
    </TaskProvider>
  )
}

export default App