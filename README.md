# [Getting Started with Create React App Using Typescript](https://create-react-app.dev/docs/adding-typescript/)

## Initialize Environment

```shell
$ yarn create-react-app styling-with-styled-components --template typescript
$ yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

## Available Scripts

In the project directory, you can run:

```shell
$ yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Typescript-cheatsheets

[go to typescript-cheatsheets](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets)

# [Styled-Component](https://styled-components.com/)

## Install

```shell
$ yarn add styled-components
$ yarn add @types/styled-components --save
$ yarn add babel-plugin-styled-components --save
```

[cf. babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components)

## How to use?

```javascript
import styled from "styled-components";
const Component = styled.div`
  /*We can use CSS like this!*/
  display: inline;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
```

## Reference

- [Basics](https://styled-components.com/docs/basics#adapting-based-on-props)

- [styled components with Typescript](https://styled-components.com/docs/api#typescript)

- [React Style - Styled Components by nomad coder](https://www.youtube.com/playlist?list=PLaxB3I8dENfHCcr9jG7Yo52B2jcSTdY8f)

- [Styled-components Typescript 적용하기 (+Media query)](https://flamingotiger.github.io/style/styled-components-typescript/)

- [Get Started with CSS Grids(React + Styled Components)](https://dev.to/dank_programmer321/get-started-with-css-grids-react-styled-components-59pk)

## vscode-styled-components

download at vscode

# Responsive CSS

## reference

- [media query](https://velog.io/@rjsdnql123/media-query-%EB%A7%9B%EB%B3%B4%EA%B8%B0)

- [Get Started with CSS Grids(React + Styled Components)](https://dev.to/dank_programmer321/get-started-with-css-grids-react-styled-components-59pk)

- [반응형 웹 - 3. 미디어 쿼리 (feat. React, styled-components)](https://eblee-repo.tistory.com/49)

## Media Query?

- Applying different stylesheets to different user devices

## How to use?

```javascript
import styled from "styled-components";
const Component = styled.div`
  display: inline;
  padding: 0;
  margin: 0;

  /*here*/
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
```
