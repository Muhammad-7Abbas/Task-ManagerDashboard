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
  box-sizing: border-box;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    padding: 16px;
    gap: 14px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    gap: 12px;
    border-left-width: 3px;
    border-radius: 8px;

    &:hover {
      transform: translateY(-2px);
    }
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

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    border-radius: 8px;
  }
`

export const StatsNumber = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #F1F1F1;
  line-height: 1;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 2px;
  }
`

export const StatsLabel = styled.div`
  font-size: 13px;
  color: #A0A0B0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`