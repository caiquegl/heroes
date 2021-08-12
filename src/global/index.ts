import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');
  * {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  a {
    text-decoration: none;
  }
  body {
    font-family: AtlasGrotesk,sans-serif;
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #F1F4F9;
    color: #666;
  }
  body, html, #root {
    height: 100%;
    position: relative;
  }

  button {
    cursor: pointer;
  }

  p {
    margin: 0;
    bottom: 0;
  }
  
`

