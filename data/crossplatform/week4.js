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
    }
  ]
};
