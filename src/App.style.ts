import { createGlobalStyle } from 'styled-components';

const GlobalAppStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  
  html {
    font-size: 14px;
    font-family: 'Lato', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
  }
`;

export default GlobalAppStyle;
