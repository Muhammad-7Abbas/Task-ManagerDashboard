import styled from 'styled-components'

export const SideBarWrapper = styled.div`
  min-height: 100vh;
  width: 240px;
  background-color: #1A1A24;
  border-right: 1px solid #2E2E42;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
`

export const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #7C5CFC;
  padding: 28px 24px;
  border-bottom: 1px solid #2E2E42;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 12px;
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  list-style: none;
  color: ${({ $active }) => $active ? '#F1F1F1' : '#A0A0B0'};
  background-color: ${({ $active }) => $active ? '#7C5CFC22' : 'transparent'};
  border-left: ${({ $active }) => $active ? '3px solid #7C5CFC' : '3px solid transparent'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2A2A3E;
    color: #F1F1F1;
  }
`