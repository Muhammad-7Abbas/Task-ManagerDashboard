import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiGrid, FiList, FiCheckSquare, FiMenu, FiX } from 'react-icons/fi'
import { SideBarWrapper, Logo, NavMenu, NavItem, Overlay, MenuButton, CloseButton } from './Sidebar.styles'

function SideBar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <>
      <MenuButton onClick={() => setIsOpen(true)}>
        <FiMenu size={22} />
      </MenuButton>

      <Overlay $isOpen={isOpen} onClick={handleClose} />

      <SideBarWrapper $isOpen={isOpen}>
        <CloseButton onClick={handleClose}>
          <FiX size={22} />
        </CloseButton>
        
        <Logo>✅ TaskFlow</Logo>
        
        <NavMenu>
          <NavLink to='/' style={{ textDecoration: 'none' }} onClick={handleClose}>
            {({ isActive }) => (
              <NavItem $active={isActive}>
                <FiGrid size={18} />
                Dashboard
              </NavItem>
            )}
          </NavLink>

          <NavLink to='/tasks' style={{ textDecoration: 'none' }} onClick={handleClose}>
            {({ isActive }) => (
              <NavItem $active={isActive}>
                <FiList size={18} />
                My Tasks
              </NavItem>
            )}
          </NavLink>

          <NavLink to='/completed' style={{ textDecoration: 'none' }} onClick={handleClose}>
            {({ isActive }) => (
              <NavItem $active={isActive}>
                <FiCheckSquare size={18} />
                Completed
              </NavItem>
            )}
          </NavLink>
        </NavMenu>
      </SideBarWrapper>
    </>
  )
}

export default SideBar