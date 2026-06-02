import styled from 'styled-components'

export const ProgressWrapper = styled.div`
  width: 100%;
  background-color: #1E1E2E;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #F1F1F1;
`

export const PercentageText = styled.div`
  color: #7C5CFC;
  font-weight: 700;
  font-size: 16px;
`

export const ProgressTrack = styled.div`
  width: 100%;
  background-color: #2E2E42;
  height: 10px;
  border-radius: 999px;
  margin-bottom: 16px;
`

export const ProgressFill = styled.div`
  width: ${props => props.$percentage}%;
  height: 10px;
  border-radius: 999px;
  background-color: #7C5CFC;
  transition: width 0.4s ease;
`

export const BarStats = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #A0A0B0;
`