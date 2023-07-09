# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## useState() vs userReducer()
- 언제 사용해야 하나?
  - 너무 많은 state 를 사용해게 되고, 그것을 업데이트 하는게 잘 안될때, 즉, 여러개를 한번에 업데이트 하는게 잘 안될때 userReducer 사용을 고려한다.
  - useState
    - 독립적으로 큰 상태 나 데이터 일때
    - 상태 업데이트가 쉽고, 종류가 몇가지로 제한 된다면 
  - useReducer
    - 만약 개체가 상태이거나 더 복잡한 상태라면
    - 상태와 관련된 데이터를 다루는데 상태의 관련된 조각으로 이어져 있다면
    - input 상태를 다루는데, 복잡한 업데이트가 이루어 진다면
- 다만, useEffect 와 useState 가 결합되면 useReducer 를 다 처리 할 수 있다.
  - useEffect 는 상태값이 업데이트 된 후 처리 되기때문에 최신 상태를 유지한다.

## 리액트 프로젝트 생성
1. npx create-react-app my-app
2. npx create-react-app my-app --template typescript
3. eslint 설정을 위한 추가 설치
   npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint@8.22.0 eslint-config-react-app eslint-plugin-prettier prettier react-app
4. IDE 의 typescript 는 내장 버전을 사용.

