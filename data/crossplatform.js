// ========================================================
// 📱 [DATA MODULE] 크로스플랫폼 프로그래밍 (Cross-Platform Programming)
// 담당 교수: 정종수 (jungjongsoo@yahoo.com)
// 2주차 ~ 7주차 전범위 개념 총정리 & 교수님 공지 10대 적중 모의고사
// ========================================================
window.CONCEPT_DATABASE = window.CONCEPT_DATABASE || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};

// 1. 크로스플랫폼 프로그래밍 개념 총정리
window.CONCEPT_DATABASE.crossplatform = {
  id: "crossplatform",
  title: "📱 크로스플랫폼 프로그래밍 (정종수 교수) 2~7주차 전범위 핵심 총정리 & 시험대비 치트시트",
  filterChips: [
    { id: "all", label: "전체보기" },
    { id: "cp-cheat", label: "⚡ 1초 정답 치트키 (15선)", class: "amber-chip" },
    { id: "cp-prof", label: "🎯 교수님 시험공지 & 감점방지 기준", class: "danger-chip" },
    { id: "cp-w2", label: "2주: 환경구축·Expo·프로젝트" },
    { id: "cp-w3", label: "3주: 스타일링·Flexbox 정렬" },
    { id: "cp-w4", label: "4주: View·Text·Button·Input" },
    { id: "cp-w5", label: "5주: JSX·조건문·FlatList" },
    { id: "cp-w6", label: "6주: 10대 네이티브 API·컴포넌트" },
    { id: "cp-w7", label: "7주: Hook 4총사 & 계산기 실습" }
  ],
  html: `
    <!-- SECTION 1: 1초 정답 치트키 15선 -->
    <section id="cp-cheat" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title">
          <span>⚡ 크로스플랫폼 1초 정답 치트키 (시험 빈출 & 핵심 키워드 15선)</span>
        </div>
        <span style="font-size: 13.5px; opacity: 0.95;">시험 문제 지문 확인 즉시 작성할 단답형 핵심 키워드 모음</span>
      </div>

      <div class="qa-grid">
        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q1</span><span>리액트 네이티브에서 레이아웃의 기본 주축 정렬 방향(flexDirection) 기본값은?</span></div>
          <div class="qa-a"><span class="ans-target">column (세로 방향)</span><button class="copy-btn" onclick="copyText('column')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 일반 웹 CSS(row)와 달리 모바일 환경이므로 세로(column)가 기본값임</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q2</span><span>두 개 이상의 스타일 객체를 병합하여 컴포넌트에 동시 적용할 때 사용하는 표기법은?</span></div>
          <div class="qa-a"><span class="ans-target">배열 표기법 [styles.a, styles.b]</span><button class="copy-btn" onclick="copyText('[styles.a, styles.b]')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 배열 뒤쪽에 위치한 스타일이 앞쪽 스타일을 덮어씀(오버라이드)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q3</span><span>대용량 목록을 최적화하여 화면에 보이는 부분만 지연 렌더링하는 컴포넌트의 3대 필수 Props는?</span></div>
          <div class="qa-a"><span class="ans-target">data, renderItem, keyExtractor</span><button class="copy-btn" onclick="copyText('data, renderItem, keyExtractor')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* ScrollView와 달리 FlatList는 화면 밖의 메모리를 효율적으로 재활용함</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q4</span><span>값 변경 시 컴포넌트 리렌더링을 유발하지 않고 유지되는 Hook과 값 접근 프로퍼티는?</span></div>
          <div class="qa-a"><span class="ans-target">useRef / .current</span><button class="copy-btn" onclick="copyText('useRef / .current')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* useState는 세터 호출 시 리렌더링 유발, useRef는 리렌더링 없이 값 유지 및 DOM 제어</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q5</span><span>useEffect에서 컴포넌트가 화면에 '최초 마운트될 때 딱 1번만 실행'되게 하는 의존성 배열 인자는?</span></div>
          <div class="qa-a"><span class="ans-target">빈 배열 [] (Empty Dependency Array)</span><button class="copy-btn" onclick="copyText('[]')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 의존성 배열 생략 시 매 렌더링마다 실행, [count] 전달 시 count 변경 시마다 실행</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q6</span><span>연산 비용이 큰 계산 결과값을 메모리에 캐싱하여 불필요한 재계산을 방지하는 최적화 Hook은?</span></div>
          <div class="qa-a"><span class="ans-target">useMemo</span><button class="copy-btn" onclick="copyText('useMemo')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 의존성 배열의 값이 변경되었을 때만 계산 함수를 다시 실행함</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q7</span><span>안드로이드의 하드웨어 뒤로가기 버튼을 감지하고 기본 시스템 동작을 차단할 때 반환하는 boolean 값은?</span></div>
          <div class="qa-a"><span class="ans-target">true</span><button class="copy-btn" onclick="copyText('true')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* false 반환 시 기본 뒤로가기 실행, true 반환 시 커스텀 로직(Alert 등) 수행</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q8</span><span>상태바와 소프트키를 제외한 실제 앱 가용 영역의 해상도를 픽셀 단위로 구하는 API 메서드는?</span></div>
          <div class="qa-a"><span class="ans-target">Dimensions.get('window')</span><button class="copy-btn" onclick="copyText('Dimensions.get(\\'window\\')')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 'screen'은 기기의 물리적 전체 화면 크기를 반환함</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q9</span><span>TextInput에서 비밀번호를 별표(***)나 점으로 숨겨주는 boolean 속성(Prop)은?</span></div>
          <div class="qa-a"><span class="ans-target">secureTextEntry={true}</span><button class="copy-btn" onclick="copyText('secureTextEntry')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 숫자 키패드만 띄우려면 keyboardType='numeric' 사용</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q10</span><span>인터넷 URL에서 가져오는 원격 네트워크 이미지(&lt;Image /&gt;)에 반드시 명시해야 하는 2가지 스타일은?</span></div>
          <div class="qa-a"><span class="ans-target">width, height (가로 및 세로 크기)</span><button class="copy-btn" onclick="copyText('width, height')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 로컬 require 이미지는 크기 자동 추론되나, 원격 uri 이미지는 크기 미지정 시 렌더링 안 됨</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q11</span><span>가상 키보드가 폼 입력창을 가리지 않도록 뷰를 자동으로 밀어올려주는 컴포넌트는?</span></div>
          <div class="qa-a"><span class="ans-target">KeyboardAvoidingView</span><button class="copy-btn" onclick="copyText('KeyboardAvoidingView')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 바깥 영역 터치 시 키보드를 닫는 API는 Keyboard.dismiss</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q12</span><span>외부 웹 브라우저나 타 애플리케이션을 URL 스킴으로 호출하여 실행하는 API는?</span></div>
          <div class="qa-a"><span class="ans-target">Linking (Linking.openURL)</span><button class="copy-btn" onclick="copyText('Linking.openURL')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 예: Linking.openURL('https://blog.naver.com/jongsoo67')</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q13</span><span>교안에서 명시한 React Native 안드로이드 빌드용 필수 JDK 버전은?</span></div>
          <div class="qa-a"><span class="ans-target">JDK 21</span><button class="copy-btn" onclick="copyText('JDK 21')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 2주차 교안 슬라이드 20페이지 명시: '주의: JDK 21 설치'</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q14</span><span>React Hook의 2대 사용 제한 규칙은?</span></div>
          <div class="qa-a"><span class="ans-target">1) 최상위(Top-level)에서만 호출 / 2) React 함수형 컴포넌트 내에서만 호출</span><button class="copy-btn" onclick="copyText('최상위에서만 호출, 함수형 컴포넌트 내에서만 호출')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* if 조건문, for 반복문, 일반 JS 함수 안에서는 Hook을 호출할 수 없음</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q15</span><span>7주차 계산기 실습 교안에서 제시된 숫자 버튼의 배경색(backgroundColor) Hex 코드는?</span></div>
          <div class="qa-a"><span class="ans-target">#2f2f2f</span><button class="copy-btn" onclick="copyText('#2f2f2f')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 연산자 버튼: #F5A623, 유틸리티 버튼: #555, 배경: black</div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: 교수님 시험 공지 및 감점 방지 기준 -->
    <section id="cp-prof" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>🎯 교수님 공지 시험 개요 & 감점 방지 필수 채점 기준</span>
        </div>
        <span style="font-size: 13.5px; opacity: 0.95;">수업 녹음본(새로운 노트 (1).txt) 발췌 및 정밀 분석</span>
      </div>

      <div class="concept-card">
        <table class="custom-table">
          <thead>
            <tr>
              <th style="width: 25%;">항목</th>
              <th style="width: 35%;">공지 내용</th>
              <th>교수님 실제 육성 멘트 및 대비 전략</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 800; color: var(--accent);">시험 일시</td>
              <td><b>2026년 10월 22일(목) 12:00 ~ 13:00</b></td>
              <td>11시 50분부터 입실 준비, 12시 정각 시험 시작 (약 50분~60분)</td>
            </tr>
            <tr>
              <td style="font-weight: 800; color: var(--accent);">시험 장소</td>
              <td><b>후관 103호 (후 103)</b></td>
              <td>원래 강의실에서 실시</td>
            </tr>
            <tr>
              <td style="font-weight: 800; color: var(--accent);">시험 범위</td>
              <td><b>2주차 ~ 7주차 교안 전 범위</b></td>
              <td>2장 개발환경 구축부터 7장 Hook(useState, useMemo 등)까지</td>
            </tr>
            <tr>
              <td style="font-weight: 800; color: var(--accent);">문항 수 & 형식</td>
              <td><b>약 10문제 (All 100% 주관식)</b></td>
              <td><span style="color: var(--tag-gold-ink); font-weight: 700;">"10문제 생각하고 있어. 다 주관식으로 낼 예정입니다. 객관식 없음!"</span></td>
            </tr>
            <tr>
              <td style="font-weight: 800; color: var(--tag-danger-ink);">★ 채점 감점 기준</td>
              <td><b style="color: var(--tag-danger-ink);">상세 조건(Style & Props) 엄격 준수</b></td>
              <td><span style="color: var(--tag-danger-ink); font-weight: 700;">"과제에 상세 조건이 있어. 블랙 대신 회색 쓰거나 조건 안 지키면 점수 안 나갑니다. 형식과 색상, 폰트 규격을 정확히 지켜서 코딩하세요."</span></td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box" style="margin-top: 16px; border-left: 4px solid var(--tag-gold-ink);">
          <div class="callout-title">💡 시험에 출제되는 4대 주관식 유형</div>
          <ul style="margin-left: 20px; font-size: 14.5px; line-height: 1.8; color: var(--ink-secondary);">
            <li><b>1) 코드 빈칸 채우기</b>: 주요 컴포넌트 선언문, Props 속성명, Hook 선언부의 빈칸 완성</li>
            <li><b>2) 코드 동작 원리 및 개념 설명 서술형</b>: 코드가 어떻게 동작하는지 설명 (useState vs useRef, useEffect 의존성 배열 동작 등)</li>
            <li><b>3) 코드 실행 결과 예측 및 값 도출형</b>: 특정 조건이나 이벤트(버튼 클릭) 발생 후 화면에 어떤 값이 출력되는지 예측</li>
            <li><b>4) 조건 기반 컴포넌트 완성형</b>: 제시된 기능과 상세 스타일 조건에 맞추어 주관식 컴포넌트 코드 완성</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 3: 2주차 개발환경 구축 -->
    <section id="cp-w2" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title"><span>📂 2주차: React Native 개발환경 구축 & 프로젝트 기초 (p.1~39)</span></div>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. React Native 아키텍처 & 개발 도구</div>
        <p style="font-size: 15px; color: var(--ink-secondary); line-height: 1.7; margin-bottom: 14px;">
          React Native는 JavaScript로 코드를 작성하면 <b>Bridge(네이티브 브릿지)</b>를 통해 Android/iOS의 네이티브 모듈과 비동기 JSON 메시지를 주고받으며,
          웹뷰(WebView)가 아닌 <b>실제 OS 고유의 네이티브 UI 위젯</b>을 렌더링합니다.
        </p>

        <table class="custom-table">
          <thead><tr><th>개발 도구</th><th>역할 및 교안 요구사항</th><th>핵심 체크포인트</th></tr></thead>
          <tbody>
            <tr><td><b>Node.js & npm</b></td><td>JS 런타임 및 패키지 관리자</td><td><code>node -v</code>, <code>npm -v</code> 버전 확인</td></tr>
            <tr><td><b>JDK (Java)</b></td><td>안드로이드 빌드용 자바 키트</td><td><b style="color:var(--accent);">JDK 21</b> 설치 및 환경변수(JAVA_HOME) 설정</td></tr>
            <tr><td><b>Android Studio</b></td><td>Android SDK 및 AVD 에뮬레이터</td><td>Platform-tools(adb) 경로 PATH 등록</td></tr>
            <tr><td><b>Expo CLI</b></td><td>수업 실습용 빠른 개발 프레임워크</td><td>모바일 <b>Expo Go</b> 앱으로 QR코드 스캔 즉시 실행</td></tr>
          </tbody>
        </table>

        <div class="callout-box" style="margin-top: 14px;">
          <div class="callout-title">핵심 명령어 및 파일 구조</div>
          <div style="font-family: var(--font-mono); font-size: 13.5px; background: var(--bg-surface-elevated); padding: 12px; border-radius: 4px; color: var(--ink);">
            • 프로젝트 생성: npx create-expo-app 프로젝트명 (또는 expo init)<br>
            • 프로젝트 실행: npm start (Metro 번들러 기동)<br>
            • App.js: 애플리케이션의 시작점이자 최상위 루트 컴포넌트<br>
            • package.json: 프로젝트 의존성 라이브러리와 실행 스크립트 관리
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: 3주차 스타일링 & Flexbox -->
    <section id="cp-w3" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title"><span>📂 3주차: 레이아웃 & 스타일링 (StyleSheet & Flexbox) (p.1~19)</span></div>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. Flexbox 3대 정렬 속성 (★ 시험 0순위)</div>
        <p style="font-size: 15px; color: var(--ink-secondary); line-height: 1.7; margin-bottom: 14px;">
          웹 CSS와 달리 리액트 네이티브는 <b>카멜 표기법(camelCase)</b>을 쓰며, 단위를 붙이지 않고 숫자만 적습니다. (<code>fontSize: 20</code>)
        </p>

        <table class="custom-table">
          <thead><tr><th style="width: 25%;">속성명</th><th style="width: 25%;">기본값 (Default)</th><th>역할 및 옵션값</th></tr></thead>
          <tbody>
            <tr>
              <td><b>flexDirection</b></td>
              <td><b style="color: var(--tag-gold-ink);">column (세로)</b></td>
              <td>자식 컴포넌트의 <b>주축(Main Axis) 배치 방향</b> 결정.<br>옵션: <code>column</code>, <code>row</code>, <code>column-reverse</code>, <code>row-reverse</code></td>
            </tr>
            <tr>
              <td><b>justifyContent</b></td>
              <td><b style="color: var(--tag-gold-ink);">flex-start</b></td>
              <td><b>주축(Main Axis) 방향</b>을 기준으로 정렬 위치 제어.<br>옵션: <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code></td>
            </tr>
            <tr>
              <td><b>alignItems</b></td>
              <td><b style="color: var(--tag-gold-ink);">stretch</b></td>
              <td>주축과 수직인 <b>교차축(Cross Axis) 방향</b> 기준 정렬.<br>옵션: <code>stretch</code>, <code>flex-start</code>, <code>center</code>, <code>flex-end</code></td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-title" style="margin-top: 24px;">2. 스타일 적용 방식 3가지</div>
        <div style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8;">
          1) <b>인라인 스타일링</b>: <code>&lt;View style={{ flex: 1, backgroundColor: '#fff' }}&gt;</code> (이중 중괄호 필수)<br>
          2) <b>클래스 스타일링</b>: <code>const styles = StyleSheet.create({ container: { flex: 1 } });</code><br>
          3) <b>스타일 배열 결합</b>: <code>&lt;Text style={[styles.baseText, styles.boldText]}&gt;</code> (뒤쪽 스타일이 앞쪽을 오버라이드)<br>
          4) <b>외부 스타일 파일 분리</b>: <code>src/styles.js</code>에서 export 후 <code>App.js</code>에서 import
        </div>
      </div>
    </section>

    <!-- SECTION 5: 4주차 컴포넌트 기초 -->
    <section id="cp-w4" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title"><span>📂 4주차: 핵심 기초 컴포넌트 (View, Text, Button, TextInput) (p.1~18)</span></div>
      </div>

      <div class="concept-card">
        <table class="custom-table">
          <thead><tr><th style="width: 22%;">컴포넌트</th><th style="width: 38%;">주요 속성(Props) & 특징</th><th>대표 코드 예제</th></tr></thead>
          <tbody>
            <tr>
              <td><b>View</b></td>
              <td>UI 레이아웃 컨테이너 (웹의 div에 해당). Flexbox의 기본 단위.</td>
              <td><code>&lt;View style={styles.container}&gt;...&lt;/View&gt;</code></td>
            </tr>
            <tr>
              <td><b>Text & ScrollView</b></td>
              <td>
                • 문자열은 반드시 <code>&lt;Text&gt;</code> 안에 작성<br>
                • <b>텍스트 중첩</b>: 안쪽 Text는 바깥쪽 Text 스타일 상속<br>
                • <code>onPress</code> 이벤트 지원<br>
                • 긴 내용은 <code>&lt;ScrollView&gt;</code>로 감싸 스크롤 처리
              </td>
              <td>
                <code>&lt;Text style={{ fontSize: 18 }}&gt;</code><br>
                <code>&nbsp;&nbsp;기본 &lt;Text style={{ color: 'red' }}&gt;강조&lt;/Text&gt;</code><br>
                <code>&lt;/Text&gt;</code>
              </td>
            </tr>
            <tr>
              <td><b>Button & Alert</b></td>
              <td>
                • 자체 닫는 태그(Self-closing) 형태<br>
                • 필수 Props: <code>title</code>, <code>onPress</code><br>
                • <code>Alert.alert(제목, 내용, 버튼배열)</code>
              </td>
              <td>
                <code>Alert.alert('확인', '진행할까요?', [</code><br>
                <code>&nbsp;&nbsp;{ text: '취소', style: 'cancel' },</code><br>
                <code>&nbsp;&nbsp;{ text: '확인', onPress: handleOk }</code><br>
                <code>]);</code>
              </td>
            </tr>
            <tr>
              <td><b>TextInput</b></td>
              <td>
                • <code>value</code>: 바인딩 상태값<br>
                • <code>onChangeText</code>: 입력 변경 콜백<br>
                • <code>placeholder</code>: 힌트 문구<br>
                • <code>keyboardType</code>: 'default', 'numeric'<br>
                • <code>secureTextEntry</code>: 비밀번호 마스킹<br>
                • <code>multiline</code>, <code>numberOfLines</code>: 여러 줄
              </td>
              <td>
                <code>&lt;TextInput</code><br>
                <code>&nbsp;&nbsp;value={text}</code><br>
                <code>&nbsp;&nbsp;onChangeText={setText}</code><br>
                <code>&nbsp;&nbsp;keyboardType="numeric"</code><br>
                <code>&nbsp;&nbsp;placeholder="숫자 입력"</code><br>
                <code>/&gt;</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 6: 5주차 JSX & 고급 컴포넌트 -->
    <section id="cp-w5" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title"><span>📂 5주차: JSX 문법 & 고급 목록 컴포넌트 (p.1~14)</span></div>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. JSX 문법 규칙 & 조건부 렌더링 3가지</div>
        <div style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; margin-bottom: 16px;">
          • <b>단일 부모 엘리먼트</b>: return문 내부 최상위는 반드시 하나의 <code>&lt;View&gt;</code> 또는 <code>&lt;&gt;...&lt;/&gt;</code>로 감싸야 함.<br>
          • <b>JS 표현식</b>: 중괄호 <code>{변수}</code> 안에 작성.<br>
          • <b>삼항 연산자</b>: <code>{isLogin ? &lt;Text&gt;로그인됨&lt;/Text&gt; : &lt;Text&gt;로그인필요&lt;/Text&gt;}</code><br>
          • <b>단축 평가</b>: <code>{isError &amp;&amp; &lt;Text&gt;에러 발생&lt;/Text&gt;}</code> / <code>{name || '기본값'}</code>
        </div>

        <div class="concept-card-title">2. FlatList vs ScrollView 비교 (★ 서술형 빈출)</div>
        <table class="custom-table">
          <thead><tr><th>구분</th><th>ScrollView</th><th>FlatList (권장)</th></tr></thead>
          <tbody>
            <tr><td><b>렌더링 방식</b></td><td>화면 밖 데이터까지 시작 시 한꺼번에 모두 렌더링</td><td><b style="color:var(--accent);">현재 화면에 보이는 항목만 지연 렌더링(Lazy)</b></td></tr>
            <tr><td><b>메모리 효율</b></td><td>데이터가 많아지면 메모리 과부하로 앱 다운 위험</td><td>화면 밖 뷰를 언마운트하여 메모리를 재사용</td></tr>
            <tr><td><b>3대 필수 Props</b></td><td>해당 없음 (자식 요소 직접 나열)</td><td><b style="color:var(--tag-gold-ink);">1) data / 2) renderItem / 3) keyExtractor</b></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 7: 6주차 컴포넌트 응용 10대 API -->
    <section id="cp-w6" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title"><span>📂 6주차: 컴포넌트 응용 & 10대 네이티브 API (p.1~22)</span></div>
      </div>

      <div class="concept-card">
        <table class="custom-table">
          <thead><tr><th style="width: 25%;">컴포넌트 / API</th><th style="width: 40%;">핵심 기능 및 설명</th><th>시험 빈칸 / 핵심 코드</th></tr></thead>
          <tbody>
            <tr>
              <td><b>1. BackHandler</b></td>
              <td>안드로이드 하드웨어 뒤로가기 버튼 제어.<br>리스너 등록 후 클린업 필수.</td>
              <td><code>BackHandler.addEventListener('hardwareBackPress', backAction)</code><br>차단 시 <code>return true;</code> 반환</td>
            </tr>
            <tr>
              <td><b>2. DrawerLayoutAndroid</b></td>
              <td>안드로이드 슬라이드 서랍 사이드바 메뉴.</td>
              <td><code>renderNavigationView</code>, <code>drawerWidth={300}</code></td>
            </tr>
            <tr>
              <td><b>3. ToastAndroid</b></td>
              <td>화면 하단에 잠시 나타났다 사라지는 토스트 알림.</td>
              <td><code>ToastAndroid.show('메시지', ToastAndroid.SHORT)</code></td>
            </tr>
            <tr>
              <td><b>4. Animated</b></td>
              <td>부드러운 애니메이션(Fade In/Out 등) 구현.</td>
              <td><code>const fade = useRef(new Animated.Value(0)).current;</code><br><code>Animated.timing(fade, { toValue: 1, duration: 5000, useNativeDriver: true }).start();</code></td>
            </tr>
            <tr>
              <td><b>5. Dimensions</b></td>
              <td>현재 기기의 화면 해상도 측정.<br>'window'(가용영역) vs 'screen'(전체화면).</td>
              <td><code>Dimensions.get('window')</code><br><code>Dimensions.addEventListener('change', ...)</code></td>
            </tr>
            <tr>
              <td><b>6. KeyboardAvoidingView</b></td>
              <td>가상 키보드가 입력창을 가리지 않게 밀어올림.<br>바깥 터치 시 키보드 내리기 지원.</td>
              <td><code>behavior={Platform.OS === 'ios' ? 'padding' : 'height'}</code><br><code>&lt;TouchableWithoutFeedback onPress={Keyboard.dismiss}&gt;</code></td>
            </tr>
            <tr>
              <td><b>7. Linking</b></td>
              <td>외부 브라우저나 앱 URL 열기.</td>
              <td><code>Linking.openURL('https://blog.naver.com/jongsoo67')</code></td>
            </tr>
            <tr>
              <td><b>8. Modal</b></td>
              <td>팝업 모달 대화상자.</td>
              <td><code>&lt;Modal visible={open} animationType="slide" transparent={true} onRequestClose={...}&gt;</code></td>
            </tr>
            <tr>
              <td><b>9. PixelRatio</b></td>
              <td>기기 픽셀 밀도 및 폰트 스케일 계산.</td>
              <td><code>PixelRatio.get()</code>, <code>PixelRatio.getFontScale()</code></td>
            </tr>
            <tr>
              <td><b>10. RefreshControl</b></td>
              <td>ScrollView를 아래로 당겨서 새로고침.</td>
              <td><code>refreshControl={&lt;RefreshControl refreshing={refreshing} onRefresh={onRefresh} /&gt;}</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 8: 7주차 Hook 4총사 & 계산기 실습 -->
    <section id="cp-w7" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title"><span>📂 7주차: React Hook 4총사 & 계산기 실습 (교수님 강조 0순위! p.1~21)</span></div>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. Hook 4총사 비교 요약표</div>
        <table class="custom-table">
          <thead><tr><th style="width: 18%;">Hook</th><th style="width: 25%;">선언 문법</th><th style="width: 25%;">리렌더링 발생 여부</th><th>주요 용도 및 특징</th></tr></thead>
          <tbody>
            <tr>
              <td><b style="color:var(--accent);">useState</b></td>
              <td><code>const [v, setV] = useState(init);</code></td>
              <td><b style="color:var(--tag-gold-ink);">값 변경 시 리렌더링 O</b></td>
              <td>화면 UI에 반영되어야 하는 상태 관리</td>
            </tr>
            <tr>
              <td><b style="color:var(--accent);">useRef</b></td>
              <td><code>const ref = useRef(init);</code></td>
              <td><b style="color:var(--ink-muted);">값 변경 시 리렌더링 X</b></td>
              <td>렌더링 없이 값 유지(<code>.current</code>), <code>inputRef.current.focus()</code> DOM 제어</td>
            </tr>
            <tr>
              <td><b style="color:var(--accent);">useEffect</b></td>
              <td><code>useEffect(fn, [deps]);</code></td>
              <td>해당 없음 (사이드이펙트)</td>
              <td>생명주기 제어: 마운트/업데이트/언마운트 시 코드 실행</td>
            </tr>
            <tr>
              <td><b style="color:var(--accent);">useMemo</b></td>
              <td><code>const val = useMemo(fn, [deps]);</code></td>
              <td>해당 없음 (캐시반환)</td>
              <td>고비용 연산 결과 메모이제이션(캐싱)으로 불필요한 재계산 방지</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-title" style="margin-top: 24px;">2. 7주차 실습: 계산기 앱 상세조건 (교수님 강조 감점 기준)</div>
        <div style="font-family: var(--font-mono); font-size: 13.5px; background: var(--bg-surface-elevated); padding: 14px; border-radius: 4px; color: var(--ink); line-height: 1.7;">
          • 전체 배경(container): <span style="color:#f59e0b;">backgroundColor: 'black'</span><br>
          • 결과 디스플레이(displayText): <span style="color:#f59e0b;">color: 'white', fontSize: 84, textAlign: 'right'</span><br>
          • 버튼 기본 크기: <span style="color:#f59e0b;">height: 64</span><br>
          • 숫자 버튼(numberButton): <span style="color:#f59e0b;">backgroundColor: '#2f2f2f'</span><br>
          • 연산자 버튼(operatorButton): <span style="color:#f59e0b;">backgroundColor: '#F5A623'</span><br>
          • 유틸리티 버튼(utilityButton): <span style="color:#f59e0b;">backgroundColor: '#555'</span><br>
          • 버튼 글자(buttonText): <span style="color:#f59e0b;">color: 'white', fontSize: 30, fontWeight: '500'</span>
        </div>
      </div>
    </section>
  `
};

// 2. 크로스플랫폼 프로그래밍 실전 모의고사 (100점 만점 / 10문항)
window.EXAM_DATABASE.crossplatform = {
  id: "crossplatform",
  title: "크로스플랫폼 프로그래밍",
  maxScore: 100,
  exams: [
    // [회차 1] 교수님 공지 100% 반영 실전 10대 적중 모의고사
    {
      id: "cp_exam1",
      name: "제1회 중간고사 10대 적중 모의고사 (교수님 출제스포 100% 반영)",
      tag: "All 주관식 10문항 (100점)",
      questions: [
        {
          id: 1, type: "short", score: 10, origin: "Part 2 & Part 4: JSX 부모 태그 & 스타일 배열 결합",
          text: "다음 리액트 네이티브 코드에서 빈칸 (A)와 (B)에 들어갈 코드를 순서대로 쓰시오.<br><br>" +
                "• (A): JSX는 반드시 하나의 최상위 부모 엘리먼트로 감싸야 한다.<br>" +
                "• (B): styles.baseText와 styles.boldText 두 스타일을 동시에 결합 적용하는 배열 문법<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>export default function App() {\n    return (\n        &lt;(A) style={styles.container}&gt;\n            &lt;Text style={(B)}&gt;스타일 결합 테스트&lt;/Text&gt;\n        &lt;/(A)&gt;\n    );\n}</pre>",
          placeholder: "정답 입력 (예: View, [styles.baseText, styles.boldText])",
          answers: [
            "View, [styles.baseText, styles.boldText]",
            "View,[styles.baseText,styles.boldText]",
            "View, [styles.baseText,styles.boldText]"
          ],
          explanation: "<b>정답: (A) View, (B) [styles.baseText, styles.boldText]</b><br>JSX는 반드시 하나의 루트 부모 엘리먼트(&lt;View&gt; 또는 &lt;&gt;)로 감싸야 하며, 리액트 네이티브에서 여러 개의 스타일을 병합할 때는 배열 표기법 [style1, style2]를 사용합니다."
        },
        {
          id: 2, type: "essay", score: 10, origin: "Part 2: Flexbox 핵심 3대 정렬 속성의 기본값과 역할",
          text: "리액트 네이티브에서 레이아웃을 배치할 때 사용하는 Flexbox의 다음 3가지 속성의 <b>기본값(Default Value)</b>과 <b>정렬 기준</b>을 각각 명확히 서술하시오.<br><br>1) flexDirection<br>2) justifyContent<br>3) alignItems",
          placeholder: "3가지 속성의 기본값과 정렬 축을 나누어 서술하세요.",
          rubric: "1. flexDirection 기본값 column 명시 (3점)\n2. justifyContent 기본값 flex-start 및 주축(Main Axis) 정렬 명시 (3점)\n3. alignItems 기본값 stretch 및 교차축(Cross Axis) 정렬 명시 (4점)",
          sampleAnswer: "1. flexDirection: 기본값은 column. 자식들을 세로(위->아래) 방향으로 배치하는 주축(Main Axis)을 결정함.\n2. justifyContent: 기본값은 flex-start. 주축(Main Axis) 방향을 기준으로 컴포넌트들의 위치를 정렬함.\n3. alignItems: 기본값은 stretch. 주축과 수직인 교차축(Cross Axis) 방향을 기준으로 정렬함.",
          explanation: "일반 웹 CSS와 달리 모바일 환경인 리액트 네이티브는 flexDirection 기본값이 세로(column)라는 점이 가장 중요한 채점 포인트입니다."
        },
        {
          id: 3, type: "short", score: 10, origin: "Part 3: Alert 대화상자 컴포넌트 빈칸",
          text: "버튼을 클릭했을 때 다음과 같은 취소/확인 팝업 경고창을 띄우고자 한다. 빈칸 (가)에 들어갈 리액트 네이티브 내장 API 이름을 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>import { View, Button, (가) } from 'react-native';\n\nconst handlePress = () => {\n    (가).alert('로그아웃', '정말 로그아웃 하시겠습니까?', [\n        { text: '취소', style: 'cancel' },\n        { text: '확인', onPress: () => console.log('로그아웃') }\n    ]);\n};</pre>",
          placeholder: "API 이름 입력 (예: Alert)",
          answers: ["Alert", "alert"],
          explanation: "<b>정답: Alert</b><br>react-native 패키지에서 제공하는 Alert API의 Alert.alert(제목, 메시지, 버튼배열) 메서드를 사용하여 네이티브 확인/취소 팝업 대화상자를 구현합니다."
        },
        {
          id: 4, type: "essay", score: 10, origin: "Part 4: FlatList와 ScrollView의 차이점 및 사용 이유",
          text: "리액트 네이티브에서 대량의 목록 데이터를 화면에 출력할 때 ScrollView 대신 <b>FlatList를 사용하는 이유</b>를 메모리 관리 및 렌더링 동작 메커니즘 관점에서 서술하시오.",
          placeholder: "ScrollView와 FlatList의 렌더링 방식 및 메모리 차이를 서술하세요.",
          rubric: "1. ScrollView가 모든 데이터를 한꺼번에 렌더링하여 메모리 과부하를 유발함을 명시 (5점)\n2. FlatList가 화면에 보이는 항목만 지연 렌더링(Lazy)하고 화면 밖 뷰를 재사용하여 성능을 최적화함을 명시 (5점)",
          sampleAnswer: "ScrollView는 데이터가 아무리 많아도 화면에 보이지 않는 모든 항목을 시작 시 한꺼번에 메모리에 렌더링하므로 데이터가 많을수록 메모리가 급증하고 앱이 느려집니다.\n반면 FlatList는 화면에 현재 보이는 영역의 항목만 동적으로 지연 렌더링(Lazy Loading)하고 화면을 벗어난 컴포넌트는 메모리에서 언마운트하여 재사용하므로 대용량 데이터에서도 뛰어난 성능과 메모리 효율을 보장합니다.",
          explanation: "지연 렌더링(Lazy Loading)과 뷰 재활용을 통한 메모리 최적화가 핵심 키워드입니다."
        },
        {
          id: 5, type: "short", score: 10, origin: "Part 4: FlatList의 3대 필수 속성(Props)",
          text: "다음 FlatList 컴포넌트에서 빈칸 (1), (2), (3)에 들어갈 필수 Props 명칭을 순서대로 쉼표로 구분하여 작성하시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;FlatList\n    (1)={USERS}\n    (2)={(item) =&gt; item.id}\n    (3)={({ item }) =&gt; &lt;Text&gt;{item.name}&lt;/Text&gt;}\n/&gt;</pre>",
          placeholder: "순서대로 입력 (예: data, keyExtractor, renderItem)",
          answers: [
            "data, keyExtractor, renderItem",
            "data,keyExtractor,renderItem",
            "data, keyExtractor, renderitem"
          ],
          explanation: "<b>정답: data, keyExtractor, renderItem</b><br>FlatList는 1) 데이터 배열을 받는 data, 2) 고유 키를 추출하는 keyExtractor, 3) 항목을 화면에 그리는 renderItem의 3대 필수 속성이 반드시 지정되어야 합니다."
        },
        {
          id: 6, type: "essay", score: 10, origin: "Part 6: useState와 useRef의 렌더링 관점 결정적 차이",
          text: "리액트 Hook인 <b>useState</b>와 <b>useRef</b>의 가장 결정적인 차이점을 <b>컴포넌트 리렌더링(Re-rendering) 발생 여부</b>와 <b>값 유지</b> 측면에서 비교하여 설명하시오.",
          placeholder: "리렌더링 발생 여부 및 값 유지 관점에서 서술하세요.",
          rubric: "1. useState는 값 변경(세터 호출) 시 컴포넌트가 다시 렌더링됨을 명시 (5점)\n2. useRef는 .current 값을 변경해도 컴포넌트가 다시 렌더링되지 않고 값을 유지함을 명시 (5점)",
          sampleAnswer: "useState는 세터 함수를 호출하여 상태값을 변경하면 컴포넌트가 자동으로 다시 렌더링(Re-rendering)되어 화면 UI를 갱신합니다.\n반면 useRef는 .current 프로퍼티의 값을 변경하더라도 컴포넌트가 다시 렌더링되지 않으며, 컴포넌트가 다른 이유로 리렌더링되더라도 저장된 값을 그대로 유지합니다.",
          explanation: "값 변경이 화면 리렌더링을 트리거하는지 여부가 핵심 차이점입니다."
        },
        {
          id: 7, type: "short", score: 10, origin: "Part 6: useState, useRef, 일반 변수 실행 결과 예측",
          text: "다음 컴포넌트에서 사용자가 <b>[+1 증가]</b> 버튼을 <b>3번 연속 클릭</b>한 후, <b>[화면 갱신]</b> 버튼을 <b>1번 클릭</b>하였다.<br>화면에 최종적으로 출력되는 <b>State, Ref, Var</b>의 값을 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>export default function CounterTest() {\n    const [render, setRender] = useState(false);\n    const [countState, setCountState] = useState(0);\n    const countRef = useRef(0);\n    let countVar = 0;\n\n    const handleIncrease = () => {\n        countRef.current += 1;\n        countVar += 1;\n    };\n    const handleReRender = () => {\n        setRender(!render);\n    };\n    return (\n        &lt;View&gt;\n            &lt;Text&gt;State: {countState}&lt;/Text&gt;\n            &lt;Text&gt;Ref: {countRef.current}&lt;/Text&gt;\n            &lt;Text&gt;Var: {countVar}&lt;/Text&gt;\n            &lt;Button title=\"+1 증가\" onPress={handleIncrease} /&gt;\n            &lt;Button title=\"화면 갱신\" onPress={handleReRender} /&gt;\n        &lt;/View&gt;\n    );\n}</pre>",
          placeholder: "순서대로 정수 입력 (예: 0, 3, 0)",
          answers: ["0, 3, 0", "0,3,0", "State: 0, Ref: 3, Var: 0"],
          explanation: "<b>정답: 0, 3, 0</b><br>1) [+1 증가] 3번 누르는 동안: countRef.current는 3, countVar는 3이 되지만 리렌더링이 발생하지 않음.<br>2) [화면 갱신]을 1번 누르면: setRender로 인해 컴포넌트가 리렌더링됨.<br>• countState: 변경된 적 없으므로 초기값 0.<br>• countRef.current: 리렌더링되어도 값이 유지되므로 3.<br>• countVar: 일반 로컬 변수이므로 함수 재실행 시 let countVar = 0으로 초기화되어 0."
        },
        {
          id: 8, type: "short", score: 10, origin: "Part 6: useEffect 의존성 배열에 따른 콘솔 출력 순서",
          text: "다음 컴포넌트가 화면에 <b>최초 마운트(처음 로드)</b>된 직후 콘솔(Console)에 출력되는 로그 기호(A, B, C)를 실행 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>export default function EffectTest() {\n    const [count, setCount] = useState(0);\n\n    useEffect(() => { console.log('A'); });\n    useEffect(() => { console.log('B'); }, []);\n    useEffect(() => { console.log('C'); }, [count]);\n\n    return &lt;View&gt;&lt;Text&gt;{count}&lt;/Text&gt;&lt;/View&gt;;\n}</pre>",
          placeholder: "출력 순서 입력 (예: A, B, C)",
          answers: ["A, B, C", "A,B,C", "A B C"],
          explanation: "<b>정답: A, B, C</b><br>컴포넌트가 최초 마운트될 때 모든 useEffect는 의존성 배열의 유무와 관계없이 무조건 최소 1회 실행됩니다. 따라서 코드에 작성된 순서대로 A, B, C가 차례대로 출력됩니다. (만약 이후 count 값이 변경되면 매번 실행되는 A와 count를 의존하는 C만 실행되고, 빈 배열을 가진 B는 실행되지 않습니다.)"
        },
        {
          id: 9, type: "essay", score: 10, origin: "Part 6: useMemo의 목적 및 의존성 배열 동작 메커니즘",
          text: "React Hook인 <b>useMemo</b>를 사용하는 목적을 설명하고, 컴포넌트 내의 다른 상태(state)가 변경되어 화면이 리렌더링될 때 useMemo의 의존성 배열에 등록된 값이 바뀌지 않았다면 내부 계산 함수가 다시 실행되는지 여부와 그 이유를 서술하시오.",
          placeholder: "useMemo의 목적과 의존성 배열 미변경 시의 동작을 서술하세요.",
          rubric: "1. 고비용 연산 결과 메모이제이션(캐싱)을 통한 불필요한 재계산 방지 목적 명시 (5점)\n2. 의존성 배열 값이 변경되지 않으면 재계산하지 않고 기존 캐시값을 그대로 반환함을 명시 (5점)",
          sampleAnswer: "useMemo는 복잡하거나 비용이 큰 연산 결과를 메모리에 캐싱(메모이제이션)하여 렌더링 성능을 최적화하기 위해 사용합니다.\n의존성 배열에 등록된 값이 변경되지 않았다면 컴포넌트가 다른 이유로 리렌더링되더라도 내부 연산 함수를 다시 실행하지 않고 이전에 기억해 둔 캐시 결과값을 그대로 재사용합니다.",
          explanation: "불필요한 재계산 방지 및 이전 캐시값 재사용이 핵심 키워드입니다."
        },
        {
          id: 10, type: "short", score: 10, origin: "Part 6: A × B 계산기 및 useRef 포커스 제어 코드 완성",
          text: "두 숫자 A와 B를 입력받아 곱한 결과를 상태에 저장하고, 계산 후 첫 번째 입력창(A)으로 커서를 자동 이동시키고자 한다. 빈칸 (1), (2), (3)에 들어갈 코드를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>export default function Calc() {\n    const [a, setA] = useState('');\n    const [b, setB] = useState('');\n    const [result, setResult] = useState(null);\n    const inputRef = (1); // ref 생성\n\n    const multiply = () => {\n        setResult(parseFloat(a) * parseFloat(b));\n        (2); // inputRef를 통해 첫 번째 TextInput으로 포커스 이동\n    };\n    return (\n        &lt;View&gt;\n            &lt;TextInput (3)={inputRef} value={a} onChangeText={setA} /&gt;\n            &lt;TextInput value={b} onChangeText={setB} /&gt;\n            &lt;Button title=\"계산\" onPress={multiply} /&gt;\n        &lt;/View&gt;\n    );\n}</pre>",
          placeholder: "순서대로 입력 (예: useRef(null), inputRef.current.focus(), ref)",
          answers: [
            "useRef(null), inputRef.current.focus(), ref",
            "useRef(null),inputRef.current.focus(),ref",
            "useRef(null), inputRef.current?.focus(), ref",
            "useRef(null),inputRef.current?.focus(),ref"
          ],
          explanation: "<b>정답: (1) useRef(null), (2) inputRef.current.focus(), (3) ref</b><br>DOM/컴포넌트 인스턴스를 제어하기 위해 useRef(null)로 ref를 생성하고, TextInput에 ref={inputRef}로 연결한 후 inputRef.current.focus()를 호출하여 포커스를 이동시킵니다."
        }
      ]
    },

    // [회차 2] 주차별 핵심 코드 빈칸 & 단답형 스피드 체크 10선
    {
      id: "cp_exam2",
      name: "제2회 주차별 핵심 코드 빈칸 & 단답형 스피드 체크 (10문항)",
      tag: "코드 빈칸 & 1초 단답 10선 (100점)",
      questions: [
        {
          id: 1, type: "short", score: 10, origin: "2주차 교안 p.20: JDK 설치",
          text: "2주차 교안 슬라이드에서 안드로이드 개발 환경 구축을 위해 명시적으로 설치를 권장한 자바 개발 키트(JDK)의 버전은 무엇인가?",
          placeholder: "JDK 버전 입력 (예: JDK 21)",
          answers: ["JDK 21", "JDK21", "21", "java 21"],
          explanation: "교안 2주차 20페이지에 '주의: JDK 21 설치'라고 명시되어 있습니다."
        },
        {
          id: 2, type: "short", score: 10, origin: "3주차 교안 p.5: Flexbox 주축 기본값",
          text: "React Native의 flexDirection 속성에서 컴포넌트들을 위에서 아래(세로) 방향으로 배치하는 기본값은 무엇인가?",
          placeholder: "속성값 입력 (예: column)",
          answers: ["column", "Column"],
          explanation: "React Native의 flexDirection 기본값은 column입니다."
        },
        {
          id: 3, type: "short", score: 10, origin: "4주차 교안 p.5: Text 중첩",
          text: "Text 컴포넌트 안에 또 다른 Text 컴포넌트를 중첩(Nesting)했을 때, 안쪽 텍스트가 바깥쪽 텍스트로부터 물려받는 특성은 무엇인가?",
          placeholder: "특성 단어 입력 (예: 스타일 상속)",
          answers: ["스타일 상속", "상속", "스타일상속", "style inheritance"],
          explanation: "중첩된 Text 컴포넌트는 부모 Text 컴포넌트의 폰트 크기, 패밀리 등 스타일을 상속받습니다."
        },
        {
          id: 4, type: "short", score: 10, origin: "4주차 교안 p.15: TextInput 속성",
          text: "TextInput에서 비밀번호 입력창처럼 사용자가 입력하는 글자를 별표(***)나 점으로 숨겨주는 속성(Prop)은?",
          placeholder: "속성명 입력 (예: secureTextEntry)",
          answers: ["secureTextEntry", "secureTextEntry={true}"],
          explanation: "secureTextEntry={true} 속성을 적용하면 텍스트가 마스킹 처리됩니다."
        },
        {
          id: 5, type: "short", score: 10, origin: "5주차 교안 p.10: Image 컴포넌트",
          text: "웹 URL에서 이미지를 불러오는 원격 이미지(&lt;Image source={{ uri: '...' }} /&gt;)를 화면에 렌더링하기 위해 스타일에서 <b>반드시 명시해야 하는 2가지 속성</b>은?",
          placeholder: "2가지 속성 입력 (예: width, height)",
          answers: ["width, height", "width,height", "가로, 세로", "가로,세로"],
          explanation: "로컬 require 이미지와 달리 원격 네트워크 이미지는 크기를 자동으로 계산할 수 없으므로 반드시 width와 height를 명시해야 합니다."
        },
        {
          id: 6, type: "short", score: 10, origin: "6주차 교안 p.4: BackHandler",
          text: "안드로이드의 BackHandler 이벤트 리스너 함수에서 시스템의 기본 뒤로가기 동작을 차단하고 앱 종료 확인 Alert 등 커스텀 로직을 수행하려면 반환해야 하는 boolean 값은?",
          placeholder: "boolean 값 입력 (예: true)",
          answers: ["true", "True", "TRUE"],
          explanation: "hardwareBackPress 리스너에서 true를 반환하면 시스템의 기본 뒤로가기 동작이 차단됩니다."
        },
        {
          id: 7, type: "short", score: 10, origin: "6주차 교안 p.11: Dimensions",
          text: "현재 기기의 화면 크기를 가져올 때, 상태바(Status Bar)나 내비게이션 바를 제외한 실제 앱 가용 화면 영역의 크기를 반환받기 위해 Dimensions.get() 메서드의 인자로 전달해야 하는 문자열은?",
          placeholder: "인자 문자열 입력 (예: window)",
          answers: ["window", "'window'", "\"window\""],
          explanation: "Dimensions.get('window')는 가용 화면 크기를, Dimensions.get('screen')은 기기 물리적 전체 화면 크기를 반환합니다."
        },
        {
          id: 8, type: "short", score: 10, origin: "6주차 교안 p.14: KeyboardDismiss",
          text: "화면의 빈 영역을 터치했을 때 열려 있는 가상 키보드를 닫기 위해 TouchableWithoutFeedback의 onPress에 연결하는 API 메서드는?",
          placeholder: "메서드 입력 (예: Keyboard.dismiss)",
          answers: ["Keyboard.dismiss", "Keyboard.dismiss()", "dismiss"],
          explanation: "Keyboard.dismiss 메서드를 호출하면 활성화된 가상 키보드가 닫힙니다."
        },
        {
          id: 9, type: "short", score: 10, origin: "7주차 교안 p.3: Hook 규칙",
          text: "React Hook은 if 조건문이나 for 반복문 내부에서 호출할 수 없다. Hook은 함수형 컴포넌트의 어느 위치에서만 호출해야 하는가?",
          placeholder: "호출 위치 입력 (예: 최상위)",
          answers: ["최상위", "최상위(Top level)", "Top level", "top-level", "컴포넌트 최상위"],
          explanation: "Hook은 항상 React 함수형 컴포넌트의 최상위(Top level)에서만 호출되어야 매 렌더링마다 일관된 순서로 실행됩니다."
        },
        {
          id: 10, type: "short", score: 10, origin: "7주차 실습 교안 p.19: 계산기 상세조건",
          text: "7주차 계산기 실습 교안의 상세조건에서 명시된 <b>숫자 버튼(number Button)의 배경색(backgroundColor) Hex 코드</b>는 무엇인가?",
          placeholder: "Hex 색상코드 입력 (예: #2f2f2f)",
          answers: ["#2f2f2f", "2f2f2f", "#2F2F2F"],
          explanation: "교안 7주차 19페이지 실습 상세조건: number Button backgroundColor: #2f2f2f, operatorButton: #F5A623, utilityButton: #555"
        }
      ]
    },

    // [회차 3] React Hook & 컴포넌트 라이프사이클 심화 모의고사 (10문항)
    {
      id: "cp_exam3",
      name: "제3회 React Hook & 컴포넌트 라이프사이클 심화 모의고사 (10문항)",
      tag: "All 주관식 10문항 (100점)",
      questions: [
        {
          id: 1, type: "short", score: 10, origin: "7주차 교안 p.5: useEffect 의존성 배열",
          text: "리액트의 useEffect Hook에서 두 번째 인자인 의존성 배열(Dependency Array)에 빈 배열(<code>[]</code>)을 전달했을 때 effect 함수가 실행되는 시점은 언제인가?",
          placeholder: "실행 시점 입력 (예: 마운트 시 1회)",
          answers: ["마운트 시 1회", "마운트 시 1회만", "마운트 시", "컴포넌트 마운트 시 1회", "최초 렌더링 시 1회", "마운트", "최초 렌더링"],
          explanation: "<b>정답: 마운트 시 1회 (최초 렌더링 완료 직후 1회만 실행)</b><br>의존성 배열을 생략하면 매 렌더링마다 실행되고, 빈 배열 []을 넘기면 컴포넌트가 처음 화면에 나타나는 마운트(Mount) 시점에 단 한 번만 실행됩니다."
        },
        {
          id: 2, type: "essay", score: 10, origin: "7주차 교안 p.7: useEffect 클린업(Cleanup) 함수",
          text: "useEffect 내부에서 함수를 반환(<code>return () => { ... }</code>)하는 <b>클린업(Cleanup) 함수</b>의 주된 목적과 이 함수가 실제로 실행되는 <b>2가지 시점</b>을 서술하시오.",
          placeholder: "클린업 함수의 목적과 실행되는 2가지 시점을 서술하세요.",
          rubric: "1. 타이머 해제(clearInterval), 이벤트 리스너 제거, 구독 해제 등 메모리 누수 방지 목적 명시 (4점)\n2. 컴포넌트가 화면에서 사라지는 언마운트(Unmount) 시점 명시 (3점)\n3. 의존성 값이 바뀌어 다음 effect 함수가 실행되기 직전 시점 명시 (3점)",
          sampleAnswer: "목적: 컴포넌트 언마운트 시 타이머 해제(clearInterval), 이벤트 리스너 제거, 네트워크 구독 취소 등을 수행하여 메모리 누수(Memory Leak)를 방지하는 정리 작업을 수행한다.\n실행 시점: 1) 컴포넌트가 언마운트(Unmount)되어 화면에서 제거될 때, 2) 의존성 배열의 값이 변경되어 다음 effect가 실행되기 바로 직전.",
          explanation: "클린업 함수는 메모리 누수를 막기 위한 필수적인 정리 루틴이며, 언마운트 시점뿐 아니라 의존성 변경으로 새 effect가 돌기 직전에도 이전 effect를 정리하기 위해 실행됩니다."
        },
        {
          id: 3, type: "short", score: 10, origin: "7주차 교안 p.4: useState 함수형 업데이트",
          text: "useState 상태 변경 시 비동기 일괄 처리(Batching)로 인한 값 덮어쓰기 오류를 방지하고 최신 이전 상태값을 보장받기 위해 사용하는 빈칸 (A)의 함수형 업데이트 코드를 작성하시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>const [count, setCount] = useState(0);\n\nconst handleIncrement = () => {\n    setCount((A) => (A) + 1);\n};</pre>",
          placeholder: "콜백 매개변수 표현 (예: prev, prevCount, prev => prev + 1)",
          answers: ["prev", "prevCount", "prev => prev + 1", "(prev) => prev + 1", "count => count + 1"],
          explanation: "<b>정답: prev (또는 prevCount)</b><br>setState에 값을 직접 넘기지 않고 콜백 함수 <code>prev => prev + 1</code>를 넘기는 함수형 업데이트를 사용하면 항상 가장 최신의 상태값을 기반으로 안전하게 갱신됩니다."
        },
        {
          id: 4, type: "essay", score: 10, origin: "7주차 교안 p.10: useMemo vs useCallback 차이",
          text: "React의 성능 최적화 Hook인 <b>useMemo</b>와 <b>useCallback</b>의 <b>공통적인 목적</b>을 적고, 두 Hook이 <b>캐싱(메모이제이션)하는 대상의 결정적 차이점</b>을 비교 설명하시오.",
          placeholder: "공통 목적과 캐싱 대상의 차이점을 서술하세요.",
          rubric: "1. 공통 목적: 불필요한 재계산/재생성을 방지하는 메모이제이션(성능 최적화) 명시 (3점)\n2. useMemo 캐싱 대상: 함수의 '연산 결과값(리턴값)'을 캐싱함을 명시 (3.5점)\n3. useCallback 캐싱 대상: '함수 인스턴스(함수 자체)'를 캐싱하여 자식 컴포넌트의 불필요한 리렌더링을 방지함을 명시 (3.5점)",
          sampleAnswer: "공통 목적: 의존성 배열의 값이 변경되지 않는 한 이전 결과를 재사용하여 불필요한 연산과 리렌더링을 방지하는 메모이제이션 최적화 Hook이다.\n차이점: useMemo는 복잡한 함수의 '연산 결과값(반환값)'을 캐싱하여 재계산을 방지하고, useCallback은 '함수 인스턴스 자체'를 캐싱하여 컴포넌트가 리렌더링될 때 동일한 함수 참조를 유지함으로써 자식 컴포넌트의 불필요한 리렌더링을 방지한다.",
          explanation: "useMemo는 값(Value)을, useCallback은 함수(Function) 참조를 캐싱한다는 점이 핵심입니다."
        },
        {
          id: 5, type: "short", score: 10, origin: "7주차 교안 p.12: Custom Hook 네이밍 규칙",
          text: "개발자가 직접 비즈니스 로직을 분리하여 재사용하기 위해 만드는 <b>사용자 정의 Hook(Custom Hook)</b>의 함수 이름 맨 앞에 React 규칙상 반드시 붙여야 하는 표준 접두어(Prefix)는 무엇인가?",
          placeholder: "접두어 입력 (예: use)",
          answers: ["use", "use-", "useXxx"],
          explanation: "<b>정답: use</b><br>React의 린터와 엔진은 'use'로 시작하는 함수(예: useCounter, useAuth)만을 커스텀 훅으로 인식하고 Hook 호출 규칙을 강제 검증합니다."
        },
        {
          id: 6, type: "short", score: 10, origin: "5주차 교안 p.14: Modal 컴포넌트 속성",
          text: "리액트 네이티브의 Modal 컴포넌트에서 모달 창의 화면 표시 여부를 제어하는 필수 boolean 속성 (1)과, 안드로이드 기기의 물리적 뒤로가기 버튼을 눌렀을 때 호출되는 필수 콜백 함수 속성 (2)의 이름을 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;Modal\n    (1)={isModalVisible}\n    (2)={() =&gt; setIsModalVisible(false)}\n    animationType=\"slide\"\n&gt;</pre>",
          placeholder: "순서대로 입력 (예: visible, onRequestClose)",
          answers: ["visible, onRequestClose", "visible,onRequestClose", "visible, onrequestclose"],
          explanation: "<b>정답: visible, onRequestClose</b><br>Modal은 화면 표시 여부를 결정하는 visible={boolean}과 안드로이드 하드웨어 뒤로가기 처리를 위한 onRequestClose={callback}이 필수 속성입니다."
        },
        {
          id: 7, type: "essay", score: 10, origin: "7주차 교안 p.4: 상태 불변성(Immutability)",
          text: "리액트에서 배열이나 객체 상태를 변경할 때 <code>items.push(newItem)</code>과 같이 기존 객체를 직접 수정하지 않고 <code>setItems([...items, newItem])</code>처럼 <b>새로운 객체로 복사하여 상태를 갱신(불변성 유지)해야 하는 이유</b>를 렌더링 감지 원리 관점에서 서술하시오.",
          placeholder: "얕은 비교와 리렌더링 감지 메커니즘을 서술하세요.",
          rubric: "1. 리액트는 상태 변경 여부를 참조 주소값(Shallow Compare, 얕은 비교)으로 감지함을 명시 (5점)\n2. 직접 수정 시 메모리 주소가 동일하여 변경을 감지하지 못하고 화면 리렌더링이 일어나지 않음을 명시 (5점)",
          sampleAnswer: "리액트는 성능 최적화를 위해 상태 객체의 내부 속성을 깊게 비교하지 않고, 객체의 메모리 참조 주소값만 비교하는 '얕은 비교(Shallow Compare)'를 수행합니다.\n따라서 items.push()처럼 기존 배열을 직접 변경하면 내부 데이터는 바뀌어도 메모리 주소는 동일하므로 리액트는 상태가 바뀌지 않았다고 판단하여 화면을 리렌더링하지 않습니다. 스프레드 연산자([...items, newItem])로 새로운 배열 참조를 생성해야 리액트가 변경을 감지하고 정상적으로 리렌더링을 수행합니다.",
          explanation: "불변성(Immutability) 유지는 리액트의 참조 주소 기반 얕은 비교 메커니즘에서 화면 리렌더링을 트리거하기 위한 핵심 규칙입니다."
        },
        {
          id: 8, type: "short", score: 10, origin: "6주차 교안 p.7: Platform.select 구문",
          text: "운영체제에 따라 다른 스타일 수치를 적용하고자 한다. iOS에서는 상단 여백을 20, 안드로이드에서는 0을 적용하기 위해 빈칸에 들어갈 리액트 네이티브 API 코드를 완성하시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>import { StyleSheet, Platform } from 'react-native';\n\nconst styles = StyleSheet.create({\n    container: {\n        marginTop: (빈칸)({\n            ios: 20,\n            android: 0,\n        }),\n    },\n});</pre>",
          placeholder: "API 코드 입력 (예: Platform.select)",
          answers: ["Platform.select", "Platform.select()", "platform.select"],
          explanation: "<b>정답: Platform.select</b><br>Platform.select({ ios: ..., android: ... }) 메서드를 활용하면 플랫폼별로 객체 키를 매핑하여 깔끔하게 분기 처리할 수 있습니다."
        },
        {
          id: 9, type: "short", score: 10, origin: "6주차 교안 p.12: useWindowDimensions Hook",
          text: "Dimensions.get('window')와 달리, 화면 회전(가로/세로 모드)이나 분할 화면 등으로 화면 크기가 변경될 때 이벤트 리스너를 수동 등록하지 않아도 컴포넌트 안에서 <b>자동으로 최신 너비와 높이를 반영하여 리렌더링해주는 리액트 네이티브 내장 Hook</b>의 이름은?",
          placeholder: "Hook 이름 입력 (예: useWindowDimensions)",
          answers: ["useWindowDimensions", "useWindowDimensions()"],
          explanation: "<b>정답: useWindowDimensions</b><br>useWindowDimensions Hook은 화면의 width, height, scale, fontScale을 반환하며 화면 크기 변경 시 컴포넌트를 자동으로 리렌더링해 줍니다."
        },
        {
          id: 10, type: "short", score: 10, origin: "6주차 교안 p.15: KeyboardAvoidingView",
          text: "가상 키보드가 활성화되었을 때 입력창(TextInput)이 키보드에 가려지지 않도록 화면을 자동으로 밀어 올려주는 리액트 네이티브 내장 컴포넌트 (1)의 이름과, iOS 환경에서 가장 보편적으로 권장되는 behavior 속성값 (2)를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;(1) behavior=\"(2)\" style={{ flex: 1 }}&gt;\n    &lt;TextInput placeholder=\"메시지 입력\" /&gt;\n&lt;/(1)&gt;</pre>",
          placeholder: "순서대로 입력 (예: KeyboardAvoidingView, padding)",
          answers: [
            "KeyboardAvoidingView, padding",
            "KeyboardAvoidingView,padding",
            "KeyboardAvoidingView, 'padding'",
            "KeyboardAvoidingView, \"padding\""
          ],
          explanation: "<b>정답: KeyboardAvoidingView, padding</b><br>KeyboardAvoidingView 컴포넌트는 키보드가 화면을 가리지 않도록 위치를 조정해주며, iOS에서는 behavior='padding' 속성이 가장 자연스럽게 동작합니다."
        }
      ]
    },

    // [회차 4] 중간고사 전범위 파이널 실전 모의고사 (10문항)
    {
      id: "cp_exam4",
      name: "제4회 중간고사 전범위 파이널 실전 모의고사 (10문항)",
      tag: "All 주관식 10문항 (100점)",
      questions: [
        {
          id: 1, type: "short", score: 10, origin: "2주차 교안 p.32: App.js 모듈 내보내기",
          text: "리액트 네이티브 프로젝트의 루트 파일인 App.js에서 정의한 함수형 컴포넌트를 Metro 번들러와 네이티브 런타임이 진입점으로 읽어들일 수 있도록 내보내는 자바스크립트 표준 키워드 2단어를 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>(빈칸) function App() {\n    return &lt;View&gt;&lt;Text&gt;Hello Expo&lt;/Text&gt;&lt;/View&gt;;\n}</pre>",
          placeholder: "2단어 입력 (예: export default)",
          answers: ["export default", "export default "],
          explanation: "<b>정답: export default</b><br>App.js의 메인 컴포넌트는 export default 구문을 통해 기본 내보내기되어야 런타임 진입점으로 등록됩니다."
        },
        {
          id: 2, type: "essay", score: 10, origin: "4주차 교안 p.3: Props vs State 완벽 비교",
          text: "리액트 및 리액트 네이티브에서 컴포넌트의 데이터를 다루는 <b>Props</b>와 <b>State</b>의 차이점을 <b>1) 데이터의 소유 및 전달 주체</b>, <b>2) 컴포넌트 내부에서의 값 수정 가능 여부(가변성)</b>, <b>3) 변경 시 리렌더링 발생 여부</b>의 3가지 관점에서 비교 서술하시오.",
          placeholder: "Props와 State의 3대 차이점을 서술하세요.",
          rubric: "1. 소유/전달: Props는 부모가 자식에게 전달, State는 컴포넌트 내부에서 자체 생성/관리 명시 (3점)\n2. 가변성: Props는 읽기 전용(불변), State는 setState를 통해 컴포넌트 내부에서 변경 가능 명시 (3.5점)\n3. 리렌더링: Props 변경(부모 전달 시) 및 State 변경 시 해당 컴포넌트 리렌더링 트리거 명시 (3.5점)",
          sampleAnswer: "1. 데이터 소유/전달: Props는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 외부 데이터이며, State는 컴포넌트 내부에서 직접 선언하고 관리하는 자체 데이터이다.\n2. 가변성: Props는 자식 컴포넌트 입장에서 읽기 전용(Read-only, 불변)이므로 직접 수정할 수 없고, State는 setState 함수를 통해 컴포넌트 내부에서 능동적으로 값을 수정할 수 있다.\n3. 리렌더링: State가 변경되거나 부모로부터 새로운 Props를 전달받으면 컴포넌트의 화면(UI)이 자동으로 리렌더링된다.",
          explanation: "Props는 외부에서 주입되는 읽기 전용 데이터, State는 내부에서 능동적으로 관리하고 화면 갱신을 주도하는 가변 데이터입니다."
        },
        {
          id: 3, type: "short", score: 10, origin: "3주차 교안 p.4: StyleSheet.create 장점",
          text: "인라인 스타일(<code>style={{ ... }}</code>) 대신 <code>StyleSheet.create({ ... })</code>를 사용하는 가장 핵심적인 성능상 이점은 매 렌더링마다 새로운 자바스크립트 객체를 생성하지 않고, 스타일 객체를 등록하여 네이티브 브릿지(Bridge)로 전달할 때 무엇(정수형 식별자)으로 참조를 전달하기 때문인가?",
          placeholder: "이점 키워드 입력 (예: ID 참조, 캐싱, 객체 재사용)",
          answers: ["ID", "ID 참조", "id", "캐싱", "스타일 ID", "객체 재사용"],
          explanation: "<b>정답: ID (또는 ID 참조, 캐싱)</b><br>StyleSheet.create는 정의된 스타일에 고유 정수 ID를 부여하고 캐싱하여 네이티브 브릿지로 객체 전체가 아닌 ID 참조만 전달하므로 메모리와 통신 비용을 대폭 절감합니다."
        },
        {
          id: 4, type: "short", score: 10, origin: "3주차 교안 p.12: alignSelf 속성",
          text: "Flexbox 레이아웃에서 부모 컨테이너에 지정된 <code>alignItems</code> 교차축 정렬 설정을 무시하고, <b>특정 단일 자식 컴포넌트 혼자서만 다른 정렬(예: center, flex-end)을 지정</b>하고자 할 때 해당 자식의 스타일에 부여하는 속성은 무엇인가?",
          placeholder: "속성명 입력 (예: alignSelf)",
          answers: ["alignSelf", "align-self"],
          explanation: "<b>정답: alignSelf</b><br>alignItems는 부모가 모든 자식의 교차축 정렬을 결정하지만, 특정 자식에서 alignSelf를 선언하면 부모의 설정을 덮어쓰고 개별 정렬을 적용할 수 있습니다."
        },
        {
          id: 5, type: "essay", score: 10, origin: "4주차 교안 p.14: 제어 컴포넌트(Controlled Component)",
          text: "리액트 네이티브의 TextInput에서 사용자가 키보드로 글자를 입력할 때 리액트의 상태(State)와 완벽히 동기화되는 <b>제어 컴포넌트(Controlled Component)</b>를 구성하는 메커니즘을 <code>value</code>와 <code>onChangeText</code> 속성의 상호작용 관점에서 서술하시오.",
          placeholder: "value와 onChangeText의 동작 상호작용을 서술하세요.",
          rubric: "1. TextInput의 value 속성에 state 변수를 바인딩하여 단일 진실 공급원(Single Source of Truth)을 유지함을 명시 (5점)\n2. 키보드 입력 발생 시 onChangeText 콜백이 실행되어 setState로 상태를 갱신하고, 변경된 상태가 다시 value로 반영되는 단방향 흐름을 명시 (5점)",
          sampleAnswer: "제어 컴포넌트는 TextInput의 value 속성에 컴포넌트의 State 값을 직접 연결(바인딩)하여 화면에 표시되는 텍스트를 리액트 상태로 완벽히 통제하는 패턴입니다.\n사용자가 키보드를 타이핑하면 TextInput의 onChangeText 이벤트 콜백이 호출되어 입력된 최신 문자열을 매개변수로 받아 setState 함수를 실행합니다. 상태가 갱신되면 컴포넌트가 리렌더링되면서 갱신된 state 값이 다시 TextInput의 value로 반영되는 선순환 단방향 데이터 흐름을 갖습니다.",
          explanation: "value={text}와 onChangeText={setText}의 유기적 결합을 통해 React State가 입력 필드의 단일 진실 공급원이 됩니다."
        },
        {
          id: 6, type: "short", score: 10, origin: "7주차 실습 교안 p.19: 계산기 상세조건 스포",
          text: "7주차 계산기 실습 교안의 상세조건에서 명시된 <b>연산자 버튼(+, -, ×, ÷)의 배경색(backgroundColor) Hex 코드</b> (1)과 <b>결과 출력 텍스트의 글자 크기(fontSize)</b> (2)를 순서대로 쓰시오.",
          placeholder: "순서대로 입력 (예: #F5A623, 84)",
          answers: [
            "#F5A623, 84",
            "#f5a623, 84",
            "#F5A623,84",
            "#f5a623,84"
          ],
          explanation: "<b>정답: #F5A623, 84</b><br>교안 7주차 19페이지 계산기 실습 상세조건: operatorButton backgroundColor: #F5A623, resultText fontSize: 84, numberButton backgroundColor: #2f2f2f, utilityButton: #555"
        },
        {
          id: 7, type: "short", score: 10, origin: "4주차 교안 p.5: 스타일 상속 유일 컴포넌트",
          text: "일반적인 리액트 네이티브 컴포넌트들은 웹 CSS와 달리 부모의 스타일을 자식에게 상속하지 않는다. 하지만 컴포넌트 내부에 동일한 컴포넌트를 <b>중첩(Nesting)했을 때 예외적으로 글자 폰트, 색상 등의 스타일을 자식에게 상속해주는 유일한 내장 컴포넌트</b>의 이름은?",
          placeholder: "컴포넌트 이름 입력 (예: Text)",
          answers: ["Text", "<Text>", "<Text></Text>"],
          explanation: "<b>정답: Text</b><br>리액트 네이티브에서는 원칙적으로 스타일 상속이 지원되지 않으나, &lt;Text&gt; 태그 내부에 또 다른 &lt;Text&gt;를 중첩한 경우에 한하여 폰트 계열 및 색상 스타일이 부모로부터 상속됩니다."
        },
        {
          id: 8, type: "essay", score: 10, origin: "교수님 출제스포: A × B 곱셈기 컴포넌트 작성",
          text: "두 개의 TextInput에 각각 숫자 A와 숫자 B를 입력받고, Button을 클릭했을 때 두 수의 곱(A × B)을 계산하여 Text 컴포넌트에 출력하는 리액트 네이티브 컴포넌트 코드를 작성하시오.<br>(단, useState를 사용하여 상태를 선언하고 곱셈 계산 로직을 포함할 것)",
          placeholder: "함수형 컴포넌트 전체 또는 핵심 상태 선언 및 계산 로직을 작성하세요.",
          rubric: "1. useState를 활용하여 두 입력값(numA, numB)과 결과값(result) 상태 선언 (3점)\n2. 버튼 클릭 핸들러에서 parseFloat 또는 Number()로 형변환 후 곱셈 수행 및 결과 상태 갱신 (4점)\n3. TextInput 2개와 Button(onPress), Text(결과 출력)를 JSX로 정상 구성 (3점)",
          sampleAnswer: "import React, { useState } from 'react';\nimport { View, TextInput, Button, Text } from 'react-native';\n\nexport default function Multiplier() {\n    const [numA, setNumA] = useState('');\n    const [numB, setNumB] = useState('');\n    const [result, setResult] = useState(0);\n\n    const handleMultiply = () => {\n        const a = parseFloat(numA) || 0;\n        const b = parseFloat(numB) || 0;\n        setResult(a * b);\n    };\n\n    return (\n        <View style={{ padding: 20 }}>\n            <TextInput value={numA} onChangeText={setNumA} keyboardType=\"numeric\" placeholder=\"숫자 A\" />\n            <TextInput value={numB} onChangeText={setNumB} keyboardType=\"numeric\" placeholder=\"숫자 B\" />\n            <Button title=\"곱하기 계산\" onPress={handleMultiply} />\n            <Text style={{ fontSize: 24, marginTop: 10 }}>결과: {result}</Text>\n        </View>\n    );\n}",
          explanation: "교수님이 총정리에서 직접 스포한 곱셈기 문제입니다. 문자열로 들어오는 TextInput의 값을 숫자로 변환(parseFloat/Number)하여 곱한 뒤 상태에 저장하는 로직이 핵심입니다."
        },
        {
          id: 9, type: "short", score: 10, origin: "5주차 교안 p.11: FlatList 구분선 속성",
          text: "FlatList 컴포넌트에서 아이템 항목들 사이에 가로 경계선(Divider)을 깔끔하게 렌더링하기 위해 컴포넌트 또는 JSX 함수를 전달받는 FlatList의 내장 속성(Prop) 이름은?",
          placeholder: "속성명 입력 (예: ItemSeparatorComponent)",
          answers: ["ItemSeparatorComponent", "itemSeparatorComponent"],
          explanation: "<b>정답: ItemSeparatorComponent</b><br>ItemSeparatorComponent={Divider}를 전달하면 아이템과 아이템 사이에만 구분선 컴포넌트를 삽입해주며, 맨 처음 항목 위나 맨 마지막 항목 밑에는 렌더링되지 않아 유용합니다."
        },
        {
          id: 10, type: "short", score: 10, origin: "5주차 교안 p.12: ActivityIndicator 속성",
          text: "데이터 로딩 상태를 시각적으로 보여주는 리액트 네이티브의 로딩 스피너 컴포넌트 (1)의 이름과, 스피너의 크기를 크게 설정하기 위해 <code>size</code> 속성에 전달하는 문자열 값 (2)를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;(1) (2)=\"large\" color=\"#0000ff\" /&gt;</pre>",
          placeholder: "순서대로 입력 (예: ActivityIndicator, size)",
          answers: [
            "ActivityIndicator, size",
            "ActivityIndicator,size",
            "ActivityIndicator, large"
          ],
          explanation: "<b>정답: ActivityIndicator, size</b><br>ActivityIndicator 컴포넌트는 앱 로딩 중 원형 스피너를 보여주며, size 속성에 'small' 또는 'large'를 전달하여 크기를 지정할 수 있습니다."
        }
      ]
    },
    // [회차 5] 전 범위 소스코드 빈칸완성 & 코드작성 마스터 모의고사 (20문항 / 100점)
    {
      id: "cp_exam5",
      name: "제5회 [올코드 빈칸 마스터] 2~7주차 전 범위 소스코드 빈칸완성 & 코드작성 특훈 (20문항)",
      tag: "올코드 빈칸 20문항 (100점)",
      desc: "교안 2주차 환경구축부터 7주차 Hook 및 계산기 실습까지 전 강의 교안에 등장하는 모든 React Native 핵심 소스코드의 키워드, 속성, Hook 선언문, 이벤트 핸들러 빈칸 뚫기 전수 수록!",
      questions: [
        {
          id: 1, type: "short", score: 5, origin: "2주차 교안 p.8: React Native 루트 컴포넌트 & 스타일시트 생성",
          text: "다음은 Expo 프로젝트의 엔트리 포인트인 <code>App.js</code> 기본 구조이다. 문자열 출력을 위한 표준 컴포넌트 <b>(A)</b>와 스타일 객체를 생성하는 메서드 <b>(B)</b>를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>import { StyleSheet, (A), View } from 'react-native';\n\nexport default function App() {\n    return (\n        &lt;View style={styles.container}&gt;\n            &lt;(A)&gt;크로스플랫폼 중간고사 대비&lt;/(A)&gt;\n        &lt;/View&gt;\n    );\n}\n\nconst styles = StyleSheet.(B)({\n    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }\n});</pre>",
          placeholder: "순서대로 입력 (예: Text, create)",
          answers: ["Text, create", "Text,create", "Text, Create"],
          explanation: "<b>정답: Text, create</b><br>리액트 네이티브에서는 웹의 p나 span 태그 대신 반드시 &lt;Text&gt; 컴포넌트로 문자를 감싸야 하며, 스타일 객체는 StyleSheet.create({ ... })로 생성합니다."
        },
        {
          id: 2, type: "short", score: 5, origin: "3주차 교안 p.4: 레이아웃 기본 주축(flexDirection) 기본값",
          text: "리액트 네이티브의 레이아웃 모델인 Flexbox에서 <b>주축(Main Axis)의 방향을 결정하는 <code>flexDirection</code>의 기본값(Default Value)</b>은 무엇인가?",
          placeholder: "기본값 입력 (예: column)",
          answers: ["column", "Column", "'column'"],
          explanation: "<b>정답: column (세로 방향)</b><br>일반 웹 CSS에서는 가로(row)가 기본값이지만, 스마트폰 세로 화면에 최적화된 리액트 네이티브는 세로(column)가 기본값입니다."
        },
        {
          id: 3, type: "short", score: 5, origin: "3주차 교안 p.13: 여러 스타일 동시 적용 문법",
          text: "다음 코드에서 <code>styles.box</code>와 <code>styles.active</code> 두 스타일을 하나의 컴포넌트에 결합 적용하기 위한 빈칸 <b>(A)</b>의 배열 문법을 완성하여 작성하시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;View style={(A)}&gt;\n    &lt;Text&gt;다중 스타일 적용&lt;/Text&gt;\n&lt;/View&gt;</pre>",
          placeholder: "배열 표기법 작성 (예: [styles.box, styles.active])",
          answers: [
            "[styles.box, styles.active]",
            "[styles.box,styles.active]",
            "[styles.box, styles.active ]"
          ],
          explanation: "<b>정답: [styles.box, styles.active]</b><br>리액트 네이티브에서 둘 이상의 스타일을 병합할 때는 배열 [style1, style2]를 사용하며, 뒤에 오는 스타일이 앞의 스타일 속성을 덮어씁니다(오버라이드)."
        },
        {
          id: 4, type: "short", score: 5, origin: "3주차 교안 p.14~15: 외부 스타일 파일 export/import",
          text: "외부 파일 <code>src/styles.js</code>에 선언된 <code>viewStyles</code> 객체를 다른 컴포넌트에서 가져다 쓸 수 있도록 내보낼 때 사용하는 자바스크립트 키워드는 무엇인가?",
          placeholder: "키워드 입력 (예: export)",
          answers: ["export", "export const"],
          explanation: "<b>정답: export</b><br>export const viewStyles = StyleSheet.create({ ... }) 형태로 선언하여 내보내고, 사용하는 파일에서 import { viewStyles } from './src/styles'로 가져옵니다."
        },
        {
          id: 5, type: "short", score: 5, origin: "4주차 교안 p.5: Text 컴포넌트 중첩(Nesting)과 스타일 상속",
          text: "다음 코드의 렌더링 결과에서 '강조된 텍스트'의 <b>글자 크기(fontSize)</b> (1)과 <b>글자 색상(color)</b> (2)를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;Text style={{ fontSize: 24, color: 'gray' }}&gt;\n    일반 텍스트와 &lt;Text style={{ color: 'red', fontWeight: 'bold' }}&gt;강조된 텍스트&lt;/Text&gt;\n&lt;/Text&gt;</pre>",
          placeholder: "순서대로 입력 (예: 24, red)",
          answers: ["24, red", "24,red", "24, 'red'"],
          explanation: "<b>정답: 24, red</b><br>리액트 네이티브는 원칙적으로 스타일 상속을 지원하지 않으나, &lt;Text&gt; 내부에 또 다른 &lt;Text&gt;를 중첩한 경우 자식 텍스트는 부모의 fontSize(24)를 상속받고 자신의 color('red')를 적용합니다."
        },
        {
          id: 6, type: "short", score: 5, origin: "4주차 교안 p.11: Button 컴포넌트 2대 필수 Props",
          text: "리액트 네이티브의 기본 <code>&lt;Button /&gt;</code> 컴포넌트에 반드시 작성해야 하는 <b>버튼에 표시될 텍스트 속성</b> (1)과 <b>클릭 이벤트 핸들러 속성</b> (2)를 순서대로 쓰시오.",
          placeholder: "순서대로 입력 (예: title, onPress)",
          answers: ["title, onPress", "title,onPress", "title, onPress"],
          explanation: "<b>정답: title, onPress</b><br>&lt;Button /&gt; 컴포넌트는 자체 닫는 태그 형태로 자식 엘리먼트를 가질 수 없으며, title과 onPress 속성을 필수로 지정해야 합니다."
        },
        {
          id: 7, type: "short", score: 5, origin: "4주차 교안 p.13: Alert 다이얼로그 취소/확인 팝업",
          text: "다음 Alert 대화상자 코드에서 빈칸 <b>(A)</b>와 <b>(B)</b>에 들어갈 키워드를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>Alert.alert(\n    '삭제 확인',\n    '데이터를 삭제하시겠습니까?',\n    [\n        { text: '취소', style: '(A)' },\n        { text: '삭제', (B): () => deleteItem() }\n    ]\n);</pre>",
          placeholder: "순서대로 입력 (예: cancel, onPress)",
          answers: ["cancel, onPress", "cancel,onPress", "cancel, onPress"],
          explanation: "<b>정답: cancel, onPress</b><br>Alert 버튼 배열에서 취소 버튼 스타일은 style: 'cancel'이며, 버튼 클릭 시 실행할 동작 함수는 onPress 속성에 콜백을 바인딩합니다."
        },
        {
          id: 8, type: "short", score: 5, origin: "4주차 교안 p.14~15: TextInput 텍스트 입력과 비밀번호 마스킹",
          text: "TextInput에서 사용자가 타이핑할 때마다 호출되는 <b>텍스트 변경 이벤트 속성</b> (1)과, 비밀번호 입력창처럼 글자를 점이나 별표로 가려주는 <b>마스킹 속성</b> (2)를 순서대로 쓰시오.",
          placeholder: "순서대로 입력 (예: onChangeText, secureTextEntry)",
          answers: [
            "onChangeText, secureTextEntry",
            "onChangeText,secureTextEntry",
            "onChangeText, secureTextEntry={true}"
          ],
          explanation: "<b>정답: onChangeText, secureTextEntry</b><br>웹의 onChange(e => ...)와 달리 리액트 네이티브는 입력된 텍스트 문자열이 바로 전달되는 onChangeText를 사용하며, 비밀번호 숨김은 secureTextEntry={true}입니다."
        },
        {
          id: 9, type: "short", score: 5, origin: "5주차 교안 p.10: Image 원격 네트워크 로드 필수 스타일",
          text: "원격 인터넷 URL로부터 이미지를 가져올 때(<code>source={{ uri: '...' }}</code>), 화면에 이미지가 정상적으로 출력되기 위해 <b>스타일(style) 객체에 반드시 명시해야 하는 2가지 속성</b>은 무엇인가?",
          placeholder: "속성 2가지 쉼표 구분 (예: width, height)",
          answers: ["width, height", "width,height", "height, width", "height,width"],
          explanation: "<b>정답: width, height</b><br>로컬 require() 이미지는 이미지 파일 헤더에서 원본 크기를 자동 인식하지만, 원격 네트워크 uri 이미지는 크기(width, height)를 지정하지 않으면 크기가 0이 되어 화면에 나타나지 않습니다."
        },
        {
          id: 10, type: "short", score: 5, origin: "5주차 교안 p.11: Switch 토글 상태 변경 속성",
          text: "토글 스위치 컴포넌트인 <code>&lt;Switch /&gt;</code>에서 스위치 상태가 On/Off로 전환될 때 호출되는 <b>이벤트 속성(Prop)</b>의 이름은?",
          placeholder: "속성명 입력 (예: onValueChange)",
          answers: ["onValueChange", "onvaluechange"],
          explanation: "<b>정답: onValueChange</b><br>Switch 컴포넌트의 토글 핸들러는 onChange가 아닌 onValueChange={(val) => setEnabled(val)}입니다."
        },
        {
          id: 11, type: "short", score: 5, origin: "5주차 교안 p.12: FlatList 3대 필수 Props",
          text: "다음 FlatList 컴포넌트의 빈칸 <b>(A), (B), (C)</b>에 들어갈 3대 필수 속성 명칭을 순서대로 작성하시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;FlatList\n    (A)={userList}\n    (B)={(item) =&gt; item.id}\n    (C)={({ item }) =&gt; &lt;Text&gt;{item.name}&lt;/Text&gt;}\n/&gt;</pre>",
          placeholder: "순서대로 입력 (예: data, keyExtractor, renderItem)",
          answers: [
            "data, keyExtractor, renderItem",
            "data,keyExtractor,renderItem",
            "data, keyExtractor, renderitem"
          ],
          explanation: "<b>정답: data, keyExtractor, renderItem</b><br>FlatList는 1) 원본 배열 데이터(data), 2) 각 항목의 고유 키 추출(keyExtractor), 3) 항목을 화면에 그릴 JSX 함수(renderItem)의 3가지 속성이 필수입니다."
        },
        {
          id: 12, type: "short", score: 5, origin: "6주차 교안 p.4: BackHandler 기본동작 차단 반환값",
          text: "안드로이드 뒤로가기 버튼 리스너(<code>hardwareBackPress</code>)에서 OS의 기본 뒤로가기 동작을 차단하고 <b>개발자가 정의한 커스텀 로직만 실행되게 하려면 콜백 함수에서 어떤 boolean 값을 반환(return)</b>해야 하는가?",
          placeholder: "boolean 값 입력 (예: true)",
          answers: ["true", "True"],
          explanation: "<b>정답: true</b><br>BackHandler 콜백 함수에서 true를 반환하면 시스템의 기본 뒤로가기(화면 닫기나 앱 종료) 동작이 무시되고 차단됩니다. (false 반환 시 기본 뒤로가기 실행)"
        },
        {
          id: 13, type: "short", score: 5, origin: "6주차 교안 p.7: ToastAndroid 토스트 팝업 API",
          text: "화면 하단에 잠시 나타났다 사라지는 토스트 메시지를 출력하기 위해 사용하는 리액트 네이티브 내장 API의 이름은?",
          placeholder: "API 이름 입력 (예: ToastAndroid)",
          answers: ["ToastAndroid", "toastAndroid"],
          explanation: "<b>정답: ToastAndroid</b><br>ToastAndroid.show('메시지', ToastAndroid.SHORT); 형태로 호출하여 안드로이드 네이티브 토스트 팝업을 띄웁니다."
        },
        {
          id: 14, type: "short", score: 5, origin: "6주차 교안 p.9: Animated API와 useNativeDriver",
          text: "Animated API로 부드러운 60fps 애니메이션을 구현할 때, 자바스크립트 스레드를 거치지 않고 네이티브 UI 스레드에서 직접 애니메이션을 구동시키기 위해 <code>Animated.timing</code> 설정 객체에 명시하는 <b>boolean 속성</b>은 무엇인가?",
          placeholder: "속성명: 값 형태 또는 속성명 (예: useNativeDriver: true)",
          answers: [
            "useNativeDriver: true",
            "useNativeDriver",
            "useNativeDriver:true",
            "useNativeDriver = true"
          ],
          explanation: "<b>정답: useNativeDriver: true</b><br>useNativeDriver: true를 설정하면 애니메이션 계산을 네이티브 스레드로 위임하여 JS 스레드가 바쁘더라도 프레임 드랍 없이 부드러운 애니메이션을 제공합니다."
        },
        {
          id: 15, type: "short", score: 5, origin: "6주차 교안 p.11: Dimensions 가용 영역 해상도",
          text: "모바일 기기의 상단 상태바(Status Bar)나 하단 소프트키를 제외한 <b>실제 앱 가용 화면 해상도를 픽셀 단위로 구하는 API 메서드 호출 구문</b>은 무엇인가?",
          placeholder: "호출 구문 입력 (예: Dimensions.get('window'))",
          answers: [
            "Dimensions.get('window')",
            "Dimensions.get(\"window\")",
            "Dimensions.get('window')",
            "Dimensions.get('window')"
          ],
          explanation: "<b>정답: Dimensions.get('window')</b><br>Dimensions.get('window')는 소프트키 등을 제외한 앱 가용 영역의 width와 height를 반환하고, Dimensions.get('screen')은 기기 물리적 전체 화면 크기를 반환합니다."
        },
        {
          id: 16, type: "short", score: 5, origin: "7주차 교안 p.5: useState 상태 선언 및 리렌더링",
          text: "다음 컴포넌트에서 <code>useState</code>의 상태 변경 함수인 <b>세터 함수(setCount)가 호출되었을 때 컴포넌트에 일어나는 핵심 동작 메커니즘</b>을 한 단어로 쓰시오.",
          placeholder: "한 단어로 작성 (예: 리렌더링)",
          answers: ["리렌더링", "재렌더링", "다시 렌더링", "re-rendering", "rerendering"],
          explanation: "<b>정답: 리렌더링 (Re-rendering)</b><br>useState의 세터 함수가 호출되면 리액트는 상태 변화를 감지하고 해당 컴포넌트 함수를 다시 실행하여 화면 UI를 새로 고치는 리렌더링을 수행합니다."
        },
        {
          id: 17, type: "short", score: 5, origin: "7주차 교안 p.10: useRef와 DOM 포커스 이동",
          text: "다음 코드에서 사용자가 버튼을 눌렀을 때 TextInput으로 커서 포커스를 이동시키고자 한다. 빈칸 <b>(A)</b>와 <b>(B)</b>에 들어갈 코드를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>const inputRef = useRef(null);\nconst focusInput = () => {\n    inputRef.(A).focus();\n};\nreturn (\n    &lt;View&gt;\n        &lt;TextInput (B)={inputRef} placeholder=\"이름\" /&gt;\n        &lt;Button title=\"포커스\" onPress={focusInput} /&gt;\n    &lt;/View&gt;\n);</pre>",
          placeholder: "순서대로 입력 (예: current, ref)",
          answers: ["current, ref", "current,ref", "current, ref"],
          explanation: "<b>정답: current, ref</b><br>useRef로 생성된 참조 객체는 TextInput의 ref 속성에 연결되며, 실제 DOM 요소는 inputRef.current 프로퍼티를 통해 접근하므로 inputRef.current.focus()를 호출합니다."
        },
        {
          id: 18, type: "short", score: 5, origin: "7주차 교안 p.9: useState vs useRef vs let 변수 실행 결과 예측",
          text: "다음 컴포넌트에서 <b>[클릭]</b> 버튼을 <b>5번 연속 클릭</b>한 직후, <b>[리랜더]</b> 버튼을 <b>1번 클릭</b>하였다.<br>화면 UI에 최종 표시되는 <b>CountRef</b> 값 (1)과 <b>CountVar</b> 값 (2)를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>export default function StateVsRef() {\n    const [render, setRender] = useState(false);\n    const countRef = useRef(0);\n    let countVar = 5;\n\n    const handleClick = () => {\n        countRef.current += 1;\n        countVar += 1;\n    };\n    const doRender = () => setRender(!render);\n    return (\n        &lt;View&gt;\n            &lt;Text&gt;CountRef: {countRef.current}&lt;/Text&gt;\n            &lt;Text&gt;CountVar: {countVar}&lt;/Text&gt;\n            &lt;Button title=\"클릭\" onPress={handleClick} /&gt;\n            &lt;Button title=\"리랜더\" onPress={doRender} /&gt;\n        &lt;/View&gt;\n    );\n}</pre>",
          placeholder: "순서대로 정수 입력 (예: 5, 5)",
          answers: ["5, 5", "5,5"],
          explanation: "<b>정답: 5, 5</b><br>[클릭] 5번 누를 때: countRef.current는 5, countVar는 10이 되지만 리렌더링이 발생하지 않음.<br>[리랜더] 1번 누를 때: 컴포넌트가 다시 렌더링되면서 useRef는 값을 보존하여 5가 출력되고, countVar는 일반 로컬 변수이므로 let countVar = 5; 구문에 의해 5로 다시 초기화되어 5가 출력됩니다!"
        },
        {
          id: 19, type: "short", score: 5, origin: "7주차 교안 p.16: useMemo의 메모이제이션 최적화 목적",
          text: "연산 비용이 큰 함수의 반환값을 메모리에 캐싱(메모이제이션)하여, 의존성 배열의 값이 바뀌지 않는 한 불필요한 재계산을 방지하고 성능을 최적화하는 <b>React Hook의 이름</b>은?",
          placeholder: "Hook 이름 입력 (예: useMemo)",
          answers: ["useMemo", "usememo"],
          explanation: "<b>정답: useMemo</b><br>useMemo(() => expensiveCalc(a), [a]) 형태로 사용하며, 의존성 배열 a가 변경되었을 때만 계산 함수를 다시 실행하고 그 외의 리렌더링 시에는 캐시된 값을 즉시 재사용합니다."
        },
        {
          id: 20, type: "short", score: 5, origin: "7주차 교안 p.19: 계산기 실습 상세조건 (교수님 감점방지 스포)",
          text: "7주차 계산기 실습 교안 상세조건에서 명시된 <b>전체 컨테이너 배경색(backgroundColor)</b> (1), <b>디스플레이 텍스트 글자 크기(fontSize)</b> (2), <b>숫자 버튼 배경색 Hex 코드</b> (3)을 순서대로 쓰시오.<br><br>" +
                "• (1): 컨테이너 배경색 영문명<br>" +
                "• (2): displayText fontSize 정수값<br>" +
                "• (3): number Button backgroundColor 16진수 코드",
          placeholder: "순서대로 입력 (예: black, 84, #2f2f2f)",
          answers: [
            "black, 84, #2f2f2f",
            "black,84,#2f2f2f",
            "'black', 84, '#2f2f2f'",
            "black, 84, #2F2F2F"
          ],
          explanation: "<b>정답: black, 84, #2f2f2f</b><br>교수님이 음성 녹음본에서 '상세조건 안 맞추면 점수 안 나간다. 블랙 대신 회색 쓰면 감점'이라고 직접 강조한 부분입니다. 전체 배경은 'black', 결과 글자 크기는 84, 숫자 버튼 배경은 #2f2f2f, 연산자 버튼은 #F5A623입니다."
        }
      ]
    }
  ]
};


