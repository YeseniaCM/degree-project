"use client";

import styled, { ThemeContext, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalTheme";
import { useState } from "react";
import { lightTheme, darkTheme } from "./styles/theme";
import { Navigation } from "./components/navigation/Navigation";

const StyledComponentsRegistry = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

export default function Providers(props: React.PropsWithChildren) {
  const [theme, setTheme] = useState("light");
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle />
          <Navigation />
          {props.children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </ThemeContext.Provider>
  );
}
