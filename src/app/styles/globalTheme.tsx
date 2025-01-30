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
    min-height: 100vh; 
    display: flex;
    justify-content: center; 
    align-items: center; 
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

  html, body {
    overflow-x: hidden;
  }
`;
