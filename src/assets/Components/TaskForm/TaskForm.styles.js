import styled from 'styled-components'

export const TaskButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7C5CFC, #9B7FFF);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(124, 92, 252, 0.5);
  z-index: 999;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 28px rgba(124, 92, 252, 0.7);
  }

  @media (max-width: 768px) {
    bottom: 24px;
    right: 24px;
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 16px;
    align-items: flex-end;
  }
`

export const ModalBox = styled.div`
  width: 460px;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 16px;
  padding: 32px;
  background-color: #1E1E2E;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  border: 1px solid #2E2E42;
  animation: slideUp 0.3s ease;
  box-sizing: border-box;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 12px 12px 0 0;
    width: 100%;
    max-height: 85vh;
    animation: slideUpMobile 0.3s ease;

    @keyframes slideUpMobile {
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid #2E2E42;
  gap: 12px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding-bottom: 14px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding-bottom: 12px;
  }
`

export const TaskTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #F1F1F1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #A0A0B0;
  margin-bottom: 8px;
  display: block;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`

export const FormModalFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 18px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`

export const TitleField = styled.input`
  width: 100%;
  padding: 12px 16px;
  background-color: #252535;
  border: 1px solid #2E2E42;
  border-radius: 10px;
  color: #F1F1F1;
  font-size: 14px;
  outline: none;
  transition: border 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #7C5CFC;
    box-shadow: 0 0 0 3px rgba(124, 92, 252, 0.15);
  }

  &::placeholder {
    color: #606070;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 16px; /* Prevents iOS zoom */
    border-radius: 8px;
  }
`

export const DescriptionField = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background-color: #252535;
  border: 1px solid #2E2E42;
  border-radius: 10px;
  color: #F1F1F1;
  font-size: 14px;
  outline: none;
  resize: none;
  height: 100px;
  transition: border 0.2s ease;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;

  &:focus {
    border-color: #7C5CFC;
    box-shadow: 0 0 0 3px rgba(124, 92, 252, 0.15);
  }

  &::placeholder {
    color: #606070;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 16px; /* Prevents iOS zoom */
    height: 80px;
    border-radius: 8px;
  }
`

export const PriorityDate = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const PriorityField = styled.select`
  width: 100%;
  padding: 12px 16px;
  background-color: #252535;
  border: 1px solid #2E2E42;
  border-radius: 10px;
  color: #F1F1F1;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  transition: border 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #7C5CFC;
  }

  option {
    background-color: #1E1E2E;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 16px; /* Prevents iOS zoom */
    border-radius: 8px;
  }
`

export const DateField = styled.input`
  width: 100%;
  padding: 12px 16px;
  background-color: #252535;
  border: 1px solid #2E2E42;
  border-radius: 10px;
  color: #F1F1F1;
  font-size: 14px;
  outline: none;
  transition: border 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #7C5CFC;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 16px; /* Prevents iOS zoom */
    border-radius: 8px;
  }
`

export const FormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #2E2E42;

  @media (max-width: 768px) {
    margin-top: 24px;
    padding-top: 16px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    padding-top: 14px;
    gap: 10px;
  }
`

export const CancelButton = styled.button`
  padding: 10px 24px;
  background-color: transparent;
  color: #A0A0B0;
  border: 1px solid #2E2E42;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #252535;
    color: #F1F1F1;
    border-color: #3E3E52;
  }

  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 14px;
    flex: 1;
    border-radius: 8px;
  }
`

export const AddTaskButton = styled.button`
  padding: 10px 24px;
  background: linear-gradient(135deg, #7C5CFC, #9B7FFF);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 14px;
    flex: 1;
    border-radius: 8px;
  }
`

export const ErrorText = styled.p`
  color: #F87171;
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`