import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


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

  a {
    color: inherit;
    text-decoration: none;
  }

  button a{
    color: #ffffff;
  }
`;
