import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/index";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const StyleProvider = ({ children }: PropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
