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
      "text": "안드로이드 기기에서 하드웨어 물리 뒤로가기 버튼을 눌렀을 때 확인 팝업을 띄우고 앱을 종료하는 BackHandler 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치에 들어갈 useEffect 훅 및 리스너 등록/해제 로직을 완성하시오.<br><br><pre class='code-block'>import React, { useEffect } from 'react';\nimport { StatusBar } from 'expo-status-bar';\nimport { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';\n\nexport default function App() {\n// ==========================================\n// [빈칸 (A)] hardwareBackPress 리스너 등록 및 언마운트 해제 useEffect를 작성하시오.\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text style={styles.text}&gt;뒤로가기 버튼를 눌러주세요 !&lt;/Text&gt;\n      &lt;StatusBar style=\"auto\" /&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  text: {\n    fontSize: 20,\n    fontWeight: 'bold',\n  },\n});</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 useEffect 훅 코드를 작성하세요...",
      "rubric": "1. BackHandler.exitApp() 명시 (5점)\n2. backHandler.remove() 명시 (5점)",
      "sampleAnswer": "useEffect(() => {\n  const backAction = () => {\n    Alert.alert('잠깐!', '정말로 뒤로 가기를 원하십니까?', [\n      {\n        text: 'Cancel: 아니오',\n        onPress: () => null,\n        style: 'cancel',\n      },\n      { text: 'YES: 예', onPress: () => BackHandler.exitApp() },\n    ]);\n    return true;\n  };\n\n  const backHandler = BackHandler.addEventListener(\n    'hardwareBackPress',\n    backAction,\n  );\n\n  return () => backHandler.remove();\n}, []);",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>useEffect(() =&gt; {\n  const backAction = () =&gt; {\n    Alert.alert('잠깐!', '정말로 뒤로 가기를 원하십니까?', [\n      {\n        text: 'Cancel: 아니오',\n        onPress: () =&gt; null,\n        style: 'cancel',\n      },\n      { text: 'YES: 예', onPress: () =&gt; BackHandler.exitApp() },\n    ]);\n    return true;\n  };\n\n  const backHandler = BackHandler.addEventListener(\n    'hardwareBackPress',\n    backAction,\n  );\n\n  return () =&gt; backHandler.remove();\n}, []);</pre>"
    },
    {
      "id": 33,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.5~6: DrawerLayoutAndroid 드로어 열기/닫기 제어",
      "category": "6주차 컴포넌트 응용",
      "title": "DrawerLayoutAndroid 드로어 열기 및 닫기 메서드",
      "text": "좌측에서 슬라이드로 열리는 서랍 레이아웃(DrawerLayoutAndroid) 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b>의 서랍 닫기 버튼과 <b>[빈칸 (B)]</b>의 서랍 열기 버튼을 각각 작성하시오.<br><br><pre class='code-block'>import React, { useRef } from 'react';\nimport { StyleSheet, Text, View, DrawerLayoutAndroid, Button } from 'react-native';\n\nexport default function App() {\n  const drawer = useRef(null);\n\n  const navigationView = () =&gt; (\n    &lt;View style={styles.navigationContainer}&gt;\n      &lt;Text style={styles.paragraph}&gt;서랍 안쪽 화면&lt;/Text&gt;\n// ==========================================\n// [빈칸 (A)] drawer.current?.closeDrawer() 버튼을 작성하시오.\n// ==========================================\n<span class='todo-chip'>      /* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n    &lt;/View&gt;\n  );\n\n  return (\n    &lt;DrawerLayoutAndroid\n      ref={drawer}\n      drawerWidth={300}\n      drawerPosition=\"left\"\n      renderNavigationView={navigationView}\n    &gt;\n      &lt;View style={styles.container}&gt;\n        &lt;Text style={styles.paragraph}&gt;메인 화면&lt;/Text&gt;\n// ==========================================\n// [빈칸 (B)] drawer.current?.openDrawer() 버튼을 작성하시오.\n// ==========================================\n<span class='todo-chip'>        /* [빈칸 (B)] 여기에 코드를 작성하시오 */</span>\n      &lt;/View&gt;\n    &lt;/DrawerLayoutAndroid&gt;\n  );\n}</pre>",
      "placeholder": "[빈칸 (A)]와 [빈칸 (B)]의 코드를 작성하세요...",
      "rubric": "1. drawer.current?.closeDrawer() 정확성 (5점)\n2. drawer.current?.openDrawer() 정확성 (5점)",
      "sampleAnswer": "// ( ㉠ 서랍 닫기 버튼 )\n<Button\n  title=\"서랍 닫기\"\n  onPress={() => drawer.current?.closeDrawer()}\n/>\n\n// ( ㉡ 서랍 열기 버튼 )\n<Button\n  title=\"서랍 열기\"\n  onPress={() => drawer.current?.openDrawer()}\n/>",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>// ( ㉠ 서랍 닫기 버튼 )\n&lt;Button\n  title=\"서랍 닫기\"\n  onPress={() =&gt; drawer.current?.closeDrawer()}\n/&gt;\n\n// ( ㉡ 서랍 열기 버튼 )\n&lt;Button\n  title=\"서랍 열기\"\n  onPress={() =&gt; drawer.current?.openDrawer()}\n/&gt;</pre>"
    },
    {
      "id": 34,
      "type": "short",
      "score": 10,
      "origin": "6주차 p.7: ToastAndroid.showWithGravityAndOffset 속성",
      "category": "6주차 컴포넌트 응용",
      "title": "ToastAndroid 위치 및 오프셋 지정 토스트 빈칸",
      "text": "안드로이드 전용 토스트 메시지를 화면 중앙에 x좌표 25px, y좌표 50px 오프셋으로 길게(LONG) 출력하고자 한다. 빈칸 <b>( ㉠ )</b>, <b>( ㉡ )</b>, <b>( ㉢ )</b>을 채우시오.<br><br><pre class='code-block'>ToastAndroid.<span class='blank-chip'>( ㉠ )</span>(\n  'TOGGLE TOAST WITH GRAVITY & OFFSET 메세지 !',\n  ToastAndroid.<span class='blank-chip'>( ㉡ )</span>, // 지속시간: SHORT(짧게), LONG(길게)\n  ToastAndroid.<span class='blank-chip'>( ㉢ )</span>, // 기준 위치: TOP | CENTER | BOTTOM\n  25, 50\n);</pre>",
      "placeholder": "( ㉠ ), ( ㉡ ) 코드를 순서대로 작성하세요...",
      "answers": [
        "showWithGravityAndOffset, LONG, CENTER",
        "showWithGravityAndOffset,LONG,CENTER"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) <code>showWithGravityAndOffset</code> : 위치와 오프셋을 함께 지정하는 토스트 출력 메서드<br>• ( ㉡ ) <code>ToastAndroid.TOP</code> : 상단 배치 상수",
      "sampleAnswer": "( ㉠ ) showWithGravityAndOffset, ( ㉡ ) ToastAndroid.TOP"
    },
    {
      "id": 35,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.9~10: Animated.timing 페이드인/페이드아웃 애니메이션",
      "category": "6주차 컴포넌트 응용",
      "title": "Animated.timing 페이드인 및 페이드아웃 구현",
      "text": "투명도(opacity)를 점진적으로 변화시켜 뷰를 나타나게 하거나 사라지게 만드는 Animated.timing 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치에 들어갈 fadeIn 함수(5초)와 fadeOut 함수(3초)를 구현하시오.<br><br><pre class='code-block'>import React, { useRef } from 'react';\nimport { Animated, Text, View, StyleSheet, Button } from 'react-native';\n\nexport default function App() {\n  const fadeAnim = useRef(new Animated.Value(0)).current;\n\n// ==========================================\n// [빈칸 (A)] fadeIn(toValue: 1, duration: 5000) 및 fadeOut(toValue: 0, duration: 3000) 함수 작성\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}&gt;\n        &lt;Text style={styles.fadingText}&gt;Fading View!&lt;/Text&gt;\n      &lt;/Animated.View&gt;\n      &lt;Button title=\"Fade In\" onPress={fadeIn} /&gt;\n      &lt;Button title=\"Fade Out\" onPress={fadeOut} /&gt;\n    &lt;/View&gt;\n  );\n}</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 fadeIn 및 fadeOut 함수를 작성하세요...",
      "rubric": "1. Animated.timing(fadeAnim, { toValue: 1, duration: 5000, useNativeDriver: true }).start() 정확성 (5점)\n2. Animated.timing(fadeAnim, { toValue: 0, duration: 3000, useNativeDriver: true }).start() 정확성 (5점)",
      "sampleAnswer": "const fadeIn = () => {\n  Animated.timing(fadeAnim, {\n    toValue: 1,\n    duration: 5000,\n    useNativeDriver: true,\n  }).start();\n};\n\nconst fadeOut = () => {\n  Animated.timing(fadeAnim, {\n    toValue: 0,\n    duration: 3000,\n    useNativeDriver: true,\n  }).start();\n};",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>const fadeIn = () =&gt; {\n  Animated.timing(fadeAnim, {\n    toValue: 1,\n    duration: 5000,\n    useNativeDriver: true,\n  }).start();\n};\n\nconst fadeOut = () =&gt; {\n  Animated.timing(fadeAnim, {\n    toValue: 0,\n    duration: 3000,\n    useNativeDriver: true,\n  }).start();\n};</pre>"
    },
    {
      "id": 36,
      "type": "short",
      "score": 10,
      "origin": "6주차 p.11~12: Dimensions API window vs screen 및 이벤트 리스너",
      "category": "6주차 컴포넌트 응용",
      "title": "Dimensions API 이벤트 리스너 등록 및 클린업 빈칸",
      "text": "Dimensions API에서 화면 크기 변경을 감지하기 위한 리스너 이벤트명 <b>( ㉠ )</b>과 언마운트 시 리스너를 제거하는 메서드 <b>( ㉡ )</b>을 쓰시오.<br><br><pre class='code-block'>useEffect(() => {\n  const subscription = Dimensions.addEventListener(\n    <span class='blank-chip'>( ㉠ )</span>,\n    ({window, screen}) => { setDimensions({window, screen}); }\n  );\n  return () => <span class='blank-chip'>( ㉡ )</span>;\n});</pre>",
      "placeholder": "( ㉠ ), ( ㉡ ) 코드를 순서대로 작성하세요...",
      "answers": [
        "'change', subscription?.remove()",
        "change, subscription?.remove()",
        "'change', subscription.remove()",
        "change, subscription.remove()"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) <code>addEventListener</code> : 이벤트 리스너 등록<br>• ( ㉡ ) <code>subscription.remove()</code> : 언마운트 시 클린업 해제",
      "sampleAnswer": "( ㉠ ) addEventListener, ( ㉡ ) subscription.remove()"
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
      "placeholder": "( ㉠ ), ( ㉡ ) 코드를 순서대로 작성하세요...",
      "answers": [
        "Linking, openURL",
        "Linking,openURL"
      ],
      "explanation": "<b>정답:</b><br>• ( ㉠ ) <code>Linking</code> : 외부 링크 연동 모듈<br>• ( ㉡ ) <code>openURL</code> : 웹 URL을 기본 브라우저로 여는 메서드",
      "sampleAnswer": "( ㉠ ) Linking, ( ㉡ ) openURL"
    },
    {
      "id": 39,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.16~17: Modal 컴포넌트의 4대 속성 (animationType, visible 등)",
      "category": "6주차 컴포넌트 응용",
      "title": "Modal 컴포넌트의 주요 속성 설정 완성",
      "text": "모바일 화면 위에 오버레이되는 Modal 대화상자 컴포넌트 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치에 animationType='slide', transparent={true}, visible, onRequestClose 속성을 설정한 Modal 컴포넌트를 작성하시오.<br><br><pre class='code-block'>import React, { useState } from 'react';\nimport { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';\n\nexport default function App() {\n  const [modalVisible, setModalVisible] = useState(false);\n\n  return (\n    &lt;View style={styles.centeredView}&gt;\n// ==========================================\n// [빈칸 (A)] 아래 Modal 컴포넌트를 작성하시오.\n// ==========================================\n<span class='todo-chip'>/* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n      &lt;Pressable style={[styles.button, styles.buttonOpen]} onPress={() =&gt; setModalVisible(true)}&gt;\n        &lt;Text style={styles.textStyle}&gt;Show Modal&lt;/Text&gt;\n      &lt;/Pressable&gt;\n    &lt;/View&gt;\n  );\n}</pre>",
      "placeholder": "[빈칸 (A)]에 들어갈 Modal 컴포넌트 JSX를 작성하세요...",
      "rubric": "1. animationType=\"slide\", transparent={true}, visible={modalVisible} 정확성 (5점)\n2. onRequestClose 콜백 정확성 (5점)",
      "sampleAnswer": "<Modal\n  animationType=\"slide\"\n  transparent={true}\n  visible={modalVisible}\n  onRequestClose={() => {\n    Alert.alert('Modal has been closed.');\n    setModalVisible(!modalVisible);\n  }}\n>\n  <View style={styles.centeredView}>\n    <View style={styles.modalView}>\n      <Text style={styles.modalText}>Hello World!</Text>\n      <Pressable\n        style={[styles.button, styles.buttonClose]}\n        onPress={() => setModalVisible(!modalVisible)}\n      >\n        <Text style={styles.textStyle}>Hide Modal</Text>\n      </Pressable>\n    </View>\n  </View>\n</Modal>",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>&lt;Modal\n  animationType=\"slide\"\n  transparent={true}\n  visible={modalVisible}\n  onRequestClose={() =&gt; {\n    Alert.alert('Modal has been closed.');\n    setModalVisible(!modalVisible);\n  }}\n&gt;\n  &lt;View style={styles.centeredView}&gt;\n    &lt;View style={styles.modalView}&gt;\n      &lt;Text style={styles.modalText}&gt;Hello World!&lt;/Text&gt;\n      &lt;Pressable\n        style={[styles.button, styles.buttonClose]}\n        onPress={() =&gt; setModalVisible(!modalVisible)}\n      &gt;\n        &lt;Text style={styles.textStyle}&gt;Hide Modal&lt;/Text&gt;\n      &lt;/Pressable&gt;\n    &lt;/View&gt;\n  &lt;/View&gt;\n&lt;/Modal&gt;</pre>"
    },
    {
      "id": 40,
      "type": "short",
      "score": 10,
      "origin": "6주차 p.18~19: PixelRatio.getPixelSizeForLayoutSize(size) 계산",
      "category": "6주차 컴포넌트 응용",
      "title": "PixelRatio 픽셀 배율에 따른 실제 이미지 픽셀 크기 계산",
      "text": "레이아웃 크기 <code>const size = 50;</code>일 때, 단말기의 픽셀 비율(<code>PixelRatio.get()</code>)이 <b>3</b>이라면 <code>PixelRatio.getPixelSizeForLayoutSize(size)</code>가 최종 반환하는 <b>픽셀 크기 값(정수)</b>을 쓰시오.",
      "placeholder": "실제 이미지 픽셀 크기를 작성하세요...",
      "answers": [
        "150",
        "150 px",
        "150px"
      ],
      "explanation": "<b>정답:</b> <code>600px × 600px</code><br>PixelRatio.getPixelSizeForLayoutSize(200)에 픽셀 배율 3이 곱해져 200 * 3 = 600px이 됩니다.",
      "sampleAnswer": "600px × 600px (너비 600, 높이 600)"
    },
    {
      "id": 41,
      "type": "code",
      "score": 10,
      "origin": "6주차 p.20~21: RefreshControl 스크롤 당겨서 새로고침 구현",
      "category": "6주차 컴포넌트 응용",
      "title": "RefreshControl 새로고침 콜백 및 바인딩 구현",
      "text": "스크롤 뷰를 아래로 당겼을 때 로딩 인디케이터를 띄우며 새로고침을 실행하는 RefreshControl 예제이다. 전체 코드를 확인하고 <b>[빈칸 (A)]</b> 위치의 onRefresh 콜백 함수와 <b>[빈칸 (B)]</b> 위치의 refreshControl 속성 연결을 완성하시오.<br><br><pre class='code-block'>import React, { useState, useCallback, useRef } from 'react';\nimport { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';\n\nexport default function App() {\n  const [refreshing, setRefreshing] = useState(false);\n  const timerRef = useRef(null);\n\n// ==========================================\n// [빈칸 (A)] onRefresh 콜백 함수 작성 (2초 후 setRefreshing(false))\n// ==========================================\n<span class='todo-chip'>  /* [빈칸 (A)] 여기에 코드를 작성하시오 */</span>\n  return (\n    &lt;ScrollView\n      contentContainerStyle={styles.scrollView}\n// ==========================================\n// [빈칸 (B)] refreshControl 속성 작성\n// ==========================================\n<span class='todo-chip'>      /* [빈칸 (B)] 여기에 코드를 작성하시오 */</span>\n    &gt;\n      &lt;Text&gt;Pull down to see RefreshControl indicator&lt;/Text&gt;\n    &lt;/ScrollView&gt;\n  );\n}</pre>",
      "placeholder": "[빈칸 (A)]와 [빈칸 (B)]의 코드를 작성하세요...",
      "rubric": "1. 중복 방지 가드 if (timerRef.current !== null) return 정확성 (3점)\n2. setRefreshing(true) 및 setTimeout 2000ms 타이머 정확성 (4점)\n3. refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} 바인딩 (3점)",
      "sampleAnswer": "// ( ㉠ onRefresh 콜백 함수 )\nconst onRefresh = useCallback(() => {\n  if (timerRef.current) clearTimeout(timerRef.current);\n  setRefreshing(true);\n  timerRef.current = setTimeout(() => {\n    setRefreshing(false);\n  }, 2000);\n}, []);\n\n// ( ㉡ refreshControl 속성 )\nrefreshControl={\n  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />\n}",
      "explanation": "<b>정답 코드:</b><br><pre class='code-block'>// ( ㉠ onRefresh 콜백 함수 )\nconst onRefresh = useCallback(() =&gt; {\n  if (timerRef.current) clearTimeout(timerRef.current);\n  setRefreshing(true);\n  timerRef.current = setTimeout(() =&gt; {\n    setRefreshing(false);\n  }, 2000);\n}, []);\n\n// ( ㉡ refreshControl 속성 )\nrefreshControl={\n  &lt;RefreshControl refreshing={refreshing} onRefresh={onRefresh} /&gt;\n}</pre>"
    }
  ]
};
