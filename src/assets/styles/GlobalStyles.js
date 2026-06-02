import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    background-color: #0F0F13;
    font-family: 'Inter', sans-serif;
    color: #F1F1F1;
    line-height: 1.6;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #1A1A24;
  }
  ::-webkit-scrollbar-thumb {
    background: #7C5CFC;
    border-radius: 999px;
  }
`

export default GlobalStyles