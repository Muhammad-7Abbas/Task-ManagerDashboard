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
    -webkit-text-size-adjust: 100%; /* Prevent iOS font scaling */
  }

  body {
    background-color: #0F0F13;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #F1F1F1;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  /* Mobile tap highlight */
  * {
    -webkit-tap-highlight-color: transparent;
  }

  /* Prevent text selection on UI elements */
  button, .no-select {
    user-select: none;
  }
`

export default GlobalStyles