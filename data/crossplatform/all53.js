window.CROSSPLATFORM_WEEKS = window.CROSSPLATFORM_WEEKS || {};
window.CROSSPLATFORM_WEEKS.all53 = {
  "id": "cp_all53",
  "name": "[ALL 53제 전수 마스터] 3주~7주차 전범위 실전 총괄 지필고사 (53문항 / 530점)",
  "tag": "3~7주차 전수 코드 100% 반영",
  "category": "전범위 올마스터",
  "questions": [
    {
      "id": 1,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.4: JSX 기본 구조 & StyleSheet.create 필수 정렬 속성",
      "category": "3주차 스타일링 기초",
      "title": "JSX 기본 구조 및 StyleSheet 정렬 속성 빈칸",
      "text": "아래 코드는 Expo 프로젝트 초기 생성 시 기본 제공되는 App.js 화면 레이아웃 코드이다.<br>화면 전체를 채우고 컴포넌트들을 가로/세로 중앙에 배치하기 위해 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>, <b>( ㉣ )</b>에 들어갈 코드를 순서대로 쉼표로 구분하여 작성하시오.<br><br><pre class='code-block'>import { StatusBar } from 'expo-status-bar';\nimport { <span class='blank-chip'>( ㉠ )</span>, Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text&gt;Open up App.js to start working on your app!&lt;/Text&gt;\n      &lt;StatusBar style=\"auto\" /&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = <span class='blank-chip'>( ㉠ )</span>.create({\n  container: {\n    <span class='blank-chip'>( ㉡ )</span>: 1,\n    backgroundColor: '#fff',\n    <span class='blank-chip'>( ㉢ )</span>: 'center',\n    <span class='blank-chip'>( ㉣ )</span>: 'center',\n  },\n});</pre>",
      "placeholder": "순서대로 입력 (예: StyleSheet, flex, alignItems, justifyContent)",
      "answers": [
        "StyleSheet, flex, alignItems, justifyContent",
        "StyleSheet,flex,alignItems,justifyContent",
        "StyleSheet, flex, justifyContent, alignItems"
      ],
      "explanation": "<b>정답: ( ㉠ ) StyleSheet, ( ㉡ ) flex, ( ㉢ ) alignItems, ( ㉣ ) justifyContent</b><br>• 리액트 네이티브 스타일 객체 생성 API: StyleSheet.create<br>• 전체 화면 비율 할당: flex: 1<br>• 가로(교차축) 중앙 정렬: alignItems: 'center'<br>• 세로(주축) 중앙 정렬: justifyContent: 'center' (3주차 p.4)"
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
      "placeholder": "표시 줄 수 또는 줄바꿈된 텍스트 입력 (예: 4줄)",
      "answers": [
        "4",
        "4줄",
        "총 4줄",
        "처음 시작하는 리액트 네이티브 프로그래밍 !\n학과: 소프트웨어공학\n학번: 123456\n이름: 홍길동"
      ],
      "explanation": "<b>정답: 총 4줄</b><br>JSX 내부에서는 자바스크립트 표현식 <code>{\"\\n\"}</code>을 통해 줄바꿈을 강제합니다. 코드 내에 3개의 개행식이 포함되어 있으므로 총 4개 행으로 출력됩니다.<br><br>1행: 처음 시작하는 리액트 네이티브 프로그래밍 !<br>2행: 학과: 소프트웨어공학<br>3행: 학번: 123456<br>4행: 이름: 홍길동 (3주차 p.9)"
    },
    {
      "id": 4,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.10: JSX 내부 주석 vs JS 영역 주석 문법 차이",
      "category": "3주차 스타일링 기초",
      "title": "리액트 네이티브 주석 처리 기호 빈칸",
      "text": "리액트 네이티브에서는 JSX 태그 내부와 자바스크립트 영역의 주석 처리 방식이 다르다. 아래 코드의 <b>( ㉠ )</b>과 <b>( ㉡ )</b>, <b>( ㉢ )</b>에 알맞은 주석 기호를 순서대로 쓰시오.<br><br><pre class='code-block'>export default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !&lt;/Text&gt;\n      <span class='blank-chip'>( ㉠ )</span> &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !&lt;/Text&gt; <span class='blank-chip'>( ㉡ )</span>\n      &lt;StatusBar style=\"auto\" /&gt;\n    &lt;/View&gt;\n  );\n}\n<span class='blank-chip'>( ㉢ )</span> 과목명: 리액트 네이티브 프로그래밍\n/* 이름: 홍길동 */</pre>",
      "placeholder": "순서대로 기호 입력 (예: { /*, */ }, //)",
      "answers": [
        "{ /*, */ }, //",
        "{/*, */}, //",
        "{/*,*/},//",
        "{ /*, */ }, //"
      ],
      "explanation": "<b>정답: ( ㉠ ) { /*, ( ㉡ ) */ }, ( ㉢ ) //</b><br>JSX 태그 내부에서는 자바스크립트 블록 기호 <code>{ }</code> 내에 다중행 주석 기호 <code>/* */</code>를 감싼 <code>{ /* ... */ }</code> 형태를 사용해야 텍스트로 노출되지 않고 정상 주석 처리됩니다. (3주차 p.10)"
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
      "text": "인라인 스타일을 클래스 스타일링 방식(StyleSheet.create)으로 분리하는 예제이다. 조건에 맞추어 <b>text</b>와 <b>error</b> 스타일 객체를 선언하고 &lt;Text&gt; 컴포넌트에 바인딩하시오.<br><br>• <b>text 스타일 조건:</b> 안쪽 여백 10, 글자 크기 26, 글자 두께 '600', 색상 'black'<br>• <b>error 스타일 조건:</b> 안쪽 여백 10, 글자 크기 26, 글자 두께 '400', 색상 'red'<br><br><pre class='code-block'>export default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text style={styles.text}&gt;Inline Styling - Text&lt;/Text&gt;\n      &lt;Text style={styles.error}&gt;Inline Styling - Error&lt;/Text&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },\n  <span class='todo-chip'>// TODO: text 및 error 스타일 객체 작성</span>\n});</pre>",
      "placeholder": "text 및 error 스타일 객체 코드를 작성하세요.",
      "rubric": "1. text 스타일 객체 정확성 (padding, fontSize, fontWeight: '600', color) (5점)\n2. error 스타일 객체 정확성 (padding, fontSize, fontWeight: '400', color) (5점)",
      "sampleAnswer": "text: {\n  padding: 10,\n  fontSize: 26,\n  fontWeight: '600',\n  color: 'black',\n},\nerror: {\n  padding: 10,\n  fontSize: 26,\n  fontWeight: '400',\n  color: 'red',\n}",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>text: {\n  padding: 10,\n  fontSize: 26,\n  fontWeight: '600',\n  color: 'black',\n},\nerror: {\n  padding: 10,\n  fontSize: 26,\n  fontWeight: '400',\n  color: 'red',\n}</pre>"
    },
    {
      "id": 7,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.13: 여러 개의 스타일 적용 (배열 스타일링 우선순위)",
      "category": "3주차 스타일링 기초",
      "title": "배열 스타일링 적용 시 덮어쓰기(오버라이드) 결과",
      "text": "아래 코드에서 두 번째 &lt;Text&gt; 컴포넌트에는 <code>style={[styles.text, styles.error]}</code>와 같이 배열로 스타일이 적용되어 있다.<br>최종 적용되는 <b>글자 두께(fontWeight)</b>와 <b>글자 색상(color)</b>을 순서대로 쓰시오.<br><br><pre class='code-block'>const styles = StyleSheet.create({\n  text: {\n    padding: 10,\n    fontSize: 26,\n    fontWeight: '600',\n    color: 'black',\n  },\n  error: {\n    fontWeight: '400',\n    color: 'red',\n  },\n});</pre>",
      "placeholder": "순서대로 입력 (예: '400', 'red')",
      "answers": [
        "'400', 'red'",
        "400, red",
        "'400', red",
        "\"400\", \"red\""
      ],
      "explanation": "<b>정답: fontWeight: '400', color: 'red'</b><br>배열 표기법 <code>[styles.text, styles.error]</code>을 사용하면 배열의 뒤에 위치한 객체(styles.error)가 앞의 객체(styles.text)의 중복 속성을 덮어씁니다(Override). 중복되지 않은 padding(10)과 fontSize(26)는 그대로 유지됩니다. (3주차 p.13)"
    },
    {
      "id": 8,
      "type": "code",
      "score": 10,
      "origin": "3주차 p.14~15: 외부 파일 스타일 분리 및 Named Export/Import",
      "category": "3주차 스타일링 기초",
      "title": "외부 스타일 모듈(styles.js) 생성 및 App.js 가져오기",
      "text": "외부 파일(./src/styles.js)에 스타일을 분리 작성하고 App.js에서 사용하는 예제이다. 조건에 맞게 App.js의 import문과 styles.js의 export 코드를 완성하시오.<br><br>• <b>[App.js]:</b> './src/styles' 파일로부터 viewStyles와 textStyles 두 스타일 객체를 Named Import 방식으로 가져오기<br>• <b>[src/styles.js]:</b> StyleSheet.create를 사용하여 viewStyles(container 포함)와 textStyles(text, error 포함)를 각각 Named Export 방식으로 내보내기",
      "placeholder": "App.js의 import문과 src/styles.js의 export 선언 구문을 작성하세요.",
      "rubric": "1. App.js에서 viewStyles, textStyles named import 구문 정확성 (5점)\n2. src/styles.js에서 export const viewStyles / textStyles 선언 정확성 (5점)",
      "sampleAnswer": "// App.js\nimport { viewStyles, textStyles } from \"./src/styles\";\n\n// src/styles.js\nexport const viewStyles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' } });\nexport const textStyles = StyleSheet.create({ text: { padding: 10, fontSize: 26, fontWeight: '600', color: 'black' }, error: { fontWeight: '400', color: 'red' } });",
      "explanation": "스타일을 별도 모듈로 분리할 때는 명명된 내보내기(named export: <code>export const ...</code>)와 명명된 가져오기(named import: <code>import { ... } from '...'</code>)를 사용합니다."
    },
    {
      "id": 9,
      "type": "short",
      "score": 10,
      "origin": "3주차 p.16: flex 화면 분할 비율 계산",
      "category": "3주차 스타일링 기초",
      "title": "flex 속성에 따른 Header / Contents / Footer 화면 비율",
      "text": "부모 container 아래에 <b>header (flex: 1)</b>, <b>contents (flex: 3)</b>, <b>footer (flex: 1)</b>가 수직으로 배치되어 있다.<br>화면 전체 높이를 100%라고 할 때, <b>contents</b> 영역이 차지하는 높이 비율(%)을 숫자로만 적으시오.",
      "placeholder": "퍼센트 숫자 입력 (예: 60)",
      "answers": [
        "60",
        "60%",
        "60 %"
      ],
      "explanation": "<b>정답: 60%</b><br>총 flex 비율의 합은 1 + 3 + 1 = 5입니다. contents 영역은 5개 중 3개를 차지하므로 (3 / 5) × 100 = 60%를 차지합니다. (3주차 p.16)"
    },
    {
      "id": 10,
      "type": "code",
      "score": 10,
      "origin": "3주차 p.17: flexDirection: \"row\" 가로 분할 레이아웃",
      "category": "3주차 스타일링 기초",
      "title": "가로 분할 레이아웃 스타일 객체 완성",
      "text": "3주차 교안 17페이지의 contents 내부 가로 2분할 레이아웃 스타일을 완성하시오.<br><br>• <b>contents:</b> 화면 비율 2, 자식 컴포넌트들을 가로 방향(행)으로 나란히 배치<br>• <b>contentsLeft:</b> 화면 비율 1, 배경색 \"#16a085\", 가로/세로 중앙 정렬<br>• <b>contentsRight:</b> 화면 비율 1, 배경색 \"#27ae60\", 가로/세로 중앙 정렬",
      "placeholder": "contents, contentsLeft, contentsRight 스타일 객체를 작성하세요.",
      "rubric": "1. contents에 flex: 2, flexDirection: 'row' 지정 (4점)\n2. contentsLeft에 flex: 1, backgroundColor: '#16a085', 중앙 정렬 지정 (3점)\n3. contentsRight에 flex: 1, backgroundColor: '#27ae60', 중앙 정렬 지정 (3점)",
      "sampleAnswer": "contents: {\n  flex: 2,\n  flexDirection: \"row\",\n},\ncontentsLeft: {\n  flex: 1,\n  backgroundColor: \"#16a085\",\n  alignItems: \"center\",\n  justifyContent: \"center\",\n},\ncontentsRight: {\n  flex: 1,\n  backgroundColor: \"#27ae60\",\n  alignItems: \"center\",\n  justifyContent: \"center\",\n},",
      "explanation": "가로 방향 배치를 위해서는 부모 요소에 <code>flexDirection: \"row\"</code>를 부여하고 자식들에게 <code>flex: 1</code>을 할당합니다."
    },
    {
      "id": 11,
      "type": "essay",
      "score": 10,
      "origin": "4주차 p.3: 컴포넌트(Component)의 정의 및 함수형 vs 클래스형 비교",
      "category": "4주차 컴포넌트 기초",
      "title": "컴포넌트 정의 및 함수형 vs 클래스형 컴포넌트 비교",
      "text": "4주차 교안 3페이지에 근거하여 다음 두 물음에 답하시오.<br><br>1) <b>컴포넌트(Component)의 정의</b>를 교안에 명시된 문장 그대로 서술하시오.<br>2) <b>함수(Function)형 컴포넌트</b>와 <b>클래스(Class)형 컴포넌트</b>의 주요 특징을 비교 서술하시오.",
      "placeholder": "컴포넌트 정의와 두 컴포넌트 방식의 차이점을 서술하세요.",
      "rubric": "1. 컴포넌트 정의('재사용 할 수 있는 조립 블록으로 화면에 나타나는 UI 요소') 명시 (5점)\n2. 함수형(코드 짧고 직관적, React 16.8 Hook 도입, 현재 표준) 및 클래스형(과거 기술/방식, 기존 코드 유지보수 위주) 명시 (5점)",
      "sampleAnswer": "1) 컴포넌트(Component)란 재사용 할 수 있는 조립 블록으로 화면에 나타나는 UI 요소이다.\n2) 비교:\n• 함수형 컴포넌트: 코드가 더 짧고 직관적이며, React 16.8 이후 Hook이 도입되어 현재의 표준 개발 방식이다.\n• 클래스형 컴포넌트: React 16.8 이전의 과거 기술/방식으로, 기존 코드를 유지하고 보수(유지보수 위주)할 때 사용된다.",
      "explanation": "교안 3페이지의 핵심 정의 문장과 컴포넌트 패러다임 변화를 묻는 서술형 문제입니다."
    },
    {
      "id": 12,
      "type": "code",
      "score": 10,
      "origin": "4주차 p.4: View 계층 중첩 레이아웃 (flex 상하좌우 4분할)",
      "category": "4주차 컴포넌트 기초",
      "title": "View 계층 중첩 4분할 레이아웃 완성",
      "text": "화면을 좌우 2분할한 뒤, 좌측과 우측을 다시 상하 2분할하는 4분할 레이아웃 컴포넌트이다. 교안 4페이지의 계층 구조에 맞추어 <b>( ㉠ )</b>과 <b>( ㉡ )</b>에 들어갈 View JSX 코드를 완성하시오.<br><br><pre class='code-block'>&lt;View style={styles.contents}&gt;\n  {/* 좌측 영역: 상/하 분할 */}\n  &lt;View style={styles.contentsLeft}&gt;\n    <span class='blank-chip'>( ㉠ )</span>\n  &lt;/View&gt;\n  {/* 우측 영역: 상/하 분할 */}\n  &lt;View style={styles.contentsRight}&gt;\n    <span class='blank-chip'>( ㉡ )</span>\n  &lt;/View&gt;\n&lt;/View&gt;</pre>",
      "placeholder": "( ㉠ )과 ( ㉡ )의 JSX 코드를 작성하세요.",
      "rubric": "1. contentsLeftTop 및 contentsLeftBottom View 구조와 텍스트 일치 (5점)\n2. contentsRightTop 및 contentsRightBottom View 구조와 텍스트 일치 (5점)",
      "sampleAnswer": "// ( ㉠ )\n<View style={styles.contentsLeftTop}>\n  <Text style={styles.text}>Contents Left Top</Text>\n</View>\n<View style={styles.contentsLeftBottom}>\n  <Text style={styles.text}>Contents Left Bottom</Text>\n</View>\n\n// ( ㉡ )\n<View style={styles.contentsRightTop}>\n  <Text style={styles.text}>Contents Right Top</Text>\n</View>\n<View style={styles.contentsRightBottom}>\n  <Text style={styles.text}>ContentsRightBottom</Text>\n</View>",
      "explanation": "교안 4페이지 View: flex 원본 예제. View 내부에 또 다른 자식 View를 중첩하여 그리드 형태의 화면 레이아웃을 구성합니다."
    },
    {
      "id": 13,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.5~6: Text 중첩 스타일링 (StyleSheet vs 인라인 방식)",
      "category": "4주차 컴포넌트 기초",
      "title": "Text 컴포넌트 중첩 스타일링 빈칸",
      "text": "한 문장 내에서 특정 단어만 다른 스타일로 꾸미기 위해 &lt;Text&gt;를 중첩하는 기법이다.<br>아래의 스타일시트 방식 <b>( ㉠ )</b>과 인라인 스타일링 방식 <b>( ㉡ )</b>의 빈칸을 채우시오.<br><br><pre class='code-block'>// 1) StyleSheet 방식 (교안 p.5)\n&lt;Text style={styles.baseText}&gt;나는 강남대학교\n  &lt;<span class='blank-chip'>( ㉠ )</span> style={styles.innerText}&gt; 학생 이다.&lt;/<span class='blank-chip'>( ㉠ )</span>&gt;\n&lt;/Text&gt;\n\n// 2) 인라인 스타일링 방식 (교안 p.6)\n&lt;Text style={{fontSize:30}}&gt;나는 강남대학교\n  &lt;Text style={{ <span class='blank-chip'>( ㉡ )</span> }}&gt; 학생 이다.&lt;/Text&gt;\n&lt;/Text&gt;</pre>",
      "placeholder": "순서대로 입력 (예: Text, fontSize:30, color:\"green\")",
      "answers": [
        "Text, fontSize:30, color:\"green\"",
        "Text, fontSize: 30, color: \"green\"",
        "Text, fontSize:30, color:'green'",
        "Text, fontSize: 30, color: 'green'"
      ],
      "explanation": "<b>정답: ( ㉠ ) Text, ( ㉡ ) fontSize: 30, color: \"green\"</b><br>텍스트 내부에 또 다른 Text 컴포넌트를 중첩함으로써 특정 어절의 색상이나 폰트를 부분적으로 다르게 줄 수 있습니다. (4주차 p.5~6)"
    },
    {
      "id": 14,
      "type": "essay",
      "score": 10,
      "origin": "4주차 p.7: ScrollView 컴포넌트의 사용 목적과 동작 원리",
      "category": "4주차 컴포넌트 기초",
      "title": "ScrollView의 사용 목적과 View와의 결정적 차이",
      "text": "화면을 넘어가는 긴 텍스트나 컨텐츠가 있을 때 기본 <b>View 대신 ScrollView 컴포넌트를 사용하는 목적과 동작 원리</b>를 서술하시오.<br><br><pre class='code-block'>&lt;ScrollView&gt;\n  &lt;Text style={styles.baseText}&gt;React의 문법으로 안드로이드, iOS 앱을 개발할 수 있는 프레임워크이다...&lt;/Text&gt;\n&lt;/ScrollView&gt;</pre>",
      "placeholder": "기본 View의 한계와 ScrollView의 필요성을 서술하세요.",
      "rubric": "1. 기본 View는 화면을 초과하는 컨텐츠가 있어도 자동 스크롤되지 않고 잘림을 명시 (5점)\n2. ScrollView는 터치 제스처를 통해 위아래/좌우로 화면 초과 영역을 스크롤하여 탐색할 수 있음을 명시 (5점)",
      "sampleAnswer": "리액트 네이티브의 기본 View 컴포넌트는 단말기 화면 크기를 벗어나는 컨텐츠가 있어도 자동으로 스크롤 기능을 제공하지 않고 화면 밖으로 잘려 보이지 않습니다.\n따라서 컨텐츠가 기기 화면 높이를 초과할 때 사용자가 터치 스크롤 제스처를 통해 위아래로 스크롤하여 모든 내용을 온전히 확인할 수 있도록 ScrollView를 사용합니다.",
      "explanation": "기본 View와 ScrollView의 스크롤 지원 유무 차이를 정확히 서술해야 합니다."
    },
    {
      "id": 15,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.10: Text onPress 이벤트 및 numberOfLines 속성",
      "category": "4주차 컴포넌트 기초",
      "title": "Text onPress 클릭 시 상태 변화 및 numberOfLines 동작",
      "text": "아래 코드에서 사용자가 최초 렌더링 상태에서 빨간색 제목 텍스트를 클릭했을 때, <b>화면에 표시되는 제목 텍스트의 최종 문자열</b>을 적으시오.<br><br><pre class='code-block'>const [titleText, setTitleText] = useState(\"지금, 무슨 과목:[클릭 ㅋㅋ]\");\nconst onPressTitle = () => {\n  setTitleText(\"크로스 플랫폼 과목 !!!\");\n};\n\n&lt;Text style={styles.titleText} onPress={onPressTitle}&gt;\n  {titleText}\n&lt;/Text&gt;</pre>",
      "placeholder": "최종 표시되는 문자열 입력 (따옴표 제외)",
      "answers": [
        "크로스 플랫폼 과목 !!!",
        "크로스 플랫폼 과목!!!",
        "\"크로스 플랫폼 과목 !!!\""
      ],
      "explanation": "<b>정답: 크로스 플랫폼 과목 !!!</b><br>사용자가 &lt;Text onPress={onPressTitle}&gt;을 클릭하면 핸들러가 실행되어 setTitleText에 의해 \"크로스 플랫폼 과목 !!!\"으로 상태값이 갱신되고 화면이 리렌더링됩니다. (4주차 p.10)"
    },
    {
      "id": 16,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.11: Button 컴포넌트의 필수 속성 title",
      "category": "4주차 컴포넌트 기초",
      "title": "Button 컴포넌트의 필수 속성명 빈칸",
      "text": "리액트 네이티브의 기본 &lt;Button&gt; 컴포넌트에서 버튼 표면에 나타날 글자를 지정하는 <b>필수 Props 명칭</b>을 쓰시오.<br><br><pre class='code-block'>&lt;Button \n  <span class='blank-chip'>( ㉠ )</span>='버튼 만들기'\n/&gt;</pre>",
      "placeholder": "속성명 입력 (예: title)",
      "answers": [
        "title",
        "title 속성"
      ],
      "explanation": "<b>정답: title</b><br>리액트 네이티브의 &lt;Button&gt; 컴포넌트는 자식 요소로 텍스트를 넣는 방식이 허용되지 않으며, 반드시 title prop을 통해 문자열을 전달해야 합니다. (4주차 p.11)"
    },
    {
      "id": 17,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.12: Button color 및 Alert.alert 팝업 이벤트",
      "category": "4주차 컴포넌트 기초",
      "title": "Button의 color 및 Alert 이벤트 바인딩 빈칸",
      "text": "버튼 색상을 핑크색(\"#f194ff\")으로 지정하고, 클릭 시 알림창을 띄우는 빈칸 <b>( ㉠ )</b>과 <b>( ㉡ )</b>을 채우시오.<br><br><pre class='code-block'>&lt;Button \n  title='버튼 만들기'\n  <span class='blank-chip'>( ㉠ )</span>=\"#f194ff\"\n  <span class='blank-chip'>( ㉡ )</span>={()=> Alert.alert('핑크 버튼 누름')}\n/&gt;</pre>",
      "placeholder": "순서대로 입력 (예: color, onPress)",
      "answers": [
        "color, onPress",
        "color,onPress",
        "color, onPress prop"
      ],
      "explanation": "<b>정답: ( ㉠ ) color, ( ㉡ ) onPress</b><br>버튼 색상은 color prop으로 지정하며, 클릭 이벤트 핸들러 prop은 onPress입니다. (4주차 p.12)"
    },
    {
      "id": 18,
      "type": "code",
      "score": 10,
      "origin": "4주차 p.13: Alert.alert 취소/확인 다중 버튼 배열 옵션",
      "category": "4주차 컴포넌트 기초",
      "title": "Alert.alert 취소/확인 다중 버튼 배열 구현",
      "text": "버튼 클릭 시 '취소'와 '확인' 버튼을 가진 팝업 다이얼로그를 호출하는 예제이다. 조건에 맞게 Alert.alert의 버튼 배열 객체를 완성하시오.<br><br>• <b>취소 버튼:</b> 버튼 라벨 '취소', 취소 전용 스타일('cancel') 부여, 클릭 시 콘솔에 '취소 버튼 클릭' 출력<br>• <b>확인 버튼:</b> 버튼 라벨 '확인', 클릭 시 콘솔에 '확인 버튼 클릭' 출력",
      "placeholder": "취소와 확인 버튼 배열 객체를 작성하세요.",
      "rubric": "1. 취소 버튼 객체(text, onPress, style: 'cancel') 정확성 (5점)\n2. 확인 버튼 객체(text, onPress) 정확성 (5점)",
      "sampleAnswer": "[\n  {\n    text: \"취소\",\n    onPress: () => console.log(\"취소 버튼 클릭\"),\n    style: \"cancel\",\n  },\n  { \n    text: \"확인\", \n    onPress: () => console.log(\"확인 버튼 클릭\") \n  },\n]",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>[\n  { text: \"취소\", onPress: () => console.log(\"취소 버튼 클릭\"), style: \"cancel\" },\n  { text: \"확인\", onPress: () => console.log(\"확인 버튼 클릭\") }\n]</pre>"
    },
    {
      "id": 19,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.14: TextInput 양방향 상태 바인딩 3대 속성",
      "category": "4주차 컴포넌트 기초",
      "title": "TextInput의 placeholder, value, onChangeText 빈칸",
      "text": "사용자가 텍스트를 입력할 때마다 상태값(text)을 갱신하고 입력창에 표시하는 코드이다. 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>의 속성명을 순서대로 쓰시오.<br><br><pre class='code-block'>&lt;TextInput\n  style={styles.input}\n  <span class='blank-chip'>( ㉠ )</span>=\"여기에 입력\"\n  <span class='blank-chip'>( ㉡ )</span>={text}\n  <span class='blank-chip'>( ㉢ )</span>={(value) => setText(value)}\n/&gt;</pre>",
      "placeholder": "순서대로 입력 (예: placeholder, value, onChangeText)",
      "answers": [
        "placeholder, value, onChangeText",
        "placeholder,value,onChangeText"
      ],
      "explanation": "<b>정답: ( ㉠ ) placeholder, ( ㉡ ) value, ( ㉢ ) onChangeText</b><br>힌트 표시는 placeholder, 상태값 바인딩은 value, 텍스트 변경 감지 콜백은 onChangeText입니다. (4주차 p.14)"
    },
    {
      "id": 20,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.15: TextInput 정규식 필터링 value.replace(/[^0-9]/g, \"\")",
      "category": "4주차 컴포넌트 기초",
      "title": "정규식 필터링에 따른 최종 비밀번호 출력값",
      "text": "아래의 비밀번호 입력 필드에서 사용자가 키보드로 <b>\"pass1234!@\"</b>를 입력하였다.<br>정규식 <code>value.replace(/[^0-9]/g, \"\")</code>에 의해 최종적으로 화면의 <code>비밀번호: {number}</code>에 출력되는 문자열을 적으시오.<br><br><pre class='code-block'>&lt;TextInput\n  placeholder='비빌번호'\n  keyboardType='numberic'\n  secureTextEntry={false}\n  value={number}\n  onChangeText={(value) => onNumber(value.replace(/[^0-9]/g, \"\"))}\n/&gt;\n&lt;Text style={styles.output}&gt;비밀번호: {number}&lt;/Text&gt;</pre>",
      "placeholder": "출력되는 문자열 입력",
      "answers": [
        "1234"
      ],
      "explanation": "<b>정답: 1234</b><br>정규표현식 <code>/[^0-9]/g</code>는 0~9 범위의 숫자가 아닌 모든 문자(pass, !, @)를 찾아 제거하므로 숫자 1234만 남게 됩니다. (4주차 p.15)"
    },
    {
      "id": 21,
      "type": "essay",
      "score": 10,
      "origin": "4주차 p.16: TextInput 여러 줄 입력(Multiline) 4대 속성",
      "category": "4주차 컴포넌트 기초",
      "title": "TextInput Multiline 4대 속성의 기능 서술",
      "text": "4주차 교안 16페이지의 여러 줄 입력(Multiline) TextInput에서 사용된 다음 4가지 속성의 기능을 각각 1줄로 설명하시오.<br><br>1) <b>editable</b><br>2) <b>multiline</b><br>3) <b>numberOfLines={4}</b><br>4) <b>maxLength={40}</b>",
      "placeholder": "1) ~ 4) 각 속성의 기능을 간략히 서술하세요.",
      "rubric": "1. editable(편집 가능 여부) (2.5점)\n2. multiline(여러 줄 입력 가능) (2.5점)\n3. numberOfLines(최대 4줄 표시 높이) (2.5점)\n4. maxLength(최대 40자 제한) (2.5점)",
      "sampleAnswer": "1) editable: 텍스트 입력창의 수정(편집) 가능 여부를 지정함.\n2) multiline: 사용자가 줄바꿈(엔터)을 하여 여러 줄의 텍스트를 입력할 수 있도록 허용함.\n3) numberOfLines={4}: 입력창의 기본 표시 높이를 최대 4줄 크기로 보여줌.\n4) maxLength={40}: 사용자가 입력할 수 있는 글자 수를 최대 40자까지만 제한함.",
      "explanation": "교안 16페이지 주석 설명 그대로의 속성별 역할을 평가합니다."
    },
    {
      "id": 22,
      "type": "code",
      "score": 10,
      "origin": "4주차 p.17: 여러 줄 입력 결과 Alert 확인 후 입력창 초기화",
      "category": "4주차 컴포넌트 기초",
      "title": "입력값 Alert 출력 및 확인 시 입력창 비우기(초기화)",
      "text": "입력창에 글을 작성하고 버튼을 눌렀을 때, 입력값을 Alert로 보여주고 확인을 누르면 입력창을 초기화(setValue(\"\"))하는 <b>handlePress</b> 함수를 작성하시오.<br><br>• <b>제목:</b> \"Input Data\"<br>• <b>내용:</b> value || \"(Empty)\"<br>• <b>버튼:</b> text: \"확인\", 클릭 시 setValue(\"\") 호출",
      "placeholder": "handlePress 함수를 작성하세요.",
      "rubric": "1. Alert.alert(\"Input Data\", value || \"(Empty)\", ...) 호출 정확성 (5점)\n2. 확인 버튼 클릭 시 setValue(\"\") 콜백 정확성 (5점)",
      "sampleAnswer": "const handlePress = () => {\n  Alert.alert(\n    \"Input Data\", value || \"(Empty)\",\n    [ {\n      text: \"확인\",\n      onPress: () => setValue(\"\"), // 확인 버튼 누르면 입력창 비우기\n    }, ] );\n};",
      "explanation": "교안 17페이지 원본 코드. 팝업 확인 버튼 콜백을 통해 TextInput 상태값을 빈 문자열로 리셋합니다."
    },
    {
      "id": 23,
      "type": "essay",
      "score": 10,
      "origin": "5주차 p.3~4: JSX 정의, 장단점 및 하나의 부모(One Parent) 규칙",
      "category": "5주차 컴포넌트",
      "title": "JSX 정의 및 하나의 부모(One Parent) 규칙",
      "text": "5주차 교안 3~4페이지에 근거하여 다음 두 물음에 답하시오.<br><br>1) <b>JSX(JavaScript XML)의 개념 정의</b>와 교안에 수록된 <b>장점 2가지</b>를 서술하시오.<br>2) JSX의 문법 규칙 중 <b>'하나의 부모(One Parent Element)' 규칙</b>이 무엇인지 설명하고, 아래 코드가 문법 에러가 발생하는 이유를 쓰시오.<br><br><pre class='code-block'>export default function App(){\n  return(\n    &lt;Text&gt;Open up App.js to start working on your app&lt;/Text&gt;\n    &lt;StatusBar style=\"auto\"/&gt;\n  );\n}</pre>",
      "placeholder": "JSX 정의, 장점 2가지 및 하나의 부모 규칙을 서술하세요.",
      "rubric": "1. JSX 정의 및 장점 2가지(가독성, 코드 단축, 구조 표현 용이 등) 명시 (5점)\n2. 하나의 부모 규칙(여러 JSX 요소를 단 하나의 루트 요소로 감싸야 함) 및 코드 오류 원인 서술 (5점)",
      "sampleAnswer": "1) JSX 정의: 객체 생성과 함수 호출을 위한 문법적 편의를 제공하기 위해 만들어진 확장 기능으로 리액트 프로젝트에서 사용된다.\n장점(2가지): 가독성이 좋음, 코드가 짧아짐 (또는 컴포넌트 구조 표현 용이, JavaScript와 함께 사용 가능).\n2) 하나의 부모 규칙: 여러 개의 JSX 요소를 반환할 때는 반드시 단 하나의 최상위 부모 요소(예: <View>)로 감싸야 한다는 규칙이다.\n제시된 코드는 <Text>와 <StatusBar> 두 형제 요소가 최상위에 나란히 존재하며 이를 감싸는 단일 부모 태그가 없기 때문에 문법 오류가 발생한다.",
      "explanation": "JSX의 기본 문법 규칙과 리액트의 트리 렌더링 메커니즘을 묻는 서술형 문항입니다."
    },
    {
      "id": 24,
      "type": "short",
      "score": 10,
      "origin": "5주차 p.5~6: JSX 내부 자바스크립트 변수 바인딩 {name}",
      "category": "5주차 컴포넌트",
      "title": "JSX 내 자바스크립트 변수 바인딩 문법 빈칸",
      "text": "JSX 내부에서 자바스크립트 변수(<code>const name = 'Beomjun';</code>)에 저장된 값을 텍스트로 바인딩하기 위한 빈칸 <b>( ㉠ )</b>을 작성하시오.<br><br><pre class='code-block'>export default function App() {\n  const name = 'Beomjun'; // 변수\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text style={styles.text}&gt;My name is <span class='blank-chip'>( ㉠ )</span>&lt;/Text&gt;\n      &lt;StatusBar style=\"auto\" /&gt;\n    &lt;/View&gt;\n  );\n}</pre>",
      "placeholder": "바인딩 표현식 입력 (예: {name})",
      "answers": [
        "{name}",
        "{ name }"
      ],
      "explanation": "<b>정답: {name}</b><br>JSX 내부에서 자바스크립트 변수나 표현식을 평가하여 렌더링하려면 중괄호 <code>{ }</code>로 감싸야 합니다. (5주차 p.5~6)"
    },
    {
      "id": 25,
      "type": "short",
      "score": 10,
      "origin": "5주차 p.7: if 조건문에 따른 message 문자열 결합 결과",
      "category": "5주차 컴포넌트",
      "title": "if-else 조건문 실행에 따른 최종 출력 텍스트",
      "text": "아래 코드가 실행되었을 때, <code>&lt;Text style={styles.text}&gt;{message}&lt;/Text&gt;</code>에 최종 출력되는 문자열을 정확히 적으시오. (공백 주의)<br><br><pre class='code-block'>const name = 'Beomjun';\nlet message = '';\nif (name === 'Beomjun') {\n  message = 'My name is' + name;\n} else {\n  message = \"I'm not Beomjun\";\n}</pre>",
      "placeholder": "최종 출력 문자열 입력",
      "answers": [
        "My name isBeomjun",
        "'My name isBeomjun'",
        "\"My name isBeomjun\""
      ],
      "explanation": "<b>정답: My name isBeomjun</b><br>교안 원본 코드에서 <code>'My name is' + name</code>과 같이 'is' 뒤에 공백이 없으므로 결합 결과는 정확히 <code>My name isBeomjun</code>이 됩니다. (5주차 p.7)"
    },
    {
      "id": 26,
      "type": "short",
      "score": 10,
      "origin": "5주차 p.8: 삼항 연산자를 이용한 조건부 렌더링",
      "category": "5주차 컴포넌트",
      "title": "삼항 연산자 조건부 렌더링 기호 빈칸",
      "text": "JSX 내부에서 삼항 연산자를 활용해 조건부 렌더링을 수행하고자 한다. 빈칸 <b>( ㉠ )</b>과 <b>( ㉡ )</b>에 들어갈 기호를 순서대로 쓰시오.<br><br><pre class='code-block'>&lt;Text style={styles.text}&gt;\n  {name === 'Beomjun' <span class='blank-chip'>( ㉠ )</span> \"My name is Beomjun\" <span class='blank-chip'>( ㉡ )</span> \"I'm not Beomjun\"}\n&lt;/Text&gt;</pre>",
      "placeholder": "순서대로 기호 입력 (예: ?, :)",
      "answers": [
        "?, :",
        "?,:",
        "? / :"
      ],
      "explanation": "<b>정답: ( ㉠ ) ?, ( ㉡ ) :</b><br>삼항 연산자의 기본 문법은 <code>조건식 ? 참일 때 실행 : 거짓일 때 실행</code>입니다. (5주차 p.8)"
    },
    {
      "id": 27,
      "type": "short",
      "score": 10,
      "origin": "5주차 p.9: 단축 평가 AND(&&) 및 OR(||) 연산자 결과",
      "category": "5주차 컴포넌트",
      "title": "단축 평가 논리 연산자에 따른 화면 출력 4줄",
      "text": "<code>name1 = 'Beomjun'</code>, <code>name2 = 'JongSoo'</code>일 때, 아래 4개 Text 컴포넌트가 화면에 각각 출력하는 결과를 순서대로 쓰시오.<br><br><pre class='code-block'>&lt;Text&gt;{name1 === 'Beomjun' &amp;&amp; 'My name is Beomjun'}&lt;/Text&gt;\n&lt;Text&gt;{name1 !== 'Beomjun' &amp;&amp; 'My name is not Beomjun'}&lt;/Text&gt;\n&lt;Text&gt;{name2 === 'JongSoo' || \"I'm not Beomjun's friend\"}&lt;/Text&gt;\n&lt;Text&gt;{name2 !== 'JongSoo' || \"I'm Beomjun's friend\"}&lt;/Text&gt;</pre>",
      "placeholder": "1번줄, 2번줄(미출력), 3번줄, 4번줄 결과",
      "answers": [
        "My name is Beomjun, (미출력), true, I'm Beomjun's friend",
        "My name is Beomjun, 미출력, true, I'm Beomjun's friend",
        "My name is Beomjun, false, true, I'm Beomjun's friend"
      ],
      "explanation": "<b>정답:</b><br>1번: My name is Beomjun (true && 우항)<br>2번: (미출력 - false로 평가되어 렌더링 안 됨)<br>3번: true (좌항이 true이므로 좌항 불리언 true 반환)<br>4번: I'm Beomjun's friend (false || 우항) (5주차 p.9)"
    },
    {
      "id": 28,
      "type": "short",
      "score": 10,
      "origin": "5주차 p.10: Image 컴포넌트 source={require('경로')}",
      "category": "5주차 컴포넌트",
      "title": "로컬 이미지 로딩 source 및 require 빈칸",
      "text": "프로젝트 로컬 이미지 파일(./kangnam.png)을 화면에 표시하기 위한 빈칸 <b>( ㉠ )</b>과 <b>( ㉡ )</b>을 채우시오.<br><br><pre class='code-block'>&lt;Image\n  <span class='blank-chip'>( ㉠ )</span>={<span class='blank-chip'>( ㉡ )</span>('./kangnam.png')} // 로컬 이미지\n  style={styles.image}\n/&gt;</pre>",
      "placeholder": "순서대로 입력 (예: source, require)",
      "answers": [
        "source, require",
        "source,require"
      ],
      "explanation": "<b>정답: ( ㉠ ) source, ( ㉡ ) require</b><br>로컬 정적 이미지는 Image 컴포넌트의 <code>source</code> prop에 <code>require('파일경로')</code>를 전달하여 불러옵니다. (5주차 p.10)"
    },
    {
      "id": 29,
      "type": "code",
      "score": 10,
      "origin": "5주차 p.11: Switch 토글 컴포넌트 및 trackColor/thumbColor",
      "category": "5주차 컴포넌트",
      "title": "Switch 다크 모드 토글 컴포넌트 속성 완성",
      "text": "다크 모드 토글 스위치 컴포넌트의 속성 설정을 완성하시오.<br><br>• <b>값 바인딩:</b> darkMode<br>• <b>변경 함수:</b> setDarkMode<br>• <b>트랙 배경 색상:</b> false일 때 '#767577', true일 때 '#81b0ff' 객체 지정<br>• <b>원형 썸(손잡이) 색상:</b> darkMode가 true이면 '#f5dd4b', false이면 '#f4f3f4' 삼항 조건 지정",
      "placeholder": "Switch의 props를 완성하여 작성하세요.",
      "rubric": "1. value 및 onValueChange 바인딩 정확성 (5점)\n2. trackColor 및 thumbColor 동적 색상 설정 정확성 (5점)",
      "sampleAnswer": "<Switch\n  value={darkMode}\n  onValueChange={setDarkMode}\n  trackColor={{ false: '#767577', true: '#81b0ff' }}\n  thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}\n/>",
      "explanation": "교안 11페이지 원본 코드. trackColor는 객체 형태로 불리언별 색상을 지정하며 thumbColor는 삼항식으로 동적 지정합니다."
    },
    {
      "id": 30,
      "type": "code",
      "score": 10,
      "origin": "5주차 p.12: FlatList의 3대 필수 속성(data, keyExtractor, renderItem)",
      "category": "5주차 컴포넌트",
      "title": "FlatList의 3대 필수 속성(Props) 구현",
      "text": "배열 데이터를 렌더링하는 FlatList의 3대 필수 속성을 완성하시오.<br><br>• <b>데이터 원본:</b> data 배열 전달<br>• <b>고유 키 추출:</b> 각 항목의 item.id 추출 콜백 지정<br>• <b>항목 렌더링:</b> 구조분해 ({ item })를 매개변수로 받아 &lt;Text style={styles.item}&gt;{item.id} : {item.name}&lt;/Text&gt; 렌더링",
      "placeholder": "FlatList 태그의 3대 속성을 작성하세요.",
      "rubric": "1. data 및 keyExtractor={(item) => item.id} 정확성 (5점)\n2. renderItem={({ item }) => (...)} 구조분해 할당 및 JSX 정확성 (5점)",
      "sampleAnswer": "<FlatList\n  data={data}\n  keyExtractor={(item) => item.id}\n  renderItem={({ item }) => (\n    <Text style={styles.item}>{item.id} : {item.name}</Text>\n  )}\n/>",
      "explanation": "FlatList는 1) data, 2) keyExtractor, 3) renderItem의 3대 필수 props로 구성됩니다. (5주차 p.12)"
    },
    {
      "id": 31,
      "type": "code",
      "score": 10,
      "origin": "5주차 p.13: SectionList의 4대 속성 (sections, renderSectionHeader 등)",
      "category": "5주차 컴포넌트",
      "title": "SectionList의 4대 속성 구현 (그룹별 리스트)",
      "text": "알파벳 그룹별 데이터를 보여주는 SectionList의 4대 속성을 완성하시오.<br><br>• <b>섹션 데이터:</b> DATA 배열 전달<br>• <b>고유 키 추출:</b> item + index 결합 콜백 지정<br>• <b>항목 렌더링:</b> { item } 매개변수를 받아 &lt;Text style={styles.item}&gt; ▣ {item}&lt;/Text&gt; 렌더링<br>• <b>섹션 헤더 렌더링:</b> ({ section: { title } }) 매개변수를 받아 &lt;Text style={styles.header}&gt;섹션: {title}&lt;/Text&gt; 렌더링",
      "placeholder": "SectionList의 4대 속성을 작성하세요.",
      "rubric": "1. sections 및 keyExtractor 정확성 (4점)\n2. renderItem 및 renderSectionHeader 구조분해와 렌더링 정확성 (6점)",
      "sampleAnswer": "<SectionList\n  sections={DATA}\n  keyExtractor={(item, index) => item + index}\n  renderItem={({ item }) => (\n    <Text style={styles.item}> ▣ {item}</Text>\n  )}\n  renderSectionHeader={({ section: { title } }) => (\n    <Text style={styles.header}>섹션: {title}</Text>\n  )}\n/>",
      "explanation": "SectionList는 FlatList와 달리 <code>sections</code>로 그룹 데이터를 받고, 섹션 헤더를 그리는 <code>renderSectionHeader</code>가 필수적으로 사용됩니다. (5주차 p.13)"
    },
    {
      "id": 32,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.4: BackHandler 하드웨어 뒤로가기 감지 및 exitApp()",
      "category": "6주차 컴포넌트 응용",
      "title": "BackHandler 하드웨어 버튼 감지 및 앱 종료 구현",
      "text": "안드로이드 기기에서 하드웨어 뒤로가기 버튼('hardwareBackPress')을 눌렀을 때 확인 팝업을 띄우고, '예'를 누르면 앱을 종료하는 BackHandler 예제이다. 빈칸 <b>( ㉠ )</b>과 <b>( ㉡ )</b>을 완성하시오.<br><br>• ( ㉠ ): 'YES: 예' 버튼 클릭 시 앱 종료 API 호출<br>• ( ㉡ ): useEffect 클린업 함수에서 이벤트 리스너 제거<br><br><pre class='code-block'>const backAction = () => {\n  Alert.alert('잠깐!', '정말로 뒤로 가기를 원하십니까?', [\n    { text: 'Cancel: 아니오', onPress: () => null, style: 'cancel' },\n    { text: 'YES: 예', onPress: () => <span class='blank-chip'>( ㉠ )</span> },\n  ]);\n  return true;\n};\nconst backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);\nreturn () => <span class='blank-chip'>( ㉡ )</span>;</pre>",
      "placeholder": "( ㉠ )과 ( ㉡ ) 코드를 순서대로 작성하세요.",
      "rubric": "1. BackHandler.exitApp() 명시 (5점)\n2. backHandler.remove() 명시 (5점)",
      "sampleAnswer": "( ㉠ ): BackHandler.exitApp()\n( ㉡ ): backHandler.remove()",
      "explanation": "<b>정답: ( ㉠ ) BackHandler.exitApp(), ( ㉡ ) backHandler.remove()</b><br>앱 종료 메서드는 BackHandler.exitApp()이며, addEventListener 등록 객체의 remove() 메서드로 클린업을 수행합니다. (6주차 p.4)"
    },
    {
      "id": 33,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.5~6: DrawerLayoutAndroid 드로어 열기/닫기 제어",
      "category": "6주차 컴포넌트 응용",
      "title": "DrawerLayoutAndroid 드로어 열기 및 닫기 메서드",
      "text": "DrawerLayoutAndroid의 서랍 메뉴를 열고 닫는 ref 메서드 호출 구문을 완성하시오. (<code>const drawer = useRef(null);</code>)<br><br>• <b>닫기 버튼:</b> drawer ref를 통해 드로어 메뉴를 닫는 인스턴스 메서드(옵셔널 체이닝 권장) 호출<br>• <b>열기 버튼:</b> drawer ref를 통해 드로어 메뉴를 여는 인스턴스 메서드(옵셔널 체이닝 권장) 호출",
      "placeholder": "서랍 닫기와 열기 메서드 호출 코드를 작성하세요.",
      "rubric": "1. drawer.current?.closeDrawer() 정확성 (5점)\n2. drawer.current?.openDrawer() 정확성 (5점)",
      "sampleAnswer": "// 서랍 닫기\ndrawer.current?.closeDrawer();\n\n// 서랍 열기\ndrawer.current?.openDrawer();",
      "explanation": "교안 5~6페이지 원본 코드. useRef 참조 변수의 .current를 통해 컴포넌트 인스턴스 메서드 openDrawer() / closeDrawer()를 호출합니다."
    },
    {
      "id": 34,
      "type": "short",
      "score": 10,
      "origin": "6주차 p.7: ToastAndroid.showWithGravityAndOffset 속성",
      "category": "6주차 컴포넌트 응용",
      "title": "ToastAndroid 위치 및 오프셋 지정 토스트 빈칸",
      "text": "안드로이드 전용 토스트 메시지를 화면 중앙에 x좌표 25px, y좌표 50px 오프셋으로 길게(LONG) 출력하고자 한다. 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>을 채우시오.<br><br><pre class='code-block'>ToastAndroid.<span class='blank-chip'>( ㉠ )</span>(\n  'TOGGLE TOAST WITH GRAVITY & OFFSET 메세지 !',\n  ToastAndroid.<span class='blank-chip'>( ㉡ )</span>, // 지속시간: SHORT(짧게), LONG(길게)\n  ToastAndroid.<span class='blank-chip'>( ㉢ )</span>, // 기준 위치: TOP | CENTER | BOTTOM\n  25, 50\n);</pre>",
      "placeholder": "순서대로 입력 (예: showWithGravityAndOffset, LONG, CENTER)",
      "answers": [
        "showWithGravityAndOffset, LONG, CENTER",
        "showWithGravityAndOffset,LONG,CENTER"
      ],
      "explanation": "<b>정답: ( ㉠ ) showWithGravityAndOffset, ( ㉡ ) LONG, ( ㉢ ) CENTER</b><br>위치와 오프셋을 함께 지정하는 토스트 메서드는 showWithGravityAndOffset입니다. (6주차 p.7)"
    },
    {
      "id": 35,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.9~10: Animated.timing 페이드인/페이드아웃 애니메이션",
      "category": "6주차 컴포넌트 응용",
      "title": "Animated.timing 페이드인 및 페이드아웃 구현",
      "text": "Animated API를 이용해 5초 동안 1로 서서히 나타나는 <b>fadeIn</b> 함수와 3초 동안 0으로 사라지는 <b>fadeOut</b> 함수를 작성하시오.<br><br>• <b>fadeIn:</b> 목표 투명도 1, 애니메이션 지속시간 5초(5000ms), 네이티브 드라이버 활성화<br>• <b>fadeOut:</b> 목표 투명도 0, 애니메이션 지속시간 3초(3000ms), 네이티브 드라이버 활성화",
      "placeholder": "fadeIn 및 fadeOut 함수를 작성하세요.",
      "rubric": "1. Animated.timing(fadeAnim, { toValue: 1, duration: 5000, useNativeDriver: true }).start() 정확성 (5점)\n2. Animated.timing(fadeAnim, { toValue: 0, duration: 3000, useNativeDriver: true }).start() 정확성 (5점)",
      "sampleAnswer": "const fadeIn = () => {\n  Animated.timing(fadeAnim, {\n    toValue: 1,\n    duration: 5000,\n    useNativeDriver: true,\n  }).start();\n};\n\nconst fadeOut = () => {\n  Animated.timing(fadeAnim, {\n    toValue: 0,\n    duration: 3000,\n    useNativeDriver: true,\n  }).start();\n};",
      "explanation": "교안 9~10페이지 원본 코드. Animated.timing(애니메이션변수, 설정객체).start() 구문으로 애니메이션을 구동합니다."
    },
    {
      "id": 36,
      "type": "short",
      "score": 10,
      "origin": "6주차 p.11~12: Dimensions API window vs screen 및 이벤트 리스너",
      "category": "6주차 컴포넌트 응용",
      "title": "Dimensions API 이벤트 리스너 등록 및 클린업 빈칸",
      "text": "Dimensions API에서 화면 크기 변경을 감지하기 위한 리스너 이벤트명 <b>( ㉠ )</b>과 언마운트 시 리스너를 제거하는 메서드 <b>( ㉡ )</b>을 쓰시오.<br><br><pre class='code-block'>useEffect(() => {\n  const subscription = Dimensions.addEventListener(\n    <span class='blank-chip'>( ㉠ )</span>,\n    ({window, screen}) => { setDimensions({window, screen}); }\n  );\n  return () => <span class='blank-chip'>( ㉡ )</span>;\n});</pre>",
      "placeholder": "순서대로 입력 (예: 'change', subscription?.remove())",
      "answers": [
        "'change', subscription?.remove()",
        "change, subscription?.remove()",
        "'change', subscription.remove()",
        "change, subscription.remove()"
      ],
      "explanation": "<b>정답: ( ㉠ ) 'change', ( ㉡ ) subscription?.remove()</b><br>Dimensions의 화면 크기 변경 이벤트명은 'change'이며, 반환된 구독 객체의 remove() 메서드로 해제합니다. (6주차 p.11)"
    },
    {
      "id": 37,
      "type": "essay",
      "score": 10,
      "origin": "6주차 p.13~14: TouchableWithoutFeedback & Keyboard.dismiss 동작 원리",
      "category": "6주차 컴포넌트 응용",
      "title": "TouchableWithoutFeedback과 Keyboard.dismiss의 역할",
      "text": "아래 코드에서 <code>&lt;TouchableWithoutFeedback onPress={Keyboard.dismiss}&gt;</code> 컴포넌트가 사용된 <b>목적과 동작 원리</b>를 서술하시오.<br><br><pre class='code-block'>&lt;TouchableWithoutFeedback onPress={Keyboard.dismiss}&gt;\n  &lt;View style={styles.inner}&gt;\n    &lt;TextInput placeholder=\"Username\" /&gt;\n    &lt;Button title=\"Submit\" onPress={handlePress} /&gt;\n  &lt;/View&gt;\n&lt;/TouchableWithoutFeedback&gt;</pre>",
      "placeholder": "키보드 닫기 동작 원리를 서술하세요.",
      "rubric": "1. 가상 키보드가 활성화되었을 때 입력창 바깥 여백 화면을 터치하면 키보드를 닫기 위함임을 명시 (5점)\n2. Keyboard.dismiss를 호출해 키보드를 내리고 포커스를 해제함을 명시 (5점)",
      "sampleAnswer": "모바일 화면에서 TextInput에 포커스가 잡혀 소프트웨어 가상 키보드가 올라왔을 때, 사용자가 입력창 바깥의 빈 화면 영역을 터치하면 Keyboard.dismiss 함수가 호출되어 올라와 있던 가상 키보드가 즉시 내려가고(닫히고) 입력창 포커스가 해제되도록 구현하기 위해 사용한다.",
      "explanation": "모바일 앱 폼 입력 UX의 필수 패턴인 여백 터치 시 키보드 닫기 메커니즘을 묻는 서술형입니다."
    },
    {
      "id": 38,
      "type": "short",
      "score": 10,
      "origin": "6주차 p.15: Linking API를 통한 외부 웹 브라우저 열기",
      "category": "6주차 컴포넌트 응용",
      "title": "Linking API 및 openURL 메서드 빈칸",
      "text": "버튼 클릭 시 외부 웹 브라우저를 열어 지정된 URL로 이동시키는 API 빈칸 <b>( ㉠ )</b>과 <b>( ㉡ )</b>을 채우시오.<br><br><pre class='code-block'>import { StyleSheet, Text, View, Button, <span class='blank-chip'>( ㉠ )</span> } from 'react-native';\n\nconst handlePress = () => {\n  <span class='blank-chip'>( ㉠ )</span>.<span class='blank-chip'>( ㉡ )</span>('https://blog.naver.com/jongsoo67');\n};</pre>",
      "placeholder": "순서대로 입력 (예: Linking, openURL)",
      "answers": [
        "Linking, openURL",
        "Linking,openURL"
      ],
      "explanation": "<b>정답: ( ㉠ ) Linking, ( ㉡ ) openURL</b><br>외부 URL을 디바이스 기본 브라우저로 띄우는 API는 Linking이며, 메서드는 openURL('URL문자열')입니다. (6주차 p.15)"
    },
    {
      "id": 39,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.16~17: Modal 컴포넌트의 4대 속성 (animationType, visible 등)",
      "category": "6주차 컴포넌트 응용",
      "title": "Modal 컴포넌트의 주요 속성 설정 완성",
      "text": "Modal 컴포넌트의 4가지 주요 속성 설정을 완성하시오.<br><br>• <b>화면 전환 애니메이션:</b> 아래에서 위로 나타나는 \"slide\" 방식 지정<br>• <b>배경 투명도:</b> 투명 배경 활성화(true)<br>• <b>모달 표시 여부:</b> modalVisible 상태 변수 바인딩<br>• <b>닫기 요청 콜백:</b> Alert.alert('Modal has been closed.') 표시 및 modalVisible 상태를 false로 변경",
      "placeholder": "Modal 태그의 속성들을 작성하세요.",
      "rubric": "1. animationType=\"slide\", transparent={true}, visible={modalVisible} 정확성 (5점)\n2. onRequestClose 콜백 정확성 (5점)",
      "sampleAnswer": "<Modal\n  animationType=\"slide\"\n  transparent={true}\n  visible={modalVisible}\n  onRequestClose={() => {\n    Alert.alert('Modal has been closed.');\n    setModalVisible(false);\n  }}\n>",
      "explanation": "교안 16페이지 Modal 원본 코드. onRequestClose는 안드로이드 하드웨어 뒤로가기 버튼을 누를 때 호출되는 필수 콜백입니다."
    },
    {
      "id": 40,
      "type": "short",
      "score": 10,
      "origin": "6주차 p.18~19: PixelRatio.getPixelSizeForLayoutSize(size) 계산",
      "category": "6주차 컴포넌트 응용",
      "title": "PixelRatio 픽셀 배율에 따른 실제 이미지 픽셀 크기 계산",
      "text": "레이아웃 크기 <code>const size = 50;</code>일 때, 단말기의 픽셀 비율(<code>PixelRatio.get()</code>)이 <b>3</b>이라면 <code>PixelRatio.getPixelSizeForLayoutSize(size)</code>가 최종 반환하는 <b>픽셀 크기 값(정수)</b>을 쓰시오.",
      "placeholder": "반환값 숫자 입력 (예: 150)",
      "answers": [
        "150",
        "150 px",
        "150px"
      ],
      "explanation": "<b>정답: 150</b><br>계산 수식: layout size(50) × pixel ratio(3) = 150. 단말기의 화면 밀도에 맞추어 실제 필요한 물리적 비트맵 이미지 픽셀 크기 150px를 반환합니다. (6주차 p.18~19)"
    },
    {
      "id": 41,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.20~21: RefreshControl 스크롤 당겨서 새로고침 구현",
      "category": "6주차 컴포넌트 응용",
      "title": "RefreshControl 새로고침 콜백 및 바인딩 구현",
      "text": "RefreshControl에서 중복 새로고침을 방지하고 2초 후 종료하는 <b>onRefresh</b> 함수와 ScrollView의 <b>refreshControl</b> 바인딩을 완성하시오.<br><br>• <b>중복 실행 방지:</b> timerRef 참조변수가 이미 존재(null이 아님)할 경우 함수 즉시 종료<br>• <b>새로고침 시작:</b> refreshing 상태를 true로 변경<br>• <b>2초 후 완료:</b> setTimeout 2초(2000ms) 타이머를 통해 refreshing 상태를 false로 복구하고 timerRef를 null로 초기화",
      "placeholder": "onRefresh 함수 코드를 작성하세요.",
      "rubric": "1. 중복 방지 가드 if (timerRef.current !== null) return 정확성 (3점)\n2. setRefreshing(true) 및 setTimeout 2000ms 타이머 정확성 (4점)\n3. refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} 바인딩 (3점)",
      "sampleAnswer": "const onRefresh = useCallback(() => {\n  if (timerRef.current !== null) return;\n  setRefreshing(true);\n  timerRef.current = setTimeout(() => {\n    setRefreshing(false);\n    timerRef.current = null;\n  }, 2000);\n}, []);",
      "explanation": "교안 20~21페이지 원본 코드. useCallback과 useRef를 결합하여 중복 실행을 방지하고 메모리 누수를 막는 타이머 패턴입니다."
    },
    {
      "id": 42,
      "type": "essay",
      "score": 10,
      "origin": "7주차 p.3: React Hook 개념, 4대 Hook 역할 및 3대 사용 규칙",
      "category": "7주차 Hook",
      "title": "Hook의 정의, 4대 Hook의 역할 및 3대 필수 규칙",
      "text": "7주차 교안 3페이지의 Hook 설명에 근거하여 다음 3가지 물음에 답하시오.<br><br>1) <b>Hook의 정의</b>를 서술하시오.<br>2) 교안에 제시된 <b>대표적인 4대 Hook(useState, useRef, useEffect, useMemo)</b>의 기능을 각각 한 줄로 설명하시오.<br>3) Hook 사용 시 준수해야 하는 <b>3대 필수 규칙</b>을 쓰시오.",
      "placeholder": "1) 정의, 2) 4대 Hook 역할, 3) 3대 필수 규칙을 서술하세요.",
      "rubric": "1. Hook 정의(함수형 컴포넌트에서 상태/생명주기 사용) 명시 (3점)\n2. useState(상태관리), useRef(참조관리), useEffect(생명주기제어), useMemo(재계산방지 최적화) (4점)\n3. 3대 규칙(함수컴포넌트/커스텀훅에서만, 최상위에서만, use로 시작) (3점)",
      "sampleAnswer": "1) Hook 정의: React의 함수형 컴포넌트에서 상태(state)나 생명주기(lifecycle) 기능을 사용할 수 있게 해주는 특별한 함수이다.\n2) 4대 Hook 역할:\n• useState: 상태(state) 관리 - 값 저장 및 업데이트\n• useRef: 참조 관리 - DOM 요소나 변수 값을 직접 제어\n• useEffect: 생명주기 제어 - 컴포넌트 실행, 변경, 종료 때 코드 실행\n• useMemo: 불필요한 재계산 방지(성능 최적화)\n3) Hook의 3대 필수 규칙:\n• 함수 컴포넌트와 커스텀 Hook에서만 사용 가능\n• 함수 최상위에서만 사용 가능 (반복문, 조건문 내부 호출 불가)\n• Hook은 항상 use로 시작한다는 규칙",
      "explanation": "교안 3페이지의 핵심 이론을 전수 묻는 서술형 최고 빈출 문제입니다."
    },
    {
      "id": 43,
      "type": "short",
      "score": 10,
      "origin": "7주차 p.4: useState 기본 문법 선언 형태",
      "category": "7주차 Hook",
      "title": "useState 기본 문법 시그니처 식별자 빈칸",
      "text": "상태값을 관리하는 useState의 기본 문법 선언 형태이다. 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>에 들어갈 식별자 명칭을 쓰시오.<br><br><pre class='code-block'>const [ <span class='blank-chip'>( ㉠ )</span>, <span class='blank-chip'>( ㉡ )</span> ] = useState( <span class='blank-chip'>( ㉢ )</span> );\n// ( ㉠ ): 현재 상태 값(읽는 용도)\n// ( ㉡ ): 상태를 변경하는 함수\n// ( ㉢ ): 초기 값</pre>",
      "placeholder": "순서대로 입력 (예: state, setState, initialState)",
      "answers": [
        "state, setState, initialState",
        "state,setState,initialState"
      ],
      "explanation": "<b>정답: ( ㉠ ) state, ( ㉡ ) setState, ( ㉢ ) initialState</b><br>교안 4페이지에 도식화된 useState의 기본 시그니처 원본 명칭입니다."
    },
    {
      "id": 44,
      "type": "code",
      "score": 10,
      "origin": "7주차 p.5: useState 카운터 컴포넌트 (+1 증가, -1 감소)",
      "category": "7주차 Hook",
      "title": "useState 카운터 컴포넌트 상태 선언 및 증감 핸들러",
      "text": "카운터 숫자를 1씩 증가시키거나 감소시키는 컴포넌트의 useState 선언 및 두 버튼의 onPress 핸들러를 완성하시오.<br><br>• <b>상태 선언:</b> count, setCount, 초기값 0<br>• <b>+1 증가 버튼:</b> count + 1로 상태 변경<br>• <b>-1 감소 버튼:</b> count - 1로 상태 변경",
      "placeholder": "useState 선언과 두 버튼의 onPress 코드를 작성하세요.",
      "rubric": "1. const [count, setCount] = useState(0); 정확성 (4점)\n2. onPress={() => setCount(count + 1)} 정확성 (3점)\n3. onPress={() => setCount(count - 1)} 정확성 (3점)",
      "sampleAnswer": "// 1. 상태 선언\nconst [count, setCount] = useState(0);\n\n// 2. +1 증가\nonPress={() => setCount(count + 1)}\n\n// 3. -1 감소\nonPress={() => setCount(count - 1)}",
      "explanation": "교안 5페이지 원본 예제 1. useState 세터 함수를 이벤트에 바인딩하여 UI를 갱신합니다."
    },
    {
      "id": 45,
      "type": "code",
      "score": 10,
      "origin": "7주차 p.6~7: useState A × B 곱셈 계산기 (parseFloat, isNaN)",
      "category": "7주차 Hook",
      "title": "A × B 계산기 multiply 함수 로직 완성",
      "text": "두 입력값 a와 b를 곱하여 결과를 저장하는 <b>multiply</b> 함수 로직을 완성하시오.<br><br>• <b>숫자 파싱:</b> 입력받은 문자열 a와 b를 실수형 숫자(Float)로 파싱하여 각각 변수에 저장<br>• <b>유효성 검사:</b> 두 값 중 하나라도 숫자가 아니면(NaN 검사) 결과 상태에 '숫자를 입력하세요!' 문자열 저장<br>• <b>곱셈 계산:</b> 두 값 모두 정상적인 유효 숫자이면 두 수의 곱셈 결과를 상태에 저장",
      "placeholder": "multiply 함수 로직을 작성하세요.",
      "rubric": "1. parseFloat 변환 및 isNaN 유효성 검사 (5점)\n2. setResult('숫자를 입력하세요!') 및 곱셈 결과 저장 (5점)",
      "sampleAnswer": "const multiply = () => {\n  const numA = parseFloat(a);\n  const numB = parseFloat(b);\n  if (isNaN(numA) || isNaN(numB)) {\n    setResult('숫자를 입력하세요!');\n  } else {\n    setResult(numA * numB);\n  }\n};",
      "explanation": "교안 6페이지 useState 예제 2 원본 코드입니다."
    },
    {
      "id": 46,
      "type": "short",
      "score": 10,
      "origin": "7주차 p.8~9: useRef vs let countVar vs 리렌더링 차이",
      "category": "7주차 Hook",
      "title": "useRef와 일반 변수(let)의 리렌더링 후 값 유지 비교",
      "text": "7주차 교안 p.9 예제이다. 사용자가 <b>[클릭] 버튼을 2번</b> 누른 후, <b>[리랜더] 버튼을 1번</b> 눌렀다.<br>화면 &lt;Text&gt;에 최종 표시되는 <b>CountRef</b> 값과 <b>CountVar</b> 값을 순서대로 쓰시오.<br><br><pre class='code-block'>const [render, setRender] = useState(false);\nconst countRef = useRef(0);\nlet countVar = 5;\n\nconst handleClick = () => {\n  countRef.current += 1;\n  countVar += 1;\n};\nconst doRender = () => { setRender(!render); };</pre>",
      "placeholder": "CountRef와 CountVar 값을 순서대로 입력 (예: 2, 5)",
      "answers": [
        "2, 5",
        "2,5",
        "CountRef: 2, CountVar: 5"
      ],
      "explanation": "<b>정답: 2, 5</b><br>• countRef.current: useRef는 리렌더링되어도 값을 유지하므로 2가 됩니다.<br>• countVar: 컴포넌트가 리렌더링될 때 함수가 처음부터 다시 실행되어 let countVar = 5로 재초기화되므로 5가 됩니다. (7주차 p.9)"
    },
    {
      "id": 47,
      "type": "short",
      "score": 10,
      "origin": "7주차 p.10: useRef를 활용한 TextInput 포커스 이동",
      "category": "7주차 Hook",
      "title": "useRef를 이용한 TextInput 직접 포커스 이동 빈칸",
      "text": "버튼 클릭 시 TextInput으로 포커스를 직접 이동시키는 ref 연결 코드이다. 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>을 채우시오.<br><br><pre class='code-block'>const inputRef = <span class='blank-chip'>( ㉠ )</span>(null);\nconst focusInput = () => {\n  inputRef.<span class='blank-chip'>( ㉡ )</span>.focus();\n};\nreturn (\n  &lt;View style={styles.container}&gt;\n    &lt;TextInput style={styles.text} <span class='blank-chip'>( ㉢ )</span>={inputRef} placeholder=\"이름을 입력하세요\" /&gt;\n    &lt;Button title=\"포커스 이동\" onPress={focusInput} /&gt;\n  &lt;/View&gt;\n);</pre>",
      "placeholder": "순서대로 입력 (예: useRef, current, ref)",
      "answers": [
        "useRef, current, ref",
        "useRef,current,ref"
      ],
      "explanation": "<b>정답: ( ㉠ ) useRef, ( ㉡ ) current, ( ㉢ ) ref</b><br>컴포넌트 DOM에 접근하기 위해 ref prop에 useRef 객체를 연결하고, inputRef.current.focus()를 호출합니다. (7주차 p.10)"
    },
    {
      "id": 48,
      "type": "code",
      "score": 10,
      "origin": "7주차 p.11~12: useRef 계산 후 옵셔널 체이닝 포커스 이동",
      "category": "7주차 Hook",
      "title": "계산 후 옵셔널 체이닝(inputRef.current?.focus()) 포커스 이동",
      "text": "곱셈 계산을 수행(multiply())한 후 옵셔널 체이닝(?.)을 활용하여 안전하게 A 입력창으로 포커스를 이동시키는 <b>focusInput</b>과 <b>handlePress</b> 함수를 작성하시오.<br><br>• <b>focusInput:</b> inputRef를 통해 첫 번째 TextInput으로 포커스를 이동시키는 함수 작성 (접근 시 옵셔널 체이닝 ?. 사용 권장)<br>• <b>handlePress:</b> 곱셈 계산 함수(multiply)를 먼저 실행한 뒤, focusInput 함수를 호출하여 포커스 복귀",
      "placeholder": "focusInput과 handlePress 함수를 작성하세요.",
      "rubric": "1. inputRef.current?.focus() 옵셔널 체이닝 정확성 (5점)\n2. handlePress에서 multiply()와 focusInput() 순차 호출 (5점)",
      "sampleAnswer": "const focusInput = () => {\n  inputRef.current?.focus();\n};\n\nconst handlePress = () => {\n  multiply();   // 계산\n  focusInput();  // A 입력창으로 포커스 이동 (선택)\n};",
      "explanation": "교안 11~12페이지 예제 3 원본 코드. 계산 완료 후 즉시 첫 번째 입력창으로 재입력 포커스를 돌려줍니다."
    },
    {
      "id": 49,
      "type": "essay",
      "score": 10,
      "origin": "7주차 p.13: useEffect 의존성 배열(dependency)의 역할 및 동작",
      "category": "7주차 Hook",
      "title": "useEffect 의존성 배열의 역할과 빈 배열 vs 생략 차이",
      "text": "7주차 교안 13페이지의 useEffect 선언 형태를 바탕으로 다음 물음에 답하시오.<br><br><pre class='code-block'>useEffect( () => {\n  console.log(\"앱이 실행되었습니다 !(처음 한 번만)\");\n}, [ dependency ] );</pre>1) 두 번째 매개변수인 <b>의존성 배열([ dependency ])의 역할</b>을 서술하시오.<br>2) 의존성 배열에 <b>빈 배열 []을 전달했을 때</b>와, <b>의존성 배열 자체를 생략했을 때</b>의 동작 차이점을 서술하시오.",
      "placeholder": "의존성 배열의 역할과 빈 배열 vs 생략 시 차이점을 서술하세요.",
      "rubric": "1. 의존성 배열 내 지정된 값이 변경되었을 때만 콜백을 재실행하는 감시 목록임을 명시 (5점)\n2. 빈 배열 [](마운트 시 최초 1회만 실행) vs 생략(리렌더링될 때마다 매번 실행) 차이 명시 (5점)",
      "sampleAnswer": "1) 의존성 배열의 역할: 배열 내에 지정된 상태나 변수의 값이 변경되었을 때만 콜백 함수를 다시 실행하도록 감시하는 기준 목록이다.\n2) 빈 배열 vs 생략 시 차이점:\n• 빈 배열 [] 전달 시: 컴포넌트가 화면에 최초로 마운트(렌더링)될 때 딱 한 번만 실행되고 이후 리렌더링 시에는 재실행되지 않는다.\n• 의존성 배열 생략 시: 컴포넌트가 처음 나타날 때뿐만 아니라, 컴포넌트가 리렌더링될 때마다 매번 콜백 함수가 실행된다.",
      "explanation": "교안 13페이지 기본 개념. useEffect의 라이프사이클 트리거 시점을 묻는 핵심 이론입니다."
    },
    {
      "id": 50,
      "type": "short",
      "score": 10,
      "origin": "7주차 p.14: useEffect 빈 배열 [] 마운트 시 1회 실행",
      "category": "7주차 Hook",
      "title": "빈 의존성 배열 useEffect의 실행 시점과 출력 횟수",
      "text": "아래 코드가 렌더링될 때, 콘솔에 출력되는 메시지와 <b>출력 횟수</b>를 쓰시오.<br><br><pre class='code-block'>useEffect(() => {\n  console.log(\"앱이 실행되었습니다! (처음 한 번만)\");\n}, []);</pre>",
      "placeholder": "출력 횟수 숫자 입력 (예: 1회)",
      "answers": [
        "1",
        "1회",
        "1번"
      ],
      "explanation": "<b>정답: 1회</b><br>의존성 배열이 빈 배열 <code>[]</code>이므로 컴포넌트가 최초로 화면에 마운트될 때 단 1번만 실행됩니다. (7주차 p.14)"
    },
    {
      "id": 51,
      "type": "short",
      "score": 10,
      "origin": "7주차 p.15: useEffect [count] 상태 변경 감지",
      "category": "7주차 Hook",
      "title": "[count] 의존성 useEffect 버튼 3회 클릭 시 총 로그 출력 횟수",
      "text": "최초 마운트 후 사용자가 \"+1 증가\" 버튼을 <b>3번 연속 클릭</b>했을 때, 컴포넌트 마운트 시점부터 버튼 3회 클릭 완료 시점까지 콘솔에 찍히는 <b>총 로그 출력 횟수</b>를 적으시오.<br><br><pre class='code-block'>const [count, setCount] = useState(0);\nuseEffect(() => {\n  console.log(\"count 값이 바뀌었습니다:\", count);\n}, [count]);</pre>",
      "placeholder": "총 출력 횟수 숫자 입력 (예: 4회)",
      "answers": [
        "4",
        "4회",
        "4번",
        "총 4회"
      ],
      "explanation": "<b>정답: 총 4회</b><br>최초 마운트 시 count=0으로 1회 출력되고, 이후 버튼을 누를 때마다 count가 1, 2, 3으로 바뀌며 3회 추가 실행되어 총 4번 출력됩니다. (7주차 p.15)"
    },
    {
      "id": 52,
      "type": "essay",
      "score": 10,
      "origin": "7주차 p.16: useMemo의 정의, 목적 및 메모이제이션 원리",
      "category": "7주차 Hook",
      "title": "useMemo의 사용 목적과 의존성 미변경 시 동작 원리",
      "text": "7주차 교안 16페이지의 useMemo 선언 형태를 바탕으로 다음 물음에 답하시오.<br><br><pre class='code-block'>const memoizedValue = useMemo( () => {\n  return 계산식; // 반환값을 기억함\n}, [ dependency ] );</pre>1) <b>useMemo의 주요 사용 목적</b>을 교안에 명시된 핵심 어휘를 포함하여 서술하시오.<br>2) useMemo에서 <b>의존성 배열의 값이 변경되지 않았을 때</b> 어떻게 동작하는지 설명하시오.",
      "placeholder": "useMemo의 사용 목적과 캐싱 동작 원리를 서술하세요.",
      "rubric": "1. '불필요한 재계산 방지' 및 '성능 최적화' 어휘 명시 (5점)\n2. 의존성 미변경 시 내부 계산을 다시 실행하지 않고 기존에 기억(메모이제이션)해 둔 결과값을 그대로 반환함을 명시 (5점)",
      "sampleAnswer": "1) 사용 목적: 불필요한 재계산을 방지하여 컴포넌트의 성능을 최적화하기 위해 사용한다.\n2) 동작 원리: 의존성 배열에 전달된 값이 바뀌지 않은 상태에서 컴포넌트가 리렌더링될 경우, 내부 계산식을 다시 실행하지 않고 기존에 메모리에 기억(캐싱)해 둔 반환값(memoizedValue)을 그대로 재사용한다.",
      "explanation": "교안 16페이지에 명시된 useMemo의 성능 최적화 및 캐싱 원리를 묻는 문항입니다."
    },
    {
      "id": 53,
      "type": "essay",
      "score": 10,
      "origin": "7주차 p.17~18: useMemo [count] 의존성 시 다른 상태(text) 변경 시 재계산 여부",
      "category": "7주차 Hook",
      "title": "useMemo에서 count vs text 변경 시 재계산 및 콘솔 출력 결과 비교",
      "text": "아래 컴포넌트에서 최초 렌더링 완료 후 사용자가 순서대로 조작하였다.<br><br>1) <b>\"텍스트 변경\" 버튼 1회 클릭 시:</b> 콘솔에 \"double 계산 실행!\"이 출력되는지 여부와 이유를 쓰고 화면의 Double 값을 쓰시오.<br>2) <b>\"카운트 +1\" 버튼 1회 클릭 시:</b> 콘솔에 \"double 계산 실행!\"이 출력되는지 여부와 이유를 쓰고 화면의 Double 값을 쓰시오.<br><br><pre class='code-block'>const [count, setCount] = useState(0);\nconst [text, setText] = useState(\"\");\n\nconst double = useMemo(() => {\n  console.log(\"double 계산 실행!\");\n  return count * 2;\n}, [count]);</pre>",
      "placeholder": "1)과 2)의 콘솔 출력 여부, 이유, Double 값을 서술하세요.",
      "rubric": "1. 텍스트 변경 클릭 시: 콘솔 미출력, count가 변하지 않았으므로 재계산 안 됨, Double=0 (5점)\n2. 카운트+1 클릭 시: 콘솔 출력됨, count가 0에서 1로 변하여 재계산 실행, Double=2 (5점)",
      "sampleAnswer": "1) \"텍스트 변경\" 클릭 시:\n• 콘솔 출력 여부: 출력되지 않음 (미실행)\n• 이유: text 상태가 바뀌어 화면이 리렌더링되었으나 double의 의존성인 count는 바뀌지 않았으므로 useMemo 연산을 건너뛰고 기존 값 0을 반환함.\n• Double 값: 0\n\n2) \"카운트 +1\" 클릭 시:\n• 콘솔 출력 여부: \"double 계산 실행!\" 출력됨\n• 이유: count 상태가 0에서 1로 변경되었으므로 useMemo가 의존성 변경을 감지하고 계산 함수를 재실행하여 1 * 2 = 2를 반환함.\n• Double 값: 2",
      "explanation": "useMemo의 핵심 존재 이유인 '의존성이 변경되지 않은 리렌더링에서의 계산 스킵' 메커니즘을 완벽히 이해하고 있는지 묻는 킬러 문항입니다. (7주차 p.17~18)"
    }
  ]
};
