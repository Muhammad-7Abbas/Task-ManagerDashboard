import styled from 'styled-components'

export const TaskWrapper = styled.div`
  width: 100%;
  background-color: #1E1E2E;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #F1F1F1;
  margin: 0;
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

  &:hover {
    background-color: #9B7FFF;
  }
`

export const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
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

  &:hover {
    transform: translateX(4px);
  }
`

export const TaskCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #7C5CFC;
`

export const TaskTitle = styled.span`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.$isCompleted ? '#606070' : '#F1F1F1'};
  text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
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
`

export const DueDate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #A0A0B0;
`

export const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #F87171;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: #ff4444;
  }
`

export const EmptyState = styled.div`
  text-align: center;
  font-size: 14px;
  color: #606070;
  padding: 40px 0;
`