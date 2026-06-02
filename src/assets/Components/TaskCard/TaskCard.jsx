import { useState } from 'react'
import { FiCalendar, FiTrash2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {
  TaskWrapper,
  SectionHeader,
  SectionTitle,
  ViewAllButton,
  FilterBtn,
  FilterRow,
  TaskCard,
  TaskCheckbox,
  TaskTitle,
  PriorityBadge,
  DueDate,
  DeleteBtn,
  EmptyState,
} from './TaskCard.styles'

const filters = ['All', 'Active', 'Completed', 'High Priority']

function TaskList({ tasks, onDelete, onToggle }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const navigate = useNavigate()


  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'Active') return !task.completed
    if (activeFilter === 'Completed') return task.completed
    if (activeFilter === 'High Priority') return task.priority === 'High'
    return true
  })

  return (
    <TaskWrapper>
      <SectionHeader>
        <SectionTitle>Recent Tasks</SectionTitle>
        <ViewAllButton onClick={() => navigate('/tasks')}>
          View All
        </ViewAllButton>
      </SectionHeader>

      <FilterRow>
        {filters.map(filter => (
          <FilterBtn
            key={filter}
            $isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterBtn>
        ))}
      </FilterRow>

      {filteredTasks.length === 0 ? (
        <EmptyState>✅ No tasks found</EmptyState>
      ) : (
        filteredTasks.map(task => (
          <TaskCard key={task._id}>
            <TaskCheckbox
              type='checkbox'
              checked={task.completed}
              onChange={() => onToggle(task._id)}
            />
            <TaskTitle $isCompleted={task.completed}>
              {task.title}
            </TaskTitle>
            <PriorityBadge $priority={task.priority}>
              {task.priority}
            </PriorityBadge>
            <DueDate>
              <FiCalendar size={12} />
              {task.dueDate}
            </DueDate>
            <DeleteBtn onClick={() => onDelete(task._id)}>
              <FiTrash2 size={16} />
            </DeleteBtn>
          </TaskCard>
        ))
      )}
    </TaskWrapper>
  )
}

export default TaskList