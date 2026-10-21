# 📝 React Native 실전 시험 대비 빈칸 문제집 (통합본)

> **스마트폰 실행 화면 보고 핵심 코드 백지 복원하기 (3주차 ~ 7주차 총 49개 핵심 실전 문제)**
> 문제를 풀고 하단의 `💡 [정답 및 교수님 채점 포인트 확인]` 토글을 클릭하여 바로 정답과 핵심 원리를 맞춰보세요!

---


# 📌 3주차

### [문제 01] 정렬 기본 템플릿 (Expo 기본 구조) (3주 P.04)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.04) |
| :---: | :---: |
| ![정렬 기본 템플릿 (Expo 기본 구조)](./images/week3/week3_p04_crop1.png) | ![3주 P.04](./images/week3/week3_p04_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 컴포넌트가 화면 전체(`flex: 1`)를 차지하고 배경색을 흰색(`#fff`)으로 설정할 것
  2. 화면 내부 요소를 가로/세로 중앙 정렬(`alignItems: 'center'`, `justifyContent: 'center'`)할 것
  3. 'Open up App.js to start working on your app!' 텍스트를 출력할 것
  4. Expo 상태 표시줄 `<StatusBar style="auto" />`을 포함할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`View`의 스타일로 `styles.container` 연결 여부**
- ⚠️ **`Text` 태그로 안내 문구 정상 감싸기**
- ⚠️ **`StatusBar` 컴포넌트 포함 여부**

</details>

---

### [문제 02] 스타일링: 영어 다중 Text 출력 (3주 P.08)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.08) |
| :---: | :---: |
| ![스타일링: 영어 다중 Text 출력](./images/week3/week3_p08_crop1.png) | ![3주 P.08](./images/week3/week3_p08_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 기본 중앙 정렬 컨테이너(`styles.container`) 내부에 2개의 Text 컴포넌트를 배치할 것
  2. 첫 번째 줄에 'Open up App.js to start working on your app!' 출력
  3. 두 번째 줄에 'First My Project !' 출력

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>First My Project !</Text>
      <StatusBar style="auto" />
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **두 개의 `Text` 컴포넌트가 하나의 부모 `View` 안에 순서대로 나열되었는지 확인**

</details>

---

### [문제 03] 스타일링: 한글 줄바꿈 문법 ({"\n"}) (3주 P.09)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.09) |
| :---: | :---: |
| ![스타일링: 한글 줄바꿈 문법 ({"\n"})](./images/week3/week3_p09_crop1.png) | ![3주 P.09](./images/week3/week3_p09_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 리액트 네이티브 JSX 내부에서 개행(줄바꿈)을 처리하기 위해 {\"\\n\"} 표현식을 사용할 것
  2. 다음 문구가 한 Text 컴포넌트 내에서 4줄로 출력되도록 작성할 것:
     - 처음 시작하는 리액트 네이티브 프로그래밍 !
     - 학과: 소프트웨어공학
     - 학번: 123456
     - 이름: 홍길동

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Text>
        처음 시작하는 리액트 네이티브 프로그래밍 !{"\n"}
        학과: 소프트웨어공학 {"\n"}
        학번: 123456{"\n"}
        이름: 홍길동
      </Text>
      <StatusBar style="auto" />
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **단순 엔터가 아닌 {"\n"}을 사용하여 JSX 내 명시적 줄바꿈을 구현했는지 여부 (교수님 빈출 포인트)**

</details>

---

### [문제 04] 스타일링: 주석 처리 (JSX 주석 vs JS 주석) (3주 P.10)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.10) |
| :---: | :---: |
| ![스타일링: 주석 처리 (JSX 주석 vs JS 주석)](./images/week3/week3_p10_crop1.png) | ![3주 P.10](./images/week3/week3_p10_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 함수 외부에 JS 한 줄 주석(`//`)으로 '과목명: 리액트 네이티브 프로그래밍' 작성
  2. 함수 외부에 JS 여러 줄 주석(`/* */`)으로 '이름: 홍길동' 작성
  3. JSX return 내부에서 '<Text>처음 시작하는 리액트 네이티브 프로그래밍 !</Text>'를 주석 처리할 것 (반드시 `{/* */}` 형태 사용)

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// 과목명: 리액트 네이티브 프로그래밍
/* 이름: 홍길동 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>처음 시작하는 리액트 네이티브 프로그래밍 !</Text>
      {/* <Text>처음 시작하는 리액트 네이티브 프로그래밍 !</Text> */}
      <StatusBar style="auto" />
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **JSX 태그 사이에서 `//`나 `/* */`를 그냥 쓰면 화면에 문자로 렌더링되므로, 반드시 중괄호 `{/* 주석 내용 */}`으로 감싸야 함**

</details>

---

### [문제 05] 인라인 스타일링 (Inline Styling) (3주 P.11)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.11) |
| :---: | :---: |
| ![인라인 스타일링 (Inline Styling)](./images/week3/week3_p11_crop1.png) | ![3주 P.11](./images/week3/week3_p11_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 별도의 StyleSheet 없이 컴포넌트의 `style={{ ... }}` 속성에 직접 스타일 객체를 전달할 것
  2. 컨테이너: flex 1, 배경 흰색, 중앙 정렬
  3. 첫 번째 Text: padding 10, fontSize 26, fontWeight '600'(문자열 주의), 검정 글씨 ('Inline Styling - Text')
  4. 두 번째 Text: padding 10, fontSize 26, fontWeight '400'(문자열 주의), 빨간 글씨 ('Inline Styling - Error')

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
```javascript
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  // [TODO] StyleSheet를 쓰지 않고 오직 인라인 스타일링만으로 화면을 구현하시오.




}

```

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
    return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "600", // 숫자가 아닌 문자열로 지정
          color: "black",
        }}>
        Inline Styling - Text
      </Text>
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "400", // 숫자가 아닌 문자열로 지정
          color: "red",
        }}>
        Inline Styling - Error
      </Text>
    </View>
  );
}

```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`style={{ }}` 이중 중괄호 문법 (바깥은 JSX 표현식, 안쪽은 자바스크립트 객체)**
- ⚠️ **`fontWeight` 값은 숫자가 아닌 반드시 따옴표로 감싼 문자열 (`'600'`, `'400'`)이어야 함**

</details>

---

### [문제 06] 클래스 스타일링 (StyleSheet.create) (3주 P.12)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.12) |
| :---: | :---: |
| ![클래스 스타일링 (StyleSheet.create)](./images/week3/week3_p12_crop1.png) | ![3주 P.12](./images/week3/week3_p12_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `StyleSheet.create`를 사용하여 `container`, `text`, `error` 3가지 스타일 객체를 정의할 것
  2. `text`: padding 10, fontSize 26, fontWeight '600', color 'black'
  3. `error`: padding 10, fontSize 26, fontWeight '400', color 'red'
  4. 컴포넌트에 `styles.text`, `styles.error`로 바인딩할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Inline Styling - Text</Text>
      <Text style={styles.error}>Inline Styling - Error</Text>
    </View>
  );
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
    padding: 10,
    fontSize: 26,
    fontWeight: '400',
    color: 'red',
  },
});
}


```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`StyleSheet.create` 기본 문법 구조**
- ⚠️ **`style={styles.text}`와 `style={styles.error}`로 클래스 스타일 매핑**

</details>

---

### [문제 07] 여러 개의 스타일 적용 (배열 스타일링) (3주 P.13)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.13) |
| :---: | :---: |
| ![여러 개의 스타일 적용 (배열 스타일링)](./images/week3/week3_p13_crop1.png) | ![3주 P.13](./images/week3/week3_p13_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `styles.text`에는 공통 속성(padding: 10, fontSize: 26, fontWeight: '600', color: 'black')을 정의할 것
  2. `styles.error`에는 변경할 속성(fontWeight: '400', color: 'red')만 정의할 것
  3. 두 번째 Text 컴포넌트에 **배열**을 사용하여 두 스타일을 병합 적용할 것 (`style={[styles.text, styles.error]}`)

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Inline Styling - Text</Text>
      <Text style={[styles.text, styles.error]}>Inline Styling - Error</Text>
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **배열 구문 `style={[styles.text, styles.error]}` 작성 여부**
- ⚠️ **배열의 뒤쪽에 위치한 스타일(`styles.error`)이 앞선 스타일의 동일 속성을 덮어씌운다는 원리 이해**

</details>

---

### [문제 08] 외부 스타일 이용하기 (App.js & styles.js 모듈 분리) (3주 P.14~15)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.14~15) |
| :---: | :---: |
| ![외부 스타일 이용하기 (App.js & styles.js 모듈 분리)](./images/week3/week3_p14_crop1.png) | ![3주 P.14~15](./images/week3/week3_p14_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `src/styles.js` 파일에서 `viewStyles`와 `textStyles`를 named export(`export const`)할 것
  2. `App.js` 파일에서 `./src/styles`로부터 두 스타일 객체를 import하여 적용할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
// [파일 1: src/styles.js]
import { StyleSheet } from "react-native";
// [파일 1: src/styles.js]
import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const textStyles = StyleSheet.create({
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

// [파일 2: App.js]
import React from "react";
import { View, Text } from "react-native";
import { viewStyles, textStyles } from "./src/styles";

export default function App() {
  return (
    <View style={viewStyles.container}>
      <Text style={textStyles.text}>Inline Styling - Text</Text>
      <Text style={textStyles.error}>Inline Styling - Error</Text>
    </View>
  );
}
}
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **외부 모듈 분리 시 `export const`와 `import { ... } from './src/styles'` 문법 매칭**
- ⚠️ **`style={viewStyles.container}`, `style={textStyles.text}` 정확한 객체 참조**

</details>

---

### [문제 09] Flex와 범위: 수직 1:3:1 분할 (3주 P.16)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.16) |
| :---: | :---: |
| ![Flex와 범위: 수직 1:3:1 분할](./images/week3/week3_p16_crop1.png) | ![3주 P.16](./images/week3/week3_p16_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. Header 영역: flex 1, 노란색 배경 (`#f1c40f`), 중앙 정렬
  2. Contents 영역: flex 3, 청록색 배경 (`#1abc9c`), 중앙 정렬
  3. Footer 영역: flex 1, 파란색 배경 (`#3498db`), 중앙 정렬
  4. 총 5의 비율 중 1:3:1로 화면 전체(`container: { flex: 1 }`)를 분할할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.contents}>
        <Text style={styles.text}>Contents</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
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
  contents: {
    flex: 3,
    backgroundColor: '#1abc9c',
    alignItems: "center",
    justifyContent: "center",
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
}


```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **최상위 `container`의 `flex: 1` 설정 여부**
- ⚠️ **자식 요소들의 `flex: 1`, `flex: 3`, `flex: 1` 합산 비율 레이아웃 구조**

</details>

---

### [문제 10] Flex와 범위: 가로 분할 (flexDirection: 'row') (3주 P.17)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (3주 P.17) |
| :---: | :---: |
| ![Flex와 범위: 가로 분할 (flexDirection: 'row')](./images/week3/week3_p17_crop1.png) | ![3주 P.17](./images/week3/week3_p17_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. Contents 영역에 `flexDirection: 'row'`를 지정하여 내부 요소를 가로로 나란히 배치할 것
  2. Contents 내부에 Contents Left(flex: 1, `#16a085`)와 Contents Right(flex: 1, `#27ae60`) 2개 영역을 1:1로 가로 분할할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.contents}>
        <View style={styles.contentsLeft}>
          <Text style={styles.text}>Contents Left</Text>
        </View>
        <View style={styles.contentsRight}>
          <Text style={styles.text}>Contents Right</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    flex: 2,
    flexDirection: "row", // 가로 분할의 핵심
  },
  contentsLeft: {
    flex: 1,
    backgroundColor: "#16a085",
    alignItems: "center",
    justifyContent: "center",
  },
  contentsRight: {
    flex: 1,
    backgroundColor: "#27ae60",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 26 },
});
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
  
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **부모 컨테이너에 `flexDirection: 'row'` 적용 여부**
- ⚠️ **가로로 배치된 자식들에 `flex: 1`을 부여하여 가로 공간 균등 분할 구현 여부**

</details>

---


# 📌 4주차

### [문제 11] View: Flex 복합 그리드 4분할 레이아웃 (4주 P.04)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.04) |
| :---: | :---: |
| ![View: Flex 복합 그리드 4분할 레이아웃](./images/week4/week4_p04_crop1.png) | ![4주 P.04](./images/week4/week4_p04_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. Header와 Footer 사이에 Contents 영역(`flex: 3, flexDirection: 'row'`)을 둘 것
  2. Contents 좌측(Left)과 우측(Right)을 각각 상/하(Top, Bottom)로 2등분하여 총 4개 칸을 구성할 것
  3. 각 칸에 'Contents Left Top', 'Contents Left Bottom', 'Contents Right Top', 'ContentsRightBottom' 텍스트를 중앙 배치할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.contents}>
        <View style={styles.contentsLeft}>
          <View style={styles.contentsLeftTop}>
            <Text style={styles.text}>Contents Left Top</Text>
          </View>
          <View style={styles.contentsLeftBottom}>
            <Text style={styles.text}>Contents Left Bottom</Text>
          </View>
        </View>
        <View style={styles.contentsRight}>
          <View style={styles.contentsRightTop}>
            <Text style={styles.text}>Contents Right Top</Text>
          </View>
          <View style={styles.contentsRightBottom}>
            <Text style={styles.text}>ContentsRightBottom</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer} />
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`contents`의 row 방향 분할 아래에 컬럼 방향의 Left/Right를 두고, 그 안에서 다시 Top/Bottom 분할을 계층적으로 완성했는지 여부**

</details>

---

### [문제 12] 텍스트 중첩: Style 적용 (4주 P.05)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.05) |
| :---: | :---: |
| ![텍스트 중첩: Style 적용](./images/week4/week4_p05_crop1.png) | ![4주 P.05](./images/week4/week4_p05_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `Text` 컴포넌트 내부에 다른 `Text` 컴포넌트를 중첩(Nesting)할 것
  2. 전체 텍스트: '나는 강남대학교 학생 이다.' (크기 30, 볼드체)
  3. ' 학생 이다.' 부분에만 빨간색 글자색(`innerText: { color: 'red' }`)을 적용할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        나는 강남대학교
        <Text style={styles.innerText}> 학생 이다.</Text>
      </Text>
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`Text` 태그 안에 `Text`를 자식으로 배치할 수 있는 리액트 네이티브 특유의 중첩 문법 이해**
- ⚠️ **부모 `Text`의 `fontSize: 30`과 `fontWeight: 'bold'`를 자식 `Text`가 상속받는 원리 파악**

</details>

---

### [문제 13] 텍스트 중첩: 인라인 스타일링 (4주 P.06)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.06) |
| :---: | :---: |
| ![텍스트 중첩: 인라인 스타일링](./images/week4/week4_p06_crop1.png) | ![4주 P.06](./images/week4/week4_p06_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. StyleSheet 대신 인라인 스타일(`style={{ ... }}`)을 사용하여 Text 중첩을 구현할 것
  2. 부모 Text: `fontSize: 30`, 텍스트 '나는 강남대학교'
  3. 자식 Text: `fontSize: 30, color: 'green'`, 텍스트 ' 학생 이다.'

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>
        나는 강남대학교
        <Text style={{ fontSize: 30, color: "green" }}> 학생 이다.</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **인라인 스타일 `style={{ fontSize: 30, color: 'green' }}` 구문 작성 정확도**

</details>

---

### [문제 14] 텍스트 ScrollView (긴 본문 스크롤 지원) (4주 P.07)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.07) |
| :---: | :---: |
| ![텍스트 ScrollView (긴 본문 스크롤 지원)](./images/week4/week4_p07_crop1.png) | ![4주 P.07](./images/week4/week4_p07_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 화면을 벗어나는 긴 텍스트를 상하로 스크롤할 수 있도록 `<ScrollView>` 컴포넌트로 감쌀 것
  2. ScrollView 내부에 긴 설명 텍스트를 `styles.baseText`로 스타일링하여 표시할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.baseText}>
          React의 문법으로 안드로이드, iOS 앱을 개발할 수 있는 프레임워크이다...
        </Text>
      </ScrollView>
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`View` 대신 스크롤 컨테이너로 `ScrollView`를 정확히 사용했는지 여부**

</details>

---

### [문제 15] 텍스트 onPress 이벤트 (상태 변경 및 인터랙션) (4주 P.10)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.10) |
| :---: | :---: |
| ![텍스트 onPress 이벤트 (상태 변경 및 인터랙션)](./images/week4/week4_p10_crop1.png) | ![4주 P.10](./images/week4/week4_p10_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `useState`로 `titleText` 상태를 정의하고 초기값을 `'지금, 무슨 과목:[클릭 ㅋㅋ]'`으로 둘 것
  2. 제목 텍스트 클릭 시 호출할 `onPressTitle` 함수를 정의하여 상태를 `'크로스 플랫폼 과목 !!!'`으로 변경할 것
  3. 중첩된 자식 Text 컴포넌트에 `onPress={onPressTitle}` 핸들러를 연결할 것
  4. 본문 텍스트에 `numberOfLines={5}` 속성을 지정할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [titleText, setTitleText] = useState("지금, 무슨 과목:[클릭 ㅋㅋ]");
  const bodyText = '미래를 준비하는 젊은 지성인의 새로운 세계';

  const onPressTitle = () => {
    setTitleText("크로스 플랫폼 과목 !!!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        {"\n\n"}
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
        </Text>
        {"\n\n"}
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`const [titleText, setTitleText] = useState(...)` 상태 훅 사용**
- ⚠️ **`Text` 태그에도 `onPress` 속성을 연결할 수 있다는 점 파악**
- ⚠️ **`numberOfLines` 속성 활용**

</details>

---

### [문제 16] 버튼 기본 컴포넌트 (Button) (4주 P.11)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.11) |
| :---: | :---: |
| ![버튼 기본 컴포넌트 (Button)](./images/week4/week4_p11_crop1.png) | ![4주 P.11](./images/week4/week4_p11_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 리액트 네이티브의 기본 `<Button />` 컴포넌트를 중앙에 렌더링할 것
  2. 버튼 제목(`title`) 속성에 '버튼 만들기'를 지정할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Button title="버튼 만들기" />
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`Button` 컴포넌트의 필수 속성인 `title` 속성 지정 여부 (`children` 텍스트 방식이 아님에 주의)**

</details>

---

### [문제 17] 버튼 팝업 메시지 (단일 Alert.alert) (4주 P.12)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.12) |
| :---: | :---: |
| ![버튼 팝업 메시지 (단일 Alert.alert)](./images/week4/week4_p12_crop1.png) | ![4주 P.12](./images/week4/week4_p12_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 버튼의 배경 색상을 핑크색(`color="#f194ff"`)으로 지정할 것
  2. 버튼을 누르면(`onPress`) `Alert.alert('핑크 버튼 누름')` 팝업을 띄울 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Button 
        title="버튼 만들기"
        color="#f194ff"
        onPress={() => Alert.alert('핑크 버튼 누름')}
      />
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`color` 속성으로 버튼 색상 변경**
- ⚠️ **`Alert.alert(...)` 호출 문법**

</details>

---

### [문제 18] 버튼 팝업 취소/확인 (2버튼 Alert.alert) (4주 P.13)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.13) |
| :---: | :---: |
| ![버튼 팝업 취소/확인 (2버튼 Alert.alert)](./images/week4/week4_p13_crop1.png) | ![4주 P.13](./images/week4/week4_p13_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 버튼 클릭 시 제목 '핑크버튼', 메시지 '핑크 버튼 누름'의 Alert를 띄울 것
  2. Alert에 2개의 버튼 배열을 넘길 것:
     - 버튼 1: text: '취소', style: 'cancel', 콘솔에 '취소 버튼 클릭' 출력
     - 버튼 2: text: '확인', 콘솔에 '확인 버튼 클릭' 출력

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Button 
        title="버튼 만들기"
        color="#f194ff"
        onPress={() => Alert.alert(
          '핑크버튼',
          '핑크 버튼 누름',
          [
            {
              text: "취소",
              onPress: () => console.log("취소 버튼 클릭"),
              style: "cancel",
            },
            { 
              text: "확인", 
              onPress: () => console.log("확인 버튼 클릭") 
            },
          ]
        )}
      />
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`Alert.alert(title, message, buttonsArray)`의 3번째 인자 배열 구조**
- ⚠️ **`style: 'cancel'` 속성 지정**

</details>

---

### [문제 19] 텍스트 입력: 기본 TextInput (실시간 상태 반영) (4주 P.14)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.14) |
| :---: | :---: |
| ![텍스트 입력: 기본 TextInput (실시간 상태 반영)](./images/week4/week4_p14_crop1.png) | ![4주 P.14](./images/week4/week4_p14_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `useState("")`로 `text` 상태를 선언할 것
  2. TextInput에 `placeholder="여기에 입력"`, `value={text}`, `onChangeText={(value) => setText(value)}`를 연결할 것
  3. 입력창 아래에 `<Text>입력값: {text}</Text>`를 실시간으로 출력할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
    const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이름을 입력하세요:</Text>
      <TextInput
        style={styles.input}
        placeholder="여기에 입력"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Text style={styles.output}>입력값: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`onChange`가 아니라 `onChangeText`를 사용한다는 점 (React Native 전용)**
- ⚠️ **`value`와 `onChangeText`의 양방향 바인딩**

</details>

---

### [문제 20] 텍스트 입력: 텍스트 vs 숫자 (비밀번호 정규식 필터링) (4주 P.15)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.15) |
| :---: | :---: |
| ![텍스트 입력: 텍스트 vs 숫자 (비밀번호 정규식 필터링)](./images/week4/week4_p15_crop1.png) | ![4주 P.15](./images/week4/week4_p15_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 숫자만 입력받는 비밀번호 입력창에 `keyboardType="numeric"`을 지정할 것
  2. `onChangeText`에서 정규식 `value.replace(/[^0-9]/g, "")`을 적용하여 숫자가 아닌 모든 문자를 제거한 후 상태에 저장할 것
  3. 아래에 '입 력 값: {text}'와 '비밀번호: {number}'를 각각 출력할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
    const [text, setText] = useState("");
  const [number, onNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이름을 입력하세요:</Text>
      <TextInput
        style={styles.input}
        placeholder="여기에 입력"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        keyboardType="numeric"
        secureTextEntry={false}
        value={number}
        onChangeText={(value) => onNumber(value.replace(/[^0-9]/g, ""))}
      />
      <Text style={styles.output}>입 력 값: {text}</Text>
      <Text style={styles.output}>비밀번호: {number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`keyboardType='numeric'` 지정**
- ⚠️ **정규식 `replace(/[^0-9]/g, "")`을 통한 숫자 외 문자 입력 차단**

</details>

---

### [문제 21] 텍스트 입력: 여러 줄 입력 (multiline 속성) (4주 P.16)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.16) |
| :---: | :---: |
| ![텍스트 입력: 여러 줄 입력 (multiline 속성)](./images/week4/week4_p16_crop1.png) | ![4주 P.16](./images/week4/week4_p16_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. TextInput에 편집 가능(`editable`), 여러 줄 입력 가능(`multiline`) 속성을 부여할 것
  2. 최대 표시 줄 수 `numberOfLines={4}`와 최대 글자 수 `maxLength={40}`을 지정할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from "react";
import { StyleSheet, View, TextInput } from 'react-native';

export default function App() {
    const [value, onChangeText] = useState('Useless Multiline Placeholder');

  return (
    <View style={styles.container}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, margin: 12 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`multiline` 불리언 속성 적용**
- ⚠️ **`numberOfLines={4}`, `maxLength={40}` 수치 속성 지정**

</details>

---

### [문제 22] 텍스트 입력: 여러 줄 입력 Alert 연동 및 초기화 (4주 P.17)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (4주 P.17) |
| :---: | :---: |
| ![텍스트 입력: 여러 줄 입력 Alert 연동 및 초기화](./images/week4/week4_p17_crop1.png) | ![4주 P.17](./images/week4/week4_p17_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 'Press me' 버튼 클릭 시 호출되는 `handlePress` 함수를 작성할 것
  2. Alert 창으로 제목 'Input Data', 내용에 현재 입력된 `value || "(Empty)"`를 띄울 것
  3. Alert 확인 버튼을 누르면 입력창 내용이 빈 문자열(`setValue("")`)로 초기화되도록 콜백을 지정할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function App() {
    const [value, setValue] = useState("");

  const handlePress = () => {
    Alert.alert(
      "Input Data",
      value || "(Empty)",
      [
        {
          text: "확인",
          onPress: () => setValue(""), // 확인 시 입력창 비우기
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="여기에 입력하세요"
        style={styles.textInput}
      />
      <Button title="Press me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, marginVertical: 10 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **Alert 버튼 콜백 `onPress: () => setValue("")`을 통한 상태 초기화 구현 여부**

</details>

---


# 📌 5주차

### [문제 23] 자바스크립트 변수 바인딩 ({name}) (5주 P.05~06)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.05~06) |
| :---: | :---: |
| ![자바스크립트 변수 바인딩 ({name})](./images/week5/week5_p06_crop1.png) | ![5주 P.05~06](./images/week5/week5_p06_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 변수 `const name = 'Beomjun'`을 선언할 것
  2. JSX 내부에서 중괄호 `{name}` 바인딩을 사용하여 'My name is Beomjun' 텍스트를 출력할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const name = 'Beomjun';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **JSX 내부에서 자바스크립트 표현식을 쓸 때 중괄호 `{name}`을 사용한다는 기본 문법**

</details>

---

### [문제 24] 조건문: if 조건문 분기 (5주 P.07)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.07) |
| :---: | :---: |
| ![조건문: if 조건문 분기](./images/week5/week5_p07_crop1.png) | ![5주 P.07](./images/week5/week5_p07_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `const name = 'Beomjun'` 변수 선언
  2. `if (name === 'Beomjun')`이면 `message = 'My name is ' + name` 할당
  3. 그렇지 않으면 `message = "I'm not Beomjun"` 할당
  4. JSX 내부에서 `<Text style={styles.text}>{message}</Text>` 출력

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const name = 'Beomjun';
  let message = '';

  if (name === 'Beomjun') {
    message = 'My name is ' + name;
  } else {
    message = "I'm not Beomjun";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **JSX 외부에서 if문으로 연산 후 결과를 JSX 내부에 삽입하는 패턴**

</details>

---

### [문제 25] 조건문: 삼항연산자 (Ternary Operator) (5주 P.08)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.08) |
| :---: | :---: |
| ![조건문: 삼항연산자 (Ternary Operator)](./images/week5/week5_p08_crop1.png) | ![5주 P.08](./images/week5/week5_p08_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. JSX 내부에서 삼항연산자(`? :`)를 직접 사용할 것
  2. `name === 'Beomjun'`이 참이면 "My name is Beomjun", 거짓이면 "I'm not Beomjun"을 표시할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Beomjun';

    return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name === 'Beomjun' ? "My name is Beomjun" : "I'm not Beomjun"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **JSX 표현식 안에서 if문은 사용 불가하지만 삼항연산자 `{조건 ? 참 : 거짓}`은 바로 쓸 수 있다는 핵심 원리**

</details>

---

### [문제 26] 조건문: AND/OR 연산자 단축 평가 (5주 P.09)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.09) |
| :---: | :---: |
| ![조건문: AND/OR 연산자 단축 평가](./images/week5/week5_p09_crop1.png) | ![5주 P.09](./images/week5/week5_p09_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `name1 === 'Beomjun'`일 때 AND(`&&`) 연산자로 'My name is Beomjun' 출력
  2. `name1 !== 'Beomjun'`일 때 AND(`&&`) 연산자로 'My name is not Beomjun' 출력
  3. `name2 === 'JongSoo'`일 때 OR(`||`) 연산자로 "I'm not Beomjun's friend" 대체 출력
  4. `name2 !== 'JongSoo'`일 때 OR(`||`) 연산자로 "I'm Beomjun's friend" 대체 출력

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name1 = 'Beomjun';
  const name2 = 'JongSoo';

    return (
    <View style={styles.container}>
      {/* AND 조건 */}
      <Text style={styles.text}>
        {name1 === 'Beomjun' && 'My name is Beomjun'}
      </Text>
      <Text style={styles.text}>
        {name1 !== 'Beomjun' && 'My name is not Beomjun'}
      </Text>

      {/* OR 조건 */}
      <Text style={styles.text}>
        {name2 === 'JongSoo' || "I'm not Beomjun's friend"}
      </Text>
      <Text style={styles.text}>
        {name2 !== 'JongSoo' || "I'm Beomjun's friend"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, marginVertical: 5 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **자바스크립트 논리 연산자 단축 평가(Short-circuit evaluation)의 JSX 렌더링 동작 이해**

</details>

---

### [문제 27] Image 컴포넌트: 로컬 이미지 불러오기 (5주 P.10)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.10) |
| :---: | :---: |
| ![Image 컴포넌트: 로컬 이미지 불러오기](./images/week5/week5_p10_crop1.png) | ![5주 P.10](./images/week5/week5_p10_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 리액트 네이티브의 `<Image />` 컴포넌트를 사용할 것
  2. 로컬 이미지 파일 `./kangnam.png`를 `source={require('./kangnam.png')}`로 불러올 것
  3. 이미지 크기를 가로 200, 세로 200으로 지정할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
    return (
    <View style={styles.container}>
      <Image
        source={require('./kangnam.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **웹 HTML의 `src="..."`와 달리 리액트 네이티브에서는 `source={require('경로')}`를 사용한다는 점 (교수님 단골 문제)**

</details>

---

### [문제 28] Switch 컴포넌트: 다크 모드 토글 (5주 P.11)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.11) |
| :---: | :---: |
| ![Switch 컴포넌트: 다크 모드 토글](./images/week5/week5_p11_crop1.png) | ![5주 P.11](./images/week5/week5_p11_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `useState(false)`로 `darkMode` 불리언 상태를 선언할 것
  2. `Switch` 컴포넌트에 `value={darkMode}`, `onValueChange={setDarkMode}`를 연결할 것
  3. `darkMode` 상태에 따라 화면 배경색(`black` / `white`)과 텍스트 색상(`white` / `black`)을 삼항연산자로 반전시킬 것
  4. 텍스트로 '스위치: ON' 또는 '스위치: OFF'를 표시할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? 'black' : 'white' },
      ]}>
      <Text style={[styles.text, { color: darkMode ? 'white' : 'black' }]}>
        {darkMode ? '스위치: ON' : '스위치: OFF'}
      </Text>
      <Switch
        value={darkMode}
        onValueChange={setDarkMode}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginBottom: 20, fontSize: 20 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`Switch`의 `value`와 `onValueChange` 속성**
- ⚠️ **배열 스타일링 `style={[styles.container, { backgroundColor: ... }]}`을 통한 동적 테마 적용**

</details>

---

### [문제 29] FlatList 컴포넌트: 대용량 목록 렌더링 (5주 P.12)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.12) |
| :---: | :---: |
| ![FlatList 컴포넌트: 대용량 목록 렌더링](./images/week5/week5_p12_crop1.png) | ![5주 P.12](./images/week5/week5_p12_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 주어진 `data` 배열을 `<FlatList />` 컴포넌트로 화면에 출력할 것
  2. `keyExtractor` 속성으로 `item.id`를 고유 키로 추출할 것
  3. `renderItem` 속성에서 `({ item }) => <Text style={styles.item}>{item.id} : {item.name}</Text>` 형태로 각 행을 렌더링할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
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

    return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.id} : {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  item: { fontSize: 24, padding: 10 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`FlatList`의 3대 필수 속성인 `data`, `keyExtractor`, `renderItem` 완벽 암기 여부 (시험 출제 1순위)**
- ⚠️ **`renderItem`의 인자가 `({ item })` 구조분해할당 객체라는 점**

</details>

---

### [문제 30] SectionList 컴포넌트: 그룹별 목록 렌더링 (5주 P.13)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (5주 P.13) |
| :---: | :---: |
| ![SectionList 컴포넌트: 그룹별 목록 렌더링](./images/week5/week5_p13_crop1.png) | ![5주 P.13](./images/week5/week5_p13_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 섹션 데이터 `DATA`를 `<SectionList />`로 출력할 것
  2. `sections` 속성에 `DATA`를 전달할 것
  3. `renderItem`에서 개별 항목 `▣ {item}`을 출력할 것
  4. `renderSectionHeader`에서 섹션 헤더 `섹션: {title}`을 출력할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

export default function App() {
  const DATA = [
    { title: 'A', data: ['Alex', 'Amy', 'Andrew'] },
    { title: 'B', data: ['Beomjun', 'Bella', 'Brian'] },
    { title: 'C', data: ['Chris', 'Cindy', 'Clara'] },
  ];

    return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}> ▣ {item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>섹션: {title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50, paddingHorizontal: 20 },
  header: { fontSize: 24, fontWeight: 'bold', backgroundColor: '#eee', paddingVertical: 5 },
  item: { fontSize: 20, paddingVertical: 4, paddingLeft: 10 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **FlatList의 `data` 대신 SectionList는 `sections` 속성을 사용한다는 차이점**
- ⚠️ **`renderSectionHeader={({ section: { title } }) => ...}` 속성 사용**

</details>

---


# 📌 6주차

### [문제 31] BackHandler: 안드로이드 물리 뒤로가기 버튼 제어 (6주 P.04)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.04) |
| :---: | :---: |
| ![BackHandler: 안드로이드 물리 뒤로가기 버튼 제어](./images/week6/week6_p04_crop1.png) | ![6주 P.04](./images/week6/week6_p04_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 컴포넌트 마운트 시 `BackHandler.addEventListener('hardwareBackPress', backAction)` 등록
  2. Alert 팝업('잠깐!', '정말로 뒤로 가기를 원하십니까?')에서 'YES: 예' 클릭 시 `BackHandler.exitApp()` 호출
  3. 기본 뒤로가기 동작을 방지하기 위해 핸들러가 `return true;`를 반환할 것
  4. `useEffect` 클린업 함수에서 `backHandler.remove()`로 리스너를 해제할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';

export default function App() {
    useEffect(() => {
    const backAction = () => {
      Alert.alert('잠깐!', '정말로 뒤로 가기를 원하십니까?', [
        {
          text: 'Cancel: 아니오',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES: 예', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>뒤로가기 버튼를 눌러주세요 !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **이벤트명 `'hardwareBackPress'` 정확성**
- ⚠️ **`BackHandler.exitApp()` 호출**
- ⚠️ **`return true;`를 통한 기본 뒤로가기 이벤트 소비/차단**
- ⚠️ **클린업에서 `backHandler.remove()` 해제**

</details>

---

### [문제 32] DrawerLayoutAndroid: 서랍 메뉴 네비게이션 (6주 P.05~06)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.05~06) |
| :---: | :---: |
| ![DrawerLayoutAndroid: 서랍 메뉴 네비게이션](./images/week6/week6_p05_crop1.png) | ![6주 P.05~06](./images/week6/week6_p05_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `drawer = useRef(null)` 참조를 선언하고 `<DrawerLayoutAndroid ref={drawer}>`에 연결할 것
  2. 서랍 위치(`drawerPosition`)를 상태로 관리하고 버튼 클릭 시 'left'와 'right'를 상호 전환할 것
  3. 서랍 내부에 보여줄 `renderNavigationView` 함수를 정의하고 'Close drawer' 버튼 클릭 시 `drawer.current?.closeDrawer()`를 호출할 것
  4. 화면 중앙의 'Open drawer' 버튼 클릭 시 `drawer.current?.openDrawer()`로 서랍을 열 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Button } from 'react-native';

export default function App() {
    const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  navigationContainer: { backgroundColor: '#ecf0f1' },
  paragraph: { padding: 16, fontSize: 15, textAlign: 'center' },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`useRef`를 통한 `openDrawer()` 및 `closeDrawer()` 메서드 호출**
- ⚠️ **`drawerWidth`, `drawerPosition`, `renderNavigationView` 필수 속성 매핑**

</details>

---

### [문제 33] ToastAndroid: 토스트 알림 및 위치 오프셋 제어 (6주 P.07)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.07) |
| :---: | :---: |
| ![ToastAndroid: 토스트 알림 및 위치 오프셋 제어](./images/week6/week6_p07_crop1.png) | ![6주 P.07](./images/week6/week6_p07_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 'Toggle Toast' 버튼 누르면 `ToastAndroid.show('기본 토스트 메세지 !', ToastAndroid.SHORT)` 호출
  2. 핑크 버튼 누르면 `ToastAndroid.showWithGravityAndOffset(...)`을 사용하여 지속시간 `ToastAndroid.LONG`, 위치 `ToastAndroid.CENTER`, x오프셋 `25`, y오프셋 `50`으로 토스트를 띄울 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, ToastAndroid, View, Button } from 'react-native';

export default function App() {
    const showToast = () => {
    ToastAndroid.show('기본 토스트 메세지 !', ToastAndroid.SHORT);
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'TOGGLE TOAST WITH GRAVITY & OFFSET 메세지 !',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50,
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Toast" onPress={showToast} />
      <View style={styles.buttonWrap} />
      <Button
        title="Toggle Toast With Gravity & Offset"
        color="#f194ff"
        onPress={showToastWithGravityAndOffset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', paddingTop: 20, paddingHorizontal: 20, backgroundColor: '#fff', padding: 8 },
  buttonWrap: { marginBottom: 2, height: 5 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`ToastAndroid.SHORT` / `ToastAndroid.LONG` 상수 활용**
- ⚠️ **`showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)` 인자 순서 암기**

</details>

---

### [문제 34] Animated: 페이드 인/아웃 타이밍 애니메이션 (6주 P.09~10)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.09~10) |
| :---: | :---: |
| ![Animated: 페이드 인/아웃 타이밍 애니메이션](./images/week6/week6_p09_crop1.png) | ![6주 P.09~10](./images/week6/week6_p09_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `fadeAnim = useRef(new Animated.Value(0)).current` 애니메이션 값 선언
  2. `fadeIn`: `Animated.timing`을 이용해 5초(5000ms) 동안 `toValue: 1`, `useNativeDriver: true`로 실행
  3. `fadeOut`: `Animated.timing`을 이용해 3초(3000ms) 동안 `toValue: 0`, `useNativeDriver: true`로 실행
  4. `<Animated.View>`의 `style` 속성에 `{ opacity: fadeAnim }`을 바인딩할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          { opacity: fadeAnim },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  fadingContainer: { padding: 20, backgroundColor: 'powderblue' },
  fadingText: { fontSize: 28 },
  buttonRow: { flexBasis: 100, justifyContent: 'space-evenly', marginVertical: 10 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`useRef(new Animated.Value(0)).current` 패턴**
- ⚠️ **`Animated.timing(anim, { toValue, duration, useNativeDriver }).start()`**
- ⚠️ **일반 `View`가 아닌 `<Animated.View>` 사용 및 `opacity` 바인딩**

</details>

---

### [문제 35] Dimensions: 기기 화면 해상도 측정 및 회전 감지 (6주 P.11~12)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.11~12) |
| :---: | :---: |
| ![Dimensions: 기기 화면 해상도 측정 및 회전 감지](./images/week6/week6_p11_crop1.png) | ![6주 P.11~12](./images/week6/week6_p11_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `Dimensions.get('window')`와 `Dimensions.get('screen')`으로 초기 해상도 정보 가져오기
  2. `useEffect`에서 `Dimensions.addEventListener('change', ({ window, screen }) => { ... })`로 화면 회전 감지 리스너 등록
  3. 클린업에서 `subscription?.remove()` 호출
  4. `Object.entries`와 `.map()`을 사용하여 window와 screen의 각 키와 값(`.toFixed(2)`)을 화면에 출력할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
    const windowDimensions = Dimensions.get('window');
  const screenDimensions = Dimensions.get('screen');

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        setDimensions({ window, screen });
      },
    );
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text key={key}>
          {key} - {value.toFixed(2)}
        </Text>
      ))}
      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text key={key}>
          {key} - {value.toFixed(2)}
        </Text>
      ))}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 20, marginVertical: 10 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`Dimensions.get('window')` vs `Dimensions.get('screen')` 차이점 (window는 상태표시줄 등 제외 실제 앱 가용영역)**
- ⚠️ **`Dimensions.addEventListener('change', ...)` 및 `subscription?.remove()`**

</details>

---

### [문제 36] KeyboardAvoidingView: 키보드 회피 및 바깥 터치 닫기 (6주 P.13~14)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.13~14) |
| :---: | :---: |
| ![KeyboardAvoidingView: 키보드 회피 및 바깥 터치 닫기](./images/week6/week6_p13_crop1.png) | ![6주 P.13~14](./images/week6/week6_p13_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 입력창 바깥 배경 터치 시 키보드가 내려가도록 `<TouchableWithoutFeedback onPress={Keyboard.dismiss}>`로 감쌀 것
  2. TextInput에 Username을 입력받고 Submit 버튼 클릭 시 Alert 팝업을 띄우며 확인 시 입력창 비우기

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
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
    const [value, setValue] = useState("");

  const handlePress = () => {
    Alert.alert(
      "Input Data",
      value || "(Empty)",
      [
        {
          text: "확인",
          onPress: () => setValue(""),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            onChangeText={(text) => setValue(text)}
            value={value}
          />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={handlePress} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { padding: 24, flex: 1, justifyContent: 'space-around' },
  header: { fontSize: 36, marginBottom: 48 },
  textInput: { height: 40, borderColor: '#000000', borderBottomWidth: 1, marginBottom: 36 },
  btnContainer: { backgroundColor: 'white', marginTop: 12 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`Keyboard.dismiss` 메서드를 `TouchableWithoutFeedback`의 `onPress`에 전달하는 필수 패턴**

</details>

---

### [문제 37] Linking: 외부 웹 브라우저 URL 열기 (6주 P.15)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.15) |
| :---: | :---: |
| ![Linking: 외부 웹 브라우저 URL 열기](./images/week6/week6_p15_crop1.png) | ![6주 P.15](./images/week6/week6_p15_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. '정종수 블로그' 텍스트와 '확 인' 버튼을 배치할 것
  2. '확 인' 버튼 클릭 시 `Linking.openURL('https://blog.naver.com/jongsoo67')`을 호출하여 외부 웹 브라우저를 열 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
    const handlePress = () => {
    Linking.openURL('https://blog.naver.com/jongsoo67');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>정종수 블로그</Text>
      <Button title="확 인" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  text: { fontSize: 30, marginVertical: 30, textAlign: 'center' },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`Linking.openURL('URL')` API의 사용법**

</details>

---

### [문제 38] Modal: 팝업 대화상자 레이어 (6주 P.16~17)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.16~17) |
| :---: | :---: |
| ![Modal: 팝업 대화상자 레이어](./images/week6/week6_p16_crop1.png) | ![6주 P.16~17](./images/week6/week6_p16_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `modalVisible` 불리언 상태 선언 (`useState(false)`)
  2. `<Modal>` 속성: `animationType="slide"`, `transparent={true}`, `visible={modalVisible}`
  3. 모달 내부 'Hide Modal' 버튼 클릭 시 `setModalVisible(false)`로 모달 닫기
  4. 화면의 'Show Modal' 버튼 클릭 시 `setModalVisible(true)`로 모달 열기

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
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

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`Modal`의 필수 속성 `visible={modalVisible}`**
- ⚠️ **`animationType="slide"`, `transparent={true}` 속성**

</details>

---

### [문제 39] PixelRatio: 기기 픽셀 비율 및 이미지 크기 변환 (6주 P.18~19)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.18~19) |
| :---: | :---: |
| ![PixelRatio: 기기 픽셀 비율 및 이미지 크기 변환](./images/week6/week6_p18_crop1.png) | ![6주 P.18~19](./images/week6/week6_p18_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 기기 픽셀 비율 출력: `PixelRatio.get()`
  2. 폰트 스케일 출력: `PixelRatio.getFontScale()`
  3. 레이아웃 크기 `size(50)`에 대응하는 실제 물리 픽셀 크기 변환: `PixelRatio.getPixelSizeForLayoutSize(size)`

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native';

const size = 50;
const cat = { uri: 'https://reactnative.dev/docs/assets/p_cat1.png', width: size, height: size };

export default function App() {
    return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Current Pixel Ratio is:</Text>
          <Text style={styles.value}>{PixelRatio.get()}</Text>
        </View>
        <View style={styles.container}>
          <Text>Current Font Scale is:</Text>
          <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
        </View>
        <View style={styles.container}>
          <Text>On this device images with a layout width of</Text>
          <Text style={styles.value}>{size} px</Text>
          <Image source={cat} />
        </View>
        <View style={styles.container}>
          <Text>require images with a pixel width of</Text>
          <Text style={styles.value}>
            {PixelRatio.getPixelSizeForLayoutSize(size)} px
          </Text>
          <Image
            source={cat}
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(size),
              height: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 50 },
  value: { fontSize: 24, marginBottom: 12, marginTop: 4 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`PixelRatio.get()`**
- ⚠️ **`PixelRatio.getFontScale()`**
- ⚠️ **`PixelRatio.getPixelSizeForLayoutSize(size)` 메서드명 암기**

</details>

---

### [문제 40] RefreshControl: 당겨서 새로고침 (6주 P.20~21)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (6주 P.20~21) |
| :---: | :---: |
| ![RefreshControl: 당겨서 새로고침](./images/week6/week6_p20_crop1.png) | ![6주 P.20~21](./images/week6/week6_p20_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `refreshing` 상태와 `timerRef = useRef(null)`를 선언할 것
  2. `onRefresh = useCallback(...)`에서 중복 새로고침 방지 후 `setTimeout`으로 2초 뒤 `setRefreshing(false)`로 변경할 것
  3. ScrollView의 `refreshControl` 속성에 `<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />`를 연결할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [refreshing, setRefreshing] = useState(false);
  const timerRef = useRef(null);

  const onRefresh = useCallback(() => {
    if (timerRef.current !== null) return;
    setRefreshing(true);
    timerRef.current = setTimeout(() => {
      setRefreshing(false);
      timerRef.current = null;
    }, 2000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        alwaysBounceVertical={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>아래로 당기면 새로고침됩니다.</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flex: 1, backgroundColor: 'pink' },
  scrollContent: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`ScrollView`의 `refreshControl={<RefreshControl ... />}` 속성**
- ⚠️ **`useCallback`과 타이머를 이용한 비동기 새로고침 완료 처리**

</details>

---


# 📌 7주차

### [문제 41] useState 예제 1: 카운터 (+1 / -1) (7주 P.05)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.05) |
| :---: | :---: |
| ![useState 예제 1: 카운터 (+1 / -1)](./images/week7/week7_p05_crop1.png) | ![7주 P.05](./images/week7/week7_p05_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `const [count, setCount] = useState(0)` 상태 선언
  2. '+1 증가' Pressable 버튼 클릭 시 `setCount(count + 1)`
  3. '-1 감소' Pressable 버튼 클릭 시 `setCount(count - 1)`
  4. 중앙에 '현재 카운트: {count}' 출력

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>현재 카운트: {count}</Text>
      </View>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>+1 증가</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>-1 감소</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  text: { fontSize: 30, marginBottom: 20 },
  button: { backgroundColor: '#4ab1ec', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 6, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`useState` 기본 사용법**
- ⚠️ **`Pressable`의 `onPress`에서 상태 변경 함수 호출**

</details>

---

### [문제 42] useState 예제 2: A × B 곱셈 계산기 (7주 P.06~07)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.06~07) |
| :---: | :---: |
| ![useState 예제 2: A × B 곱셈 계산기](./images/week7/week7_p06_crop1.png) | ![7주 P.06~07](./images/week7/week7_p06_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 상태: `a`(''), `b`(''), `result`(null)
  2. `multiply` 함수: `parseFloat(a)`, `parseFloat(b)`를 수행하고 하나라도 `isNaN`이면 '숫자를 입력하세요!', 정상 숫자면 곱셈 결과(`numA * numB`)를 `setResult`에 저장
  3. 'A × B 계산' Button 누르면 `multiply` 호출
  4. `result !== null`일 때만 결과 텍스트 '결과: {result}' 출력

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
    const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const multiply = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult('숫자를 입력하세요!');
    } else {
      setResult(numA * numB);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>A × B 계산기</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="A 입력"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="B 입력"
        value={b}
        onChangeText={setB}
      />
      <Button title="A × B 계산" onPress={multiply} />
      {result !== null && (
        <Text style={{ fontSize: 22, marginTop: 20 }}>결과: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`TextInput`의 문자열 입력을 `parseFloat`로 수치 변환**
- ⚠️ **`isNaN` 예외 처리 및 조건부 렌더링 `{result !== null && ...}`**

</details>

---

### [문제 43] useRef vs 일반 변수 vs useState 리렌더링 비교 (시험 출제 1순위!) (7주 P.09)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.09) |
| :---: | :---: |
| ![useRef vs 일반 변수 vs useState 리렌더링 비교 (시험 출제 1순위!)](./images/week7/week7_p09_crop1.png) | ![7주 P.09](./images/week7/week7_p09_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `render` 상태(`useState(false)`), `countRef` 참조(`useRef(0)`), 일반 변수 `let countVar = 5` 선언
  2. '클릭' 버튼: `countRef.current += 1`, `countVar += 1` 실행 (화면 리렌더링 안 일어남)
  3. '리랜더' 버튼: `setRender(!render)` 실행 (컴포넌트 리렌더링 유발 -> countRef의 누적값은 유지되어 화면에 반영되고, countVar는 다시 5로 리셋됨)

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
```javascript
import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Example() {
  // [TODO] useRef, countVar, useState 및 2개 버튼의 렌더링 차이 로직을 작성하시오.




}

```

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Example() {
    const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 5;

  const handleClick = () => {
    countRef.current += 1;
    countVar += 1;
    console.log('현재 count:', countRef.current, ": ", countVar);
  };

  const doRender = () => {
    setRender(!render);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 30,
      }}>
      <Text style={{ fontSize: 30, marginTop: 10, marginBottom: 30 }}>
        결과값 CountRef: {countRef.current}, {"\n"}
        결과값 CountVar: {countVar}
      </Text>
      <View style={{ marginBottom: 12 }}>
        <Button title="클릭" onPress={handleClick} />
      </View>
      <View>
        <Button title="리랜더" onPress={doRender} />
      </View>
    </View>
  );
}

```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ ****교수님 주관식/단답형 단골 질문**: `useRef`의 값은 바뀌어도 리렌더링되지 않으며, 컴포넌트가 다시 렌더링되어도 값이 유지된다. 반면 일반 변수 `countVar`는 리렌더링 시 함수가 재실행되므로 초기화된다.**

</details>

---

### [문제 44] useRef: TextInput 포커스 자동 이동 (7주 P.10)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.10) |
| :---: | :---: |
| ![useRef: TextInput 포커스 자동 이동](./images/week7/week7_p10_crop1.png) | ![7주 P.10](./images/week7/week7_p10_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `inputRef = useRef(null)`을 선언하고 `<TextInput ref={inputRef}>`에 연결할 것
  2. '포커스 이동' 버튼 클릭 시 `inputRef.current?.focus()`를 호출하여 TextInput으로 커서를 이동시킬 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {
    const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        ref={inputRef}
        placeholder="이름을 입력하세요"
      />
      <Button title="포커스 이동" onPress={focusInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **컴포넌트의 `ref` 속성에 `useRef` 변수 전달**
- ⚠️ **`inputRef.current?.focus()` 메서드 호출**

</details>

---

### [문제 45] useRef: 계산기 + 계산 후 자동 포커스 복귀 (7주 P.11~12)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.11~12) |
| :---: | :---: |
| ![useRef: 계산기 + 계산 후 자동 포커스 복귀](./images/week7/week7_p11_crop1.png) | ![7주 P.11~12](./images/week7/week7_p11_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. A 입력창에 `ref={inputRef}`를 지정할 것
  2. 버튼 클릭 시 `handlePress` 함수에서 `multiply()`를 실행한 직후 `focusInput()`을 호출하여 다시 A 입력창으로 포커스를 복귀시킬 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
    const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const multiply = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult('숫자를 입력하세요!');
    } else {
      setResult(numA * numB);
    }
  };

  const handlePress = () => {
    multiply();
    focusInput(); // A 입력창으로 자동 포커스 복귀
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>A × B 계산기</Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        keyboardType="numeric"
        placeholder="A 입력"
        value={a}
        onChangeText={setA}
        returnKeyType="next"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="B 입력"
        value={b}
        onChangeText={setB}
      />
      <Button title="A × B 계산" onPress={handlePress} />
      {result !== null && (
        <Text style={{ fontSize: 22, marginTop: 20 }}>결과: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`useState` 계산 로직과 `useRef`의 DOM 포커스 제어 결합**

</details>

---

### [문제 46] useEffect: 컴포넌트 마운트 시 최초 1회 실행 (7주 P.14)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.14) |
| :---: | :---: |
| ![useEffect: 컴포넌트 마운트 시 최초 1회 실행](./images/week7/week7_p14_crop1.png) | ![7주 P.14](./images/week7/week7_p14_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 컴포넌트가 처음 화면에 렌더링될 때(마운트 시) 딱 한 번만 실행되도록 `useEffect`를 작성할 것
  2. 의존성 배열로 빈 배열(`[]`)을 전달할 것
  3. 콘솔에 '앱이 실행되었습니다! (처음 한 번만)'을 출력할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
    useEffect(() => {
    console.log("앱이 실행되었습니다! (처음 한 번만)");
  }, []); // 빈 배열 [] 지정이 핵심

  return (
    <View style={styles.container}>
      <Text style={styles.text}>useEffect 예제</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **의존성 배열 `[]`을 비워두어야 마운트 시 1회만 실행된다는 규칙 (배열 생략 시 매 렌더링마다 실행됨)**

</details>

---

### [문제 47] useEffect: 특정 상태 변경 감지 (7주 P.15)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.15) |
| :---: | :---: |
| ![useEffect: 특정 상태 변경 감지](./images/week7/week7_p15_crop1.png) | ![7주 P.15](./images/week7/week7_p15_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `count` 상태를 선언하고, 버튼 누르면 `setCount(count + 1)` 할 것
  2. `useEffect`의 의존성 배열에 `[count]`를 지정하여 `count` 값이 변경될 때마다 콘솔에 'count 값이 바뀌었습니다: {count}'를 출력할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count 값이 바뀌었습니다:", count);
  }, [count]); // 의존성 배열에 count 지정

  return (
    <View style={styles.container}>
      <Text style={styles.text}>현재 값: {count}</Text>
      <Button title="+1 증가" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **의존성 배열 `[count]`를 통해 특정 상태 변경 시에만 이펙트 함수가 재실행되도록 제어**

</details>

---

### [문제 48] useMemo: 연산 캐싱 최적화 (시험 단골!) (7주 P.17~18)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.17~18) |
| :---: | :---: |
| ![useMemo: 연산 캐싱 최적화 (시험 단골!)](./images/week7/week7_p17_crop1.png) | ![7주 P.17~18](./images/week7/week7_p17_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. `const [count, setCount] = useState(0)` 및 `const [text, setText] = useState("")` 선언
  2. `useMemo`를 사용하여 `count`가 변경될 때만 `double = count * 2` 계산을 실행하고 콘솔에 'double 계산 실행!' 출력
  3. '텍스트 변경' 버튼 클릭으로 `text`가 바뀌어도 `double` 연산은 재실행되지 않도록 의존성 배열을 `[count]`로 지정할 것

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const double = useMemo(() => {
    console.log("double 계산 실행!");
    return count * 2;
  }, [count]); // count가 변경될 때만 재계산

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>Double: {double}</Text>
      <Text style={{ marginBottom: 1 }} />
      <Button title="카운트 +1" onPress={() => setCount(count + 1)} />
      <Text style={{ marginBottom: 1 }} />
      <Button title="텍스트 변경" onPress={() => setText(text + '강남대 ')} />
      <Text style={{ marginBottom: 1 }} />
      <Text style={styles.text}>Character: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});
```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **`const val = useMemo(() => 연산식, [의존성])` 문법**
- ⚠️ ****교수님 주관식 채점 포인트**: '텍스트 변경' 버튼을 누르면 컴포넌트는 리렌더링되지만 `count`는 변하지 않았으므로 `useMemo` 콜백은 실행되지 않고 이전 계산값을 재사용한다.**

</details>

---

### [문제 49] 7주차 실습 과제: 아이폰 계산기 UI 스타일링 스펙 (7주 P.19)

* 🖼️ **목표 실행 결과 화면**:

| 에뮬레이터 실행 화면 | 슬라이드 원본 (7주 P.19) |
| :---: | :---: |
| ![7주차 실습 과제: 아이폰 계산기 UI 스타일링 스펙](./images/week7/week7_p19_slide.png) | ![7주 P.19](./images/week7/week7_p19_slide.png) |

* 🎯 **출제 의도 및 구현 조건 (교수님 채점 기준)**:
  1. 배경색: `backgroundColor: 'black'`
  2. 디스플레이 텍스트: `color: 'white'`, `fontSize: 84`, `textAlign: 'right'`
  3. 버튼 스펙: `height: 64`, `borderRadius: 32`
     - 숫자 버튼: `backgroundColor: '#2f2f2f'`
     - 연산자 버튼: `backgroundColor: '#F5A623'`
     - 기능(유틸리티) 버튼: `backgroundColor: '#555'`
     - 버튼 텍스트: `color: 'white'`, `fontSize: 30`, `fontWeight: '500'`

* 💻 **문제 코드 (보일러플레이트 제공 + 핵심부 통 빈칸)**:
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

<details>
<summary><b>💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</b></summary>

#### [완성 정답 코드]
```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [displayValue, setDisplayValue] = useState('0');

  const handleButtonPress = (val) => {
    if (val === 'C') {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue === '0' ? String(val) : displayValue + String(val));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.utilityButton]} onPress={() => handleButtonPress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleButtonPress('/')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => handleButtonPress(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => handleButtonPress(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => handleButtonPress(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleButtonPress('*')}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'flex-end', paddingBottom: 40, paddingHorizontal: 15 },
  displayContainer: { paddingHorizontal: 20, marginBottom: 20 },
  displayText: { color: 'white', fontSize: 84, textAlign: 'right' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  button: { height: 64, flex: 1, marginHorizontal: 6, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
  numberButton: { backgroundColor: '#2f2f2f' },
  operatorButton: { backgroundColor: '#F5A623' },
  utilityButton: { backgroundColor: '#555' },
  buttonText: { color: 'white', fontSize: 30, fontWeight: '500' },
});
}


```

#### 🔍 교수님 핵심 채점 포인트 & 시험 팁
- ⚠️ **주어진 슬라이드 명세(색상코드, 폰트사이즈 등) 정확한 반영**
- ⚠️ **Flexbox `justifyContent: 'flex-end'`를 이용한 하단 키패드 배치**

</details>

---

