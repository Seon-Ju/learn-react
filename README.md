# 📚 learn-react
<img src = "https://img.shields.io/badge/Project%20Type-Single%20Project-yellow?style=flat-square"> <img src = "https://img.shields.io/badge/Tools-VSCode-brightgreen?style=flat-square&logo=VisualStudioCode"> <img src = "https://img.shields.io/badge/Language-JavaScript-orange?style=flat-square&logo=JavaScript"> <img src = "https://img.shields.io/badge/Language-HTML-orange?style=flat-square&logo=HTML5"> <img src = "https://img.shields.io/badge/Framework-React-red?style=flat-square&logo=React">

> 제로초님의 '웹 게임을 만들며 배우는 React' 강의를 수강하며 공부한 내용입니다.

<br>

## ⚙️ Installation
```sh
npm install
```
<br>

## ✒ Development Environment
```sh
npm i react react-dom
npm i -D webpack webpack-cli
npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
```
<br>

## 🏃‍♂️ Run
```sh
npx webpack
```
```sh
npm run dev
```
<br>


## 🖥 Preview
### 1. Gugudan | 구구단 웹게임
유저는 랜덤으로 주어지는 구구단 문제를 풀 수 있습니다. 정답을 맞추면 새로운 문제가 주어집니다.<br><br>
<img src = "https://user-images.githubusercontent.com/48851230/144862028-08d7111c-f8fe-4214-9150-898aebbcad25.gif" height="80px"><br><br>
### 2. WordChain | 끝말잇기 웹게임
유저는 단어 '리액트'로 시작하는 끝말잇기 게임을 할 수 있습니다.<br><br>
<img src = "https://user-images.githubusercontent.com/48851230/144863283-1bbbd7d4-955a-47e2-973e-ef86c0e450f6.gif" height="80px"><br><br>
### 3. NumberBaseball | 숫자야구 웹게임
유저는 10회까지 입력을 시도할 수 있습니다. 10회 안에 정답을 맞추면 홈런, 시도횟수가 10회를 초과하면 실패입니다.<br><br>
<img src = "https://user-images.githubusercontent.com/48851230/144857999-1b15551e-b83a-4db8-9352-dd043f7e7cf3.gif" height="350px"> <img src = "https://user-images.githubusercontent.com/48851230/144860587-d307adb0-12f8-4e12-9ea1-662602e8b535.gif" height="350px"><br><br>
### 4. ResponseCheck | 반응속도체크 웹게임
하늘색 화면일 때 화면을 클릭하면 빨간색 화면의 준비 상태가 됩니다. 초단위의 랜덤 시간이 지나면 초록색 화면으로 바뀌고, 그 때 화면을 클릭하면 유저의 반응속도가 체크됩니다. 속도 체크를 여러 번 하면 평균 속도가 계산되고, 리셋 버튼을 누르면 쌓인 속도 정보가 초기화됩니다.<br><br>
<img src = "https://user-images.githubusercontent.com/48851230/144863940-740f1745-4b7c-4d49-8c1d-13980117999b.gif" height="200px"><br><br>
### 5. RockScissorsPaper | 가위바위보 웹게임
가위, 바위, 보 이미지가 번갈아 표시되는 화면을 상대로 가위바위보 게임을 할 수 있습니다. 가위, 바위, 보 버튼 중 하나를 누르면 이미지의 회전이 멈추고, 그 때의 이미지와 유저가 선택한 버튼으로 가위바위보 게임의 승패를 결정하여 무승부시 0점, 유저가 이겼을 시 +1점, 유저가 패배했을 시 -1점이 누적 표시됩니다.<br><br>
<img src = "https://user-images.githubusercontent.com/48851230/145670580-ee2e1a86-9018-40db-9ec8-151a6b52300e.gif" height="200px"><br><br>
### 6. Lotto | 로또 웹게임
보너스 숫자 1개를 포함해 랜덤 추첨된 7개의 숫자가 공 모양으로 표시되고 [한 번 더!] 버튼을 누르면 추첨이 다시 진행됩니다.<br><br>
<img src = "https://user-images.githubusercontent.com/48851230/145670719-0ddd3ddb-303e-4e58-8fe1-56adbb50bac2.gif" width="300px"><br><br>
### 7. TicTacToe | 틱택토 웹게임
턴은 O와 X가 번갈아 가져가며, 각자의 턴에 가로, 세로, 대각선 중 한 줄을 완성하면 그 턴의 승리로 게임이 종료 및 리셋됩니다. 아무도 한 줄을 완성하지 못한 채 모든 칸이 클릭되어도 게임이 리셋됩니다.<br><br>
<img src = "https://user-images.githubusercontent.com/48851230/145670820-89269290-96cf-456d-9e5f-5f6e7b78a00b.gif" height="150px"><br><br>

