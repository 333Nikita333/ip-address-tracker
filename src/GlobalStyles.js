import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }
  
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  button,
  select {
    font: inherit;
  }
  
  button {
    background-color: "#EBD8FF";
  }
`;

export default GlobalStyle;
