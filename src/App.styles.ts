import styled, { createGlobalStyle, css } from "styled-components";
import Testing from "./components/newComponents";

// [1] CSS가 들어있는 컴포넌트 생성
// 클래스 명도 안써도 되고 저렇게 const 선언만 하면 됨!
// 생성1:
// styled 다음에 html 태그요소
// ``(백틱)으로 CSS 요소 적용
export const TestCompoChild = styled.div`
  background-color: gainsboro;
  border: 1px;
  width: 3em;
  height: 5em;
`;
/*
export const TestCompoChild = styled(Component)`
  background-color: gainsboro;
  border: 1px;
  width: 3em;
  height: 5em;
`;
*/

// 생성2
//attrs: 속성 지정
//
export const TestCompoAttrs = styled.input.attrs({
  required: true,
})`
  border: 1px;
  color: blueviolet;
`;

// 생성3
// SASS
// nesting
// child component가 있는 경우 지정해서 속성 바꿔줄 수도 있음.
// 여기선 testCompoChild이 testCompoParent 안에 여러개 있는 경우 마지막 testCompoChild에 적용
export const TestCompoParent = styled.div`
  height: 30%;
  width: 50%;
  background-color: yellow;
  ${TestCompoChild}:last-child {
    background-color: blue;
  }
`;

// 생성4
//porps를 자유롭게 다룰 수 있다. prop로 스타일을 변경할 수 있다.
// 여기서는 theme(아래에 자세히 나옴당)가 props
interface testCompoProps {
  isTest: Boolean;
}

export const TestCompoProps1 = styled.div<testCompoProps>`
  background-color: ${(props) =>
    props.isTest ? props.theme.colors.main : props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.borderRadius};
`;

// 생성5
//SASS랑 비슷한 형식
export const TestCompoSass = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

// [2] 컴포넌트 스타일
// [2-1]기본틀(테마):theme
// 1. 테마 생성(아래 파일 참고)
/*
- style.s.ts : 타입스크립트 성격에 맞게 테마도 인터페이스 생성
- theme.ts : 생성한 인터페이스로 테마 생성
*/

//2. 테마 적용 예시
//props로 원하는 테마를 받아서 지정(App.tsx에서 확인)
export const TestCompoTheme = styled.button`
  border-radius: 30px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.third};
  color: white;
`;

//[2-2]스타일 그룹화? 스타일을 일일이 지정하지 않고
// 자주 쓰는 거 한꺼번에 적용하고 싶다!

//0. 모든 컴포넌트에 공통된 스타일 적용: createGlobalStyle

export const MyGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

//1. css 사용(SASS의 mixin과 비슷)
// 1) 예시
const GroupStyle = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  //props도 다루는 거 가능!
  border: 1px solid ${(props) => props.theme.borderRadius};
`;

// 2) css 스타일 적용 예시
export const TestCompoCss = styled.input.attrs({
  required: true,
})`
  border: none;
  ${GroupStyle};
`;

//2. 컴포넌트 확장
// 1) 기본 컴포넌트 생성
export const TestCompoMake = styled.button`
  border-radius: 30px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.main};
`;

// 2) 컴포넌트 확장
// testCompoMake을 상속하면서 태그 a의 특성도 가짐(확장)
export const TestCompoExt = styled(TestCompoMake.withComponent("a"))`
  text-decoration: none;
`;

// 3) 함수형 컴포넌트
export const TestingComponent = styled(Testing)`
  border: 10px;
  border-color: blue;
`;
