import React from "react";
import styled, {
  createGlobalStyle,
  keyframes,
  css,
  ThemeProvider,
} from "styled-components";
import theme from "./theme";

//SASS의 mixin과 비슷(스타일 그룹화하고 싶을 때, 다른 방법으로는 컴포넌트 확장도 있음.)
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

//전체 컴포넌트 설정
const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin:0;
  }
`;

//CSS가 들어있는 컴포넌트 생성(클래스 명도 안써도 되고 또한 props도 둘 수 있다.)

const Card = styled.div`
background-color: : white;

`;

const Input = styled.input.attrs({
  required: true,
})`
  border: none;
  ${awesomeCard};
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
  ${Card}:last-child {
    background-color: blue;
  }
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  /*SASS랑 비슷한 형식*/
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "red" : "green")};
  /*pops를 자유롭게 다룰 수 있다. prop로 스타일을 변경할 수 있다.*/
  ${(props) => {
    if (props.danger) {
      return `animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
  }};
`;

//컴포넌트 확장(여러 태그 기능 사용 가능!)
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

const rotation = keyframes`
from{
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Button1 = styled.button`
  border-radius: 30px;
  padding: 15px;
  background-color: ${(props) => props.theme.successColor};
`;

const Form = () => (
  <Card>
    <Button1>Hello</Button1>
  </Card>
);

function App() {
  return (
    <Container>
      <Button>hello</Button>
      <Button danger rotationTime={5}>
        hello
      </Button>
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
      <Input placeholder="hello" />
      <Anchor href="http://google.com">Go to Google</Anchor>
    </Container>
  );
}

export default App;
