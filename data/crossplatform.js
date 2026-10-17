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
        <div class="section-banner-title">
          <span>📂 2주차: React Native 개요 · 개발환경 구축 · Expo 기초 (교안 p.1~39 완벽 총정리)</span>
        </div>
        <span class="badge badge-amber">환경변수 & 도구 역할 필수</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">2-1. React Native 개요 및 장단점 (p.2~3)</div>
        <p style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.75; margin-bottom: 12px;">
          <b>React Native(RN)</b>는 Facebook(Meta)이 개발한 오픈 소스 모바일 애플리케이션 프레임워크로, <b>JavaScript와 React</b>를 사용하여 iOS와 Android 앱을 동시에 개발할 수 있는 크로스플랫폼 기술입니다. 웹뷰(WebView)만 띄우는 하이브리드 앱과 달리 <b>네이티브 브릿지(Bridge)</b>를 통해 실제 OS 고유의 네이티브 UI 컴포넌트로 렌더링됩니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 50%;">⭕ React Native의 6대 장점</th>
              <th>⚠️ React Native의 6대 단점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1. <b>단일 코드베이스(코드 재사용)</b>로 iOS와 Android 동시 개발 (시간·비용 절감)<br>
                2. 웹 개발자(JavaScript, React)가 모바일 앱 개발로 쉽게 진입 가능<br>
                3. <b>Fast Refresh(Hot Reloading)</b>를 통해 코드 변경사항을 즉시 화면에서 확인<br>
                4. 방대한 오픈소스 생태계(npm)와 활발한 커뮤니티 지원<br>
                5. 네이티브 컴포넌트로 변환되어 하이브리드(웹뷰) 대비 <b>높은 네이티브급 성능</b><br>
                6. 소규모 팀에 적합하며 유지보수가 단일화됨
              </td>
              <td>
                1. 고성능 3D 게임, 복잡한 애니메이션, 대규모 연산에서는 순수 네이티브보다 성능 저하 가능<br>
                2. 카메라/블루투스/센서 등 <b>특수 하드웨어 기능</b> 사용 시 네이티브 코드(Java/Kotlin, Swift/Obj-C) 지식이 필요할 수 있음<br>
                3. OS의 최신 기능이 출시되었을 때 RN 프레임워크에 반영되기까지 시차 발생<br>
                4. 서드파티 외부 라이브러리의 버전 충돌 및 의존성 관리 부담<br>
                5. JS 런타임과 브릿지 포함으로 인한 <b>앱 설치 용량 및 메모리 사용량 증가</b><br>
                6. JS-네이티브 간 브릿지 영역에서의 디버깅 난이도
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">2-2. 운영체제별 필수 설치 도구 및 Node.js 핵심 개념 (p.4~19)</div>
        <table class="concept-table" style="margin-bottom: 14px;">
          <thead>
            <tr>
              <th style="width: 22%;">개발 도구 / 기술</th>
              <th style="width: 20%;">대상 OS</th>
              <th>교안 핵심 역할 및 시험 출제 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">Homebrew</b></td>
              <td>macOS</td>
              <td>맥OS용 오픈소스 <b>패키지 관리자</b>. 터미널 명령어로 개발 도구(Node, Watchman 등)를 간편하게 설치/관리</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Watchman</b></td>
              <td>macOS</td>
              <td>Facebook이 개발한 <b>파일 시스템 변경 감시 도구</b>.<br><b style="color: var(--tag-danger-ink);">• 핵심 역할: 소스 파일이나 폴더의 변경을 실시간 감지하여 자동으로 리빌드(Fast Refresh)를 트리거함!</b></td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Node.js &amp; npm</b></td>
              <td>공통 (Mac/Win)</td>
              <td>
                • <b>Chrome V8 JavaScript 엔진</b>으로 빌드된 서버/로컬 JavaScript 런타임 환경<br>
                • <b>비동기 이벤트 기반(Event-driven)</b> 및 <b>Non-blocking I/O</b> 구조<br>
                • <b>단일 스레드(Single Thread) 이벤트 루프</b> 방식으로 동작<br>
                • <b>npm (Node Package Manager)</b>: 전 세계 오픈소스 패키지를 설치·관리하는 기본 패키지 매니저 (<code>node -v</code>, <code>npm -v</code>)
              </td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">REST API vs GraphQL</b><br>(교안 p.8~9)</td>
              <td>백엔드 통신</td>
              <td>
                • <b>REST API</b>: URL(자원의 위치)과 HTTP 메서드(<code>GET</code> 조회, <code>POST</code> 생성, <code>PUT</code> 수정, <code>DELETE</code> 삭제)를 조합해 JSON 데이터를 주고받는 아키텍처<br>
                • <b>GraphQL</b>: Facebook이 개발한 쿼리 언어로, <b>클라이언트가 자신이 필요한 데이터 구조만 정확히 요청</b>하여 Over-fetching(불필요한 데이터 수신)과 Under-fetching을 해결하고 <b>단일 엔드포인트(Single Endpoint)</b>를 사용함
              </td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Xcode / VS Code</b></td>
              <td>macOS / Windows</td>
              <td>• <b>Xcode</b>: macOS 전용 iOS 앱 빌드 도구 및 iOS 시뮬레이터 제공<br>• <b>VS Code</b>: 크로스플랫폼 소스 코드 에디터</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning">
          <div class="callout-title">🚨 [2주차 단답형 1순위] JDK 버전 &amp; Android 환경변수 설정 (p.20~31)</div>
          <b>1. JDK(Java Development Kit) 설치 버전</b>: 교안 20페이지 명시 — 반드시 <b style="color: var(--tag-danger-ink);"><code>JDK 21</code></b> 설치!<br>
          <b>2. Java 시스템 환경변수</b>:<br>
          &nbsp;&nbsp;• 변수 이름: <b><code>JAVA_HOME</code></b> (예: <code>C:\Program Files\Java\jdk-21</code>)<br>
          &nbsp;&nbsp;• Path 추가: <b><code>%JAVA_HOME%\bin</code></b> / 확인 명령어: <code>java -version</code>, <code>javac -version</code><br>
          <b>3. Android Studio로 개발 가능한 6가지 영역 (p.23)</b>:<br>
          &nbsp;&nbsp;① 안드로이드 스마트폰/태블릿 네이티브 앱 (Java/Kotlin), ② <b>Wear OS</b>(스마트워치), ③ <b>Android TV</b>, ④ <b>Android Auto</b>(차량용), ⑤ 크로스플랫폼/하이브리드 앱 빌드 및 에뮬레이터(AVD) 실행, ⑥ <b>Android NDK</b>(C/C++ 고성능 게임·라이브러리)<br>
          <b>4. Android SDK 시스템 환경변수 (p.28~31)</b>:<br>
          &nbsp;&nbsp;• 변수 이름: <b><code>ANDROID_HOME</code></b> (또는 <code>ANDROID_SDK_ROOT</code>) → 경로: <code>C:\Users\사용자\AppData\Local\Android\Sdk</code><br>
          &nbsp;&nbsp;• Path 추가: <b><code>%ANDROID_HOME%\platform-tools</code></b> (<code>adb</code> 명령어 실행을 위해 필수!)
        </div>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">2-3. Expo 프레임워크 5대 핵심 개념 &amp; 프로젝트 생성·실행 명령어 (p.32~39)</div>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px; margin-bottom: 12px;">
          <li><b>1) React Native 기반 프레임워크</b>: 복잡한 네이티브 설정(Xcode/Android Studio 초기 빌드 설정) 없이 빠르게 RN 앱을 개발·실행할 수 있게 해주는 도구 모음.</li>
          <li><b>2) 개발 환경 간편화</b>: 프로젝트 생성 즉시 JavaScript/TypeScript 코드 작성에 집중 가능.</li>
          <li><b>3) 실시간 테스트 (Expo Go 앱)</b>: 스마트폰에 <b>Expo Go</b> 앱을 설치하고 터미널의 <b>QR 코드</b>를 스캔하면 실기기에서 즉시 실시간 화면 확인 가능.</li>
          <li><b>4) 풍부한 내장 API 제공</b>: 카메라, 위치(GPS), 알림, 센서, 파일 시스템 등 모바일 기기 제어 API 기본 내장.</li>
          <li><b>5) 클라우드 빌드 및 배포 지원 (EAS)</b>: Windows PC에서도 클라우드를 통해 iOS/Android 스토어 배포용 앱 빌드 가능.</li>
        </ul>

        <pre class="code-block"># [교안 p.33~38] Expo CLI 설치 및 프로젝트 생성·실행 순서 명령어
npm install -g expo-cli     # 1. Expo CLI 전역(-g) 설치
expo init myApp             # 2. 'myApp'이라는 이름의 새 Expo 프로젝트 생성 (Blank 템플릿 선택)
cd myApp                    # 3. 생성된 프로젝트 폴더로 이동
code .                      # 4. 현재 폴더를 VS Code 에디터로 열기
npm start                   # 5. Metro 개발 서버 실행 (또는 npx expo start)</pre>
      </div>
    </section>

    <!-- SECTION 4: 3주차 스타일링 & Flexbox -->
    <section id="cp-w3" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>📂 3주차: 컴포넌트 스타일링 &amp; Flexbox 레이아웃 완벽 마스터 (교안 p.1~19)</span>
        </div>
        <span class="badge badge-amber">주관식 서술형 &amp; 빈칸 100% 출제</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">3-1. 웹 CSS vs React Native 스타일링의 결정적 차이점</div>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px; margin-bottom: 14px;">
          <li><b>카멜 표기법(camelCase) 사용</b>: 하이픈(<code>-</code>) 대신 대문자로 연결합니다. (예: <code>background-color</code> → <b><code>backgroundColor</code></b>, <code>font-size</code> → <b><code>fontSize</code></b>, <code>justify-content</code> → <b><code>justifyContent</code></b>)</li>
          <li><b>단위(px, pt) 생략</b>: 크기나 여백 수치에 <code>px</code>를 붙이지 않고 <b>숫자(Number)만 작성</b>합니다. (예: <code>padding: 10</code>, <code>fontSize: 20</code>, <code>height: 80</code>)</li>
          <li><b>문자열 속성값</b>: 숫자가 아닌 키워드나 색상, <code>fontWeight</code> 두께 값은 따옴표 문자열로 감쌉니다. (예: <code>fontWeight: "600"</code>, <code>color: "#ff0000"</code>)</li>
          <li><b>JSX 줄바꿈과 주석 (교안 p.2~4)</b>:
            <ul style="padding-left: 18px; margin-top: 4px;">
              <li>텍스트 안에서 강제 줄바꿈을 넣을 때는 <b><code>{"\\n"}</code></b> 표현식을 사용합니다!</li>
              <li>JSX 태그 내부에서 주석을 달 때는 <b><code>{/* 주석 내용 */}</code></b> 형태를 사용합니다.</li>
            </ul>
          </li>
        </ul>

        <div class="concept-card-title">3-2. Flexbox 3대 정렬 속성과 기본값 (★ 시험 0순위 암기표)</div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 22%;">Flexbox 속성명</th>
              <th style="width: 22%;">RN 기본값 (Default)</th>
              <th style="width: 22%;">정렬 기준 축</th>
              <th>세부 옵션값 및 정렬 동작 설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);"><code>flexDirection</code></b></td>
              <td><b style="color: var(--tag-danger-ink);"><code>column</code> (세로 방향)</b><br><span style="font-size:12px;">※ 웹 CSS(row)와 반대!</span></td>
              <td><b>주축(Main Axis)의 방향 자체를 결정</b></td>
              <td>
                • <b><code>column</code></b> (기본값): 위 → 아래 (세로 배치)<br>
                • <b><code>row</code></b>: 왼쪽 → 오른쪽 (가로 배치)<br>
                • <b><code>column-reverse</code></b>: 아래 → 위 (세로 역순)<br>
                • <b><code>row-reverse</code></b>: 오른쪽 → 왼쪽 (가로 역순)
              </td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>justifyContent</code></b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>flex-start</code></b></td>
              <td><b>주축(Main Axis)과 동일한 방향</b>으로 정렬</td>
              <td>
                • <b><code>flex-start</code></b> (기본값): 주축의 시작점 정렬<br>
                • <b><code>center</code></b>: 주축의 정중앙 정렬<br>
                • <b><code>flex-end</code></b>: 주축의 끝점 정렬<br>
                • <b><code>space-between</code></b>: 양 끝 밀착 후 사이 간격 균등 분배<br>
                • <b><code>space-around</code></b>: 각 아이템 양옆에 동일한 여백 부여<br>
                • <b><code>space-evenly</code></b>: 양 끝과 아이템 사이 모든 여백을 완전히 동일하게 분배
              </td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>alignItems</code></b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>stretch</code></b></td>
              <td>주축과 수직인 <b>교차축(Cross Axis) 방향</b>으로 정렬</td>
              <td>
                • <b><code>stretch</code></b> (기본값): 교차축 방향으로 끝까지 늘림 (자식의 고정 크기가 없을 때)<br>
                • <b><code>flex-start</code></b>: 교차축의 시작점 정렬<br>
                • <b><code>center</code></b>: 교차축의 중앙 정렬<br>
                • <b><code>flex-end</code></b>: 교차축의 끝점 정렬<br>
                • <b><code>baseline</code></b>: 텍스트 기준선에 맞춰 정렬
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">3-3. 3주차 교안 전체 실습 코드 5종 완벽 수록 (p.2~19)</div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          💻 [코드 3-1] 인라인 스타일링(Inline Styling)과 <code>{"\\n"}</code> 줄바꿈 (교안 p.2~4)
        </div>
        <pre class="code-block">// [교안 3주차 p.2~4] style={{ 속성: 값 }} 이중 중괄호 인라인 스타일링
import React from "react";
import { View, Text } from "react-native";

const App = () =&gt; {
  return (
    &lt;View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    &gt;
      &lt;Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "600",
          color: "black",
        }}
      &gt;
        Inline Styling - Text
      &lt;/Text&gt;
      &lt;Text
        style={{
          padding: 10,
          fontSize: 20,
          fontWeight: "400",
          color: "red",
        }}
      &gt;
        Inline Styling - Error{"\\n"}새로운 줄입니다.
      &lt;/Text&gt;
    &lt;/View&gt;
  );
};

export default App;</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 3-2] 클래스 스타일링(<code>StyleSheet.create</code>)과 다중 스타일 배열 결합 (교안 p.12~14)
        </div>
        <pre class="code-block">// [교안 3주차 p.14] 배열 표기법 style={[styles.text, styles.error]} 로 여러 스타일 동시 적용!
// ★ 핵심 규칙: 배열 뒤쪽에 적은 styles.error의 속성(color: "red", fontWeight: "400")이 앞쪽 styles.text의 동명 속성을 덮어씀(오버라이드)!
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () =&gt; {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;StyleSheet - Text&lt;/Text&gt;
      &lt;Text style={[styles.text, styles.error]}&gt;Multiple Styles - Error&lt;/Text&gt;
    &lt;/View&gt;
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: "600",
    color: "black",
  },
  error: {
    fontWeight: "400",
    color: "red",
  },
});

export default App;</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 3-3] 외부 스타일 모듈 분리 (<code>src/styles.js</code> &amp; <code>App.js</code>) 및 <code>flex</code> 비율 분할 (교안 p.15~19)
        </div>
        <pre class="code-block">// [1] src/styles.js — 외부 파일로 스타일 객체를 분리하여 export
import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const textStyles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: "600",
    color: "black",
  },
  error: {
    fontWeight: "400",
    color: "red",
  },
});

// ------------------------------------------------------------------
// [2] 교안 p.17~19: Header(1) : Contents(3) : Footer(1) 비율 분할 및 가로 2분할 레이아웃
// ★ Header(flex:1), Contents(flex:3), Footer(flex:1) -&gt; 전체 세로 화면을 1 : 3 : 1 (즉 20% : 60% : 20%) 비율로 분할!
// ★ Contents 내부를 좌/우 가로로 나누고 싶다면 Contents에 flexDirection: "row"를 지정함!
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const LayoutApp = () =&gt; {
  return (
    &lt;View style={layoutStyles.container}&gt;
      &lt;View style={[layoutStyles.box, layoutStyles.header]}&gt;
        &lt;Text style={layoutStyles.text}&gt;Header (flex: 1)&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={[layoutStyles.box, layoutStyles.contents]}&gt;
        &lt;Text style={layoutStyles.text}&gt;Left&lt;/Text&gt;
        &lt;Text style={layoutStyles.text}&gt;Right&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={[layoutStyles.box, layoutStyles.footer]}&gt;
        &lt;Text style={layoutStyles.text}&gt;Footer (flex: 1)&lt;/Text&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
};

const layoutStyles = StyleSheet.create({
  container: { flex: 1 },
  box: { alignItems: "center", justifyContent: "center" },
  header: { flex: 1, backgroundColor: "#f1c40f" },
  contents: {
    flex: 3,
    flexDirection: "row",          // 내부 자식을 가로(좌-&gt;우)로 배치
    justifyContent: "space-around", // 가로 간격 균등 배치
    backgroundColor: "#1abc9c",
  },
  footer: { flex: 1, backgroundColor: "#3498db" },
  text: { fontSize: 26, fontWeight: "700" },
});</pre>
      </div>
    </section>

    <!-- SECTION 5: 4주차 컴포넌트 기초 -->
    <section id="cp-w4" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>📂 4주차: 핵심 기초 컴포넌트 (View · Text · ScrollView · Button · Alert · TextInput) (교안 p.1~18)</span>
        </div>
        <span class="badge badge-amber">코드 빈칸 &amp; Props 필수</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">4-1. 함수형 컴포넌트 vs 클래스형 컴포넌트 및 기초 컴포넌트 핵심 요약 (p.2~18)</div>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px; margin-bottom: 12px;">
          <li><b>함수형 컴포넌트(Functional Component)</b>: React 16.8에서 <b>Hook(<code>useState</code>, <code>useEffect</code> 등)</b>이 도입된 이후 현재 React Native의 표준 방식입니다. 코드가 간결하고 직관적입니다.</li>
          <li><b>클래스형 컴포넌트(Class Component)</b>: <code>React.Component</code>를 상속받고 반드시 <b><code>render()</code> 메서드</b> 안에서 JSX를 반환하며, 상태를 <code>this.state</code>와 <code>this.setState()</code>로 관리하던 레거시 방식입니다.</li>
          <li><b><code>&lt;View&gt;</code></b>: UI를 구성하는 가장 기본적인 컨테이너 컴포넌트 (웹의 <code>&lt;div&gt;</code> 역할). <b>주의: <code>&lt;View&gt;</code> 안에 글자를 바로 쓰면 에러가 나며, 모든 글자는 반드시 <code>&lt;Text&gt;</code> 안에 써야 합니다!</b></li>
          <li><b><code>&lt;Text&gt;</code> 중첩과 스타일 상속</b>: <code>&lt;Text&gt;</code> 안에 또 다른 <code>&lt;Text&gt;</code>를 중첩(Nesting)하면, <b>안쪽 Text는 바깥쪽 부모 Text의 스타일(<code>fontSize</code>, <code>color</code> 등)을 그대로 상속(물려받음)</b>하며, 자신이 새로 지정한 속성만 덮어씁니다.</li>
          <li><b><code>&lt;ScrollView&gt;</code></b>: 화면 영역을 넘어가는 긴 콘텐츠를 스크롤할 수 있게 감싸주는 컨테이너입니다.</li>
        </ul>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 22%;">컴포넌트 / API</th>
              <th style="width: 38%;">시험 필수 속성(Props) 총정리</th>
              <th>핵심 동작 및 주의사항</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);"><code>Text</code></b></td>
              <td>• <b><code>onPress</code></b>: 텍스트 터치 시 실행할 함수<br>• <b><code>numberOfLines={5}</code></b>: 최대 표시 줄 수 제한</td>
              <td><code>numberOfLines</code>를 초과하는 긴 문장은 자동으로 말줄임표(<code>...</code>) 처리됨</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>Button</code></b></td>
              <td>• <b><code>title</code></b>: 버튼에 표시할 문자열 (필수)<br>• <b><code>onPress</code></b>: 클릭 이벤트 핸들러 (필수)<br>• <b><code>color</code></b>: 버튼 색상</td>
              <td>자체 닫는 태그(<code>&lt;Button title="..." onPress={...} /&gt;</code>)로 사용하며 자식 태그를 가질 수 없음</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>Alert.alert</code></b></td>
              <td><code>Alert.alert(제목, 메시지, [버튼배열])</code></td>
              <td>네이티브 대화상자 팝업 표시. 취소 버튼에는 <code>style: "cancel"</code>, 확인 버튼에는 <code>onPress: () =&gt; ...</code> 지정</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>TextInput</code></b></td>
              <td>
                • <b><code>value</code></b>: 현재 입력창에 표시할 상태 변수<br>
                • <b><code>onChangeText</code></b>: 글자가 바뀔 때마다 새 문자열을 인자로 호출되는 콜백 함수<br>
                • <b><code>placeholder</code></b> / <b><code>placeholderTextColor</code></b><br>
                • <b><code>keyboardType="numeric"</code></b>: 숫자 키패드 표시<br>
                • <b><code>secureTextEntry</code></b>: 비밀번호 마스킹(<code>•••</code>)<br>
                • <b><code>editable</code></b>: 수정 가능 여부 (<code>true/false</code>)<br>
                • <b><code>multiline</code></b>, <b><code>numberOfLines={4}</code></b>, <b><code>maxLength={40}</code></b>
              </td>
              <td>
                • 숫자만 입력받기 필터링 정규식:<br>
                <code>text.replace(/[^0-9]/g, "")</code><br>
                • 입력값 확인 후 입력창 비우기:<br>
                <code>setValue("")</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">4-2. 4주차 교안 전체 실습 코드 5종 완벽 수록 (p.4~18)</div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          💻 [코드 4-1] <code>Text</code> 중첩 스타일 상속 &amp; <code>onPress</code> 상태 변경 + <code>numberOfLines={5}</code> (교안 p.5, p.8)
        </div>
        <pre class="code-block">// [교안 4주차 p.5 &amp; p.8 통합] Text 중첩 상속 + Text 터치 시 onPress로 상태 변경 + 5줄 말줄임
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TextExample() {
  const [titleText, setTitleText] = useState("산을 오르다 (터치해보세요)");
  const bodyText = "이것은 아주 긴 본문 텍스트입니다.\\n2번째 줄\\n3번째 줄\\n4번째 줄\\n5번째 줄\\n6번째 줄(숨겨짐)";

  const onPressTitle = () =&gt; {
    setTitleText("산은 높고 골은 깊다 [변경완료]");
  };

  return (
    &lt;View style={styles.container}&gt;
      {/* 바깥 Text의 baseText 스타일을 안쪽 Text들도 기본 상속받음! */}
      &lt;Text style={styles.baseText}&gt;
        &lt;Text style={styles.titleText} onPress={onPressTitle}&gt;
          {titleText}{"\\n"}{"\\n"}
        &lt;/Text&gt;
        {/* 최대 5줄까지만 표시하고 나머지는 ... 처리 */}
        &lt;Text numberOfLines={5}&gt;{bodyText}&lt;/Text&gt;
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  baseText: { fontFamily: "Cochin", fontSize: 16, color: "#333" },
  titleText: { fontSize: 22, fontWeight: "bold", color: "blue" },
});</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 4-2] <code>Button</code>과 <code>Alert.alert</code> 2버튼(취소/확인) 대화상자 (교안 p.11~12 — ★ 시험 빈칸 출제!)
        </div>
        <pre class="code-block">// [교안 4주차 p.11~12] Alert.alert(제목, 메시지, [취소버튼객체, 확인버튼객체])
import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";

export default function ButtonAlertExample() {
  const showConfirmAlert = () =&gt; {
    Alert.alert(
      "경고 타이틀",
      "정말로 실행하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () =&gt; console.log("취소 클릭됨"),
          style: "cancel",
        },
        {
          text: "확인",
          onPress: () =&gt; console.log("확인 클릭됨"),
        },
      ]
    );
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Button title="2버튼 알림창 띄우기" color="#f194ff" onPress={showConfirmAlert} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 4-3] <code>TextInput</code> 숫자 전용 필터링 &amp; 여러 줄 입력 + 확인 후 초기화 (교안 p.15~18)
        </div>
        <pre class="code-block">// [교안 4주차 p.15~18] 숫자만 남기는 정규식 replace(/[^0-9]/g, "") + multiline 입력 후 초기화
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function TextInputMaster() {
  const [numValue, setNumValue] = useState("");
  const [multiValue, setMultiValue] = useState("");

  // 1) 숫자가 아닌 문자는 모두 빈 문자열("")로 제거하는 핸들러 (교안 p.15)
  const handleNumericChange = (inputText) =&gt; {
    const filteredText = inputText.replace(/[^0-9]/g, "");
    setNumValue(filteredText);
  };

  // 2) 버튼 클릭 시 입력값 출력 후 입력창 비우기 (교안 p.17)
  const handlePressConfirm = () =&gt; {
    Alert.alert("입력된 값", multiValue || "(Empty)");
    setMultiValue(""); // 입력창 초기화!
  };

  return (
    &lt;View style={styles.container}&gt;
      {/* 숫자 키패드 + 비밀번호 마스킹 예제 */}
      &lt;TextInput
        style={styles.input}
        value={numValue}
        onChangeText={handleNumericChange}
        placeholder="숫자 비밀번호만 입력"
        keyboardType="numeric"
        secureTextEntry={true}
      /&gt;

      {/* 여러 줄(multiline) 최대 40자 입력 예제 */}
      &lt;TextInput
        style={styles.multiInput}
        editable={true}
        multiline={true}
        numberOfLines={4}
        maxLength={40}
        value={multiValue}
        onChangeText={(text) =&gt; setMultiValue(text)}
        placeholder="최대 40자까지 여러 줄 입력..."
      /&gt;

      &lt;Button title="입력 내용 확인 및 초기화" onPress={handlePressConfirm} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 12, paddingHorizontal: 10 },
  multiInput: { borderColor: "#000", borderWidth: 1, marginBottom: 12, padding: 10 },
});</pre>
      </div>
    </section>

    <!-- SECTION 6: 5주차 JSX & 고급 컴포넌트 -->
    <section id="cp-w5" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>📂 5주차: JSX 문법 · 조건부 렌더링 · Image · Switch · FlatList · SectionList (교안 p.1~14)</span>
        </div>
        <span class="badge badge-amber">FlatList 3대 Props &amp; 단축평가 100% 출제</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">5-1. JSX 개념과 장단점 및 조건부 렌더링 3대 기법 (p.2~7)</div>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px; margin-bottom: 14px;">
          <li><b>JSX(JavaScript XML)</b>: JavaScript 코드 안에서 UI 구조를 HTML/XML 태그 형태로 직관적으로 작성할 수 있게 해주는 확장 문법입니다. 빌드 시 Babel에 의해 <code>React.createElement(컴포넌트, props, 자식)</code> 호출 코드로 변환됩니다.</li>
          <li><b>JSX의 장점</b>: ① 시각적으로 구조 파악이 쉽고 가독성이 높음, ② 컴파일 과정에서 문법 오류를 빠르게 감지함, ③ 중괄호 <code>{ }</code>를 통해 JavaScript 변수·수식·함수를 자유롭게 결합 가능.</li>
          <li><b>JSX의 단점/주의점</b>: ① HTML과 완전히 같지 않아 고유 규칙(<code>camelCase</code>, 단일 부모 태그 등)을 배워야 함, ② 비즈니스 로직과 UI를 한 파일에 과도하게 섞으면 코드가 복잡해질 수 있음.</li>
          <li><b style="color: var(--tag-danger-ink);">JSX 절대 규칙 — 단일 루트 부모</b>: 컴포넌트가 반환하는 JSX의 최상위는 <b>반드시 단 하나의 부모 태그(<code>&lt;View&gt;...&lt;/View&gt;</code> 또는 Fragment <code>&lt;&gt;...&lt;/&gt;</code>)</b>로 감싸져야 합니다!</li>
        </ul>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          💻 [코드 5-1] 조건부 렌더링 3대 기법(<code>if-else</code> / 삼항 연산자 <code>? :</code> / 단축 평가 <code>&amp;&amp;, ||</code>) 및 실행 결과 완벽 추적 (교안 p.5~7)
        </div>
        <pre class="code-block">// [교안 5주차 p.5~7] 조건부 렌더링 실행 결과 예측 (시험 단골 유형!)
import React from "react";
import { View, Text } from "react-native";

export default function ConditionalRenderExample() {
  const name = "React";
  const falsyName = ""; // 빈 문자열("")은 JavaScript에서 거짓(Falsy)으로 평가됨!

  return (
    &lt;View&gt;
      {/* 1) 삼항 연산자 (조건 ? 참일때 : 거짓일때) */}
      &lt;Text&gt;{name === "React" ? "리액트입니다!" : "리액트가 아닙니다."}&lt;/Text&gt;
      {/* -&gt; 출력 결과: "리액트입니다!" */}

      {/* 2) &amp;&amp; (AND 단축 평가): 앞 조건이 true일 때만 뒤 요소를 렌더링함! */}
      {name === "React" &amp;&amp; &lt;Text&gt;환영합니다, React!&lt;/Text&gt;}
      {/* -&gt; 출력 결과: "환영합니다, React!" */}

      {name === "Vue" &amp;&amp; &lt;Text&gt;이 문장은 절대 화면에 나타나지 않습니다.&lt;/Text&gt;}
      {/* -&gt; 앞 조건이 false이므로 아무것도 렌더링되지 않음 */}

      {/* 3) || (OR 단축 평가): 앞의 값이 Falsy("", null, undefined, 0, false)이면 뒤의 기본값을 반환! */}
      &lt;Text&gt;{falsyName || "이름이 비어있을 때 표시되는 기본값"}&lt;/Text&gt;
      {/* -&gt; falsyName이 ""(거짓)이므로 뒤쪽 문자열 출력! */}
    &lt;/View&gt;
  );
}</pre>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">5-2. <code>&lt;Image&gt;</code> (로컬 vs 원격 URI) 및 <code>&lt;Switch&gt;</code> 다크모드 토글 (p.8~10)</div>
        <div class="callout-box warning" style="margin-bottom: 12px;">
          <div class="callout-title">🚨 [시험 단골 비교] 로컬 이미지(<code>require</code>) vs 원격 네트워크 이미지(<code>uri</code>)</div>
          • <b>로컬 이미지</b>: <code>source={require("./kangnam.png")}</code> — 번들링 시점에 이미지 크기를 자동으로 알 수 있습니다.<br>
          • <b>원격 URL 이미지</b>: <code>source={{ uri: "https://..." }}</code> — 다운로드하기 전까지 RN이 이미지 크기를 알 수 없으므로, <b style="color: var(--tag-danger-ink);">반드시 <code>style={{ width: 200, height: 200 }}</code>처럼 가로(<code>width</code>)와 세로(<code>height</code>) 크기를 명시해야 화면에 보입니다!</b> (지정하지 않으면 0×0으로 렌더링되어 보이지 않음)
        </div>

        <pre class="code-block">// [교안 5주차 p.8~10] Image 로컬/원격 비교 &amp; Switch 다크모드 배경 전환 전체 코드
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";

export default function ImageAndSwitchExample() {
  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () =&gt; setIsDark((prevState) =&gt; !prevState);

  return (
    &lt;View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#222222" : "#ffffff" }, // 스위치 상태에 따라 배경색 동적 전환!
      ]}
    &gt;
      {/* 1. 로컬 이미지: require('경로') */}
      &lt;Image source={require("./kangnam.png")} style={styles.image} /&gt;

      {/* 2. 원격 네트워크 이미지: {{ uri: '주소' }} + 반드시 width, height 지정! */}
      &lt;Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 80, height: 80, marginVertical: 10 }}
      /&gt;

      &lt;Text style={{ color: isDark ? "#ffffff" : "#000000", fontSize: 18, marginBottom: 10 }}&gt;
        현재 모드: {isDark ? "다크 모드 (ON)" : "라이트 모드 (OFF)"}
      &lt;/Text&gt;

      {/* 3. Switch 컴포넌트: value(현재 불리언값), onValueChange(상태변경 함수) 필수! */}
      &lt;Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isDark}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 120, height: 120, resizeMode: "contain" },
});</pre>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">5-3. <code>FlatList</code> vs <code>ScrollView</code> 및 <code>SectionList</code> 전체 코드 (p.11~14 — ★ 서술형 &amp; 빈칸 0순위!)</div>
        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 20%;">비교 기준</th>
              <th style="width: 38%;"><code>&lt;ScrollView&gt;</code></th>
              <th><code>&lt;FlatList&gt;</code> (대용량 목록 표준)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>렌더링 동작 원리</b></td>
              <td>컴포넌트가 마운트될 때 화면에 보이지 않는 <b>모든 자식 항목을 한꺼번에 메모리에 렌더링</b>함</td>
              <td>현재 <b>화면에 보이는 영역의 항목만 지연 렌더링(Lazy Rendering)</b>하고, 스크롤되어 화면 밖으로 나간 항목은 메모리에서 해제·재사용함</td>
            </tr>
            <tr>
              <td><b>메모리 및 성능</b></td>
              <td>데이터가 수백~수천 개로 많아지면 메모리 사용량이 급증하고 스크롤이 느려짐</td>
              <td>데이터가 아무리 많아도 <b>메모리 사용량이 일정하게 유지되며 빠른 렌더링 성능</b>을 보장함</td>
            </tr>
            <tr>
              <td><b>3대 필수 Props</b></td>
              <td>없음 (내부에 자식 태그 직접 배치)</td>
              <td>
                1. <b style="color: var(--accent);"><code>data</code></b>: 렌더링할 데이터 배열<br>
                2. <b style="color: var(--accent);"><code>renderItem</code></b>: 배열의 각 항목(<code>{ item }</code>)을 받아 JSX 컴포넌트로 반환하는 함수<br>
                3. <b style="color: var(--accent);"><code>keyExtractor</code></b>: 각 항목마다 고유한 문자열 <code>key</code>를 추출하는 함수
              </td>
            </tr>
          </tbody>
        </table>

        <pre class="code-block">// [교안 5주차 p.11~14] FlatList &amp; SectionList 전체 핵심 코드
import React from "react";
import { StyleSheet, View, Text, FlatList, SectionList } from "react-native";

const USERS = [
  { id: "1", name: "홍길동", email: "hong@kangnam.ac.kr" },
  { id: "2", name: "이순신", email: "lee@kangnam.ac.kr" },
  { id: "3", name: "강감찬", email: "kang@kangnam.ac.kr" },
];

const SECTIONS = [
  { title: "A그룹", data: ["김철수", "김영희"] },
  { title: "B그룹", data: ["박민수", "최지우"] },
];

export default function ListMasterExample() {
  return (
    &lt;View style={styles.container}&gt;
      {/* [1] FlatList: data, keyExtractor, renderItem 3대 Props 필수 암기! */}
      &lt;FlatList
        data={USERS}
        keyExtractor={(item) =&gt; item.id}
        renderItem={({ item }) =&gt; (
          &lt;View style={styles.itemBox}&gt;
            &lt;Text style={styles.name}&gt;{item.name}&lt;/Text&gt;
            &lt;Text&gt;{item.email}&lt;/Text&gt;
          &lt;/View&gt;
        )}
      /&gt;

      {/* [2] SectionList: 섹션별 헤더(renderSectionHeader)와 목록을 함께 표시할 때 사용 */}
      &lt;SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) =&gt; item + index}
        renderItem={({ item }) =&gt; &lt;Text style={styles.item}&gt;{item}&lt;/Text&gt;}
        renderSectionHeader={({ section: { title } }) =&gt; (
          &lt;Text style={styles.header}&gt;{title}&lt;/Text&gt;
        )}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, paddingHorizontal: 16 },
  itemBox: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  name: { fontSize: 18, fontWeight: "bold" },
  header: { fontSize: 20, fontWeight: "bold", backgroundColor: "#eee", padding: 8 },
  item: { padding: 10, fontSize: 16 },
});</pre>
      </div>
    </section>

    <!-- SECTION 7: 6주차 컴포넌트 응용 10대 API -->
    <section id="cp-w6" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>📂 6주차: 컴포넌트 응용 &amp; 10대 네이티브 API 전체 코드 해부 (교안 p.1~22)</span>
        </div>
        <span class="badge badge-amber">각 API 목적 &amp; 핵심 코드 완벽 수록</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">6-1. 1~5번 API: BackHandler · DrawerLayoutAndroid · ToastAndroid · Animated · Dimensions</div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          💻 [1] <code>BackHandler</code>: 안드로이드 하드웨어 뒤로가기 버튼 감지 및 종료 확인 팝업 (교안 p.2~3)
        </div>
        <pre class="code-block">// ★ 핵심 포인트:
// 1) 이벤트 이름: "hardwareBackPress"
// 2) 콜백 함수에서 return true; 를 반환해야 시스템의 기본 뒤로가기(즉시 종료)를 막고 커스텀 Alert를 띄움!
// 3) useEffect의 return () =&gt; backHandler.remove(); 로 언마운트 시 이벤트 리스너를 반드시 해제!
import React, { useEffect } from "react";
import { View, Text, BackHandler, Alert } from "react-native";

export function BackHandlerExample() {
  useEffect(() =&gt; {
    const backAction = () =&gt; {
      Alert.alert("잠깐만요!", "정말로 앱을 종료하시겠습니까?", [
        { text: "취소", onPress: () =&gt; null, style: "cancel" },
        { text: "종료", onPress: () =&gt; BackHandler.exitApp() },
      ]);
      return true; // 기본 뒤로가기 동작 차단!
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =&gt; backHandler.remove(); // 클린업 함수에서 리스너 제거
  }, []);

  return (
    &lt;View&gt;&lt;Text&gt;하드웨어 뒤로가기 버튼을 눌러보세요!&lt;/Text&gt;&lt;/View&gt;
  );
}</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [2] <code>DrawerLayoutAndroid</code> &amp; [3] <code>ToastAndroid</code> (교안 p.4~7)
        </div>
        <pre class="code-block">// [2] DrawerLayoutAndroid: 화면 좌/우에서 슬라이드로 열리는 네이티브 서랍 메뉴
// - drawer.current.openDrawer() 로 열고, drawer.current.closeDrawer() 로 닫음!
// - renderNavigationView 속성에 서랍 안에 들어갈 화면 함수를 전달함!
import React, { useRef } from "react";
import { DrawerLayoutAndroid, ToastAndroid, View, Text, Button } from "react-native";

export function DrawerAndToastExample() {
  const drawer = useRef(null);

  // [3] ToastAndroid: 안드로이드 하단/중앙에 잠깐 나타났다 사라지는 짧은 알림 메시지
  const showToast = () =&gt; {
    ToastAndroid.show("기본 토스트 메시지입니다!", ToastAndroid.SHORT);
  };
  const showToastWithGravity = () =&gt; {
    ToastAndroid.showWithGravityAndOffset(
      "화면 중앙 토스트!",
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50
    );
  };

  const navigationView = () =&gt; (
    &lt;View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}&gt;
      &lt;Text&gt;서랍(Drawer) 내부 메뉴입니다.&lt;/Text&gt;
      &lt;Button title="서랍 닫기" onPress={() =&gt; drawer.current.closeDrawer()} /&gt;
    &lt;/View&gt;
  );

  return (
    &lt;DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    &gt;
      &lt;View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}&gt;
        &lt;Button title="서랍 열기" onPress={() =&gt; drawer.current.openDrawer()} /&gt;
        &lt;Button title="토스트 띄우기" onPress={showToast} /&gt;
        &lt;Button title="중앙 토스트 띄우기" onPress={showToastWithGravity} /&gt;
      &lt;/View&gt;
    &lt;/DrawerLayoutAndroid&gt;
  );
}</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [4] <code>Animated</code> (Fade In / Fade Out) &amp; [5] <code>Dimensions</code> (화면 크기 감지) (교안 p.8~11)
        </div>
        <pre class="code-block">// [4] Animated 핵심 3단계:
// ① useRef(new Animated.Value(0)).current 로 애니메이션 값 생성 (리렌더링 되어도 값 유지)
// ② Animated.timing(fadeAnim, { toValue: 1, duration: 5000, useNativeDriver: true }).start() 호출
// ③ 일반 &lt;View&gt; 대신 반드시 &lt;Animated.View style={{ opacity: fadeAnim }}&gt; 에 바인딩!
import React, { useRef, useState, useEffect } from "react";
import { Animated, Dimensions, View, Text, Button } from "react-native";

export function AnimatedAndDimensionsExample() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // 초기 투명도 0 (안 보임)

  // [5] Dimensions: 'window'(상태바·소프트키 제외 실제 앱 표시 영역) vs 'screen'(기기 물리 전체 화면)
  const [ dims, setDims ] = useState({
    window: Dimensions.get("window"),
    screen: Dimensions.get("screen"),
  });

  useEffect(() =&gt; {
    const subscription = Dimensions.addEventListener("change", ({ window, screen }) =&gt; {
      setDims({ window, screen }); // 화면 회전 시 해상도 자동 갱신
    });
    return () =&gt; subscription?.remove();
  }, []);

  const fadeIn = () =&gt; {
    Animated.timing(fadeAnim, {
      toValue: 1,           // 불투명도 1까지 서서히 나타남
      duration: 5000,       // 5000ms (5초) 동안 진행
      useNativeDriver: true, // 네이티브 UI 스레드에서 끊김 없이 실행
    }).start();
  };

  const fadeOut = () =&gt; {
    Animated.timing(fadeAnim, {
      toValue: 0,           // 불투명도 0으로 서서히 사라짐
      duration: 3000,       // 3000ms (3초) 동안 진행
      useNativeDriver: true,
    }).start();
  };

  return (
    &lt;View&gt;
      &lt;Animated.View style={{ opacity: fadeAnim, padding: 20, backgroundColor: "powderblue" }}&gt;
        &lt;Text&gt;Fading View! Window 가로: {dims.window.width}&lt;/Text&gt;
      &lt;/Animated.View&gt;
      &lt;Button title="Fade In (나타나기)" onPress={fadeIn} /&gt;
      &lt;Button title="Fade Out (사라지기)" onPress={fadeOut} /&gt;
    &lt;/View&gt;
  );
}</pre>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">6-2. 6~10번 API: KeyboardAvoidingView · Linking · Modal · PixelRatio · RefreshControl</div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          💻 [6] <code>KeyboardAvoidingView</code> &amp; [7] <code>Linking</code> &amp; [8] <code>Modal</code> (교안 p.12~17)
        </div>
        <pre class="code-block">// [6] KeyboardAvoidingView: 가상 키보드가 올라올 때 TextInput이 가려지지 않도록 자동으로 패딩/높이 조절
//     + TouchableWithoutFeedback onPress={Keyboard.dismiss} 로 빈 화면 터치 시 키보드 닫기!
// [7] Linking.openURL(url): 외부 웹 브라우저나 전화/메일 등 외부 앱 실행 (교안: https://blog.naver.com/jongsoo67)
// [8] Modal: 현재 화면 위에 덮어씌워지는 팝업 창 (visible, animationType, transparent, onRequestClose)
import React, { useState } from "react";
import {
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform,
  Linking, Modal, View, Text, TextInput, Button
} from "react-native";

export function KeyboardLinkingModalExample() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    &lt;KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    &gt;
      &lt;TouchableWithoutFeedback onPress={Keyboard.dismiss}&gt;
        &lt;View style={{ flex: 1, justifyContent: "space-around", padding: 24 }}&gt;
          &lt;TextInput placeholder="터치하면 키보드가 입력창을 가리지 않고 올라옵니다" /&gt;

          {/* Linking으로 외부 웹페이지 열기 */}
          &lt;Button
            title="교수님 블로그 열기"
            onPress={() =&gt; Linking.openURL("https://blog.naver.com/jongsoo67")}
          /&gt;

          {/* Modal 팝업창 제어 */}
          &lt;Button title="모달 팝업 열기" onPress={() =&gt; setModalVisible(true)} /&gt;
          &lt;Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() =&gt; setModalVisible(false)}
          &gt;
            &lt;View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}&gt;
              &lt;Text&gt;모달 팝업 창 내용입니다!&lt;/Text&gt;
              &lt;Button title="모달 닫기" onPress={() =&gt; setModalVisible(false)} /&gt;
            &lt;/View&gt;
          &lt;/Modal&gt;
        &lt;/View&gt;
      &lt;/TouchableWithoutFeedback&gt;
    &lt;/KeyboardAvoidingView&gt;
  );
}</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [9] <code>PixelRatio</code> &amp; [10] <code>RefreshControl</code> 당겨서 새로고침 (교안 p.18~22)
        </div>
        <pre class="code-block">// [9] PixelRatio: 기기의 픽셀 밀도(DPI 배율)와 폰트 배율을 조회하거나 레이아웃 크기(dp)를 실제 픽셀(px)로 변환
//     - PixelRatio.get(): 기기 픽셀 밀도 반환 / PixelRatio.getFontScale(): 글꼴 크기 배율 반환
//     - PixelRatio.getPixelSizeForLayoutSize(size): 레이아웃 사이즈를 실제 픽셀 크기로 변환 (size * PixelRatio.get())
// [10] RefreshControl: ScrollView 나 FlatList 내부에서 화면을 아래로 당겨 새로고침(Pull-to-Refresh) 구현!
import React, { useState, useRef, useCallback, useEffect } from "react";
import { ScrollView, RefreshControl, PixelRatio, Text, View } from "react-native";

export function PixelAndRefreshExample() {
  const [refreshing, setRefreshing] = useState(false);
  const timeoutRef = useRef(null);

  const onRefresh = useCallback(() =&gt; {
    if (refreshing) return; // 이미 새로고침 중이면 중복 실행 방지
    setRefreshing(true);
    timeoutRef.current = setTimeout(() =&gt; {
      setRefreshing(false);
      timeoutRef.current = null;
    }, 2000); // 2초 후 새로고침 스피너 종료
  }, [refreshing]);

  useEffect(() =&gt; {
    return () =&gt; {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // 언마운트 시 타이머 정리
    };
  }, []);

  const dpi = PixelRatio.get();
  const fontScale = PixelRatio.getFontScale();
  const realPx = PixelRatio.getPixelSizeForLayoutSize(50);

  return (
    &lt;ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      refreshControl={
        &lt;RefreshControl refreshing={refreshing} onRefresh={onRefresh} /&gt;
      }
    &gt;
      &lt;Text&gt;아래로 당겨서 새로고침(Pull to Refresh) 해보세요!&lt;/Text&gt;
      &lt;Text&gt;픽셀 밀도: {dpi} / 폰트 배율: {fontScale} / 50dp의 실제 픽셀: {realPx}px&lt;/Text&gt;
    &lt;/ScrollView&gt;
  );
}</pre>
      </div>
    </section>

    <!-- SECTION 8: 7주차 Hook 4총사 & 계산기 실습 -->
    <section id="cp-w7" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title">
          <span>📂 7주차: React Hook 4총사 (useState · useRef · useEffect · useMemo) &amp; 계산기 실습 (교안 p.1~21)</span>
        </div>
        <span class="badge badge-amber">교수님 강조 최고 배점 단원!</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">7-1. Hook의 개념과 3대 필수 작성 규칙 (p.2~3)</div>
        <p style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.75; margin-bottom: 12px;">
          <b>Hook(훅)</b>은 클래스형 컴포넌트를 작성하지 않고도 <b>함수형 컴포넌트 안에서 상태(State) 관리와 생명주기(Lifecycle) 기능을 연결(Hook into)하여 사용할 수 있게 해주는 함수</b>입니다.
        </p>

        <div class="callout-box warning" style="margin-bottom: 14px;">
          <div class="callout-title">🚨 [서술형 &amp; 단답형 필수] Hook 사용 시 반드시 지켜야 할 3대 규칙</div>
          <b>1. 이름은 반드시 <code>use</code>로 시작</b>: <code>useState</code>, <code>useRef</code>, <code>useEffect</code>, <code>useMemo</code>처럼 모든 Hook은 <code>use</code> 접두사로 시작합니다.<br>
          <b>2. 최상위(Top-level)에서만 호출</b>: <b style="color: var(--tag-danger-ink);"><code>if</code> 조건문, <code>for</code> 반복문, 중첩된 일반 함수 안에서 Hook을 호출하면 절대 안 됩니다!</b> (렌더링할 때마다 Hook이 항상 동일한 순서로 호출되어야 React가 상태를 올바르게 추적할 수 있기 때문)<br>
          <b>3. React 함수형 컴포넌트(또는 Custom Hook) 내부에서만 호출</b>: 일반 JavaScript 함수나 클래스형 컴포넌트 안에서는 호출할 수 없습니다.
        </div>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 16%;">Hook 이름</th>
              <th style="width: 28%;">기본 선언 문법</th>
              <th style="width: 22%;">값 변경 시 리렌더링</th>
              <th>핵심 역할 및 사용 시점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);"><code>useState</code></b></td>
              <td><code>const [state, setState] = useState(초기값);</code></td>
              <td><b style="color: var(--tag-danger-ink);">O (리렌더링 발생!)</b></td>
              <td>화면 UI에 즉시 반영되어야 하는 동적 상태값을 저장하고 갱신할 때 사용</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>useRef</code></b></td>
              <td><code>const ref = useRef(초기값);</code><br>(접근: <code>ref.current</code>)</td>
              <td><b style="color: var(--tag-green-ink);">X (리렌더링 안 됨!)</b></td>
              <td>① 리렌더링을 유발하지 않고 렌더링 간에 값을 계속 유지할 때<br>② <code>TextInput</code> 포커스 이동(<code>inputRef.current.focus()</code>) 등 컴포넌트 인스턴스를 직접 제어할 때</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>useEffect</code></b></td>
              <td><code>useEffect(() =&gt; { ... }, [의존성]);</code></td>
              <td>부수 효과(Side Effect) 실행</td>
              <td>컴포넌트 마운트(처음 나타남), 상태 업데이트, 언마운트(사라짐) 시점에 타이머, 이벤트 리스너, 서버 통신 등을 수행</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>useMemo</code></b></td>
              <td><code>const val = useMemo(() =&gt; 계산식, [의존성]);</code></td>
              <td>계산 결과값 캐싱(재사용)</td>
              <td>복잡하고 무거운 연산 결과값을 메모리에 기억(Memoization)해 두고, <b>의존성 배열의 값이 바뀔 때만 재계산</b>하여 렌더링 성능을 최적화함</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">7-2. <code>useState</code> vs <code>useRef</code> vs 일반 변수(<code>let</code>) 결정적 차이 &amp; 포커스 제어 코드 (p.4~13)</div>

        <div class="callout-box warning" style="margin-bottom: 12px;">
          <div class="callout-title">🔥 [시험 100% 출제 유형] 교안 p.10 <code>useRef</code> vs <code>let countVar</code> 실행 결과 예측 완벽 해부!</div>
          교안 10페이지 코드에서 <b><code>[Increase Ref &amp; Variable]</code> 버튼을 4번 연속 클릭</b>한 뒤, <b><code>[Re-render]</code> 버튼을 1번 클릭</b>하면 화면에 무엇이 찍힐까요?<br>
          • <b>1단계 (Increase 버튼 4번 클릭 중)</b>: <code>countRef.current</code>는 <code>0 → 1 → 2 → 3 → 4</code>가 되고, <code>countVar</code>도 <code>5 → 6 → 7 → 8 → 9</code>가 됩니다. <b>하지만 둘 다 <code>useState</code> 세터 함수를 호출하지 않았으므로 화면 리렌더링이 일어나지 않아, 화면에는 여전히 초기값 <code>CountRef: 0</code>, <code>CountVar: 5</code>가 그대로 보입니다!</b><br>
          • <b>2단계 (Re-render 버튼 1번 클릭 순간)</b>: <code>setRender(!render)</code>가 호출되면서 컴포넌트 함수 전체가 처음부터 다시 실행(리렌더링)됩니다!<br>
          &nbsp;&nbsp;👉 <b><code>countRef.current</code></b>: <code>useRef</code> 객체는 컴포넌트가 리렌더링되어도 메모리에 값을 그대로 보존하므로 화면에 <b style="color: var(--accent);"><code>CountRef: 4</code></b>가 출력됩니다!<br>
          &nbsp;&nbsp;👉 <b><code>countVar</code></b>: 함수 내부의 일반 지역 변수(<code>let countVar = 5;</code>)는 컴포넌트 함수가 다시 실행될 때 <b>초기값 <code>5</code>로 다시 초기화</b>되므로 이전에 더했던 <code>9</code>가 날아가고 화면에 <b style="color: var(--tag-danger-ink);"><code>CountVar: 5</code></b>가 출력됩니다!
        </div>

        <pre class="code-block">// [교안 7주차 p.10 원본 코드] useState(리렌더링 트리거) vs useRef(값 유지) vs let(리렌더링 시 초기화)
import React, { useState, useRef } from "react";
import { View, Text, Button } from "react-native";

export function RefVsVarExample() {
  const [render, setRender] = useState(false);
  const countRef = useRef(0); // 리렌더링되어도 .current 값 유지!
  let countVar = 5;           // 일반 지역변수: 리렌더링될 때마다 5로 다시 초기화됨!

  const increaseRefAndVar = () =&gt; {
    countRef.current = countRef.current + 1;
    countVar = countVar + 1;
    console.log("Ref:", countRef.current, "Var:", countVar);
    // 주의: 여기서는 setState를 호출하지 않았으므로 화면(UI)은 아직 바뀌지 않음!
  };

  return (
    &lt;View&gt;
      &lt;Text&gt;CountRef: {countRef.current}&lt;/Text&gt;
      &lt;Text&gt;CountVar: {countVar}&lt;/Text&gt;
      &lt;Button title="Increase Ref &amp; Variable" onPress={increaseRefAndVar} /&gt;
      &lt;Button title="Re-render (화면 갱신)" onPress={() =&gt; setRender(!render)} /&gt;
    &lt;/View&gt;
  );
}</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 7-2] <code>useState</code> + <code>useRef</code>를 결합한 <code>A × B</code> 곱셈 계산기 및 자동 포커스 이동 (교안 p.8, p.11~13 통합)
        </div>
        <pre class="code-block">// [교안 7주차 p.8 &amp; p.12~13] A * B 계산 후 첫 번째 입력창(inputRef)으로 커서(포커스) 자동 이동!
import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function MultiplyWithFocus() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  // 1. 포커스를 제어할 ref 객체 생성
  const inputRef = useRef(null);

  const handleMultiply = () =&gt; {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) &amp;&amp; !isNaN(numB)) {
      setResult(numA * numB);
    } else {
      setResult("올바른 숫자를 입력하세요");
    }
    // 2. 계산 완료 후 첫 번째 TextInput(A)으로 커서 포커스 즉시 이동!
    inputRef.current?.focus(); // (또는 inputRef.current.focus();)
  };

  return (
    &lt;View style={styles.container}&gt;
      {/* 3. ref={inputRef} 속성으로 TextInput 컴포넌트와 ref 연결! */}
      &lt;TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="첫 번째 숫자 (A)"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      /&gt;
      &lt;TextInput
        style={styles.input}
        placeholder="두 번째 숫자 (B)"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      /&gt;
      &lt;Button title="A × B 계산하기" onPress={handleMultiply} /&gt;
      {result !== null &amp;&amp; &lt;Text style={styles.resultText}&gt;결과: {result}&lt;/Text&gt;}
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10 },
  resultText: { fontSize: 22, fontWeight: "bold", marginTop: 15 },
});</pre>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">7-3. <code>useEffect</code> 의존성 배열 3가지 패턴과 <code>useMemo</code> 최적화 코드 (p.14~19)</div>

        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 28%;"><code>useEffect</code> 두 번째 인자 (의존성 배열)</th>
              <th style="width: 34%;">코드 작성 형태</th>
              <th>실행되는 정확한 시점 (시험 필수!)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1) 의존성 배열 생략</b></td>
              <td><code>useEffect(() =&gt; { ... });</code></td>
              <td>컴포넌트가 <b>최초 마운트될 때 1회 + 어떤 상태든 바뀌어 리렌더링될 때마다 매번</b> 실행됨</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">2) 빈 배열 <code>[]</code> 전달</b></td>
              <td><code>useEffect(() =&gt; { ... }, []);</code></td>
              <td>컴포넌트가 화면에 <b>최초 마운트(처음 로드)될 때 단 1회만</b> 실행됨! (이후 리렌더링 시 실행 안 됨)</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);">3) 특정 상태 <code>[count]</code> 전달</b></td>
              <td><code>useEffect(() =&gt; { ... }, [count]);</code></td>
              <td><b>최초 마운트될 때 1회 + 배열에 넣은 <code>count</code> 값이 변경될 때만</b> 실행됨! (다른 상태 변경 시에는 실행 안 됨)</td>
            </tr>
          </tbody>
        </table>

        <pre class="code-block">// [교안 7주차 p.18~19] useMemo를 활용한 불필요한 재계산 방지 완벽 코드
// ★ 핵심 포인트:
// - text 입력창에 글자를 칠 때마다 컴포넌트가 리렌더링되지만, count 값은 바뀌지 않았으므로
//   useMemo 내부의 console.log("계산 중...")은 다시 실행되지 않고 이전 캐시 결과값을 그대로 재사용함!
// - 오직 [+1] 버튼을 눌러 count가 바뀔 때만 useMemo 콜백이 다시 실행됨!
import React, { useState, useMemo } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // count가 변경될 때만 (count * 2) 연산을 수행하고, text만 바뀔 때는 캐싱된 값을 그대로 반환!
  const double = useMemo(() =&gt; {
    console.log("계산 중... (count가 변경되었을 때만 찍힘!)");
    return count * 2;
  }, [count]);

  return (
    &lt;View style={{ flex: 1, justifyContent: "center", padding: 20 }}&gt;
      &lt;Text style={{ fontSize: 20 }}&gt;Count: {count} / 2배 값(double): {double}&lt;/Text&gt;
      &lt;Button title="Count +1 증가" onPress={() =&gt; setCount(count + 1)} /&gt;

      &lt;TextInput
        value={text}
        onChangeText={setText}
        placeholder="여기에 글자를 입력해도 useMemo는 재계산되지 않습니다!"
        style={{ borderWidth: 1, marginTop: 16, padding: 8 }}
      /&gt;
    &lt;/View&gt;
  );
}</pre>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">7-4. 7주차 실습 과제: 계산기(Calculator) 앱 상세 조건 &amp; 전체 코드 (p.20~21)</div>
        <div class="callout-box warning" style="margin-bottom: 12px;">
          <div class="callout-title">🚨 [교수님 녹음본 직접 경고] 과제 상세 조건(색상·폰트 크기·높이) 불일치 시 0점/감점!</div>
          교수님 말씀: <i>"과제에 상세 조건이 있어. 블랙 대신 회색을 쓰거나 조건 안 지키면 점수가 안 나갑니다!"</i><br>
          아래 표의 <b>7대 상세 스타일 조건 수치와 색상 코드</b>를 토씨 하나 틀리지 않고 그대로 기억하세요!
        </div>

        <table class="concept-table" style="margin-bottom: 14px;">
          <thead>
            <tr>
              <th style="width: 28%;">스타일 대상 (Style 객체명)</th>
              <th style="width: 42%;">교안 지정 필수 속성 &amp; 정확한 값</th>
              <th>역할 설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. 전체 배경 (<code>container</code>)</b></td>
              <td><b style="color: var(--accent);"><code>backgroundColor: 'black'</code></b>, <code>flex: 1</code></td>
              <td>계산기 전체 화면 배경색 (반드시 <code>'black'</code>)</td>
            </tr>
            <tr>
              <td><b>2. 결과 표시 텍스트 (<code>displayText</code>)</b></td>
              <td><b style="color: var(--accent);"><code>color: 'white'</code>, <code>fontSize: 84</code>, <code>textAlign: 'right'</code>, <code>fontWeight: '300'</code></b></td>
              <td>상단 계산 결과 숫자 표시 (우측 정렬, 크기 84)</td>
            </tr>
            <tr>
              <td><b>3. 버튼 공통 높이 (<code>button</code>)</b></td>
              <td><b style="color: var(--accent);"><code>height: 64</code></b>, <code>flex: 1</code>, <code>margin: 4</code></td>
              <td>모든 계산기 버튼의 기본 높이 64</td>
            </tr>
            <tr>
              <td><b>4. 숫자 버튼 (<code>numberButton</code>)</b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>backgroundColor: '#2f2f2f'</code></b></td>
              <td><code>0~9</code>, <code>.</code> 숫자 키패드 배경색 (짙은 회색)</td>
            </tr>
            <tr>
              <td><b>5. 연산자 버튼 (<code>operatorButton</code>)</b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>backgroundColor: '#F5A623'</code></b></td>
              <td><code>÷, ×, -, +, =</code> 우측 사칙연산 버튼 배경색 (오렌지색)</td>
            </tr>
            <tr>
              <td><b>6. 유틸리티 버튼 (<code>utilityButton</code>)</b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>backgroundColor: '#555'</code></b></td>
              <td><code>AC, +/-, %</code> 상단 기능 버튼 배경색 (중간 회색)</td>
            </tr>
            <tr>
              <td><b>7. 버튼 내부 글자 (<code>buttonText</code>)</b></td>
              <td><b style="color: var(--accent);"><code>color: 'white'</code>, <code>fontSize: 30</code>, <code>fontWeight: '500'</code></b></td>
              <td>모든 버튼 안에 적히는 텍스트 스타일</td>
            </tr>
          </tbody>
        </table>

        <pre class="code-block">// [교안 7주차 p.20~21] 상세 조건을 100% 준수한 계산기(Calculator) 핵심 구현 코드
import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function CalculatorApp() {
  const [displayValue, setDisplayValue] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberPress = (num) =&gt; {
    setDisplayValue(displayValue === "0" ? String(num) : displayValue + num);
  };

  const handleOperatorPress = (op) =&gt; {
    setPrevValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue("0");
  };

  const handleEqualPress = () =&gt; {
    const current = parseFloat(displayValue);
    if (prevValue === null || !operator) return;
    let res = 0;
    if (operator === "+") res = prevValue + current;
    else if (operator === "-") res = prevValue - current;
    else if (operator === "×") res = prevValue * current;
    else if (operator === "÷") res = current !== 0 ? prevValue / current : "Error";
    setDisplayValue(String(res));
    setPrevValue(null);
    setOperator(null);
  };

  const handleClear = () =&gt; {
    setDisplayValue("0");
    setPrevValue(null);
    setOperator(null);
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.displayContainer}&gt;
        &lt;Text style={styles.displayText}&gt;{displayValue}&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.row}&gt;
        &lt;Pressable style={[styles.button, styles.utilityButton]} onPress={handleClear}&gt;
          &lt;Text style={styles.buttonText}&gt;AC&lt;/Text&gt;
        &lt;/Pressable&gt;
        &lt;Pressable style={[styles.button, styles.operatorButton]} onPress={() =&gt; handleOperatorPress("÷")}&gt;
          &lt;Text style={styles.buttonText}&gt;÷&lt;/Text&gt;
        &lt;/Pressable&gt;
      &lt;/View&gt;
      &lt;View style={styles.row}&gt;
        &lt;Pressable style={[styles.button, styles.numberButton]} onPress={() =&gt; handleNumberPress(7)}&gt;
          &lt;Text style={styles.buttonText}&gt;7&lt;/Text&gt;
        &lt;/Pressable&gt;
        &lt;Pressable style={[styles.button, styles.numberButton]} onPress={() =&gt; handleNumberPress(8)}&gt;
          &lt;Text style={styles.buttonText}&gt;8&lt;/Text&gt;
        &lt;/Pressable&gt;
        &lt;Pressable style={[styles.button, styles.operatorButton]} onPress={handleEqualPress}&gt;
          &lt;Text style={styles.buttonText}&gt;=&lt;/Text&gt;
        &lt;/Pressable&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", justifyContent: "flex-end", padding: 12 },
  displayContainer: { padding: 16, justifyContent: "flex-end" },
  displayText: { color: "white", fontSize: 84, fontWeight: "300", textAlign: "right" },
  row: { flexDirection: "row", marginBottom: 8 },
  button: { flex: 1, height: 64, margin: 4, borderRadius: 32, justifyContent: "center", alignItems: "center" },
  numberButton: { backgroundColor: "#2f2f2f" },
  operatorButton: { backgroundColor: "#F5A623" },
  utilityButton: { backgroundColor: "#555" },
  buttonText: { color: "white", fontSize: 30, fontWeight: "500" },
});</pre>
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
          sampleAnswer: "<pre style='margin: 0; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; white-space: pre-wrap;'>import React, { useState } from 'react';\nimport { View, TextInput, Button, Text } from 'react-native';\n\nexport default function Multiplier() {\n    const [numA, setNumA] = useState('');\n    const [numB, setNumB] = useState('');\n    const [result, setResult] = useState(0);\n\n    const handleMultiply = () =&gt; {\n        const a = parseFloat(numA) || 0;\n        const b = parseFloat(numB) || 0;\n        setResult(a * b);\n    };\n\n    return (\n        &lt;View style={{ padding: 20 }}&gt;\n            &lt;TextInput value={numA} onChangeText={setNumA} keyboardType=\"numeric\" placeholder=\"숫자 A\" /&gt;\n            &lt;TextInput value={numB} onChangeText={setNumB} keyboardType=\"numeric\" placeholder=\"숫자 B\" /&gt;\n            &lt;Button title=\"곱하기 계산\" onPress={handleMultiply} /&gt;\n            &lt;Text style={{ fontSize: 24, marginTop: 10 }}&gt;결과: {result}&lt;/Text&gt;\n        &lt;/View&gt;\n    );\n}</pre>",
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


