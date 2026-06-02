import { NavLink } from 'react-router-dom'
import { FiGrid, FiList, FiCheckSquare } from 'react-icons/fi'
import { SideBarWrapper, Logo, NavMenu, NavItem } from './Sidebar.styles'

function SideBar() {
  return (
    <SideBarWrapper>
      <Logo>✅ TaskFlow</Logo>
      <NavMenu>

        <NavLink to='/' style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <NavItem $active={isActive}>
              <FiGrid size={18} />
              Dashboard
            </NavItem>
          )}
        </NavLink>

        <NavLink to='/tasks' style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <NavItem $active={isActive}>
              <FiList size={18} />
              My Tasks
            </NavItem>
          )}
        </NavLink>

        <NavLink to='/completed' style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <NavItem $active={isActive}>
              <FiCheckSquare size={18} />
              Completed
            </NavItem>
          )}
        </NavLink>

      </NavMenu>
    </SideBarWrapper>
  )
}

export default SideBar