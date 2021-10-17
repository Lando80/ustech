import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}

body, html {
  background: #eee;
  font-family: 'Inter', sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}

:root {
  --primary-color: #00A5AD;
  --secondary-color: #00787E;

  --text-light: #FFF;
  --text-dark: #1F1F1F;

  --cell-border-color: rgba(0,0,0,.2);
}

@media (min-width: 1400px) {
  html {
    font-size: 110%;
  }
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

.drop-shadow {
  -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
}

`;
