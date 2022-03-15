import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    min-height: 100vh;   
  }
  
  body {
    background-color: ${props => props.theme.background};
    font-size: 16px; 
    overflow-x: hidden;   
  }  

  a {
    text-decoration: none;
  }
`
export default GlobalStyles
