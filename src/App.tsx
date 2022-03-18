import * as React from "react";
import theme from "./theme";
import styled, { ThemeProvider } from "styled-components";
import { TestingComponent, TestCompoAttrs, MyGlobalStyle } from "./App.styles";
import "./App.styles";

// 타입스크립트 버전
const App: React.FC = () => {
  return (
    <div className="App">
      <MyGlobalStyle />
      <ThemeProvider theme={theme}>
        <TestingComponent />
        <TestCompo span={12} />
      </ThemeProvider>
      <TestCompoAttrs />
    </div>
  );
};

interface Props {
  span: number;
}

const TestCompo = styled.button<Props>`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.main};
  float: right;
  width: ${(props) => (props.span ? (props.span / 12) * 100 : "8.33")}%;
  padding: 1rem;
  width: 60%;

  @media only screen and (max-width: 500px) {
    width: 50%;
    float: left;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default App;
