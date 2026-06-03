import styled from 'styled-components'

export const TaskWrapper = styled.div`
  width: 100%;
  background-color: #1E1E2E;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    border-radius: 8px;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 12px;

  @media (max-width: 480px) {
    margin-bottom: 14px;
    flex-wrap: wrap;
  }
`

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #F1F1F1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const ViewAllButton = styled.button`
  padding: 6px 16px;
  background-color: #7C5CFC;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #9B7FFF;
  }

  @media (max-width: 480px) {
    padding: 5px 12px;
    font-size: 12px;
  }
`

export const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    margin-bottom: 14px;
    gap: 6px;
  }
`

export const FilterBtn = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  background-color: ${props => props.$isActive ? '#7C5CFC' : '#252535'};
  color: ${props => props.$isActive ? 'white' : '#A0A0B0'};

  &:hover {
    background-color: #7C5CFC;
    color: white;
  }

  @media (max-width: 480px) {
    padding: 5px 12px;
    font-size: 12px;
  }
`

export const TaskCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background-color: #252535;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.2s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    padding: 12px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px 10px;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 8px;

    &:hover {
      transform: translateX(2px);
    }
  }
`

export const TaskCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #7C5CFC;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`

export const TaskTitle = styled.span`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.$isCompleted ? '#606070' : '#F1F1F1'};
  text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
  word-break: break-word;
  min-width: 0;

  @media (max-width: 480px) {
    font-size: 13px;
    width: 100%;
    order: 2;
  }
`

export const PriorityBadge = styled.span`
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  background-color: ${props =>
    props.$priority === 'High' ? '#F8717122' :
    props.$priority === 'Medium' ? '#FACC1522' :
    '#4ADE8022'};
  color: ${props =>
    props.$priority === 'High' ? '#F87171' :
    props.$priority === 'Medium' ? '#FACC15' :
    '#4ADE80'};
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 2px 8px;
    font-size: 10px;
    order: 3;
  }
`

export const DueDate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #A0A0B0;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 11px;
    order: 4;
  }
`

export const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #F87171;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: #ff4444;
  }

  @media (max-width: 480px) {
    order: 5;
    padding: 4px;
  }
`

export const EmptyState = styled.div`
  text-align: center;
  font-size: 14px;
  color: #606070;
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 32px 0;
  }

  @media (max-width: 480px) {
    padding: 24px 0;
    font-size: 13px;
  }
`