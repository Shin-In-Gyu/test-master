window.CROSSPLATFORM_WEEKS = window.CROSSPLATFORM_WEEKS || {};
window.CROSSPLATFORM_WEEKS.week6 = {
  "id": "cp_week6",
  "name": "[전수 기출] 제4단원: 6주차 10대 네이티브 컴포넌트 응용 지필고사 (10문항 / 100점)",
  "tag": "6주차 전수 코드 100%",
  "category": "6주차 컴포넌트 응용",
  "questions": [
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
      "text": "DrawerLayoutAndroid의 서랍 메뉴를 열고 닫는 ref 메서드 호출 구문을 완성하시오. (<code>const drawer = useRef(null);</code>)<br><br>• 닫기 버튼: <b>drawer.current?.closeDrawer()</b><br>• 열기 버튼: <b>drawer.current?.openDrawer()</b>",
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
      "text": "Animated API를 이용해 5초 동안 1로 서서히 나타나는 <b>fadeIn</b> 함수와 3초 동안 0으로 사라지는 <b>fadeOut</b> 함수를 작성하시오.<br><br>• <b>fadeIn:</b> toValue: 1, duration: 5000, useNativeDriver: true<br>• <b>fadeOut:</b> toValue: 0, duration: 3000, useNativeDriver: true",
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
      "text": "Modal 컴포넌트의 4가지 주요 속성 설정을 완성하시오.<br><br>• <b>animationType:</b> \"slide\"<br>• <b>transparent:</b> true<br>• <b>visible:</b> modalVisible<br>• <b>onRequestClose:</b> Alert.alert('Modal has been closed.') 띄우고 setModalVisible(false) 호출",
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
      "text": "RefreshControl에서 중복 새로고침을 방지하고 2초 후 종료하는 <b>onRefresh</b> 함수와 ScrollView의 <b>refreshControl</b> 바인딩을 완성하시오.<br><br>• timerRef.current가 null이 아니면 return<br>• setRefreshing(true)<br>• setTimeout 2초(2000ms) 후 setRefreshing(false) 및 timerRef.current = null",
      "placeholder": "onRefresh 함수 코드를 작성하세요.",
      "rubric": "1. 중복 방지 가드 if (timerRef.current !== null) return 정확성 (3점)\n2. setRefreshing(true) 및 setTimeout 2000ms 타이머 정확성 (4점)\n3. refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} 바인딩 (3점)",
      "sampleAnswer": "const onRefresh = useCallback(() => {\n  if (timerRef.current !== null) return;\n  setRefreshing(true);\n  timerRef.current = setTimeout(() => {\n    setRefreshing(false);\n    timerRef.current = null;\n  }, 2000);\n}, []);",
      "explanation": "교안 20~21페이지 원본 코드. useCallback과 useRef를 결합하여 중복 실행을 방지하고 메모리 누수를 막는 타이머 패턴입니다."
    }
  ]
};
