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
`

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #F1F1F1;
  margin: 0;
`

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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

  &:focus-within {
    border-color: #7C5CFC;
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
`