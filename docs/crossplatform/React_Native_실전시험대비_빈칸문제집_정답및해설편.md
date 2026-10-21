# 💡 React Native 실전 시험 대비 빈칸 문제집 (정답 및 해설편)

> **3주차 ~ 7주차 총 49개 문제 모범 답안 및 교수님 채점 기준 해설**

---


# 📌 3주차

### [문제 01 정답] 정렬 기본 템플릿 (Expo 기본 구조) (3주 P.04)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`View`의 스타일로 `styles.container` 연결 여부**
- ⚠️ **`Text` 태그로 안내 문구 정상 감싸기**
- ⚠️ **`StatusBar` 컴포넌트 포함 여부**

---

### [문제 02 정답] 스타일링: 영어 다중 Text 출력 (3주 P.08)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **두 개의 `Text` 컴포넌트가 하나의 부모 `View` 안에 순서대로 나열되었는지 확인**

---

### [문제 03 정답] 스타일링: 한글 줄바꿈 문법 ({"\n"}) (3주 P.09)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **단순 엔터가 아닌 {"\n"}을 사용하여 JSX 내 명시적 줄바꿈을 구현했는지 여부 (교수님 빈출 포인트)**

---

### [문제 04 정답] 스타일링: 주석 처리 (JSX 주석 vs JS 주석) (3주 P.10)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **JSX 태그 사이에서 `//`나 `/* */`를 그냥 쓰면 화면에 문자로 렌더링되므로, 반드시 중괄호 `{/* 주석 내용 */}`으로 감싸야 함**

---

### [문제 05 정답] 인라인 스타일링 (Inline Styling) (3주 P.11)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`style={{ }}` 이중 중괄호 문법 (바깥은 JSX 표현식, 안쪽은 자바스크립트 객체)**
- ⚠️ **`fontWeight` 값은 숫자가 아닌 반드시 따옴표로 감싼 문자열 (`'600'`, `'400'`)이어야 함**

---

### [문제 06 정답] 클래스 스타일링 (StyleSheet.create) (3주 P.12)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`StyleSheet.create` 기본 문법 구조**
- ⚠️ **`style={styles.text}`와 `style={styles.error}`로 클래스 스타일 매핑**

---

### [문제 07 정답] 여러 개의 스타일 적용 (배열 스타일링) (3주 P.13)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **배열 구문 `style={[styles.text, styles.error]}` 작성 여부**
- ⚠️ **배열의 뒤쪽에 위치한 스타일(`styles.error`)이 앞선 스타일의 동일 속성을 덮어씌운다는 원리 이해**

---

### [문제 08 정답] 외부 스타일 이용하기 (App.js & styles.js 모듈 분리) (3주 P.14~15)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **외부 모듈 분리 시 `export const`와 `import { ... } from './src/styles'` 문법 매칭**
- ⚠️ **`style={viewStyles.container}`, `style={textStyles.text}` 정확한 객체 참조**

---

### [문제 09 정답] Flex와 범위: 수직 1:3:1 분할 (3주 P.16)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **최상위 `container`의 `flex: 1` 설정 여부**
- ⚠️ **자식 요소들의 `flex: 1`, `flex: 3`, `flex: 1` 합산 비율 레이아웃 구조**

---

### [문제 10 정답] Flex와 범위: 가로 분할 (flexDirection: 'row') (3주 P.17)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **부모 컨테이너에 `flexDirection: 'row'` 적용 여부**
- ⚠️ **가로로 배치된 자식들에 `flex: 1`을 부여하여 가로 공간 균등 분할 구현 여부**

---


# 📌 4주차

### [문제 11 정답] View: Flex 복합 그리드 4분할 레이아웃 (4주 P.04)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`contents`의 row 방향 분할 아래에 컬럼 방향의 Left/Right를 두고, 그 안에서 다시 Top/Bottom 분할을 계층적으로 완성했는지 여부**

---

### [문제 12 정답] 텍스트 중첩: Style 적용 (4주 P.05)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`Text` 태그 안에 `Text`를 자식으로 배치할 수 있는 리액트 네이티브 특유의 중첩 문법 이해**
- ⚠️ **부모 `Text`의 `fontSize: 30`과 `fontWeight: 'bold'`를 자식 `Text`가 상속받는 원리 파악**

---

### [문제 13 정답] 텍스트 중첩: 인라인 스타일링 (4주 P.06)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **인라인 스타일 `style={{ fontSize: 30, color: 'green' }}` 구문 작성 정확도**

---

### [문제 14 정답] 텍스트 ScrollView (긴 본문 스크롤 지원) (4주 P.07)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`View` 대신 스크롤 컨테이너로 `ScrollView`를 정확히 사용했는지 여부**

---

### [문제 15 정답] 텍스트 onPress 이벤트 (상태 변경 및 인터랙션) (4주 P.10)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`const [titleText, setTitleText] = useState(...)` 상태 훅 사용**
- ⚠️ **`Text` 태그에도 `onPress` 속성을 연결할 수 있다는 점 파악**
- ⚠️ **`numberOfLines` 속성 활용**

---

### [문제 16 정답] 버튼 기본 컴포넌트 (Button) (4주 P.11)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`Button` 컴포넌트의 필수 속성인 `title` 속성 지정 여부 (`children` 텍스트 방식이 아님에 주의)**

---

### [문제 17 정답] 버튼 팝업 메시지 (단일 Alert.alert) (4주 P.12)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`color` 속성으로 버튼 색상 변경**
- ⚠️ **`Alert.alert(...)` 호출 문법**

---

### [문제 18 정답] 버튼 팝업 취소/확인 (2버튼 Alert.alert) (4주 P.13)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`Alert.alert(title, message, buttonsArray)`의 3번째 인자 배열 구조**
- ⚠️ **`style: 'cancel'` 속성 지정**

---

### [문제 19 정답] 텍스트 입력: 기본 TextInput (실시간 상태 반영) (4주 P.14)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`onChange`가 아니라 `onChangeText`를 사용한다는 점 (React Native 전용)**
- ⚠️ **`value`와 `onChangeText`의 양방향 바인딩**

---

### [문제 20 정답] 텍스트 입력: 텍스트 vs 숫자 (비밀번호 정규식 필터링) (4주 P.15)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`keyboardType='numeric'` 지정**
- ⚠️ **정규식 `replace(/[^0-9]/g, "")`을 통한 숫자 외 문자 입력 차단**

---

### [문제 21 정답] 텍스트 입력: 여러 줄 입력 (multiline 속성) (4주 P.16)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`multiline` 불리언 속성 적용**
- ⚠️ **`numberOfLines={4}`, `maxLength={40}` 수치 속성 지정**

---

### [문제 22 정답] 텍스트 입력: 여러 줄 입력 Alert 연동 및 초기화 (4주 P.17)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **Alert 버튼 콜백 `onPress: () => setValue("")`을 통한 상태 초기화 구현 여부**

---


# 📌 5주차

### [문제 23 정답] 자바스크립트 변수 바인딩 ({name}) (5주 P.05~06)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **JSX 내부에서 자바스크립트 표현식을 쓸 때 중괄호 `{name}`을 사용한다는 기본 문법**

---

### [문제 24 정답] 조건문: if 조건문 분기 (5주 P.07)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **JSX 외부에서 if문으로 연산 후 결과를 JSX 내부에 삽입하는 패턴**

---

### [문제 25 정답] 조건문: 삼항연산자 (Ternary Operator) (5주 P.08)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **JSX 표현식 안에서 if문은 사용 불가하지만 삼항연산자 `{조건 ? 참 : 거짓}`은 바로 쓸 수 있다는 핵심 원리**

---

### [문제 26 정답] 조건문: AND/OR 연산자 단축 평가 (5주 P.09)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **자바스크립트 논리 연산자 단축 평가(Short-circuit evaluation)의 JSX 렌더링 동작 이해**

---

### [문제 27 정답] Image 컴포넌트: 로컬 이미지 불러오기 (5주 P.10)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **웹 HTML의 `src="..."`와 달리 리액트 네이티브에서는 `source={require('경로')}`를 사용한다는 점 (교수님 단골 문제)**

---

### [문제 28 정답] Switch 컴포넌트: 다크 모드 토글 (5주 P.11)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`Switch`의 `value`와 `onValueChange` 속성**
- ⚠️ **배열 스타일링 `style={[styles.container, { backgroundColor: ... }]}`을 통한 동적 테마 적용**

---

### [문제 29 정답] FlatList 컴포넌트: 대용량 목록 렌더링 (5주 P.12)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`FlatList`의 3대 필수 속성인 `data`, `keyExtractor`, `renderItem` 완벽 암기 여부 (시험 출제 1순위)**
- ⚠️ **`renderItem`의 인자가 `({ item })` 구조분해할당 객체라는 점**

---

### [문제 30 정답] SectionList 컴포넌트: 그룹별 목록 렌더링 (5주 P.13)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **FlatList의 `data` 대신 SectionList는 `sections` 속성을 사용한다는 차이점**
- ⚠️ **`renderSectionHeader={({ section: { title } }) => ...}` 속성 사용**

---


# 📌 6주차

### [문제 31 정답] BackHandler: 안드로이드 물리 뒤로가기 버튼 제어 (6주 P.04)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **이벤트명 `'hardwareBackPress'` 정확성**
- ⚠️ **`BackHandler.exitApp()` 호출**
- ⚠️ **`return true;`를 통한 기본 뒤로가기 이벤트 소비/차단**
- ⚠️ **클린업에서 `backHandler.remove()` 해제**

---

### [문제 32 정답] DrawerLayoutAndroid: 서랍 메뉴 네비게이션 (6주 P.05~06)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`useRef`를 통한 `openDrawer()` 및 `closeDrawer()` 메서드 호출**
- ⚠️ **`drawerWidth`, `drawerPosition`, `renderNavigationView` 필수 속성 매핑**

---

### [문제 33 정답] ToastAndroid: 토스트 알림 및 위치 오프셋 제어 (6주 P.07)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`ToastAndroid.SHORT` / `ToastAndroid.LONG` 상수 활용**
- ⚠️ **`showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)` 인자 순서 암기**

---

### [문제 34 정답] Animated: 페이드 인/아웃 타이밍 애니메이션 (6주 P.09~10)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`useRef(new Animated.Value(0)).current` 패턴**
- ⚠️ **`Animated.timing(anim, { toValue, duration, useNativeDriver }).start()`**
- ⚠️ **일반 `View`가 아닌 `<Animated.View>` 사용 및 `opacity` 바인딩**

---

### [문제 35 정답] Dimensions: 기기 화면 해상도 측정 및 회전 감지 (6주 P.11~12)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`Dimensions.get('window')` vs `Dimensions.get('screen')` 차이점 (window는 상태표시줄 등 제외 실제 앱 가용영역)**
- ⚠️ **`Dimensions.addEventListener('change', ...)` 및 `subscription?.remove()`**

---

### [문제 36 정답] KeyboardAvoidingView: 키보드 회피 및 바깥 터치 닫기 (6주 P.13~14)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`Keyboard.dismiss` 메서드를 `TouchableWithoutFeedback`의 `onPress`에 전달하는 필수 패턴**

---

### [문제 37 정답] Linking: 외부 웹 브라우저 URL 열기 (6주 P.15)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`Linking.openURL('URL')` API의 사용법**

---

### [문제 38 정답] Modal: 팝업 대화상자 레이어 (6주 P.16~17)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`Modal`의 필수 속성 `visible={modalVisible}`**
- ⚠️ **`animationType="slide"`, `transparent={true}` 속성**

---

### [문제 39 정답] PixelRatio: 기기 픽셀 비율 및 이미지 크기 변환 (6주 P.18~19)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`PixelRatio.get()`**
- ⚠️ **`PixelRatio.getFontScale()`**
- ⚠️ **`PixelRatio.getPixelSizeForLayoutSize(size)` 메서드명 암기**

---

### [문제 40 정답] RefreshControl: 당겨서 새로고침 (6주 P.20~21)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`ScrollView`의 `refreshControl={<RefreshControl ... />}` 속성**
- ⚠️ **`useCallback`과 타이머를 이용한 비동기 새로고침 완료 처리**

---


# 📌 7주차

### [문제 41 정답] useState 예제 1: 카운터 (+1 / -1) (7주 P.05)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`useState` 기본 사용법**
- ⚠️ **`Pressable`의 `onPress`에서 상태 변경 함수 호출**

---

### [문제 42 정답] useState 예제 2: A × B 곱셈 계산기 (7주 P.06~07)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`TextInput`의 문자열 입력을 `parseFloat`로 수치 변환**
- ⚠️ **`isNaN` 예외 처리 및 조건부 렌더링 `{result !== null && ...}`**

---

### [문제 43 정답] useRef vs 일반 변수 vs useState 리렌더링 비교 (시험 출제 1순위!) (7주 P.09)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ ****교수님 주관식/단답형 단골 질문**: `useRef`의 값은 바뀌어도 리렌더링되지 않으며, 컴포넌트가 다시 렌더링되어도 값이 유지된다. 반면 일반 변수 `countVar`는 리렌더링 시 함수가 재실행되므로 초기화된다.**

---

### [문제 44 정답] useRef: TextInput 포커스 자동 이동 (7주 P.10)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **컴포넌트의 `ref` 속성에 `useRef` 변수 전달**
- ⚠️ **`inputRef.current?.focus()` 메서드 호출**

---

### [문제 45 정답] useRef: 계산기 + 계산 후 자동 포커스 복귀 (7주 P.11~12)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`useState` 계산 로직과 `useRef`의 DOM 포커스 제어 결합**

---

### [문제 46 정답] useEffect: 컴포넌트 마운트 시 최초 1회 실행 (7주 P.14)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **의존성 배열 `[]`을 비워두어야 마운트 시 1회만 실행된다는 규칙 (배열 생략 시 매 렌더링마다 실행됨)**

---

### [문제 47 정답] useEffect: 특정 상태 변경 감지 (7주 P.15)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **의존성 배열 `[count]`를 통해 특정 상태 변경 시에만 이펙트 함수가 재실행되도록 제어**

---

### [문제 48 정답] useMemo: 연산 캐싱 최적화 (시험 단골!) (7주 P.17~18)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **`const val = useMemo(() => 연산식, [의존성])` 문법**
- ⚠️ ****교수님 주관식 채점 포인트**: '텍스트 변경' 버튼을 누르면 컴포넌트는 리렌더링되지만 `count`는 변하지 않았으므로 `useMemo` 콜백은 실행되지 않고 이전 계산값을 재사용한다.**

---

### [문제 49 정답] 7주차 실습 과제: 아이폰 계산기 UI 스타일링 스펙 (7주 P.19)

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

#### 🔍 교수님 핵심 채점 포인트
- ⚠️ **주어진 슬라이드 명세(색상코드, 폰트사이즈 등) 정확한 반영**
- ⚠️ **Flexbox `justifyContent: 'flex-end'`를 이용한 하단 키패드 배치**

---

