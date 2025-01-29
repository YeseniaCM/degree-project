import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
      margin: 0;
      box-sizing: border-box;
  }

  body {
      background: ${({ theme }) => theme.bg};   
      color: ${({ theme }) => theme.text};
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.6px;
  }
  a {
    color: ${({ theme }) => theme.text};
        text-decoration: none;
  }


  @media (prefers-color-scheme: dark) {
    :root {
      --background: ${({ theme }) => theme.bg};
      --foreground: ${({ theme }) => theme.text};
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --background: ${({ theme }) => theme.bg};
      --foreground: ${({ theme }) => theme.text};
    }
  }
  /*
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    color: var(--foreground);
    background: var(--background);
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  } */
`;
