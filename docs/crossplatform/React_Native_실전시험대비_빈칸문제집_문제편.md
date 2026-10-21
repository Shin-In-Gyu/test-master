# 📝 React Native 실전 시험 대비 빈칸 문제집 (문제편)

> **3주차 ~ 7주차 총 49개 핵심 실전 백지 테스트**

---


# 📌 3주차

### [문제 01] 정렬 기본 템플릿 (Expo 기본 구조) (3주 P.04)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.04) |
| :---: | :---: |
| ![정렬 기본 템플릿 (Expo 기본 구조)](./images/week3/week3_p04_crop1.png) | ![3주 P.04](./images/week3/week3_p04_slide.png) |

* 🎯 **구현 조건**:
  1. 컴포넌트가 화면 전체(`flex: 1`)를 차지하고 배경색을 흰색(`#fff`)으로 설정할 것
  2. 화면 내부 요소를 가로/세로 중앙 정렬(`alignItems: 'center'`, `justifyContent: 'center'`)할 것
  3. 'Open up App.js to start working on your app!' 텍스트를 출력할 것
  4. Expo 상태 표시줄 `<StatusBar style="auto" />`을 포함할 것

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 조건 1~4를 만족하는 화면 렌더링 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

### [문제 02] 스타일링: 영어 다중 Text 출력 (3주 P.08)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.08) |
| :---: | :---: |
| ![스타일링: 영어 다중 Text 출력](./images/week3/week3_p08_crop1.png) | ![3주 P.08](./images/week3/week3_p08_slide.png) |

* 🎯 **구현 조건**:
  1. 기본 중앙 정렬 컨테이너(`styles.container`) 내부에 2개의 Text 컴포넌트를 배치할 것
  2. 첫 번째 줄에 'Open up App.js to start working on your app!' 출력
  3. 두 번째 줄에 'First My Project !' 출력

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 2개의 Text 컴포넌트를 렌더링하도록 작성하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

### [문제 03] 스타일링: 한글 줄바꿈 문법 ({"\n"}) (3주 P.09)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.09) |
| :---: | :---: |
| ![스타일링: 한글 줄바꿈 문법 ({"\n"})](./images/week3/week3_p09_crop1.png) | ![3주 P.09](./images/week3/week3_p09_slide.png) |

* 🎯 **구현 조건**:
  1. 리액트 네이티브 JSX 내부에서 개행(줄바꿈)을 처리하기 위해 {\"\\n\"} 표현식을 사용할 것
  2. 다음 문구가 한 Text 컴포넌트 내에서 4줄로 출력되도록 작성할 것:
     - 처음 시작하는 리액트 네이티브 프로그래밍 !
     - 학과: 소프트웨어공학
     - 학번: 123456
     - 이름: 홍길동

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] JSX 줄바꿈 문법을 사용하여 학적 정보를 4줄로 출력하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

### [문제 04] 스타일링: 주석 처리 (JSX 주석 vs JS 주석) (3주 P.10)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.10) |
| :---: | :---: |
| ![스타일링: 주석 처리 (JSX 주석 vs JS 주석)](./images/week3/week3_p10_crop1.png) | ![3주 P.10](./images/week3/week3_p10_slide.png) |

* 🎯 **구현 조건**:
  1. 함수 외부에 JS 한 줄 주석(`//`)으로 '과목명: 리액트 네이티브 프로그래밍' 작성
  2. 함수 외부에 JS 여러 줄 주석(`/* */`)으로 '이름: 홍길동' 작성
  3. JSX return 내부에서 '<Text>처음 시작하는 리액트 네이티브 프로그래밍 !</Text>'를 주석 처리할 것 (반드시 `{/* */}` 형태 사용)

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// [TODO 1] 여기에 JS 한 줄 주석과 여러 줄 주석을 작성하시오.

export default function App() {
  // [TODO 2] JSX 내부에서 유효한 주석 문법을 사용하여 Text를 주석 처리하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

### [문제 05] 인라인 스타일링 (Inline Styling) (3주 P.11)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.11) |
| :---: | :---: |
| ![인라인 스타일링 (Inline Styling)](./images/week3/week3_p11_crop1.png) | ![3주 P.11](./images/week3/week3_p11_slide.png) |

* 🎯 **구현 조건**:
  1. 별도의 StyleSheet 없이 컴포넌트의 `style={{ ... }}` 속성에 직접 스타일 객체를 전달할 것
  2. 컨테이너: flex 1, 배경 흰색, 중앙 정렬
  3. 첫 번째 Text: padding 10, fontSize 26, fontWeight '600'(문자열 주의), 검정 글씨 ('Inline Styling - Text')
  4. 두 번째 Text: padding 10, fontSize 26, fontWeight '400'(문자열 주의), 빨간 글씨 ('Inline Styling - Error')

```javascript
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  // [TODO] StyleSheet를 쓰지 않고 오직 인라인 스타일링만으로 화면을 구현하시오.




}

```

---

### [문제 06] 클래스 스타일링 (StyleSheet.create) (3주 P.12)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.12) |
| :---: | :---: |
| ![클래스 스타일링 (StyleSheet.create)](./images/week3/week3_p12_crop1.png) | ![3주 P.12](./images/week3/week3_p12_slide.png) |

* 🎯 **구현 조건**:
  1. `StyleSheet.create`를 사용하여 `container`, `text`, `error` 3가지 스타일 객체를 정의할 것
  2. `text`: padding 10, fontSize 26, fontWeight '600', color 'black'
  3. `error`: padding 10, fontSize 26, fontWeight '400', color 'red'
  4. 컴포넌트에 `styles.text`, `styles.error`로 바인딩할 것

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO 1] styles 객체를 참조하여 View와 2개의 Text를 렌더링하시오.




}

// [TODO 2] StyleSheet.create를 사용하여 container, text, error 스타일을 정의하시오.
const styles = StyleSheet.create({

});
```

---

### [문제 07] 여러 개의 스타일 적용 (배열 스타일링) (3주 P.13)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.13) |
| :---: | :---: |
| ![여러 개의 스타일 적용 (배열 스타일링)](./images/week3/week3_p13_crop1.png) | ![3주 P.13](./images/week3/week3_p13_slide.png) |

* 🎯 **구현 조건**:
  1. `styles.text`에는 공통 속성(padding: 10, fontSize: 26, fontWeight: '600', color: 'black')을 정의할 것
  2. `styles.error`에는 변경할 속성(fontWeight: '400', color: 'red')만 정의할 것
  3. 두 번째 Text 컴포넌트에 **배열**을 사용하여 두 스타일을 병합 적용할 것 (`style={[styles.text, styles.error]}`)

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 배열을 사용하여 다중 스타일을 적용하는 JSX를 작성하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  error: {
    fontWeight: '400',
    color: 'red',
  },
});
```

---

### [문제 08] 외부 스타일 이용하기 (App.js & styles.js 모듈 분리) (3주 P.14~15)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.14~15) |
| :---: | :---: |
| ![외부 스타일 이용하기 (App.js & styles.js 모듈 분리)](./images/week3/week3_p14_crop1.png) | ![3주 P.14~15](./images/week3/week3_p14_slide.png) |

* 🎯 **구현 조건**:
  1. `src/styles.js` 파일에서 `viewStyles`와 `textStyles`를 named export(`export const`)할 것
  2. `App.js` 파일에서 `./src/styles`로부터 두 스타일 객체를 import하여 적용할 것

```javascript
// [파일 1: src/styles.js]
import { StyleSheet } from "react-native";
// [TODO 1] viewStyles와 textStyles를 export 하시오.


// [파일 2: App.js]
import React from "react";
import { View, Text } from "react-native";
// [TODO 2] 외부 스타일 파일을 import하고 컴포넌트에 연결하시오.

export default function App() {




}
```

---

### [문제 09] Flex와 범위: 수직 1:3:1 분할 (3주 P.16)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.16) |
| :---: | :---: |
| ![Flex와 범위: 수직 1:3:1 분할](./images/week3/week3_p16_crop1.png) | ![3주 P.16](./images/week3/week3_p16_slide.png) |

* 🎯 **구현 조건**:
  1. Header 영역: flex 1, 노란색 배경 (`#f1c40f`), 중앙 정렬
  2. Contents 영역: flex 3, 청록색 배경 (`#1abc9c`), 중앙 정렬
  3. Footer 영역: flex 1, 파란색 배경 (`#3498db`), 중앙 정렬
  4. 총 5의 비율 중 1:3:1로 화면 전체(`container: { flex: 1 }`)를 분할할 것

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO 1] Header, Contents, Footer 3단 분할 JSX를 작성하시오.




}

// [TODO 2] flex 1:3:1 비율 및 배경색 styles를 정의하시오.
const styles = StyleSheet.create({

});
```

---

### [문제 10] Flex와 범위: 가로 분할 (flexDirection: 'row') (3주 P.17)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.17) |
| :---: | :---: |
| ![Flex와 범위: 가로 분할 (flexDirection: 'row')](./images/week3/week3_p17_crop1.png) | ![3주 P.17](./images/week3/week3_p17_slide.png) |

* 🎯 **구현 조건**:
  1. Contents 영역에 `flexDirection: 'row'`를 지정하여 내부 요소를 가로로 나란히 배치할 것
  2. Contents 내부에 Contents Left(flex: 1, `#16a085`)와 Contents Right(flex: 1, `#27ae60`) 2개 영역을 1:1로 가로 분할할 것

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO 1] Contents 내부를 Left와 Right로 가로 분할하는 JSX를 작성하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  // [TODO 2] contents의 가로 분할 및 contentsLeft, contentsRight 스타일을 정의하시오.
  contents: {

  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
  },
});
```

---


# 📌 4주차

### [문제 11] View: Flex 복합 그리드 4분할 레이아웃 (4주 P.04)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.04) |
| :---: | :---: |
| ![View: Flex 복합 그리드 4분할 레이아웃](./images/week4/week4_p04_crop1.png) | ![4주 P.04](./images/week4/week4_p04_slide.png) |

* 🎯 **구현 조건**:
  1. Header와 Footer 사이에 Contents 영역(`flex: 3, flexDirection: 'row'`)을 둘 것
  2. Contents 좌측(Left)과 우측(Right)을 각각 상/하(Top, Bottom)로 2등분하여 총 4개 칸을 구성할 것
  3. 각 칸에 'Contents Left Top', 'Contents Left Bottom', 'Contents Right Top', 'ContentsRightBottom' 텍스트를 중앙 배치할 것

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 4분할 중첩 View 레이아웃 JSX를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, backgroundColor: '#f1c40f' },
  contents: { flex: 3, flexDirection: 'row' },
  contentsLeft: { flex: 1 },
  contentsLeftTop: { flex: 1, backgroundColor: '#16a085', alignItems: 'center', justifyContent: 'center' },
  contentsLeftBottom: { flex: 1, backgroundColor: '#1abc9c', alignItems: 'center', justifyContent: 'center' },
  contentsRight: { flex: 1 },
  contentsRightTop: { flex: 1, backgroundColor: '#27ae60', alignItems: 'center', justifyContent: 'center' },
  contentsRightBottom: { flex: 1, backgroundColor: '#2ecc71', alignItems: 'center', justifyContent: 'center' },
  footer: { flex: 1, backgroundColor: '#3498db' },
  text: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
});
```

---

### [문제 12] 텍스트 중첩: Style 적용 (4주 P.05)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.05) |
| :---: | :---: |
| ![텍스트 중첩: Style 적용](./images/week4/week4_p05_crop1.png) | ![4주 P.05](./images/week4/week4_p05_slide.png) |

* 🎯 **구현 조건**:
  1. `Text` 컴포넌트 내부에 다른 `Text` 컴포넌트를 중첩(Nesting)할 것
  2. 전체 텍스트: '나는 강남대학교 학생 이다.' (크기 30, 볼드체)
  3. ' 학생 이다.' 부분에만 빨간색 글자색(`innerText: { color: 'red' }`)을 적용할 것

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] Text 중첩 문법을 사용하여 특정 단어만 빨간색으로 변경하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  innerText: {
    color: 'red',
  },
});
```

---

### [문제 13] 텍스트 중첩: 인라인 스타일링 (4주 P.06)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.06) |
| :---: | :---: |
| ![텍스트 중첩: 인라인 스타일링](./images/week4/week4_p06_crop1.png) | ![4주 P.06](./images/week4/week4_p06_slide.png) |

* 🎯 **구현 조건**:
  1. StyleSheet 대신 인라인 스타일(`style={{ ... }}`)을 사용하여 Text 중첩을 구현할 것
  2. 부모 Text: `fontSize: 30`, 텍스트 '나는 강남대학교'
  3. 자식 Text: `fontSize: 30, color: 'green'`, 텍스트 ' 학생 이다.'

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 인라인 스타일로 중첩 Text에 초록색을 적용하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

### [문제 14] 텍스트 ScrollView (긴 본문 스크롤 지원) (4주 P.07)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.07) |
| :---: | :---: |
| ![텍스트 ScrollView (긴 본문 스크롤 지원)](./images/week4/week4_p07_crop1.png) | ![4주 P.07](./images/week4/week4_p07_slide.png) |

* 🎯 **구현 조건**:
  1. 화면을 벗어나는 긴 텍스트를 상하로 스크롤할 수 있도록 `<ScrollView>` 컴포넌트로 감쌀 것
  2. ScrollView 내부에 긴 설명 텍스트를 `styles.baseText`로 스타일링하여 표시할 것

```javascript
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  // [TODO] ScrollView 컴포넌트를 사용하여 긴 본문을 렌더링하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  baseText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
```

---

### [문제 15] 텍스트 onPress 이벤트 (상태 변경 및 인터랙션) (4주 P.10)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.10) |
| :---: | :---: |
| ![텍스트 onPress 이벤트 (상태 변경 및 인터랙션)](./images/week4/week4_p10_crop1.png) | ![4주 P.10](./images/week4/week4_p10_slide.png) |

* 🎯 **구현 조건**:
  1. `useState`로 `titleText` 상태를 정의하고 초기값을 `'지금, 무슨 과목:[클릭 ㅋㅋ]'`으로 둘 것
  2. 제목 텍스트 클릭 시 호출할 `onPressTitle` 함수를 정의하여 상태를 `'크로스 플랫폼 과목 !!!'`으로 변경할 것
  3. 중첩된 자식 Text 컴포넌트에 `onPress={onPressTitle}` 핸들러를 연결할 것
  4. 본문 텍스트에 `numberOfLines={5}` 속성을 지정할 것

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] useState 선언, onPress 이벤트 함수 및 JSX를 완성하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});
```

---

### [문제 16] 버튼 기본 컴포넌트 (Button) (4주 P.11)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.11) |
| :---: | :---: |
| ![버튼 기본 컴포넌트 (Button)](./images/week4/week4_p11_crop1.png) | ![4주 P.11](./images/week4/week4_p11_slide.png) |

* 🎯 **구현 조건**:
  1. 리액트 네이티브의 기본 `<Button />` 컴포넌트를 중앙에 렌더링할 것
  2. 버튼 제목(`title`) 속성에 '버튼 만들기'를 지정할 것

```javascript
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
  // [TODO] 기본 Button 컴포넌트를 렌더링하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

### [문제 17] 버튼 팝업 메시지 (단일 Alert.alert) (4주 P.12)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.12) |
| :---: | :---: |
| ![버튼 팝업 메시지 (단일 Alert.alert)](./images/week4/week4_p12_crop1.png) | ![4주 P.12](./images/week4/week4_p12_slide.png) |

* 🎯 **구현 조건**:
  1. 버튼의 배경 색상을 핑크색(`color="#f194ff"`)으로 지정할 것
  2. 버튼을 누르면(`onPress`) `Alert.alert('핑크 버튼 누름')` 팝업을 띄울 것

```javascript
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
  // [TODO] 색상 지정 및 onPress에서 Alert을 띄우는 버튼을 작성하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});
```

---

### [문제 18] 버튼 팝업 취소/확인 (2버튼 Alert.alert) (4주 P.13)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.13) |
| :---: | :---: |
| ![버튼 팝업 취소/확인 (2버튼 Alert.alert)](./images/week4/week4_p13_crop1.png) | ![4주 P.13](./images/week4/week4_p13_slide.png) |

* 🎯 **구현 조건**:
  1. 버튼 클릭 시 제목 '핑크버튼', 메시지 '핑크 버튼 누름'의 Alert를 띄울 것
  2. Alert에 2개의 버튼 배열을 넘길 것:
     - 버튼 1: text: '취소', style: 'cancel', 콘솔에 '취소 버튼 클릭' 출력
     - 버튼 2: text: '확인', 콘솔에 '확인 버튼 클릭' 출력

```javascript
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
  // [TODO] 취소와 확인 2개의 버튼을 갖는 Alert.alert를 작성하시오.




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});
```

---

### [문제 19] 텍스트 입력: 기본 TextInput (실시간 상태 반영) (4주 P.14)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.14) |
| :---: | :---: |
| ![텍스트 입력: 기본 TextInput (실시간 상태 반영)](./images/week4/week4_p14_crop1.png) | ![4주 P.14](./images/week4/week4_p14_slide.png) |

* 🎯 **구현 조건**:
  1. `useState("")`로 `text` 상태를 선언할 것
  2. TextInput에 `placeholder="여기에 입력"`, `value={text}`, `onChangeText={(value) => setText(value)}`를 연결할 것
  3. 입력창 아래에 `<Text>입력값: {text}</Text>`를 실시간으로 출력할 것

```javascript
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  // [TODO] useState 및 TextInput과 Text 바인딩 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});
```

---

### [문제 20] 텍스트 입력: 텍스트 vs 숫자 (비밀번호 정규식 필터링) (4주 P.15)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.15) |
| :---: | :---: |
| ![텍스트 입력: 텍스트 vs 숫자 (비밀번호 정규식 필터링)](./images/week4/week4_p15_crop1.png) | ![4주 P.15](./images/week4/week4_p15_slide.png) |

* 🎯 **구현 조건**:
  1. 숫자만 입력받는 비밀번호 입력창에 `keyboardType="numeric"`을 지정할 것
  2. `onChangeText`에서 정규식 `value.replace(/[^0-9]/g, "")`을 적용하여 숫자가 아닌 모든 문자를 제거한 후 상태에 저장할 것
  3. 아래에 '입 력 값: {text}'와 '비밀번호: {number}'를 각각 출력할 것

```javascript
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  // [TODO] text와 number 2개의 상태 및 숫자 전용 필터링 로직을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});
```

---

### [문제 21] 텍스트 입력: 여러 줄 입력 (multiline 속성) (4주 P.16)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.16) |
| :---: | :---: |
| ![텍스트 입력: 여러 줄 입력 (multiline 속성)](./images/week4/week4_p16_crop1.png) | ![4주 P.16](./images/week4/week4_p16_slide.png) |

* 🎯 **구현 조건**:
  1. TextInput에 편집 가능(`editable`), 여러 줄 입력 가능(`multiline`) 속성을 부여할 것
  2. 최대 표시 줄 수 `numberOfLines={4}`와 최대 글자 수 `maxLength={40}`을 지정할 것

```javascript
import React, { useState } from "react";
import { StyleSheet, View, TextInput } from 'react-native';

export default function App() {
  // [TODO] multiline, numberOfLines, maxLength 속성을 적용한 TextInput을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, margin: 12 },
});
```

---

### [문제 22] 텍스트 입력: 여러 줄 입력 Alert 연동 및 초기화 (4주 P.17)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.17) |
| :---: | :---: |
| ![텍스트 입력: 여러 줄 입력 Alert 연동 및 초기화](./images/week4/week4_p17_crop1.png) | ![4주 P.17](./images/week4/week4_p17_slide.png) |

* 🎯 **구현 조건**:
  1. 'Press me' 버튼 클릭 시 호출되는 `handlePress` 함수를 작성할 것
  2. Alert 창으로 제목 'Input Data', 내용에 현재 입력된 `value || "(Empty)"`를 띄울 것
  3. Alert 확인 버튼을 누르면 입력창 내용이 빈 문자열(`setValue("")`)로 초기화되도록 콜백을 지정할 것

```javascript
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  // [TODO] Alert 연동 및 확인 시 초기화 콜백 로직을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, marginVertical: 10 },
});
```

---


# 📌 5주차

### [문제 23] 자바스크립트 변수 바인딩 ({name}) (5주 P.05~06)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.05~06) |
| :---: | :---: |
| ![자바스크립트 변수 바인딩 ({name})](./images/week5/week5_p06_crop1.png) | ![5주 P.05~06](./images/week5/week5_p06_slide.png) |

* 🎯 **구현 조건**:
  1. 변수 `const name = 'Beomjun'`을 선언할 것
  2. JSX 내부에서 중괄호 `{name}` 바인딩을 사용하여 'My name is Beomjun' 텍스트를 출력할 것

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 자바스크립트 변수를 선언하고 JSX에서 보간 출력하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});
```

---

### [문제 24] 조건문: if 조건문 분기 (5주 P.07)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.07) |
| :---: | :---: |
| ![조건문: if 조건문 분기](./images/week5/week5_p07_crop1.png) | ![5주 P.07](./images/week5/week5_p07_slide.png) |

* 🎯 **구현 조건**:
  1. `const name = 'Beomjun'` 변수 선언
  2. `if (name === 'Beomjun')`이면 `message = 'My name is ' + name` 할당
  3. 그렇지 않으면 `message = "I'm not Beomjun"` 할당
  4. JSX 내부에서 `<Text style={styles.text}>{message}</Text>` 출력

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] if-else 조건문으로 message를 결정하여 렌더링하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});
```

---

### [문제 25] 조건문: 삼항연산자 (Ternary Operator) (5주 P.08)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.08) |
| :---: | :---: |
| ![조건문: 삼항연산자 (Ternary Operator)](./images/week5/week5_p08_crop1.png) | ![5주 P.08](./images/week5/week5_p08_slide.png) |

* 🎯 **구현 조건**:
  1. JSX 내부에서 삼항연산자(`? :`)를 직접 사용할 것
  2. `name === 'Beomjun'`이 참이면 "My name is Beomjun", 거짓이면 "I'm not Beomjun"을 표시할 것

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Beomjun';

  // [TODO] 삼항연산자를 사용하여 인라인 조건부 렌더링을 구현하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});
```

---

### [문제 26] 조건문: AND/OR 연산자 단축 평가 (5주 P.09)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.09) |
| :---: | :---: |
| ![조건문: AND/OR 연산자 단축 평가](./images/week5/week5_p09_crop1.png) | ![5주 P.09](./images/week5/week5_p09_slide.png) |

* 🎯 **구현 조건**:
  1. `name1 === 'Beomjun'`일 때 AND(`&&`) 연산자로 'My name is Beomjun' 출력
  2. `name1 !== 'Beomjun'`일 때 AND(`&&`) 연산자로 'My name is not Beomjun' 출력
  3. `name2 === 'JongSoo'`일 때 OR(`||`) 연산자로 "I'm not Beomjun's friend" 대체 출력
  4. `name2 !== 'JongSoo'`일 때 OR(`||`) 연산자로 "I'm Beomjun's friend" 대체 출력

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name1 = 'Beomjun';
  const name2 = 'JongSoo';

  // [TODO] &&와 || 연산자를 활용한 조건부 텍스트 렌더링을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, marginVertical: 5 },
});
```

---

### [문제 27] Image 컴포넌트: 로컬 이미지 불러오기 (5주 P.10)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.10) |
| :---: | :---: |
| ![Image 컴포넌트: 로컬 이미지 불러오기](./images/week5/week5_p10_crop1.png) | ![5주 P.10](./images/week5/week5_p10_slide.png) |

* 🎯 **구현 조건**:
  1. 리액트 네이티브의 `<Image />` 컴포넌트를 사용할 것
  2. 로컬 이미지 파일 `./kangnam.png`를 `source={require('./kangnam.png')}`로 불러올 것
  3. 이미지 크기를 가로 200, 세로 200으로 지정할 것

```javascript
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
  // [TODO] Image 컴포넌트로 로컬 이미지를 표시하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 },
});
```

---

### [문제 28] Switch 컴포넌트: 다크 모드 토글 (5주 P.11)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.11) |
| :---: | :---: |
| ![Switch 컴포넌트: 다크 모드 토글](./images/week5/week5_p11_crop1.png) | ![5주 P.11](./images/week5/week5_p11_slide.png) |

* 🎯 **구현 조건**:
  1. `useState(false)`로 `darkMode` 불리언 상태를 선언할 것
  2. `Switch` 컴포넌트에 `value={darkMode}`, `onValueChange={setDarkMode}`를 연결할 것
  3. `darkMode` 상태에 따라 화면 배경색(`black` / `white`)과 텍스트 색상(`white` / `black`)을 삼항연산자로 반전시킬 것
  4. 텍스트로 '스위치: ON' 또는 '스위치: OFF'를 표시할 것

```javascript
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function App() {
  // [TODO] Switch 컴포넌트와 darkMode 상태를 연동한 다크모드 화면을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginBottom: 20, fontSize: 20 },
});
```

---

### [문제 29] FlatList 컴포넌트: 대용량 목록 렌더링 (5주 P.12)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.12) |
| :---: | :---: |
| ![FlatList 컴포넌트: 대용량 목록 렌더링](./images/week5/week5_p12_crop1.png) | ![5주 P.12](./images/week5/week5_p12_slide.png) |

* 🎯 **구현 조건**:
  1. 주어진 `data` 배열을 `<FlatList />` 컴포넌트로 화면에 출력할 것
  2. `keyExtractor` 속성으로 `item.id`를 고유 키로 추출할 것
  3. `renderItem` 속성에서 `({ item }) => <Text style={styles.item}>{item.id} : {item.name}</Text>` 형태로 각 행을 렌더링할 것

```javascript
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const data = [
    { id: '1', name: 'Beomjun' },
    { id: '2', name: 'Jongsoo' },
    { id: '3', name: 'Yuna' },
    { id: '4', name: 'Minho' },
    { id: '5', name: 'Hana' },
  ];

  // [TODO] FlatList의 3대 필수 속성(data, keyExtractor, renderItem)을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  item: { fontSize: 24, padding: 10 },
});
```

---

### [문제 30] SectionList 컴포넌트: 그룹별 목록 렌더링 (5주 P.13)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.13) |
| :---: | :---: |
| ![SectionList 컴포넌트: 그룹별 목록 렌더링](./images/week5/week5_p13_crop1.png) | ![5주 P.13](./images/week5/week5_p13_slide.png) |

* 🎯 **구현 조건**:
  1. 섹션 데이터 `DATA`를 `<SectionList />`로 출력할 것
  2. `sections` 속성에 `DATA`를 전달할 것
  3. `renderItem`에서 개별 항목 `▣ {item}`을 출력할 것
  4. `renderSectionHeader`에서 섹션 헤더 `섹션: {title}`을 출력할 것

```javascript
import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

export default function App() {
  const DATA = [
    { title: 'A', data: ['Alex', 'Amy', 'Andrew'] },
    { title: 'B', data: ['Beomjun', 'Bella', 'Brian'] },
    { title: 'C', data: ['Chris', 'Cindy', 'Clara'] },
  ];

  // [TODO] SectionList의 sections, renderItem, renderSectionHeader 속성을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50, paddingHorizontal: 20 },
  header: { fontSize: 24, fontWeight: 'bold', backgroundColor: '#eee', paddingVertical: 5 },
  item: { fontSize: 20, paddingVertical: 4, paddingLeft: 10 },
});
```

---


# 📌 6주차

### [문제 31] BackHandler: 안드로이드 물리 뒤로가기 버튼 제어 (6주 P.04)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.04) |
| :---: | :---: |
| ![BackHandler: 안드로이드 물리 뒤로가기 버튼 제어](./images/week6/week6_p04_crop1.png) | ![6주 P.04](./images/week6/week6_p04_slide.png) |

* 🎯 **구현 조건**:
  1. 컴포넌트 마운트 시 `BackHandler.addEventListener('hardwareBackPress', backAction)` 등록
  2. Alert 팝업('잠깐!', '정말로 뒤로 가기를 원하십니까?')에서 'YES: 예' 클릭 시 `BackHandler.exitApp()` 호출
  3. 기본 뒤로가기 동작을 방지하기 위해 핸들러가 `return true;`를 반환할 것
  4. `useEffect` 클린업 함수에서 `backHandler.remove()`로 리스너를 해제할 것

```javascript
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';

export default function App() {
  // [TODO] 조건 1~4를 만족하는 BackHandler 등록 및 해제 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
```

---

### [문제 32] DrawerLayoutAndroid: 서랍 메뉴 네비게이션 (6주 P.05~06)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.05~06) |
| :---: | :---: |
| ![DrawerLayoutAndroid: 서랍 메뉴 네비게이션](./images/week6/week6_p05_crop1.png) | ![6주 P.05~06](./images/week6/week6_p05_slide.png) |

* 🎯 **구현 조건**:
  1. `drawer = useRef(null)` 참조를 선언하고 `<DrawerLayoutAndroid ref={drawer}>`에 연결할 것
  2. 서랍 위치(`drawerPosition`)를 상태로 관리하고 버튼 클릭 시 'left'와 'right'를 상호 전환할 것
  3. 서랍 내부에 보여줄 `renderNavigationView` 함수를 정의하고 'Close drawer' 버튼 클릭 시 `drawer.current?.closeDrawer()`를 호출할 것
  4. 화면 중앙의 'Open drawer' 버튼 클릭 시 `drawer.current?.openDrawer()`로 서랍을 열 것

```javascript
import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Button } from 'react-native';

export default function App() {
  // [TODO] DrawerLayoutAndroid의 useRef, 상태, navigationView 및 JSX를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  navigationContainer: { backgroundColor: '#ecf0f1' },
  paragraph: { padding: 16, fontSize: 15, textAlign: 'center' },
});
```

---

### [문제 33] ToastAndroid: 토스트 알림 및 위치 오프셋 제어 (6주 P.07)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.07) |
| :---: | :---: |
| ![ToastAndroid: 토스트 알림 및 위치 오프셋 제어](./images/week6/week6_p07_crop1.png) | ![6주 P.07](./images/week6/week6_p07_slide.png) |

* 🎯 **구현 조건**:
  1. 'Toggle Toast' 버튼 누르면 `ToastAndroid.show('기본 토스트 메세지 !', ToastAndroid.SHORT)` 호출
  2. 핑크 버튼 누르면 `ToastAndroid.showWithGravityAndOffset(...)`을 사용하여 지속시간 `ToastAndroid.LONG`, 위치 `ToastAndroid.CENTER`, x오프셋 `25`, y오프셋 `50`으로 토스트를 띄울 것

```javascript
import React from 'react';
import { StyleSheet, ToastAndroid, View, Button } from 'react-native';

export default function App() {
  // [TODO] ToastAndroid의 2가지 메서드(show, showWithGravityAndOffset) 호출 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', paddingTop: 20, paddingHorizontal: 20, backgroundColor: '#fff', padding: 8 },
  buttonWrap: { marginBottom: 2, height: 5 },
});
```

---

### [문제 34] Animated: 페이드 인/아웃 타이밍 애니메이션 (6주 P.09~10)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.09~10) |
| :---: | :---: |
| ![Animated: 페이드 인/아웃 타이밍 애니메이션](./images/week6/week6_p09_crop1.png) | ![6주 P.09~10](./images/week6/week6_p09_slide.png) |

* 🎯 **구현 조건**:
  1. `fadeAnim = useRef(new Animated.Value(0)).current` 애니메이션 값 선언
  2. `fadeIn`: `Animated.timing`을 이용해 5초(5000ms) 동안 `toValue: 1`, `useNativeDriver: true`로 실행
  3. `fadeOut`: `Animated.timing`을 이용해 3초(3000ms) 동안 `toValue: 0`, `useNativeDriver: true`로 실행
  4. `<Animated.View>`의 `style` 속성에 `{ opacity: fadeAnim }`을 바인딩할 것

```javascript
import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
  // [TODO] fadeAnim 선언, fadeIn/fadeOut 함수 및 Animated.View 렌더링 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  fadingContainer: { padding: 20, backgroundColor: 'powderblue' },
  fadingText: { fontSize: 28 },
  buttonRow: { flexBasis: 100, justifyContent: 'space-evenly', marginVertical: 10 },
});
```

---

### [문제 35] Dimensions: 기기 화면 해상도 측정 및 회전 감지 (6주 P.11~12)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.11~12) |
| :---: | :---: |
| ![Dimensions: 기기 화면 해상도 측정 및 회전 감지](./images/week6/week6_p11_crop1.png) | ![6주 P.11~12](./images/week6/week6_p11_slide.png) |

* 🎯 **구현 조건**:
  1. `Dimensions.get('window')`와 `Dimensions.get('screen')`으로 초기 해상도 정보 가져오기
  2. `useEffect`에서 `Dimensions.addEventListener('change', ({ window, screen }) => { ... })`로 화면 회전 감지 리스너 등록
  3. 클린업에서 `subscription?.remove()` 호출
  4. `Object.entries`와 `.map()`을 사용하여 window와 screen의 각 키와 값(`.toFixed(2)`)을 화면에 출력할 것

```javascript
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  // [TODO] Dimensions 상태, 이벤트 리스너 등록 및 해상도 출력 JSX를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 20, marginVertical: 10 },
});
```

---

### [문제 36] KeyboardAvoidingView: 키보드 회피 및 바깥 터치 닫기 (6주 P.13~14)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.13~14) |
| :---: | :---: |
| ![KeyboardAvoidingView: 키보드 회피 및 바깥 터치 닫기](./images/week6/week6_p13_crop1.png) | ![6주 P.13~14](./images/week6/week6_p13_slide.png) |

* 🎯 **구현 조건**:
  1. 입력창 바깥 배경 터치 시 키보드가 내려가도록 `<TouchableWithoutFeedback onPress={Keyboard.dismiss}>`로 감쌀 것
  2. TextInput에 Username을 입력받고 Submit 버튼 클릭 시 Alert 팝업을 띄우며 확인 시 입력창 비우기

```javascript
import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from 'react-native';

export default function App() {
  // [TODO] TouchableWithoutFeedback 및 Keyboard.dismiss를 활용한 화면을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { padding: 24, flex: 1, justifyContent: 'space-around' },
  header: { fontSize: 36, marginBottom: 48 },
  textInput: { height: 40, borderColor: '#000000', borderBottomWidth: 1, marginBottom: 36 },
  btnContainer: { backgroundColor: 'white', marginTop: 12 },
});
```

---

### [문제 37] Linking: 외부 웹 브라우저 URL 열기 (6주 P.15)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.15) |
| :---: | :---: |
| ![Linking: 외부 웹 브라우저 URL 열기](./images/week6/week6_p15_crop1.png) | ![6주 P.15](./images/week6/week6_p15_slide.png) |

* 🎯 **구현 조건**:
  1. '정종수 블로그' 텍스트와 '확 인' 버튼을 배치할 것
  2. '확 인' 버튼 클릭 시 `Linking.openURL('https://blog.naver.com/jongsoo67')`을 호출하여 외부 웹 브라우저를 열 것

```javascript
import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  // [TODO] Linking.openURL을 호출하는 버튼 핸들러 및 화면을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  text: { fontSize: 30, marginVertical: 30, textAlign: 'center' },
});
```

---

### [문제 38] Modal: 팝업 대화상자 레이어 (6주 P.16~17)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.16~17) |
| :---: | :---: |
| ![Modal: 팝업 대화상자 레이어](./images/week6/week6_p16_crop1.png) | ![6주 P.16~17](./images/week6/week6_p16_slide.png) |

* 🎯 **구현 조건**:
  1. `modalVisible` 불리언 상태 선언 (`useState(false)`)
  2. `<Modal>` 속성: `animationType="slide"`, `transparent={true}`, `visible={modalVisible}`
  3. 모달 내부 'Hide Modal' 버튼 클릭 시 `setModalVisible(false)`로 모달 닫기
  4. 화면의 'Show Modal' 버튼 클릭 시 `setModalVisible(true)`로 모달 열기

```javascript
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function App() {
  // [TODO] Modal 컴포넌트와 modalVisible 상태 연동 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  centeredView: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  modalView: { width: '90%', margin: 20, backgroundColor: 'white', borderRadius: 10, padding: 35, alignItems: 'center', elevation: 5 },
  button: { borderRadius: 20, padding: 10, elevation: 2 },
  buttonOpen: { backgroundColor: '#F194FF' },
  buttonClose: { backgroundColor: '#2196F3' },
  textStyle: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  modalText: { marginBottom: 15, textAlign: 'center' },
});
```

---

### [문제 39] PixelRatio: 기기 픽셀 비율 및 이미지 크기 변환 (6주 P.18~19)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.18~19) |
| :---: | :---: |
| ![PixelRatio: 기기 픽셀 비율 및 이미지 크기 변환](./images/week6/week6_p18_crop1.png) | ![6주 P.18~19](./images/week6/week6_p18_slide.png) |

* 🎯 **구현 조건**:
  1. 기기 픽셀 비율 출력: `PixelRatio.get()`
  2. 폰트 스케일 출력: `PixelRatio.getFontScale()`
  3. 레이아웃 크기 `size(50)`에 대응하는 실제 물리 픽셀 크기 변환: `PixelRatio.getPixelSizeForLayoutSize(size)`

```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native';

const size = 50;
const cat = { uri: 'https://reactnative.dev/docs/assets/p_cat1.png', width: size, height: size };

export default function App() {
  // [TODO] PixelRatio의 3대 메서드를 호출하여 정보를 출력하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 50 },
  value: { fontSize: 24, marginBottom: 12, marginTop: 4 },
});
```

---

### [문제 40] RefreshControl: 당겨서 새로고침 (6주 P.20~21)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.20~21) |
| :---: | :---: |
| ![RefreshControl: 당겨서 새로고침](./images/week6/week6_p20_crop1.png) | ![6주 P.20~21](./images/week6/week6_p20_slide.png) |

* 🎯 **구현 조건**:
  1. `refreshing` 상태와 `timerRef = useRef(null)`를 선언할 것
  2. `onRefresh = useCallback(...)`에서 중복 새로고침 방지 후 `setTimeout`으로 2초 뒤 `setRefreshing(false)`로 변경할 것
  3. ScrollView의 `refreshControl` 속성에 `<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />`를 연결할 것

```javascript
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] RefreshControl 상태, onRefresh 콜백 및 ScrollView 연결을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flex: 1, backgroundColor: 'pink' },
  scrollContent: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
});
```

---


# 📌 7주차

### [문제 41] useState 예제 1: 카운터 (+1 / -1) (7주 P.05)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.05) |
| :---: | :---: |
| ![useState 예제 1: 카운터 (+1 / -1)](./images/week7/week7_p05_crop1.png) | ![7주 P.05](./images/week7/week7_p05_slide.png) |

* 🎯 **구현 조건**:
  1. `const [count, setCount] = useState(0)` 상태 선언
  2. '+1 증가' Pressable 버튼 클릭 시 `setCount(count + 1)`
  3. '-1 감소' Pressable 버튼 클릭 시 `setCount(count - 1)`
  4. 중앙에 '현재 카운트: {count}' 출력

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  // [TODO] count 상태 및 +1, -1 Pressable 버튼 로직을 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  text: { fontSize: 30, marginBottom: 20 },
  button: { backgroundColor: '#4ab1ec', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 6, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
```

---

### [문제 42] useState 예제 2: A × B 곱셈 계산기 (7주 P.06~07)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.06~07) |
| :---: | :---: |
| ![useState 예제 2: A × B 곱셈 계산기](./images/week7/week7_p06_crop1.png) | ![7주 P.06~07](./images/week7/week7_p06_slide.png) |

* 🎯 **구현 조건**:
  1. 상태: `a`(''), `b`(''), `result`(null)
  2. `multiply` 함수: `parseFloat(a)`, `parseFloat(b)`를 수행하고 하나라도 `isNaN`이면 '숫자를 입력하세요!', 정상 숫자면 곱셈 결과(`numA * numB`)를 `setResult`에 저장
  3. 'A × B 계산' Button 누르면 `multiply` 호출
  4. `result !== null`일 때만 결과 텍스트 '결과: {result}' 출력

```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  // [TODO] 3개의 useState, multiply 계산 함수 및 JSX를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});
```

---

### [문제 43] useRef vs 일반 변수 vs useState 리렌더링 비교 (시험 출제 1순위!) (7주 P.09)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.09) |
| :---: | :---: |
| ![useRef vs 일반 변수 vs useState 리렌더링 비교 (시험 출제 1순위!)](./images/week7/week7_p09_crop1.png) | ![7주 P.09](./images/week7/week7_p09_slide.png) |

* 🎯 **구현 조건**:
  1. `render` 상태(`useState(false)`), `countRef` 참조(`useRef(0)`), 일반 변수 `let countVar = 5` 선언
  2. '클릭' 버튼: `countRef.current += 1`, `countVar += 1` 실행 (화면 리렌더링 안 일어남)
  3. '리랜더' 버튼: `setRender(!render)` 실행 (컴포넌트 리렌더링 유발 -> countRef의 누적값은 유지되어 화면에 반영되고, countVar는 다시 5로 리셋됨)

```javascript
import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Example() {
  // [TODO] useRef, countVar, useState 및 2개 버튼의 렌더링 차이 로직을 작성하시오.




}

```

---

### [문제 44] useRef: TextInput 포커스 자동 이동 (7주 P.10)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.10) |
| :---: | :---: |
| ![useRef: TextInput 포커스 자동 이동](./images/week7/week7_p10_crop1.png) | ![7주 P.10](./images/week7/week7_p10_slide.png) |

* 🎯 **구현 조건**:
  1. `inputRef = useRef(null)`을 선언하고 `<TextInput ref={inputRef}>`에 연결할 것
  2. '포커스 이동' 버튼 클릭 시 `inputRef.current?.focus()`를 호출하여 TextInput으로 커서를 이동시킬 것

```javascript
import React, { useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {
  // [TODO] useRef로 DOM 참조를 잡고 focus()를 호출하는 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20 },
});
```

---

### [문제 45] useRef: 계산기 + 계산 후 자동 포커스 복귀 (7주 P.11~12)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.11~12) |
| :---: | :---: |
| ![useRef: 계산기 + 계산 후 자동 포커스 복귀](./images/week7/week7_p11_crop1.png) | ![7주 P.11~12](./images/week7/week7_p11_slide.png) |

* 🎯 **구현 조건**:
  1. A 입력창에 `ref={inputRef}`를 지정할 것
  2. 버튼 클릭 시 `handlePress` 함수에서 `multiply()`를 실행한 직후 `focusInput()`을 호출하여 다시 A 입력창으로 포커스를 복귀시킬 것

```javascript
import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
  // [TODO] 계산 실행 후 자동으로 A 입력창으로 포커스 이동시키는 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});
```

---

### [문제 46] useEffect: 컴포넌트 마운트 시 최초 1회 실행 (7주 P.14)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.14) |
| :---: | :---: |
| ![useEffect: 컴포넌트 마운트 시 최초 1회 실행](./images/week7/week7_p14_crop1.png) | ![7주 P.14](./images/week7/week7_p14_slide.png) |

* 🎯 **구현 조건**:
  1. 컴포넌트가 처음 화면에 렌더링될 때(마운트 시) 딱 한 번만 실행되도록 `useEffect`를 작성할 것
  2. 의존성 배열로 빈 배열(`[]`)을 전달할 것
  3. 콘솔에 '앱이 실행되었습니다! (처음 한 번만)'을 출력할 것

```javascript
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  // [TODO] 최초 1회만 실행되는 useEffect 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30 },
});
```

---

### [문제 47] useEffect: 특정 상태 변경 감지 (7주 P.15)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.15) |
| :---: | :---: |
| ![useEffect: 특정 상태 변경 감지](./images/week7/week7_p15_crop1.png) | ![7주 P.15](./images/week7/week7_p15_slide.png) |

* 🎯 **구현 조건**:
  1. `count` 상태를 선언하고, 버튼 누르면 `setCount(count + 1)` 할 것
  2. `useEffect`의 의존성 배열에 `[count]`를 지정하여 `count` 값이 변경될 때마다 콘솔에 'count 값이 바뀌었습니다: {count}'를 출력할 것

```javascript
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  // [TODO] count 상태 변경을 감지하는 useEffect 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});
```

---

### [문제 48] useMemo: 연산 캐싱 최적화 (시험 단골!) (7주 P.17~18)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.17~18) |
| :---: | :---: |
| ![useMemo: 연산 캐싱 최적화 (시험 단골!)](./images/week7/week7_p17_crop1.png) | ![7주 P.17~18](./images/week7/week7_p17_slide.png) |

* 🎯 **구현 조건**:
  1. `const [count, setCount] = useState(0)` 및 `const [text, setText] = useState("")` 선언
  2. `useMemo`를 사용하여 `count`가 변경될 때만 `double = count * 2` 계산을 실행하고 콘솔에 'double 계산 실행!' 출력
  3. '텍스트 변경' 버튼 클릭으로 `text`가 바뀌어도 `double` 연산은 재실행되지 않도록 의존성 배열을 `[count]`로 지정할 것

```javascript
import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  // [TODO] useMemo를 활용한 연산 최적화 코드를 작성하시오.




}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});
```

---

### [문제 49] 7주차 실습 과제: 아이폰 계산기 UI 스타일링 스펙 (7주 P.19)

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.19) |
| :---: | :---: |
| ![7주차 실습 과제: 아이폰 계산기 UI 스타일링 스펙](./images/week7/week7_p19_slide.png) | ![7주 P.19](./images/week7/week7_p19_slide.png) |

* 🎯 **구현 조건**:
  1. 배경색: `backgroundColor: 'black'`
  2. 디스플레이 텍스트: `color: 'white'`, `fontSize: 84`, `textAlign: 'right'`
  3. 버튼 스펙: `height: 64`, `borderRadius: 32`
     - 숫자 버튼: `backgroundColor: '#2f2f2f'`
     - 연산자 버튼: `backgroundColor: '#F5A623'`
     - 기능(유틸리티) 버튼: `backgroundColor: '#555'`
     - 버튼 텍스트: `color: 'white'`, `fontSize: 30`, `fontWeight: '500'`

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  // [TODO] 조건 1~3의 계산기 스타일링 스펙을 만족하는 UI를 작성하시오.




}

// [TODO] styles 객체에 상세 스펙을 정의하시오.
const styles = StyleSheet.create({

});
```

---

