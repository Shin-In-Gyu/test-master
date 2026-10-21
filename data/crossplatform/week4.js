window.CROSSPLATFORM_WEEKS = window.CROSSPLATFORM_WEEKS || {};
window.CROSSPLATFORM_WEEKS.week4 = {
  "id": "cp_week4",
  "name": "[전수 기출] 제2단원: 4주차 컴포넌트 기초 지필고사 (12문항 / 120점)",
  "tag": "4주차 전수 코드 100%",
  "category": "4주차 컴포넌트 기초",
  "questions": [
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
      "text": "상단 Header, 중앙 Contents(좌/우 2열 분할 후 각각 상/하 2행 4분할), 하단 Footer 구조의 4분할 레이아웃 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치의 contentsLeft 내부와 <b>[빈칸 (B)]</b> 위치의 contentsRight 내부 중첩 JSX를 작성하시오.<br><br><pre class='code-block'>import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;View style={styles.header}&gt;&lt;Text style={styles.text}&gt;Header&lt;/Text&gt;&lt;/View&gt;\n      &lt;View style={styles.contents}&gt;\n        &lt;View style={styles.contentsLeft}&gt;\n// ==========================================\n// [빈칸 (A)] contentsLeftTop과 contentsLeftBottom 배치\n// ==========================================\n<span class='todo-chip'>          /* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n        &lt;/View&gt;\n        &lt;View style={styles.contentsRight}&gt;\n// ==========================================\n// [빈칸 (B)] contentsRightTop과 contentsRightBottom 배치\n// ==========================================\n<span class='todo-chip'>          /* [빈칸 (B)] 여기에 코드를 작성하시오 */</span>\n        &lt;/View&gt;\n      &lt;/View&gt;\n      &lt;View style={styles.footer}&gt;&lt;Text style={styles.text}&gt;Footer&lt;/Text&gt;&lt;/View&gt;\n    &lt;/View&gt;\n  );\n}</pre>",
      "placeholder": "[빈칸 (A)]와 [빈칸 (B)]의 코드를 작성하세요...",
      "rubric": "1. contentsLeftTop 및 contentsLeftBottom View 구조와 텍스트 일치 (5점)\n2. contentsRightTop 및 contentsRightBottom View 구조와 텍스트 일치 (5점)",
      "sampleAnswer": "// ( ㉠ contentsLeft 내부 )\n<View style={styles.contentsLeftTop}><Text style={styles.text}>Contents Left Top</Text></View>\n<View style={styles.contentsLeftBottom}><Text style={styles.text}>Contents Left Bottom</Text></View>\n\n// ( ㉡ contentsRight 내부 )\n<View style={styles.contentsRightTop}><Text style={styles.text}>Contents Right Top</Text></View>\n<View style={styles.contentsRightBottom}><Text style={styles.text}>Contents Right Bottom</Text></View>",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>// ( ㉠ contentsLeft 내부 )\n&lt;View style={styles.contentsLeftTop}&gt;&lt;Text style={styles.text}&gt;Contents Left Top&lt;/Text&gt;&lt;/View&gt;\n&lt;View style={styles.contentsLeftBottom}&gt;&lt;Text style={styles.text}&gt;Contents Left Bottom&lt;/Text&gt;&lt;/View&gt;\n\n// ( ㉡ contentsRight 내부 )\n&lt;View style={styles.contentsRightTop}&gt;&lt;Text style={styles.text}&gt;Contents Right Top&lt;/Text&gt;&lt;/View&gt;\n&lt;View style={styles.contentsRightBottom}&gt;&lt;Text style={styles.text}&gt;Contents Right Bottom&lt;/Text&gt;&lt;/View&gt;</pre>"
    },
    {
      "id": 13,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.5~6: Text 중첩 스타일링 (StyleSheet vs 인라인 방식)",
      "category": "4주차 컴포넌트 기초",
      "title": "Text 컴포넌트 중첩 스타일링 빈칸",
      "text": "한 문장 내에서 특정 단어만 다른 스타일로 꾸미기 위해 &lt;Text&gt;를 중첩하는 기법이다.<br>아래의 스타일시트 방식 <b>( ㉠ )</b>과 인라인 스타일링 방식 <b>( ㉡ )</b>의 빈칸을 채우시오.<br><br><pre class='code-block'>// 1) StyleSheet 방식 (교안 p.5)\n&lt;Text style={styles.baseText}&gt;나는 강남대학교\n  &lt;<span class='blank-chip'>( ㉠ )</span> style={styles.innerText}&gt; 학생 이다.&lt;/<span class='blank-chip'>( ㉠ )</span>&gt;\n&lt;/Text&gt;\n\n// 2) 인라인 스타일링 방식 (교안 p.6)\n&lt;Text style={{fontSize:30}}&gt;나는 강남대학교\n  &lt;Text style={{ <span class='blank-chip'>( ㉡ )</span> }}&gt; 학생 이다.&lt;/Text&gt;\n&lt;/Text&gt;</pre>",
      "placeholder": "( ㉠ ), ( ㉡ ) 스타일명을 순서대로 작성하세요...",
      "answers": [
        "Text, fontSize:30, color:\"green\"",
        "Text, fontSize: 30, color: \"green\"",
        "Text, fontSize:30, color:'green'",
        "Text, fontSize: 30, color: 'green'"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) <code>titleText</code> : 부모 Text 스타일<br>• ( ㉡ ) <code>bodyText</code> : 중첩된 자식 Text 스타일",
      "sampleAnswer": "( ㉠ ) titleText, ( ㉡ ) bodyText"
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
      "placeholder": "onPress 클릭 시 상태 변화와 numberOfLines의 동작을 서술하세요...",
      "answers": [
        "크로스 플랫폼 과목 !!!",
        "크로스 플랫폼 과목!!!",
        "\"크로스 플랫폼 과목 !!!\""
      ],
      "explanation": "<b>정답:</b><br>• <b>onPress:</b> 클릭 시 상태 변경 함수가 실행되어 텍스트 내용이 갱신됩니다.<br>• <b>numberOfLines={1}:</b> 텍스트가 길어져도 단 1줄만 출력하고 나머지는 생략(...) 처리됩니다.",
      "sampleAnswer": "onPress: onPressTitle 함수가 실행되어 titleText 상태 앞에 '[선택됨] ' 접두어가 붙음 / numberOfLines={1}: 텍스트가 여러 줄이라도 최대 1줄만 화면에 렌더링됨"
    },
    {
      "id": 16,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.11: Button 컴포넌트의 필수 속성 title",
      "category": "4주차 컴포넌트 기초",
      "title": "Button 컴포넌트의 필수 속성명 빈칸",
      "text": "리액트 네이티브의 기본 &lt;Button&gt; 컴포넌트에서 버튼 표면에 나타날 글자를 지정하는 <b>필수 Props 명칭</b>을 쓰시오.<br><br><pre class='code-block'>&lt;Button \n  <span class='blank-chip'>( ㉠ )</span>='버튼 만들기'\n/&gt;</pre>",
      "placeholder": "Button 컴포넌트의 필수 속성명을 작성하세요...",
      "answers": [
        "title",
        "title 속성"
      ],
      "explanation": "<b>정답:</b> <code>title</code><br>React Native의 기본 Button 컴포넌트는 버튼에 표시될 텍스트를 지정하는 <code>title</code> prop이 필수값입니다.",
      "sampleAnswer": "title"
    },
    {
      "id": 17,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.12: Button color 및 Alert.alert 팝업 이벤트",
      "category": "4주차 컴포넌트 기초",
      "title": "Button의 color 및 Alert 이벤트 바인딩 빈칸",
      "text": "버튼 색상을 핑크색(\"#f194ff\")으로 지정하고, 클릭 시 알림창을 띄우는 빈칸 <b>( ㉠ )</b>과 <b>( ㉡ )</b>을 채우시오.<br><br><pre class='code-block'>&lt;Button \n  title='버튼 만들기'\n  <span class='blank-chip'>( ㉠ )</span>=\"#f194ff\"\n  <span class='blank-chip'>( ㉡ )</span>={()=> Alert.alert('핑크 버튼 누름')}\n/&gt;</pre>",
      "placeholder": "( ㉠ ), ( ㉡ ) 코드를 순서대로 작성하세요...",
      "answers": [
        "color, onPress",
        "color,onPress",
        "color, onPress prop"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) <code>color</code> : 버튼 배경색 지정<br>• ( ㉡ ) <code>Alert.alert</code> : 네이티브 알림 팝업창 호출",
      "sampleAnswer": "( ㉠ ) color, ( ㉡ ) Alert.alert"
    },
    {
      "id": 18,
      "type": "code",
      "score": 10,
      "origin": "4주차 p.13: Alert.alert 취소/확인 다중 버튼 배열 옵션",
      "category": "4주차 컴포넌트 기초",
      "title": "Alert.alert 취소/확인 다중 버튼 배열 구현",
      "text": "버튼 클릭 시 취소와 확인 두 가지 선택지를 제공하는 Alert 창을 띄우는 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치의 handleAlert 함수 본문 Alert.alert 호출 로직을 완성하시오.<br><br>• <b>타이틀:</b> '경고', <b>메시지:</b> '선택하세요'<br>• <b>취소 버튼:</b> text: '취소', 콘솔에 '취소 버튼 클릭' 출력, style: 'cancel'<br>• <b>확인 버튼:</b> text: '확인', 콘솔에 '확인 버튼 클릭' 출력<br>• <b>옵션:</b> { cancelable: false } (바깥 터치로 닫기 비활성화)<br><br><pre class='code-block'>import React from 'react';\nimport { StyleSheet, View, Button, Alert } from 'react-native';\n\nexport default function App() {\n  const handleAlert = () =&gt; {\n// ==========================================\n// [빈칸 (A)] Alert.alert 호출 및 버튼 배열 작성\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  };\n\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Button title=\"Alert Button\" onPress={handleAlert} /&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },\n});</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 Alert.alert 호출 코드를 작성하세요...",
      "rubric": "1. 취소 버튼 객체(text, onPress, style: 'cancel') 정확성 (5점)\n2. 확인 버튼 객체(text, onPress) 정확성 (5점)",
      "sampleAnswer": "Alert.alert(\n  \"경고\",\n  \"선택하세요\",\n  [\n    {\n      text: \"취소\",\n      onPress: () => console.log(\"취소 버튼 클릭\"),\n      style: \"cancel\",\n    },\n    { text: \"확인\", onPress: () => console.log(\"확인 버튼 클릭\") },\n  ],\n  { cancelable: false }\n);",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>Alert.alert(\n  \"경고\",\n  \"선택하세요\",\n  [\n    {\n      text: \"취소\",\n      onPress: () =&gt; console.log(\"취소 버튼 클릭\"),\n      style: \"cancel\",\n    },\n    { text: \"확인\", onPress: () =&gt; console.log(\"확인 버튼 클릭\") },\n  ],\n  { cancelable: false }\n);</pre>"
    },
    {
      "id": 19,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.14: TextInput 양방향 상태 바인딩 3대 속성",
      "category": "4주차 컴포넌트 기초",
      "title": "TextInput의 placeholder, value, onChangeText 빈칸",
      "text": "사용자가 텍스트를 입력할 때마다 상태값(text)을 갱신하고 입력창에 표시하는 코드이다. 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>의 속성명을 순서대로 쓰시오.<br><br><pre class='code-block'>&lt;TextInput\n  style={styles.input}\n  <span class='blank-chip'>( ㉠ )</span>=\"여기에 입력\"\n  <span class='blank-chip'>( ㉡ )</span>={text}\n  <span class='blank-chip'>( ㉢ )</span>={(value) => setText(value)}\n/&gt;</pre>",
      "placeholder": "( ㉠ ), ( ㉡ ), ( ㉢ ) 속성명을 순서대로 작성하세요...",
      "answers": [
        "placeholder, value, onChangeText",
        "placeholder,value,onChangeText"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) <code>placeholder</code> : 안내 힌트 텍스트<br>• ( ㉡ ) <code>value</code> : 컴포넌트에 바인딩된 상태값<br>• ( ㉢ ) <code>onChangeText</code> : 텍스트 변경 이벤트 리스너",
      "sampleAnswer": "( ㉠ ) placeholder, ( ㉡ ) value, ( ㉢ ) onChangeText"
    },
    {
      "id": 20,
      "type": "short",
      "score": 10,
      "origin": "4주차 p.15: TextInput 정규식 필터링 value.replace(/[^0-9]/g, \"\")",
      "category": "4주차 컴포넌트 기초",
      "title": "정규식 필터링에 따른 최종 비밀번호 출력값",
      "text": "아래의 비밀번호 입력 필드에서 사용자가 키보드로 <b>\"pass1234!@\"</b>를 입력하였다.<br>정규식 <code>value.replace(/[^0-9]/g, \"\")</code>에 의해 최종적으로 화면의 <code>비밀번호: {number}</code>에 출력되는 문자열을 적으시오.<br><br><pre class='code-block'>&lt;TextInput\n  placeholder='비빌번호'\n  keyboardType='numberic'\n  secureTextEntry={false}\n  value={number}\n  onChangeText={(value) => onNumber(value.replace(/[^0-9]/g, \"\"))}\n/&gt;\n&lt;Text style={styles.output}&gt;비밀번호: {number}&lt;/Text&gt;</pre>",
      "placeholder": "최종 출력되는 비밀번호 값을 작성하세요...",
      "answers": [
        "1234"
      ],
      "explanation": "<b>정답:</b> <code>1234</code><br>정규식 <code>/[^0-9]/g</code>에 의해 숫자가 아닌 영문자 a, b가 제거되어 '1234'만 남게 됩니다.",
      "sampleAnswer": "1234"
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
      "text": "여러 줄 TextInput에 입력된 내용을 버튼 클릭 시 Alert 창으로 확인하고, Alert 창의 '확인'을 누르면 입력창을 빈 문자열('')로 초기화하는 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치의 handlePress 함수를 작성하시오.<br><br><pre class='code-block'>import React, { useState } from 'react';\nimport { StyleSheet, View, TextInput, Button, Alert } from 'react-native';\n\nexport default function App() {\n  const [text, setText] = useState('');\n\n// ==========================================\n// [빈칸 (A)] handlePress 핸들러 함수를 완성하시오.\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;TextInput\n        style={styles.input}\n        value={text}\n        onChangeText={setText}\n        placeholder=\"텍스트 입력\"\n        multiline={true}\n      /&gt;\n      &lt;Button title=\"입력 완료\" onPress={handlePress} /&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, padding: 20, justifyContent: 'center' },\n  input: { height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 },\n});</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 handlePress 함수를 작성하세요...",
      "rubric": "1. Alert.alert(\"Input Data\", value || \"(Empty)\", ...) 호출 정확성 (5점)\n2. 확인 버튼 클릭 시 setValue(\"\") 콜백 정확성 (5점)",
      "sampleAnswer": "const handlePress = () => {\n  Alert.alert(\n    \"Input Data\",\n    text,\n    [\n      {\n        text: \"확인\",\n        onPress: () => setText(\"\"),\n      },\n    ]\n  );\n};",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>const handlePress = () =&gt; {\n  Alert.alert(\n    \"Input Data\",\n    text,\n    [\n      {\n        text: \"확인\",\n        onPress: () =&gt; setText(\"\"),\n      },\n    ]\n  );\n};</pre>"
    }
  ]
};
