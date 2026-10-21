window.CROSSPLATFORM_WEEKS = window.CROSSPLATFORM_WEEKS || {};
window.CROSSPLATFORM_WEEKS.week3 = {
  "id": "cp_week3",
  "name": "[전수 기출] 제1단원: 3주차 스타일링 기초 지필고사 (10문항 / 100점)",
  "tag": "3주차 전수 코드 100%",
  "category": "3주차 스타일링 기초",
  "questions": [
    {
      "id": 1,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.4: JSX 기본 구조 & StyleSheet.create 필수 정렬 속성",
      "category": "3주차 스타일링 기초",
      "title": "JSX 기본 구조 및 StyleSheet 정렬 속성 빈칸",
      "text": "아래 코드는 Expo 프로젝트 초기 생성 시 기본 제공되는 App.js 화면 레이아웃 코드이다.<br>화면 전체를 채우고 컴포넌트들을 가로/세로 중앙에 배치하기 위해 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>, <b>( ㉣ )</b>에 들어갈 코드를 순서대로 쉼표로 구분하여 작성하시오.<br><br><pre class='code-block'>import { StatusBar } from 'expo-status-bar';\nimport { <span class='blank-chip'>( ㉠ )</span>, Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text&gt;Open up App.js to start working on your app!&lt;/Text&gt;\n      &lt;StatusBar style=\"auto\" /&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = <span class='blank-chip'>( ㉠ )</span>.create({\n  container: {\n    <span class='blank-chip'>( ㉡ )</span>: 1,\n    backgroundColor: '#fff',\n    <span class='blank-chip'>( ㉢ )</span>: 'center',\n    <span class='blank-chip'>( ㉣ )</span>: 'center',\n  },\n});</pre>",
      "placeholder": "( ㉠ ), ( ㉡ ), ( ㉢ ), ( ㉣ ) 답안을 순서대로 작성하세요...",
      "answers": [
        "StyleSheet, flex, alignItems, justifyContent",
        "StyleSheet,flex,alignItems,justifyContent",
        "StyleSheet, flex, justifyContent, alignItems"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) StyleSheet : React Native 스타일 생성 모듈<br>• ( ㉡ ) flex: 1 : 화면 전체 비율 차지<br>• ( ㉢ ) alignItems: 'center' : 가로축(교차축) 중앙 정렬<br>• ( ㉣ ) justifyContent: 'center' : 세로축(메인축) 중앙 정렬",
      "sampleAnswer": "( ㉠ ) StyleSheet, ( ㉡ ) flex, ( ㉢ ) alignItems, ( ㉣ ) justifyContent"
    },
    {
      "id": 2,
      "type": "essay",
      "score": 10,
      "origin": "3주차 p.5~7: Flexbox 3대 정렬 속성(flexDirection, justifyContent, alignItems)",
      "category": "3주차 스타일링 기초",
      "title": "Flexbox 정렬 3대 속성의 기본값과 동작 원리",
      "text": "3주차 교안에 등장하는 리액트 네이티브 컴포넌트 정렬 3대 속성에 대해 다음 3가지 물음에 답하시오.<br><br>1) <b>flexDirection</b>의 기본값(Default)을 쓰고, 컴포넌트가 배치되는 방향을 설명하시오.<br>2) <b>justifyContent</b>의 space-between, space-around, space-evenly의 배치 차이점을 서술하시오.<br>3) <b>alignItems</b>의 stretch와 baseline 속성값의 동작 원리를 서술하시오.",
      "placeholder": "1), 2), 3) 각 항목에 대해 구체적으로 서술하세요.",
      "rubric": "1. flexDirection 기본값 column 및 세로 방향 배치 명시 (3점)\n2. space-between(사이 여백), space-around(각 요소 주변 여백), space-evenly(사이와 양끝 동일 여백) 차이 서술 (4점)\n3. stretch(방향으로 컴포넌트 확장), baseline(내부 텍스트 기준선 정렬) 명시 (3점)",
      "sampleAnswer": "1) flexDirection의 기본값은 column이며, 컴포넌트를 세로 방향(위에서 아래)으로 정렬합니다.\n2) justifyContent 배치 차이점:\n• space-between: 컴포넌트 '사이'의 공간을 동일하게 배분하여 정렬함.\n• space-around: 컴포넌트 '각각의 주변' 공간을 동일하게 만들어 정렬함.\n• space-evenly: 컴포넌트 '사이와 양 끝' 모두에 동일한 공간을 만들어 정렬함.\n3) alignItems 동작 원리:\n• stretch: alignItems의 방향으로 컴포넌트를 끝까지 확장시킴.\n• baseline: 컴포넌트 내부 텍스트(Text)의 베이스라인(기준선)을 기준으로 정렬함.",
      "explanation": "리액트 네이티브는 웹과 달리 flexDirection 기본값이 column(세로)이라는 점과, justifyContent의 3대 space 분할 방식의 차이점을 정확히 구분해야 합니다."
    },
    {
      "id": 3,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.8~9: 텍스트 줄바꿈 문자열 {\"\\n\"} 처리 및 렌더링",
      "category": "3주차 스타일링 기초",
      "title": "텍스트 줄바꿈 표현식 및 화면 출력 결과",
      "text": "아래의 App 컴포넌트가 화면에 렌더링되었을 때, &lt;Text&gt; 태그 내부에서 출력되는 텍스트의 <b>실제 표시 줄 수(행 수)</b>와 <b>출력 내용</b>을 교안 예시와 동일하게 적으시오.<br><br><pre class='code-block'>export default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !{\"\\n\"} 학과: \n소프트웨어공학 {\"\\n\"}학번: 123456{\"\\n\"}이름: 홍길동&lt;/Text&gt;\n      &lt;StatusBar style=\"auto\" /&gt;\n    &lt;/View&gt;\n  );\n}</pre>",
      "placeholder": "출력 줄 수(행 수)와 출력 내용을 작성하세요...",
      "answers": [
        "4",
        "4줄",
        "총 4줄",
        "처음 시작하는 리액트 네이티브 프로그래밍 !\n학과: 소프트웨어공학\n학번: 123456\n이름: 홍길동"
      ],
      "explanation": "<b>정답:</b><br>총 <b>4줄</b>로 화면에 출력됩니다.<br><br><b>출력 내용:</b><pre class='code-block'>처음 시작하는 리액트 네이티브 프로그래밍 !\n 학과: 소프트웨어공학 \n학번: 123456\n이름: 홍길동</pre>",
      "sampleAnswer": "4줄 (4행)\n처음 시작하는 리액트 네이티브 프로그래밍 !\n 학과: 소프트웨어공학 \n학번: 123456\n이름: 홍길동"
    },
    {
      "id": 4,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.10: JSX 내부 주석 vs JS 영역 주석 문법 차이",
      "category": "3주차 스타일링 기초",
      "title": "리액트 네이티브 주석 처리 기호 빈칸",
      "text": "리액트 네이티브에서는 JSX 태그 내부와 자바스크립트 영역의 주석 처리 방식이 다르다. 아래 코드의 <b>( ㉠ )</b>과 <b>( ㉡ )</b>, <b>( ㉢ )</b>에 알맞은 주석 기호를 순서대로 쓰시오.<br><br><pre class='code-block'>export default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !&lt;/Text&gt;\n      <span class='blank-chip'>( ㉠ )</span> &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !&lt;/Text&gt; <span class='blank-chip'>( ㉡ )</span>\n      &lt;StatusBar style=\"auto\" /&gt;\n    &lt;/View&gt;\n  );\n}\n<span class='blank-chip'>( ㉢ )</span> 과목명: 리액트 네이티브 프로그래밍\n/* 이름: 홍길동 */</pre>",
      "placeholder": "( ㉠ ), ( ㉡ ), ( ㉢ ) 주석 기호를 순서대로 작성하세요...",
      "answers": [
        "{ /*, */ }, //",
        "{/*, */}, //",
        "{/*,*/},//",
        "{ /*, */ }, //"
      ],
      "explanation": "<b>정답:</b><br>• JSX 내부 태그 주석: ( ㉠ ) <code>{/*</code>, ( ㉡ ) <code>*/}</code><br>• 자바스크립트 영역 주석: ( ㉢ ) <code>//</code> 또는 <code>/* ... */</code>",
      "sampleAnswer": "( ㉠ ) {/*, ( ㉡ ) */}, ( ㉢ ) //"
    },
    {
      "id": 5,
      "type": "essay",
      "score": 10,
      "origin": "3주차 p.11: 인라인 스타일링 및 fontWeight 속성 주의점",
      "category": "3주차 스타일링 기초",
      "title": "인라인 스타일링의 특징과 fontWeight 속성값 주의점",
      "text": "아래의 인라인 스타일링 코드에서 <b>fontWeight</b> 속성에 값을 지정할 때 교안에서 특별히 주석으로 강조한 <b>주의사항</b>이 무엇인지 쓰고, 일반 웹 표준 CSS와 어떤 차이가 있는지 서술하시오.<br><br><pre class='code-block'>&lt;Text style={{\n    padding: 10,\n    fontSize: 26,\n    fontWeight: \"600\", // 주의사항\n    color: \"black\",\n}}&gt;\n  Inline Styling - Text\n&lt;/Text&gt;</pre>",
      "placeholder": "fontWeight 속성값의 자료형 주의사항과 웹 CSS와의 차이점을 서술하세요.",
      "rubric": "1. fontWeight 값을 숫자가 아닌 반드시 '문자열(String)'로 지정해야 함을 명시 (5점)\n2. 웹 CSS는 숫자(600)를 허용하지만 RN에서는 숫자를 넣으면 타입 오류가 발생함을 명시 (5점)",
      "sampleAnswer": "리액트 네이티브에서 fontWeight 속성값은 숫자가 아닌 반드시 문자열(String, 예: \"600\", \"400\")로 감싸서 지정해야 합니다.\n일반 웹 표준 CSS에서는 fontWeight: 600과 같이 숫자 리터럴을 지원하지만, 리액트 네이티브에서는 숫자를 직접 입력할 경우 런타임 타입 에러가 발생하므로 반드시 따옴표를 붙인 문자열 형태만 사용해야 합니다.",
      "explanation": "교안 11페이지 코드 주석: <code>fontWeight: \"600\", // 숫자가 아닌 문자열</code>을 그대로 묻는 핵심 문항입니다."
    },
    {
      "id": 6,
      "type": "code",
      "score": 10,
      "origin": "3주차 p.12: 클래스 스타일링 (StyleSheet.create)",
      "category": "3주차 스타일링 기초",
      "title": "클래스 스타일링 StyleSheet 객체 정의 및 바인딩",
      "text": "인라인 스타일을 클래스 스타일링 방식(StyleSheet.create)으로 분리하는 예제이다. 아래 전체 코드를 확인하고, <b>[빈칸 (A)]</b> 위치에 들어갈 styles 객체 정의 코드를 작성하시오.<br><br>• <b>container:</b> 화면 전체 flex 1, 배경색 '#fff', 가로/세로 중앙 정렬<br>• <b>text 스타일 조건:</b> 안쪽 여백 10, 글자 크기 26, 글자 두께 '600', 색상 'black'<br>• <b>error 스타일 조건:</b> 안쪽 여백 10, 글자 크기 26, 글자 두께 '400', 색상 'red'<br><br><pre class='code-block'>import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text style={styles.text}&gt;Inline Styling - Text&lt;/Text&gt;\n      &lt;Text style={styles.error}&gt;Inline Styling - Error&lt;/Text&gt;\n    &lt;/View&gt;\n  );\n}\n\n// ==========================================\n// [빈칸 (A)] 아래 styles 객체 정의 부분을 완성하시오.\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 styles 객체 정의 코드를 작성하세요...",
      "rubric": "1. text 스타일 객체 정확성 (padding, fontSize, fontWeight: '600', color) (5점)\n2. error 스타일 객체 정확성 (padding, fontSize, fontWeight: '400', color) (5점)",
      "sampleAnswer": "const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    padding: 10,\n    fontSize: 26,\n    fontWeight: '600',\n    color: 'black',\n  },\n  error: {\n    padding: 10,\n    fontSize: 26,\n    fontWeight: '400',\n    color: 'red',\n  },\n});",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    padding: 10,\n    fontSize: 26,\n    fontWeight: '600',\n    color: 'black',\n  },\n  error: {\n    padding: 10,\n    fontSize: 26,\n    fontWeight: '400',\n    color: 'red',\n  },\n});</pre>"
    },
    {
      "id": 7,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.13: 여러 개의 스타일 적용 (배열 스타일링 우선순위)",
      "category": "3주차 스타일링 기초",
      "title": "배열 스타일링 적용 시 덮어쓰기(오버라이드) 결과",
      "text": "아래 코드에서 두 번째 &lt;Text&gt; 컴포넌트에는 <code>style={[styles.text, styles.error]}</code>와 같이 배열로 스타일이 적용되어 있다.<br>최종 적용되는 <b>글자 두께(fontWeight)</b>와 <b>글자 색상(color)</b>을 순서대로 쓰시오.<br><br><pre class='code-block'>const styles = StyleSheet.create({\n  text: {\n    padding: 10,\n    fontSize: 26,\n    fontWeight: '600',\n    color: 'black',\n  },\n  error: {\n    fontWeight: '400',\n    color: 'red',\n  },\n});</pre>",
      "placeholder": "글자 두께와 글자 색상을 작성하세요...",
      "answers": [
        "'400', 'red'",
        "400, red",
        "'400', red",
        "\"400\", \"red\""
      ],
      "explanation": "<b>정답:</b><br>• fontWeight: <b>'400'</b><br>• color: <b>'red'</b><br><br>배열 스타일 <code>[styles.text, styles.error]</code> 적용 시 뒤에 위치한 error 스타일이 이전 text 스타일의 동일 속성을 오버라이드(덮어쓰기)합니다.",
      "sampleAnswer": "글자 두께(fontWeight): '400' (또는 400), 글자 색상(color): red (또는 빨간색)"
    },
    {
      "id": 8,
      "type": "code",
      "score": 10,
      "origin": "3주차 p.14~15: 외부 파일 스타일 분리 및 Named Export/Import",
      "category": "3주차 스타일링 기초",
      "title": "외부 스타일 모듈(styles.js) 생성 및 App.js 가져오기",
      "text": "외부 파일(./src/styles.js)에 스타일을 분리 작성하고 App.js에서 사용하는 예제이다. 아래 전체 코드를 확인하고 <b>[빈칸 (A)]</b>의 import 구문과 <b>[빈칸 (B)]</b>의 export 구문을 각각 작성하시오.<br><br>• <b>[App.js]:</b> './src/styles' 파일로부터 viewStyles와 textStyles 두 스타일 객체를 Named Import 방식으로 가져오기<br>• <b>[src/styles.js]:</b> StyleSheet.create를 사용하여 viewStyles(container 포함)와 textStyles(text, error 포함)를 각각 Named Export 방식으로 내보내기<br><br><pre class='code-block'>// [App.js]\nimport React from 'react';\nimport { View, Text } from 'react-native';\n// ==========================================\n// [빈칸 (A)] 외부 styles.js로부터 두 스타일 객체를 import 하시오.\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] import 문 작성 */</span>\n\nexport default function App() {\n  return (\n    &lt;View style={viewStyles.container}&gt;\n      &lt;Text style={textStyles.text}&gt;First My Project !&lt;/Text&gt;\n      &lt;Text style={textStyles.error}&gt;First My Project !&lt;/Text&gt;\n    &lt;/View&gt;\n  );\n}\n\n// [src/styles.js]\nimport { StyleSheet } from 'react-native';\n// ==========================================\n// [빈칸 (B)] viewStyles와 textStyles 객체를 export 하시오.\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (B)] export 구문 작성 */</span></pre>",
      "placeholder": "[빈칸 (A)]와 [빈칸 (B)]의 코드를 작성하세요...",
      "rubric": "1. App.js에서 viewStyles, textStyles named import 구문 정확성 (5점)\n2. src/styles.js에서 export const viewStyles / textStyles 선언 정확성 (5점)",
      "sampleAnswer": "// App.js\nimport { viewStyles, textStyles } from './src/styles';\n\n// src/styles.js\nexport const viewStyles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n\nexport const textStyles = StyleSheet.create({\n  text: {\n    padding: 10,\n    fontSize: 26,\n    fontWeight: '600',\n    color: 'black',\n  },\n  error: {\n    fontWeight: '400',\n    color: 'red',\n  },\n});",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>// App.js\nimport { viewStyles, textStyles } from './src/styles';\n\n// src/styles.js\nexport const viewStyles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n\nexport const textStyles = StyleSheet.create({\n  text: {\n    padding: 10,\n    fontSize: 26,\n    fontWeight: '600',\n    color: 'black',\n  },\n  error: {\n    fontWeight: '400',\n    color: 'red',\n  },\n});</pre>"
    },
    {
      "id": 9,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.16: flex 화면 분할 비율 계산",
      "category": "3주차 스타일링 기초",
      "title": "flex 속성에 따른 Header / Contents / Footer 화면 비율",
      "text": "부모 container 아래에 <b>header (flex: 1)</b>, <b>contents (flex: 3)</b>, <b>footer (flex: 1)</b>가 수직으로 배치되어 있다.<br>화면 전체 높이를 100%라고 할 때, <b>contents</b> 영역이 차지하는 높이 비율(%)을 숫자로만 적으시오.",
      "placeholder": "contents 영역의 화면 비율(%)을 숫자로 작성하세요...",
      "answers": [
        "60",
        "60%",
        "60 %"
      ],
      "explanation": "<b>정답:</b><br>총 flex 합 = 1 + 3 + 1 = 5.<br>contents 영역의 비율 = 3 / 5 = <b>60%</b>",
      "sampleAnswer": "60% (또는 60)"
    },
    {
      "id": 10,
      "type": "code",
      "score": 10,
      "origin": "3주차 p.17: flexDirection: \"row\" 가로 분할 레이아웃",
      "category": "3주차 스타일링 기초",
      "title": "가로 분할 레이아웃 스타일 객체 완성",
      "text": "3주차 교안 17페이지의 contents 내부 가로 2분할 레이아웃 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치에 들어갈 contents, contentsLeft, contentsRight 스타일 객체를 작성하시오.<br><br>• <b>contents:</b> 화면 비율 2, 자식 컴포넌트들을 가로 방향(row)으로 나란히 배치<br>• <b>contentsLeft:</b> 화면 비율 1, 배경색 '#16a085', 가로/세로 중앙 정렬<br>• <b>contentsRight:</b> 화면 비율 1, 배경색 '#27ae60', 가로/세로 중앙 정렬<br><br><pre class='code-block'>import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;View style={styles.header}&gt;&lt;Text style={styles.text}&gt;Header&lt;/Text&gt;&lt;/View&gt;\n      &lt;View style={styles.contents}&gt;\n        &lt;View style={styles.contentsLeft}&gt;&lt;Text style={styles.text}&gt;Contents Left&lt;/Text&gt;&lt;/View&gt;\n        &lt;View style={styles.contentsRight}&gt;&lt;Text style={styles.text}&gt;Contents Right&lt;/Text&gt;&lt;/View&gt;\n      &lt;/View&gt;\n      &lt;View style={styles.footer}&gt;&lt;Text style={styles.text}&gt;Footer&lt;/Text&gt;&lt;/View&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, backgroundColor: '#fff' },\n  header: { flex: 1, backgroundColor: '#3498db', alignItems: 'center', justifyContent: 'center' },\n// ==========================================\n// [빈칸 (A)] contents, contentsLeft, contentsRight 스타일을 작성하시오.\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  footer: { flex: 1, backgroundColor: '#e74c3c', alignItems: 'center', justifyContent: 'center' },\n  text: { fontSize: 26, color: '#000' },\n});</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 스타일 객체 코드를 작성하세요...",
      "rubric": "1. contents에 flex: 2, flexDirection: 'row' 지정 (4점)\n2. contentsLeft에 flex: 1, backgroundColor: '#16a085', 중앙 정렬 지정 (3점)\n3. contentsRight에 flex: 1, backgroundColor: '#27ae60', 중앙 정렬 지정 (3점)",
      "sampleAnswer": "  contents: {\n    flex: 2,\n    flexDirection: 'row',\n  },\n  contentsLeft: {\n    flex: 1,\n    backgroundColor: '#16a085',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  contentsRight: {\n    flex: 1,\n    backgroundColor: '#27ae60',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>  contents: {\n    flex: 2,\n    flexDirection: 'row',\n  },\n  contentsLeft: {\n    flex: 1,\n    backgroundColor: '#16a085',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  contentsRight: {\n    flex: 1,\n    backgroundColor: '#27ae60',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },</pre>"
    }
  ]
};
