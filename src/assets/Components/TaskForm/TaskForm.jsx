import { useState } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import { useTasks } from '../../context/TaskContext.jsx'  
import {
  TaskButton,
  ModalOverlay,
  ModalBox,
  ModalHeader,
  TaskTitle,
  FormModalFields,
  TitleField,
  DescriptionField,
  PriorityDate,
  PriorityField,
  DateField,
  FormButton,
  CancelButton,
  AddTaskButton,
  ErrorText,
  Label
} from './TaskForm.styles'

function TaskForm() {  // ← remove onAdd prop

  const { addTask } = useTasks()  // ← get addTask from context

  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [dueDate, setDueDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!title.trim()) {
      setError('Title is required!')
      return
    }
    addTask({ title, description, priority, dueDate })  // ← use addTask
    setIsOpen(false)
    setTitle('')
    setDescription('')
    setPriority('Medium')
    setDueDate('')
    setError('')
  }

  const handleClose = () => {
    setIsOpen(false)
    setTitle('')
    setDescription('')
    setPriority('Medium')
    setDueDate('')
    setError('')
  }

  return (
    <>
      <TaskButton onClick={() => setIsOpen(true)}>
        <FiPlus size={24} color="white" />
      </TaskButton>

      {isOpen && (
        <ModalOverlay onClick={handleClose}>
          <ModalBox onClick={e => e.stopPropagation()}>

            <ModalHeader>
              <TaskTitle>Add New Task</TaskTitle>
              <CancelButton onClick={handleClose}>
                <FiX size={18} />
              </CancelButton>
            </ModalHeader>

            <FormModalFields>
              <div>
                <Label>Task Title</Label>
                <TitleField
                  type="text"
                  placeholder="Enter task title..."
                  value={title}
                  onChange={e => {
                    setTitle(e.target.value)
                    setError('')
                  }}
                />
                {error && <ErrorText>{error}</ErrorText>}
              </div>

              <div>
                <Label>Description</Label>
                <DescriptionField
                  placeholder="Enter description..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>

              <PriorityDate>
                <div style={{ flex: 1 }}>
                  <Label>Priority</Label>
                  <PriorityField
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </PriorityField>
                </div>
                <div style={{ flex: 1 }}>
                  <Label>Due Date</Label>
                  <DateField
                    type="date"
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}
                  />
                </div>
              </PriorityDate>
            </FormModalFields>

            <FormButton>
              <CancelButton onClick={handleClose}>Cancel</CancelButton>
              <AddTaskButton onClick={handleSubmit}>Add Task</AddTaskButton>
            </FormButton>

          </ModalBox>
        </ModalOverlay>
      )}
    </>
  )
}

export default TaskForm