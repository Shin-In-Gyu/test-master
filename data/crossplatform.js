// ========================================================
// 📱 [DATA MODULE] 크로스플랫폼 프로그래밍 (Cross-Platform Programming)
// 담당 교수: 정종수 (jungjongsoo@yahoo.com)
// 3주차 ~ 7주차 교안 PDF 원문 및 교수님 공지 100% 전수 반영
// ========================================================
window.CONCEPT_DATABASE = window.CONCEPT_DATABASE || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};

// 1. 크로스플랫폼 프로그래밍 개념 총정리 (3주차~7주차)
window.CONCEPT_DATABASE.crossplatform = {
  id: "crossplatform",
  title: "📱 크로스플랫폼 프로그래밍 (정종수 교수) 3~7주차 핵심 총정리 & 시험대비 치트시트",
  filterChips: [
    { id: "all", label: "전체보기" },
    { id: "cp-cheat", label: "⚡ 1초 정답 치트키 (15선)", class: "amber-chip" },
    { id: "cp-prof", label: "🎯 교수님 시험공지 & 감점방지 기준", class: "danger-chip" },
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
        <span style="font-size: 13.5px; opacity: 0.95;">교안 PDF 원문 기반 단답형/빈칸 출제 1순위 키워드 모음</span>
      </div>

      <div class="qa-grid">
        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q1</span><span>리액트 네이티브에서 레이아웃의 기본 주축 정렬 방향(flexDirection) 기본값은?</span></div>
          <div class="qa-a"><span class="ans-target">column (세로 방향)</span><button class="copy-btn" onclick="copyText('column')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 일반 웹 CSS(row)와 달리 모바일 환경이므로 세로(column)가 기본값임 (3주차 p.5)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q2</span><span>두 개 이상의 스타일 객체를 병합하여 컴포넌트에 동시 적용할 때 사용하는 표기법은?</span></div>
          <div class="qa-a"><span class="ans-target">배열 표기법 [styles.a, styles.b]</span><button class="copy-btn" onclick="copyText('[styles.a, styles.b]')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 배열 뒤쪽에 위치한 스타일이 앞쪽 스타일을 덮어씀(오버라이드) (3주차 p.13)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q3</span><span>대용량 목록을 최적화하여 화면에 보이는 부분만 지연 렌더링하는 FlatList의 3대 필수 Props는?</span></div>
          <div class="qa-a"><span class="ans-target">data, renderItem, keyExtractor</span><button class="copy-btn" onclick="copyText('data, renderItem, keyExtractor')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* data: 데이터 배열, renderItem: 렌더링 콜백, keyExtractor: 고유키 추출 (5주차 p.12)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q4</span><span>값 변경 시 컴포넌트 리렌더링을 유발하지 않고 유지되는 Hook과 값 접근 프로퍼티는?</span></div>
          <div class="qa-a"><span class="ans-target">useRef / .current</span><button class="copy-btn" onclick="copyText('useRef / .current')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* useState는 세터 호출 시 리렌더링 유발, useRef는 리렌더링 없이 값 유지 및 DOM/TextInput 제어 (7주차 p.8)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q5</span><span>useEffect에서 컴포넌트가 화면에 '최초 마운트될 때 딱 1번만 실행'되게 하는 의존성 배열 인자는?</span></div>
          <div class="qa-a"><span class="ans-target">빈 배열 [] (Empty Dependency Array)</span><button class="copy-btn" onclick="copyText('[]')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 의존성 배열 생략 시 매 렌더링마다 실행, [count] 전달 시 count 변경 시마다 실행 (7주차 p.14)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q6</span><span>연산 비용이 큰 계산 결과값을 메모리에 캐싱하여 불필요한 재계산을 방지하는 최적화 Hook은?</span></div>
          <div class="qa-a"><span class="ans-target">useMemo</span><button class="copy-btn" onclick="copyText('useMemo')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 의존성 배열의 값이 변경되었을 때만 계산 함수를 다시 실행함 (7주차 p.16)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q7</span><span>안드로이드의 하드웨어 뒤로가기 버튼을 감지하고 기본 시스템 동작을 차단할 때 반환하는 boolean 값은?</span></div>
          <div class="qa-a"><span class="ans-target">true</span><button class="copy-btn" onclick="copyText('true')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* false 반환 시 기본 뒤로가기(즉시종료) 실행, true 반환 시 커스텀 로직(Alert 등) 수행 (6주차 p.4)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q8</span><span>상태바와 소프트키를 제외한 실제 앱 가용 영역의 해상도를 픽셀 단위로 구하는 API 메서드는?</span></div>
          <div class="qa-a"><span class="ans-target">Dimensions.get('window')</span><button class="copy-btn" onclick="copyText('Dimensions.get(\\'window\\')')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 'screen'은 기기의 물리적 전체 화면 크기를 반환함 (6주차 p.11)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q9</span><span>TextInput에서 비밀번호를 별표(***)나 점으로 숨겨주는 boolean 속성(Prop)은?</span></div>
          <div class="qa-a"><span class="ans-target">secureTextEntry</span><button class="copy-btn" onclick="copyText('secureTextEntry')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 교안 4주차 p.15 및 6주차: secureTextEntry={true/false}</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q10</span><span>인터넷 URL에서 가져오는 원격 네트워크 이미지(&lt;Image /&gt;)에 반드시 명시해야 하는 2가지 스타일은?</span></div>
          <div class="qa-a"><span class="ans-target">width, height (가로 및 세로 크기)</span><button class="copy-btn" onclick="copyText('width, height')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 로컬 require 이미지는 크기 자동 추론되나, 원격 uri 이미지는 크기 미지정 시 렌더링 안 됨 (6주차 p.18 PixelRatio)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q11</span><span>가상 키보드가 폼 입력창을 가리지 않도록 뷰를 자동으로 밀어올려주는 컴포넌트와 키보드 닫기 API는?</span></div>
          <div class="qa-a"><span class="ans-target">KeyboardAvoidingView / Keyboard.dismiss</span><button class="copy-btn" onclick="copyText('KeyboardAvoidingView / Keyboard.dismiss')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 빈 화면 터치 시 TouchableWithoutFeedback에 Keyboard.dismiss 연결 (6주차 p.13~14)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q12</span><span>외부 웹 브라우저나 타 애플리케이션을 URL 스킴으로 호출하여 실행하는 API는?</span></div>
          <div class="qa-a"><span class="ans-target">Linking (Linking.openURL)</span><button class="copy-btn" onclick="copyText('Linking.openURL')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 교안 예제: Linking.openURL('https://blog.naver.com/jongsoo67') (6주차 p.15)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q13</span><span>JSX 텍스트 내부에서 강제 줄바꿈(개행)을 처리하기 위한 표현식은?</span></div>
          <div class="qa-a"><span class="ans-target">{"\\n"}</span><button class="copy-btn" onclick="copyText('{\\\"\\\\n\\\"}')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 3주차 p.9 교안: 학과: 소프트웨어공학 {"\\n"}학번: 123456{"\\n"}이름: 홍길동</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q14</span><span>React Hook의 3대 사용 제한 규칙은?</span></div>
          <div class="qa-a"><span class="ans-target">1) 'use' 접두사 / 2) 최상위(Top-level) 호출 / 3) React 함수 컴포넌트 및 커스텀 Hook 내에서만 호출</span><button class="copy-btn" onclick="copyText('use 접두사, 최상위 호출, 함수 컴포넌트 내에서만 호출')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* if 조건문, for 반복문, 일반 JS 함수 안에서는 Hook을 호출할 수 없음 (7주차 p.3)</div>
        </div>

        <div class="qa-card">
          <div class="qa-q"><span class="q-icon">Q15</span><span>7주차 계산기 실습 교안에서 제시된 3종 버튼의 배경색(backgroundColor) Hex 코드는?</span></div>
          <div class="qa-a"><span class="ans-target">숫자: #2f2f2f / 연산자: #F5A623 / 유틸리티: #555</span><button class="copy-btn" onclick="copyText('숫자: #2f2f2f, 연산자: #F5A623, 유틸리티: #555')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* 전체 배경: black, displayText: color white, fontSize 84, textAlign right, button height: 64 (7주차 p.19)</div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: 교수님 시험 공지 및 감점 방지 기준 -->
    <section id="cp-prof" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>🎯 교수님 공지 시험 개요 & 감점 방지 필수 채점 기준</span>
        </div>
        <span style="font-size: 13.5px; opacity: 0.95;">수업 녹음본(새로운 노트 (1).txt) 및 7주차 교안 p.20 직접 발췌 정밀 분석</span>
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
              <td>원래 강의실에서 실시 (7주차 교안 p.20 명시)</td>
            </tr>
            <tr>
              <td style="font-weight: 800; color: var(--accent);">시험 범위</td>
              <td><b>3주차 ~ 7주차 교안 전 범위</b></td>
              <td>스타일링부터 7장 Hook(useState, useMemo 등) 및 계산기 실습까지</td>
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
          <div class="callout-title">💡 시험에 출제되는 4대 주관식 유형 (교수님 직접 언급)</div>
          <ul style="margin-left: 20px; font-size: 14.5px; line-height: 1.8; color: var(--ink-secondary);">
            <li><b>1) 코드 빈칸 채우기</b>: <i>"예를 들어서 코드를 채워 넣으시오."</i> (컴포넌트 선언문, Props 속성명, Hook 빈칸)</li>
            <li><b>2) 코드 동작 원리 및 개념 설명 서술형</b>: <i>"이 코드가 어떤 의미를 하는지 어떻게 동작하는지 설명하시오."</i> (useState vs useRef, useEffect 의존성 배열, useMemo 목적)</li>
            <li><b>3) 코드 실행 결과 예측 및 값 도출형</b>: <i>"이 부분을 썼을 때 이러한 조건을 했을 때 어떤 답이 나옵니까?"</i> (클릭 이벤트 후 화면 출력값 예측)</li>
            <li><b>4) 조건 기반 컴포넌트 완성형</b>: <i>"다 앱을 완성하시오 하는 다 주관식으로 낼 예정입니다."</i> (계산기, 포커스 이동, 버튼 카운터 등)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 3: 3주차 스타일링 & Flexbox -->
    <section id="cp-w3" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>📂 3주차: 컴포넌트 스타일링 & Flexbox 레이아웃 완벽 마스터 (교안 p.1~19)</span>
        </div>
        <span class="badge badge-amber">주관식 서술형 & 빈칸 100% 출제</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">3-1. 웹 CSS vs React Native 스타일링의 결정적 차이점 (교안 p.3~10)</div>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px; margin-bottom: 14px;">
          <li><b>카멜 표기법(camelCase) 사용</b>: 하이픈(<code>-</code>) 대신 대문자로 연결합니다. (예: <code>background-color</code> → <b><code>backgroundColor</code></b>, <code>font-size</code> → <b><code>fontSize</code></b>, <code>justify-content</code> → <b><code>justifyContent</code></b>)</li>
          <li><b>단위(px, pt) 생략</b>: 크기나 여백 수치에 <code>px</code>를 붙이지 않고 <b>숫자(Number)만 작성</b>합니다. (예: <code>padding: 10</code>, <code>fontSize: 26</code>, <code>flex: 1</code>)</li>
          <li><b>문자열 속성값</b>: 숫자가 아닌 색상명(<code>"black"</code>, <code>"red"</code>)이나 <code>fontWeight</code> 값은 <b>따옴표 문자열</b>로 감쌉니다. (예: <code>fontWeight: "600"</code>, <code>color: "#fff"</code>)</li>
          <li><b style="color: var(--tag-danger-ink);">JSX 줄바꿈 (교안 p.9)</b>: 텍스트 내부에서 강제 개행(줄바꿈)을 수행할 때는 <b><code>{"\\n"}</code></b> 표현식을 사용합니다!
            <br>• 교안 예문: <code>처음 시작하는 리액트 네이티브 프로그래밍 !{"\\n"} 학과: 소프트웨어공학 {"\\n"}학번: 123456{"\\n"}이름: 홍길동</code>
          </li>
          <li><b>JSX 주석 문법 (교안 p.10)</b>:
            <br>• JSX 태그 내부 주석: <b><code>{ /* &lt;Text&gt;...&lt;/Text&gt; */ }</code></b> (중괄호 안에 슬래시-별 주석)
            <br>• 일반 자바스크립트 영역 주석: <code>// 단일행 주석</code>, <code>/* 다중행 주석 */</code>
          </li>
        </ul>

        <div class="concept-card-title">3-2. Flexbox 3대 정렬 속성과 기본값 (교안 p.5~7 ★ 시험 0순위 암기표)</div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 22%;">Flexbox 속성명</th>
              <th style="width: 22%;">RN 기본값 (Default)</th>
              <th style="width: 22%;">정렬 기준 축</th>
              <th>세부 옵션값 및 정렬 동작 설명 (교안 원문)</th>
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
                • <b><code>flex-start</code></b>: 시작점에서부터 정렬<br>
                • <b><code>flex-end</code></b>: 끝에서부터 정렬<br>
                • <b><code>center</code></b>: 중앙 정렬<br>
                • <b><code>space-between</code></b>: 컴포넌트 사이 공간을 동일하게 정렬<br>
                • <b><code>space-around</code></b>: 컴포넌트 각각의 주변 공간을 동일하게 정렬<br>
                • <b><code>space-evenly</code></b>: 컴포넌트 사이와 양 끝에 동일한 공간 생성
              </td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>alignItems</code></b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>stretch</code></b></td>
              <td>주축과 수직인 <b>교차축(Cross Axis) 방향</b>으로 정렬</td>
              <td>
                • <b><code>stretch</code></b>: alignItems의 방향으로 컴포넌트 확장 (자식 크기 미지정 시)<br>
                • <b><code>flex-start</code></b>: 시작점에서부터 정렬<br>
                • <b><code>flex-end</code></b>: 끝에서부터 정렬<br>
                • <b><code>center</code></b>: 중앙 정렬<br>
                • <b><code>baseline</code></b>: 컴포넌트 내부 텍스트 베이스라인 기준 정렬
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">3-3. 3주차 교안 전체 실습 코드 (p.11~17)</div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          💻 [코드 3-1] 인라인 스타일링(Inline Styling) (교안 p.11 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드</div>
            <pre class="code-block">export default function App() {
  return (
    &lt;View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}&gt;
      &lt;Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "600", // 숫자가 아닌 문자열
          color: "black",
        }}&gt;
        Inline Styling - Text
      &lt;/Text&gt;
      &lt;Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "400", // 숫자가 아닌 문자열
          color: "red",
        }}&gt;
        Inline Styling - Error
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.11)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week3_p11_0_Image55.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">인라인 스타일 적용 결과<br>Text(검정, 600) vs Error(빨강, 400)</div>
            </div>
          </div>
        </div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 3-2] 여러 개의 스타일 적용 (배열 문법) (교안 p.13 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드</div>
            <pre class="code-block">export default function App() {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;Inline Styling - Text&lt;/Text&gt;
      {/* 배열 뒤쪽 styles.error가 앞쪽 styles.text의 fontWeight과 color를 덮어씀! */}
      &lt;Text style={[styles.text, styles.error]}&gt;Inline Styling - Error&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  error: {
    fontWeight: '400', // 덮어쓰기
    color: 'red',       // 덮어쓰기 (padding: 10, fontSize: 26은 styles.text로부터 유지됨)
  },
});</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.14)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week3_p14_0_Image95.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">다중 스타일 배열 결합 결과<br>[styles.text, styles.error]</div>
            </div>
          </div>
        </div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 3-3] 외부 스타일 모듈 분리 및 Flex 비율 레이아웃 (교안 p.14~17 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 외부 파일 분리 (src/styles.js & App.js)</div>
            <pre class="code-block">// [src/styles.js] 외부 파일로 스타일 객체 분리 정의
import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export const textStyles = StyleSheet.create({
  text: { padding: 10, fontSize: 26, fontWeight: '600', color: 'black' },
  error: { fontWeight: '400', color: 'red' },
});

// [App.js] Flex와 범위 레이아웃 (교안 p.16~17)
// Header(1) : Contents(2 or 3) : Footer(1)
// Contents 내부 가로 분할: contentsLeft(1) : contentsRight(1)
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, backgroundColor: '#f1c40f', alignItems: "center", justifyContent: "center" },
  contents: {
    flex: 2,
    flexDirection: "row", // 가로 분할!
  },
  contentsLeft: { flex: 1, backgroundColor: "#16a085", alignItems: "center", justifyContent: "center" },
  contentsRight: { flex: 1, backgroundColor: "#27ae60", alignItems: "center", justifyContent: "center" },
  footer: { flex: 1, backgroundColor: '#3498db', alignItems: "center", justifyContent: "center" },
  text: { fontSize: 26 },
});</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.17)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week3_p17_0_Image106.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">Flex 레이아웃 분할 결과<br>Header(노랑) / Contents(Left·Right) / Footer(파랑)</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: 4주차 컴포넌트 기초 -->
    <section id="cp-w4" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>📂 4주차: 핵심 기초 컴포넌트 (View · Text · ScrollView · Button · Alert · TextInput) (교안 p.1~18)</span>
        </div>
        <span class="badge badge-amber">교안 원문 예제 · Props 상세 총정리</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">4-1. 함수형 vs 클래스형 컴포넌트 & 교안 핵심 컴포넌트 요약 (교안 p.3~18)</div>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px; margin-bottom: 12px;">
          <li><b>함수(Function)형 컴포넌트</b>: 코드가 더 짧고 직관적이며, React 16.8 이후 <b>Hook이 도입되어 현재 표준</b>으로 사용됨. (교안 p.3)</li>
          <li><b>클래스(Class)형 컴포넌트</b>: React 16.8 이전의 과거 기술/방식으로 레거시 코드 유지보수 위주로 사용됨. (교안 p.3)</li>
          <li><b><code>&lt;View&gt;</code></b>: 화면 레이아웃을 구성하는 컨테이너 컴포넌트. (교안 p.4 중첩 레이아웃)</li>
          <li><b style="color: var(--tag-danger-ink);"><code>&lt;Text&gt;</code> 중첩과 스타일 상속 (교안 p.5~6)</b>:
            <br>• <code>&lt;Text style={styles.baseText}&gt;나는 강남대학교 &lt;Text style={styles.innerText}&gt; 학생 이다.&lt;/Text&gt;&lt;/Text&gt;</code>
            <br>• 바깥 Text의 스타일(<code>fontWeight: 'bold', fontSize: 30</code>)을 안쪽 Text가 그대로 <b>상속</b>받고, 안쪽 Text는 <code>color: 'red'</code>만 추가 적용됨!
          </li>
          <li><b><code>&lt;ScrollView&gt;</code> (교안 p.7~9)</b>: 긴 텍스트나 화면을 스크롤할 수 있도록 감싸주는 컴포넌트. (교안 실습: 유치환 시인의 시 '행복' 전문 스크롤)</li>
        </ul>

        <div class="concept-card-title">4-2. 4주차 교안 전체 실습 코드 (교안 p.5~17 원문)</div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          💻 [코드 4-1] <code>Text</code> 중첩 상속 & <code>onPress</code> 상태 변경 + <code>numberOfLines={5}</code> (교안 p.5, p.10 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드 (교안 p.10 원문)</div>
            <pre class="code-block">import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // 교안 원문 상태 문자열: "지금, 무슨 과목:[클릭 ㅋㅋ]"
  const [titleText, setTitleText] = useState("지금, 무슨 과목:[클릭 ㅋㅋ]");
  const bodyText = '미래를 준비하는 젊은 지성인의 새로운 세계';

  // 클릭 시 "크로스 플랫폼 과목 !!!"으로 상태 변경
  const onPressTitle = () => {
    setTitleText("크로스 플랫폼 과목 !!!");
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.baseText}&gt;
        {'\n'}{'\n'}
        &lt;Text style={styles.titleText} onPress={onPressTitle}&gt;
          {titleText}
        &lt;/Text&gt;
        &lt;Text numberOfLines={5}&gt;{bodyText}&lt;/Text&gt;
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  baseText: { fontFamily: 'Cochin', fontSize: 16 },
  titleText: { fontSize: 24, fontWeight: 'bold', color: 'red' },
});</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.10)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week4_p10_0_Image90.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">Text onPress 상태 변경 결과<br>(클릭 시: "크로스 플랫폼 과목 !!!")</div>
            </div>
          </div>
        </div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 4-2] <code>Button</code>과 <code>Alert.alert</code> 2버튼(취소/확인) 대화상자 (교안 p.11~13 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드 (교안 p.13 원문)</div>
            <pre class="code-block">import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Button
        title="버튼 만들기"
        color="#f194ff"
        onPress={() =&gt; Alert.alert(
          '핑크버튼',          // 1번째 인자: 대화상자 제목
          '핑크 버튼 누름',    // 2번째 인자: 본문 메시지
          [                    // 3번째 인자: 버튼 배열
            {
              text: "취소",
              onPress: () =&gt; console.log("취소 버튼 클릭"),
              style: "cancel", // 취소 스타일
            },
            {
              text: "확인",
              onPress: () =&gt; console.log("확인 버튼 클릭"),
            },
          ]
        )}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'stretch', justifyContent: 'center', padding: 20 },
});</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.12~13)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week4_p12_0_Image101.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">Button 클릭 시 Alert.alert<br>핑크버튼 네이티브 2버튼(취소/확인) 대화상자</div>
            </div>
          </div>
        </div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 4-3] <code>TextInput</code>: 숫자 전용 필터링 및 여러 줄 입력 (교안 p.14~17 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드 (교안 p.15, p.17 원문)</div>
            <pre class="code-block">// [교안 p.15] 숫자 전용 비밀번호 필터링 TextInput
const [text, setText] = useState("");
const [number, onNumber] = useState("");

&lt;TextInput
  style={styles.input}
  placeholder="비밀번호"
  keyboardType="numeric"
  secureTextEntry={false}
  value={number}
  onChangeText={(value) => onNumber(value.replace(/[^0-9]/g, ""))} // 숫자가 아닌 문자 제거!
/&gt;

// [교안 p.16~17] 여러 줄 입력(Multiline) & 결과 확인 후 초기화
const [value, setValue] = useState("");

const handlePress = () => {
  Alert.alert(
    "Input Data",
    value || "(Empty)",
    [{ text: "확인", onPress: () => setValue("") }] // 확인 누르면 입력창 초기화!
  );
};

&lt;TextInput
  editable={true}             // 편집 가능
  multiline={true}            // 여러 줄 입력 가능
  numberOfLines={4}           // 최대 4줄까지 보여주기
  maxLength={40}              // 최대 40자 제한
  onChangeText={(text) => setValue(text)}
  value={value}
  placeholder="여기에 입력하세요"
  style={styles.textInput}
/&gt;
&lt;Button title="Press me" onPress={handlePress} /&gt;</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.15~17)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week4_p15_0_Image111.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">TextInput 비밀번호 필터링 &<br>여러 줄 입력 폼 실행 결과</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: 5주차 JSX & 조건문 & 리스트 -->
    <section id="cp-w5" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>📂 5주차: JSX 문법 · 조건부 렌더링 · Image · Switch · FlatList · SectionList (교안 p.1~14)</span>
        </div>
        <span class="badge badge-amber">교안 데이터 Beomjun 100% 일치 · FlatList 필수</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">5-1. JSX 개념과 장단점 & 하나의 부모 규칙 (교안 p.3~4)</div>
        <p style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; margin-bottom: 12px;">
          <b>JSX(JavaScript XML)</b>란 객체 생성과 함수 호출을 위한 문법적 편의를 제공하기 위해 만들어진 확장 기능으로 리액트 프로젝트에서 사용됩니다.
        </p>

        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 25%;">구분</th>
              <th>예시 코드 (교안 p.3 원문)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>일반 JavaScript</b></td>
              <td><code>React.createElement("h1", null, "Hello")</code></td>
            </tr>
            <tr>
              <td><b>JSX 문법</b></td>
              <td><code>&lt;h1&gt;Hello&lt;/h1&gt;</code></td>
            </tr>
          </tbody>
        </table>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
          <div style="background: rgba(39, 174, 96, 0.08); border-left: 4px solid #27ae60; padding: 12px; border-radius: 4px;">
            <div style="font-weight: 700; color: #27ae60; margin-bottom: 6px;">👍 JSX 4대 장점 (교안 p.3)</div>
            <ul style="font-size: 13.5px; line-height: 1.7; padding-left: 18px; color: var(--ink);">
              <li><b>가독성이 좋음</b></li>
              <li><b>코드가 짧아짐</b></li>
              <li><b>컴포넌트 구조 표현이 쉬움</b></li>
              <li><b>JavaScript와 함께 사용 가능</b></li>
            </ul>
          </div>
          <div style="background: rgba(231, 76, 60, 0.08); border-left: 4px solid #e74c3c; padding: 12px; border-radius: 4px;">
            <div style="font-weight: 700; color: #e74c3c; margin-bottom: 6px;">👎 JSX 4대 단점 (교안 p.3)</div>
            <ul style="font-size: 13.5px; line-height: 1.7; padding-left: 18px; color: var(--ink);">
              <li><b>학습이 필요함</b></li>
              <li><b>브라우저가 바로 이해하지 못함</b> (Babel 변환 필요)</li>
              <li><b>JavaScript와 HTML이 섞여 보임</b></li>
              <li><b>문법 오류에 민감</b></li>
            </ul>
          </div>
        </div>

        <div class="callout-box warning" style="margin-bottom: 14px;">
          <div class="callout-title">🚨 [JSX 절대 규칙] 하나의 부모 (One Parent Element, 교안 p.4)</div>
          여러 개의 JSX 요소를 반드시 <b>하나의 최상위 요소(부모 요소)</b>로 감싸야 합니다!<br>
          • <b>잘못된 예</b>: <code>return ( &lt;Text&gt;...&lt;/Text&gt; &lt;StatusBar/&gt; );</code> ➜ 형제 태그가 최상위에 나열되어 문법 에러 발생!<br>
          • <b>올바른 예</b>: <code>return ( &lt;View style={styles.container}&gt; &lt;Text&gt;...&lt;/Text&gt; &lt;StatusBar/&gt; &lt;/View&gt; );</code> ➜ 단일 최상위 부모(&lt;View&gt;)로 감쌈!
        </div>

        <div class="concept-card-title">5-2. 자바스크립트 변수 & 조건부 렌더링 3대 기법 (교안 p.5~9 원문)</div>

        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 자바스크립트 변수 & 조건문 소스코드 (교안 p.6~9 원문)</div>
            <pre class="code-block">// [교안 p.6] 변수 사용
const name = 'Beomjun';
&lt;Text style={styles.text}&gt;My name is {name}&lt;/Text&gt; // "My name is Beomjun"

// [교안 p.7] if 조건문
let message = '';
if (name === 'Beomjun') {
  message = 'My name is ' + name;
} else {
  message = "I'm not Beomjun";
}

// [교안 p.8] 삼항 연산자
&lt;Text style={styles.text}&gt;
  {name === 'Beomjun' ? "My name is Beomjun" : "I'm not Beomjun"}
&lt;/Text&gt;

// [교안 p.9] AND(&&) 및 OR(||) 연산자
const name1 = 'Beomjun';
const name2 = 'JongSoo';

// AND 조건
&lt;Text&gt;{name1 === 'Beomjun' &amp;&amp; 'My name is Beomjun'}&lt;/Text&gt;       // 출력됨: "My name is Beomjun"
&lt;Text&gt;{name1 !== 'Beomjun' &amp;&amp; 'My name is not Beomjun'}&lt;/Text&gt;   // 출력 안 됨 (거짓)

// OR 조건
&lt;Text&gt;{name2 === 'JongSoo' || "I'm not Beomjun's friend"}&lt;/Text&gt; // 참이므로 앞쪽 불리언 true 출력 안 되고 앞의 식 평가
&lt;Text&gt;{name2 !== 'JongSoo' || "I'm Beomjun's friend"}&lt;/Text&gt;     // 거짓이므로 뒤의 기본값 "I'm Beomjun's friend" 출력!</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.8~9)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week5_p8_0_Image85.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">삼항 연산자 & AND/OR 실행 결과<br>(Beomjun & JongSoo 조건문)</div>
            </div>
          </div>
        </div>

        <div class="concept-card-title" style="margin-top: 16px;">5-3. Image · Switch · FlatList · SectionList (교안 p.10~13 원문)</div>

        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 Image(로컬) & Switch(다크모드) (교안 p.10~11 원문)</div>
            <pre class="code-block">// [교안 p.10] Image 컴포넌트: 로컬 require 이미지
&lt;Image
  source={require('./kangnam.png')} // 로컬 이미지 경로
  style={{ width: 200, height: 200 }}
/&gt;

// [교안 p.11] Switch 컴포넌트: 다크모드 On/Off 토글
const [darkMode, setDarkMode] = useState(false);

&lt;View style={[styles.container, { backgroundColor: darkMode ? 'black' : 'white' }]}&gt;
  &lt;Text style={[styles.text, { color: darkMode ? 'white' : 'black' }]}&gt;
    {darkMode ? '스위치: ON' : '스위치: OFF'}
  &lt;/Text&gt;
  &lt;Switch
    value={darkMode}
    onValueChange={setDarkMode}
    trackColor={{ false: '#767577', true: '#81b0ff' }}
    thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
  /&gt;
&lt;/View&gt;</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.10~11)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week5_p11_0_Image94.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">Switch 다크모드 토글 결과<br>(스위치: ON/OFF 및 배경색 전환)</div>
            </div>
          </div>
        </div>

        <div class="code-preview-grid" style="margin-top: 16px;">
          <div class="code-col">
            <div class="code-col-header">💻 FlatList & SectionList (교안 p.12~13 원문)</div>
            <pre class="code-block">// [교안 p.12] FlatList 3대 필수 Props (data, keyExtractor, renderItem)
const data = [
  { id: '1', name: 'Beomjun' },
  { id: '2', name: 'Jongsoo' },
  { id: '3', name: 'Yuna' },
  { id: '4', name: 'Minho' },
  { id: '5', name: 'Hana' },
];

&lt;FlatList
  data={data}                              // [필수 1] 리스트 데이터 배열
  keyExtractor={(item) =&gt; item.id}          // [필수 2] 각 항목 고유 키
  renderItem={({ item }) =&gt; (              // [필수 3] 각 항목 렌더링 함수
    &lt;Text style={styles.item}&gt;{item.id} : {item.name}&lt;/Text&gt;
  )}
/&gt;

// [교안 p.13] SectionList: 그룹별 리스트
const DATA = [
  { title: 'A', data: ['Alex', 'Amy', 'Andrew'] },
  { title: 'B', data: ['Beomjun', 'Bella', 'Brian'] },
  { title: 'C', data: ['Chris', 'Cindy', 'Clara'] },
];

&lt;SectionList
  sections={DATA}
  keyExtractor={(item, index) =&gt; item + index}
  renderItem={({ item }) =&gt; &lt;Text style={styles.item}&gt; ▣ {item}&lt;/Text&gt;}
  renderSectionHeader={({ section: { title } }) =&gt; (
    &lt;Text style={styles.header}&gt;섹션: {title}&lt;/Text&gt;
  )}
/&gt;</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.12~13)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week5_p12_0_Image97.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">FlatList 5명 목록 및<br>SectionList 섹션 헤더 렌더링 결과</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: 6주차 컴포넌트 응용 10대 API -->
    <section id="cp-w6" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>📂 6주차: 컴포넌트 응용 & 10대 네이티브 API/컴포넌트 (교안 p.1~22)</span>
        </div>
        <span class="badge badge-amber">교안 원문 10종 API 완벽 수록</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">6-1. 10대 네이티브 API/컴포넌트 일람표 (교안 p.2)</div>
        <table class="concept-table" style="margin-bottom: 14px;">
          <thead>
            <tr>
              <th style="width: 25%;">API / 컴포넌트명</th>
              <th style="width: 25%;">플랫폼 구분</th>
              <th>핵심 기능 및 교안 상세 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. BackHandler</b></td>
              <td>Android 전용</td>
              <td>안드로이드 하드웨어 뒤로가기 버튼 감지. <code>return true</code>로 시스템 기본 동작 차단 후 Alert 팝업 (p.4)</td>
            </tr>
            <tr>
              <td><b>2. DrawerLayoutAndroid</b></td>
              <td>Android 전용</td>
              <td>화면 좌/우측에서 슬라이드로 열리는 서랍(Drawer) 메뉴. <code>drawerWidth={300}</code>, <code>openDrawer()</code>, <code>closeDrawer()</code> (p.5~6)</td>
            </tr>
            <tr>
              <td><b>3. ToastAndroid</b></td>
              <td>Android 전용</td>
              <td>하단 플로팅 토스트 메시지. <code>show(msg, SHORT)</code> 및 <code>showWithGravityAndOffset(msg, LONG, CENTER, 25, 50)</code> (p.7)</td>
            </tr>
            <tr>
              <td><b>4. Animated</b></td>
              <td>공통</td>
              <td>부드러운 애니메이션 구현. <code>fadeAnim = useRef(new Animated.Value(0)).current</code>, <code>Animated.timing</code> (p.9~10)</td>
            </tr>
            <tr>
              <td><b>5. Dimensions</b></td>
              <td>공통</td>
              <td>기기 화면 크기 픽셀 측정. <code>Dimensions.get('window')</code> (가용 영역) vs <code>get('screen')</code> (물리 전체 화면) (p.11~12)</td>
            </tr>
            <tr>
              <td><b>6. KeyboardAvoidingView</b></td>
              <td>공통</td>
              <td>가상 키보드가 입력창을 가리지 않도록 뷰를 자동 조절. <code>Keyboard.dismiss</code>로 빈 영역 터치 시 닫기 (p.13~14)</td>
            </tr>
            <tr>
              <td><b>7. Linking</b></td>
              <td>공통</td>
              <td>외부 웹 브라우저나 타 앱 URL 스킴 열기. <code>Linking.openURL('https://blog.naver.com/jongsoo67')</code> (p.15)</td>
            </tr>
            <tr>
              <td><b>8. Modal</b></td>
              <td>공통</td>
              <td>모달 팝업 창. <code>animationType="slide"</code>, <code>transparent={true}</code>, <code>onRequestClose</code> (p.16~17)</td>
            </tr>
            <tr>
              <td><b>9. PixelRatio</b></td>
              <td>공통</td>
              <td>기기 픽셀 밀도 조회. <code>PixelRatio.get()</code>, <code>getFontScale()</code>, <code>getPixelSizeForLayoutSize(50)</code> (p.18~19)</td>
            </tr>
            <tr>
              <td><b>10. RefreshControl</b></td>
              <td>공통</td>
              <td>ScrollView 당겨서 새로고침(Pull-to-Refresh). <code>refreshing</code>, <code>onRefresh</code> 콜백 및 타이머 해제 (p.20~21)</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-title">6-2. 6주차 핵심 실습 코드 (교안 p.4~21 원문)</div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          💻 [1] <code>BackHandler</code> (교안 p.4) & [3] <code>ToastAndroid</code> (교안 p.7)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드</div>
            <pre class="code-block">// [교안 p.4] BackHandler
useEffect(() => {
  const backAction = () => {
    Alert.alert('잠깐!', '정말로 뒤로 가기를 원하십니까?', [
      { text: 'Cancel: 아니오', onPress: () => null, style: 'cancel' },
      { text: 'YES: 예', onPress: () => BackHandler.exitApp() }, // 앱 종료
    ]);
    return true; // 기본 뒤로가기 동작 차단!
  };
  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  return () => backHandler.remove(); // 언마운트 시 리스너 해제!
}, []);

// [교안 p.7] ToastAndroid
ToastAndroid.show('기본 토스트 메세지 !', ToastAndroid.SHORT);
ToastAndroid.showWithGravityAndOffset(
  'TOGGLE TOAST WITH GRAVITY & OFFSET 메세지 !',
  ToastAndroid.LONG,
  ToastAndroid.CENTER,
  25, // xOffset
  50  // yOffset
);</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.4, p.7)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week6_p4_0_Image56.jpg" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">BackHandler Alert 팝업 대화상자<br>(Cancel: 아니오 / YES: 예)</div>
            </div>
          </div>
        </div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [4] <code>Animated</code> & [5] <code>Dimensions</code> & [7] <code>Linking</code> (교안 p.9~15 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드</div>
            <pre class="code-block">// [교안 p.9] Animated: 5초 페이드인, 3초 페이드아웃
const fadeAnim = useRef(new Animated.Value(0)).current;
const fadeIn = () => {
  Animated.timing(fadeAnim, { toValue: 1, duration: 5000, useNativeDriver: true }).start();
};
const fadeOut = () => {
  Animated.timing(fadeAnim, { toValue: 0, duration: 3000, useNativeDriver: true }).start();
};
&lt;Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}&gt;
  &lt;Text style={styles.fadingText}&gt;Fading View!&lt;/Text&gt;
&lt;/Animated.View&gt;

// [교안 p.11] Dimensions
const [dimensions, setDimensions] = useState({
  window: Dimensions.get('window'),
  screen: Dimensions.get('screen'),
});

// [교안 p.15] Linking: 정종수 블로그 열기
&lt;Button
  title="확 인"
  onPress={() =&gt; Linking.openURL('https://blog.naver.com/jongsoo67')}
/&gt;</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.11, p.15)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week6_p15_0_Image103.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">Linking 블로그 링크 열기 화면<br>("정종수 블로그" / 확인 버튼)</div>
            </div>
          </div>
        </div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [8] <code>Modal</code> & [10] <code>RefreshControl</code> (교안 p.16~21 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드</div>
            <pre class="code-block">// [교안 p.16] Modal
&lt;Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    setModalVisible(false);
  }}&gt;
  &lt;View style={styles.centeredView}&gt;
    &lt;View style={styles.modalView}&gt;
      &lt;Text style={styles.modalText}&gt;Hello World!&lt;/Text&gt;
      &lt;Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(false)}&gt;
        &lt;Text style={styles.textStyle}&gt;Hide Modal&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  &lt;/View&gt;
&lt;/Modal&gt;

// [교안 p.20~21] RefreshControl 당겨서 새로고침
&lt;ScrollView
  style={{ flex: 1, backgroundColor: 'pink' }}
  contentContainerStyle={styles.scrollContent}
  refreshControl={
    &lt;RefreshControl refreshing={refreshing} onRefresh={onRefresh} /&gt;
  }&gt;
  &lt;Text&gt;아래로 당기면 새로고침됩니다.&lt;/Text&gt;
&lt;/ScrollView&gt;</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.16, p.21)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week6_p16_0_Image106.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">Modal 슬라이드 팝업 실행 결과<br>(Hello World! / Hide Modal)</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: 7주차 Hook 4총사 & 계산기 실습 -->
    <section id="cp-w7" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title">
          <span>📂 7주차: React Hook 4총사 (useState · useRef · useEffect · useMemo) & 계산기 실습 (교안 p.1~21)</span>
        </div>
        <span class="badge badge-amber">교수님 강조 최고 배점 단원 · 실습 상세조건 100% 반영</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">7-1. Hook의 개념과 대표적인 Hook 4종 & 3대 규칙 (교안 p.3)</div>
        <p style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.75; margin-bottom: 12px;">
          <b>Hook(훅)</b>은 React의 함수형 컴포넌트에서 <b>상태(state)나 생명주기(lifecycle) 기능</b>을 사용할 수 있게 해주는 특별한 함수입니다.
        </p>

        <div class="callout-box warning" style="margin-bottom: 14px;">
          <div class="callout-title">🚨 [교안 p.3 원문] Hook의 3대 필수 작성 규칙</div>
          <b>1. 함수 컴포넌트와 커스텀 Hook에서만 사용 가능</b> (일반 JS 함수, 클래스 컴포넌트 호출 불가)<br>
          <b>2. 함수 최상위(Top-level)에서만 사용 가능</b> (if 조건문, for 반복문, 중첩 함수 내부 호출 불가)<br>
          <b>3. Hook 이름은 반드시 <code>use</code> 접두사로 시작</b> (useState, useRef, useEffect, useMemo)
        </div>

        <table class="concept-table" style="margin-bottom: 14px;">
          <thead>
            <tr>
              <th style="width: 16%;">Hook 종류</th>
              <th style="width: 26%;">기본 선언 문법 (교안 원문)</th>
              <th style="width: 22%;">값 변경 시 리렌더링</th>
              <th>교안 명시 핵심 역할 (교안 p.3)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);"><code>useState</code></b></td>
              <td><code>const [state, setState] = useState(initialState);</code></td>
              <td><b style="color: var(--tag-danger-ink);">O (리렌더링 발생!)</b></td>
              <td><b>상태(state) 관리</b>: 값 저장 및 업데이트 (값을 바꾸면 화면이 자동으로 다시 렌더링 됨)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>useRef</code></b></td>
              <td><code>const ref = useRef(initialValue);</code><br>(접근: <code>ref.current</code>)</td>
              <td><b style="color: var(--tag-green-ink);">X (리렌더링 안 됨!)</b></td>
              <td><b>참조 관리</b>: DOM 요소(TextInput 등)나 변수 값을 직접 제어 (리렌더링 유발하지 않음)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>useEffect</code></b></td>
              <td><code>useEffect(() =&gt; { ... }, [dependency]);</code></td>
              <td>부수 효과(Side Effect) 실행</td>
              <td><b>생명주기 제어</b>: 컴포넌트가 실행(마운트), 변경(업데이트), 종료(언마운트) 때 코드 실행</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>useMemo</code></b></td>
              <td><code>const memoized = useMemo(() =&gt; 계산식, [dependency]);</code></td>
              <td>계산 결과값 캐싱(메모이제이션)</td>
              <td><b>참조 관리</b>: 불필요한 재계산 방지 (성능 최적화)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">7-2. <code>useState</code> & <code>useRef</code> 교안 실습 코드 해부 (교안 p.5~12 원문)</div>

        <div class="callout-box warning" style="margin-bottom: 12px;">
          <div class="callout-title">🔥 [시험 100% 출제] 교안 p.9: <code>useRef</code> vs <code>let countVar = 5</code> 실행 결과 완벽 분석!</div>
          교안 9페이지에서 <b>[클릭] 버튼을 3번 연속 누른 후, [리랜더] 버튼을 1번 누르면</b> 화면에 무엇이 출력될까요?<br>
          • <b>[클릭] 3번 누르는 동안</b>: <code>countRef.current</code>는 <code>0 → 1 → 2 → 3</code>이 되고, <code>countVar</code>는 <code>5 → 6 → 7 → 8</code>이 됩니다. <b>하지만 세터 함수를 호출하지 않아 화면은 리렌더링되지 않으므로, 화면에는 여전히 초기값 <code>CountRef: 0</code>, <code>CountVar: 5</code>가 그대로 보입니다!</b><br>
          • <b>[리랜더] 버튼을 1번 누른 순간</b>: <code>setRender(!render)</code>로 컴포넌트 함수 전체가 재실행(리렌더링)됩니다!<br>
          &nbsp;&nbsp;👉 <b><code>countRef.current</code></b>: <code>useRef</code>는 리렌더링되어도 값을 그대로 유지하므로 화면에 <b style="color: var(--accent);"><code>결과값 CountRef: 3</code></b>이 출력됩니다!<br>
          &nbsp;&nbsp;👉 <b><code>countVar</code></b>: 일반 지역 변수(<code>let countVar = 5;</code>)는 컴포넌트가 다시 실행될 때 <b style="color: var(--tag-danger-ink);">초기값 5로 다시 재초기화</b>되므로 화면에 <b style="color: var(--tag-danger-ink);"><code>결과값 CountVar: 5</code></b>가 출력됩니다!
        </div>

        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드 (교안 p.9 원문)</div>
            <pre class="code-block">import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Example() {
  const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 5; // 일반 지역변수 초기값 5!

  const handleClick = () => {
    countRef.current += 1;
    countVar += 1;
    console.log('현재 count:', countRef.current, ": ", countVar);
  };

  const doRender = () => {
    setRender(!render); // 리렌더링 유발
  };

  return (
    &lt;View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', padding: 30 }}&gt;
      &lt;Text style={{ fontSize: 30, marginTop: 10, marginBottom: 30 }}&gt;
        결과값 CountRef: {countRef.current}, {"\n"}결과값 CountVar: {countVar}
      &lt;/Text&gt;
      &lt;View style={{ marginBottom: 12 }}&gt;
        &lt;Button title="클릭" onPress={handleClick} /&gt;
      &lt;/View&gt;
      &lt;View&gt;
        &lt;Button title="리랜더" onPress={doRender} /&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.9)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week7_p9_0_Image78.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">useRef vs let countVar 실행 결과<br>(CountRef 누적 보존 vs CountVar 초기값 5 리셋)</div>
            </div>
          </div>
        </div>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          💻 [코드 7-2] <code>useRef</code>를 이용한 <code>TextInput</code> 포커스 제어 & A × B 계산기 (교안 p.10~12 원문)
        </div>
        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 React Native 소스코드 (교안 p.10~12 원문)</div>
            <pre class="code-block">export default function App() {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current?.focus(); // ref가 존재할 때 첫 번째 TextInput으로 포커스 이동!
  };

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const multiply = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult('숫자를 입력하세요!');
    } else {
      setResult(numA * numB);
    }
  };

  const handlePress = () => {
    multiply();   // 1. 곱셈 계산
    focusInput(); // 2. A 입력창으로 커서 자동 포커스 이동
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={{ fontSize: 20, marginBottom: 10 }}&gt;A × B 계산기&lt;/Text&gt;
      &lt;TextInput
        ref={inputRef}                                    // inputRef 바인딩
        style={styles.input}
        keyboardType="numeric"
        placeholder="A 입력"
        value={a}
        onChangeText={setA}
        returnKeyType="next"
      /&gt;
      &lt;TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="B 입력"
        value={b}
        onChangeText={setB}
      /&gt;
      &lt;Button title="A × B 계산" onPress={handlePress} /&gt;
      {result !== null &amp;&amp; (
        &lt;Text style={{ fontSize: 22, marginTop: 20 }}&gt;결과: {result}&lt;/Text&gt;
      )}
    &lt;/View&gt;
  );
}</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.11~12)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week7_p11_0_Image84.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">A × B 계산기 및<br>useRef 커서 자동 포커스 이동 결과</div>
            </div>
          </div>
        </div>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">7-3. <code>useEffect</code> 의존성 배열 동작 & <code>useMemo</code> 연산 캐싱 (교안 p.13~18 원문)</div>

        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 28%;"><code>useEffect</code> 두 번째 인자</th>
              <th style="width: 32%;">코드 형태 (교안 원문)</th>
              <th>실행 시점 및 로그 출력 설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">1) 빈 배열 <code>[]</code> 전달</b></td>
              <td><code>useEffect(() =&gt; { ... }, []);</code></td>
              <td>컴포넌트가 화면에 <b>최초 마운트될 때 단 1회만</b> 실행됨! (교안 p.14: "앱이 실행되었습니다! (처음 한 번만)")</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);">2) 특정 상태 <code>[count]</code> 전달</b></td>
              <td><code>useEffect(() =&gt; { ... }, [count]);</code></td>
              <td>최초 마운트 시 1회 + <b><code>count</code> 값이 바뀔 때마다</b> 실행됨 (교안 p.15: "count 값이 바뀌었습니다: {count}")</td>
            </tr>
            <tr>
              <td><b>3) 의존성 배열 생략</b></td>
              <td><code>useEffect(() =&gt; { ... });</code></td>
              <td>컴포넌트가 최초 마운트될 때 + <b>어떤 상태든 바뀌어 리렌더링될 때마다 매번</b> 실행됨</td>
            </tr>
          </tbody>
        </table>

        <div class="code-preview-grid">
          <div class="code-col">
            <div class="code-col-header">💻 useMemo 연산 최적화 (교안 p.17 원문)</div>
            <pre class="code-block">import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // count가 변경되었을 때만 double 계산 함수 재실행!
  const double = useMemo(() => {
    console.log("double 계산 실행!");
    return count * 2;
  }, [count]); // 의존성 배열에 count 지정

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;Count: {count}&lt;/Text&gt;
      &lt;Text style={styles.text}&gt;Double: {double}&lt;/Text&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      &lt;Button title="카운트 +1" onPress={() =&gt; setCount(count + 1)} /&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      {/* 텍스트가 변경되어 리렌더링되어도 useMemo는 재실행되지 않음! */}
      &lt;Button title="텍스트 변경" onPress={() =&gt; setText(text + '강남대 ')} /&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      &lt;Text style={styles.text}&gt;Character: {text}&lt;/Text&gt;
    &lt;/View&gt;
  );
}</pre>
          </div>
          <div class="preview-col">
            <div class="preview-col-header">📱 실제 앱 실행 화면 (교안 p.17)</div>
            <div class="phone-device-frame">
              <img src="assets/crossplatform/week7_p17_0_Image99.png" alt="실제 앱 실행 결과" class="phone-device-img" loading="lazy">
              <div class="phone-device-caption">useMemo 연산 캐싱 최적화<br>(Count / Double / Character: 강남대)</div>
            </div>
          </div>
        </div>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">7-4. 7주차 계산기 실습 7대 상세조건 & 전체 코드 (교안 p.19 원문)</div>
        <div class="callout-box warning" style="margin-bottom: 12px;">
          <div class="callout-title">🚨 [교수님 녹음본 직접 경고] 교안 p.19 상세조건 불일치 시 0점/감점!</div>
          교수님 말씀: <i>"과제에 상세 조건이 있어. 블랙 대신 회색을 쓰거나 조건 안 지키면 점수가 안 나갑니다!"</i><br>
          아래 표의 <b>7대 상세 스타일 조건 수치와 색상 코드</b>를 토씨 하나 틀리지 않고 그대로 기억하세요!
        </div>

        <table class="concept-table" style="margin-bottom: 14px;">
          <thead>
            <tr>
              <th style="width: 30%;">스타일 대상 (교안 p.19)</th>
              <th style="width: 40%;">교안 지정 필수 속성 & 정확한 값</th>
              <th>역할 설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. 전체 배경</b></td>
              <td><b style="color: var(--accent);"><code>backgroundColor: 'black'</code></b></td>
              <td>계산기 전체 화면 배경색 (반드시 <code>'black'</code>)</td>
            </tr>
            <tr>
              <td><b>2. 결과 표시 (displayText)</b></td>
              <td>
                • <b style="color: var(--accent);"><code>Color: 'white'</code></b><br>
                • <b style="color: var(--accent);"><code>FontSize: 84</code></b><br>
                • <b style="color: var(--accent);"><code>textAlign: 'right'</code></b>
              </td>
              <td>상단 계산 결과 숫자 표시 (우측 정렬, 크기 84)</td>
            </tr>
            <tr>
              <td><b>3. 버튼 높이 (Button)</b></td>
              <td><b style="color: var(--accent);"><code>height: 64</code></b></td>
              <td>모든 계산기 버튼의 기본 높이 64</td>
            </tr>
            <tr>
              <td><b>4. 숫자 버튼 (number Button)</b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>backgroundColor: '#2f2f2f'</code></b></td>
              <td><code>0~9</code>, <code>.</code> 숫자 키패드 배경색 (짙은 회색)</td>
            </tr>
            <tr>
              <td><b>5. 연산자 버튼 (operatorButton)</b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>backgroundColor: '#F5A623'</code></b></td>
              <td><code>÷, ×, -, +, =</code> 우측 사칙연산 버튼 배경색 (오렌지색)</td>
            </tr>
            <tr>
              <td><b>6. 유틸리티 버튼 (utilityButton)</b></td>
              <td><b style="color: var(--tag-gold-ink);"><code>backgroundColor: '#555'</code></b></td>
              <td><code>AC, +/-, %</code> 상단 기능 버튼 배경색 (중간 회색)</td>
            </tr>
            <tr>
              <td><b>7. 버튼 텍스트 (buttonText)</b></td>
              <td>
                • <b style="color: var(--accent);"><code>color: 'white'</code></b><br>
                • <b style="color: var(--accent);"><code>fontSize: 30</code></b><br>
                • <b style="color: var(--accent);"><code>fontweight: '500'</code></b>
              </td>
              <td>모든 버튼 안에 적히는 텍스트 스타일 규격</td>
            </tr>
          </tbody>
        </table>

        <pre class="code-block">import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function CalculatorApp() {
  const [displayValue, setDisplayValue] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberPress = (num) => {
    setDisplayValue(displayValue === "0" ? String(num) : displayValue + num);
  };

  const handleOperatorPress = (op) => {
    setPrevValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue("0");
  };

  const handleEqualPress = () => {
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

  const handleClear = () => {
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

// 7주차 교안 p.19 상세조건 100% 반영 스타일시트
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", justifyContent: "flex-end", padding: 12 },   // 전체 배경 'black'
  displayContainer: { padding: 16, justifyContent: "flex-end" },
  displayText: { color: "white", fontSize: 84, textAlign: "right" },                           // 결과 폰트 84, 우측정렬
  row: { flexDirection: "row", marginBottom: 8 },
  button: { flex: 1, height: 64, margin: 4, borderRadius: 32, justifyContent: "center", alignItems: "center" }, // 높이 64
  numberButton: { backgroundColor: "#2f2f2f" },                                                // 숫자 버튼 '#2f2f2f'
  operatorButton: { backgroundColor: "#F5A623" },                                              // 연산자 버튼 '#F5A623'
  utilityButton: { backgroundColor: "#555" },                                                  // 기능 버튼 '#555'
  buttonText: { color: "white", fontSize: 30, fontWeight: "500" },                             // 버튼 폰트 30, 굵기 500
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
          id: 1, type: "short", score: 10, origin: "3주차 & 5주차: JSX 부모 태그 & 스타일 배열 결합",
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
          id: 2, type: "essay", score: 10, origin: "3주차: Flexbox 핵심 3대 정렬 속성의 기본값과 역할",
          text: "리액트 네이티브에서 레이아웃을 배치할 때 사용하는 Flexbox의 다음 3가지 속성의 <b>기본값(Default Value)</b>과 <b>정렬 기준</b>을 각각 명확히 서술하시오.<br><br>1) flexDirection<br>2) justifyContent<br>3) alignItems",
          placeholder: "3가지 속성의 기본값과 정렬 축을 나누어 서술하세요.",
          rubric: "1. flexDirection 기본값 column 명시 (3점)\n2. justifyContent 기본값 flex-start 및 주축(Main Axis) 정렬 명시 (3점)\n3. alignItems 기본값 stretch 및 교차축(Cross Axis) 정렬 명시 (4점)",
          sampleAnswer: "1. flexDirection: 기본값은 column. 자식들을 세로(위->아래) 방향으로 배치하는 주축(Main Axis)을 결정함.\n2. justifyContent: 기본값은 flex-start. 주축(Main Axis) 방향을 기준으로 컴포넌트들의 위치를 정렬함.\n3. alignItems: 기본값은 stretch. 주축과 수직인 교차축(Cross Axis) 방향을 기준으로 정렬함.",
          explanation: "일반 웹 CSS와 달리 모바일 환경인 리액트 네이티브는 flexDirection 기본값이 세로(column)라는 점이 가장 중요한 채점 포인트입니다."
        },
        {
          id: 3, type: "short", score: 10, origin: "4주차: Alert 대화상자 컴포넌트 빈칸",
          text: "버튼을 클릭했을 때 다음과 같은 취소/확인 팝업 경고창을 띄우고자 한다. 빈칸 (가)에 들어갈 리액트 네이티브 내장 API 이름을 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>import { View, Button, (가) } from 'react-native';\n\nconst handlePress = () => {\n    (가).alert('핑크버튼', '핑크 버튼 누름', [\n        { text: '취소', style: 'cancel' },\n        { text: '확인', onPress: () => console.log('확인 클릭') }\n    ]);\n};</pre>",
          placeholder: "API 이름 입력 (예: Alert)",
          answers: ["Alert", "alert"],
          explanation: "<b>정답: Alert</b><br>react-native 패키지에서 제공하는 Alert API의 Alert.alert(제목, 메시지, 버튼배열) 메서드를 사용하여 네이티브 확인/취소 팝업 대화상자를 구현합니다. (4주차 교안 p.13 원문)"
        },
        {
          id: 4, type: "essay", score: 10, origin: "5주차: FlatList와 ScrollView의 차이점 및 사용 이유",
          text: "리액트 네이티브에서 대량의 목록 데이터를 화면에 출력할 때 ScrollView 대신 <b>FlatList를 사용하는 이유</b>를 메모리 관리 및 렌더링 동작 메커니즘 관점에서 서술하시오.",
          placeholder: "ScrollView와 FlatList의 렌더링 방식 및 메모리 차이를 서술하세요.",
          rubric: "1. ScrollView가 모든 데이터를 한꺼번에 렌더링하여 메모리 과부하를 유발함을 명시 (5점)\n2. FlatList가 화면에 보이는 항목만 지연 렌더링(Lazy)하고 화면 밖 뷰를 재사용하여 성능을 최적화함을 명시 (5점)",
          sampleAnswer: "ScrollView는 데이터가 아무리 많아도 화면에 보이지 않는 모든 항목을 시작 시 한꺼번에 메모리에 렌더링하므로 데이터가 많을수록 메모리가 급증하고 앱이 느려집니다.\n반면 FlatList는 화면에 현재 보이는 영역의 항목만 동적으로 지연 렌더링(Lazy Loading)하고 화면을 벗어난 컴포넌트는 메모리에서 언마운트하여 재사용하므로 대용량 데이터에서도 뛰어난 성능과 메모리 효율을 보장합니다.",
          explanation: "지연 렌더링(Lazy Loading)과 뷰 재활용을 통한 메모리 최적화가 핵심 키워드입니다."
        },
        {
          id: 5, type: "short", score: 10, origin: "5주차: FlatList의 3대 필수 속성(Props)",
          text: "다음 FlatList 컴포넌트에서 빈칸 (1), (2), (3)에 들어갈 필수 Props 명칭을 순서대로 쉼표로 구분하여 작성하시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;FlatList\n    (1)={data}\n    (2)={(item) =&gt; item.id}\n    (3)={({ item }) =&gt; &lt;Text&gt;{item.id} : {item.name}&lt;/Text&gt;}\n/&gt;</pre>",
          placeholder: "순서대로 입력 (예: data, keyExtractor, renderItem)",
          answers: [
            "data, keyExtractor, renderItem",
            "data,keyExtractor,renderItem",
            "data, keyExtractor, renderitem"
          ],
          explanation: "<b>정답: data, keyExtractor, renderItem</b><br>FlatList는 1) 데이터 배열을 받는 data, 2) 고유 키를 추출하는 keyExtractor, 3) 항목을 화면에 그리는 renderItem의 3대 필수 속성이 반드시 지정되어야 합니다. (5주차 교안 p.12 원문)"
        },
        {
          id: 6, type: "essay", score: 10, origin: "7주차: useState와 useRef의 렌더링 관점 결정적 차이",
          text: "리액트 Hook인 <b>useState</b>와 <b>useRef</b>의 가장 결정적인 차이점을 <b>컴포넌트 리렌더링(Re-rendering) 발생 여부</b>와 <b>값 유지</b> 측면에서 비교하여 설명하시오.",
          placeholder: "리렌더링 발생 여부 및 값 유지 관점에서 서술하세요.",
          rubric: "1. useState는 값 변경(세터 호출) 시 컴포넌트가 다시 렌더링됨을 명시 (5점)\n2. useRef는 .current 값을 변경해도 컴포넌트가 다시 렌더링되지 않고 값을 유지함을 명시 (5점)",
          sampleAnswer: "useState는 세터 함수를 호출하여 상태값을 변경하면 컴포넌트가 자동으로 다시 렌더링(Re-rendering)되어 화면 UI를 갱신합니다.\n반면 useRef는 .current 프로퍼티의 값을 변경하더라도 컴포넌트가 다시 렌더링되지 않으며, 컴포넌트가 다른 이유로 리렌더링되더라도 저장된 값을 그대로 유지합니다.",
          explanation: "값 변경이 화면 리렌더링을 트리거하는지 여부가 핵심 차이점입니다."
        },
        {
          id: 7, type: "short", score: 10, origin: "7주차 교안 p.9: useRef vs let countVar = 5 실행 결과 예측",
          text: "7주차 교안 p.9 원문 코드이다. 사용자가 <b>[클릭]</b> 버튼을 <b>3번 연속 클릭</b>한 후, <b>[리랜더]</b> 버튼을 <b>1번 클릭</b>하였다.<br>화면에 최종적으로 출력되는 <b>CountRef</b>와 <b>CountVar</b>의 값을 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>export default function Example() {\n    const [render, setRender] = useState(false);\n    const countRef = useRef(0);\n    let countVar = 5; // 일반 지역변수 초기값 5\n\n    const handleClick = () => {\n        countRef.current += 1;\n        countVar += 1;\n    };\n    const doRender = () => {\n        setRender(!render);\n    };\n    return (\n        &lt;View&gt;\n            &lt;Text&gt;결과값 CountRef: {countRef.current}, 결과값 CountVar: {countVar}&lt;/Text&gt;\n            &lt;Button title=\"클릭\" onPress={handleClick} /&gt;\n            &lt;Button title=\"리랜더\" onPress={doRender} /&gt;\n        &lt;/View&gt;\n    );\n}</pre>",
          placeholder: "순서대로 정수 입력 (예: 3, 5)",
          answers: ["3, 5", "3,5", "CountRef: 3, CountVar: 5"],
          explanation: "<b>정답: 3, 5</b><br>1) [클릭] 3번 누르는 동안: countRef.current는 3, countVar는 8이 되지만 화면 리렌더링이 일어나지 않음.<br>2) [리랜더]를 1번 누르면: setRender로 인해 컴포넌트 함수가 다시 실행됨.<br>• countRef.current: useRef는 리렌더링되어도 값을 유지하므로 3.<br>• countVar: 함수가 다시 호출되면서 let countVar = 5로 재초기화되므로 5.<div class=\"exam-result-preview\"><div class=\"exam-result-preview-header\">📱 교안 실제 실행 결과 화면</div><img src=\"assets/crossplatform/week7_p9_0_Image78.png\" alt=\"실행 화면\" class=\"exam-result-img\" loading=\"lazy\"></div>"
        },
        {
          id: 8, type: "short", score: 10, origin: "7주차: useEffect 의존성 배열에 따른 콘솔 출력 순서",
          text: "다음 컴포넌트가 화면에 <b>최초 마운트(처음 로드)</b>된 직후 콘솔(Console)에 출력되는 로그 기호(A, B, C)를 실행 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>export default function EffectTest() {\n    const [count, setCount] = useState(0);\n\n    useEffect(() => { console.log('A'); });\n    useEffect(() => { console.log('B'); }, []);\n    useEffect(() => { console.log('C'); }, [count]);\n\n    return &lt;View&gt;&lt;Text&gt;{count}&lt;/Text&gt;&lt;/View&gt;;\n}</pre>",
          placeholder: "출력 순서 입력 (예: A, B, C)",
          answers: ["A, B, C", "A,B,C", "A B C"],
          explanation: "<b>정답: A, B, C</b><br>컴포넌트가 최초 마운트될 때 모든 useEffect는 의존성 배열의 유무와 관계없이 무조건 최소 1회 실행됩니다. 따라서 코드에 작성된 순서대로 A, B, C가 차례대로 출력됩니다. (만약 이후 count 값이 변경되면 매번 실행되는 A와 count를 의존하는 C만 실행되고, 빈 배열을 가진 B는 실행되지 않습니다.)"
        },
        {
          id: 9, type: "essay", score: 10, origin: "7주차: useMemo의 목적 및 의존성 배열 동작 메커니즘",
          text: "React Hook인 <b>useMemo</b>를 사용하는 목적을 설명하고, 컴포넌트 내의 다른 상태(state)가 변경되어 화면이 리렌더링될 때 useMemo의 의존성 배열에 등록된 값이 바뀌지 않았다면 내부 계산 함수가 다시 실행되는지 여부와 그 이유를 서술하시오.",
          placeholder: "useMemo의 목적과 의존성 배열 미변경 시의 동작을 서술하세요.",
          rubric: "1. 고비용 연산 결과 메모이제이션(캐싱)을 통한 불필요한 재계산 방지 목적 명시 (5점)\n2. 의존성 배열 값이 변경되지 않으면 재계산하지 않고 기존 캐시값을 그대로 반환함을 명시 (5점)",
          sampleAnswer: "useMemo는 복잡하거나 비용이 큰 연산 결과를 메모리에 캐싱(메모이제이션)하여 렌더링 성능을 최적화하기 위해 사용합니다.\n의존성 배열에 등록된 값이 변경되지 않았다면 컴포넌트가 다른 이유로 리렌더링되더라도 내부 연산 함수를 다시 실행하지 않고 이전에 기억해 둔 캐시 결과값을 그대로 재사용합니다.",
          explanation: "불필요한 재계산 방지 및 이전 캐시값 재사용이 핵심 키워드입니다. (7주차 교안 p.16~17 원문)"
        },
        {
          id: 10, type: "short", score: 10, origin: "7주차 교안 p.11~12: A × B 계산기 및 useRef 포커스 제어 코드 완성",
          text: "두 숫자 A와 B를 입력받아 곱한 결과를 상태에 저장하고, 계산 후 첫 번째 입력창(A)으로 커서를 자동 이동시키고자 한다. 빈칸 (1), (2), (3)에 들어갈 코드를 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>export default function Calc() {\n    const [a, setA] = useState('');\n    const [b, setB] = useState('');\n    const [result, setResult] = useState(null);\n    const inputRef = (1); // ref 생성\n\n    const focusInput = () => {\n        (2); // inputRef를 통해 첫 번째 TextInput으로 포커스 이동\n    };\n    return (\n        &lt;View&gt;\n            &lt;TextInput (3)={inputRef} value={a} onChangeText={setA} /&gt;\n            &lt;TextInput value={b} onChangeText={setB} /&gt;\n            &lt;Button title=\"계산\" onPress={() => { setResult(parseFloat(a) * parseFloat(b)); focusInput(); }} /&gt;\n        &lt;/View&gt;\n    );\n}</pre>",
          placeholder: "순서대로 입력 (예: useRef(null), inputRef.current.focus(), ref)",
          answers: [
            "useRef(null), inputRef.current.focus(), ref",
            "useRef(null),inputRef.current.focus(),ref",
            "useRef(null), inputRef.current?.focus(), ref",
            "useRef(null),inputRef.current?.focus(),ref"
          ],
          explanation: "<b>정답: (1) useRef(null), (2) inputRef.current?.focus() (또는 inputRef.current.focus()), (3) ref</b><br>DOM/컴포넌트 인스턴스를 제어하기 위해 useRef(null)로 ref를 생성하고, TextInput에 ref={inputRef}로 연결한 후 inputRef.current?.focus()를 호출하여 포커스를 이동시킵니다. (7주차 교안 p.10~12 원문)<div class=\"exam-result-preview\"><div class=\"exam-result-preview-header\">📱 교안 실제 실행 결과 화면</div><img src=\"assets/crossplatform/week7_p11_0_Image84.png\" alt=\"실행 화면\" class=\"exam-result-img\" loading=\"lazy\"></div>"
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
          id: 1, type: "short", score: 10, origin: "3주차 교안 p.9: JSX 강제 개행(줄바꿈)",
          text: "React Native의 &lt;Text&gt; 컴포넌트 내부에서 강제로 줄바꿈(개행)을 수행할 때 사용하는 JSX 중괄호 표현식은 무엇인가?",
          placeholder: "JSX 표현식 입력 (예: {\"\\n\"})",
          answers: ["{\"\\n\"}", "{\"\\n\"} ", "{\\n}", "\\n"],
          explanation: "<b>정답: {\"\\n\"}</b><br>React Native의 JSX 텍스트 내부에서 강제 줄바꿈을 넣을 때는 <code>{\\\"\\\\n\\\"}</code> 표현식을 사용합니다. (3주차 p.9)"
        },
        {
          id: 2, type: "short", score: 10, origin: "3주차 교안 p.5: Flexbox 주축 기본값",
          text: "React Native의 flexDirection 속성에서 컴포넌트들을 위에서 아래(세로) 방향으로 배치하는 기본값은 무엇인가?",
          placeholder: "속성값 입력 (예: column)",
          answers: ["column", "Column"],
          explanation: "React Native의 flexDirection 기본값은 column입니다."
        },
        {
          id: 3, type: "short", score: 10, origin: "4주차 교안 p.5: Text 중첩 스타일 상속",
          text: "Text 컴포넌트 안에 또 다른 Text 컴포넌트를 중첩(Nesting)했을 때, 안쪽 텍스트가 바깥쪽 부모 텍스트로부터 물려받는 고유한 특성은 무엇인가?",
          placeholder: "특성 단어 입력 (예: 스타일 상속)",
          answers: ["스타일 상속", "상속", "스타일상속", "style inheritance"],
          explanation: "중첩된 Text 컴포넌트는 부모 Text 컴포넌트의 폰트 크기, 패밀리, 굵기 등 스타일을 상속받습니다. (4주차 교안 p.5)"
        },
        {
          id: 4, type: "short", score: 10, origin: "4주차 교안 p.15: TextInput 속성",
          text: "TextInput에서 비밀번호 입력창처럼 사용자가 입력하는 글자를 별표(***)나 점으로 숨겨주는 속성(Prop)은?",
          placeholder: "속성명 입력 (예: secureTextEntry)",
          answers: ["secureTextEntry", "secureTextEntry={true}"],
          explanation: "secureTextEntry 속성을 적용하면 텍스트가 마스킹 처리됩니다. (4주차 교안 p.15)"
        },
        {
          id: 5, type: "short", score: 10, origin: "5주차 교안 p.10: Image 컴포넌트",
          text: "교안 5주차 10페이지에서 Image 컴포넌트로 로컬에 위치한 kangnam.png 이미지를 불러올 때 source 속성에 사용하는 함수 호출 구문은?",
          placeholder: "호출 구문 입력 (예: require('./kangnam.png'))",
          answers: ["require('./kangnam.png')", "require(\"./kangnam.png\")", "require('./kangnam.png') "],
          explanation: "<b>정답: require('./kangnam.png')</b><br>로컬 이미지를 불러올 때는 require('경로') 문법을 사용합니다."
        },
        {
          id: 6, type: "short", score: 10, origin: "6주차 교안 p.4: BackHandler",
          text: "안드로이드의 BackHandler 이벤트 리스너 함수에서 시스템의 기본 뒤로가기 동작을 차단하고 앱 종료 확인 Alert 등 커스텀 로직을 수행하려면 반환해야 하는 boolean 값은?",
          placeholder: "boolean 값 입력 (예: true)",
          answers: ["true", "True", "TRUE"],
          explanation: "hardwareBackPress 리스너에서 true를 반환하면 시스템의 기본 뒤로가기 동작이 차단됩니다.<div class=\"exam-result-preview\"><div class=\"exam-result-preview-header\">📱 교안 실제 실행 결과 화면</div><img src=\"assets/crossplatform/week6_p4_0_Image56.jpg\" alt=\"실행 화면\" class=\"exam-result-img\" loading=\"lazy\"></div>"
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
          id: 1, type: "short", score: 10, origin: "7주차 교안 p.14: useEffect 의존성 배열",
          text: "리액트의 useEffect Hook에서 두 번째 인자인 의존성 배열(Dependency Array)에 빈 배열(<code>[]</code>)을 전달했을 때 effect 함수가 실행되는 시점은 언제인가?",
          placeholder: "실행 시점 입력 (예: 마운트 시 1회)",
          answers: ["마운트 시 1회", "마운트 시 1회만", "마운트 시", "컴포넌트 마운트 시 1회", "최초 렌더링 시 1회", "마운트", "최초 렌더링"],
          explanation: "<b>정답: 마운트 시 1회 (최초 렌더링 완료 직후 1회만 실행)</b><br>의존성 배열을 생략하면 매 렌더링마다 실행되고, 빈 배열 []을 넘기면 컴포넌트가 처음 화면에 나타나는 마운트(Mount) 시점에 단 한 번만 실행됩니다. (7주차 교안 p.14 원문: '앱이 실행되었습니다! (처음 한 번만)')"
        },
        {
          id: 2, type: "essay", score: 10, origin: "6주차 교안 p.4, p.20: 클린업(Cleanup) 함수",
          text: "useEffect 내부에서 함수를 반환(<code>return () => { ... }</code>)하는 <b>클린업(Cleanup) 함수</b>의 주된 목적과 이 함수가 실제로 실행되는 <b>2가지 시점</b>을 서술하시오.",
          placeholder: "클린업 함수의 목적과 실행되는 2가지 시점을 서술하세요.",
          rubric: "1. 타이머 해제(clearTimeout), 이벤트 리스너 제거(backHandler.remove), 구독 해제 등 메모리 누수 방지 목적 명시 (4점)\n2. 컴포넌트가 화면에서 사라지는 언마운트(Unmount) 시점 명시 (3점)\n3. 의존성 값이 바뀌어 다음 effect 함수가 실행되기 직전 시점 명시 (3점)",
          sampleAnswer: "목적: 컴포넌트 언마운트 시 타이머 해제(clearTimeout), 이벤트 리스너 제거(remove), 구독 취소 등을 수행하여 메모리 누수(Memory Leak)를 방지하는 정리 작업을 수행한다.\n실행 시점: 1) 컴포넌트가 언마운트(Unmount)되어 화면에서 제거될 때, 2) 의존성 배열의 값이 변경되어 다음 effect가 실행되기 바로 직전.",
          explanation: "교안 6주차 p.4(BackHandler remove)와 p.20(RefreshControl clearTimeout)에 클린업 구현 패턴이 직접 등장합니다."
        },
        {
          id: 3, type: "short", score: 10, origin: "4주차 교안 p.15: TextInput 숫자 키패드",
          text: "TextInput에서 사용자에게 숫자 전용 가상 키패드를 띄워주기 위해 지정하는 keyboardType 속성값은 무엇인가?",
          placeholder: "속성값 입력 (예: numeric)",
          answers: ["numeric", "'numeric'", "\"numeric\""],
          explanation: "<b>정답: numeric</b><br>keyboardType='numeric' 속성을 통해 숫자 입력 키패드를 활성화합니다. (4주차 p.15)"
        },
        {
          id: 4, type: "essay", score: 10, origin: "7주차 교안 p.16~17: useMemo 연산 최적화 원리",
          text: "7주차 교안 p.17에서 <code>double = useMemo(() => count * 2, [count]);</code> 코드가 작성되어 있다. 사용자가 [텍스트 변경] 버튼을 눌러 <code>text</code> 상태를 바꾸어 화면이 리렌더링될 때, <code>double</code> 계산 함수가 다시 실행되지 않는 이유를 의존성 배열 관점에서 설명하시오.",
          placeholder: "useMemo의 의존성 배열과 재계산 여부를 서술하세요.",
          rubric: "1. useMemo의 의존성 배열에 [count]만 지정되어 있음을 명시 (5점)\n2. text 상태가 바뀌어 리렌더링되어도 count 값이 바뀌지 않았으므로 이전 캐시값을 재사용하여 재계산되지 않음을 명시 (5점)",
          sampleAnswer: "useMemo의 의존성 배열에 [count]만 등록되어 있기 때문입니다. [텍스트 변경] 버튼을 눌러 text 상태가 변경되면 컴포넌트 자체는 리렌더링되지만, 의존성 배열에 등록된 count 값은 변하지 않았으므로 useMemo는 내부 연산 함수를 다시 실행하지 않고 이전에 계산하여 기억해 둔 캐시값을 그대로 재사용합니다.",
          explanation: "의존성 배열에 등록된 상태값의 변경 여부만이 useMemo의 재계산 트리거 조건입니다."
        },
        {
          id: 5, type: "short", score: 10, origin: "7주차 교안 p.3: Hook 네이밍 규칙",
          text: "React에서 Hook 함수를 정의하거나 식별할 때 이름 맨 앞에 반드시 붙여야 하는 표준 접두어(Prefix)는 무엇인가?",
          placeholder: "접두어 입력 (예: use)",
          answers: ["use", "use-", "useXxx"],
          explanation: "<b>정답: use</b><br>React의 모든 Hook은 'use' 접두사로 시작해야 엔진이 Hook 호출 규칙을 검증할 수 있습니다."
        },
        {
          id: 6, type: "short", score: 10, origin: "6주차 교안 p.16: Modal 컴포넌트 속성",
          text: "리액트 네이티브의 Modal 컴포넌트에서 모달 창의 화면 표시 여부를 제어하는 필수 boolean 속성 (1)과, 안드로이드 기기의 물리적 뒤로가기 버튼을 눌렀을 때 호출되는 필수 콜백 함수 속성 (2)의 이름을 순서대로 쓰시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>&lt;Modal\n    (1)={modalVisible}\n    (2)={() =&gt; {\n        Alert.alert('Modal has been closed.');\n        setModalVisible(false);\n    }}\n    animationType=\"slide\"\n&gt;</pre>",
          placeholder: "순서대로 입력 (예: visible, onRequestClose)",
          answers: ["visible, onRequestClose", "visible,onRequestClose", "visible, onrequestclose"],
          explanation: "<b>정답: visible, onRequestClose</b><br>Modal은 화면 표시 여부를 결정하는 visible과 안드로이드 하드웨어 뒤로가기 처리를 위한 onRequestClose가 핵심 속성입니다. (6주차 교안 p.16 원문)<div class=\"exam-result-preview\"><div class=\"exam-result-preview-header\">📱 교안 실제 실행 결과 화면</div><img src=\"assets/crossplatform/week6_p16_0_Image106.png\" alt=\"실행 화면\" class=\"exam-result-img\" loading=\"lazy\"></div>"
        },
        {
          id: 7, type: "short", score: 10, origin: "6주차 교안 p.7: ToastAndroid 지속시간 상수",
          text: "ToastAndroid에서 짧은 시간 동안 토스트 메시지를 표시하기 위해 두 번째 인자로 전달하는 상수의 이름은 무엇인가?",
          placeholder: "상수 이름 입력 (예: ToastAndroid.SHORT)",
          answers: ["ToastAndroid.SHORT", "SHORT", "ToastAndroid.SHORT "],
          explanation: "<b>정답: ToastAndroid.SHORT</b><br>ToastAndroid.show('메시지', ToastAndroid.SHORT) 형태로 사용합니다. (6주차 p.7)"
        },
        {
          id: 8, type: "short", score: 10, origin: "6주차 교안 p.15: Linking API",
          text: "교안 6주차 15페이지에서 버튼을 눌렀을 때 교수님 블로그 URL을 열기 위해 호출한 Linking 메서드와 전달 인자 URL을 쓰시오.",
          placeholder: "호출 코드 입력 (예: Linking.openURL('https://blog.naver.com/jongsoo67'))",
          answers: [
            "Linking.openURL('https://blog.naver.com/jongsoo67')",
            "Linking.openURL(\"https://blog.naver.com/jongsoo67\")",
            "Linking.openURL"
          ],
          explanation: "<b>정답: Linking.openURL('https://blog.naver.com/jongsoo67')</b><br>외부 URL을 열기 위해 Linking.openURL(url) 메서드를 사용합니다."
        },
        {
          id: 9, type: "short", score: 10, origin: "5주차 교안 p.11: Switch 토글 콜백",
          text: "Switch 컴포넌트에서 사용자가 스위치를 켜거나 끌 때 상태 변경 함수를 호출하기 위해 연결하는 이벤트 콜백 속성의 이름은?",
          placeholder: "속성명 입력 (예: onValueChange)",
          answers: ["onValueChange", "onvaluechange"],
          explanation: "<b>정답: onValueChange</b><br>Switch는 onValueChange={setDarkMode} 속성을 통해 값 변경 콜백을 전달받습니다. (5주차 p.11)"
        },
        {
          id: 10, type: "short", score: 10, origin: "6주차 교안 p.13~14: KeyboardAvoidingView",
          text: "가상 키보드가 활성화되었을 때 입력창(TextInput)이 키보드에 가려지지 않도록 화면을 자동으로 밀어 올려주는 리액트 네이티브 내장 컴포넌트의 이름은?",
          placeholder: "컴포넌트 이름 입력 (예: KeyboardAvoidingView)",
          answers: ["KeyboardAvoidingView", "<KeyboardAvoidingView>", "<KeyboardAvoidingView />"],
          explanation: "<b>정답: KeyboardAvoidingView</b><br>KeyboardAvoidingView 컴포넌트는 키보드가 화면을 가리지 않도록 위치를 조정해 줍니다. (6주차 교안 p.13)"
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
          id: 1, type: "short", score: 10, origin: "4주차 교안 p.10: numberOfLines 속성",
          text: "Text 컴포넌트에서 긴 본문 내용이 있을 때 화면에 최대 5줄까지만 표시하고 초과분을 말줄임표(...)로 처리하기 위해 지정하는 속성과 값은?",
          placeholder: "속성 입력 (예: numberOfLines={5})",
          answers: ["numberOfLines={5}", "numberOfLines=5", "numberOfLines"],
          explanation: "<b>정답: numberOfLines={5}</b><br>numberOfLines 속성에 정수를 전달하여 최대 줄 수를 제한합니다. (4주차 p.10)"
        },
        {
          id: 2, type: "essay", score: 10, origin: "4주차 & 7주차: 함수형 컴포넌트 vs 클래스형 컴포넌트",
          text: "리액트 네이티브에서 함수형 컴포넌트(Functional Component)가 클래스형 컴포넌트(Class Component)를 대체하여 표준이 된 배경과 장점을 <b>Hook의 도입</b> 관점에서 서술하시오.",
          placeholder: "함수형 컴포넌트의 장점과 Hook 도입 배경을 서술하세요.",
          rubric: "1. React 16.8에서 Hook(useState, useEffect 등)이 도입되어 함수형에서도 상태와 생명주기 관리가 가능해졌음을 명시 (5점)\n2. 코드가 더 짧고 직관적이며 가독성이 뛰어남을 명시 (5점)",
          sampleAnswer: "과거 클래스형 컴포넌트는 상태 관리를 위해 복잡한 boilerplate 코드와 this 바인딩이 필요했습니다. 하지만 React 16.8 이후 Hook(useState, useEffect 등)이 도입되면서 함수형 컴포넌트에서도 상태 관리와 컴포넌트 생명주기 제어가 가능해졌으며, 코드가 훨씬 짧고 직관적이어서 현재 리액트 네이티브의 표준 방식으로 사용되고 있습니다.",
          explanation: "4주차 교안 3페이지 원문: '함수형: 코드가 더 짧고 직관적, React 16.8 이후 Hook 도입, 현재 표준'"
        },
        {
          id: 3, type: "short", score: 10, origin: "3주차 교안 p.12: StyleSheet.create",
          text: "인라인 스타일(<code>style={{ ... }}</code>) 대신 <code>StyleSheet.create({ ... })</code>를 사용하여 스타일을 객체화하여 분리 선언하는 리액트 네이티브 전용 모듈의 이름은 무엇인가?",
          placeholder: "모듈 이름 입력 (예: StyleSheet)",
          answers: ["StyleSheet", "stylesheet"],
          explanation: "<b>정답: StyleSheet</b><br>StyleSheet.create() 메서드를 사용하여 컴포넌트 태그 외부에서 스타일 객체를 깔끔하게 선언하고 재사용합니다. (3주차 p.12)"
        },
        {
          id: 4, type: "short", score: 10, origin: "5주차 교안 p.11: Switch 컴포넌트",
          text: "Switch 컴포넌트에서 스위치가 켜졌을 때(ON)와 꺼졌을 때(OFF)의 트랙(배경) 색상을 각각 지정하는 객체형 속성(Prop)의 이름은?",
          placeholder: "속성명 입력 (예: trackColor)",
          answers: ["trackColor", "trackColor={{ false: ..., true: ... }}"],
          explanation: "<b>정답: trackColor</b><br>trackColor={{ false: '#767577', true: '#81b0ff' }} 속성을 통해 ON/OFF 트랙 색상을 설정합니다. (5주차 p.11)"
        },
        {
          id: 5, type: "short", score: 10, origin: "5주차 교안 p.13: SectionList",
          text: "SectionList 컴포넌트에서 각 섹션(그룹)의 상단 제목 헤더를 렌더링하기 위해 전달하는 필수 렌더링 콜백 함수 속성의 이름은?",
          placeholder: "속성명 입력 (예: renderSectionHeader)",
          answers: ["renderSectionHeader", "rendersectionheader"],
          explanation: "<b>정답: renderSectionHeader</b><br>renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>} 속성으로 각 섹션 헤더를 출력합니다. (5주차 p.13)"
        },
        {
          id: 6, type: "short", score: 10, origin: "6주차 교안 p.5: DrawerLayoutAndroid",
          text: "DrawerLayoutAndroid 컴포넌트에서 서랍(Drawer)이 화면의 어느 쪽에서 열릴지를 지정하는 속성(Prop) 이름과 기본 좌측 설정값은?",
          placeholder: "속성명과 값 입력 (예: drawerPosition, left)",
          answers: ["drawerPosition, left", "drawerPosition, 'left'", "drawerPosition, \"left\"", "drawerPosition='left'"],
          explanation: "<b>정답: drawerPosition, left</b><br>drawerPosition 속성에 'left' 또는 'right'를 전달하여 서랍 개폐 방향을 결정합니다. (6주차 p.5)"
        },
        {
          id: 7, type: "short", score: 10, origin: "6주차 교안 p.18~19: PixelRatio",
          text: "PixelRatio API에서 50dp와 같은 레이아웃 크기를 현재 기기의 실제 물리 픽셀(px) 크기로 변환 계산해 주는 메서드는?",
          placeholder: "메서드명 입력 (예: PixelRatio.getPixelSizeForLayoutSize)",
          answers: [
            "PixelRatio.getPixelSizeForLayoutSize",
            "getPixelSizeForLayoutSize",
            "PixelRatio.getPixelSizeForLayoutSize()"
          ],
          explanation: "<b>정답: PixelRatio.getPixelSizeForLayoutSize</b><br>PixelRatio.getPixelSizeForLayoutSize(size)를 통해 dp 단위를 실제 기기 물리 픽셀 크기로 변환합니다. (6주차 p.18~19)"
        },
        {
          id: 8, type: "essay", score: 10, origin: "7주차 교안 p.19: 계산기 실습 7대 조건",
          text: "교수님이 강조한 7주차 계산기 실습 교안 p.19의 상세조건 중 <b>전체 배경색(container)</b>, <b>숫자 버튼(numberButton) 배경색</b>, <b>연산자 버튼(operatorButton) 배경색</b>, <b>유틸리티 버튼(utilityButton) 배경색</b>의 4가지 색상값을 정확히 서술하시오.",
          placeholder: "4가지 배경 색상을 서술하세요.",
          rubric: "1. 전체 배경: 'black' 명시 (2.5점)\n2. 숫자 버튼: '#2f2f2f' 명시 (2.5점)\n3. 연산자 버튼: '#F5A623' 명시 (2.5점)\n4. 유틸리티 버튼: '#555' 명시 (2.5점)",
          sampleAnswer: "1. 전체 배경: 'black'\n2. 숫자 버튼: '#2f2f2f'\n3. 연산자 버튼: '#F5A623'\n4. 유틸리티 버튼: '#555'",
          explanation: "교안 7주차 19페이지 실습 상세조건에 명시된 필수 Hex 색상 코드입니다. (감점 방지 필수 암기)"
        },
        {
          id: 9, type: "short", score: 10, origin: "5주차 교안 p.8: 삼항 연산자 조건부 렌더링",
          text: "교안 5주차 8페이지에서 name 변수가 'Beomjun'일 때 화면에 출력되는 문자열은 무엇인가?<br><br><code>{name === 'Beomjun' ? 'My name is Beomjun' : \"I'm not Beomjun\"}</code>",
          placeholder: "출력 문자열 입력 (예: My name is Beomjun)",
          answers: [
            "My name is Beomjun",
            "My name is Beomjun ",
            "'My name is Beomjun'"
          ],
          explanation: "<b>정답: My name is Beomjun</b><br>조건식이 참이므로 삼항 연산자의 앞쪽 'My name is Beomjun'이 평가되어 화면에 출력됩니다. (5주차 p.8)"
        },
        {
          id: 10, type: "short", score: 10, origin: "4주차 교안 p.10: onPress 텍스트 상태 변경",
          text: "교안 4주차 10페이지에서 초기 상태가 \"지금, 무슨 과목:[클릭 ㅋㅋ]\"인 제목 텍스트를 터치(onPress)했을 때 변경되는 텍스트 문자열은 무엇인가?",
          placeholder: "변경 텍스트 입력 (예: 크로스 플랫폼 과목 !!!)",
          answers: [
            "크로스 플랫폼 과목 !!!",
            "크로스 플랫폼 과목!!!",
            "크로스 플랫폼 과목",
            "크로스플랫폼 과목 !!!"
          ],
          explanation: "<b>정답: 크로스 플랫폼 과목 !!!</b><br>4주차 교안 10페이지 Text onPress 예제에서 setTitleText(\"크로스 플랫폼 과목 !!!\")로 상태가 변경됩니다.<div class=\"exam-result-preview\"><div class=\"exam-result-preview-header\">📱 교안 실제 실행 결과 화면</div><img src=\"assets/crossplatform/week4_p10_0_Image90.png\" alt=\"실행 화면\" class=\"exam-result-img\" loading=\"lazy\"></div>"
        }
      ]
    }
  ]
};
