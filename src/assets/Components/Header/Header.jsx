import { FiBell, FiSearch } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTasks } from '../../context/TaskContext.jsx'
import { useState } from 'react'
import {
  HeaderWrapper,
  SearchBar,
  SearchInput,
  IconGroup,
  Avatar,
  PageTitle,
  BellWrapper,
  SearchResults,
  SearchItem
} from './Header.styles'

const pageTitles = {
  '/': 'Dashboard',
  '/tasks': 'My Tasks',
  '/completed': 'Completed Tasks'
}

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = pageTitles[location.pathname] || 'Dashboard'
  const { tasks } = useTasks()
  const [query, setQuery] = useState('')

  const results = query.trim()
    ? tasks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()))
    : []

  // ✅ On Enter key — go to tasks page with search
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate('/tasks', { state: { searchQuery: query } })
      setQuery('')
    }
  }

  // ✅ On click search result — go to tasks page
  const handleResultClick = (taskTitle) => {
    navigate('/tasks', { state: { searchQuery: taskTitle } })
    setQuery('')
  }

  return (
    <HeaderWrapper>
      <PageTitle>{title}</PageTitle>
      <IconGroup>

        <div style={{ position: 'relative' }}>
          <SearchBar>
            <FiSearch
              color="#606070"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (query.trim()) {
                  navigate('/tasks', { state: { searchQuery: query } })
                  setQuery('')
                }
              }}
            />
            <SearchInput
              type="text"
              placeholder="Search tasks..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </SearchBar>

          {/* Dropdown Results */}
          {results.length > 0 && (
            <SearchResults>
              {results.map(task => (
                <SearchItem
                  key={task.id}
                  onClick={() => handleResultClick(task.title)}
                >
                  <span>{task.title}</span>
                  <span>{task.priority}</span>
                </SearchItem>
              ))}
            </SearchResults>
          )}

          {query.trim() && results.length === 0 && (
            <SearchResults>
              <SearchItem>No tasks found</SearchItem>
            </SearchResults>
          )}
        </div>

        <BellWrapper>
          <FiBell size={20} color="#A0A0B0" />
        </BellWrapper>
        <Avatar>A</Avatar>

      </IconGroup>
    </HeaderWrapper>
  )
}

export default Header