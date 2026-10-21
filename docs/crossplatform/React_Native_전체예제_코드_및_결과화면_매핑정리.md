# 📱 React Native 크로스플랫폼 전체 예제 코드 & 실행 결과 화면 종합 매핑 정리집

> **수업 자료 전수 추출 보고서 (3주차 ~ 7주차)**  
> 5개 PDF 전체(94개 슬라이드)의 모든 예제 소스 코드와 대응 실행 결과 화면(에뮬레이터 캡처 및 슬라이드)을 하나도 빠짐없이 1:1로 정밀 매핑하여 복원한 완성본입니다.  
> 각 예제는 **[완전한 소스 코드]**, **[실행 결과 화면 크롭 이미지]**, **[슬라이드 원본 이미지]**, **[핵심 문법 및 분석]**으로 구성되어 있습니다.

---

## 📑 목차 (Table of Contents)

1. [3주차: 스타일링 기초 (3주 스타일링.pdf)](#1-3주차-스타일링-기초)
   - [01. 정렬 기본 템플릿 (P.04)](#3주-01-정렬-기본-템플릿-p04)
   - [02. 정렬 다이어그램 (flexDirection, justifyContent, alignItems) (P.05~P.07)](#3주-02-정렬-다이어그램-p05p07)
   - [03. 스타일링: 영어 다중 텍스트 (P.08)](#3주-03-스타일링-영어-다중-텍스트-p08)
   - [04. 스타일링: 한글 줄바꿈 문법 (P.09)](#3주-04-스타일링-한글-줄바꿈-문법-p09)
   - [05. 스타일링: 주석 처리 (P.10)](#3주-05-스타일링-주석-처리-p10)
   - [06. 인라인 스타일링 (P.11)](#3주-06-인라인-스타일링-p11)
   - [07. 클래스 스타일링 (StyleSheet.create) (P.12)](#3주-07-클래스-스타일링-p12)
   - [08. 여러 개의 스타일 적용 (배열 스타일링) (P.13)](#3주-08-여러-개의-스타일-적용-p13)
   - [09. 외부 스타일 이용하기 (App.js & styles.js 분리) (P.14~P.15)](#3주-09-외부-스타일-이용하기-p14p15)
   - [10. Flex와 범위 (수직 1:3:1 분할) (P.16)](#3주-10-flex와-범위-수직-분할-p16)
   - [11. Flex와 범위 (가로 분할 flexDirection: 'row') (P.17)](#3주-11-flex와-범위-가로-분할-p17)
   - [12. 3주차 실습 과제 (학생 정보 카드) (P.18)](#3주-12-3주차-실습-과제-p18)

2. [4주차: 컴포넌트 기초 (4주 컴포넌트 기초.pdf)](#2-4주차-컴포넌트-기초)
   - [01. 컴포넌트 개념 (함수형 vs 클래스형) (P.03)](#4주-01-컴포넌트-개념-p03)
   - [02. View: Flex 복합 그리드 레이아웃 (P.04)](#4주-02-view-flex-복합-그리드-레이아웃-p04)
   - [03. 텍스트 중첩: Style 적용 (P.05)](#4주-03-텍스트-중첩-style-적용-p05)
   - [04. 텍스트 중첩: 인라인 스타일링 (P.06)](#4주-04-텍스트-중첩-인라인-스타일링-p06)
   - [05. 텍스트 ScrollView (긴 글 스크롤) (P.07)](#4주-05-텍스트-scrollview-p07)
   - [06. 4주차 실습: 행복 (유치환 시 ScrollView) (P.08~P.09)](#4주-06-실습-행복-시인-유치환-p08p09)
   - [07. 텍스트 onPress 이벤트 (상태 변경) (P.10)](#4주-07-텍스트-onpress-이벤트-p10)
   - [08. 버튼 기본 (Button) (P.11)](#4주-08-버튼-기본-p11)
   - [09. 버튼 팝업 메시지 (단일 Alert) (P.12)](#4주-09-버튼-팝업-메시지-단일-alert-p12)
   - [10. 버튼 팝업 취소/확인 (다중 버튼 Alert) (P.13)](#4주-10-버튼-팝업-취소확인-다중-alert-p13)
   - [11. 텍스트 입력: 기본 TextInput (실시간 상태 반영) (P.14)](#4주-11-텍스트-입력-기본-textinput-p14)
   - [12. 텍스트 입력: 텍스트 vs 숫자 (비밀번호 정규식) (P.15)](#4주-12-텍스트-입력-텍스트-vs-숫자-p15)
   - [13. 텍스트 입력: 여러 줄 입력 (multiline) (P.16)](#4주-13-텍스트-입력-여러-줄-입력-p16)
   - [14. 텍스트 입력: 여러 줄 입력 결과 확인 (Alert 연동) (P.17)](#4주-14-텍스트-입력-여러-줄-입력-결과-확인-p17)

3. [5주차: 컴포넌트 (5주 컴포넌트.pdf)](#3-5주차-컴포넌트)
   - [01. JSX 문법 비교 및 장단점 (P.03)](#5주-01-jsx-문법-비교-및-장단점-p03)
   - [02. JSX 규칙: 하나의 부모 (One Parent Element) (P.04)](#5주-02-jsx-규칙-하나의-부모-p04)
   - [03. 자바스크립트 변수 바인딩 ({name}) (P.05~P.06)](#5주-03-자바스크립트-변수-바인딩-p05p06)
   - [04. 자바스크립트 조건문: if 조건문 (P.07)](#5주-04-조건문-if-조건문-p07)
   - [05. 자바스크립트 조건문: 삼항연산자 (P.08)](#5주-05-조건문-삼항연산자-p08)
   - [06. 자바스크립트 조건문: AND/OR 연산자 (P.09)](#5주-06-조건문-andor-연산자-p09)
   - [07. Image 컴포넌트 (로컬 이미지 로드) (P.10)](#5주-07-image-컴포넌트-p10)
   - [08. Switch 컴포넌트 (다크 모드 토글) (P.11)](#5주-08-switch-컴포넌트-p11)
   - [09. FlatList 컴포넌트 (대용량 목록 렌더링) (P.12)](#5주-09-flatlist-컴포넌트-p12)
   - [10. SectionList 컴포넌트 (섹션별 그룹 목록) (P.13)](#5주-10-sectionlist-컴포넌트-p13)

4. [6주차: 컴포넌트 응용 (6주 컴포넌트 응용.pdf)](#4-6주차-컴포넌트-응용)
   - [01. Android 컴포넌트 & API 개요 (P.03)](#6주-01-android-컴포넌트--api-개요-p03)
   - [02. BackHandler (안드로이드 물리 뒤로가기 제어) (P.04)](#6주-02-backhandler-뒤로가기-제어-p04)
   - [03. DrawerLayoutAndroid (서랍 네비게이션) (P.05~P.06)](#6주-03-drawerlayoutandroid-서랍-메뉴-p05p06)
   - [04. ToastAndroid (토스트 알림 및 위치/오프셋 제어) (P.07)](#6주-04-toastandroid-토스트-알림-p07)
   - [05. 기타 컴포넌트 개요 (P.08)](#6주-05-기타-컴포넌트-개요-p08)
   - [06. Animated (페이드 인/아웃 애니메이션) (P.09~P.10)](#6주-06-animated-애니메이션-p09p10)
   - [07. Dimensions (기기 화면 해상도 측정 및 회전 감지) (P.11~P.12)](#6주-07-dimensions-화면-크기-측정-p11p12)
   - [08. KeyboardAvoidingView (키보드 가림 방지 및 dismiss) (P.13~P.14)](#6주-08-keyboardavoidingview-키보드-회피-p13p14)
   - [09. Linking (외부 웹 브라우저 URL 열기) (P.15)](#6주-09-linking-외부-링크-열기-p15)
   - [10. Modal (팝업 대화상자 레이어) (P.16~P.17)](#6주-10-modal-모달-대화상자-p16p17)
   - [11. PixelRatio (화면 밀도 및 픽셀 크기 변환) (P.18~P.19)](#6주-11-pixelratio-픽셀-밀도-p18p19)
   - [12. RefreshControl (당겨서 새로고침) (P.20~P.21)](#6주-12-refreshcontrol-당겨서-새로고침-p20p21)

5. [7주차: Hook (7주 Hook.pdf)](#5-7주차-hook)
   - [01. Hook 개요 및 규칙 (P.03~P.04)](#7주-01-hook-개요-및-규칙-p03p04)
   - [02. useState 예제 1: 카운터 (+1 / -1) (P.05)](#7주-02-usestate-예제-1-카운터-p05)
   - [03. useState 예제 2: A × B 곱셈 계산기 (P.06~P.07)](#7주-03-usestate-예제-2-곱셈-계산기-p06p07)
   - [04. useRef 개요 및 문법 (P.08)](#7주-04-useref-개요-및-문법-p08)
   - [05. useRef 예제 1: useRef vs 일반 변수 vs useState 리렌더링 차이 (P.09)](#7주-05-useref-예제-1-리렌더링-비교-p09)
   - [06. useRef 예제 2: TextInput 포커스 자동 이동 (P.10)](#7주-06-useref-예제-2-포커스-이동-p10)
   - [07. useRef 예제 3: 곱셈 계산기 + 자동 포커스 복귀 (P.11~P.12)](#7주-07-useref-예제-3-계산기-포커스-연동-p11p12)
   - [08. useEffect 개요 및 생명주기 (P.13)](#7주-08-useeffect-개요-및-생명주기-p13)
   - [09. useEffect 예제 1: 마운트 시 최초 1회 실행 (P.14)](#7주-09-useeffect-예제-1-최초-1회-실행-p14)
   - [10. useEffect 예제 2: 특정 상태(count) 변경 감지 (P.15)](#7주-10-useeffect-예제-2-상태-변경-감지-p15)
   - [11. useMemo 개요 및 문법 (P.16)](#7주-11-usememo-개요-및-문법-p16)
   - [12. useMemo 예제: 연산 결과 캐싱 (Double 연산 최적화) (P.17~P.18)](#7주-12-usememo-예제-연산-캐싱-최적화-p17p18)
   - [13. 7주차 실습 과제: 계산기 UI 스타일링 스펙 (P.19)](#7주-13-7주차-실습-과제-계산기-ui-p19)
   - [14. 중간고사 안내 정보 (P.20)](#7주-14-중간고사-안내-p20)

---

# 1. 3주차: 스타일링 기초

### 3주-01. 정렬 기본 템플릿 (P.04)
* **목적**: Expo 프로젝트 생성 후 기본 화면 구조 및 중앙 정렬 확인
* **핵심 속성**: `alignItems: 'center'`, `justifyContent: 'center'`

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.04) |
| :---: | :---: |
| ![3주 P.04 결과 화면](./images/week3/week3_p04_crop1.png) | ![3주 P.04 슬라이드](./images/week3/week3_p04_slide.png) |

---

### 3주-02. 정렬 다이어그램 (P.05~P.07)
* **내용**: Flexbox의 3대 핵심 정렬 속성 원리 시각화
  - `flexDirection`: `column`(기본값), `column-reverse`, `row`, `row-reverse`
  - `justifyContent`: 주축(Main Axis) 정렬 (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`)
  - `alignItems`: 교차축(Cross Axis) 정렬 (`flex-start`, `flex-end`, `center`, `stretch`, `baseline`)

#### [매핑 다이어그램 이미지]
| flexDirection 다이어그램 (P.05) | justifyContent 다이어그램 (P.06) | alignItems 다이어그램 (P.07) |
| :---: | :---: | :---: |
| ![flexDirection](./images/week3/week3_p05_crop1.png) | ![justifyContent](./images/week3/week3_p06_crop1.png) | ![alignItems](./images/week3/week3_p07_crop1.png) |

---

### 3주-03. 스타일링: 영어 다중 텍스트 (P.08)
* **목적**: 기본 컨테이너 안에 다중 `Text` 컴포넌트 추가

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.08) |
| :---: | :---: |
| ![3주 P.08 결과 화면](./images/week3/week3_p08_crop1.png) | ![3주 P.08 슬라이드](./images/week3/week3_p08_slide.png) |

---

### 3주-04. 스타일링: 한글 줄바꿈 문법 (P.09)
* **목적**: JSX 내부에서 줄바꿈 처리 시 `{"\n"}` 표현식 사용

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.09) |
| :---: | :---: |
| ![3주 P.09 결과 화면](./images/week3/week3_p09_crop1.png) | ![3주 P.09 슬라이드](./images/week3/week3_p09_slide.png) |

---

### 3주-05. 스타일링: 주석 처리 (P.10)
* **목적**: 자바스크립트 주석(`//`, `/* */`)과 JSX 내부 주석(`{/* */}`)의 문법 차이 이해

#### [소스 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// 과목명: 리액트 네이티브 프로그래밍 (일반 한 줄 주석)
/* 이름: 홍길동 (일반 여러 줄 주석) */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>처음 시작하는 리액트 네이티브 프로그래밍 !</Text>
      {/* JSX 태그 내부에서는 중괄호와 함께 블록 주석 형태로 작성해야 함 */}
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.10) |
| :---: | :---: |
| ![3주 P.10 결과 화면](./images/week3/week3_p10_crop1.png) | ![3주 P.10 슬라이드](./images/week3/week3_p10_slide.png) |

---

### 3주-06. 인라인 스타일링 (P.11)
* **목적**: 컴포넌트의 `style` 속성에 객체 리터럴 직접 전달
* **주의**: `fontWeight`는 숫자가 아닌 문자열 `"600"`, `"400"` 등으로 지정해야 함

#### [소스 코드]
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
          fontWeight: "600", // 숫자가 아닌 문자열
          color: "black",
        }}>
        Inline Styling - Text
      </Text>
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "400", // 숫자가 아닌 문자열
          color: "red",
        }}>
        Inline Styling - Error
      </Text>
    </View>
  );
}
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.11) |
| :---: | :---: |
| ![3주 P.11 결과 화면](./images/week3/week3_p11_crop1.png) | ![3주 P.11 슬라이드](./images/week3/week3_p11_slide.png) |

---

### 3주-07. 클래스 스타일링 (P.12)
* **목적**: `StyleSheet.create`로 스타일 객체를 별도 정의하여 가독성 및 유지보수 향상

#### [소스 코드]
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
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.12) |
| :---: | :---: |
| ![3주 P.12 결과 화면](./images/week3/week3_p12_crop1.png) | ![3주 P.12 슬라이드](./images/week3/week3_p12_slide.png) |

---

### 3주-08. 여러 개의 스타일 적용 (P.13)
* **목적**: 배열을 이용하여 다중 스타일 적용 (`style={[styles.text, styles.error]}`)
* **우선순위 원리**: 뒤에 오는 스타일 속성이 앞의 스타일 속성을 덮어씀

#### [소스 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inline Styling - Text</Text>
      {/* styles.text의 padding, fontSize를 유지하면서 error의 color/fontWeight로 오버라이드 */}
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.13) |
| :---: | :---: |
| ![3주 P.13 결과 화면](./images/week3/week3_p13_crop1.png) | ![3주 P.13 슬라이드](./images/week3/week3_p13_slide.png) |

---

### 3주-09. 외부 스타일 이용하기 (P.14~P.15)
* **목적**: 별도의 스타일 모듈 파일(`src/styles.js`)을 생성하고 컴포넌트(`App.js`)에서 import하여 사용

#### [소스 코드: App.js]
```javascript
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
```

#### [소스 코드: src/styles.js]
```javascript
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
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 폴더 구조 (P.14) | 슬라이드 원본 (P.14) |
| :---: | :---: | :---: |
| ![3주 P.14 결과 화면](./images/week3/week3_p14_crop1.png) | ![폴더 구조](./images/week3/week3_p14_crop2.png) | ![3주 P.14 슬라이드](./images/week3/week3_p14_slide.png) |

---

### 3주-10. Flex와 범위: 수직 분할 (P.16)
* **목적**: `flex` 비율을 통한 화면 수직 3분할 레이아웃 (Header 1 : Contents 3 : Footer 1)

#### [소스 코드]
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
    flex: 1, // 전체 5중 1 (20%)
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    flex: 3, // 전체 5중 3 (60%)
    backgroundColor: '#1abc9c',
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1, // 전체 5중 1 (20%)
    backgroundColor: '#3498db',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.16) |
| :---: | :---: |
| ![3주 P.16 결과 화면](./images/week3/week3_p16_crop1.png) | ![3주 P.16 슬라이드](./images/week3/week3_p16_slide.png) |

---

### 3주-11. Flex와 범위: 가로 분할 (P.17)
* **목적**: Contents 영역 내부를 `flexDirection: "row"`로 가로 분할 (Left 1 : Right 1)

#### [소스 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      {/* Contents 가로 분할 */}
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
    flex: 2,
    flexDirection: "row", // 가로 분할 핵심 속성
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
  text: {
    fontSize: 26,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.17) |
| :---: | :---: |
| ![3주 P.17 결과 화면](./images/week3/week3_p17_crop1.png) | ![3주 P.17 슬라이드](./images/week3/week3_p17_slide.png) |

---

### 3주-12. 3주차 실습 과제 (P.18)
* **과제 요구사항**: 강남대학교 / 학과: 컴퓨터공학 / 학번 / 이름 / 과목명 출력 화면 캡처 제출

#### [매핑 이미지]
| 실습 과제 화면 예시 | 슬라이드 원본 (P.18) |
| :---: | :---: |
| ![3주 P.18 실습 화면](./images/week3/week3_p18_crop1.png) | ![3주 P.18 슬라이드](./images/week3/week3_p18_slide.png) |

---

# 2. 4주차: 컴포넌트 기초

### 4주-01. 컴포넌트 개념 (P.03)
* **내용**: 함수형 컴포넌트(React 16.8 Hook 도입 이후 표준) vs 클래스형 컴포넌트(과거 방식, 유지보수 위주)

#### [매핑 이미지]
| 컴포넌트 개념도 (P.03) | 함수형 컴포넌트 코드 예시 | 슬라이드 원본 (P.03) |
| :---: | :---: | :---: |
| ![컴포넌트 개념도](./images/week4/week4_p03_crop1.png) | ![함수형 컴포넌트](./images/week4/week4_p03_crop2.png) | ![4주 P.03 슬라이드](./images/week4/week4_p03_slide.png) |

---

### 4주-02. View: Flex 복합 그리드 레이아웃 (P.04)
* **목적**: Contents 영역을 좌/우로 나누고, 좌측과 우측을 다시 상/하로 중첩 4분할하는 레이아웃

#### [소스 코드]
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
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
  },
  contents: {
    flex: 3,
    flexDirection: 'row',
  },
  contentsLeft: {
    flex: 1,
  },
  contentsLeftTop: {
    flex: 1,
    backgroundColor: '#16a085',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentsLeftBottom: {
    flex: 1,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentsRight: {
    flex: 1,
  },
  contentsRightTop: {
    flex: 1,
    backgroundColor: '#27ae60',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentsRightBottom: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.04) |
| :---: | :---: |
| ![4주 P.04 결과 화면](./images/week4/week4_p04_crop1.png) | ![4주 P.04 슬라이드](./images/week4/week4_p04_slide.png) |

---

### 4주-03. 텍스트 중첩: Style 적용 (P.05)
* **목적**: `Text` 안에 `Text`를 중첩하여 특정 단어만 별도의 스타일(`innerText: { color: 'red' }`) 적용

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.05) |
| :---: | :---: |
| ![4주 P.05 결과 화면](./images/week4/week4_p05_crop1.png) | ![4주 P.05 슬라이드](./images/week4/week4_p05_slide.png) |

---

### 4주-04. 텍스트 중첩: 인라인 스타일링 (P.06)
* **목적**: 중첩 `Text` 컴포넌트의 style 속성에 직접 인라인 컬러(`green`) 지정

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.06) |
| :---: | :---: |
| ![4주 P.06 결과 화면](./images/week4/week4_p06_crop1.png) | ![4주 P.06 슬라이드](./images/week4/week4_p06_slide.png) |

---

### 4주-05. 텍스트 ScrollView (P.07)
* **목적**: 화면 높이를 초과하는 긴 텍스트를 `ScrollView`로 감싸 스크롤 가능하게 구현

#### [소스 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.baseText}>
          React의 문법으로 안드로이드, iOS 앱을 개발할 수 있는 프레임워크이다. 
          React를 배웠던 개발자라면 몇시간만에 익숙해질 수 있을만큼 React와 거의 유사한 문법을 가지고 있으며, 
          실제로 차이나는 부분은 브라우저의 HTML Element를 사용하는 것이 아니라 View, Text 등의 자체 태그를 
          사용하는 점과 CSS를 사용하지 않고 오직 CreateStyleSheet를 이용한 스타일만 지원하고, 
          일부 속성이 가감되었다는 것 정도. 현재는 웹과 동일한 CSS 요소 사용을 위한 Styled Component 및 PostCSS를 지원한다.
          {"\n\n"}
          React의 문법으로 안드로이드, iOS 앱을 개발할 수 있는 프레임워크이다. 
          React를 배웠던 개발자라면 몇시간만에 익숙해질 수 있을만큼 React와 거의 유사한 문법을 가지고 있으며, 
          실제로 차이나는 부분은 브라우저의 HTML Element를 사용하는 것이 아니라 View, Text 등의 자체 태그를 
          사용하는 점과 CSS를 사용하지 않고 오직 CreateStyleSheet를 이용한 스타일만 지원하고, 
          일부 속성이 가감되었다는 것 정도. 현재는 웹과 동일한 CSS 요소 사용을 위한 Styled Component 및 PostCSS를 지원한다.
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.07) |
| :---: | :---: |
| ![4주 P.07 결과 화면](./images/week4/week4_p07_crop1.png) | ![4주 P.07 슬라이드](./images/week4/week4_p07_slide.png) |

---

### 4주-06. 실습: 행복, 시인: 유치환 (P.08~P.09)
* **목적**: `flex + Font + ScrollView`를 결합하여 한국 대표 시 '행복'을 렌더링하는 실습

#### [소스 코드]
```javascript
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>행복</Text>
      <Text style={styles.author}>시인: 유치환</Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.poemText}>
          사랑하는 것은{"\n"}
          사랑을 받느니보다 행복하나니라.{"\n"}
          오늘도 나는{"\n"}
          에메랄드빛 하늘이 환히 내다뵈는{"\n"}
          우체국 창문 앞에 와서 너에게 편지를 쓴다.{"\n\n"}
          행길을 향한 문으로 숱한 사람들이{"\n"}
          제각기 한 가지씩 생각에 족한 얼굴로 와선{"\n"}
          총총히 우표를 사고 전보지를 받고{"\n"}
          먼 고향으로 또는 그리운 사람께로{"\n"}
          슬프고 즐겁고 다정한 사연들을 보내나니.{"\n\n"}
          세상의 고달픈 바람결에 시달리고 나부끼어{"\n"}
          더욱더 의지 삼고 피어 헝클어진 인정의{"\n"}
          꽃밭에서 너와 나의 애틋한 연분도{"\n"}
          한 망울 연연한 진홍빛 양귀비꽃인지도 모른다.{"\n\n"}
          사랑하는 것은{"\n"}
          사랑을 받느니보다 행복하나니라.{"\n"}
          오늘도 나는 너에게 편지를 쓰나니{"\n"}
          그리운 이여 그러면 안녕!{"\n"}
          설령 이것이 이 세상 마지막 인사가 될지라도{"\n"}
          사랑하였으므로{"\n"}
          나는 진정 행복하였네라.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  author: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
  },
  poemText: {
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.08) | 시 전문 슬라이드 원본 (P.09) |
| :---: | :---: |
| ![4주 P.08 결과 화면](./images/week4/week4_p08_crop1.png) | ![4주 P.09 슬라이드](./images/week4/week4_p09_slide.png) |

---

### 4주-07. 텍스트: onPress 이벤트 (P.10)
* **목적**: `Text`에 `onPress` 핸들러를 바인딩하여 터치 시 `useState`로 제목 텍스트 갱신

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.10) |
| :---: | :---: |
| ![4주 P.10 결과 화면](./images/week4/week4_p10_crop1.png) | ![4주 P.10 슬라이드](./images/week4/week4_p10_slide.png) |

---

### 4주-08. 버튼: 기본 (P.11)
* **목적**: 기본 `Button` 컴포넌트의 사용법

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.11) |
| :---: | :---: |
| ![4주 P.11 결과 화면](./images/week4/week4_p11_crop1.png) | ![4주 P.11 슬라이드](./images/week4/week4_p11_slide.png) |

---

### 4주-09. 버튼: 팝업 메시지 (단일 Alert) (P.12)
* **목적**: `Button`의 `color` 속성 커스텀 및 `Alert.alert('메시지')` 호출

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | Alert 팝업 확대 | 슬라이드 원본 (P.12) |
| :---: | :---: | :---: |
| ![4주 P.12 결과 화면](./images/week4/week4_p12_crop1.png) | ![Alert 팝업](./images/week4/week4_p12_crop2.png) | ![4주 P.12 슬라이드](./images/week4/week4_p12_slide.png) |

---

### 4주-10. 버튼: 팝업 취소/확인 (다중 Alert) (P.13)
* **목적**: `Alert.alert`에 취소(`style: "cancel"`)와 확인 2가지 버튼 및 콜백 연결

#### [소스 코드]
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 2버튼 Alert 확대 | 슬라이드 원본 (P.13) |
| :---: | :---: | :---: |
| ![4주 P.13 결과 화면](./images/week4/week4_p13_crop1.png) | ![2버튼 Alert](./images/week4/week4_p13_crop2.png) | ![4주 P.13 슬라이드](./images/week4/week4_p13_slide.png) |

---

### 4주-11. 텍스트 입력: 기본 TextInput (P.14)
* **목적**: `TextInput`의 `value`와 `onChangeText`를 `useState` 상태와 양방향 바인딩

#### [소스 코드]
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
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  output: {
    fontSize: 16,
    color: "blue",
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.14) |
| :---: | :---: |
| ![4주 P.14 결과 화면](./images/week4/week4_p14_crop1.png) | ![4주 P.14 슬라이드](./images/week4/week4_p14_slide.png) |

---

### 4주-12. 텍스트 입력: 텍스트 vs 숫자 (P.15)
* **목적**: `keyboardType="numeric"` 및 정규식 `replace(/[^0-9]/g, "")`을 사용한 숫자 전용 비밀번호 필터링

#### [소스 코드]
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
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  output: {
    fontSize: 16,
    color: "blue",
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.15) |
| :---: | :---: |
| ![4주 P.15 결과 화면](./images/week4/week4_p15_crop1.png) | ![4주 P.15 슬라이드](./images/week4/week4_p15_slide.png) |

---

### 4주-13. 텍스트 입력: 여러 줄 입력 (P.16)
* **목적**: `multiline`, `numberOfLines={4}`, `maxLength={40}` 속성을 갖춘 다중 행 입력창

#### [소스 코드]
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
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textInput: {
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    margin: 12,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.16) |
| :---: | :---: |
| ![4주 P.16 결과 화면](./images/week4/week4_p16_crop1.png) | ![4주 P.16 슬라이드](./images/week4/week4_p16_slide.png) |

---

### 4주-14. 텍스트 입력: 여러 줄 입력 결과 확인 (P.17)
* **목적**: 여러 줄 입력 후 버튼을 누르면 Alert 창으로 입력값을 띄우고 확인 누르면 입력창 초기화

#### [소스 코드]
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
          onPress: () => setValue(""), // 확인 버튼 누르면 입력창 비우기
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
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textInput: {
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.17) |
| :---: | :---: |
| ![4주 P.17 결과 화면](./images/week4/week4_p17_crop1.png) | ![4주 P.17 슬라이드](./images/week4/week4_p17_slide.png) |

---

# 3. 5주차: 컴포넌트

### 5주-01. JSX 문법 비교 및 장단점 (P.03)
* **내용**: `React.createElement("h1", null, "Hello")` vs `<h1>Hello</h1>` 비교표 및 장단점

#### [매핑 이미지]
| 슬라이드 원본 (P.03) |
| :---: |
| ![5주 P.03 슬라이드](./images/week5/week5_p03_slide.png) |

---

### 5주-02. JSX 규칙: 하나의 부모 (One Parent Element) (P.04)
* **내용**: 여러 JSX 요소는 반드시 하나의 최상위 요소(`<View>` 또는 `<>`)로 감싸야 함

#### [비교 예시 코드]
```javascript
// [잘못된 예: 부모 없이 나열]
export default function App() {
  return (
    <Text>Open up App.js to start working on your app</Text>
    <StatusBar style="auto" />
  );
}

// [올바른 예: View로 최상위 감싸기]
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

#### [매핑 이미지]
| 슬라이드 원본 (P.04) |
| :---: |
| ![5주 P.04 슬라이드](./images/week5/week5_p04_slide.png) |

---

### 5주-03. 자바스크립트 변수 바인딩 (P.05~P.06)
* **목적**: 자바스크립트 변수 `const name = 'Beomjun'`을 JSX 내부에서 `{name}`으로 삽입 출력

#### [소스 코드]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Beomjun'; // 변수 선언

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
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
  text: {
    fontSize: 30,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.06) | 슬라이드 원본 (P.06) |
| :---: | :---: |
| ![5주 P.06 결과 화면](./images/week5/week5_p06_crop1.png) | ![5주 P.06 슬라이드](./images/week5/week5_p06_slide.png) |

---

### 5주-04. 조건문: if 조건문 (P.07)
* **목적**: 컴포넌트 내부에서 if-else 조건문으로 변수 값 결정 후 JSX 렌더링

#### [소스 코드]
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.07) |
| :---: | :---: |
| ![5주 P.07 결과 화면](./images/week5/week5_p07_crop1.png) | ![5주 P.07 슬라이드](./images/week5/week5_p07_slide.png) |

---

### 5주-05. 조건문: 삼항연산자 (P.08)
* **목적**: `{조건 ? 참 : 거짓}` 삼항연산자를 이용한 간결한 인라인 조건 렌더링

#### [소스 코드]
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.08) |
| :---: | :---: |
| ![5주 P.08 결과 화면](./images/week5/week5_p08_crop1.png) | ![5주 P.08 슬라이드](./images/week5/week5_p08_slide.png) |

---

### 5주-06. 조건문: AND/OR 연산자 (P.09)
* **목적**: `&&` (조건 충족 시 렌더링)와 `||` (기본값 대체 렌더링) 단축 평가 활용

#### [소스 코드]
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginVertical: 5,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.09) |
| :---: | :---: |
| ![5주 P.09 결과 화면](./images/week5/week5_p09_crop1.png) | ![5주 P.09 슬라이드](./images/week5/week5_p09_slide.png) |

---

### 5주-07. Image 컴포넌트 (P.10)
* **목적**: `require('./kangnam.png')` 로컬 이미지 로딩 및 크기 제어

#### [소스 코드]
```javascript
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./kangnam.png')} // 로컬 이미지 경로
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.10) |
| :---: | :---: |
| ![5주 P.10 결과 화면](./images/week5/week5_p10_crop1.png) | ![5주 P.10 슬라이드](./images/week5/week5_p10_slide.png) |

---

### 5주-08. Switch 컴포넌트: 다크 모드 (P.11)
* **목적**: `Switch` 토글에 따라 배경색과 텍스트 색상을 반전하는 다크 모드 구현

#### [소스 코드]
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.11) |
| :---: | :---: |
| ![5주 P.11 결과 화면](./images/week5/week5_p11_crop1.png) | ![5주 P.11 슬라이드](./images/week5/week5_p11_slide.png) |

---

### 5주-09. FlatList 컴포넌트 (P.12)
* **목적**: `data`, `keyExtractor`, `renderItem` 속성을 이용한 효율적인 대용량 리스트 렌더링

#### [소스 코드]
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
        data={data} // 리스트 데이터 배열
        keyExtractor={(item) => item.id} // 고유 키
        renderItem={({ item }) => (
          // 개별 항목 렌더링
          <Text style={styles.item}>
            {item.id} : {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  item: {
    fontSize: 24,
    padding: 10,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.12) |
| :---: | :---: |
| ![5주 P.12 결과 화면](./images/week5/week5_p12_crop1.png) | ![5주 P.12 슬라이드](./images/week5/week5_p12_slide.png) |

---

### 5주-10. SectionList 컴포넌트 (P.13)
* **목적**: 그룹(섹션)별 헤더(`renderSectionHeader`)와 항목(`renderItem`)을 함께 렌더링하는 그룹 리스트

#### [소스 코드]
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
        sections={DATA} // 섹션 데이터 구조
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          // 데이터 항목
          <Text style={styles.item}> ▣ {item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          // 섹션 헤더 타이틀
          <Text style={styles.header}>섹션: {title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingVertical: 5,
  },
  item: {
    fontSize: 20,
    paddingVertical: 4,
    paddingLeft: 10,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.13) |
| :---: | :---: |
| ![5주 P.13 결과 화면](./images/week5/week5_p13_crop1.png) | ![5주 P.13 슬라이드](./images/week5/week5_p13_slide.png) |

---

# 4. 6주차: 컴포넌트 응용

### 6주-01. Android 컴포넌트 & API 개요 (P.03)
* **내용**: 안드로이드 전용 기능 컴포넌트 (BackHandler, DrawerLayoutAndroid, ToastAndroid)

#### [매핑 이미지]
| 안드로이드 컴포넌트 아이콘 모음 | 슬라이드 원본 (P.03) |
| :---: | :---: |
| ![안드로이드 API 아이콘](./images/week6/week6_p03_crop1.png) | ![6주 P.03 슬라이드](./images/week6/week6_p03_slide.png) |

---

### 6주-02. BackHandler: 뒤로가기 제어 (P.04)
* **목적**: 안드로이드 기기의 물리 '뒤로가기(hardwareBackPress)' 버튼을 가로채 확인 Alert를 띄우고 앱 종료 제어

#### [소스 코드]
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
      return true; // 기본 뒤로가기 동작을 방지하고 커스텀 로직 유지
    };

    // 하드웨어 버튼 리스너 등록
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    // 언마운트 시 클린업
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (Alert 팝업) | 슬라이드 원본 (P.04) |
| :---: | :---: |
| ![6주 P.04 결과 화면](./images/week6/week6_p04_crop1.png) | ![6주 P.04 슬라이드](./images/week6/week6_p04_slide.png) |

---

### 6주-03. DrawerLayoutAndroid: 서랍 메뉴 (P.05~P.06)
* **목적**: 스와이프 또는 버튼으로 열고 닫을 수 있는 사이드 드로어 네비게이션 구현 (좌/우 위치 전환 기능 포함)

#### [통합 소스 코드 (P.05 + P.06)]
```javascript
import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Button } from 'react-native';

export default function App() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right'); // 오른쪽으로 전환
    } else {
      setDrawerPosition('left'); // 왼쪽으로 전환
    }
  };

  // 서랍 내부에 보여줄 뷰
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.05) | 로직 슬라이드 (P.05) | 렌더링 슬라이드 (P.06) |
| :---: | :---: | :---: |
| ![6주 P.05 결과 화면](./images/week6/week6_p05_crop1.png) | ![6주 P.05 슬라이드](./images/week6/week6_p05_slide.png) | ![6주 P.06 슬라이드](./images/week6/week6_p06_slide.png) |

---

### 6주-04. ToastAndroid: 토스트 알림 (P.07)
* **목적**: 기본 토스트와 화면 중앙 오프셋 위치가 적용된 커스텀 토스트 알림 띄우기

#### [소스 코드]
```javascript
import React from 'react';
import { StyleSheet, ToastAndroid, View, Button } from 'react-native';

export default function App() {
  const showToast = () => {
    ToastAndroid.show('기본 토스트 메세지 !', ToastAndroid.SHORT);
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'TOGGLE TOAST WITH GRAVITY & OFFSET 메세지 !', // 메시지
      ToastAndroid.LONG, // 지속시간: SHORT(짧게), LONG(길게)
      ToastAndroid.CENTER, // 기준 위치: TOP | CENTER | BOTTOM
      25, // XOFFSET: 가로 오프셋(px, +는 오른쪽)
      50, // YOFFSET: 세로 오프셋(px, BOTTOM 기준일 때 +는 위로)
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
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    padding: 8,
  },
  buttonWrap: {
    marginBottom: 2,
    height: 5,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.07) |
| :---: | :---: |
| ![6주 P.07 결과 화면](./images/week6/week6_p07_crop1.png) | ![6주 P.07 슬라이드](./images/week6/week6_p07_slide.png) |

---

### 6주-05. 기타 컴포넌트 개요 (P.08)
* **내용**: Animated, Dimensions, KeyboardAvoidingView, Linking, Modal, PixelRatio, RefreshControl

#### [매핑 이미지]
| 기타 컴포넌트 아이콘 7종 (P.08) | 슬라이드 원본 (P.08) |
| :---: | :---: |
| ![기타 컴포넌트 아이콘](./images/week6/week6_p08_crop1.png) | ![6주 P.08 슬라이드](./images/week6/week6_p08_slide.png) |

---

### 6주-06. Animated: 페이드 애니메이션 (P.09~P.10)
* **목적**: `Animated.Value`와 `Animated.timing`을 이용한 5초 Fade In, 3초 Fade Out 애니메이션 구현

#### [통합 소스 코드 (P.09 + P.10)]
```javascript
import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // 5초 동안 투명도 0 -> 1 서서히 변화
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // 3초 동안 투명도 1 -> 0 서서히 변화
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
          {
            opacity: fadeAnim, // 애니메이션 값 바인딩
          },
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.09/P.10) | 로직 슬라이드 (P.09) | 렌더링 슬라이드 (P.10) |
| :---: | :---: | :---: |
| ![6주 P.09 결과 화면](./images/week6/week6_p09_crop1.png) | ![6주 P.09 슬라이드](./images/week6/week6_p09_slide.png) | ![6주 P.10 슬라이드](./images/week6/week6_p10_slide.png) |

---

### 6주-07. Dimensions: 화면 크기 측정 (P.11~P.12)
* **목적**: 기기의 `window` 및 `screen` 크기 측정 및 화면 회전 시 실시간 변경 감지

#### [통합 소스 코드 (P.11 + P.12)]
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
  });

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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 10,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.11/P.12) | 로직 슬라이드 (P.11) | 렌더링 슬라이드 (P.12) |
| :---: | :---: | :---: |
| ![6주 P.11 결과 화면](./images/week6/week6_p11_crop1.png) | ![6주 P.11 슬라이드](./images/week6/week6_p11_slide.png) | ![6주 P.12 슬라이드](./images/week6/week6_p12_slide.png) |

---

### 6주-08. KeyboardAvoidingView: 키보드 회피 (P.13~P.14)
* **목적**: 가상 키보드가 입력 필드를 가리지 않도록 뷰를 위로 올리고, 바깥 터치 시 키보드 닫기(`Keyboard.dismiss`)

#### [통합 소스 코드 (P.13 + P.14)]
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
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.13/P.14) | 로직 슬라이드 (P.13) | 렌더링 슬라이드 (P.14) |
| :---: | :---: | :---: |
| ![6주 P.13 결과 화면](./images/week6/week6_p13_crop1.png) | ![6주 P.13 슬라이드](./images/week6/week6_p13_slide.png) | ![6주 P.14 슬라이드](./images/week6/week6_p14_slide.png) |

---

### 6주-09. Linking: 외부 링크 열기 (P.15)
* **목적**: 버튼 클릭 시 `Linking.openURL`로 외부 웹사이트(네이버 블로그) 브라우저 열기

#### [소스 코드]
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
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    marginVertical: 30,
    textAlign: 'center',
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.15) |
| :---: | :---: |
| ![6주 P.15 결과 화면](./images/week6/week6_p15_crop1.png) | ![6주 P.15 슬라이드](./images/week6/week6_p15_slide.png) |

---

### 6주-10. Modal: 모달 대화상자 (P.16~P.17)
* **목적**: 화면 위에 반투명 오버레이로 뜨는 모달 다이얼로그(`Modal`, `animationType="slide"`, `transparent={true}`)

#### [통합 소스 코드 (P.16 + P.17)]
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
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.16/P.17) | 컴포넌트 슬라이드 (P.16) | 스타일 슬라이드 (P.17) |
| :---: | :---: | :---: |
| ![6주 P.16 결과 화면](./images/week6/week6_p16_crop1.png) | ![6주 P.16 슬라이드](./images/week6/week6_p16_slide.png) | ![6주 P.17 슬라이드](./images/week6/week6_p17_slide.png) |

---

### 6주-11. PixelRatio: 픽셀 밀도 (P.18~P.19)
* **목적**: 기기 픽셀 비율(`PixelRatio.get()`), 폰트 스케일, 레이아웃 크기에 대응하는 실제 픽셀 크기 변환

#### [통합 소스 코드 (P.18 + P.19)]
```javascript
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const size = 50;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.18/P.19) | 상단 슬라이드 (P.18) | 하단 슬라이드 (P.19) |
| :---: | :---: | :---: |
| ![6주 P.18 결과 화면](./images/week6/week6_p18_crop1.png) | ![6주 P.18 슬라이드](./images/week6/week6_p18_slide.png) | ![6주 P.19 슬라이드](./images/week6/week6_p19_slide.png) |

---

### 6주-12. RefreshControl: 당겨서 새로고침 (P.20~P.21)
* **목적**: `ScrollView`를 아래로 당겨 데이터 새로고침 트리거 및 2초 타이머(`useRef`, `useCallback`) 제어

#### [통합 소스 코드 (P.20 + P.21)]
```javascript
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const timerRef = useRef(null);

  const onRefresh = useCallback(() => {
    // 중복 새로고침 방지
    if (timerRef.current !== null) return;
    setRefreshing(true);
    timerRef.current = setTimeout(() => {
      setRefreshing(false);
      timerRef.current = null;
    }, 2000);
  }, []);

  // 화면이 닫히면 타이머 정리
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
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: 'pink',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.20/P.21) | 로직 슬라이드 (P.20) | 렌더링 슬라이드 (P.21) |
| :---: | :---: | :---: |
| ![6주 P.20 결과 화면](./images/week6/week6_p20_crop1.png) | ![6주 P.20 슬라이드](./images/week6/week6_p20_slide.png) | ![6주 P.21 슬라이드](./images/week6/week6_p21_slide.png) |

---

# 5. 7주차: Hook

### 7주-01. Hook 개요 및 규칙 (P.03~P.04)
* **개념**: 함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle) 기능을 사용할 수 있게 해주는 특별한 함수
* **규칙**:
  1. 함수 컴포넌트와 커스텀 Hook 내부에서만 사용 가능
  2. 함수 최상위(Top-level)에서만 호출 가능 (조건문, 반복문 내부 호출 금지)
  3. Hook 함수명은 항상 `use`로 시작해야 함 (`useState`, `useRef`, `useEffect`, `useMemo`)

#### [매핑 이미지]
| Hook 종류 슬라이드 (P.03) | useState 문법 슬라이드 (P.04) |
| :---: | :---: |
| ![7주 P.03 슬라이드](./images/week7/week7_p03_slide.png) | ![7주 P.04 슬라이드](./images/week7/week7_p04_slide.png) |

---

### 7주-02. useState 예제 1: 카운터 (P.05)
* **목적**: `Pressable` 버튼 클릭 시 `setCount`로 상태를 변경하고 화면을 자동 리렌더링

#### [소스 코드]
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4ab1ec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.05) |
| :---: | :---: |
| ![7주 P.05 결과 화면](./images/week7/week7_p05_crop1.png) | ![7주 P.05 슬라이드](./images/week7/week7_p05_slide.png) |

---

### 7주-03. useState 예제 2: 곱셈 계산기 (P.06~P.07)
* **목적**: 두 입력창 A, B에 숫자를 입력하고 버튼을 눌러 곱셈 결과 계산 및 에러 처리

#### [통합 소스 코드 (P.06 + P.07)]
```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [a, setA] = useState(''); // 첫 번째 숫자 (문자열)
  const [b, setB] = useState(''); // 두 번째 숫자 (문자열)
  const [result, setResult] = useState(null); // 계산 결과

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.06/P.07) | 로직 슬라이드 (P.06) | JSX 슬라이드 (P.07) |
| :---: | :---: | :---: |
| ![7주 P.06 결과 화면](./images/week7/week7_p06_crop1.png) | ![7주 P.06 슬라이드](./images/week7/week7_p06_slide.png) | ![7주 P.07 슬라이드](./images/week7/week7_p07_slide.png) |

---

### 7주-04. useRef 개요 및 문법 (P.08)
* **핵심 개념**:
  - `const ref = useRef(initialValue);`
  - `ref.current` 값이 바뀌어도 **컴포넌트가 다시 렌더링되지 않음!** (렌더링에 영향 주지 않는 값 보관 및 DOM 요소 직접 참조)

#### [매핑 이미지]
| 슬라이드 원본 (P.08) |
| :---: |
| ![7주 P.08 슬라이드](./images/week7/week7_p08_slide.png) |

---

### 7주-05. useRef 예제 1: 리렌더링 비교 (P.09)
* **시험 핵심 포인트**:
  - "클릭" 버튼을 누르면 `countRef.current`와 `countVar`는 콘솔에서 증가하지만 **화면은 바뀌지 않음!**
  - "리랜더" 버튼(`setRender(!render)`)을 눌러 컴포넌트가 다시 렌더링될 때 비로소 `countRef.current`의 누적값이 화면에 표시됨!
  - 반면 일반 변수 `countVar`는 리렌더링 시 함수가 다시 실행되므로 다시 초기값 `5`로 리셋됨!

#### [소스 코드]
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
        flex: 1, // 전체 화면 차지
        justifyContent: 'center', // 세로 중앙 정렬
        alignItems: 'stretch', // 가로 중앙 정렬
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

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.09) |
| :---: | :---: |
| ![7주 P.09 결과 화면](./images/week7/week7_p09_crop1.png) | ![7주 P.09 슬라이드](./images/week7/week7_p09_slide.png) |

---

### 7주-06. useRef 예제 2: 포커스 이동 (P.10)
* **목적**: `useRef`를 컴포넌트 태그의 `ref` 속성에 연결하고 `inputRef.current.focus()`로 직접 포커스 부여

#### [소스 코드]
```javascript
import React, { useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus(); // TextInput에 포커스 부여
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
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.10) |
| :---: | :---: |
| ![7주 P.10 결과 화면](./images/week7/week7_p10_crop1.png) | ![7주 P.10 슬라이드](./images/week7/week7_p10_slide.png) |

---

### 7주-07. useRef 예제 3: 계산기 포커스 연동 (P.11~P.12)
* **목적**: A × B 계산 버튼 클릭 시 계산 수행 후 즉시 A 입력창으로 다시 포커스를 자동 이동시키는 UX 최적화

#### [통합 소스 코드 (P.11 + P.12)]
```javascript
import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // ref가 존재할 때만 포커스 이동
    inputRef.current?.focus();
  };

  const [a, setA] = useState(''); // 첫 번째 숫자
  const [b, setB] = useState(''); // 두 번째 숫자
  const [result, setResult] = useState(null); // 계산 결과

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
    multiply(); // 계산 수행
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.11/P.12) | 로직 슬라이드 (P.11) | JSX 슬라이드 (P.12) |
| :---: | :---: | :---: |
| ![7주 P.11 결과 화면](./images/week7/week7_p11_crop1.png) | ![7주 P.11 슬라이드](./images/week7/week7_p11_slide.png) | ![7주 P.12 슬라이드](./images/week7/week7_p12_slide.png) |

---

### 7주-08. useEffect 개요 및 생명주기 (P.13)
* **내용**: `useEffect(() => { ... }, [dependencies]);`
  - 빈 배열 `[]`: 컴포넌트가 처음 나타날 때(마운트 시) 딱 한 번 실행
  - 의존성 배열 `[state]`: 지정한 상태 값이 변경될 때마다 실행
  - 클린업 함수 `return () => { ... }`: 컴포넌트가 사라질 때(언마운트 시) 정리 코드 실행

#### [매핑 이미지]
| 슬라이드 원본 (P.13) |
| :---: |
| ![7주 P.13 슬라이드](./images/week7/week7_p13_slide.png) |

---

### 7주-09. useEffect 예제 1: 최초 1회 실행 (P.14)
* **목적**: 의존성 배열 `[]`을 사용하여 컴포넌트 마운트 시 최초 1회만 콘솔 로그 출력

#### [소스 코드]
```javascript
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  useEffect(() => {
    console.log("앱이 실행되었습니다! (처음 한 번만)");
  }, []); // 빈 배열 → 최초 1회만 실행

  return (
    <View style={styles.container}>
      <Text style={styles.text}>useEffect 예제</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 30,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.14) |
| :---: | :---: |
| ![7주 P.14 결과 화면](./images/week7/week7_p14_crop1.png) | ![7주 P.14 슬라이드](./images/week7/week7_p14_slide.png) |

---

### 7주-10. useEffect 예제 2: 상태 변경 감지 (P.15)
* **목적**: 의존성 배열 `[count]`를 지정하여 `count` 값이 변경될 때마다 이펙트 콜백 실행

#### [소스 코드]
```javascript
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count 값이 바뀌었습니다:", count);
  }, [count]); // count가 변경될 때마다 실행

  return (
    <View style={styles.container}>
      <Text style={styles.text}>현재 값: {count}</Text>
      <Button title="+1 증가" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 30,
    paddingBottom: 10,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 | 슬라이드 원본 (P.15) |
| :---: | :---: |
| ![7주 P.15 결과 화면](./images/week7/week7_p15_crop1.png) | ![7주 P.15 슬라이드](./images/week7/week7_p15_slide.png) |

---

### 7주-11. useMemo 개요 및 문법 (P.16)
* **핵심 개념**:
  - `const memoizedValue = useMemo(() => 계산식, [dependencies]);`
  - 계산 결과를 메모이제이션(기억)하여 의존성 배열의 값이 바뀌지 않는 한 불필요한 재계산을 방지 (성능 최적화)

#### [매핑 이미지]
| 슬라이드 원본 (P.16) |
| :---: |
| ![7주 P.16 슬라이드](./images/week7/week7_p16_slide.png) |

---

### 7주-12. useMemo 예제: 연산 캐싱 최적화 (P.17~P.18)
* **시험 핵심 포인트**:
  - `double` 연산은 의존성 배열 `[count]`에 의해 감시됨
  - **"카운트 +1"** 버튼 클릭 시: `count`가 바뀌므로 `console.log("double 계산 실행!")`이 출력되고 재계산됨
  - **"텍스트 변경"** 버튼 클릭 시: `text`만 바뀌고 `count`는 그대로이므로 **double 재계산이 전혀 실행되지 않고 이전 캐싱값을 재사용함!**

#### [통합 소스 코드 (P.17 + P.18)]
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
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 30,
    paddingBottom: 10,
  },
});
```

#### [매핑 이미지]
| 에뮬레이터 실행 화면 (P.17/P.18) | 로직 슬라이드 (P.17) | 스타일 슬라이드 (P.18) |
| :---: | :---: | :---: |
| ![7주 P.17 결과 화면](./images/week7/week7_p17_crop1.png) | ![7주 P.17 슬라이드](./images/week7/week7_p17_slide.png) | ![7주 P.18 슬라이드](./images/week7/week7_p18_slide.png) |

---

### 7주-13. 7주차 실습 과제: 계산기 UI (P.19)
* **과제 스펙 명세**:
  - `backgroundColor: 'black'`
  - `displayText`: Color: `'white'`, FontSize: `84`, textAlign: `'right'`
  - `Button`: height: `64`
    - number Button: `backgroundColor: '#2f2f2f'`
    - operatorButton: `backgroundColor: '#F5A623'`
    - utilityButton: `backgroundColor: '#555'`
    - buttonText: color: `'white'`, fontSize: `30`, fontWeight: `'500'`

#### [스펙 기반 완성 구현 코드]
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
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingHorizontal: 15,
  },
  displayContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  displayText: {
    color: 'white',
    fontSize: 84,
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    height: 64,
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberButton: {
    backgroundColor: '#2f2f2f',
  },
  operatorButton: {
    backgroundColor: '#F5A623',
  },
  utilityButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
});
```

#### [매핑 이미지]
| 슬라이드 원본 (P.19) |
| :---: |
| ![7주 P.19 슬라이드](./images/week7/week7_p19_slide.png) |

---

### 7주-14. 중간고사 안내 (P.20)
* **시험 범위**: 2주 ~ 7주 강의 자료 전 범위
* **일시**: 2026년 10월 22일 후 103

#### [매핑 이미지]
| 슬라이드 원본 (P.20) |
| :---: |
| ![7주 P.20 슬라이드](./images/week7/week7_p20_slide.png) |

---
**[추출 및 매핑 작업 완료]**  
- 추출 이미지 저장 경로: `수업자료/크로스플랫폼/추출자료/images/`
- 개별 실행 소스 코드 저장 경로: `수업자료/크로스플랫폼/추출자료/src/`
