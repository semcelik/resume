import { createGlobalStyle } from 'styled-components';

const GlobalThemeStyle = createGlobalStyle`
  html {
    font-size: 14px;
    font-family: 'Lato', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    transition: background-color 0.3s ease-out;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalThemeStyle;
