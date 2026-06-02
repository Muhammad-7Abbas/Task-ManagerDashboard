import styled from 'styled-components'

export const StatsWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-left: 4px solid ${props => props.$borderColor || '#7C5CFC'};
  border-radius: 10px;
  background-color: #1E1E2E;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
`

export const IconBox = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background-color: ${props => props.$bgColor || '#7C5CFC22'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const StatsNumber = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #F1F1F1;
  line-height: 1;
  margin-bottom: 4px;
`

export const StatsLabel = styled.div`
  font-size: 13px;
  color: #A0A0B0;
`