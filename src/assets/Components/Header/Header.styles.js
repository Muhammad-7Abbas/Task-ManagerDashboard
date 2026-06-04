import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px;
  background-color: #1A1A24;
  border-bottom: 1px solid #2E2E42;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 12px 12px;
    flex-wrap: wrap;
  }
`

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #F1F1F1;
  margin: 0;
  margin-left: 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 44px; /* Space for hamburger menu */
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 40px;
    order: 1;
  }
`

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-left: auto;
  }

  @media (max-width: 480px) {
    gap: 8px;
    order: 2;
  }
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #252535;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #2E2E42;
  transition: border 0.2s ease;
  position: relative;

  &:focus-within {
    border-color: #7C5CFC;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    order: 3;
    width: 100%;
    margin-top: 8px;
  }
`

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #F1F1F1;
  font-size: 14px;
  width: 200px;

  &::placeholder {
    color: #606070;
  }

  @media (max-width: 768px) {
    width: 140px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
  }
`

export const BellWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #252535;
  }

  @media (max-width: 480px) {
    padding: 4px;
  }
`

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #7C5CFC;
  color: white;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
`

export const SearchResults = styled.div`
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  background-color: #1E1E2E;
  border: 1px solid #2E2E42;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
  overflow: hidden;

  @media (max-width: 768px) {
    top: 40px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    top: 38px;
    left: 0;
    width: 100%;
  }
`

export const SearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  font-size: 13px;
  color: #F1F1F1;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #252535;
  }

  span:last-child {
    color: #7C5CFC;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`