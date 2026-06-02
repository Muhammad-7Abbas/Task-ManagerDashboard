import styled from 'styled-components'
import TaskList from '../Components/TaskCard/TaskCard.jsx'
import { useTasks } from '../context/TaskContext.jsx'

const PageContent = styled.div`
  padding: 28px;
`

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #F1F1F1;
  margin-bottom: 24px;
`

function Completed() {

  // ✅ Get from context — no more props needed!
  const { tasks, deleteTask, toggleTask } = useTasks()

  // Only show completed tasks
  const completedTasks = tasks.filter(t => t.completed)

  return (
    <PageContent>
      <PageTitle>Completed Tasks</PageTitle>
      <TaskList
        tasks={completedTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </PageContent>
  )
}

export default Completed