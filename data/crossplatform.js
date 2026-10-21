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
    { id: "cp-workbook", label: "📝 실전 시험대비 빈칸 문제집 (49제)", class: "success-chip" },
    { id: "cp-examples", label: "💻 전체 예제코드 & 실행화면 (49선)", class: "accent-chip" },
    { id: "cp-w3", label: "3주: 스타일링·Flexbox 정렬" },
    { id: "cp-w4", label: "4주: View·Text·Button·Input" },
    { id: "cp-w5", label: "5주: JSX·조건문·FlatList" },
    { id: "cp-w6", label: "6주: 10대 네이티브 API·컴포넌트" },
    { id: "cp-w7", label: "7주: Hook 4총사 (useState·useRef·useEffect·useMemo)" }
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
          <div class="qa-q"><span class="q-icon">Q15</span><span>컴포넌트 리렌더링 시 함수가 불필요하게 재생성되는 것을 방지하기 위해 함수 인스턴스를 캐싱하는 Hook은?</span></div>
          <div class="qa-a"><span class="ans-target">useCallback</span><button class="copy-btn" onclick="copyText('useCallback')">복사</button></div>
          <div style="font-size: 13px; color: var(--ink-muted); margin-top: 4px;">* useMemo는 연산 결과(값)를 캐싱하고, useCallback은 함수 정의(콜백) 자체를 캐싱함 (7주차)</div>
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
              <td>스타일링부터 7장 Hook(useState, useRef, useEffect, useMemo)까지</td>
            </tr>
            <tr>
              <td style="font-weight: 800; color: var(--accent);">문항 수 & 형식</td>
              <td><b>약 10문제 (All 100% 주관식)</b></td>
              <td><span style="color: var(--tag-gold-ink); font-weight: 700;">"10문제 생각하고 있어. 다 주관식으로 낼 예정입니다. 객관식 없음!"</span></td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box" style="margin-top: 16px; border-left: 4px solid var(--tag-gold-ink);">
          <div class="callout-title">💡 시험에 출제되는 3대 주관식 유형 (교수님 직접 언급)</div>
          <ul style="margin-left: 20px; font-size: 14.5px; line-height: 1.8; color: var(--ink-secondary);">
            <li><b>1) 코드 빈칸 채우기</b>: <i>"예를 들어서 코드를 채워 넣으시오."</i> (컴포넌트 선언문, Props 속성명, Hook 빈칸)</li>
            <li><b>2) 코드 동작 원리 및 개념 설명 서술형</b>: <i>"이 코드가 어떤 의미를 하는지 어떻게 동작하는지 설명하시오."</i> (useState vs useRef, useEffect 의존성 배열, useMemo 목적)</li>
            <li><b>3) 코드 실행 결과 예측 및 값 도출형</b>: <i>"이 부분을 썼을 때 이러한 조건을 했을 때 어떤 답이 나옵니까?"</i> (클릭 이벤트 후 화면 출력값 예측)</li>
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

    <!-- SECTION 7: 7주차 Hook 4총사 -->
    <section id="cp-w7" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title">
          <span>📂 7주차: React Hook 4총사 (useState · useRef · useEffect · useMemo) (교안 p.1~21)</span>
        </div>
        <span class="badge badge-amber">교수님 강조 최고 배점 단원 · 4대 Hook 완벽 대비</span>
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
    </section>
  

    <!-- SECTION: 실전 시험대비 빈칸 문제집 (통합본 / Active Recall) -->
    


    <!-- SECTION: 실전 시험대비 빈칸 문제집 (통합본 / Active Recall) -->
    <section id="cp-workbook" class="concept-section">
      <div class="section-banner success-banner">
        <div class="section-banner-title">
          <span>📝 3주차~7주차 실전 시험대비 빈칸 문제집 (총 49제 Active Recall 테스트)</span>
        </div>
        <span style="font-size: 13.5px; opacity: 0.95;">화면 캡처와 구현 조건을 보고 핵심 코드를 백지 복원한 뒤 정답을 클릭하여 자가 채점하세요!</span>
      </div>

      <div class="concept-card">
        <div style="background: rgba(34, 197, 94, 0.1); border-left: 4px solid var(--success); padding: 12px 16px; border-radius: 4px; margin-bottom: 24px;">
          <b style="color: var(--success);">🎯 시험 직전 자가 진단 방법</b>: 문제를 읽고 보일러플레이트 내부의 <code>[TODO]</code> 영역을 머릿속이나 메모장에 직접 작성해본 뒤, <b>[💡 정답 및 교수님 채점 기준 확인하기]</b> 토글을 열어 감점 요인을 점검하세요.
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--success); font-size: 18px;">📌 3주차 빈칸 실전 문제</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 01] 정렬 기본 템플릿 (Expo 기본 구조)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.04</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p04_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p04_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 컴포넌트가 화면 전체(<code>flex: 1</code>)를 차지하고 배경색을 흰색(<code>#fff</code>)으로 설정할 것</li>
              <li>2. 화면 내부 요소를 가로/세로 중앙 정렬(<code>alignItems: 'center'</code>, <code>justifyContent: 'center'</code>)할 것</li>
              <li>3. 'Open up App.js to start working on your app!' 텍스트를 출력할 것</li>
              <li>4. Expo 상태 표시줄 <code><StatusBar style="auto" /></code>을 포함할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 조건 1~4를 만족하는 화면 렌더링 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;Open up App.js to start working on your app!&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
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
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>View</code>의 스타일로 <code>styles.container</code> 연결 여부</b></li>
                  <li><b><code>Text</code> 태그로 안내 문구 정상 감싸기</b></li>
                  <li><b><code>StatusBar</code> 컴포넌트 포함 여부</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 02] 스타일링: 영어 다중 Text 출력</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.08</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p08_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p08_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 기본 중앙 정렬 컨테이너(<code>styles.container</code>) 내부에 2개의 Text 컴포넌트를 배치할 것</li>
              <li>2. 첫 번째 줄에 'Open up App.js to start working on your app!' 출력</li>
              <li>3. 두 번째 줄에 'First My Project !' 출력</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 2개의 Text 컴포넌트를 렌더링하도록 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;Open up App.js to start working on your app!&lt;/Text&gt;
      &lt;Text&gt;First My Project !&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
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
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>두 개의 <code>Text</code> 컴포넌트가 하나의 부모 <code>View</code> 안에 순서대로 나열되었는지 확인</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 03] 스타일링: 한글 줄바꿈 문법 ({"\n"})</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.09</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p09_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p09_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 리액트 네이티브 JSX 내부에서 개행(줄바꿈)을 처리하기 위해 {\"\\n\"} 표현식을 사용할 것</li>
              <li>2. 다음 문구가 한 Text 컴포넌트 내에서 4줄로 출력되도록 작성할 것:</li>
              <li>   - 처음 시작하는 리액트 네이티브 프로그래밍 !</li>
              <li>   - 학과: 소프트웨어공학</li>
              <li>   - 학번: 123456</li>
              <li>   - 이름: 홍길동</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] JSX 줄바꿈 문법을 사용하여 학적 정보를 4줄로 출력하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;
        처음 시작하는 리액트 네이티브 프로그래밍 !{"\n"}
        학과: 소프트웨어공학 {"\n"}
        학번: 123456{"\n"}
        이름: 홍길동
      &lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
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
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>단순 엔터가 아닌 {"\n"}을 사용하여 JSX 내 명시적 줄바꿈을 구현했는지 여부 (교수님 빈출 포인트)</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 04] 스타일링: 주석 처리 (JSX 주석 vs JS 주석)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p10_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p10_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 함수 외부에 JS 한 줄 주석(<code>//</code>)으로 '과목명: 리액트 네이티브 프로그래밍' 작성</li>
              <li>2. 함수 외부에 JS 여러 줄 주석(<code>/* */</code>)으로 '이름: 홍길동' 작성</li>
              <li>3. JSX return 내부에서 '<Text>처음 시작하는 리액트 네이티브 프로그래밍 !</Text>'를 주석 처리할 것 (반드시 <code>{/* */}</code> 형태 사용)</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// [TODO 1] 여기에 JS 한 줄 주석과 여러 줄 주석을 작성하시오.

export default function App() {
  // [TODO 2] JSX 내부에서 유효한 주석 문법을 사용하여 Text를 주석 처리하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// 과목명: 리액트 네이티브 프로그래밍
/* 이름: 홍길동 */
export default function App() {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !&lt;/Text&gt;
      {/* &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !&lt;/Text&gt; */}
      &lt;StatusBar style="auto" /&gt;
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
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>JSX 태그 사이에서 <code>//</code>나 <code>/* */</code>를 그냥 쓰면 화면에 문자로 렌더링되므로, 반드시 중괄호 <code>{/* 주석 내용 */}</code>으로 감싸야 함</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 05] 인라인 스타일링 (Inline Styling)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.11</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p11_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p11_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 별도의 StyleSheet 없이 컴포넌트의 <code>style={{ ... }}</code> 속성에 직접 스타일 객체를 전달할 것</li>
              <li>2. 컨테이너: flex 1, 배경 흰색, 중앙 정렬</li>
              <li>3. 첫 번째 Text: padding 10, fontSize 26, fontWeight '600'(문자열 주의), 검정 글씨 ('Inline Styling - Text')</li>
              <li>4. 두 번째 Text: padding 10, fontSize 26, fontWeight '400'(문자열 주의), 빨간 글씨 ('Inline Styling - Error')</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  // [TODO] StyleSheet를 쓰지 않고 오직 인라인 스타일링만으로 화면을 구현하시오.


  // [이 영역에 코드를 작성하시오]


}
</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
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
          fontWeight: "600", // 숫자가 아닌 문자열로 지정
          color: "black",
        }}&gt;
        Inline Styling - Text
      &lt;/Text&gt;
      &lt;Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "400", // 숫자가 아닌 문자열로 지정
          color: "red",
        }}&gt;
        Inline Styling - Error
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}
</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>style={{ }}</code> 이중 중괄호 문법 (바깥은 JSX 표현식, 안쪽은 자바스크립트 객체)</b></li>
                  <li><b><code>fontWeight</code> 값은 숫자가 아닌 반드시 따옴표로 감싼 문자열 (<code>'600'</code>, <code>'400'</code>)이어야 함</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 06] 클래스 스타일링 (StyleSheet.create)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p12_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p12_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>StyleSheet.create</code>를 사용하여 <code>container</code>, <code>text</code>, <code>error</code> 3가지 스타일 객체를 정의할 것</li>
              <li>2. <code>text</code>: padding 10, fontSize 26, fontWeight '600', color 'black'</li>
              <li>3. <code>error</code>: padding 10, fontSize 26, fontWeight '400', color 'red'</li>
              <li>4. 컴포넌트에 <code>styles.text</code>, <code>styles.error</code>로 바인딩할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO 1] styles 객체를 참조하여 View와 2개의 Text를 렌더링하시오.


  // [이 영역에 코드를 작성하시오]


}

// [TODO 2] StyleSheet.create를 사용하여 container, text, error 스타일을 정의하시오.
const styles = StyleSheet.create({

});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;Inline Styling - Text&lt;/Text&gt;
      &lt;Text style={styles.error}&gt;Inline Styling - Error&lt;/Text&gt;
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
    padding: 10,
    fontSize: 26,
    fontWeight: '400',
    color: 'red',
  },
});
}

</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>StyleSheet.create</code> 기본 문법 구조</b></li>
                  <li><b><code>style={styles.text}</code>와 <code>style={styles.error}</code>로 클래스 스타일 매핑</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 07] 여러 개의 스타일 적용 (배열 스타일링)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.13</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p13_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p13_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>styles.text</code>에는 공통 속성(padding: 10, fontSize: 26, fontWeight: '600', color: 'black')을 정의할 것</li>
              <li>2. <code>styles.error</code>에는 변경할 속성(fontWeight: '400', color: 'red')만 정의할 것</li>
              <li>3. 두 번째 Text 컴포넌트에 **배열**을 사용하여 두 스타일을 병합 적용할 것 (<code>style={[styles.text, styles.error]}</code>)</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 배열을 사용하여 다중 스타일을 적용하는 JSX를 작성하시오.


  // [이 영역에 코드를 작성하시오]


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
    fontWeight: '400',
    color: 'red',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;Inline Styling - Text&lt;/Text&gt;
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
    fontWeight: '400',
    color: 'red',
  },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>배열 구문 <code>style={[styles.text, styles.error]}</code> 작성 여부</b></li>
                  <li><b>배열의 뒤쪽에 위치한 스타일(<code>styles.error</code>)이 앞선 스타일의 동일 속성을 덮어씌운다는 원리 이해</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 08] 외부 스타일 이용하기 (App.js & styles.js 모듈 분리)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.14~15</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p14_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p14_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>src/styles.js</code> 파일에서 <code>viewStyles</code>와 <code>textStyles</code>를 named export(<code>export const</code>)할 것</li>
              <li>2. <code>App.js</code> 파일에서 <code>./src/styles</code>로부터 두 스타일 객체를 import하여 적용할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>// [파일 1: src/styles.js]
import { StyleSheet } from "react-native";
// [TODO 1] viewStyles와 textStyles를 export 하시오.


// [파일 2: App.js]
import React from "react";
import { View, Text } from "react-native";
// [TODO 2] 외부 스타일 파일을 import하고 컴포넌트에 연결하시오.

export default function App() {


  // [이 영역에 코드를 작성하시오]


}</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>// [파일 1: src/styles.js]
import { StyleSheet } from "react-native";
// [파일 1: src/styles.js]
import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const textStyles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  error: {
    fontWeight: '400',
    color: 'red',
  },
});

// [파일 2: App.js]
import React from "react";
import { View, Text } from "react-native";
import { viewStyles, textStyles } from "./src/styles";

export default function App() {
  return (
    &lt;View style={viewStyles.container}&gt;
      &lt;Text style={textStyles.text}&gt;Inline Styling - Text&lt;/Text&gt;
      &lt;Text style={textStyles.error}&gt;Inline Styling - Error&lt;/Text&gt;
    &lt;/View&gt;
  );
}
}</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>외부 모듈 분리 시 <code>export const</code>와 <code>import { ... } from './src/styles'</code> 문법 매칭</b></li>
                  <li><b><code>style={viewStyles.container}</code>, <code>style={textStyles.text}</code> 정확한 객체 참조</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 09] Flex와 범위: 수직 1:3:1 분할</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.16</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p16_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p16_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. Header 영역: flex 1, 노란색 배경 (<code>#f1c40f</code>), 중앙 정렬</li>
              <li>2. Contents 영역: flex 3, 청록색 배경 (<code>#1abc9c</code>), 중앙 정렬</li>
              <li>3. Footer 영역: flex 1, 파란색 배경 (<code>#3498db</code>), 중앙 정렬</li>
              <li>4. 총 5의 비율 중 1:3:1로 화면 전체(<code>container: { flex: 1 }</code>)를 분할할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO 1] Header, Contents, Footer 3단 분할 JSX를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

// [TODO 2] flex 1:3:1 비율 및 배경색 styles를 정의하시오.
const styles = StyleSheet.create({

});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.header}&gt;
        &lt;Text style={styles.text}&gt;Header&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.contents}&gt;
        &lt;Text style={styles.text}&gt;Contents&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.footer}&gt;
        &lt;Text style={styles.text}&gt;Footer&lt;/Text&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    flex: 3,
    backgroundColor: '#1abc9c',
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
  },
});
}

</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>최상위 <code>container</code>의 <code>flex: 1</code> 설정 여부</b></li>
                  <li><b>자식 요소들의 <code>flex: 1</code>, <code>flex: 3</code>, <code>flex: 1</code> 합산 비율 레이아웃 구조</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 10] Flex와 범위: 가로 분할 (flexDirection: 'row')</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.17</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p17_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p17_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. Contents 영역에 <code>flexDirection: 'row'</code>를 지정하여 내부 요소를 가로로 나란히 배치할 것</li>
              <li>2. Contents 내부에 Contents Left(flex: 1, <code>#16a085</code>)와 Contents Right(flex: 1, <code>#27ae60</code>) 2개 영역을 1:1로 가로 분할할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO 1] Contents 내부를 Left와 Right로 가로 분할하는 JSX를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  // [TODO 2] contents의 가로 분할 및 contentsLeft, contentsRight 스타일을 정의하시오.
  contents: {

  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.header}&gt;
        &lt;Text style={styles.text}&gt;Header&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.contents}&gt;
        &lt;View style={styles.contentsLeft}&gt;
          &lt;Text style={styles.text}&gt;Contents Left&lt;/Text&gt;
        &lt;/View&gt;
        &lt;View style={styles.contentsRight}&gt;
          &lt;Text style={styles.text}&gt;Contents Right&lt;/Text&gt;
        &lt;/View&gt;
      &lt;/View&gt;
      &lt;View style={styles.footer}&gt;
        &lt;Text style={styles.text}&gt;Footer&lt;/Text&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    flex: 2,
    flexDirection: "row", // 가로 분할의 핵심
  },
  contentsLeft: {
    flex: 1,
    backgroundColor: "#16a085",
    alignItems: "center",
    justifyContent: "center",
  },
  contentsRight: {
    flex: 1,
    backgroundColor: "#27ae60",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 26 },
});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  </code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>부모 컨테이너에 <code>flexDirection: 'row'</code> 적용 여부</b></li>
                  <li><b>가로로 배치된 자식들에 <code>flex: 1</code>을 부여하여 가로 공간 균등 분할 구현 여부</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--success); font-size: 18px;">📌 4주차 빈칸 실전 문제</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 11] View: Flex 복합 그리드 4분할 레이아웃</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.04</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p04_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p04_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. Header와 Footer 사이에 Contents 영역(<code>flex: 3, flexDirection: 'row'</code>)을 둘 것</li>
              <li>2. Contents 좌측(Left)과 우측(Right)을 각각 상/하(Top, Bottom)로 2등분하여 총 4개 칸을 구성할 것</li>
              <li>3. 각 칸에 'Contents Left Top', 'Contents Left Bottom', 'Contents Right Top', 'ContentsRightBottom' 텍스트를 중앙 배치할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 4분할 중첩 View 레이아웃 JSX를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, backgroundColor: '#f1c40f' },
  contents: { flex: 3, flexDirection: 'row' },
  contentsLeft: { flex: 1 },
  contentsLeftTop: { flex: 1, backgroundColor: '#16a085', alignItems: 'center', justifyContent: 'center' },
  contentsLeftBottom: { flex: 1, backgroundColor: '#1abc9c', alignItems: 'center', justifyContent: 'center' },
  contentsRight: { flex: 1 },
  contentsRightTop: { flex: 1, backgroundColor: '#27ae60', alignItems: 'center', justifyContent: 'center' },
  contentsRightBottom: { flex: 1, backgroundColor: '#2ecc71', alignItems: 'center', justifyContent: 'center' },
  footer: { flex: 1, backgroundColor: '#3498db' },
  text: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.header} /&gt;
      &lt;View style={styles.contents}&gt;
        &lt;View style={styles.contentsLeft}&gt;
          &lt;View style={styles.contentsLeftTop}&gt;
            &lt;Text style={styles.text}&gt;Contents Left Top&lt;/Text&gt;
          &lt;/View&gt;
          &lt;View style={styles.contentsLeftBottom}&gt;
            &lt;Text style={styles.text}&gt;Contents Left Bottom&lt;/Text&gt;
          &lt;/View&gt;
        &lt;/View&gt;
        &lt;View style={styles.contentsRight}&gt;
          &lt;View style={styles.contentsRightTop}&gt;
            &lt;Text style={styles.text}&gt;Contents Right Top&lt;/Text&gt;
          &lt;/View&gt;
          &lt;View style={styles.contentsRightBottom}&gt;
            &lt;Text style={styles.text}&gt;ContentsRightBottom&lt;/Text&gt;
          &lt;/View&gt;
        &lt;/View&gt;
      &lt;/View&gt;
      &lt;View style={styles.footer} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, backgroundColor: '#f1c40f' },
  contents: { flex: 3, flexDirection: 'row' },
  contentsLeft: { flex: 1 },
  contentsLeftTop: { flex: 1, backgroundColor: '#16a085', alignItems: 'center', justifyContent: 'center' },
  contentsLeftBottom: { flex: 1, backgroundColor: '#1abc9c', alignItems: 'center', justifyContent: 'center' },
  contentsRight: { flex: 1 },
  contentsRightTop: { flex: 1, backgroundColor: '#27ae60', alignItems: 'center', justifyContent: 'center' },
  contentsRightBottom: { flex: 1, backgroundColor: '#2ecc71', alignItems: 'center', justifyContent: 'center' },
  footer: { flex: 1, backgroundColor: '#3498db' },
  text: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>contents</code>의 row 방향 분할 아래에 컬럼 방향의 Left/Right를 두고, 그 안에서 다시 Top/Bottom 분할을 계층적으로 완성했는지 여부</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 12] 텍스트 중첩: Style 적용</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.05</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p05_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p05_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>Text</code> 컴포넌트 내부에 다른 <code>Text</code> 컴포넌트를 중첩(Nesting)할 것</li>
              <li>2. 전체 텍스트: '나는 강남대학교 학생 이다.' (크기 30, 볼드체)</li>
              <li>3. ' 학생 이다.' 부분에만 빨간색 글자색(<code>innerText: { color: 'red' }</code>)을 적용할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] Text 중첩 문법을 사용하여 특정 단어만 빨간색으로 변경하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  innerText: {
    color: 'red',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.baseText}&gt;
        나는 강남대학교
        &lt;Text style={styles.innerText}&gt; 학생 이다.&lt;/Text&gt;
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  innerText: {
    color: 'red',
  },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>Text</code> 태그 안에 <code>Text</code>를 자식으로 배치할 수 있는 리액트 네이티브 특유의 중첩 문법 이해</b></li>
                  <li><b>부모 <code>Text</code>의 <code>fontSize: 30</code>과 <code>fontWeight: 'bold'</code>를 자식 <code>Text</code>가 상속받는 원리 파악</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 13] 텍스트 중첩: 인라인 스타일링</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.06</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p06_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p06_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. StyleSheet 대신 인라인 스타일(<code>style={{ ... }}</code>)을 사용하여 Text 중첩을 구현할 것</li>
              <li>2. 부모 Text: <code>fontSize: 30</code>, 텍스트 '나는 강남대학교'</li>
              <li>3. 자식 Text: <code>fontSize: 30, color: 'green'</code>, 텍스트 ' 학생 이다.'</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 인라인 스타일로 중첩 Text에 초록색을 적용하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={{ fontSize: 30 }}&gt;
        나는 강남대학교
        &lt;Text style={{ fontSize: 30, color: "green" }}&gt; 학생 이다.&lt;/Text&gt;
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>인라인 스타일 <code>style={{ fontSize: 30, color: 'green' }}</code> 구문 작성 정확도</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 14] 텍스트 ScrollView (긴 본문 스크롤 지원)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.07</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p07_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p07_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 화면을 벗어나는 긴 텍스트를 상하로 스크롤할 수 있도록 <code><ScrollView></code> 컴포넌트로 감쌀 것</li>
              <li>2. ScrollView 내부에 긴 설명 텍스트를 <code>styles.baseText</code>로 스타일링하여 표시할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  // [TODO] ScrollView 컴포넌트를 사용하여 긴 본문을 렌더링하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  baseText: {
    fontSize: 16,
    lineHeight: 24,
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;ScrollView&gt;
        &lt;Text style={styles.baseText}&gt;
          React의 문법으로 안드로이드, iOS 앱을 개발할 수 있는 프레임워크이다...
        &lt;/Text&gt;
      &lt;/ScrollView&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  baseText: {
    fontSize: 16,
    lineHeight: 24,
  },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>View</code> 대신 스크롤 컨테이너로 <code>ScrollView</code>를 정확히 사용했는지 여부</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 15] 텍스트 onPress 이벤트 (상태 변경 및 인터랙션)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p10_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p10_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>useState</code>로 <code>titleText</code> 상태를 정의하고 초기값을 <code>'지금, 무슨 과목:[클릭 ㅋㅋ]'</code>으로 둘 것</li>
              <li>2. 제목 텍스트 클릭 시 호출할 <code>onPressTitle</code> 함수를 정의하여 상태를 <code>'크로스 플랫폼 과목 !!!'</code>으로 변경할 것</li>
              <li>3. 중첩된 자식 Text 컴포넌트에 <code>onPress={onPressTitle}</code> 핸들러를 연결할 것</li>
              <li>4. 본문 텍스트에 <code>numberOfLines={5}</code> 속성을 지정할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] useState 선언, onPress 이벤트 함수 및 JSX를 완성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [titleText, setTitleText] = useState("지금, 무슨 과목:[클릭 ㅋㅋ]");
  const bodyText = '미래를 준비하는 젊은 지성인의 새로운 세계';

  const onPressTitle = () =&gt; {
    setTitleText("크로스 플랫폼 과목 !!!");
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.baseText}&gt;
        {"\n\n"}
        &lt;Text style={styles.titleText} onPress={onPressTitle}&gt;
          {titleText}
        &lt;/Text&gt;
        {"\n\n"}
        &lt;Text numberOfLines={5}&gt;{bodyText}&lt;/Text&gt;
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>const [titleText, setTitleText] = useState(...)</code> 상태 훅 사용</b></li>
                  <li><b><code>Text</code> 태그에도 <code>onPress</code> 속성을 연결할 수 있다는 점 파악</b></li>
                  <li><b><code>numberOfLines</code> 속성 활용</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 16] 버튼 기본 컴포넌트 (Button)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.11</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p11_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p11_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 리액트 네이티브의 기본 <code><Button /></code> 컴포넌트를 중앙에 렌더링할 것</li>
              <li>2. 버튼 제목(<code>title</code>) 속성에 '버튼 만들기'를 지정할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
  // [TODO] 기본 Button 컴포넌트를 렌더링하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Button title="버튼 만들기" /&gt;
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
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>Button</code> 컴포넌트의 필수 속성인 <code>title</code> 속성 지정 여부 (<code>children</code> 텍스트 방식이 아님에 주의)</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 17] 버튼 팝업 메시지 (단일 Alert.alert)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p12_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p12_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 버튼의 배경 색상을 핑크색(<code>color="#f194ff"</code>)으로 지정할 것</li>
              <li>2. 버튼을 누르면(<code>onPress</code>) <code>Alert.alert('핑크 버튼 누름')</code> 팝업을 띄울 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
  // [TODO] 색상 지정 및 onPress에서 Alert을 띄우는 버튼을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Button 
        title="버튼 만들기"
        color="#f194ff"
        onPress={() =&gt; Alert.alert('핑크 버튼 누름')}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>color</code> 속성으로 버튼 색상 변경</b></li>
                  <li><b><code>Alert.alert(...)</code> 호출 문법</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 18] 버튼 팝업 취소/확인 (2버튼 Alert.alert)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.13</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p13_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p13_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 버튼 클릭 시 제목 '핑크버튼', 메시지 '핑크 버튼 누름'의 Alert를 띄울 것</li>
              <li>2. Alert에 2개의 버튼 배열을 넘길 것:</li>
              <li>   - 버튼 1: text: '취소', style: 'cancel', 콘솔에 '취소 버튼 클릭' 출력</li>
              <li>   - 버튼 2: text: '확인', 콘솔에 '확인 버튼 클릭' 출력</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
  // [TODO] 취소와 확인 2개의 버튼을 갖는 Alert.alert를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Button 
        title="버튼 만들기"
        color="#f194ff"
        onPress={() =&gt; Alert.alert(
          '핑크버튼',
          '핑크 버튼 누름',
          [
            {
              text: "취소",
              onPress: () =&gt; console.log("취소 버튼 클릭"),
              style: "cancel",
            },
            { 
              text: "확인", 
              onPress: () =&gt; console.log("확인 버튼 클릭") 
            },
          ]
        )}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>Alert.alert(title, message, buttonsArray)</code>의 3번째 인자 배열 구조</b></li>
                  <li><b><code>style: 'cancel'</code> 속성 지정</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 19] 텍스트 입력: 기본 TextInput (실시간 상태 반영)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.14</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p14_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p14_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>useState("")</code>로 <code>text</code> 상태를 선언할 것</li>
              <li>2. TextInput에 <code>placeholder="여기에 입력"</code>, <code>value={text}</code>, <code>onChangeText={(value) => setText(value)}</code>를 연결할 것</li>
              <li>3. 입력창 아래에 <code><Text>입력값: {text}</Text></code>를 실시간으로 출력할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  // [TODO] useState 및 TextInput과 Text 바인딩 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
    const [text, setText] = useState("");

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.label}&gt;이름을 입력하세요:&lt;/Text&gt;
      &lt;TextInput
        style={styles.input}
        placeholder="여기에 입력"
        value={text}
        onChangeText={(value) =&gt; setText(value)}
      /&gt;
      &lt;Text style={styles.output}&gt;입력값: {text}&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>onChange</code>가 아니라 <code>onChangeText</code>를 사용한다는 점 (React Native 전용)</b></li>
                  <li><b><code>value</code>와 <code>onChangeText</code>의 양방향 바인딩</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 20] 텍스트 입력: 텍스트 vs 숫자 (비밀번호 정규식 필터링)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.15</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p15_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p15_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 숫자만 입력받는 비밀번호 입력창에 <code>keyboardType="numeric"</code>을 지정할 것</li>
              <li>2. <code>onChangeText</code>에서 정규식 <code>value.replace(/[^0-9]/g, "")</code>을 적용하여 숫자가 아닌 모든 문자를 제거한 후 상태에 저장할 것</li>
              <li>3. 아래에 '입 력 값: {text}'와 '비밀번호: {number}'를 각각 출력할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  // [TODO] text와 number 2개의 상태 및 숫자 전용 필터링 로직을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
    const [text, setText] = useState("");
  const [number, onNumber] = useState("");

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.label}&gt;이름을 입력하세요:&lt;/Text&gt;
      &lt;TextInput
        style={styles.input}
        placeholder="여기에 입력"
        value={text}
        onChangeText={(value) =&gt; setText(value)}
      /&gt;
      &lt;TextInput
        style={styles.input}
        placeholder="비밀번호"
        keyboardType="numeric"
        secureTextEntry={false}
        value={number}
        onChangeText={(value) =&gt; onNumber(value.replace(/[^0-9]/g, ""))}
      /&gt;
      &lt;Text style={styles.output}&gt;입 력 값: {text}&lt;/Text&gt;
      &lt;Text style={styles.output}&gt;비밀번호: {number}&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>keyboardType='numeric'</code> 지정</b></li>
                  <li><b>정규식 <code>replace(/[^0-9]/g, "")</code>을 통한 숫자 외 문자 입력 차단</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 21] 텍스트 입력: 여러 줄 입력 (multiline 속성)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.16</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p16_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p16_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. TextInput에 편집 가능(<code>editable</code>), 여러 줄 입력 가능(<code>multiline</code>) 속성을 부여할 것</li>
              <li>2. 최대 표시 줄 수 <code>numberOfLines={4}</code>와 최대 글자 수 <code>maxLength={40}</code>을 지정할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from "react";
import { StyleSheet, View, TextInput } from 'react-native';

export default function App() {
  // [TODO] multiline, numberOfLines, maxLength 속성을 적용한 TextInput을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, margin: 12 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from "react";
import { StyleSheet, View, TextInput } from 'react-native';

export default function App() {
    const [value, onChangeText] = useState('Useless Multiline Placeholder');

  return (
    &lt;View style={styles.container}&gt;
      &lt;TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text =&gt; onChangeText(text)}
        value={value}
        style={styles.textInput}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, margin: 12 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>multiline</code> 불리언 속성 적용</b></li>
                  <li><b><code>numberOfLines={4}</code>, <code>maxLength={40}</code> 수치 속성 지정</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 22] 텍스트 입력: 여러 줄 입력 Alert 연동 및 초기화</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.17</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p17_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p17_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 'Press me' 버튼 클릭 시 호출되는 <code>handlePress</code> 함수를 작성할 것</li>
              <li>2. Alert 창으로 제목 'Input Data', 내용에 현재 입력된 <code>value || "(Empty)"</code>를 띄울 것</li>
              <li>3. Alert 확인 버튼을 누르면 입력창 내용이 빈 문자열(<code>setValue("")</code>)로 초기화되도록 콜백을 지정할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  // [TODO] Alert 연동 및 확인 시 초기화 콜백 로직을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, marginVertical: 10 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function App() {
    const [value, setValue] = useState("");

  const handlePress = () =&gt; {
    Alert.alert(
      "Input Data",
      value || "(Empty)",
      [
        {
          text: "확인",
          onPress: () =&gt; setValue(""), // 확인 시 입력창 비우기
        },
      ]
    );
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) =&gt; setValue(text)}
        value={value}
        placeholder="여기에 입력하세요"
        style={styles.textInput}
      /&gt;
      &lt;Button title="Press me" onPress={handlePress} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, marginVertical: 10 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>Alert 버튼 콜백 <code>onPress: () => setValue("")</code>을 통한 상태 초기화 구현 여부</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--success); font-size: 18px;">📌 5주차 빈칸 실전 문제</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 23] 자바스크립트 변수 바인딩 ({name})</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.05~06</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p06_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p06_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 변수 <code>const name = 'Beomjun'</code>을 선언할 것</li>
              <li>2. JSX 내부에서 중괄호 <code>{name}</code> 바인딩을 사용하여 'My name is Beomjun' 텍스트를 출력할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] 자바스크립트 변수를 선언하고 JSX에서 보간 출력하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const name = 'Beomjun';

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;My name is {name}&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>JSX 내부에서 자바스크립트 표현식을 쓸 때 중괄호 <code>{name}</code>을 사용한다는 기본 문법</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 24] 조건문: if 조건문 분기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.07</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p07_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p07_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>const name = 'Beomjun'</code> 변수 선언</li>
              <li>2. <code>if (name === 'Beomjun')</code>이면 <code>message = 'My name is ' + name</code> 할당</li>
              <li>3. 그렇지 않으면 <code>message = "I'm not Beomjun"</code> 할당</li>
              <li>4. JSX 내부에서 <code><Text style={styles.text}>{message}</Text></code> 출력</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] if-else 조건문으로 message를 결정하여 렌더링하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const name = 'Beomjun';
  let message = '';

  if (name === 'Beomjun') {
    message = 'My name is ' + name;
  } else {
    message = "I'm not Beomjun";
  }

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;{message}&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>JSX 외부에서 if문으로 연산 후 결과를 JSX 내부에 삽입하는 패턴</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 25] 조건문: 삼항연산자 (Ternary Operator)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.08</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p08_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p08_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. JSX 내부에서 삼항연산자(<code>? :</code>)를 직접 사용할 것</li>
              <li>2. <code>name === 'Beomjun'</code>이 참이면 "My name is Beomjun", 거짓이면 "I'm not Beomjun"을 표시할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Beomjun';

  // [TODO] 삼항연산자를 사용하여 인라인 조건부 렌더링을 구현하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Beomjun';

    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;
        {name === 'Beomjun' ? "My name is Beomjun" : "I'm not Beomjun"}
      &lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>JSX 표현식 안에서 if문은 사용 불가하지만 삼항연산자 <code>{조건 ? 참 : 거짓}</code>은 바로 쓸 수 있다는 핵심 원리</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 26] 조건문: AND/OR 연산자 단축 평가</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.09</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p09_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p09_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>name1 === 'Beomjun'</code>일 때 AND(<code>&&</code>) 연산자로 'My name is Beomjun' 출력</li>
              <li>2. <code>name1 !== 'Beomjun'</code>일 때 AND(<code>&&</code>) 연산자로 'My name is not Beomjun' 출력</li>
              <li>3. <code>name2 === 'JongSoo'</code>일 때 OR(<code>||</code>) 연산자로 "I'm not Beomjun's friend" 대체 출력</li>
              <li>4. <code>name2 !== 'JongSoo'</code>일 때 OR(<code>||</code>) 연산자로 "I'm Beomjun's friend" 대체 출력</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name1 = 'Beomjun';
  const name2 = 'JongSoo';

  // [TODO] &amp;&amp;와 || 연산자를 활용한 조건부 텍스트 렌더링을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, marginVertical: 5 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name1 = 'Beomjun';
  const name2 = 'JongSoo';

    return (
    &lt;View style={styles.container}&gt;
      {/* AND 조건 */}
      &lt;Text style={styles.text}&gt;
        {name1 === 'Beomjun' &amp;&amp; 'My name is Beomjun'}
      &lt;/Text&gt;
      &lt;Text style={styles.text}&gt;
        {name1 !== 'Beomjun' &amp;&amp; 'My name is not Beomjun'}
      &lt;/Text&gt;

      {/* OR 조건 */}
      &lt;Text style={styles.text}&gt;
        {name2 === 'JongSoo' || "I'm not Beomjun's friend"}
      &lt;/Text&gt;
      &lt;Text style={styles.text}&gt;
        {name2 !== 'JongSoo' || "I'm Beomjun's friend"}
      &lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, marginVertical: 5 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>자바스크립트 논리 연산자 단축 평가(Short-circuit evaluation)의 JSX 렌더링 동작 이해</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 27] Image 컴포넌트: 로컬 이미지 불러오기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p10_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p10_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 리액트 네이티브의 <code><Image /></code> 컴포넌트를 사용할 것</li>
              <li>2. 로컬 이미지 파일 <code>./kangnam.png</code>를 <code>source={require('./kangnam.png')}</code>로 불러올 것</li>
              <li>3. 이미지 크기를 가로 200, 세로 200으로 지정할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
  // [TODO] Image 컴포넌트로 로컬 이미지를 표시하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Image
        source={require('./kangnam.png')}
        style={styles.image}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>웹 HTML의 <code>src="..."</code>와 달리 리액트 네이티브에서는 <code>source={require('경로')}</code>를 사용한다는 점 (교수님 단골 문제)</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 28] Switch 컴포넌트: 다크 모드 토글</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.11</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p11_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p11_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>useState(false)</code>로 <code>darkMode</code> 불리언 상태를 선언할 것</li>
              <li>2. <code>Switch</code> 컴포넌트에 <code>value={darkMode}</code>, <code>onValueChange={setDarkMode}</code>를 연결할 것</li>
              <li>3. <code>darkMode</code> 상태에 따라 화면 배경색(<code>black</code> / <code>white</code>)과 텍스트 색상(<code>white</code> / <code>black</code>)을 삼항연산자로 반전시킬 것</li>
              <li>4. 텍스트로 '스위치: ON' 또는 '스위치: OFF'를 표시할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function App() {
  // [TODO] Switch 컴포넌트와 darkMode 상태를 연동한 다크모드 화면을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginBottom: 20, fontSize: 20 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    &lt;View
      style={[
        styles.container,
        { backgroundColor: darkMode ? 'black' : 'white' },
      ]}&gt;
      &lt;Text style={[styles.text, { color: darkMode ? 'white' : 'black' }]}&gt;
        {darkMode ? '스위치: ON' : '스위치: OFF'}
      &lt;/Text&gt;
      &lt;Switch
        value={darkMode}
        onValueChange={setDarkMode}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginBottom: 20, fontSize: 20 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>Switch</code>의 <code>value</code>와 <code>onValueChange</code> 속성</b></li>
                  <li><b>배열 스타일링 <code>style={[styles.container, { backgroundColor: ... }]}</code>을 통한 동적 테마 적용</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 29] FlatList 컴포넌트: 대용량 목록 렌더링</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p12_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p12_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 주어진 <code>data</code> 배열을 <code><FlatList /></code> 컴포넌트로 화면에 출력할 것</li>
              <li>2. <code>keyExtractor</code> 속성으로 <code>item.id</code>를 고유 키로 추출할 것</li>
              <li>3. <code>renderItem</code> 속성에서 <code>({ item }) => <Text style={styles.item}>{item.id} : {item.name}</Text></code> 형태로 각 행을 렌더링할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const data = [
    { id: '1', name: 'Beomjun' },
    { id: '2', name: 'Jongsoo' },
    { id: '3', name: 'Yuna' },
    { id: '4', name: 'Minho' },
    { id: '5', name: 'Hana' },
  ];

  // [TODO] FlatList의 3대 필수 속성(data, keyExtractor, renderItem)을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  item: { fontSize: 24, padding: 10 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const data = [
    { id: '1', name: 'Beomjun' },
    { id: '2', name: 'Jongsoo' },
    { id: '3', name: 'Yuna' },
    { id: '4', name: 'Minho' },
    { id: '5', name: 'Hana' },
  ];

    return (
    &lt;View style={styles.container}&gt;
      &lt;FlatList
        data={data}
        keyExtractor={(item) =&gt; item.id}
        renderItem={({ item }) =&gt; (
          &lt;Text style={styles.item}&gt;
            {item.id} : {item.name}
          &lt;/Text&gt;
        )}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  item: { fontSize: 24, padding: 10 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>FlatList</code>의 3대 필수 속성인 <code>data</code>, <code>keyExtractor</code>, <code>renderItem</code> 완벽 암기 여부 (시험 출제 1순위)</b></li>
                  <li><b><code>renderItem</code>의 인자가 <code>({ item })</code> 구조분해할당 객체라는 점</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 30] SectionList 컴포넌트: 그룹별 목록 렌더링</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.13</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p13_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p13_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 섹션 데이터 <code>DATA</code>를 <code><SectionList /></code>로 출력할 것</li>
              <li>2. <code>sections</code> 속성에 <code>DATA</code>를 전달할 것</li>
              <li>3. <code>renderItem</code>에서 개별 항목 <code>▣ {item}</code>을 출력할 것</li>
              <li>4. <code>renderSectionHeader</code>에서 섹션 헤더 <code>섹션: {title}</code>을 출력할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

export default function App() {
  const DATA = [
    { title: 'A', data: ['Alex', 'Amy', 'Andrew'] },
    { title: 'B', data: ['Beomjun', 'Bella', 'Brian'] },
    { title: 'C', data: ['Chris', 'Cindy', 'Clara'] },
  ];

  // [TODO] SectionList의 sections, renderItem, renderSectionHeader 속성을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50, paddingHorizontal: 20 },
  header: { fontSize: 24, fontWeight: 'bold', backgroundColor: '#eee', paddingVertical: 5 },
  item: { fontSize: 20, paddingVertical: 4, paddingLeft: 10 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

export default function App() {
  const DATA = [
    { title: 'A', data: ['Alex', 'Amy', 'Andrew'] },
    { title: 'B', data: ['Beomjun', 'Bella', 'Brian'] },
    { title: 'C', data: ['Chris', 'Cindy', 'Clara'] },
  ];

    return (
    &lt;View style={styles.container}&gt;
      &lt;SectionList
        sections={DATA}
        keyExtractor={(item, index) =&gt; item + index}
        renderItem={({ item }) =&gt; (
          &lt;Text style={styles.item}&gt; ▣ {item}&lt;/Text&gt;
        )}
        renderSectionHeader={({ section: { title } }) =&gt; (
          &lt;Text style={styles.header}&gt;섹션: {title}&lt;/Text&gt;
        )}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50, paddingHorizontal: 20 },
  header: { fontSize: 24, fontWeight: 'bold', backgroundColor: '#eee', paddingVertical: 5 },
  item: { fontSize: 20, paddingVertical: 4, paddingLeft: 10 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>FlatList의 <code>data</code> 대신 SectionList는 <code>sections</code> 속성을 사용한다는 차이점</b></li>
                  <li><b><code>renderSectionHeader={({ section: { title } }) => ...}</code> 속성 사용</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--success); font-size: 18px;">📌 6주차 빈칸 실전 문제</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 31] BackHandler: 안드로이드 물리 뒤로가기 버튼 제어</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.04</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p04_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p04_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 컴포넌트 마운트 시 <code>BackHandler.addEventListener('hardwareBackPress', backAction)</code> 등록</li>
              <li>2. Alert 팝업('잠깐!', '정말로 뒤로 가기를 원하십니까?')에서 'YES: 예' 클릭 시 <code>BackHandler.exitApp()</code> 호출</li>
              <li>3. 기본 뒤로가기 동작을 방지하기 위해 핸들러가 <code>return true;</code>를 반환할 것</li>
              <li>4. <code>useEffect</code> 클린업 함수에서 <code>backHandler.remove()</code>로 리스너를 해제할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';

export default function App() {
  // [TODO] 조건 1~4를 만족하는 BackHandler 등록 및 해제 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';

export default function App() {
    useEffect(() =&gt; {
    const backAction = () =&gt; {
      Alert.alert('잠깐!', '정말로 뒤로 가기를 원하십니까?', [
        {
          text: 'Cancel: 아니오',
          onPress: () =&gt; null,
          style: 'cancel',
        },
        { text: 'YES: 예', onPress: () =&gt; BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () =&gt; backHandler.remove();
  }, []);

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;뒤로가기 버튼를 눌러주세요 !&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>이벤트명 <code>'hardwareBackPress'</code> 정확성</b></li>
                  <li><b><code>BackHandler.exitApp()</code> 호출</b></li>
                  <li><b><code>return true;</code>를 통한 기본 뒤로가기 이벤트 소비/차단</b></li>
                  <li><b>클린업에서 <code>backHandler.remove()</code> 해제</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 32] DrawerLayoutAndroid: 서랍 메뉴 네비게이션</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.05~06</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p05_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p05_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>drawer = useRef(null)</code> 참조를 선언하고 <code><DrawerLayoutAndroid ref={drawer}></code>에 연결할 것</li>
              <li>2. 서랍 위치(<code>drawerPosition</code>)를 상태로 관리하고 버튼 클릭 시 'left'와 'right'를 상호 전환할 것</li>
              <li>3. 서랍 내부에 보여줄 <code>renderNavigationView</code> 함수를 정의하고 'Close drawer' 버튼 클릭 시 <code>drawer.current?.closeDrawer()</code>를 호출할 것</li>
              <li>4. 화면 중앙의 'Open drawer' 버튼 클릭 시 <code>drawer.current?.openDrawer()</code>로 서랍을 열 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Button } from 'react-native';

export default function App() {
  // [TODO] DrawerLayoutAndroid의 useRef, 상태, navigationView 및 JSX를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  navigationContainer: { backgroundColor: '#ecf0f1' },
  paragraph: { padding: 16, fontSize: 15, textAlign: 'center' },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Button } from 'react-native';

export default function App() {
    const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const changeDrawerPosition = () =&gt; {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () =&gt; (
    &lt;View style={[styles.container, styles.navigationContainer]}&gt;
      &lt;Text style={styles.paragraph}&gt;I'm in the Drawer!&lt;/Text&gt;
      &lt;Button
        title="Close drawer"
        onPress={() =&gt; drawer.current?.closeDrawer()}
      /&gt;
    &lt;/View&gt;
  );

  return (
    &lt;DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}&gt;
      &lt;View style={styles.container}&gt;
        &lt;Text style={styles.paragraph}&gt;Drawer on the {drawerPosition}!&lt;/Text&gt;
        &lt;Button
          title="Change Drawer Position"
          onPress={() =&gt; changeDrawerPosition()}
        /&gt;
        &lt;Text style={styles.paragraph}&gt;
          Swipe from the side or press button below to see it!
        &lt;/Text&gt;
        &lt;Button
          title="Open drawer"
          onPress={() =&gt; drawer.current?.openDrawer()}
        /&gt;
      &lt;/View&gt;
    &lt;/DrawerLayoutAndroid&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  navigationContainer: { backgroundColor: '#ecf0f1' },
  paragraph: { padding: 16, fontSize: 15, textAlign: 'center' },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>useRef</code>를 통한 <code>openDrawer()</code> 및 <code>closeDrawer()</code> 메서드 호출</b></li>
                  <li><b><code>drawerWidth</code>, <code>drawerPosition</code>, <code>renderNavigationView</code> 필수 속성 매핑</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 33] ToastAndroid: 토스트 알림 및 위치 오프셋 제어</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.07</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p07_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p07_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 'Toggle Toast' 버튼 누르면 <code>ToastAndroid.show('기본 토스트 메세지 !', ToastAndroid.SHORT)</code> 호출</li>
              <li>2. 핑크 버튼 누르면 <code>ToastAndroid.showWithGravityAndOffset(...)</code>을 사용하여 지속시간 <code>ToastAndroid.LONG</code>, 위치 <code>ToastAndroid.CENTER</code>, x오프셋 <code>25</code>, y오프셋 <code>50</code>으로 토스트를 띄울 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, ToastAndroid, View, Button } from 'react-native';

export default function App() {
  // [TODO] ToastAndroid의 2가지 메서드(show, showWithGravityAndOffset) 호출 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', paddingTop: 20, paddingHorizontal: 20, backgroundColor: '#fff', padding: 8 },
  buttonWrap: { marginBottom: 2, height: 5 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, ToastAndroid, View, Button } from 'react-native';

export default function App() {
    const showToast = () =&gt; {
    ToastAndroid.show('기본 토스트 메세지 !', ToastAndroid.SHORT);
  };

  const showToastWithGravityAndOffset = () =&gt; {
    ToastAndroid.showWithGravityAndOffset(
      'TOGGLE TOAST WITH GRAVITY &amp; OFFSET 메세지 !',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50,
    );
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Button title="Toggle Toast" onPress={showToast} /&gt;
      &lt;View style={styles.buttonWrap} /&gt;
      &lt;Button
        title="Toggle Toast With Gravity &amp; Offset"
        color="#f194ff"
        onPress={showToastWithGravityAndOffset}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', paddingTop: 20, paddingHorizontal: 20, backgroundColor: '#fff', padding: 8 },
  buttonWrap: { marginBottom: 2, height: 5 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>ToastAndroid.SHORT</code> / <code>ToastAndroid.LONG</code> 상수 활용</b></li>
                  <li><b><code>showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)</code> 인자 순서 암기</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 34] Animated: 페이드 인/아웃 타이밍 애니메이션</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.09~10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p09_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p09_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>fadeAnim = useRef(new Animated.Value(0)).current</code> 애니메이션 값 선언</li>
              <li>2. <code>fadeIn</code>: <code>Animated.timing</code>을 이용해 5초(5000ms) 동안 <code>toValue: 1</code>, <code>useNativeDriver: true</code>로 실행</li>
              <li>3. <code>fadeOut</code>: <code>Animated.timing</code>을 이용해 3초(3000ms) 동안 <code>toValue: 0</code>, <code>useNativeDriver: true</code>로 실행</li>
              <li>4. <code><Animated.View></code>의 <code>style</code> 속성에 <code>{ opacity: fadeAnim }</code>을 바인딩할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
  // [TODO] fadeAnim 선언, fadeIn/fadeOut 함수 및 Animated.View 렌더링 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  fadingContainer: { padding: 20, backgroundColor: 'powderblue' },
  fadingText: { fontSize: 28 },
  buttonRow: { flexBasis: 100, justifyContent: 'space-evenly', marginVertical: 10 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () =&gt; {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () =&gt; {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Animated.View
        style={[
          styles.fadingContainer,
          { opacity: fadeAnim },
        ]}&gt;
        &lt;Text style={styles.fadingText}&gt;Fading View!&lt;/Text&gt;
      &lt;/Animated.View&gt;
      &lt;View style={styles.buttonRow}&gt;
        &lt;Button title="Fade In View" onPress={fadeIn} /&gt;
        &lt;Button title="Fade Out View" onPress={fadeOut} /&gt;
      &lt;/View&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  fadingContainer: { padding: 20, backgroundColor: 'powderblue' },
  fadingText: { fontSize: 28 },
  buttonRow: { flexBasis: 100, justifyContent: 'space-evenly', marginVertical: 10 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>useRef(new Animated.Value(0)).current</code> 패턴</b></li>
                  <li><b><code>Animated.timing(anim, { toValue, duration, useNativeDriver }).start()</code></b></li>
                  <li><b>일반 <code>View</code>가 아닌 <code><Animated.View></code> 사용 및 <code>opacity</code> 바인딩</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 35] Dimensions: 기기 화면 해상도 측정 및 회전 감지</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.11~12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p11_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p11_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>Dimensions.get('window')</code>와 <code>Dimensions.get('screen')</code>으로 초기 해상도 정보 가져오기</li>
              <li>2. <code>useEffect</code>에서 <code>Dimensions.addEventListener('change', ({ window, screen }) => { ... })</code>로 화면 회전 감지 리스너 등록</li>
              <li>3. 클린업에서 <code>subscription?.remove()</code> 호출</li>
              <li>4. <code>Object.entries</code>와 <code>.map()</code>을 사용하여 window와 screen의 각 키와 값(<code>.toFixed(2)</code>)을 화면에 출력할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  // [TODO] Dimensions 상태, 이벤트 리스너 등록 및 해상도 출력 JSX를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 20, marginVertical: 10 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
    const windowDimensions = Dimensions.get('window');
  const screenDimensions = Dimensions.get('screen');

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() =&gt; {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) =&gt; {
        setDimensions({ window, screen });
      },
    );
    return () =&gt; subscription?.remove();
  }, []);

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.header}&gt;Window Dimensions&lt;/Text&gt;
      {Object.entries(dimensions.window).map(([key, value]) =&gt; (
        &lt;Text key={key}&gt;
          {key} - {value.toFixed(2)}
        &lt;/Text&gt;
      ))}
      &lt;Text style={styles.header}&gt;Screen Dimensions&lt;/Text&gt;
      {Object.entries(dimensions.screen).map(([key, value]) =&gt; (
        &lt;Text key={key}&gt;
          {key} - {value.toFixed(2)}
        &lt;/Text&gt;
      ))}
      &lt;StatusBar style='auto' /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 20, marginVertical: 10 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>Dimensions.get('window')</code> vs <code>Dimensions.get('screen')</code> 차이점 (window는 상태표시줄 등 제외 실제 앱 가용영역)</b></li>
                  <li><b><code>Dimensions.addEventListener('change', ...)</code> 및 <code>subscription?.remove()</code></b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 36] KeyboardAvoidingView: 키보드 회피 및 바깥 터치 닫기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.13~14</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p13_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p13_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 입력창 바깥 배경 터치 시 키보드가 내려가도록 <code><TouchableWithoutFeedback onPress={Keyboard.dismiss}></code>로 감쌀 것</li>
              <li>2. TextInput에 Username을 입력받고 Submit 버튼 클릭 시 Alert 팝업을 띄우며 확인 시 입력창 비우기</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from 'react-native';

export default function App() {
  // [TODO] TouchableWithoutFeedback 및 Keyboard.dismiss를 활용한 화면을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { padding: 24, flex: 1, justifyContent: 'space-around' },
  header: { fontSize: 36, marginBottom: 48 },
  textInput: { height: 40, borderColor: '#000000', borderBottomWidth: 1, marginBottom: 36 },
  btnContainer: { backgroundColor: 'white', marginTop: 12 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from 'react-native';

export default function App() {
    const [value, setValue] = useState("");

  const handlePress = () =&gt; {
    Alert.alert(
      "Input Data",
      value || "(Empty)",
      [
        {
          text: "확인",
          onPress: () =&gt; setValue(""),
        },
      ]
    );
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;TouchableWithoutFeedback onPress={Keyboard.dismiss}&gt;
        &lt;View style={styles.inner}&gt;
          &lt;Text style={styles.header}&gt;Header&lt;/Text&gt;
          &lt;TextInput
            placeholder="Username"
            style={styles.textInput}
            onChangeText={(text) =&gt; setValue(text)}
            value={value}
          /&gt;
          &lt;View style={styles.btnContainer}&gt;
            &lt;Button title="Submit" onPress={handlePress} /&gt;
          &lt;/View&gt;
        &lt;/View&gt;
      &lt;/TouchableWithoutFeedback&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { padding: 24, flex: 1, justifyContent: 'space-around' },
  header: { fontSize: 36, marginBottom: 48 },
  textInput: { height: 40, borderColor: '#000000', borderBottomWidth: 1, marginBottom: 36 },
  btnContainer: { backgroundColor: 'white', marginTop: 12 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>Keyboard.dismiss</code> 메서드를 <code>TouchableWithoutFeedback</code>의 <code>onPress</code>에 전달하는 필수 패턴</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 37] Linking: 외부 웹 브라우저 URL 열기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.15</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p15_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p15_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. '정종수 블로그' 텍스트와 '확 인' 버튼을 배치할 것</li>
              <li>2. '확 인' 버튼 클릭 시 <code>Linking.openURL('https://blog.naver.com/jongsoo67')</code>을 호출하여 외부 웹 브라우저를 열 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  // [TODO] Linking.openURL을 호출하는 버튼 핸들러 및 화면을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  text: { fontSize: 30, marginVertical: 30, textAlign: 'center' },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
    const handlePress = () =&gt; {
    Linking.openURL('https://blog.naver.com/jongsoo67');
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;정종수 블로그&lt;/Text&gt;
      &lt;Button title="확 인" onPress={handlePress} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  text: { fontSize: 30, marginVertical: 30, textAlign: 'center' },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>Linking.openURL('URL')</code> API의 사용법</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 38] Modal: 팝업 대화상자 레이어</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.16~17</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p16_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p16_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>modalVisible</code> 불리언 상태 선언 (<code>useState(false)</code>)</li>
              <li>2. <code><Modal></code> 속성: <code>animationType="slide"</code>, <code>transparent={true}</code>, <code>visible={modalVisible}</code></li>
              <li>3. 모달 내부 'Hide Modal' 버튼 클릭 시 <code>setModalVisible(false)</code>로 모달 닫기</li>
              <li>4. 화면의 'Show Modal' 버튼 클릭 시 <code>setModalVisible(true)</code>로 모달 열기</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function App() {
  // [TODO] Modal 컴포넌트와 modalVisible 상태 연동 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  centeredView: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  modalView: { width: '90%', margin: 20, backgroundColor: 'white', borderRadius: 10, padding: 35, alignItems: 'center', elevation: 5 },
  button: { borderRadius: 20, padding: 10, elevation: 2 },
  buttonOpen: { backgroundColor: '#F194FF' },
  buttonClose: { backgroundColor: '#2196F3' },
  textStyle: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  modalText: { marginBottom: 15, textAlign: 'center' },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    &lt;View style={styles.container}&gt;
      &lt;Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() =&gt; {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}&gt;
        &lt;View style={styles.centeredView}&gt;
          &lt;View style={styles.modalView}&gt;
            &lt;Text style={styles.modalText}&gt;Hello World!&lt;/Text&gt;
            &lt;Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =&gt; setModalVisible(false)}&gt;
              &lt;Text style={styles.textStyle}&gt;Hide Modal&lt;/Text&gt;
            &lt;/Pressable&gt;
          &lt;/View&gt;
        &lt;/View&gt;
      &lt;/Modal&gt;

      &lt;Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =&gt; setModalVisible(true)}&gt;
        &lt;Text style={styles.textStyle}&gt;Show Modal&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  centeredView: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  modalView: { width: '90%', margin: 20, backgroundColor: 'white', borderRadius: 10, padding: 35, alignItems: 'center', elevation: 5 },
  button: { borderRadius: 20, padding: 10, elevation: 2 },
  buttonOpen: { backgroundColor: '#F194FF' },
  buttonClose: { backgroundColor: '#2196F3' },
  textStyle: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  modalText: { marginBottom: 15, textAlign: 'center' },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>Modal</code>의 필수 속성 <code>visible={modalVisible}</code></b></li>
                  <li><b><code>animationType="slide"</code>, <code>transparent={true}</code> 속성</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 39] PixelRatio: 기기 픽셀 비율 및 이미지 크기 변환</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.18~19</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p18_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p18_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 기기 픽셀 비율 출력: <code>PixelRatio.get()</code></li>
              <li>2. 폰트 스케일 출력: <code>PixelRatio.getFontScale()</code></li>
              <li>3. 레이아웃 크기 <code>size(50)</code>에 대응하는 실제 물리 픽셀 크기 변환: <code>PixelRatio.getPixelSizeForLayoutSize(size)</code></li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native';

const size = 50;
const cat = { uri: 'https://reactnative.dev/docs/assets/p_cat1.png', width: size, height: size };

export default function App() {
  // [TODO] PixelRatio의 3대 메서드를 호출하여 정보를 출력하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 50 },
  value: { fontSize: 24, marginBottom: 12, marginTop: 4 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native';

const size = 50;
const cat = { uri: 'https://reactnative.dev/docs/assets/p_cat1.png', width: size, height: size };

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;ScrollView&gt;
        &lt;View style={styles.container}&gt;
          &lt;Text&gt;Current Pixel Ratio is:&lt;/Text&gt;
          &lt;Text style={styles.value}&gt;{PixelRatio.get()}&lt;/Text&gt;
        &lt;/View&gt;
        &lt;View style={styles.container}&gt;
          &lt;Text&gt;Current Font Scale is:&lt;/Text&gt;
          &lt;Text style={styles.value}&gt;{PixelRatio.getFontScale()}&lt;/Text&gt;
        &lt;/View&gt;
        &lt;View style={styles.container}&gt;
          &lt;Text&gt;On this device images with a layout width of&lt;/Text&gt;
          &lt;Text style={styles.value}&gt;{size} px&lt;/Text&gt;
          &lt;Image source={cat} /&gt;
        &lt;/View&gt;
        &lt;View style={styles.container}&gt;
          &lt;Text&gt;require images with a pixel width of&lt;/Text&gt;
          &lt;Text style={styles.value}&gt;
            {PixelRatio.getPixelSizeForLayoutSize(size)} px
          &lt;/Text&gt;
          &lt;Image
            source={cat}
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(size),
              height: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
          /&gt;
        &lt;/View&gt;
      &lt;/ScrollView&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 50 },
  value: { fontSize: 24, marginBottom: 12, marginTop: 4 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>PixelRatio.get()</code></b></li>
                  <li><b><code>PixelRatio.getFontScale()</code></b></li>
                  <li><b><code>PixelRatio.getPixelSizeForLayoutSize(size)</code> 메서드명 암기</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 40] RefreshControl: 당겨서 새로고침</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.20~21</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p20_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p20_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>refreshing</code> 상태와 <code>timerRef = useRef(null)</code>를 선언할 것</li>
              <li>2. <code>onRefresh = useCallback(...)</code>에서 중복 새로고침 방지 후 <code>setTimeout</code>으로 2초 뒤 <code>setRefreshing(false)</code>로 변경할 것</li>
              <li>3. ScrollView의 <code>refreshControl</code> 속성에 <code><RefreshControl refreshing={refreshing} onRefresh={onRefresh} /></code>를 연결할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // [TODO] RefreshControl 상태, onRefresh 콜백 및 ScrollView 연결을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flex: 1, backgroundColor: 'pink' },
  scrollContent: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [refreshing, setRefreshing] = useState(false);
  const timerRef = useRef(null);

  const onRefresh = useCallback(() =&gt; {
    if (timerRef.current !== null) return;
    setRefreshing(true);
    timerRef.current = setTimeout(() =&gt; {
      setRefreshing(false);
      timerRef.current = null;
    }, 2000);
  }, []);

  useEffect(() =&gt; {
    return () =&gt; {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    &lt;View style={styles.container}&gt;
      &lt;ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        alwaysBounceVertical={true}
        refreshControl={
          &lt;RefreshControl refreshing={refreshing} onRefresh={onRefresh} /&gt;
        }&gt;
        &lt;Text&gt;아래로 당기면 새로고침됩니다.&lt;/Text&gt;
      &lt;/ScrollView&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flex: 1, backgroundColor: 'pink' },
  scrollContent: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>ScrollView</code>의 <code>refreshControl={<RefreshControl ... />}</code> 속성</b></li>
                  <li><b><code>useCallback</code>과 타이머를 이용한 비동기 새로고침 완료 처리</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--success); font-size: 18px;">📌 7주차 빈칸 실전 문제</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 41] useState 예제 1: 카운터 (+1 / -1)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.05</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p05_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p05_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>const [count, setCount] = useState(0)</code> 상태 선언</li>
              <li>2. '+1 증가' Pressable 버튼 클릭 시 <code>setCount(count + 1)</code></li>
              <li>3. '-1 감소' Pressable 버튼 클릭 시 <code>setCount(count - 1)</code></li>
              <li>4. 중앙에 '현재 카운트: {count}' 출력</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  // [TODO] count 상태 및 +1, -1 Pressable 버튼 로직을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  text: { fontSize: 30, marginBottom: 20 },
  button: { backgroundColor: '#4ab1ec', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 6, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

  return (
    &lt;View style={styles.container}&gt;
      &lt;View style={{ alignItems: 'center' }}&gt;
        &lt;Text style={styles.text}&gt;현재 카운트: {count}&lt;/Text&gt;
      &lt;/View&gt;
      &lt;Pressable style={styles.button} onPress={() =&gt; setCount(count + 1)}&gt;
        &lt;Text style={styles.buttonText}&gt;+1 증가&lt;/Text&gt;
      &lt;/Pressable&gt;
      &lt;Pressable style={styles.button} onPress={() =&gt; setCount(count - 1)}&gt;
        &lt;Text style={styles.buttonText}&gt;-1 감소&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  text: { fontSize: 30, marginBottom: 20 },
  button: { backgroundColor: '#4ab1ec', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 6, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>useState</code> 기본 사용법</b></li>
                  <li><b><code>Pressable</code>의 <code>onPress</code>에서 상태 변경 함수 호출</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 42] useState 예제 2: A × B 곱셈 계산기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.06~07</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p06_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p06_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 상태: <code>a</code>(''), <code>b</code>(''), <code>result</code>(null)</li>
              <li>2. <code>multiply</code> 함수: <code>parseFloat(a)</code>, <code>parseFloat(b)</code>를 수행하고 하나라도 <code>isNaN</code>이면 '숫자를 입력하세요!', 정상 숫자면 곱셈 결과(<code>numA * numB</code>)를 <code>setResult</code>에 저장</li>
              <li>3. 'A × B 계산' Button 누르면 <code>multiply</code> 호출</li>
              <li>4. <code>result !== null</code>일 때만 결과 텍스트 '결과: {result}' 출력</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  // [TODO] 3개의 useState, multiply 계산 함수 및 JSX를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
    const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const multiply = () =&gt; {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult('숫자를 입력하세요!');
    } else {
      setResult(numA * numB);
    }
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={{ fontSize: 20, marginBottom: 10 }}&gt;A × B 계산기&lt;/Text&gt;
      &lt;TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="A 입력"
        value={a}
        onChangeText={setA}
      /&gt;
      &lt;TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="B 입력"
        value={b}
        onChangeText={setB}
      /&gt;
      &lt;Button title="A × B 계산" onPress={multiply} /&gt;
      {result !== null &amp;&amp; (
        &lt;Text style={{ fontSize: 22, marginTop: 20 }}&gt;결과: {result}&lt;/Text&gt;
      )}
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>TextInput</code>의 문자열 입력을 <code>parseFloat</code>로 수치 변환</b></li>
                  <li><b><code>isNaN</code> 예외 처리 및 조건부 렌더링 <code>{result !== null && ...}</code></b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 43] useRef vs 일반 변수 vs useState 리렌더링 비교 (시험 출제 1순위!)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.09</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p09_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p09_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>render</code> 상태(<code>useState(false)</code>), <code>countRef</code> 참조(<code>useRef(0)</code>), 일반 변수 <code>let countVar = 5</code> 선언</li>
              <li>2. '클릭' 버튼: <code>countRef.current += 1</code>, <code>countVar += 1</code> 실행 (화면 리렌더링 안 일어남)</li>
              <li>3. '리랜더' 버튼: <code>setRender(!render)</code> 실행 (컴포넌트 리렌더링 유발 -> countRef의 누적값은 유지되어 화면에 반영되고, countVar는 다시 5로 리셋됨)</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Example() {
  // [TODO] useRef, countVar, useState 및 2개 버튼의 렌더링 차이 로직을 작성하시오.


  // [이 영역에 코드를 작성하시오]


}
</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Example() {
    const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 5;

  const handleClick = () =&gt; {
    countRef.current += 1;
    countVar += 1;
    console.log('현재 count:', countRef.current, ": ", countVar);
  };

  const doRender = () =&gt; {
    setRender(!render);
  };

  return (
    &lt;View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 30,
      }}&gt;
      &lt;Text style={{ fontSize: 30, marginTop: 10, marginBottom: 30 }}&gt;
        결과값 CountRef: {countRef.current}, {"\n"}
        결과값 CountVar: {countVar}
      &lt;/Text&gt;
      &lt;View style={{ marginBottom: 12 }}&gt;
        &lt;Button title="클릭" onPress={handleClick} /&gt;
      &lt;/View&gt;
      &lt;View&gt;
        &lt;Button title="리랜더" onPress={doRender} /&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}
</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>**교수님 주관식/단답형 단골 질문**: <code>useRef</code>의 값은 바뀌어도 리렌더링되지 않으며, 컴포넌트가 다시 렌더링되어도 값이 유지된다. 반면 일반 변수 <code>countVar</code>는 리렌더링 시 함수가 재실행되므로 초기화된다.</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 44] useRef: TextInput 포커스 자동 이동</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p10_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p10_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>inputRef = useRef(null)</code>을 선언하고 <code><TextInput ref={inputRef}></code>에 연결할 것</li>
              <li>2. '포커스 이동' 버튼 클릭 시 <code>inputRef.current?.focus()</code>를 호출하여 TextInput으로 커서를 이동시킬 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {
  // [TODO] useRef로 DOM 참조를 잡고 focus()를 호출하는 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {
    const inputRef = useRef(null);

  const focusInput = () =&gt; {
    inputRef.current?.focus();
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;TextInput
        style={styles.text}
        ref={inputRef}
        placeholder="이름을 입력하세요"
      /&gt;
      &lt;Button title="포커스 이동" onPress={focusInput} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>컴포넌트의 <code>ref</code> 속성에 <code>useRef</code> 변수 전달</b></li>
                  <li><b><code>inputRef.current?.focus()</code> 메서드 호출</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 45] useRef: 계산기 + 계산 후 자동 포커스 복귀</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.11~12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p11_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p11_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. A 입력창에 <code>ref={inputRef}</code>를 지정할 것</li>
              <li>2. 버튼 클릭 시 <code>handlePress</code> 함수에서 <code>multiply()</code>를 실행한 직후 <code>focusInput()</code>을 호출하여 다시 A 입력창으로 포커스를 복귀시킬 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
  // [TODO] 계산 실행 후 자동으로 A 입력창으로 포커스 이동시키는 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
    const inputRef = useRef(null);

  const focusInput = () =&gt; {
    inputRef.current?.focus();
  };

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const multiply = () =&gt; {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult('숫자를 입력하세요!');
    } else {
      setResult(numA * numB);
    }
  };

  const handlePress = () =&gt; {
    multiply();
    focusInput(); // A 입력창으로 자동 포커스 복귀
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={{ fontSize: 20, marginBottom: 10 }}&gt;A × B 계산기&lt;/Text&gt;
      &lt;TextInput
        ref={inputRef}
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
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>useState</code> 계산 로직과 <code>useRef</code>의 DOM 포커스 제어 결합</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 46] useEffect: 컴포넌트 마운트 시 최초 1회 실행</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.14</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p14_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p14_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 컴포넌트가 처음 화면에 렌더링될 때(마운트 시) 딱 한 번만 실행되도록 <code>useEffect</code>를 작성할 것</li>
              <li>2. 의존성 배열로 빈 배열(<code>[]</code>)을 전달할 것</li>
              <li>3. 콘솔에 '앱이 실행되었습니다! (처음 한 번만)'을 출력할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  // [TODO] 최초 1회만 실행되는 useEffect 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
    useEffect(() =&gt; {
    console.log("앱이 실행되었습니다! (처음 한 번만)");
  }, []); // 빈 배열 [] 지정이 핵심

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;useEffect 예제&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>의존성 배열 <code>[]</code>을 비워두어야 마운트 시 1회만 실행된다는 규칙 (배열 생략 시 매 렌더링마다 실행됨)</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 47] useEffect: 특정 상태 변경 감지</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.15</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p15_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p15_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>count</code> 상태를 선언하고, 버튼 누르면 <code>setCount(count + 1)</code> 할 것</li>
              <li>2. <code>useEffect</code>의 의존성 배열에 <code>[count]</code>를 지정하여 <code>count</code> 값이 변경될 때마다 콘솔에 'count 값이 바뀌었습니다: {count}'를 출력할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  // [TODO] count 상태 변경을 감지하는 useEffect 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    console.log("count 값이 바뀌었습니다:", count);
  }, [count]); // 의존성 배열에 count 지정

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;현재 값: {count}&lt;/Text&gt;
      &lt;Button title="+1 증가" onPress={() =&gt; setCount(count + 1)} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>의존성 배열 <code>[count]</code>를 통해 특정 상태 변경 시에만 이펙트 함수가 재실행되도록 제어</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 48] useMemo: 연산 캐싱 최적화 (시험 단골!)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.17~18</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p17_crop1.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p17_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. <code>const [count, setCount] = useState(0)</code> 및 <code>const [text, setText] = useState("")</code> 선언</li>
              <li>2. <code>useMemo</code>를 사용하여 <code>count</code>가 변경될 때만 <code>double = count * 2</code> 계산을 실행하고 콘솔에 'double 계산 실행!' 출력</li>
              <li>3. '텍스트 변경' 버튼 클릭으로 <code>text</code>가 바뀌어도 <code>double</code> 연산은 재실행되지 않도록 의존성 배열을 <code>[count]</code>로 지정할 것</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  // [TODO] useMemo를 활용한 연산 최적화 코드를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const double = useMemo(() =&gt; {
    console.log("double 계산 실행!");
    return count * 2;
  }, [count]); // count가 변경될 때만 재계산

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;Count: {count}&lt;/Text&gt;
      &lt;Text style={styles.text}&gt;Double: {double}&lt;/Text&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      &lt;Button title="카운트 +1" onPress={() =&gt; setCount(count + 1)} /&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      &lt;Button title="텍스트 변경" onPress={() =&gt; setText(text + '강남대 ')} /&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      &lt;Text style={styles.text}&gt;Character: {text}&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b><code>const val = useMemo(() => 연산식, [의존성])</code> 문법</b></li>
                  <li><b>**교수님 주관식 채점 포인트**: '텍스트 변경' 버튼을 누르면 컴포넌트는 리렌더링되지만 <code>count</code>는 변하지 않았으므로 <code>useMemo</code> 콜백은 실행되지 않고 이전 계산값을 재사용한다.</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div class="qa-card" style="margin-bottom: 28px; padding: 22px; border: 1px solid var(--border); border-radius: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[문제 49] 7주차 실습 과제: 아이폰 계산기 UI 스타일링 스펙</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.19</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">🖼️ 목표 화면</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p19_slide.png" alt="목표 화면" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 8px; border-radius: 6px;">
              <div style="font-size: 11.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">📄 슬라이드 출제 원문</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p19_slide.png" alt="원문" style="max-height: 220px; max-width: 100%; border-radius: 4px;" loading="lazy">
            </div>
          </div>

          <div style="background: var(--surface-2); padding: 12px 16px; border-radius: 6px; margin-bottom: 14px;">
            <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">🎯 구현 조건 (채점 기준):</div>
            <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink); line-height: 1.6;">
              <li>1. 배경색: <code>backgroundColor: 'black'</code></li>
              <li>2. 디스플레이 텍스트: <code>color: 'white'</code>, <code>fontSize: 84</code>, <code>textAlign: 'right'</code></li>
              <li>3. 버튼 스펙: <code>height: 64</code>, <code>borderRadius: 32</code></li>
              <li>   - 숫자 버튼: <code>backgroundColor: '#2f2f2f'</code></li>
              <li>   - 연산자 버튼: <code>backgroundColor: '#F5A623'</code></li>
              <li>   - 기능(유틸리티) 버튼: <code>backgroundColor: '#555'</code></li>
              <li>   - 버튼 텍스트: <code>color: 'white'</code>, <code>fontSize: 30</code>, <code>fontWeight: '500'</code></li>
            </ol>
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 문제 코드 (핵심부 통 빈칸):</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  // [TODO] 조건 1~3의 계산기 스타일링 스펙을 만족하는 UI를 작성하시오.


  // [이 영역에 코드를 작성하시오]


}

// [TODO] styles 객체에 상세 스펙을 정의하시오.
const styles = StyleSheet.create({

});</code></pre>
          </div>

          <!-- 접기 토글 -->
          <details style="background: rgba(34, 197, 94, 0.06); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px 16px;">
            <summary style="cursor: pointer; font-weight: 800; color: var(--success); font-size: 14px;">💡 [정답 및 교수님 채점 포인트 확인하기 (클릭)]</summary>
            
            <div style="margin-top: 14px;">
              <div style="font-size: 13px; font-weight: 800; color: var(--ink); margin-bottom: 6px;">✅ 완성 정답 코드:</div>
              <pre style="background: #1e1e1e; color: #d4d4d4; padding: 12px; border-radius: 6px; font-size: 12.5px; line-height: 1.45; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [displayValue, setDisplayValue] = useState('0');

  const handleButtonPress = (val) =&gt; {
    if (val === 'C') {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue === '0' ? String(val) : displayValue + String(val));
    }
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.displayContainer}&gt;
        &lt;Text style={styles.displayText}&gt;{displayValue}&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.buttonRow}&gt;
        &lt;TouchableOpacity style={[styles.button, styles.utilityButton]} onPress={() =&gt; handleButtonPress('C')}&gt;
          &lt;Text style={styles.buttonText}&gt;C&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
        &lt;TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() =&gt; handleButtonPress('/')}&gt;
          &lt;Text style={styles.buttonText}&gt;÷&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
      &lt;/View&gt;
      &lt;View style={styles.buttonRow}&gt;
        &lt;TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() =&gt; handleButtonPress(7)}&gt;
          &lt;Text style={styles.buttonText}&gt;7&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
        &lt;TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() =&gt; handleButtonPress(8)}&gt;
          &lt;Text style={styles.buttonText}&gt;8&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
        &lt;TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() =&gt; handleButtonPress(9)}&gt;
          &lt;Text style={styles.buttonText}&gt;9&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
        &lt;TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() =&gt; handleButtonPress('*')}&gt;
          &lt;Text style={styles.buttonText}&gt;×&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'flex-end', paddingBottom: 40, paddingHorizontal: 15 },
  displayContainer: { paddingHorizontal: 20, marginBottom: 20 },
  displayText: { color: 'white', fontSize: 84, textAlign: 'right' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  button: { height: 64, flex: 1, marginHorizontal: 6, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
  numberButton: { backgroundColor: '#2f2f2f' },
  operatorButton: { backgroundColor: '#F5A623' },
  utilityButton: { backgroundColor: '#555' },
  buttonText: { color: 'white', fontSize: 30, fontWeight: '500' },
});
}

</code></pre>

              <div style="margin-top: 12px;">
                <div style="font-size: 13px; font-weight: 800; color: #b91c1c; margin-bottom: 4px;">⚠️ 감점 방지 채점 기준:</div>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: var(--ink);">
                  <li><b>주어진 슬라이드 명세(색상코드, 폰트사이즈 등) 정확한 반영</b></li>
                  <li><b>Flexbox <code>justifyContent: 'flex-end'</code>를 이용한 하단 키패드 배치</b></li>
                </ul>
              </div>
            </div>
          </details>
        </div>

      </div>
    </section>


    <!-- SECTION: 전체 예제 코드 & 결과 화면 1:1 매핑 (전수 복원) -->
    <section id="cp-examples" class="concept-section">
      <div class="section-banner accent-banner">
        <div class="section-banner-title">
          <span>💻 3주차~7주차 전체 예제 코드 & 실행 결과 화면 전수 매핑 (총 49개 핵심 예제)</span>
        </div>
        <span style="font-size: 13.5px; opacity: 0.95;">PDF 슬라이드 원본과 실제 스마트폰 에뮬레이터 캡처를 1:1로 매칭한 공식 소스 코드 모음</span>
      </div>

      <div class="concept-card">
        <div style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid var(--accent); padding: 12px 16px; border-radius: 4px; margin-bottom: 24px;">
          <b style="color: var(--accent);">💡 완벽 복원 안내</b>: 2개 슬라이드에 걸쳐 분할되어 있던 긴 코드(Dimensions, Modal, PixelRatio, RefreshControl 등)와 <code>styles.js</code> 외부 모듈을 모두 하나의 온전한 컴포넌트 코드로 복원하였습니다.
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--accent); font-size: 18px;">📌 3주차 전체 예제 코드</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[01] 정렬 기본 템플릿 (Expo 기본 구조)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.04</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p04_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.04)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p04_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>View</code>의 스타일로 <code>styles.container</code> 연결 여부</li>
              <li><code>Text</code> 태그로 안내 문구 정상 감싸기</li>
              <li><code>StatusBar</code> 컴포넌트 포함 여부</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;Open up App.js to start working on your app!&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
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
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[02] 스타일링: 영어 다중 Text 출력</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.08</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p08_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.08)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p08_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>두 개의 <code>Text</code> 컴포넌트가 하나의 부모 <code>View</code> 안에 순서대로 나열되었는지 확인</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;Open up App.js to start working on your app!&lt;/Text&gt;
      &lt;Text&gt;First My Project !&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
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
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[03] 스타일링: 한글 줄바꿈 문법 ({"\n"})</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.09</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p09_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.09)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p09_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>단순 엔터가 아닌 {"\n"}을 사용하여 JSX 내 명시적 줄바꿈을 구현했는지 여부 (교수님 빈출 포인트)</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;
        처음 시작하는 리액트 네이티브 프로그래밍 !{"\n"}
        학과: 소프트웨어공학 {"\n"}
        학번: 123456{"\n"}
        이름: 홍길동
      &lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
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
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[04] 스타일링: 주석 처리 (JSX 주석 vs JS 주석)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p10_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.10)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p10_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>JSX 태그 사이에서 <code>//</code>나 <code>/* */</code>를 그냥 쓰면 화면에 문자로 렌더링되므로, 반드시 중괄호 <code>{/* 주석 내용 */}</code>으로 감싸야 함</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// 과목명: 리액트 네이티브 프로그래밍
/* 이름: 홍길동 */
export default function App() {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !&lt;/Text&gt;
      {/* &lt;Text&gt;처음 시작하는 리액트 네이티브 프로그래밍 !&lt;/Text&gt; */}
      &lt;StatusBar style="auto" /&gt;
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
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[05] 인라인 스타일링 (Inline Styling)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.11</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p11_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.11)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p11_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>style={{ }}</code> 이중 중괄호 문법 (바깥은 JSX 표현식, 안쪽은 자바스크립트 객체)</li>
              <li><code>fontWeight</code> 값은 숫자가 아닌 반드시 따옴표로 감싼 문자열 (<code>'600'</code>, <code>'400'</code>)이어야 함</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
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
          fontWeight: "600", // 숫자가 아닌 문자열로 지정
          color: "black",
        }}&gt;
        Inline Styling - Text
      &lt;/Text&gt;
      &lt;Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: "400", // 숫자가 아닌 문자열로 지정
          color: "red",
        }}&gt;
        Inline Styling - Error
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}
</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[06] 클래스 스타일링 (StyleSheet.create)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p12_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.12)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p12_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>StyleSheet.create</code> 기본 문법 구조</li>
              <li><code>style={styles.text}</code>와 <code>style={styles.error}</code>로 클래스 스타일 매핑</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;Inline Styling - Text&lt;/Text&gt;
      &lt;Text style={styles.error}&gt;Inline Styling - Error&lt;/Text&gt;
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
    padding: 10,
    fontSize: 26,
    fontWeight: '400',
    color: 'red',
  },
});
}

</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[07] 여러 개의 스타일 적용 (배열 스타일링)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.13</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p13_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.13)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p13_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>배열 구문 <code>style={[styles.text, styles.error]}</code> 작성 여부</li>
              <li>배열의 뒤쪽에 위치한 스타일(<code>styles.error</code>)이 앞선 스타일의 동일 속성을 덮어씌운다는 원리 이해</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;Inline Styling - Text&lt;/Text&gt;
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
    fontWeight: '400',
    color: 'red',
  },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[08] 외부 스타일 이용하기 (App.js & styles.js 모듈 분리)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.14~15</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p14_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.14~15)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p14_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>외부 모듈 분리 시 <code>export const</code>와 <code>import { ... } from './src/styles'</code> 문법 매칭</li>
              <li><code>style={viewStyles.container}</code>, <code>style={textStyles.text}</code> 정확한 객체 참조</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>// [파일 1: src/styles.js]
import { StyleSheet } from "react-native";
// [파일 1: src/styles.js]
import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const textStyles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  error: {
    fontWeight: '400',
    color: 'red',
  },
});

// [파일 2: App.js]
import React from "react";
import { View, Text } from "react-native";
import { viewStyles, textStyles } from "./src/styles";

export default function App() {
  return (
    &lt;View style={viewStyles.container}&gt;
      &lt;Text style={textStyles.text}&gt;Inline Styling - Text&lt;/Text&gt;
      &lt;Text style={textStyles.error}&gt;Inline Styling - Error&lt;/Text&gt;
    &lt;/View&gt;
  );
}
}</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[09] Flex와 범위: 수직 1:3:1 분할</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.16</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p16_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.16)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p16_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>최상위 <code>container</code>의 <code>flex: 1</code> 설정 여부</li>
              <li>자식 요소들의 <code>flex: 1</code>, <code>flex: 3</code>, <code>flex: 1</code> 합산 비율 레이아웃 구조</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.header}&gt;
        &lt;Text style={styles.text}&gt;Header&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.contents}&gt;
        &lt;Text style={styles.text}&gt;Contents&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.footer}&gt;
        &lt;Text style={styles.text}&gt;Footer&lt;/Text&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    flex: 3,
    backgroundColor: '#1abc9c',
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
  },
});
}

</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[10] Flex와 범위: 가로 분할 (flexDirection: 'row')</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">3주 P.17</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p17_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (3주 P.17)</div>
              <img src="assets/crossplatform/extracted_images/week3/week3_p17_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>부모 컨테이너에 <code>flexDirection: 'row'</code> 적용 여부</li>
              <li>가로로 배치된 자식들에 <code>flex: 1</code>을 부여하여 가로 공간 균등 분할 구현 여부</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.header}&gt;
        &lt;Text style={styles.text}&gt;Header&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.contents}&gt;
        &lt;View style={styles.contentsLeft}&gt;
          &lt;Text style={styles.text}&gt;Contents Left&lt;/Text&gt;
        &lt;/View&gt;
        &lt;View style={styles.contentsRight}&gt;
          &lt;Text style={styles.text}&gt;Contents Right&lt;/Text&gt;
        &lt;/View&gt;
      &lt;/View&gt;
      &lt;View style={styles.footer}&gt;
        &lt;Text style={styles.text}&gt;Footer&lt;/Text&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    flex: 2,
    flexDirection: "row", // 가로 분할의 핵심
  },
  contentsLeft: {
    flex: 1,
    backgroundColor: "#16a085",
    alignItems: "center",
    justifyContent: "center",
  },
  contentsRight: {
    flex: 1,
    backgroundColor: "#27ae60",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 26 },
});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#f1c40f',
    alignItems: "center",
    justifyContent: "center",
  },
  </code></pre>
          </div>
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--accent); font-size: 18px;">📌 4주차 전체 예제 코드</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[11] View: Flex 복합 그리드 4분할 레이아웃</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.04</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p04_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.04)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p04_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>contents</code>의 row 방향 분할 아래에 컬럼 방향의 Left/Right를 두고, 그 안에서 다시 Top/Bottom 분할을 계층적으로 완성했는지 여부</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.header} /&gt;
      &lt;View style={styles.contents}&gt;
        &lt;View style={styles.contentsLeft}&gt;
          &lt;View style={styles.contentsLeftTop}&gt;
            &lt;Text style={styles.text}&gt;Contents Left Top&lt;/Text&gt;
          &lt;/View&gt;
          &lt;View style={styles.contentsLeftBottom}&gt;
            &lt;Text style={styles.text}&gt;Contents Left Bottom&lt;/Text&gt;
          &lt;/View&gt;
        &lt;/View&gt;
        &lt;View style={styles.contentsRight}&gt;
          &lt;View style={styles.contentsRightTop}&gt;
            &lt;Text style={styles.text}&gt;Contents Right Top&lt;/Text&gt;
          &lt;/View&gt;
          &lt;View style={styles.contentsRightBottom}&gt;
            &lt;Text style={styles.text}&gt;ContentsRightBottom&lt;/Text&gt;
          &lt;/View&gt;
        &lt;/View&gt;
      &lt;/View&gt;
      &lt;View style={styles.footer} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, backgroundColor: '#f1c40f' },
  contents: { flex: 3, flexDirection: 'row' },
  contentsLeft: { flex: 1 },
  contentsLeftTop: { flex: 1, backgroundColor: '#16a085', alignItems: 'center', justifyContent: 'center' },
  contentsLeftBottom: { flex: 1, backgroundColor: '#1abc9c', alignItems: 'center', justifyContent: 'center' },
  contentsRight: { flex: 1 },
  contentsRightTop: { flex: 1, backgroundColor: '#27ae60', alignItems: 'center', justifyContent: 'center' },
  contentsRightBottom: { flex: 1, backgroundColor: '#2ecc71', alignItems: 'center', justifyContent: 'center' },
  footer: { flex: 1, backgroundColor: '#3498db' },
  text: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[12] 텍스트 중첩: Style 적용</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.05</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p05_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.05)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p05_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>Text</code> 태그 안에 <code>Text</code>를 자식으로 배치할 수 있는 리액트 네이티브 특유의 중첩 문법 이해</li>
              <li>부모 <code>Text</code>의 <code>fontSize: 30</code>과 <code>fontWeight: 'bold'</code>를 자식 <code>Text</code>가 상속받는 원리 파악</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.baseText}&gt;
        나는 강남대학교
        &lt;Text style={styles.innerText}&gt; 학생 이다.&lt;/Text&gt;
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  innerText: {
    color: 'red',
  },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[13] 텍스트 중첩: 인라인 스타일링</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.06</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p06_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.06)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p06_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>인라인 스타일 <code>style={{ fontSize: 30, color: 'green' }}</code> 구문 작성 정확도</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={{ fontSize: 30 }}&gt;
        나는 강남대학교
        &lt;Text style={{ fontSize: 30, color: "green" }}&gt; 학생 이다.&lt;/Text&gt;
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[14] 텍스트 ScrollView (긴 본문 스크롤 지원)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.07</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p07_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.07)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p07_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>View</code> 대신 스크롤 컨테이너로 <code>ScrollView</code>를 정확히 사용했는지 여부</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;ScrollView&gt;
        &lt;Text style={styles.baseText}&gt;
          React의 문법으로 안드로이드, iOS 앱을 개발할 수 있는 프레임워크이다...
        &lt;/Text&gt;
      &lt;/ScrollView&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  baseText: {
    fontSize: 16,
    lineHeight: 24,
  },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[15] 텍스트 onPress 이벤트 (상태 변경 및 인터랙션)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p10_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.10)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p10_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>const [titleText, setTitleText] = useState(...)</code> 상태 훅 사용</li>
              <li><code>Text</code> 태그에도 <code>onPress</code> 속성을 연결할 수 있다는 점 파악</li>
              <li><code>numberOfLines</code> 속성 활용</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [titleText, setTitleText] = useState("지금, 무슨 과목:[클릭 ㅋㅋ]");
  const bodyText = '미래를 준비하는 젊은 지성인의 새로운 세계';

  const onPressTitle = () =&gt; {
    setTitleText("크로스 플랫폼 과목 !!!");
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.baseText}&gt;
        {"\n\n"}
        &lt;Text style={styles.titleText} onPress={onPressTitle}&gt;
          {titleText}
        &lt;/Text&gt;
        {"\n\n"}
        &lt;Text numberOfLines={5}&gt;{bodyText}&lt;/Text&gt;
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[16] 버튼 기본 컴포넌트 (Button)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.11</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p11_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.11)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p11_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>Button</code> 컴포넌트의 필수 속성인 <code>title</code> 속성 지정 여부 (<code>children</code> 텍스트 방식이 아님에 주의)</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Button title="버튼 만들기" /&gt;
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
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[17] 버튼 팝업 메시지 (단일 Alert.alert)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p12_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.12)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p12_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>color</code> 속성으로 버튼 색상 변경</li>
              <li><code>Alert.alert(...)</code> 호출 문법</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Button 
        title="버튼 만들기"
        color="#f194ff"
        onPress={() =&gt; Alert.alert('핑크 버튼 누름')}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[18] 버튼 팝업 취소/확인 (2버튼 Alert.alert)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.13</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p13_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.13)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p13_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>Alert.alert(title, message, buttonsArray)</code>의 3번째 인자 배열 구조</li>
              <li><code>style: 'cancel'</code> 속성 지정</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Button 
        title="버튼 만들기"
        color="#f194ff"
        onPress={() =&gt; Alert.alert(
          '핑크버튼',
          '핑크 버튼 누름',
          [
            {
              text: "취소",
              onPress: () =&gt; console.log("취소 버튼 클릭"),
              style: "cancel",
            },
            { 
              text: "확인", 
              onPress: () =&gt; console.log("확인 버튼 클릭") 
            },
          ]
        )}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[19] 텍스트 입력: 기본 TextInput (실시간 상태 반영)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.14</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p14_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.14)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p14_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>onChange</code>가 아니라 <code>onChangeText</code>를 사용한다는 점 (React Native 전용)</li>
              <li><code>value</code>와 <code>onChangeText</code>의 양방향 바인딩</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
    const [text, setText] = useState("");

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.label}&gt;이름을 입력하세요:&lt;/Text&gt;
      &lt;TextInput
        style={styles.input}
        placeholder="여기에 입력"
        value={text}
        onChangeText={(value) =&gt; setText(value)}
      /&gt;
      &lt;Text style={styles.output}&gt;입력값: {text}&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[20] 텍스트 입력: 텍스트 vs 숫자 (비밀번호 정규식 필터링)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.15</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p15_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.15)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p15_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>keyboardType='numeric'</code> 지정</li>
              <li>정규식 <code>replace(/[^0-9]/g, "")</code>을 통한 숫자 외 문자 입력 차단</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
    const [text, setText] = useState("");
  const [number, onNumber] = useState("");

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.label}&gt;이름을 입력하세요:&lt;/Text&gt;
      &lt;TextInput
        style={styles.input}
        placeholder="여기에 입력"
        value={text}
        onChangeText={(value) =&gt; setText(value)}
      /&gt;
      &lt;TextInput
        style={styles.input}
        placeholder="비밀번호"
        keyboardType="numeric"
        secureTextEntry={false}
        value={number}
        onChangeText={(value) =&gt; onNumber(value.replace(/[^0-9]/g, ""))}
      /&gt;
      &lt;Text style={styles.output}&gt;입 력 값: {text}&lt;/Text&gt;
      &lt;Text style={styles.output}&gt;비밀번호: {number}&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 20 },
  output: { fontSize: 16, color: "blue" },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[21] 텍스트 입력: 여러 줄 입력 (multiline 속성)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.16</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p16_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.16)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p16_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>multiline</code> 불리언 속성 적용</li>
              <li><code>numberOfLines={4}</code>, <code>maxLength={40}</code> 수치 속성 지정</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from "react";
import { StyleSheet, View, TextInput } from 'react-native';

export default function App() {
    const [value, onChangeText] = useState('Useless Multiline Placeholder');

  return (
    &lt;View style={styles.container}&gt;
      &lt;TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text =&gt; onChangeText(text)}
        value={value}
        style={styles.textInput}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, margin: 12 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[22] 텍스트 입력: 여러 줄 입력 Alert 연동 및 초기화</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">4주 P.17</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p17_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (4주 P.17)</div>
              <img src="assets/crossplatform/extracted_images/week4/week4_p17_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>Alert 버튼 콜백 <code>onPress: () => setValue("")</code>을 통한 상태 초기화 구현 여부</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function App() {
    const [value, setValue] = useState("");

  const handlePress = () =&gt; {
    Alert.alert(
      "Input Data",
      value || "(Empty)",
      [
        {
          text: "확인",
          onPress: () =&gt; setValue(""), // 확인 시 입력창 비우기
        },
      ]
    );
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) =&gt; setValue(text)}
        value={value}
        placeholder="여기에 입력하세요"
        style={styles.textInput}
      /&gt;
      &lt;Button title="Press me" onPress={handlePress} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  textInput: { padding: 10, borderColor: '#000', borderWidth: 1, marginVertical: 10 },
});</code></pre>
          </div>
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--accent); font-size: 18px;">📌 5주차 전체 예제 코드</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[23] 자바스크립트 변수 바인딩 ({name})</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.05~06</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p06_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (5주 P.05~06)</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p06_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>JSX 내부에서 자바스크립트 표현식을 쓸 때 중괄호 <code>{name}</code>을 사용한다는 기본 문법</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const name = 'Beomjun';

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;My name is {name}&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[24] 조건문: if 조건문 분기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.07</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p07_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (5주 P.07)</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p07_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>JSX 외부에서 if문으로 연산 후 결과를 JSX 내부에 삽입하는 패턴</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const name = 'Beomjun';
  let message = '';

  if (name === 'Beomjun') {
    message = 'My name is ' + name;
  } else {
    message = "I'm not Beomjun";
  }

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;{message}&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[25] 조건문: 삼항연산자 (Ternary Operator)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.08</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p08_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (5주 P.08)</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p08_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>JSX 표현식 안에서 if문은 사용 불가하지만 삼항연산자 <code>{조건 ? 참 : 거짓}</code>은 바로 쓸 수 있다는 핵심 원리</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'Beomjun';

    return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;
        {name === 'Beomjun' ? "My name is Beomjun" : "I'm not Beomjun"}
      &lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[26] 조건문: AND/OR 연산자 단축 평가</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.09</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p09_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (5주 P.09)</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p09_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>자바스크립트 논리 연산자 단축 평가(Short-circuit evaluation)의 JSX 렌더링 동작 이해</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name1 = 'Beomjun';
  const name2 = 'JongSoo';

    return (
    &lt;View style={styles.container}&gt;
      {/* AND 조건 */}
      &lt;Text style={styles.text}&gt;
        {name1 === 'Beomjun' &amp;&amp; 'My name is Beomjun'}
      &lt;/Text&gt;
      &lt;Text style={styles.text}&gt;
        {name1 !== 'Beomjun' &amp;&amp; 'My name is not Beomjun'}
      &lt;/Text&gt;

      {/* OR 조건 */}
      &lt;Text style={styles.text}&gt;
        {name2 === 'JongSoo' || "I'm not Beomjun's friend"}
      &lt;/Text&gt;
      &lt;Text style={styles.text}&gt;
        {name2 !== 'JongSoo' || "I'm Beomjun's friend"}
      &lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, marginVertical: 5 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[27] Image 컴포넌트: 로컬 이미지 불러오기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p10_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (5주 P.10)</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p10_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>웹 HTML의 <code>src="..."</code>와 달리 리액트 네이티브에서는 <code>source={require('경로')}</code>를 사용한다는 점 (교수님 단골 문제)</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;Image
        source={require('./kangnam.png')}
        style={styles.image}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[28] Switch 컴포넌트: 다크 모드 토글</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.11</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p11_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (5주 P.11)</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p11_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>Switch</code>의 <code>value</code>와 <code>onValueChange</code> 속성</li>
              <li>배열 스타일링 <code>style={[styles.container, { backgroundColor: ... }]}</code>을 통한 동적 테마 적용</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    &lt;View
      style={[
        styles.container,
        { backgroundColor: darkMode ? 'black' : 'white' },
      ]}&gt;
      &lt;Text style={[styles.text, { color: darkMode ? 'white' : 'black' }]}&gt;
        {darkMode ? '스위치: ON' : '스위치: OFF'}
      &lt;/Text&gt;
      &lt;Switch
        value={darkMode}
        onValueChange={setDarkMode}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginBottom: 20, fontSize: 20 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[29] FlatList 컴포넌트: 대용량 목록 렌더링</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p12_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (5주 P.12)</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p12_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>FlatList</code>의 3대 필수 속성인 <code>data</code>, <code>keyExtractor</code>, <code>renderItem</code> 완벽 암기 여부 (시험 출제 1순위)</li>
              <li><code>renderItem</code>의 인자가 <code>({ item })</code> 구조분해할당 객체라는 점</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const data = [
    { id: '1', name: 'Beomjun' },
    { id: '2', name: 'Jongsoo' },
    { id: '3', name: 'Yuna' },
    { id: '4', name: 'Minho' },
    { id: '5', name: 'Hana' },
  ];

    return (
    &lt;View style={styles.container}&gt;
      &lt;FlatList
        data={data}
        keyExtractor={(item) =&gt; item.id}
        renderItem={({ item }) =&gt; (
          &lt;Text style={styles.item}&gt;
            {item.id} : {item.name}
          &lt;/Text&gt;
        )}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  item: { fontSize: 24, padding: 10 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[30] SectionList 컴포넌트: 그룹별 목록 렌더링</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">5주 P.13</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p13_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (5주 P.13)</div>
              <img src="assets/crossplatform/extracted_images/week5/week5_p13_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>FlatList의 <code>data</code> 대신 SectionList는 <code>sections</code> 속성을 사용한다는 차이점</li>
              <li><code>renderSectionHeader={({ section: { title } }) => ...}</code> 속성 사용</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

export default function App() {
  const DATA = [
    { title: 'A', data: ['Alex', 'Amy', 'Andrew'] },
    { title: 'B', data: ['Beomjun', 'Bella', 'Brian'] },
    { title: 'C', data: ['Chris', 'Cindy', 'Clara'] },
  ];

    return (
    &lt;View style={styles.container}&gt;
      &lt;SectionList
        sections={DATA}
        keyExtractor={(item, index) =&gt; item + index}
        renderItem={({ item }) =&gt; (
          &lt;Text style={styles.item}&gt; ▣ {item}&lt;/Text&gt;
        )}
        renderSectionHeader={({ section: { title } }) =&gt; (
          &lt;Text style={styles.header}&gt;섹션: {title}&lt;/Text&gt;
        )}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50, paddingHorizontal: 20 },
  header: { fontSize: 24, fontWeight: 'bold', backgroundColor: '#eee', paddingVertical: 5 },
  item: { fontSize: 20, paddingVertical: 4, paddingLeft: 10 },
});</code></pre>
          </div>
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--accent); font-size: 18px;">📌 6주차 전체 예제 코드</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[31] BackHandler: 안드로이드 물리 뒤로가기 버튼 제어</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.04</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p04_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.04)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p04_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>이벤트명 <code>'hardwareBackPress'</code> 정확성</li>
              <li><code>BackHandler.exitApp()</code> 호출</li>
              <li><code>return true;</code>를 통한 기본 뒤로가기 이벤트 소비/차단</li>
              <li>클린업에서 <code>backHandler.remove()</code> 해제</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';

export default function App() {
    useEffect(() =&gt; {
    const backAction = () =&gt; {
      Alert.alert('잠깐!', '정말로 뒤로 가기를 원하십니까?', [
        {
          text: 'Cancel: 아니오',
          onPress: () =&gt; null,
          style: 'cancel',
        },
        { text: 'YES: 예', onPress: () =&gt; BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () =&gt; backHandler.remove();
  }, []);

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;뒤로가기 버튼를 눌러주세요 !&lt;/Text&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[32] DrawerLayoutAndroid: 서랍 메뉴 네비게이션</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.05~06</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p05_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.05~06)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p05_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>useRef</code>를 통한 <code>openDrawer()</code> 및 <code>closeDrawer()</code> 메서드 호출</li>
              <li><code>drawerWidth</code>, <code>drawerPosition</code>, <code>renderNavigationView</code> 필수 속성 매핑</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Button } from 'react-native';

export default function App() {
    const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const changeDrawerPosition = () =&gt; {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () =&gt; (
    &lt;View style={[styles.container, styles.navigationContainer]}&gt;
      &lt;Text style={styles.paragraph}&gt;I'm in the Drawer!&lt;/Text&gt;
      &lt;Button
        title="Close drawer"
        onPress={() =&gt; drawer.current?.closeDrawer()}
      /&gt;
    &lt;/View&gt;
  );

  return (
    &lt;DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}&gt;
      &lt;View style={styles.container}&gt;
        &lt;Text style={styles.paragraph}&gt;Drawer on the {drawerPosition}!&lt;/Text&gt;
        &lt;Button
          title="Change Drawer Position"
          onPress={() =&gt; changeDrawerPosition()}
        /&gt;
        &lt;Text style={styles.paragraph}&gt;
          Swipe from the side or press button below to see it!
        &lt;/Text&gt;
        &lt;Button
          title="Open drawer"
          onPress={() =&gt; drawer.current?.openDrawer()}
        /&gt;
      &lt;/View&gt;
    &lt;/DrawerLayoutAndroid&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  navigationContainer: { backgroundColor: '#ecf0f1' },
  paragraph: { padding: 16, fontSize: 15, textAlign: 'center' },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[33] ToastAndroid: 토스트 알림 및 위치 오프셋 제어</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.07</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p07_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.07)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p07_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>ToastAndroid.SHORT</code> / <code>ToastAndroid.LONG</code> 상수 활용</li>
              <li><code>showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)</code> 인자 순서 암기</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, ToastAndroid, View, Button } from 'react-native';

export default function App() {
    const showToast = () =&gt; {
    ToastAndroid.show('기본 토스트 메세지 !', ToastAndroid.SHORT);
  };

  const showToastWithGravityAndOffset = () =&gt; {
    ToastAndroid.showWithGravityAndOffset(
      'TOGGLE TOAST WITH GRAVITY &amp; OFFSET 메세지 !',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50,
    );
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Button title="Toggle Toast" onPress={showToast} /&gt;
      &lt;View style={styles.buttonWrap} /&gt;
      &lt;Button
        title="Toggle Toast With Gravity &amp; Offset"
        color="#f194ff"
        onPress={showToastWithGravityAndOffset}
      /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', paddingTop: 20, paddingHorizontal: 20, backgroundColor: '#fff', padding: 8 },
  buttonWrap: { marginBottom: 2, height: 5 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[34] Animated: 페이드 인/아웃 타이밍 애니메이션</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.09~10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p09_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.09~10)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p09_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>useRef(new Animated.Value(0)).current</code> 패턴</li>
              <li><code>Animated.timing(anim, { toValue, duration, useNativeDriver }).start()</code></li>
              <li>일반 <code>View</code>가 아닌 <code><Animated.View></code> 사용 및 <code>opacity</code> 바인딩</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () =&gt; {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () =&gt; {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Animated.View
        style={[
          styles.fadingContainer,
          { opacity: fadeAnim },
        ]}&gt;
        &lt;Text style={styles.fadingText}&gt;Fading View!&lt;/Text&gt;
      &lt;/Animated.View&gt;
      &lt;View style={styles.buttonRow}&gt;
        &lt;Button title="Fade In View" onPress={fadeIn} /&gt;
        &lt;Button title="Fade Out View" onPress={fadeOut} /&gt;
      &lt;/View&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  fadingContainer: { padding: 20, backgroundColor: 'powderblue' },
  fadingText: { fontSize: 28 },
  buttonRow: { flexBasis: 100, justifyContent: 'space-evenly', marginVertical: 10 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[35] Dimensions: 기기 화면 해상도 측정 및 회전 감지</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.11~12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p11_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.11~12)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p11_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>Dimensions.get('window')</code> vs <code>Dimensions.get('screen')</code> 차이점 (window는 상태표시줄 등 제외 실제 앱 가용영역)</li>
              <li><code>Dimensions.addEventListener('change', ...)</code> 및 <code>subscription?.remove()</code></li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
    const windowDimensions = Dimensions.get('window');
  const screenDimensions = Dimensions.get('screen');

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() =&gt; {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) =&gt; {
        setDimensions({ window, screen });
      },
    );
    return () =&gt; subscription?.remove();
  }, []);

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.header}&gt;Window Dimensions&lt;/Text&gt;
      {Object.entries(dimensions.window).map(([key, value]) =&gt; (
        &lt;Text key={key}&gt;
          {key} - {value.toFixed(2)}
        &lt;/Text&gt;
      ))}
      &lt;Text style={styles.header}&gt;Screen Dimensions&lt;/Text&gt;
      {Object.entries(dimensions.screen).map(([key, value]) =&gt; (
        &lt;Text key={key}&gt;
          {key} - {value.toFixed(2)}
        &lt;/Text&gt;
      ))}
      &lt;StatusBar style='auto' /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 20, marginVertical: 10 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[36] KeyboardAvoidingView: 키보드 회피 및 바깥 터치 닫기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.13~14</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p13_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.13~14)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p13_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>Keyboard.dismiss</code> 메서드를 <code>TouchableWithoutFeedback</code>의 <code>onPress</code>에 전달하는 필수 패턴</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from 'react-native';

export default function App() {
    const [value, setValue] = useState("");

  const handlePress = () =&gt; {
    Alert.alert(
      "Input Data",
      value || "(Empty)",
      [
        {
          text: "확인",
          onPress: () =&gt; setValue(""),
        },
      ]
    );
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;TouchableWithoutFeedback onPress={Keyboard.dismiss}&gt;
        &lt;View style={styles.inner}&gt;
          &lt;Text style={styles.header}&gt;Header&lt;/Text&gt;
          &lt;TextInput
            placeholder="Username"
            style={styles.textInput}
            onChangeText={(text) =&gt; setValue(text)}
            value={value}
          /&gt;
          &lt;View style={styles.btnContainer}&gt;
            &lt;Button title="Submit" onPress={handlePress} /&gt;
          &lt;/View&gt;
        &lt;/View&gt;
      &lt;/TouchableWithoutFeedback&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { padding: 24, flex: 1, justifyContent: 'space-around' },
  header: { fontSize: 36, marginBottom: 48 },
  textInput: { height: 40, borderColor: '#000000', borderBottomWidth: 1, marginBottom: 36 },
  btnContainer: { backgroundColor: 'white', marginTop: 12 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[37] Linking: 외부 웹 브라우저 URL 열기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.15</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p15_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.15)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p15_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>Linking.openURL('URL')</code> API의 사용법</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
    const handlePress = () =&gt; {
    Linking.openURL('https://blog.naver.com/jongsoo67');
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;정종수 블로그&lt;/Text&gt;
      &lt;Button title="확 인" onPress={handlePress} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'stretch', justifyContent: 'center' },
  text: { fontSize: 30, marginVertical: 30, textAlign: 'center' },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[38] Modal: 팝업 대화상자 레이어</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.16~17</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p16_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.16~17)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p16_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>Modal</code>의 필수 속성 <code>visible={modalVisible}</code></li>
              <li><code>animationType="slide"</code>, <code>transparent={true}</code> 속성</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    &lt;View style={styles.container}&gt;
      &lt;Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() =&gt; {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}&gt;
        &lt;View style={styles.centeredView}&gt;
          &lt;View style={styles.modalView}&gt;
            &lt;Text style={styles.modalText}&gt;Hello World!&lt;/Text&gt;
            &lt;Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =&gt; setModalVisible(false)}&gt;
              &lt;Text style={styles.textStyle}&gt;Hide Modal&lt;/Text&gt;
            &lt;/Pressable&gt;
          &lt;/View&gt;
        &lt;/View&gt;
      &lt;/Modal&gt;

      &lt;Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =&gt; setModalVisible(true)}&gt;
        &lt;Text style={styles.textStyle}&gt;Show Modal&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  centeredView: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  modalView: { width: '90%', margin: 20, backgroundColor: 'white', borderRadius: 10, padding: 35, alignItems: 'center', elevation: 5 },
  button: { borderRadius: 20, padding: 10, elevation: 2 },
  buttonOpen: { backgroundColor: '#F194FF' },
  buttonClose: { backgroundColor: '#2196F3' },
  textStyle: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  modalText: { marginBottom: 15, textAlign: 'center' },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[39] PixelRatio: 기기 픽셀 비율 및 이미지 크기 변환</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.18~19</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p18_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.18~19)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p18_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>PixelRatio.get()</code></li>
              <li><code>PixelRatio.getFontScale()</code></li>
              <li><code>PixelRatio.getPixelSizeForLayoutSize(size)</code> 메서드명 암기</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native';

const size = 50;
const cat = { uri: 'https://reactnative.dev/docs/assets/p_cat1.png', width: size, height: size };

export default function App() {
    return (
    &lt;View style={styles.container}&gt;
      &lt;ScrollView&gt;
        &lt;View style={styles.container}&gt;
          &lt;Text&gt;Current Pixel Ratio is:&lt;/Text&gt;
          &lt;Text style={styles.value}&gt;{PixelRatio.get()}&lt;/Text&gt;
        &lt;/View&gt;
        &lt;View style={styles.container}&gt;
          &lt;Text&gt;Current Font Scale is:&lt;/Text&gt;
          &lt;Text style={styles.value}&gt;{PixelRatio.getFontScale()}&lt;/Text&gt;
        &lt;/View&gt;
        &lt;View style={styles.container}&gt;
          &lt;Text&gt;On this device images with a layout width of&lt;/Text&gt;
          &lt;Text style={styles.value}&gt;{size} px&lt;/Text&gt;
          &lt;Image source={cat} /&gt;
        &lt;/View&gt;
        &lt;View style={styles.container}&gt;
          &lt;Text&gt;require images with a pixel width of&lt;/Text&gt;
          &lt;Text style={styles.value}&gt;
            {PixelRatio.getPixelSizeForLayoutSize(size)} px
          &lt;/Text&gt;
          &lt;Image
            source={cat}
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(size),
              height: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
          /&gt;
        &lt;/View&gt;
      &lt;/ScrollView&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 50 },
  value: { fontSize: 24, marginBottom: 12, marginTop: 4 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[40] RefreshControl: 당겨서 새로고침</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">6주 P.20~21</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p20_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (6주 P.20~21)</div>
              <img src="assets/crossplatform/extracted_images/week6/week6_p20_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>ScrollView</code>의 <code>refreshControl={<RefreshControl ... />}</code> 속성</li>
              <li><code>useCallback</code>과 타이머를 이용한 비동기 새로고침 완료 처리</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [refreshing, setRefreshing] = useState(false);
  const timerRef = useRef(null);

  const onRefresh = useCallback(() =&gt; {
    if (timerRef.current !== null) return;
    setRefreshing(true);
    timerRef.current = setTimeout(() =&gt; {
      setRefreshing(false);
      timerRef.current = null;
    }, 2000);
  }, []);

  useEffect(() =&gt; {
    return () =&gt; {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    &lt;View style={styles.container}&gt;
      &lt;ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        alwaysBounceVertical={true}
        refreshControl={
          &lt;RefreshControl refreshing={refreshing} onRefresh={onRefresh} /&gt;
        }&gt;
        &lt;Text&gt;아래로 당기면 새로고침됩니다.&lt;/Text&gt;
      &lt;/ScrollView&gt;
      &lt;StatusBar style="auto" /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flex: 1, backgroundColor: 'pink' },
  scrollContent: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
});</code></pre>
          </div>
        </div>

        <div class="summary-box" style="margin-top: 32px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--accent); font-size: 18px;">📌 7주차 전체 예제 코드</h3>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[41] useState 예제 1: 카운터 (+1 / -1)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.05</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p05_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.05)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p05_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>useState</code> 기본 사용법</li>
              <li><code>Pressable</code>의 <code>onPress</code>에서 상태 변경 함수 호출</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

  return (
    &lt;View style={styles.container}&gt;
      &lt;View style={{ alignItems: 'center' }}&gt;
        &lt;Text style={styles.text}&gt;현재 카운트: {count}&lt;/Text&gt;
      &lt;/View&gt;
      &lt;Pressable style={styles.button} onPress={() =&gt; setCount(count + 1)}&gt;
        &lt;Text style={styles.buttonText}&gt;+1 증가&lt;/Text&gt;
      &lt;/Pressable&gt;
      &lt;Pressable style={styles.button} onPress={() =&gt; setCount(count - 1)}&gt;
        &lt;Text style={styles.buttonText}&gt;-1 감소&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  text: { fontSize: 30, marginBottom: 20 },
  button: { backgroundColor: '#4ab1ec', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 6, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[42] useState 예제 2: A × B 곱셈 계산기</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.06~07</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p06_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.06~07)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p06_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>TextInput</code>의 문자열 입력을 <code>parseFloat</code>로 수치 변환</li>
              <li><code>isNaN</code> 예외 처리 및 조건부 렌더링 <code>{result !== null && ...}</code></li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
    const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const multiply = () =&gt; {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult('숫자를 입력하세요!');
    } else {
      setResult(numA * numB);
    }
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={{ fontSize: 20, marginBottom: 10 }}&gt;A × B 계산기&lt;/Text&gt;
      &lt;TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="A 입력"
        value={a}
        onChangeText={setA}
      /&gt;
      &lt;TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="B 입력"
        value={b}
        onChangeText={setB}
      /&gt;
      &lt;Button title="A × B 계산" onPress={multiply} /&gt;
      {result !== null &amp;&amp; (
        &lt;Text style={{ fontSize: 22, marginTop: 20 }}&gt;결과: {result}&lt;/Text&gt;
      )}
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[43] useRef vs 일반 변수 vs useState 리렌더링 비교 (시험 출제 1순위!)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.09</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p09_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.09)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p09_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>**교수님 주관식/단답형 단골 질문**: <code>useRef</code>의 값은 바뀌어도 리렌더링되지 않으며, 컴포넌트가 다시 렌더링되어도 값이 유지된다. 반면 일반 변수 <code>countVar</code>는 리렌더링 시 함수가 재실행되므로 초기화된다.</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Example() {
    const [render, setRender] = useState(false);
  const countRef = useRef(0);
  let countVar = 5;

  const handleClick = () =&gt; {
    countRef.current += 1;
    countVar += 1;
    console.log('현재 count:', countRef.current, ": ", countVar);
  };

  const doRender = () =&gt; {
    setRender(!render);
  };

  return (
    &lt;View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 30,
      }}&gt;
      &lt;Text style={{ fontSize: 30, marginTop: 10, marginBottom: 30 }}&gt;
        결과값 CountRef: {countRef.current}, {"\n"}
        결과값 CountVar: {countVar}
      &lt;/Text&gt;
      &lt;View style={{ marginBottom: 12 }}&gt;
        &lt;Button title="클릭" onPress={handleClick} /&gt;
      &lt;/View&gt;
      &lt;View&gt;
        &lt;Button title="리랜더" onPress={doRender} /&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}
</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[44] useRef: TextInput 포커스 자동 이동</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.10</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p10_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.10)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p10_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>컴포넌트의 <code>ref</code> 속성에 <code>useRef</code> 변수 전달</li>
              <li><code>inputRef.current?.focus()</code> 메서드 호출</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {
    const inputRef = useRef(null);

  const focusInput = () =&gt; {
    inputRef.current?.focus();
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;TextInput
        style={styles.text}
        ref={inputRef}
        placeholder="이름을 입력하세요"
      /&gt;
      &lt;Button title="포커스 이동" onPress={focusInput} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[45] useRef: 계산기 + 계산 후 자동 포커스 복귀</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.11~12</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p11_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.11~12)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p11_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>useState</code> 계산 로직과 <code>useRef</code>의 DOM 포커스 제어 결합</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
    const inputRef = useRef(null);

  const focusInput = () =&gt; {
    inputRef.current?.focus();
  };

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const multiply = () =&gt; {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult('숫자를 입력하세요!');
    } else {
      setResult(numA * numB);
    }
  };

  const handlePress = () =&gt; {
    multiply();
    focusInput(); // A 입력창으로 자동 포커스 복귀
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={{ fontSize: 20, marginBottom: 10 }}&gt;A × B 계산기&lt;/Text&gt;
      &lt;TextInput
        ref={inputRef}
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
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, textAlign: 'center', fontSize: 18, borderRadius: 5 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[46] useEffect: 컴포넌트 마운트 시 최초 1회 실행</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.14</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p14_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.14)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p14_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>의존성 배열 <code>[]</code>을 비워두어야 마운트 시 1회만 실행된다는 규칙 (배열 생략 시 매 렌더링마다 실행됨)</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
    useEffect(() =&gt; {
    console.log("앱이 실행되었습니다! (처음 한 번만)");
  }, []); // 빈 배열 [] 지정이 핵심

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;useEffect 예제&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[47] useEffect: 특정 상태 변경 감지</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.15</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p15_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.15)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p15_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>의존성 배열 <code>[count]</code>를 통해 특정 상태 변경 시에만 이펙트 함수가 재실행되도록 제어</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    console.log("count 값이 바뀌었습니다:", count);
  }, [count]); // 의존성 배열에 count 지정

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;현재 값: {count}&lt;/Text&gt;
      &lt;Button title="+1 증가" onPress={() =&gt; setCount(count + 1)} /&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[48] useMemo: 연산 캐싱 최적화 (시험 단골!)</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.17~18</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p17_crop1.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.17~18)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p17_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li><code>const val = useMemo(() => 연산식, [의존성])</code> 문법</li>
              <li>**교수님 주관식 채점 포인트**: '텍스트 변경' 버튼을 누르면 컴포넌트는 리렌더링되지만 <code>count</code>는 변하지 않았으므로 <code>useMemo</code> 콜백은 실행되지 않고 이전 계산값을 재사용한다.</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const double = useMemo(() =&gt; {
    console.log("double 계산 실행!");
    return count * 2;
  }, [count]); // count가 변경될 때만 재계산

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.text}&gt;Count: {count}&lt;/Text&gt;
      &lt;Text style={styles.text}&gt;Double: {double}&lt;/Text&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      &lt;Button title="카운트 +1" onPress={() =&gt; setCount(count + 1)} /&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      &lt;Button title="텍스트 변경" onPress={() =&gt; setText(text + '강남대 ')} /&gt;
      &lt;Text style={{ marginBottom: 1 }} /&gt;
      &lt;Text style={styles.text}&gt;Character: {text}&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 30 },
  text: { fontSize: 30, paddingBottom: 10 },
});</code></pre>
          </div>
        </div>

        <div class="qa-card" style="margin-bottom: 24px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span style="font-weight: 800; font-size: 16px; color: var(--ink);">[49] 7주차 실습 과제: 아이폰 계산기 UI 스타일링 스펙</span>
            <span class="badge" style="background: var(--surface-2); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">7주 P.19</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📱 에뮬레이터 실행 결과</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p19_slide.png" alt="실행 화면" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
            <div style="text-align: center; background: var(--surface-2); padding: 10px; border-radius: 8px;">
              <div style="font-size: 12px; font-weight: 700; color: var(--ink-muted); margin-bottom: 6px;">📄 슬라이드 원본 (7주 P.19)</div>
              <img src="assets/crossplatform/extracted_images/week7/week7_p19_slide.png" alt="슬라이드 원본" style="max-height: 260px; max-width: 100%; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);" loading="lazy">
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">🎯 핵심 문법 및 포인트:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ink);">
              <li>주어진 슬라이드 명세(색상코드, 폰트사이즈 등) 정확한 반영</li>
              <li>Flexbox <code>justifyContent: 'flex-end'</code>를 이용한 하단 키패드 배치</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--ink-muted); margin-bottom: 4px;">💻 완전한 React Native 소스 코드:</div>
            <pre style="background: #1e1e1e; color: #d4d4d4; padding: 14px; border-radius: 8px; font-size: 13px; line-height: 1.5; overflow-x: auto;"><code>import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [displayValue, setDisplayValue] = useState('0');

  const handleButtonPress = (val) =&gt; {
    if (val === 'C') {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue === '0' ? String(val) : displayValue + String(val));
    }
  };

  return (
    &lt;View style={styles.container}&gt;
      &lt;View style={styles.displayContainer}&gt;
        &lt;Text style={styles.displayText}&gt;{displayValue}&lt;/Text&gt;
      &lt;/View&gt;
      &lt;View style={styles.buttonRow}&gt;
        &lt;TouchableOpacity style={[styles.button, styles.utilityButton]} onPress={() =&gt; handleButtonPress('C')}&gt;
          &lt;Text style={styles.buttonText}&gt;C&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
        &lt;TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() =&gt; handleButtonPress('/')}&gt;
          &lt;Text style={styles.buttonText}&gt;÷&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
      &lt;/View&gt;
      &lt;View style={styles.buttonRow}&gt;
        &lt;TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() =&gt; handleButtonPress(7)}&gt;
          &lt;Text style={styles.buttonText}&gt;7&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
        &lt;TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() =&gt; handleButtonPress(8)}&gt;
          &lt;Text style={styles.buttonText}&gt;8&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
        &lt;TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() =&gt; handleButtonPress(9)}&gt;
          &lt;Text style={styles.buttonText}&gt;9&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
        &lt;TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() =&gt; handleButtonPress('*')}&gt;
          &lt;Text style={styles.buttonText}&gt;×&lt;/Text&gt;
        &lt;/TouchableOpacity&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'flex-end', paddingBottom: 40, paddingHorizontal: 15 },
  displayContainer: { paddingHorizontal: 20, marginBottom: 20 },
  displayText: { color: 'white', fontSize: 84, textAlign: 'right' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  button: { height: 64, flex: 1, marginHorizontal: 6, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
  numberButton: { backgroundColor: '#2f2f2f' },
  operatorButton: { backgroundColor: '#F5A623' },
  utilityButton: { backgroundColor: '#555' },
  buttonText: { color: 'white', fontSize: 30, fontWeight: '500' },
});
}

</code></pre>
          </div>
        </div>

      </div>
    </section>

`
};

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
          id: 10, type: "short", score: 10, origin: "7주차 교안: useCallback Hook 최적화",
          text: "리액트에서 컴포넌트 리렌더링 시마다 동일한 콜백 함수가 불필요하게 새로 생성되는 것을 방지하기 위해 <b>함수 자체를 메모이제이션(캐싱)</b>하는 Hook은 무엇인가?",
          placeholder: "Hook 이름 입력 (예: useCallback)",
          answers: ["useCallback", "usecallback"],
          explanation: "<b>정답: useCallback</b><br>useMemo가 복잡한 연산의 '결과값'을 캐싱하는 반면, useCallback은 전달된 '함수 인스턴스' 자체를 메모리에 캐싱하여 렌더링 성능을 최적화합니다."
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
          id: 8, type: "essay", score: 10, origin: "7주차 교안 p.3: React Hook의 3대 필수 사용 규칙",
          text: "리액트 함수 컴포넌트에서 Hook을 안전하게 사용하기 위해 반드시 지켜야 하는 <b>3대 필수 사용 규칙</b>을 구체적으로 서술하시오.",
          placeholder: "Hook의 3대 사용 규칙을 서술하세요.",
          rubric: "1. 함수 컴포넌트 또는 커스텀 Hook 내부에서만 호출 가능 명시 (3.5점)\n2. 컴포넌트 최상위(Top level)에서만 호출하며 조건문/반복문/일반 함수 내 호출 불가 명시 (3.5점)\n3. Hook의 이름은 항상 'use' 접두사로 시작해야 함 명시 (3점)",
          sampleAnswer: "1. 리액트 함수형 컴포넌트 또는 커스텀 Hook 내에서만 호출해야 한다. (일반 자바스크립트 함수 내부 호출 불가)\n2. 컴포넌트의 최상위(Top level)에서만 호출해야 한다. (반복문, 조건문, 중첩 함수 내부에서 호출 불가)\n3. Hook의 이름은 항상 'use'라는 접두사로 시작해야 한다.",
          explanation: "교안 7주차 3페이지에 명시된 Hook의 3대 핵심 규칙입니다."
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
