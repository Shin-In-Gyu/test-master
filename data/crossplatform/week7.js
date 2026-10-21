window.CROSSPLATFORM_WEEKS = window.CROSSPLATFORM_WEEKS || {};
window.CROSSPLATFORM_WEEKS.week7 = {
  "id": "cp_week7",
  "name": "[전수 기출] 제5단원: 7주차 React Hook 4총사 지필고사 (12문항 / 120점)",
  "tag": "7주차 전수 코드 100%",
  "category": "7주차 Hook",
  "questions": [
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
      "placeholder": "( ㉠ ), ( ㉡ ), ( ㉢ ) 식별자를 순서대로 작성하세요...",
      "answers": [
        "state, setState, initialState",
        "state,setState,initialState"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) <code>state</code> : 상태 변수명<br>• ( ㉡ ) <code>setState</code> : 상태 변경 함수명<br>• ( ㉢ ) <code>initialState</code> : 상태 초기값",
      "sampleAnswer": "( ㉠ ) state, ( ㉡ ) setState, ( ㉢ ) initialState"
    },
    {
      "id": 44,
      "type": "code",
      "score": 10,
      "origin": "7주차 p.5: useState 카운터 컴포넌트 (+1 증가, -1 감소)",
      "category": "7주차 Hook",
      "title": "useState 카운터 컴포넌트 상태 선언 및 증감 핸들러",
      "text": "useState를 사용하여 +1 증가 및 -1 감소 기능을 구현하는 카운터 컴포넌트 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치에 count 상태 선언 및 handleIncrement, handleDecrement 핸들러 함수를 작성하시오.<br><br><pre class='code-block'>import React, { useState } from 'react';\nimport { StyleSheet, Text, View, Button } from 'react-native';\n\nexport default function App() {\n// ==========================================\n// [빈칸 (A)] count 상태 선언 및 증감 핸들러 작성\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text style={styles.text}&gt;Count: {count}&lt;/Text&gt;\n      &lt;Button title=\"+1 증가\" onPress={handleIncrement} /&gt;\n      &lt;Button title=\"-1 감소\" onPress={handleDecrement} /&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n  text: { fontSize: 24, marginBottom: 20 },\n});</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 상태 선언 및 핸들러 코드를 작성하세요...",
      "rubric": "1. const [count, setCount] = useState(0); 정확성 (4점)\n2. onPress={() => setCount(count + 1)} 정확성 (3점)\n3. onPress={() => setCount(count - 1)} 정확성 (3점)",
      "sampleAnswer": "const [count, setCount] = useState(0);\n\nconst handleIncrement = () => {\n  setCount(count + 1);\n};\n\nconst handleDecrement = () => {\n  setCount(count - 1);\n};",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>const [count, setCount] = useState(0);\n\nconst handleIncrement = () =&gt; {\n  setCount(count + 1);\n};\n\nconst handleDecrement = () =&gt; {\n  setCount(count - 1);\n};</pre>"
    },
    {
      "id": 45,
      "type": "code",
      "score": 10,
      "origin": "7주차 p.6~7: useState A × B 곱셈 계산기 (parseFloat, isNaN)",
      "category": "7주차 Hook",
      "title": "A × B 계산기 multiply 함수 로직 완성",
      "text": "두 입력값(a, b)을 받아 곱셈 결과를 화면에 출력하는 A × B 계산기 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치에 parseFloat 및 isNaN 예외처리를 포함한 multiply 함수를 구현하시오.<br><br><pre class='code-block'>import React, { useState } from 'react';\nimport { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';\n\nexport default function App() {\n  const [a, setA] = useState('');\n  const [b, setB] = useState('');\n  const [result, setResult] = useState(null);\n\n// ==========================================\n// [빈칸 (A)] multiply 함수 로직 완성\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;TextInput style={styles.input} value={a} onChangeText={setA} keyboardType=\"numeric\" placeholder=\"A 값 입력\" /&gt;\n      &lt;TextInput style={styles.input} value={b} onChangeText={setB} keyboardType=\"numeric\" placeholder=\"B 값 입력\" /&gt;\n      &lt;Button title=\"A × B 계산하기\" onPress={multiply} /&gt;\n      {result !== null &amp;&amp; &lt;Text style={styles.result}&gt;결과: {result}&lt;/Text&gt;}\n    &lt;/View&gt;\n  );\n}</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 multiply 함수를 작성하세요...",
      "rubric": "1. parseFloat 변환 및 isNaN 유효성 검사 (5점)\n2. setResult('숫자를 입력하세요!') 및 곱셈 결과 저장 (5점)",
      "sampleAnswer": "const multiply = () => {\n  const numA = parseFloat(a);\n  const numB = parseFloat(b);\n  if (isNaN(numA) || isNaN(numB)) {\n    Alert.alert('오류', '올바른 숫자를 입력하세요.');\n    return;\n  }\n  setResult(numA * numB);\n};",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>const multiply = () =&gt; {\n  const numA = parseFloat(a);\n  const numB = parseFloat(b);\n  if (isNaN(numA) || isNaN(numB)) {\n    Alert.alert('오류', '올바른 숫자를 입력하세요.');\n    return;\n  }\n  setResult(numA * numB);\n};</pre>"
    },
    {
      "id": 46,
      "type": "short",
      "score": 10,
      "origin": "7주차 p.8~9: useRef vs let countVar vs 리렌더링 차이",
      "category": "7주차 Hook",
      "title": "useRef와 일반 변수(let)의 리렌더링 후 값 유지 비교",
      "text": "7주차 교안 p.9 예제이다. 사용자가 <b>[클릭] 버튼을 2번</b> 누른 후, <b>[리랜더] 버튼을 1번</b> 눌렀다.<br>화면 &lt;Text&gt;에 최종 표시되는 <b>CountRef</b> 값과 <b>CountVar</b> 값을 순서대로 쓰시오.<br><br><pre class='code-block'>const [render, setRender] = useState(false);\nconst countRef = useRef(0);\nlet countVar = 5;\n\nconst handleClick = () => {\n  countRef.current += 1;\n  countVar += 1;\n};\nconst doRender = () => { setRender(!render); };</pre>",
      "placeholder": "useRef와 일반 변수(let)의 리렌더링 후 값 유지 비교를 서술하세요...",
      "answers": [
        "2, 5",
        "2,5",
        "CountRef: 2, CountVar: 5"
      ],
      "explanation": "<b>정답:</b><br>• <b>useRef:</b> 렌더링 주기와 무관하게 동일한 객체 참조를 유지하므로 리렌더링되어도 값이 유지됨.<br>• <b>let 일반 변수:</b> 컴포넌트가 리렌더링될 때 함수 전체가 다시 실행되므로 선언된 초기값으로 재설정됨.",
      "sampleAnswer": "useRef는 컴포넌트가 리렌더링되어도 저장된 값이 보존되지만, 일반 변수(let)는 리렌더링될 때마다 함수가 재실행되어 초기값으로 다시 초기화됩니다."
    },
    {
      "id": 47,
      "type": "short",
      "score": 10,
      "origin": "7주차 p.10: useRef를 활용한 TextInput 포커스 이동",
      "category": "7주차 Hook",
      "title": "useRef를 이용한 TextInput 직접 포커스 이동 빈칸",
      "text": "버튼 클릭 시 TextInput으로 포커스를 직접 이동시키는 ref 연결 코드이다. 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>을 채우시오.<br><br><pre class='code-block'>const inputRef = <span class='blank-chip'>( ㉠ )</span>(null);\nconst focusInput = () => {\n  inputRef.<span class='blank-chip'>( ㉡ )</span>.focus();\n};\nreturn (\n  &lt;View style={styles.container}&gt;\n    &lt;TextInput style={styles.text} <span class='blank-chip'>( ㉢ )</span>={inputRef} placeholder=\"이름을 입력하세요\" /&gt;\n    &lt;Button title=\"포커스 이동\" onPress={focusInput} /&gt;\n  &lt;/View&gt;\n);</pre>",
      "placeholder": "( ㉠ ), ( ㉡ ) 코드를 순서대로 작성하세요...",
      "answers": [
        "useRef, current, ref",
        "useRef,current,ref"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) <code>useRef</code> : DOM/컴포넌트 참조 훅<br>• ( ㉡ ) <code>inputRef.current.focus()</code> : 해당 컴포넌트로 포커스 이동 메서드 호출",
      "sampleAnswer": "( ㉠ ) useRef, ( ㉡ ) inputRef.current.focus()"
    },
    {
      "id": 48,
      "type": "code",
      "score": 10,
      "origin": "7주차 p.11~12: useRef 계산 후 옵셔널 체이닝 포커스 이동",
      "category": "7주차 Hook",
      "title": "계산 후 옵셔널 체이닝(inputRef.current?.focus()) 포커스 이동",
      "text": "두 수의 곱셈을 계산하여 상태에 저장한 뒤, 다음 입력을 위해 첫 번째 TextInput으로 포커스를 자동 이동시키는 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치에 옵셔널 체이닝(inputRef.current?.focus())을 활용한 handleCalculate 함수를 완성하시오.<br><br><pre class='code-block'>import React, { useState, useRef } from 'react';\nimport { StyleSheet, Text, View, TextInput, Button } from 'react-native';\n\nexport default function App() {\n  const [a, setA] = useState('');\n  const [b, setB] = useState('');\n  const [result, setResult] = useState(null);\n  const inputRef = useRef(null);\n\n// ==========================================\n// [빈칸 (A)] handleCalculate 함수 작성\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;TextInput ref={inputRef} style={styles.input} value={a} onChangeText={setA} keyboardType=\"numeric\" /&gt;\n      &lt;TextInput style={styles.input} value={b} onChangeText={setB} keyboardType=\"numeric\" /&gt;\n      &lt;Button title=\"계산\" onPress={handleCalculate} /&gt;\n      {result !== null &amp;&amp; &lt;Text style={styles.result}&gt;결과: {result}&lt;/Text&gt;}\n    &lt;/View&gt;\n  );\n}</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 handleCalculate 함수를 작성하세요...",
      "rubric": "1. inputRef.current?.focus() 옵셔널 체이닝 정확성 (5점)\n2. handlePress에서 multiply()와 focusInput() 순차 호출 (5점)",
      "sampleAnswer": "const handleCalculate = () => {\n  setResult(parseFloat(a) * parseFloat(b));\n  inputRef.current?.focus();\n};",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>const handleCalculate = () =&gt; {\n  setResult(parseFloat(a) * parseFloat(b));\n  inputRef.current?.focus();\n};</pre>"
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
      "placeholder": "실행 시점과 총 출력 횟수를 작성하세요...",
      "answers": [
        "1",
        "1회",
        "1번"
      ],
      "explanation": "<b>정답:</b><br>• 실행 시점: <b>초기 마운트(최초 렌더링) 시</b><br>• 총 출력 횟수: <b>1회</b>",
      "sampleAnswer": "실행 시점: 컴포넌트가 화면에 마운트(처음 렌더링)될 때 1회만 실행됨 / 총 출력 횟수: 1회"
    },
    {
      "id": 51,
      "type": "short",
      "score": 10,
      "origin": "7주차 p.15: useEffect [count] 상태 변경 감지",
      "category": "7주차 Hook",
      "title": "[count] 의존성 useEffect 버튼 3회 클릭 시 총 로그 출력 횟수",
      "text": "최초 마운트 후 사용자가 \"+1 증가\" 버튼을 <b>3번 연속 클릭</b>했을 때, 컴포넌트 마운트 시점부터 버튼 3회 클릭 완료 시점까지 콘솔에 찍히는 <b>총 로그 출력 횟수</b>를 적으시오.<br><br><pre class='code-block'>const [count, setCount] = useState(0);\nuseEffect(() => {\n  console.log(\"count 값이 바뀌었습니다:\", count);\n}, [count]);</pre>",
      "placeholder": "총 콘솔 출력 횟수를 작성하세요...",
      "answers": [
        "4",
        "4회",
        "4번",
        "총 4회"
      ],
      "explanation": "<b>정답:</b> <b>4회</b><br>컴포넌트 마운트 시 1회 실행 + 버튼을 3번 클릭하여 count 상태가 변경될 때마다 1회씩 실행 = 총 4회",
      "sampleAnswer": "4회 (초기 마운트 1회 + 버튼 클릭 3회 = 총 4회)"
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
