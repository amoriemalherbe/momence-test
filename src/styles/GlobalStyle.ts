import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    background-color: #fff;
    color: #333;
    line-height: 1.6;
    padding: 20px;
  }
`;
