import * as React from "react";
import { TestCompoTheme } from "../App.styles";
type testProps = {
  name: string;
};

//const Greetings: React.FC 이렇게 쓰기도하는데 권장하지 않는 개발자도 있다구 함!
//defaultProps가 작동이 안되어서 타입지정할 때랑 app쪽에서 props 넘길 때 직접 써야하는 경우가 있다구함...!(자세히는 모르겟네요,,,ㅠㅠ)
function Testing({ name }: testProps) {
  return <div>Hello, {name}</div>;
}

Testing.defaultProps = {
  name: "세희",
};

export default Testing;
