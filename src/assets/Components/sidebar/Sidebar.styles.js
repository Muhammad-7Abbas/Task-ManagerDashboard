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
  z-index: 200;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    width: 260px;
    box-shadow: ${props => props.$isOpen ? '4px 0 20px rgba(0,0,0,0.5)' : 'none'};
  }
`

export const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #7C5CFC;
  padding: 28px 24px;
  border-bottom: 1px solid #2E2E42;
  margin-bottom: 12px;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    padding: 24px 20px;
    font-size: 17px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
    font-size: 16px;
  }
`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 12px;

  @media (max-width: 480px) {
    padding: 0 10px;
    gap: 6px;
  }
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

  @media (max-width: 768px) {
    padding: 14px 18px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 14px;
    gap: 10px;
  }
`

export const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 150;
    backdrop-filter: blur(2px);
  }
`

export const MenuButton = styled.button`
  display: none;
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 250;
  background: #1A1A24;
  color: #F1F1F1;
  border: 1px solid #2E2E42;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #2A2A3E;
    border-color: #7C5CFC;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    padding: 8px;
    font-size: 18px;
  }
`

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  color: #A0A0B0;
  border: none;
  font-size: 22px;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #F1F1F1;
  }

  @media (max-width: 768px) {
    display: block;
  }
`