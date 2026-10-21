window.CROSSPLATFORM_WEEKS = window.CROSSPLATFORM_WEEKS || {};
window.CROSSPLATFORM_WEEKS.week5 = {
  "id": "cp_week5",
  "name": "[전수 기출] 제3단원: 5주차 컴포넌트(JSX/조건/목록) 지필고사 (9문항 / 90점)",
  "tag": "5주차 전수 코드 100%",
  "category": "5주차 컴포넌트",
  "questions": [
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
      "text": "다크 모드 토글 스위치 컴포넌트의 속성 설정을 완성하시오.<br><br>• <b>값 바인딩:</b> darkMode<br>• <b>변경 함수:</b> setDarkMode<br>• <b>trackColor:</b> false일 때 '#767577', true일 때 '#81b0ff'<br>• <b>thumbColor:</b> darkMode가 true이면 '#f5dd4b', false이면 '#f4f3f4'",
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
      "text": "배열 데이터를 렌더링하는 FlatList의 3대 필수 속성을 완성하시오.<br><br>• <b>data:</b> data 배열 전달<br>• <b>keyExtractor:</b> 각 항목의 item.id 추출<br>• <b>renderItem:</b> 구조분해 ({ item })를 받아 &lt;Text style={styles.item}&gt;{item.id} : {item.name}&lt;/Text&gt; 렌더링",
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
      "text": "알파벳 그룹별 데이터를 보여주는 SectionList의 4대 속성을 완성하시오.<br><br>• <b>sections:</b> DATA 배열 전달<br>• <b>keyExtractor:</b> item + index<br>• <b>renderItem:</b> { item } 매개변수를 받아 &lt;Text style={styles.item}&gt; ▣ {item}&lt;/Text&gt; 렌더링<br>• <b>renderSectionHeader:</b> ({ section: { title } }) 매개변수를 받아 &lt;Text style={styles.header}&gt;섹션: {title}&lt;/Text&gt; 렌더링",
      "placeholder": "SectionList의 4대 속성을 작성하세요.",
      "rubric": "1. sections 및 keyExtractor 정확성 (4점)\n2. renderItem 및 renderSectionHeader 구조분해와 렌더링 정확성 (6점)",
      "sampleAnswer": "<SectionList\n  sections={DATA}\n  keyExtractor={(item, index) => item + index}\n  renderItem={({ item }) => (\n    <Text style={styles.item}> ▣ {item}</Text>\n  )}\n  renderSectionHeader={({ section: { title } }) => (\n    <Text style={styles.header}>섹션: {title}</Text>\n  )}\n/>",
      "explanation": "SectionList는 FlatList와 달리 <code>sections</code>로 그룹 데이터를 받고, 섹션 헤더를 그리는 <code>renderSectionHeader</code>가 필수적으로 사용됩니다. (5주차 p.13)"
    }
  ]
};
