import styled from 'styled-components'

export const ProgressWrapper = styled.div`
  width: 100%;
  background-color: #1E1E2E;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    border-radius: 8px;
  }
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 10px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #F1F1F1;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const PercentageText = styled.div`
  color: #7C5CFC;
  font-weight: 700;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const ProgressTrack = styled.div`
  width: 100%;
  background-color: #2E2E42;
  height: 10px;
  border-radius: 999px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    height: 8px;
    margin-bottom: 12px;
  }
`

export const ProgressFill = styled.div`
  width: ${props => props.$percentage}%;
  height: 10px;
  border-radius: 999px;
  background-color: #7C5CFC;
  transition: width 0.4s ease;

  @media (max-width: 480px) {
    height: 8px;
  }
`

export const BarStats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 6px;
  }
`

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #A0A0B0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    justify-content: space-between;
  }
`