import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
}
 body {
  margin: 0;
  color: white;
  background-color: ${({ theme }) => theme.body};
  font-family: 'Monserrat','Roboto',sans-serif,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} 


`;

export default GlobalStyle;