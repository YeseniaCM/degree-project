"use client";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalTheme";
import { useState } from "react";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "@/contexts/ThemeContext";
import Navigation from "./components/navigation/Navigation";

const StyledComponentsRegistry = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
`;

const ContentContainer = styled.div`
 flex: 1;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  width: 100%; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  
  @media screen and (max-width: 768px) {
    height: 100vh; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
  }
`;

export default function Providers(props: React.PropsWithChildren) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const currentTheme = theme === "dark" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <StyledComponentsRegistry>
          <Navigation />
          <ContentContainer>{props.children}</ContentContainer>
        </StyledComponentsRegistry>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
