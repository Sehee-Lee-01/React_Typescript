// styled.d.ts => 확장해서 사용
//색상 테마를 정할 수 있다. 물론 margin, 글꼴크기, radius 등도 설정가능.
//CSS를 위한 리덕스 같은 것
//나이트 모드, 정상모드 등 만들 때 적용

import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: "red",
    secondary: "green",
    third: "purple",
  },
};

export default theme;
