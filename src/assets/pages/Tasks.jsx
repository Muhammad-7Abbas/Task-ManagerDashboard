import styled from 'styled-components'
import TaskList from '../Components/TaskCard/TaskCard.jsx'
import { useTasks } from '../context/TaskContext.jsx'
import { useLocation } from 'react-router-dom'

const PageContent = styled.div`
  padding: 28px;
`

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #F1F1F1;
  margin-bottom: 24px;
`

const SearchBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #7C5CFC22;
  color: #7C5CFC;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background-color: #7C5CFC33;
  }
`

function Tasks() {
  const { tasks, deleteTask, toggleTask } = useTasks()
  const location = useLocation()

  // ✅ Get search query from navigation state
  const searchQuery = location.state?.searchQuery || ''

  // ✅ Filter tasks by search query
  const filteredTasks = searchQuery
    ? tasks.filter(t =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tasks

  return (
    <PageContent>
      <PageTitle>My Tasks</PageTitle>

      {/* Show search badge if searching */}
      {searchQuery && (
        <SearchBadge>
          🔍 Results for: "{searchQuery}"
        </SearchBadge>
      )}

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </PageContent>
  )
}

export default Tasks