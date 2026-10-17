// ========================================================
// 🛡️ [DATA MODULE] 정보보호개론 (개념 총정리 & 모의고사)
// ========================================================
window.CONCEPT_DATABASE = window.CONCEPT_DATABASE || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};

window.CONCEPT_DATABASE.security = {
    id: "security",
    title: "정보보호개론 핵심 치트시트",
    filterChips: [
      { id: "all", label: "전체보기" },
      { id: "sec-cheat", label: "🎯 1초 정답 치트키 (12문)", class: "amber-chip" },
      { id: "sec-exclude", label: "❌ 시험 제외 14항목 (Pass)", class: "danger-chip" },
      { id: "sec-w1", label: "1주차: 기초 (CIA Triad)" },
      { id: "sec-w2", label: "2주차: 시스템 (접근제어 4대 & SBOM)" },
      { id: "sec-w3", label: "3주차: 네트워크 (DoS 4대 & RADIUS)" },
      { id: "sec-w4", label: "4주차: 웹 (HTTP 200 & SQLi)" },
      { id: "sec-w5", label: "5주차: 코드 (정적 vs 동적 & 웜)" },
      { id: "sec-w6", label: "6주차: 암호학 (DES / AES / RSA / 해시)" }
    ],
    html: `
      <!-- SECTION 1: 1초 정답 치트키 -->
      <section id="sec-cheat" class="concept-section">
        <div class="section-banner gold-banner">
          <div class="section-banner-title">
            <span>🎯 1초 정답 치트키 (교수님 직전 강의 출제 스포 12문항)</span>
          </div>
          <span style="font-size: 11.5px; opacity: 0.9;">문제 확인 즉시 작성할 핵심 단답형 키워드</span>
        </div>

        <div class="qa-grid">
          <div class="qa-card" data-tags="DES 라운드 키 비트 시프트 10번째">
            <div class="qa-q"><span class="q-icon">Q1</span><span>DES 10번째 라운드 키 생성 시 비트 시프트 횟수는?</span></div>
            <div class="qa-a"><span class="ans-target">2번 (2비트)</span><button class="copy-btn" onclick="copyText('2번 (2비트)')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 1, 2, 9, 16 라운드만 1비트, 나머지는 전부 2비트 시프트</div>
          </div>

          <div class="qa-card" data-tags="트리플 DES 3-DES 키 개수">
            <div class="qa-q"><span class="q-icon">Q2</span><span>트리플 DES (3-DES)에서 필요한 키의 개수는?</span></div>
            <div class="qa-a"><span class="ans-target">2개</span><button class="copy-btn" onclick="copyText('2개')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* K1 암호화 → K2 복호화 → K1 재암호화</div>
          </div>

          <div class="qa-card" data-tags="HTTP 요청 성공 상태 코드 200 OK">
            <div class="qa-q"><span class="q-icon">Q3</span><span>HTTP 요청 성공 시 반환되는 상태 코드는?</span></div>
            <div class="qa-a"><span class="ans-target">200 OK</span><button class="copy-btn" onclick="copyText('200 OK')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 400 Bad / 401 Unauth / 403 Forbidden / 404 Not Found / 500 Server</div>
          </div>

          <div class="qa-card" data-tags="해시 함수 Hash 정의 일방향 함수 One-Way">
            <div class="qa-q"><span class="q-icon">Q4</span><span>해시 함수(Hash)를 한마디로 정의하면?</span></div>
            <div class="qa-a"><span class="ans-target">일방향 함수 (One-Way Function)</span><button class="copy-btn" onclick="copyText('일방향 함수 (One-Way Function)')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* x → H(x) 계산은 쉬우나 역산(H(x) → x)은 불가능 (역상 저항성)</div>
          </div>

          <div class="qa-card" data-tags="해시 함수 핵심 보안 목적 무결성 Integrity">
            <div class="qa-q"><span class="q-icon">Q5</span><span>해시 함수를 사용하는 핵심 보안 목적은?</span></div>
            <div class="qa-a"><span class="ans-target">무결성 (Integrity)</span><button class="copy-btn" onclick="copyText('무결성 (Integrity)')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 원본 데이터의 위·변조 여부를 검증</div>
          </div>

          <div class="qa-card" data-tags="암호화 알고리즘 AES DES 핵심 보안 목적 기밀성 Confidentiality">
            <div class="qa-q"><span class="q-icon">Q6</span><span>암호화 알고리즘(AES, DES 등)의 핵심 보안 목적은?</span></div>
            <div class="qa-a"><span class="ans-target">기밀성 (Confidentiality)</span><button class="copy-btn" onclick="copyText('기밀성 (Confidentiality)')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 인가되지 않은 비인가자의 데이터 도청/열람 방지</div>
          </div>

          <div class="qa-card" data-tags="무선 엔터프라이즈 RADIUS 서버 본질적 역할 AAA 802.1x">
            <div class="qa-q"><span class="q-icon">Q7</span><span>무선 엔터프라이즈 환경에서 RADIUS 서버의 본질적 역할은?</span></div>
            <div class="qa-a"><span class="ans-target">AAA (인증, 인가, 어카운팅) 서버</span><button class="copy-btn" onclick="copyText('AAA (인증, 인가, 어카운팅)')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* Authentication, Authorization, Accounting 3대 기능 수행</div>
          </div>

          <div class="qa-card" data-tags="기업 세션 하이재킹 합법적 보안용 SSL 가시성 Visibility">
            <div class="qa-q"><span class="q-icon">Q8</span><span>기업에서 세션 하이재킹 원리를 합법적 보안용으로 쓰는 기법은?</span></div>
            <div class="qa-a"><span class="ans-target">SSL 가시성 (SSL Visibility) 확보</span><button class="copy-btn" onclick="copyText('SSL 가시성 (SSL Visibility) 확보')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 내부 기밀 유출 감시를 위해 트래픽을 중간에서 복호화/분석 후 재전송</div>
          </div>

          <div class="qa-card" data-tags="AES 라운드 4단계 순서 SubBytes ShiftRows MixColumns AddRoundKey">
            <div class="qa-q"><span class="q-icon">Q9</span><span>AES의 한 라운드를 구성하는 4단계 과정 순서는?</span></div>
            <div class="qa-a"><span class="ans-target">SubBytes → ShiftRows → MixColumns → AddRoundKey</span><button class="copy-btn" onclick="copyText('SubBytes → ShiftRows → MixColumns → AddRoundKey')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 바이트 치환 → 행 순환 이동 → 열 행렬 곱 → 라운드 키 XOR</div>
          </div>

          <div class="qa-card" data-tags="DES S-Box 압축 원리 행 열 결정 방식 6비트 4비트">
            <div class="qa-q"><span class="q-icon">Q10</span><span>DES S-Box의 압축 원리 (행과 열 결정 방식)?</span></div>
            <div class="qa-a"><span class="ans-target">앞/뒤 1비트씩(총 2비트)은 행(Row), 가운데 4비트는 열(Column)</span><button class="copy-btn" onclick="copyText('앞/뒤 1비트씩(총 2비트)은 행(Row), 가운데 4비트는 열(Column)')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 6비트 입력 → 참조 후 4비트 압축 출력 (8개 S-Box에서 48→32비트)</div>
          </div>

          <div class="qa-card" data-tags="DES 마지막 16 라운드 생략 동작 좌우 스왑 교환 믹서">
            <div class="qa-q"><span class="q-icon">Q11</span><span>DES의 마지막(16) 라운드에서 생략되는 동작은?</span></div>
            <div class="qa-a"><span class="ans-target">좌우 스왑 (순서 교환 / 믹서) 생략</span><button class="copy-btn" onclick="copyText('좌우 스왑 (순서 교환 / 믹서) 생략')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 마지막 16라운드 종료 후에는 좌우 32비트 스왑을 하지 않고 그대로 병합</div>
          </div>

          <div class="qa-card" data-tags="소프트웨어 공급망 보안 명세서 SBOM Software Bill of Materials">
            <div class="qa-q"><span class="q-icon">Q12</span><span>소프트웨어 공급망 보안을 위한 SW 명세서의 이름은?</span></div>
            <div class="qa-a"><span class="ans-target">SBOM (Software Bill of Materials)</span><button class="copy-btn" onclick="copyText('SBOM (Software Bill of Materials)')">복사</button></div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* SW 구성 요소, 제조사, 라이브러리 버전, 환경을 기록한 디지털 명세서</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: 시험 제외 항목 -->
      <section id="sec-exclude" class="concept-section">
        <div class="section-banner danger-banner">
          <div class="section-banner-title">
            <span>❌ 시험 제외 항목 (교수님 공인: 절대 안 나옴 - 과감히 Pass)</span>
          </div>
          <span style="font-size: 11.5px; opacity: 0.9;">시간 낭비 방지 14대 배제 영역</span>
        </div>

        <div class="concept-card">
          <table class="custom-table table-danger">
            <thead>
              <tr><th style="width: 32%;">제외 영역</th><th>제외 사유 및 교수님 공식 코멘트</th></tr>
            </thead>
            <tbody>
              <tr><td class="item-name">1. 보안의 역사 / 해커 역사</td><td><b>"역사 시험 아니다. 1주차 역사, 국내 해커 역사 절대 안 냄"</b></td></tr>
              <tr><td class="item-name">2. 단순 사건 사고 & 위협 전망</td><td>최근 금융권 사고 사례, 미래 AI 해킹 고도화 전망 등 단순 상식/교양형 내용 배제</td></tr>
              <tr><td class="item-name">3. 윤리 의식 / 법률 / 전문가 소양</td><td>교재 뒷부분의 단순 교양 및 보안 윤리 규정 등은 시험 문제로 출제하지 않음</td></tr>
              <tr><td class="item-name">4. 단순 주제 나열형 문제</td><td>"시스템 보안의 주요 주제 5가지를 쓰시오" 식의 단순 암기 나열형 문제 배제</td></tr>
              <tr><td class="item-name">5. OS/유닉스/로그 세부 명령어</td><td>환경마다 상이한 세부 시스템 로그 확인 경로, OS 계정 관리 세부 실습 명령어 미출제</td></tr>
              <tr><td class="item-name">6. 모바일 보안</td><td>기말고사 이후 별도 챕터로 진행 예정이므로 <b>이번 중간고사 범위에서 전면 제외</b></td></tr>
              <tr><td class="item-name">7. 네트워크 일반 프로토콜 이론</td><td>HTTP 1.0 vs 1.1 차이점, GET/POST 메소드 비교 등 보안 외적인 일반 웹 프로토콜 이론</td></tr>
              <tr><td class="item-name">8. 일부 DoS 공격 세부</td><td>HTTP GET Flooding, CC 공격, Smurf 공격 등의 세부 동작 메커니즘 ("몰라도 됨")</td></tr>
              <tr><td class="item-name">9. ICMP Redirect 공격</td><td>수업 시간에 강의 진도상 스킵하였으므로 시험 문제 출제 제외</td></tr>
              <tr><td class="item-name">10. 도구/툴 실습 내용</td><td>Burp Suite 툴 인터페이스 조작법, 구글 해킹(Google Dorking) 명령어 등 실습 내용</td></tr>
              <tr><td class="item-name">11. 사양된 구형 단일 치환 암호</td><td>실무에서 쓰이지 않는 매우 오래된 고대 구형 단일 치환 암호들은 미출제</td></tr>
              <tr><td class="item-name">12. DES 수치 계산 문제</td><td><b>"미친 사람도 아니고 DES 라운드 수치 계산/결과값 연산 도출 문제 안 냄"</b></td></tr>
              <tr><td class="item-name">13. 양자 암호화</td><td>진도 스킵으로 출제 제외</td></tr>
              <tr><td class="item-name">14. 해시 알고리즘별 수학적 수식</td><td>MD5, SHA 알고리즘의 세부 복잡한 수학 연산 수식 및 비트 단위 계산식 미출제</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 3: 1주차. 정보보안 기초 -->
      <section id="sec-w1" class="concept-section">
        <div class="section-banner">
          <div class="section-banner-title"><span>📖 1주차. 정보보안 기초</span></div>
          <span>CIA Triad & 보안과 가용성의 트레이드오프</span>
        </div>

        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">1. 정보보안의 3대 요소 (CIA Triad)</h2>
            <div><span class="badge badge-amber">단답형</span> <span class="badge badge-purple">서술형 대비</span></div>
          </div>

          <div class="grid-2col">
            <div class="concept-card" style="border-left: 4px solid var(--accent-blue);">
              <h3 style="font-size: 14.5px; font-weight: 800; color: #60a5fa; margin-bottom: 6px;">🔒 기밀성 (Confidentiality)</h3>
              <p style="font-size: 13px;"><b>인가된(Authorized) 사용자</b>만이 정보에 접근할 수 있도록 보장하는 성질.</p>
              <div style="margin-top: 8px; font-size: 12.5px;">💡 <b>핵심 연계 기술:</b> <span class="kw-ans">암호화 (AES, DES 등)</span></div>
            </div>

            <div class="concept-card" style="border-left: 4px solid var(--accent-green);">
              <h3 style="font-size: 14.5px; font-weight: 800; color: #34d399; margin-bottom: 6px;">🛡️ 무결성 (Integrity)</h3>
              <p style="font-size: 13px;">인가되지 않은 사용자의 <b>수정·위조·변조를 방지</b>하고, 변경 시 이를 정확히 감지하는 성질.</p>
              <div style="margin-top: 8px; font-size: 12.5px;">💡 <b>핵심 연계 기술:</b> <span class="kw-ans">해시 함수 (Hash)</span>, 전자서명</div>
            </div>
          </div>

          <div class="concept-card" style="border-left: 4px solid var(--accent-amber); margin-top: 10px;">
            <h3 style="font-size: 14.5px; font-weight: 800; color: #fbbf24; margin-bottom: 6px;">⚡ 가용성 (Availability)</h3>
            <p style="font-size: 13px;"><b>인가된 사용자가 정보나 서비스를 필요로 할 때</b> 지체 없이 언제든지 정상적으로 이용할 수 있도록 보장하는 성질. (DoS/DDoS 공격의 직접적 표적)</p>
          </div>

          <div class="callout warning">
            <div class="callout-title">⚠️ [서술형 핵심] 보안과 가용성의 트레이드오프 (Trade-off)</div>
            보안성을 극대화하기 위해 로그인 인증 절차를 6~7단계로 과도하게 적용하면 기밀성은 높아지나 사용자가 서비스에 접속하기 힘들어져 <b>가용성(Availability)이 치명적으로 저하</b>됨. 따라서 정보보안 시스템 설계 시에는 <b>기밀성, 무결성, 가용성의 균형 잡힌 최적점(Balance)</b>을 도출해야 함.
          </div>
          <div class="callout quote">
            🗣️ 교수님 코멘트: "로그인 패턴을 6~7개 만들어 놓으면 뚫릴 일은 없겠지만 가용성이 떨어져. 정보보안에서는 세 요소가 균형을 맞춰야 된다."
          </div>
        </div>
      </section>

      <!-- SECTION 4: 2주차. 시스템 보안 -->
      <section id="sec-w2" class="concept-section">
        <div class="section-banner">
          <div class="section-banner-title"><span>💻 2주차. 시스템 보안</span></div>
          <span>접근 제어 4대 모델 & AAA & SBOM</span>
        </div>

        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">1. 식별 / 인증(Authentication) vs 인가(Authorization)</h2>
            <span class="badge badge-amber">단답형 필수</span>
          </div>

          <table class="custom-table">
            <thead>
              <tr><th style="width: 22%;">구분</th><th style="width: 44%;">개념 및 적용 시점</th><th>핵심 예시</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight: 800; color: #60a5fa;">인증 (Authentication)</td>
                <td>시스템에 접근하려는 주체가 <b>누구인지 신원을 확인</b>하는 단계 (<b>로그인 시점까지</b>)</td>
                <td>ID / 패스워드 입력, OTP, 지문 인식</td>
              </tr>
              <tr>
                <td style="font-weight: 800; color: #34d399;">인가 (Authorization)</td>
                <td>신원이 확인된 사용자에게 <b>허가된 권한 범위만큼 자원을 사용하게 승인</b>하는 것 (<b>로그인 이후 권한 행사</b>)</td>
                <td>일반 사용자(읽기 전용) vs 관리자(수정/삭제 권한)</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 10px; font-size: 13px;">
            📌 <b>인증의 4대 팩터:</b>
            <span class="kw-blue">지식 (아는 것: 패스워드)</span>,
            <span class="kw-blue">소유 (가진 것: OTP/스마트카드)</span>,
            <span class="kw-blue">생체 (고유한 것: 지문/홍채)</span>,
            <span class="kw-blue">위치 (Location: 사내 IP 등)</span>
          </div>

          <div class="callout info" style="margin-top: 10px;">
            <div class="callout-title">📌 세션 (Session) 관리 & 타임아웃</div>
            세션은 <b>이미 인증이 완료된 상태</b>를 서버가 기억하여 연속성을 유지하는 메커니즘. 장시간 미사용 시 세션을 자동 만료시키는 <b>세션 타임아웃(재인증 요구)</b>을 적용해야 자리 비움 시 세션 탈취 및 계정 도용을 방지할 수 있음.
          </div>
        </div>

        <!-- 접근 제어 4대 모델 -->
        <div class="concept-card" style="border: 2px solid var(--accent-blue);">
          <div class="concept-card-header">
            <h2 class="concept-card-title">
              <span>2. 접근 제어(Access Control) 4대 모델</span>
              <span class="badge badge-red">★초특급 강조 / 서술형 1순위</span>
            </h2>
          </div>

          <div class="grid-2col">
            <div class="concept-card" style="border-left: 5px solid #ef4444;">
              <h3 style="font-size: 14.5px; font-weight: 900; color: #f87171; margin-bottom: 6px;">1) MAC (Mandatory, 강제적 접근 제어)</h3>
              <ul class="detail-list">
                <li><b>중앙 관리자</b>가 부여한 보안 레이블(보안 등급)에 따라 시스템이 일괄 통제.</li>
                <li>일반 사용자는 권한을 임의로 변경할 수 없음. (규칙 기반)</li>
                <li><b>특징:</b> 보안성 극대화, 유연성 최하. (군사, 국방, 정부 기관)</li>
              </ul>
            </div>

            <div class="concept-card" style="border-left: 5px solid #3b82f6;">
              <h3 style="font-size: 14.5px; font-weight: 900; color: #60a5fa; margin-bottom: 6px;">2) DAC (Discretionary, 임의적 접근 제어)</h3>
              <ul class="detail-list">
                <li><b>데이터 소유자(Owner)</b>가 타인의 접근 권한을 <b>자신의 재량으로 부여/회수</b>.</li>
                <li>신분(ID) 기반 접근 제어.</li>
                <li><b>특징:</b> 유연성이 높으나 소유자의 설정 실수 시 전체 보안 취약.</li>
              </ul>
            </div>

            <div class="concept-card" style="border-left: 5px solid #10b981;">
              <h3 style="font-size: 14.5px; font-weight: 900; color: #34d399; margin-bottom: 6px;">3) RBAC (Role-Based, 역할 기반 접근 제어)</h3>
              <ul class="detail-list">
                <li>사용자의 직책이나 <b>역할(Role)</b>에 권한을 할당하고 사용자를 역할에 매핑.</li>
                <li><b>예시:</b> 대학 포털 (교수 역할: 성적 입력 / 학생 역할: 성적 조회).</li>
                <li><b>특징:</b> 인사 이동/퇴사 시 관리가 수월하여 대규모 기업 환경에 최적.</li>
              </ul>
            </div>

            <div class="concept-card" style="border-left: 5px solid #8b5cf6;">
              <h3 style="font-size: 14.5px; font-weight: 900; color: #a78bfa; margin-bottom: 6px;">4) ABAC (Attribute-Based, 속성 기반 접근 제어)</h3>
              <ul class="detail-list">
                <li>주체 속성(Role) + <b>환경/맥락 조건(Context: 접속 시간, 접속 위치/IP, 디바이스)</b>을 동적 평가.</li>
                <li><b>예시:</b> "수업 중인 교수가 평소 서울이 아닌 부산 IP에서 갑자기 로그인하면 차단".</li>
                <li><b>특징:</b> 제로 트러스트(Zero Trust) 보안 시스템의 <b>최종 지향점</b>.</li>
              </ul>
            </div>
          </div>

          <div style="margin-top: 10px; font-size: 12.5px; background: var(--bg-input); padding: 8px 12px; border-radius: 6px;">
            🛡️ <b>최소 권한의 원칙 (Principle of Least Privilege):</b> 사용자에게 업무 수행에 필수적인 <b>최소한의 권한만을 부여</b>하여 오남용 피해를 최소화하는 원칙.
          </div>
        </div>

        <!-- AAA & SBOM -->
        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">3. AAA 모델 & SBOM (소프트웨어 자재명세서)</h2>
            <span class="badge badge-amber">단답형 스포일러</span>
          </div>

          <div class="grid-2col">
            <div>
              <h4 style="font-size: 13.5px; font-weight: 800; margin-bottom: 6px; color: #60a5fa;">🛡️ AAA 트리오 모델</h4>
              <ul class="detail-list">
                <li><b>1. Authentication (인증):</b> 신원 확인 (Who are you?)</li>
                <li><b>2. Authorization (인가):</b> 접근 권한 부여 (What can you do?)</li>
                <li><b>3. Accounting (계정 관리/과금/감사):</b> 시스템 사용 내역 기록 및 감사 추적 (What did you do?)</li>
              </ul>
              <div style="margin-top: 8px; font-size: 12.5px;">
                🐧 <b>리눅스 권한 체계:</b> <span class="formula">chmod 755 test.sh</span> → 소유자: 7(rwx), 그룹: 5(r-x), 기타: 5(r-x)
              </div>
            </div>

            <div style="background: var(--bg-input); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
              <h4 style="font-size: 13.5px; font-weight: 800; margin-bottom: 6px; color: #fbbf24;">📦 SBOM (Software Bill of Materials)</h4>
              <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">
                공급망 보안(Supply Chain Security)을 위해 소프트웨어를 구성하는 오픈소스, 라이브러리 부품, 개발사, 버전, 라이선스를 상세히 나열한 <b>디지털 소프트웨어 자재 명세서</b>.
              </p>
              <div class="kw-ans" style="display: block; text-align: center; font-size: 13px;">
                정답 키워드: SBOM (Software Bill of Materials)
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: 3주차. 네트워크 보안 -->
      <section id="sec-w3" class="concept-section">
        <div class="section-banner">
          <div class="section-banner-title"><span>🌐 3주차. 네트워크 보안</span></div>
          <span>DoS 4대 공격 & 스니핑 vs 스푸핑 & RADIUS</span>
        </div>

        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">1. 서비스 거부 공격 (DoS / DDoS) 핵심 4대 유형</h2>
            <span class="badge badge-amber">패킷 판별 단답</span>
          </div>

          <table class="custom-table">
            <thead>
              <tr><th style="width: 22%;">공격 명칭</th><th style="width: 48%;">핵심 동작 원리 (패킷 캡처 판별 기준)</th><th>공격 효과 / 취약점</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight: 800; color: #f87171;">Land Attack</td>
                <td><b>출발지(Source) IP == 목적지(Destination) IP</b> 동일 조작 전송</td>
                <td>수신 대상이 자기 자신에게 무한 응답(루프백) 반복하여 CPU 100% 다운</td>
              </tr>
              <tr>
                <td style="font-weight: 800; color: #f87171;">TearDrop</td>
                <td>패킷 분할 단편화(Fragmentation) 시 <b>오프셋(Offset) 값 의도적 중첩 조작</b></td>
                <td>수신 측에서 패킷 재조합 시 메모리 참조 오류로 커널 크래시(BSOD)</td>
              </tr>
              <tr>
                <td style="font-weight: 800; color: #f87171;">Ping of Death</td>
                <td>규격(65,535 바이트)보다 훨씬 큰 <b>대용량 ICMP 에코 패킷</b> 분할 전송</td>
                <td>수신 측 재조합 버퍼 메모리 오버플로우 유발</td>
              </tr>
              <tr>
                <td style="font-weight: 800; color: #f87171;">SYN Flooding</td>
                <td>TCP 3-Way Handshake에서 <b>대량의 SYN 발송 후 ACK 미응답</b></td>
                <td>서버의 <b>백로그 큐(Backlog Queue)</b>를 가득 채워 신규 연결 거부</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">2. 스니핑 (Sniffing) vs 스푸핑 (Spoofing)</h2>
            <span class="badge badge-purple">서술형 대비</span>
          </div>

          <div class="grid-2col">
            <div class="concept-card" style="border-left: 4px solid #06b6d4;">
              <h3 style="font-size: 14px; font-weight: 800; color: #22d3ee; margin-bottom: 6px;">📡 스니핑 (Sniffing, 수동적 도청)</h3>
              <ul class="detail-list">
                <li>네트워크를 통과하는 패킷을 몰래 훔쳐보는 <b>수동적(Passive) 도청</b>.</li>
                <li><b>핵심 기법:</b> 네트워크 카드를 <span class="kw-ans">프로미스큐어스 모드 (Promiscuous Mode, 무차별 모드)</span>로 전환하여 타인 패킷까지 무차별 수신.</li>
                <li><b>탐지/대응:</b> <span class="kw-blue">허니팟 (Honey Pot, 미끼 꿀단지)</span>에 가짜 계정 데이터를 흘려 감시.</li>
              </ul>
            </div>

            <div class="concept-card" style="border-left: 4px solid #f43f5e;">
              <h3 style="font-size: 14px; font-weight: 800; color: #fb7185; margin-bottom: 6px;">🎭 스푸핑 (Spoofing, 능동적 사칭)</h3>
              <ul class="detail-list">
                <li>자신의 신원을 위조하여 시스템을 속이는 <b>능동적(Active) 공격</b>.</li>
                <li><b>ARP 스푸핑:</b> MAC 주소를 라우터인 것처럼 속여 패킷 탈취 (대응: <span class="kw-ans">Static ARP 정적 고정</span>).</li>
                <li><b>IP 스푸핑:</b> 신뢰 관계 호스트의 IP를 사칭.</li>
                <li><b>DNS 스푸핑:</b> 가짜 IP 응답을 먼저 전송하여 피싱 사이트 유도.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">3. 세션 하이재킹 & 무선랜 RADIUS</h2>
            <span class="badge badge-amber">교수님 직전 스포</span>
          </div>

          <div class="grid-2col">
            <div class="concept-card" style="border-left: 4px solid var(--accent-purple);">
              <h4 style="font-size: 13.5px; font-weight: 800; color: #a78bfa; margin-bottom: 6px;">🕵️ 세션 하이재킹과 SSL 가시성</h4>
              <p style="font-size: 13px;">이미 인증된 세션에 끼어들어 권한을 가로채는 공격.</p>
              <div class="callout info" style="margin-top: 6px;">
                <b>💡 [교수님 스포] 합법적 보안 활용:</b> 사내 기밀 유출 감시를 위해 트래픽을 중간에서 가로채 복호화/분석 후 재전송하는 <span class="kw-ans">SSL 가시성 (SSL Visibility) 확보</span> 기술에 동일 원리가 사용됨.
              </div>
            </div>

            <div class="concept-card" style="border-left: 4px solid var(--accent-green);">
              <h4 style="font-size: 13.5px; font-weight: 800; color: #34d399; margin-bottom: 6px;">📶 무선랜: WPA-Enterprise & RADIUS</h4>
              <ul class="detail-list">
                <li><b>WPA-PSK:</b> 개인용 사전 공유 키 방식.</li>
                <li><b>WPA-Enterprise:</b> 802.1x + <span class="kw-ans">RADIUS 서버</span> 연동.</li>
              </ul>
              <div class="callout success" style="margin-top: 6px;">
                <b>💡 [교수님 스포] RADIUS를 쓰는 본질적 이유:</b> 단순 인증뿐만 아니라 권한 부여(인가)와 네트워크 사용 기록(어카운팅)까지 모두 수행하는 <span class="kw-ans">AAA 서버</span>이기 때문.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: 4주차. 웹 보안 -->
      <section id="sec-w4" class="concept-section">
        <div class="section-banner">
          <div class="section-banner-title"><span>🌐 4주차. 웹 보안</span></div>
          <span>HTTP 상태 코드 & 침투 4단계 & SQL Injection</span>
        </div>

        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">1. HTTP 응답 상태 코드 (Status Code)</h2>
            <span class="badge badge-amber">정처기 실기 단골 / 교수님 직접 강조</span>
          </div>

          <div class="grid-2col">
            <table class="custom-table">
              <thead><tr><th style="width: 35%;">상태 코드</th><th>의미 및 설명</th></tr></thead>
              <tbody>
                <tr><td><span class="kw-ans">200 OK</span></td><td><b>요청 성공</b> 및 정상 응답 반환</td></tr>
                <tr><td><span class="kw-red">400 Bad Request</span></td><td>클라이언트의 잘못된 문법/요청 오류</td></tr>
                <tr><td><span class="kw-red">401 Unauthorized</span></td><td><b>인증 필요</b> (로그인되지 않은 미인증 상태)</td></tr>
              </tbody>
            </table>

            <table class="custom-table">
              <thead><tr><th style="width: 35%;">상태 코드</th><th>의미 및 설명</th></tr></thead>
              <tbody>
                <tr><td><span class="kw-red">403 Forbidden</span></td><td><b>접근 권한 없음</b> (로그인은 되었으나 인가 거부)</td></tr>
                <tr><td><span class="kw-red">404 Not Found</span></td><td>요청한 자원(URL)이 서버에 존재하지 않음</td></tr>
                <tr><td><span class="kw-red">500 Internal Server</span></td><td>서버 내부 프로그램 로직 오류</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">2. 해킹 침투 일반 4단계 & SQL Injection</h2>
            <span class="badge badge-amber">단답형 핵심</span>
          </div>

          <div style="font-weight: 800; font-size: 13px; margin-bottom: 6px;">🎯 해킹 침투 일반 4단계 프로세스:</div>
          <div class="flow-steps">
            <div class="flow-item"><span class="step-num">1</span> 대상 선정</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-item"><span class="step-num">2</span> 정보 수집 (Recon)</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-item"><span class="step-num">3</span> 취약점 분석</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-item" style="border-color: #ef4444;"><span class="step-num">4</span> 침투 및 공격 (Exploit)</div>
          </div>

          <div class="concept-card" style="background: var(--bg-input); margin-top: 10px;">
            <h4 style="font-size: 13.5px; font-weight: 800; color: #fbbf24; margin-bottom: 4px;">💉 SQL Injection 기본 원리</h4>
            <p style="font-size: 13px;">
              사용자 입력값에 대한 검증 부재를 악용하여, 입력창에 <span class="formula">' OR '1'='1</span> 구문을 삽입함으로써 데이터베이스의 WHERE 절을 <b>무조건 참(True)</b>으로 만들어 비밀번호 일치 검증을 우회하고 로그인에 성공하는 공격.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 7: 5주차. 프로그램/코드 보안 & 악성코드 -->
      <section id="sec-w5" class="concept-section">
        <div class="section-banner">
          <div class="section-banner-title"><span>🦠 5주차. 코드 보안 & 악성코드</span></div>
          <span>정적 vs 동적 분석 & 악성코드 4종 분류</span>
        </div>

        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">1. 버퍼 오버플로우 & 악성코드 4대 분류</h2>
            <span class="badge badge-amber">단답형 필수</span>
          </div>

          <div style="font-size: 13px; margin-bottom: 10px; background: var(--bg-input); padding: 8px 12px; border-radius: 6px;">
            💥 <b>버퍼 오버플로우 (Buffer Overflow):</b> 할당된 버퍼 메모리 크기를 초과하는 데이터를 주입하여 반환 주소(RET)를 덮어쓰고 공격자 코드를 실행시키는 취약점.
          </div>

          <table class="custom-table">
            <thead><tr><th style="width: 22%;">유형</th><th style="width: 32%;">숙주 필요 여부 및 전파 방식</th><th>핵심 동작 특징</th></tr></thead>
            <tbody>
              <tr><td style="font-weight: 800; color: #f87171;">바이러스 (Virus)</td><td><span class="kw-red">숙주 파일 반드시 필요</span></td><td>정상 파일에 기생하며 실행 시 감염 전파</td></tr>
              <tr><td style="font-weight: 800; color: #f87171;">웜 (Worm)</td><td><span class="kw-ans">숙주 파일 불필요 (독립 실행)</span></td><td>네트워크를 통해 <b>스스로 복제</b>하여 급속 전파</td></tr>
              <tr><td style="font-weight: 800; color: #f87171;">트로이 목마</td><td>독립 프로그램 (자체 복제 없음)</td><td>정상 프로그램으로 위장하여 침투 후 악행</td></tr>
              <tr><td style="font-weight: 800; color: #f87171;">PUP (애드웨어 등)</td><td>동의 기반 설치</td><td>모호한 동의를 받아 함께 설치되어 광고 노출</td></tr>
            </tbody>
          </table>
        </div>

        <div class="concept-card" style="border: 2px solid var(--accent-purple);">
          <div class="concept-card-header">
            <h2 class="concept-card-title">
              <span>2. 정적 분석 (Static) vs 동적 분석 (Dynamic)</span>
              <span class="badge badge-red">★서술형 1순위 (출제 확정급)</span>
            </h2>
          </div>

          <table class="custom-table">
            <thead><tr><th style="width: 18%;">구분</th><th style="width: 41%;">정적 분석 (Static Analysis)</th><th style="width: 41%;">동적 분석 (Dynamic Analysis)</th></tr></thead>
            <tbody>
              <tr>
                <td style="font-weight: 800;">분석 방법</td>
                <td>파일을 <b>실행하지 않고</b> 역공학(디스어셈블러), 해시, 코드 구조 분석</td>
                <td>가상 머신(샌드박스) 등 <b>격리 환경에서 직접 실행</b>하며 행위 관찰</td>
              </tr>
              <tr>
                <td style="font-weight: 800; color: #34d399;">핵심 장점</td>
                <td>1. 감염 위험 없이 <b>안전함</b>.<br>2. 전체적인 로직 구조와 모든 분기 경로 포괄 파악 가능.</td>
                <td>1. 난독화/패킹이 되어 있어도 <b>실제 악성 행위를 직관적 즉시 확인</b>.<br>2. 역공학 지식 부족해도 빠른 분석 가능.</td>
              </tr>
              <tr>
                <td style="font-weight: 800; color: #f87171;">핵심 단점</td>
                <td>패킹이나 난독화 적용 시 코드 역공학 해석 극도로 난항.</td>
                <td>1. 안티 샌드박스(가상환경 탐지 회피) 기술 적용 시 행위 은닉.<br>2. 분석 환경 오염 위험 및 특정 조건 미충족 시 악행 미발현.</td>
              </tr>
            </tbody>
          </table>
          <div class="callout quote" style="margin-top: 10px;">
            🗣️ 교수님 코멘트: "수업 시간에 칠판에 써준 거 기억나? 정적 분석 방법 vs 동적 분석 방법의 확실한 차이점, 장단점 당연히 알고 있어야 된다!"
          </div>
        </div>
      </section>

      <!-- SECTION 8: 6주차. 암호학 -->
      <section id="sec-w6" class="concept-section">
        <div class="section-banner">
          <div class="section-banner-title"><span>🔐 6주차. 암호학 (가장 높은 출제 비중)</span></div>
          <span>플레이페어 / DES / AES / RSA / 해시 함수</span>
        </div>

        <!-- 플레이페어 -->
        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">1. 플레이페어 (Playfair) 5×5 암호 3대 치환 규칙</h2>
            <span class="badge badge-amber">단답 / 서술형</span>
          </div>

          <div class="grid-2col">
            <div class="concept-card" style="border-left: 4px solid var(--accent-blue);">
              <h4 style="font-size: 13.5px; font-weight: 800; color: #60a5fa; margin-bottom: 4px;">규칙 1 & 2 (같은 행 / 같은 열)</h4>
              <ul class="detail-list">
                <li><b>1. 같은 행(가로줄):</b> 각각 바로 <span class="kw-ans">오른쪽(+1)</span> 글자로 치환</li>
                <li><b>2. 같은 열(세로줄):</b> 각각 바로 <span class="kw-ans">아래쪽(+1)</span> 글자로 치환</li>
              </ul>
            </div>

            <div class="concept-card" style="border-left: 4px solid var(--accent-green);">
              <h4 style="font-size: 13.5px; font-weight: 800; color: #34d399; margin-bottom: 4px;">규칙 3 (다른 행과 열)</h4>
              <ul class="detail-list">
                <li><b>3. 행과 열이 모두 다른 경우:</b> 두 글자가 사각형을 형성하여 같은 행의 <span class="kw-ans">대각선 모서리 (상대방 열)</span> 글자로 치환</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- DES -->
        <div class="concept-card" style="border: 2px solid var(--accent-amber);">
          <div class="concept-card-header">
            <h2 class="concept-card-title">
              <span>2. 대칭키 암호: DES (Data Encryption Standard)</span>
              <span class="badge badge-red">단답형 최다 스포일러</span>
            </h2>
          </div>

          <table class="custom-table">
            <thead><tr><th style="width: 28%;">핵심 출제 포인트</th><th>상세 원리 및 시험 직결 정답</th></tr></thead>
            <tbody>
              <tr><td style="font-weight: 800; color: #60a5fa;">기본 구조</td><td><b>페이스텔 (Feistel) 구조</b> (64비트 평문을 좌우 32비트씩 반분하여 16라운드 반복)</td></tr>
              <tr><td style="font-weight: 800; color: #60a5fa;">확장 P-Box (32→48비트)</td><td>32비트를 48비트로 확장하는 이유 → <span class="kw-ans">키 길이(48비트)와 크기를 맞추어 XOR 연산하기 위해</span></td></tr>
              <tr>
                <td style="font-weight: 800; color: #60a5fa;">S-Box (압축 메커니즘)</td>
                <td>
                  총 8개의 S-Box 통과 (48비트 → 32비트 압축, 각 6비트 입력 → 4비트 출력)<br>
                  💡 <b>[압축 원리]:</b> <span class="kw-ans">앞/뒤 1비트씩(총 2비트)은 행(Row), 가운데 4비트는 열(Column)</span> 참조
                </td>
              </tr>
              <tr><td style="font-weight: 800; color: #60a5fa;">마지막 16라운드 특징</td><td>마지막 라운드 종료 후에는 좌우를 맞바꾸는 <span class="kw-ans">좌우 스왑 (순서 교환 / 믹서)을 생략</span>하고 그대로 병합</td></tr>
              <tr><td style="font-weight: 800; color: #60a5fa;">라운드 키 시프트 횟수</td><td><b>"10번째 라운드 키 생성 시 비트 시프트는 몇 번?"</b> → <span class="kw-ans">2번 (2비트)</span> *(1, 2, 9, 16R만 1비트)*</td></tr>
              <tr><td style="font-weight: 800; color: #60a5fa;">트리플 DES (3-DES)</td><td>필요한 키의 개수는 몇 개인가? → <span class="kw-ans">2개</span> (K₁ 암호화 → K₂ 복호화 → K₁ 재암호화)</td></tr>
            </tbody>
          </table>
        </div>

        <!-- AES -->
        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">3. 대칭키 암호: AES (Advanced Encryption Standard)</h2>
            <span class="badge badge-amber">단답형 필수</span>
          </div>

          <div style="font-weight: 800; font-size: 13.5px; margin-bottom: 8px;">🔄 [교수님 스포] AES 라운드별 4가지 기본 동작 순서:</div>
          <div class="flow-steps" style="margin-bottom: 12px;">
            <div class="flow-item"><span class="step-num">1</span> SubBytes (S-Box 비선형 치환)</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-item"><span class="step-num">2</span> ShiftRows (행 순환 이동)</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-item"><span class="step-num">3</span> MixColumns (열 행렬 곱셈)</div>
            <span class="flow-arrow">➔</span>
            <div class="flow-item"><span class="step-num">4</span> AddRoundKey (키 XOR)</div>
          </div>

          <div style="font-size: 12.5px; background: var(--bg-input); padding: 8px 12px; border-radius: 6px;">
            🔑 <b>AES 키 확장(Key Expansion) 3대 핵심 연산:</b> <span class="kw-blue">RotWord (워드 순환)</span>, <span class="kw-blue">SubWord (S-Box 치환)</span>, <span class="kw-blue">Rcon (라운드 상수 XOR)</span>
          </div>
        </div>

        <!-- RSA & 부인 방지 -->
        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">4. 공개키 암호: RSA & 부인 방지 (Non-repudiation)</h2>
            <span class="badge badge-purple">서술형 대비</span>
          </div>

          <div class="grid-2col">
            <div class="concept-card" style="background: var(--bg-input);">
              <h4 style="font-size: 13.5px; font-weight: 800; color: #60a5fa; margin-bottom: 6px;">📐 RSA 수학적 생성 원리</h4>
              <ul class="detail-list" style="font-size: 13px;">
                <li>큰 두 소수 <span class="formula">p, q</span> 선정 → <span class="formula">n = p × q</span></li>
                <li>오일러 피 함수: <span class="formula">φ(n) = (p - 1)(q - 1)</span></li>
                <li><span class="formula">φ(n)</span>과 서로소인 공개키 지수 <span class="formula">e</span> 선정</li>
                <li>개인키 지수 <span class="formula">d</span> 계산: <span class="formula">e × d ≡ 1 (mod φ(n))</span></li>
                <li><b>공개키:</b> <span class="kw-ans">(e, n)</span> / <b>개인키:</b> <span class="kw-ans">(d, n)</span></li>
              </ul>
            </div>

            <div class="concept-card" style="border-left: 4px solid var(--accent-green);">
              <h4 style="font-size: 13.5px; font-weight: 800; color: #34d399; margin-bottom: 6px;">✍️ [서술형] 부인 방지 전자서명 메커니즘</h4>
              <ol style="padding-left: 18px; font-size: 12.5px; line-height: 1.6;">
                <li>송신자가 메시지를 <b>자신의 개인키(Private Key)로 암호화(전자서명)</b>하여 전송.</li>
                <li>수신자는 송신자의 <b>공개키(Public Key)로 복호화</b> 시도.</li>
                <li>복호화 성공 시 오직 <b>송신자의 개인키로만 작성되었음이 수학적으로 입증</b>되므로, 사후 발송 사실을 부인(발뺌)할 수 없음.</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- 해시 함수 -->
        <div class="concept-card">
          <div class="concept-card-header">
            <h2 class="concept-card-title">5. 해시 함수 (Hash Function) 3대 속성</h2>
            <span class="badge badge-amber">단답형 3문항 세트</span>
          </div>

          <div class="grid-2col">
            <div class="concept-card" style="background: var(--bg-input);">
              <h4 style="font-size: 13.5px; font-weight: 800; color: #fbbf24; margin-bottom: 4px;">1) 핵심 정의: 일방향 함수 (One-Way)</h4>
              <p style="font-size: 13px;">x → H(x) 계산은 극도로 빠르나, 결과값 H(x)에서 원본 x를 역산하는 것은 불가능한 성질 (<b>역상 저항성</b>).</p>
            </div>

            <div class="concept-card" style="background: var(--bg-input);">
              <h4 style="font-size: 13.5px; font-weight: 800; color: #34d399; margin-bottom: 4px;">2) 달성 목적: 무결성 (Integrity)</h4>
              <p style="font-size: 13px;">데이터 전송 중 위·변조나 손상이 발생했는지 원본과 수신 데이터의 해시값을 대조하여 검증.</p>
            </div>
          </div>

          <div class="callout info" style="margin-top: 10px;">
            <div class="callout-title">❄️ 눈사태 효과 (Avalanche Effect)</div>
            입력 데이터의 단 <b>1비트(마침표 하나, 글자 한 자)</b>만 달라져도 최종 출력되는 해시 결과값은 완전히 다른 무작위 값으로 대폭 뒤바뀌는 성질.
          </div>
        </div>
      </section>
    `
  };

window.EXAM_DATABASE.security = {
    id: "security",
    title: "🛡️ 정보보호개론 (박정수 교수님)",
    exams: [
      {
        id: "exam1",
        name: "제1회 족집게 스포일러 모의고사",
        tag: "출제 100% 스포",
        desc: "교수님이 총정리 강의에서 '단답형 수준은 이런 것', '13문제 나온다'고 직접 콕 짚어준 핵심 13문항입니다.",
        questions: [
          {
            id: 1, type: "short", score: 5, origin: "1주차 CIA 3대요소",
            text: "현대 정보보안 시스템에서 비인가자의 도청이나 무단 열람을 방지하기 위해 AES 또는 DES와 같은 암호화 알고리즘을 적용하여 달성하고자 하는 정보보안 3대 요소(CIA) 중 핵심 성질은 무엇인가?",
            placeholder: "답안 입력 (예: 기밀성)",
            answers: ["기밀성", "confidentiality"],
            explanation: "암호화(AES, DES)는 비인가자의 열람을 막는 '기밀성'을 보장하며, 해시 함수는 데이터 위변조를 막는 '무결성'을 보장합니다.",
            quote: "🗣️ 교수님 코멘트: '내가 이렇게 문제를 낼 수 있는 거야. AES를 활용한다. 보안 3대 요소 중 어떤 거를 달성하고 싶어서 그러냐? → 기밀성!'"
          },
          {
            id: 2, type: "short", score: 5, origin: "2주차 접근제어 모델",
            text: "시스템 접근 제어 4대 모델(MAC, DAC, RBAC, ABAC) 중, 사용자의 역할(Role)뿐만 아니라 접속 시간, 접속 위치/IP, 디바이스 상태 등과 같은 환경 조건(Context)을 조합하여 동적으로 인가 권한을 제어하는 모델의 영문 약어는?",
            placeholder: "영문 약어 입력 (예: ABAC)",
            answers: ["abac"],
            explanation: "ABAC (Attribute-Based Access Control)는 속성(주체, 객체, 환경 컨텍스트)을 동적으로 평가하여 제로 트러스트 환경에 가장 부합합니다.",
            quote: "🗣️ 교수님 코멘트: '서울에서 로그인했는데 1분 뒤 부산 IP로 접속하면 차단해야겠지? 환경 조건까지 보는 게 ABAC야!'"
          },
          {
            id: 3, type: "short", score: 5, origin: "1주차 공급망 보안",
            text: "소프트웨어 공급망 공격(Supply Chain Attack)을 방어하기 위해, 오픈소스 라이브러리 및 외부 종속성 패키지의 버전과 라이선스 정보를 투명하게 기록해 둔 '소프트웨어 자재명세서'의 영문 공식 약어는?",
            placeholder: "영문 약어 입력 (예: SBOM)",
            answers: ["sbom"],
            explanation: "SBOM (Software Bill of Materials)은 소프트웨어를 구성하는 모든 부품과 오픈소스의 명세서로, 글로벌 의무화 추세입니다.",
            quote: "🗣️ 교수님 코멘트: '소프트웨어 공급망 보안에서 명세서 뭐라고 불렀지? SBOM! 꼭 기억해 둬!'"
          },
          {
            id: 4, type: "short", score: 5, origin: "3주차 네트워크 DoS",
            text: "공격자가 패킷을 생성할 때 출발지 IP(Source IP)와 목적지 IP(Destination IP)를 피해자의 IP로 동일하게 조작하여 전송함으로써, 피해자 서버가 자기 자신에게 무한 응답 루프를 돌며 자원을 고갈시키도록 만드는 DoS 공격의 명칭은?",
            placeholder: "공격 명칭 입력 (예: Land Attack)",
            answers: ["랜드공격", "landattack", "land", "랜드", "랜드 공격"],
            explanation: "출발지와 목적지 IP가 동일한 패킷을 보내 피해자 스스로 응답 루프백을 돌게 만드는 TCP 취약점 악용 공격입니다.",
            quote: "🗣️ 교수님 코멘트: '패킷 캡처해서 주면 어떤 공격인지 알아야 해. 출발지랑 목적지가 똑같네? 그럼 바로 랜드 공격이지!'"
          },
          {
            id: 5, type: "short", score: 5, origin: "3주차 무선 AP 보안",
            text: "무선 네트워크 보안(WPA2-Enterprise) 환경에서 개별 사용자마다 고유한 계정으로 중앙 집중식 인증(Authentication), 인가(Authorization), 과금/기록(Accounting)을 수행하기 위해 연동하는 전용 AAA 인증 서버의 명칭은?",
            placeholder: "서버 명칭 입력 (예: RADIUS)",
            answers: ["radius", "라디우스", "라디우스서버", "radius서버", "aaa", "aaa서버"],
            explanation: "엔터프라이즈 무선 보안은 고정 공유키(PSK) 대신 802.1X 중앙 RADIUS 서버를 통해 AAA 통합 관리를 수행합니다.",
            quote: "🗣️ 교수님 코멘트: '기업에서 왜 엔터프라이즈 모드를 쓸까? RADIUS 서버가 AAA 서버 역할을 해주니까 쓰는 거야!'"
          },
          {
            id: 6, type: "short", score: 5, origin: "4주차 HTTP 프로토콜",
            text: "클라이언트의 HTTP 요청이 웹 서버에 성공적으로 도달하여 정상적으로 처리되었을 때, 웹 서버가 클라이언트에게 회신하는 가장 대표적인 성공 상태 코드(Status Code) 및 메시지는?",
            placeholder: "상태 코드 입력 (예: 200 OK)",
            answers: ["200", "200ok", "200 ok"],
            explanation: "HTTP 200 OK는 서버가 클라이언트의 요청을 성공적으로 수행했음을 의미하는 표준 응답 코드입니다.",
            quote: "🗣️ 교수님 코멘트: '정상 처리 시 반환 코드 200 OK! 정처기 실기에도 나오는 아주 단골 문제야!'"
          },
          {
            id: 7, type: "short", score: 5, origin: "5주차 악성코드 분류",
            text: "정상 프로그램 파일(숙주 호스트)에 기생하여 감염되는 바이러스와 달리, 독자적으로 실행 가능한 완전한 프로그램으로서 네트워크를 통해 취약점을 찾아 스스로 복제하고 전파되는 악성코드의 명칭은?",
            placeholder: "악성코드 명칭 입력 (예: 웜)",
            answers: ["웜", "worm", "웜바이러스", "웜 바이러스"],
            explanation: "바이러스는 숙주 파일이 필요하지만, 웜(Worm)은 독자적으로 실행되며 네트워크를 통해 자가 복제(Self-Replication)하여 전파됩니다.",
            quote: "🗣️ 교수님 코멘트: '동작 방식에 따른 분류! 바이러스는 숙주가 필요하고, 웜은 혼자서 네트워크 타고 퍼져 나간다!'"
          },
          {
            id: 8, type: "short", score: 5, origin: "6주차 DES 라운드 키",
            text: "DES 암호화 알고리즘에서 마스터 키로부터 라운드 키를 생성할 때, 제10번째 라운드 키(K₁₀)를 생성하기 위해 좌우 28비트 레지스터에서 수행하는 순환 비트 시프트(Left Shift) 횟수는 몇 번인가?",
            placeholder: "시프트 횟수 입력 (예: 2번)",
            answers: ["2", "2번", "2비트", "2회", "두번", "두 번"],
            explanation: "DES 총 16라운드 중 1, 2, 9, 16번째 라운드만 1비트 좌측 순환 시프트이며, 나머지 12개 라운드(10번째 포함)는 모두 2비트 시프트입니다.",
            quote: "🗣️ 교수님 코멘트: '10번째 라운드 키 만들 때 시프트 몇 번 해야 돼? 2번이야! 1, 2, 9, 16만 1번이고 나머진 다 2번 시프트야!'"
          },
          {
            id: 9, type: "short", score: 5, origin: "6주차 3-DES 구조",
            text: "트리플 DES (3-DES)의 E-D-E (E(K₁) → D(K₂) → E(K₁)) 구조에서, 단일 DES 레거시 시스템과의 하위 호환성을 제공하면서 실무에서 널리 활용되는 2-Key 3DES 모드에서 필요한 암호화 키의 최소 개수는 몇 개인가?",
            placeholder: "키 개수 입력 (예: 2개)",
            answers: ["2", "2개", "두개", "두 개"],
            explanation: "3-DES는 3번의 암복호화 연산을 거치지만 키는 K₁과 K₂ 총 2개만 사용합니다 (K₁ 암호화 → K₂ 복호화 → K₁ 재암호화).",
            quote: "🗣️ 교수님 코멘트: '트리플 데스에 암호화 키 몇 개 필요해? 트리플이지만 2개 필요해! 첫 번째 거 쓰고 두 번째 거 쓰고 다시 첫 번째 거 써서 2개!'"
          },
          {
            id: 10, type: "short", score: 5, origin: "6주차 해시 함수 특성",
            text: "입력 데이터 x로부터 해시값 H(x)를 계산하는 것은 극도로 빠르지만, 결과값 H(x)로부터 원본 데이터 x를 역산하는 것은 계산상 불가능한 해시 함수의 수학적 특성을 한마디로 무엇이라 부르는가?",
            placeholder: "특성 명칭 입력 (예: 일방향 함수)",
            answers: ["일방향함수", "일방향성", "onewayfunction", "one-wayfunction", "단방향함수", "일방향 함수", "단방향 함수", "역상저항성"],
            explanation: "해시 함수는 입력으로부터 결과를 구하기는 쉽지만 결과로부터 입력을 복원할 수 없는 일방향 함수(One-Way Function)입니다.",
            quote: "🗣️ 교수님 코멘트: '해시를 딱 한마디로 정의하면 뭐야? 원 웨이 펑션! 일방향 함수다!'"
          },
          {
            id: 11, type: "essay", score: 15, origin: "5주차 악성코드 분석 기법 ★서술형 1순위",
            text: "[서술형 15점] 악성코드 분석 방법인 정적 분석(Static Analysis)과 동적 분석(Dynamic Analysis)에 대하여 다음 세 가지 요소를 포함하여 구체적으로 비교 서술하시오.\n① 두 분석 기법의 개념 및 분석 방법의 근본적 차이점 (5점)\n② 정적 분석의 핵심 장점과 단점 (5점)\n③ 동적 분석의 핵심 장점과 단점 (5점)",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["실행하지 않고", "역공학", "디스어셈블", "가상머신", "샌드박스", "난독화", "패킹", "안티 샌드박스", "오염"],
            rubric: [
              { item: "1. 분석 방법 차이점", desc: "정적(실행 X, 역공학) vs 동적(실행 O, 행위 관찰) 명확히 기재 시 5점" },
              { item: "2. 정적 분석 장단점", desc: "안전함/전체구조(장점) + 패킹/난독화 취약(단점) 기재 시 5점" },
              { item: "3. 동적 분석 장단점", desc: "실제행위 직관확인(장점) + 샌드박스 회피/오염위험(단점) 기재 시 5점" }
            ],
            explanation: "• 정적 분석: 대상 파일을 실행하지 않고 디스어셈블러(IDA 등)를 통해 역공학, 시그니처, 코드 구조를 분석함. 장점은 감염 위험 없이 안전하고 모든 분기 경로를 포괄 파악 가능함. 단점은 패킹/난독화 시 코드 해석 난항.<br>• 동적 분석: 가상 머신(샌드박스) 환경에서 직접 실행하여 파일/레지스트리/트래픽 변화를 관찰함. 장점은 패킹되어 있어도 실제 행위를 직관적으로 즉시 확인 가능함. 단점은 안티 샌드박스 탐지 회피 시 악행을 은닉할 수 있고 환경 오염 위험이 있음.",
            quote: "🗣️ 교수님 코멘트: '수업 시간에 칠판에 써준 거 기억나? 정적 분석 vs 동적 분석의 확실한 차이점, 장단점 당연히 알고 있어야 된다!'"
          },
          {
            id: 12, type: "essay", score: 15, origin: "1주차 보안 3대 요소 트레이드오프",
            text: "[서술형 15점] 정보보안 3대 요소(기밀성, 무결성, 가용성) 관점에서, 시스템의 보안 강도를 높이기 위해 로그인 인증 패턴을 6~7단계로 과도하게 적용할 때 발생하는 '보안과 가용성의 트레이드오프' 현상을 설명하고, 바람직한 정보보안 시스템 설계 방향을 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["가용성 저하", "트레이드오프", "상충", "불편", "병목", "균형", "Balance", "적응형"],
            rubric: [
              { item: "1. 트레이드오프 현상 규명", desc: "인증 과다 시 기밀성 상승하나 가용성 치명적 저하 논리 기재 시 8점" },
              { item: "2. 바람직한 설계 방향", desc: "세 요소의 균형(Balance) 및 가용성 고려한 적응형 정책 제시 시 7점" }
            ],
            explanation: "• 트레이드오프 설명: 인증 절차를 6~7단계로 과도하게 늘리면 비인가자의 접근을 차단하여 기밀성은 향상되지만, 정상 인가 사용자가 서비스를 이용하기 극도로 불편해지고 중간 필터 마비 시 전체 접속이 차단되어 가용성(Availability)이 치명적으로 저하됨.<br>• 설계 방향: 보안성만을 일방적으로 추구해서는 안 되며, 기밀성·무결성·가용성 세 요소가 최적의 균형(Balance)을 이루도록 설계해야 함. 평상시에는 간소화된 인증으로 가용성을 보장하고, 이상 징후 발생 시에만 추가 인증을 요구하는 적응형 보안 정책이 권장됨.",
            quote: "🗣️ 교수님 코멘트: '로그인 패턴을 6~7개 만들어 놓으면 뚫릴 일은 없겠지만 가용성이 떨어져. 정보보안에서는 세 요소가 균형을 맞춰야 된다.'"
          },
          {
            id: 13, type: "essay", score: 20, origin: "6주차 RSA 전자서명 부인 방지 메커니즘",
            text: "[서술형 20점] RSA 공개키 암호 알고리즘의 비대칭 키(개인키와 공개키) 메커니즘을 기반으로, 송신자가 전송한 전자 문서에 대해 사후에 발뺌할 수 없도록 만드는 '부인 방지(Non-repudiation)'의 암호화 및 복호화 검증 과정을 단계별로 서술하고, 왜 위조가 불가능한지 그 논리적 근거를 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["송신자 개인키", "암호화", "전자서명", "송신자 공개키", "복호화", "유일성", "부인 방지", "위조 불가"],
            rubric: [
              { item: "1. 암호화 주체 및 키", desc: "송신자의 개인키로 암호화(전자서명 생성) 명시 시 6점" },
              { item: "2. 복호화 주체 및 키", desc: "송신자의 공개키로 복호화 및 서명 검증 명시 시 7점" },
              { item: "3. 부인방지 성립 근거", desc: "개인키 유일성으로 위조 불가 및 사후 발뺌 불가 논리 제시 시 7점" }
            ],
            explanation: "1. 서명 생성: 송신자는 메시지의 해시값을 전 세계에서 오직 본인만 소유한 비밀 '개인키(Private Key)'로 암호화(전자서명)하여 전송함.<br>2. 수신자 검증: 수신자는 널리 공개된 '송신자의 공개키(Public Key)'로 서명을 복호화함.<br>3. 부인방지 논리 근거: 송신자의 공개키로 정상 복호화되었다는 사실은 오직 그와 쌍을 이루는 송신자의 비밀 개인키로만 암호화되었음이 수학적으로 입증됨. 제3자는 개인키를 알 수 없어 위조가 불가능하므로, 송신자는 자신이 해당 문서를 작성·발송했음을 사후에 부인(발뺌)할 수 없음.",
            quote: "🗣️ 교수님 코멘트: '내가 내 개인키로 암호화한 걸 보내면 상대방이 내 공개키로 풀 수 있지? 풀리는 순간 발뺌할 수 없는 부인 방지가 된다!'"
          }
        ]
      },
      {
        id: "exam2",
        name: "제2회 미니서술형 심화 모의고사",
        tag: "미니서술 10 + 서술 3",
        desc: "교수님 언급: '딱 안 떨어지는 프로세스 기술형 단답 반영' (100점 만점 / 13문항: 미니서술 단답 10문항 + 서술형 심화 3문항)",
        questions: [
          {
            id: 1, type: "short", score: 5, origin: "1주차 CIA 연계 기술 원리",
            text: "정보보안 3대 요소(CIA) 중 '기밀성'과 '무결성'을 보장하기 위해 주로 적용되는 대표적인 정보보안 핵심 연계 기술을 각각 1가지씩 적으시오. (기밀성: 암호화 / 무결성: ?)",
            placeholder: "기밀성: 암호화, 무결성: 해시",
            answers: ["해시", "암호화 해시", "암호화, 해시", "암호화, 해시함수"],
            explanation: "기밀성은 암호화(AES/DES), 무결성은 해시 함수(Hash)를 적용합니다."
          },
          {
            id: 2, type: "short", score: 5, origin: "2주차 인증 vs 인가 시점",
            text: "사용자 인증(Authentication)과 인가(Authorization) 중, '로그인 시점까지' 신원을 확인하는 단계의 명칭은?",
            placeholder: "인증 또는 인가",
            answers: ["인증", "authentication"],
            explanation: "로그인 시점까지는 인증, 로그인 이후 권한 행사는 인가입니다."
          },
          {
            id: 3, type: "short", score: 5, origin: "2주차 세션 타임아웃",
            text: "사용자가 장시간 자리를 비웠을 때 세션 탈취 및 계정 도용을 방지하기 위해 일정 시간 미활동 시 세션을 만료시키는 보안 기능은?",
            placeholder: "보안 기능 명칭 입력",
            answers: ["세션타임아웃", "세션 타임아웃", "sessiontimeout"],
            explanation: "세션 타임아웃을 적용해 무단 계정 도용을 방지합니다."
          },
          {
            id: 4, type: "short", score: 5, origin: "3주차 스니핑 탐지",
            text: "네트워크 관리자가 스니핑 공격자나 해커를 유인하여 탐지하기 위해 구축해 두는 미끼 시스템의 명칭은?",
            placeholder: "명칭 입력 (예: 허니팟)",
            answers: ["허니팟", "honeypot", "꿀단지"],
            explanation: "허니팟은 가짜 취약 시스템으로 공격자를 유인하여 침투 경로와 기법을 분석합니다."
          },
          {
            id: 5, type: "short", score: 5, origin: "3주차 세션 하이재킹 보안용",
            text: "사내 직원의 암호화 트래픽을 통한 기밀 유출을 감시하기 위해 중간에서 트래픽을 복호화·분석하는 기술의 명칭은?",
            placeholder: "기술 명칭 입력",
            answers: ["ssl가시성", "ssl가시성확보", "sslvisibility", "ssl 가시성"],
            explanation: "세션 하이재킹과 동일한 원리를 합법적 내부 관제에 사용하는 기술입니다."
          },
          {
            id: 6, type: "short", score: 5, origin: "4주차 SQLi 원리",
            text: "SQL Injection에서 WHERE 절을 항상 참(True)으로 만들기 위해 작은따옴표와 함께 흔히 삽입하는 대표적인 논리 연산 구문은?",
            placeholder: "구문 입력 (예: OR '1'='1)",
            answers: ["or 1=1", "or '1'='1", "' or '1'='1", "or '1'='1'"],
            explanation: "WHERE 조건 뒤에 항상 참이 되는 항등 조건을 결합하여 인증을 무력화합니다."
          },
          {
            id: 7, type: "short", score: 5, origin: "6주차 AES 4대 라운드 동작",
            text: "AES 암호화의 한 라운드를 구성하는 4대 변환 과정(SubBytes, ShiftRows, MixColumns, AddRoundKey) 중, S-Box 테이블을 이용한 1바이트 비선형 치환 단계의 명칭은?",
            placeholder: "단계 영문 명칭 입력",
            answers: ["subbytes", "서브바이트"],
            explanation: "SubBytes 단계에서 S-Box를 이용한 바이트 단위 치환이 일어납니다."
          },
          {
            id: 8, type: "short", score: 5, origin: "6주차 DES 마지막 라운드",
            text: "DES 암호화 알고리즘의 마지막 제16라운드 종료 직후, 일반 라운드와 달리 생략되는 동작은 무엇인가?",
            placeholder: "생략 동작 명칭",
            answers: ["좌우스왑", "스왑생략", "순서교환생략", "좌우 스왑", "스왑", "swap", "믹서"],
            explanation: "16라운드 종료 후에는 좌우 블록을 맞바꾸는 스왑을 수행하지 않습니다."
          },
          {
            id: 9, type: "short", score: 5, origin: "6주차 플레이페어 규칙",
            text: "플레이페어 5×5 암호에서 두 글자가 '같은 행(가로줄)'에 위치할 때 암호화하는 방향은 (오른쪽 / 왼쪽 / 아래쪽 / 위쪽) 중 어디인가?",
            placeholder: "방향 입력",
            answers: ["오른쪽", "우측"],
            explanation: "같은 행에 있을 때는 각각 바로 오른쪽(+1) 글자로 치환합니다."
          },
          {
            id: 10, type: "short", score: 5, origin: "6주차 눈사태 효과",
            text: "해시 함수에서 입력값의 단 1비트만 달라져도 결과 해시값이 완전히 다른 값으로 뒤바뀌는 성질을 무엇이라 부르는가?",
            placeholder: "효과 명칭 입력",
            answers: ["눈사태효과", "눈사태 효과", "avalancheeffect", "avalanche"],
            explanation: "눈사태 효과 덕분에 단 1비트의 위변조도 100% 즉시 감지할 수 있습니다."
          },
          {
            id: 11, type: "essay", score: 15, origin: "2주차 RBAC vs ABAC 제로 트러스트",
            text: "[서술형 15점] 전통적 역할 기반 접근 제어(RBAC)와 속성 기반 접근 제어(ABAC)의 결정적 차이점을 비교하고, 교수님이 언급한 실제 이상 징후 로그인 차단 사례(예: 수업 중 타지역 IP 접속 차단)를 바탕으로 ABAC 모델이 왜 제로 트러스트 보안의 최종 지향점인지 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["RBAC 역할", "ABAC 환경 컨텍스트", "수업 시간", "타지역 IP 차단", "제로 트러스트", "동적 평가"],
            rubric: [
              { item: "1. RBAC vs ABAC 개념 차이", desc: "정적 역할 매핑 vs 동적 속성 및 환경 컨텍스트 평가 비교 시 5점" },
              { item: "2. 이상 징후 사례 분석", desc: "수업 중 타지역 IP 로그인 차단 메커니즘 설명 시 5점" },
              { item: "3. 제로 트러스트 지향점", desc: "상황 인지형 정밀 제어로 계정 탈취 실시간 방어 논리 제시 시 5점" }
            ],
            explanation: "RBAC는 사용자의 정적 역할에 고정 권한을 부여하므로 계정이 탈취되어도 정상 역할이면 차단하지 못함. 반면 ABAC는 접속 시간, 위치/IP, 디바이스 상태 등 환경 컨텍스트를 동적으로 평가하여 수업 중인 교수가 타지역 IP에서 접속 시 즉각 차단할 수 있어 제로 트러스트의 최종 지향점이 됨."
          },
          {
            id: 12, type: "essay", score: 15, origin: "3주차 DoS: 취약점 악용 vs 자원 고갈",
            text: "[서술형 15점] 서비스 거부(DoS) 공격의 2대 동작 원리인 '시스템 취약점 오동작 유발형'과 '자원 고갈형'의 개념을 비교하고, Land Attack과 SYN Flooding이 각각 어디에 속하며 어떤 메커니즘으로 피해 시스템을 마비시키는지 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["취약점 악용", "자원 고갈", "Land Attack 출발지 목적지 동일", "루프백", "SYN Flooding 백로그 큐", "반개방"],
            rubric: [
              { item: "1. 2대 원리 비교", desc: "취약점 설계 결함 크래시 vs 정상 절차 악용 대량 자원 고갈 비교 시 5점" },
              { item: "2. Land Attack 메커니즘", desc: "출발지/목적지 동일 조작 무한 루프백 유발 규명 시 5점" },
              { item: "3. SYN Flooding 메커니즘", desc: "대량 SYN 후 ACK 미응답으로 백로그 큐 마비 규명 시 5점" }
            ],
            explanation: "취약점 악용형은 소량 패킷으로 커널 결함을 찔러 크래시를 유발하며(Land Attack: 출발지/목적지 동일 조작 무한 루프), 자원 고갈형은 대량 트래픽으로 자원을 소진시킴(SYN Flooding: ACK 미전송으로 백로그 큐 고갈)."
          },
          {
            id: 13, type: "essay", score: 20, origin: "6주차 Feistel vs SPN & 회로 재사용",
            text: "[서술형 20점] Feistel 구조의 DES와 SPN 구조의 AES에 대하여,\n① 기본 구조, 블록 크기, 마스터 키 길이 규격 비교 (6점)\n② 각 알고리즘에서 혼돈(Confusion)과 확산(Diffusion)을 제공하는 핵심 변환 단계 (7점)\n③ 복호화 하드웨어 회로 구현 관점에서 두 구조의 결정적 차이점(회로 재사용 여부 등)을 서술하시오. (7점)",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["Feistel", "SPN", "64비트", "56비트", "128비트", "S-Box 혼돈", "P-Box 확산", "SubBytes", "ShiftRows MixColumns", "가역성", "회로 재사용"],
            rubric: [
              { item: "1. 기본 규격 비교", desc: "DES(64비트 블록, 56비트 유효키) vs AES(128비트 블록, 128/192/256비트 키) 명시 시 6점" },
              { item: "2. 혼돈과 확산 요소", desc: "DES(S-Box 혼돈, P-Box 확산) / AES(SubBytes 혼돈, ShiftRows/MixColumns 확산) 명시 시 7점" },
              { item: "3. 복호화 회로 차이", desc: "DES(키 역순 공급으로 암호화 회로 100% 재사용) vs AES(역변환 회로 별도 구현 필요) 규명 시 7점" }
            ],
            explanation: "DES는 Feistel 구조로 복호화 시 라운드 키 순서만 역순으로 바꾸면 암호화 회로를 100% 그대로 재사용 가능하여 하드웨어 비용이 절감됨. 반면 AES는 SPN 구조로 모든 변환의 수학적 역함수(InvSubBytes 등)를 별도 하드웨어 회로로 추가 구현해야 함."
          }
        ]
      },
      {
        id: "exam3",
        name: "제3회 전범위 파이널 모의고사",
        tag: "전범위 총괄",
        desc: "시스템, 네트워크, 웹, 악성코드, 암호학 전 범위를 망라한 최종 실전 마무리 13문항입니다.",
        questions: [
          {
            id: 1, type: "short", score: 5, origin: "2주차 리눅스 권한",
            text: "리눅스 파일 시스템에서 명령어 'chmod 755 test.sh'를 실행했을 때, 파일 소유자(User)와 그룹(Group)이 각각 부여받는 rwx 권한 표기를 쓰시오. (예: rwx r-x)",
            placeholder: "rwx r-x",
            answers: ["rwx r-x", "rwx, r-x", "rwx,r-x"],
            explanation: "7 = 4+2+1 = rwx, 5 = 4+0+1 = r-x 입니다."
          },
          {
            id: 2, type: "short", score: 5, origin: "2주차 AAA 보안 모델",
            text: "보안 시스템 및 RADIUS 서버의 본질적 역할인 AAA를 구성하는 3대 요소(인증, 인가, 과금/기록)의 영문 정식 단어를 쓰시오.",
            placeholder: "Authentication, Authorization, Accounting",
            answers: ["authentication authorization accounting", "authentication, authorization, accounting"],
            explanation: "Authentication (인증), Authorization (인가), Accounting (기록/과금)입니다."
          },
          {
            id: 3, type: "short", score: 5, origin: "3주차 DNS 스푸핑",
            text: "클라이언트가 DNS 서버에 질의할 때 공격자가 중간에서 위조된 IP를 먼저 응답하여 피싱 사이트로 유도하는 공격은?",
            placeholder: "공격 명칭 입력",
            answers: ["dns스푸핑", "dns스푸핑공격", "dnsspoofing", "dns 스푸핑"],
            explanation: "DNS 질의의 신원 검증 부재를 악용하는 DNS 스푸핑입니다."
          },
          {
            id: 4, type: "short", score: 5, origin: "3주차 무선 보안 비교",
            text: "무선 LAN 보안 프로토콜 중 일반 가정/카페에서 사전 공유된 단일 비밀번호를 사용하는 모드의 약어는?",
            placeholder: "모드 약어 입력",
            answers: ["psk", "wpa-psk", "wpapsk"],
            explanation: "PSK (Pre-Shared Key)는 공용 사전 공유키 방식입니다."
          },
          {
            id: 5, type: "short", score: 5, origin: "4주차 HTTP 에러 코드",
            text: "웹 브라우저에서 요청한 페이지 파일이 서버에 존재하지 않을 때 반환되는 가장 대표적인 400번대 클라이언트 에러 코드는?",
            placeholder: "에러 코드 입력",
            answers: ["404", "404notfound", "404 not found"],
            explanation: "404 Not Found는 리소스 부재를 알리는 표준 코드입니다."
          },
          {
            id: 6, type: "short", score: 5, origin: "4주차 침투 프로세스",
            text: "해킹 일반 4단계 과정 중, '공격 대상 선정'과 '취약점 분석' 사이에 수행하는 필수 단계는?",
            placeholder: "단계 명칭 입력",
            answers: ["정보수집", "정보 수집", "informationgathering", "recon"],
            explanation: "대상 선정 → 정보 수집(Recon) → 취약점 분석 → 공격(침투) 순서입니다."
          },
          {
            id: 7, type: "short", score: 5, origin: "5주차 메모리 보안",
            text: "프로그램 실행 중 할당된 버퍼 메모리 한도를 초과하는 대량의 데이터를 주입하여 반환 주소를 변조하는 취약점 공격은?",
            placeholder: "공격 명칭 입력",
            answers: ["버퍼오버플로우", "버퍼오버플로", "bufferoverflow", "버퍼 오버플로우"],
            explanation: "버퍼 오버플로우는 메모리 경계 검사 부재를 악용합니다."
          },
          {
            id: 8, type: "short", score: 5, origin: "6주차 AES 키 확장",
            text: "AES 암호화 알고리즘의 라운드 키 확장(Key Expansion) 과정에서 사용되는 3대 핵심 연산(함수)을 쓰시오. (RotWord, SubWord, ?)",
            placeholder: "Rcon 또는 연산 3개",
            answers: ["rcon", "rotword subword rcon", "rotword, subword, rcon"],
            explanation: "RotWord (순환), SubWord (S-Box 치환), Rcon (라운드 상수 XOR)입니다."
          },
          {
            id: 9, type: "short", score: 5, origin: "6주차 RSA 키 생성",
            text: "RSA 암호화에서 서로 다른 두 소수 p와 q를 선정했을 때, 오일러 피 함수 φ(n)의 계산 공식은 무엇인가?",
            placeholder: "(p-1)(q-1)",
            answers: ["(p-1)(q-1)", "(p-1)*(q-1)", "(p - 1)(q - 1)"],
            explanation: "φ(n) = (p - 1)(q - 1)로 계산됩니다."
          },
          {
            id: 10, type: "short", score: 5, origin: "6주차 플레이페어 중복",
            text: "플레이페어 5×5 암호화에서 평문을 2글자씩 나눌 때, 한 쌍 내에 동일한 글자가 연속되는 경우 분리를 위해 중간에 삽입하는 표준 알파벳은?",
            placeholder: "알파벳 1글자",
            answers: ["x", "x 또는 q", "q"],
            explanation: "동일 글자 연속 시 'x'(또는 q)를 삽입하여 분리합니다."
          },
          {
            id: 11, type: "essay", score: 15, origin: "6주차 플레이페어 치환 규칙",
            text: "[서술형 15점] 플레이페어 5×5 암호에서 평문을 2글자 쌍으로 나눌 때 적용되는 전처리 규칙(중복 및 홀수 글자 처리)과, 3가지 기하학적 치환 규칙(같은 행, 같은 열, 사각형)을 암호화와 복호화 관점에서 비교 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["x 삽입", "홀수 x", "오른쪽", "왼쪽", "아래쪽", "위쪽", "상대방 열", "대각선 모서리"],
            rubric: [
              { item: "1. 전처리 규칙", desc: "동일 문자 연속 시 'x' 삽입 및 홀수 종료 시 끝에 'x' 추가 명시 시 5점" },
              { item: "2. 같은 행/열 규칙", desc: "암호화(오른쪽/아래쪽) vs 복호화(왼쪽/위쪽) 방향 대조 시 5점" },
              { item: "3. 사각형 규칙", desc: "자기 행 유지하며 상대방 열의 대각선 모서리 글자 치환 명시 시 5점" }
            ],
            explanation: "전처리: 2글자씩 분할하며 중복 시 'x' 삽입, 홀수 종료 시 끝에 'x' 추가. 치환: 같은 행은 오른쪽(암호화)/왼쪽(복호화), 같은 열은 아래쪽(암호화)/위쪽(복호화), 사각형은 상대방 열 모서리 글자로 치환."
          },
          {
            id: 12, type: "essay", score: 15, origin: "3주차 스니핑 vs 스푸핑 & 정적 ARP 한계",
            text: "[서술형 15점] 네트워크 공격에서 수동적 공격인 '스니핑(Sniffing)'과 능동적 공격인 '스푸핑(Spoofing)'의 개념적 차이를 비교하고, ARP 스푸핑의 대응책으로 정적(Static) MAC 관리가 실무에서 어려운 이유를 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["수동적 도청", "능동적 위조", "정적 관리 한계", "단말 이동성", "수동 갱신 부담", "DHCP 유동 IP"],
            rubric: [
              { item: "1. 스니핑 vs 스푸핑", desc: "수동적 패킷 훔쳐보기 vs 능동적 신원 사칭 및 가로채기 비교 시 7점" },
              { item: "2. 정적 ARP 한계", desc: "수백~수천 대 단말 이동성 및 DHCP 환경에서 수동 갱신 불가 규명 시 8점" }
            ],
            explanation: "스니핑은 수동적 도청이고 스푸핑은 능동적 신원 위조임. 정적 ARP 관리는 스푸핑을 원천 차단할 수 있으나, 단말 이동성과 DHCP 유동 IP 환경에서 수많은 단말의 MAC을 관리자가 수동 갱신하는 것이 현실적으로 불가능함."
          },
          {
            id: 13, type: "essay", score: 20, origin: "2주차 최소 권한 & 세션 타임아웃 거버넌스",
            text: "[서술형 20점] 정보보안의 기본 원칙인 '최소 권한의 원칙(Principle of Least Privilege)'의 개념을 설명하고, 세션 지속 시 주기적 재인증(타임아웃) 및 자리 비움 시 다단계 인증(MFA)을 요구해야 하는 이유를 보안 거버넌스 관점에서 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["최소 권한", "필수 최소한", "피해 최소화", "세션 하이재킹", "자리 비움", "MFA", "지속 검증"],
            rubric: [
              { item: "1. 최소 권한 원칙", desc: "업무 수행에 필요한 최소한의 권한만 부여하여 침해 피해 최소화 규명 시 10점" },
              { item: "2. 세션 타임아웃 & MFA", desc: "무한 세션의 도용 위험 차단 및 지속 검증 거버넌스 논리 제시 시 10점" }
            ],
            explanation: "최소 권한 원칙은 계정이 탈취되더라도 시스템 전체로의 권한 상승 피해를 방지하기 위해 최소한의 권한만 부여하는 것임. 세션이 무한 유지되면 세션 하이재킹이나 물리적 계정 도용에 노출되므로, 타임아웃과 주기적 재인증 및 고권한 작업 시 MFA를 강제하여 정당한 사용자인지 지속 검증해야 함."
          }
        ]
      },

      // [회차 4] 박정수 교수님 출제스포 & 암호학·네트워크 보안 마스터 모의고사 (13문항 100점)
      {
        id: "exam4",
        name: "제4회 박정수 교수님 출제스포 & 암호학·네트워크 보안 마스터 모의고사",
        tag: "출제스포 전범위 13문 (100점)",
        desc: "교수님 족집게 총정리: 대칭키 vs 비대칭키, 블록 암호 운영 모드(ECB/CBC), 해시 함수 3대 특성, 전자서명 원리, SYN Flooding, SQL Injection, 플레이페어 실전 치환",
        questions: [
          // [단답형 10문항: 각 5점 = 50점]
          {
            id: 1, type: "short", score: 5, origin: "해시 함수와 무결성 검증",
            text: "데이터의 무결성(Integrity)을 검증하고 변조 여부를 확인하기 위해 임의 길이의 평문 메시지를 고정된 길이의 고유한 다이제스트(Digest) 값으로 단방향 변환하는 암호 알고리즘은?",
            placeholder: "답안 입력 (예: 해시 함수 또는 Hash Function)",
            answers: ["해시 함수", "해시함수", "hash function", "해시", "단방향 해시 함수"],
            explanation: "해시 함수(SHA-256, MD5 등)는 원본의 아주 작은 변화도 전혀 다른 다이제스트로 출력(눈사태 효과)하여 데이터 무결성을 검증합니다."
          },
          {
            id: 2, type: "short", score: 5, origin: "블록 암호 운영 모드: ECB의 취약점",
            text: "블록 암호 운영 모드 중 가장 단순한 모드로, 동일한 평문 블록이 항상 동일한 암호문 블록으로 1:1 매핑되어 비트맵 이미지 암호화 시 원본의 윤곽선(패턴)이 그대로 드러나는 치명적 취약점을 가진 모드의 영문 약어(3글자)는?",
            placeholder: "영문 약어 3글자 입력 (예: ECB)",
            answers: ["ECB", "ecb"],
            explanation: "ECB (Electronic Codebook) 모드는 블록 간의 연쇄가 없어 동일한 평문 패턴이 암호문에서도 그대로 노출되는 심각한 약점이 있습니다."
          },
          {
            id: 3, type: "short", score: 5, origin: "CBC 모드와 초기화 벡터 (IV)",
            text: "CBC(Cipher Block Chaining) 모드에서 맨 처음 첫 번째 평문 블록을 암호화할 때, 이전 암호문 블록이 존재하지 않기 때문에 첫 블록과 XOR 연산을 수행하기 위해 무작위 난수로 주입하는 비트 열의 영문 약어(2글자)는?",
            placeholder: "영문 약어 2글자 입력 (예: IV)",
            answers: ["IV", "iv"],
            explanation: "IV (Initialization Vector, 초기화 벡터)는 첫 블록 암호화 시 동일 평문에 대해 매번 다른 암호문이 생성되도록 보장합니다."
          },
          {
            id: 4, type: "short", score: 5, origin: "전자서명 생성 키",
            text: "공개키 암호 알고리즘을 활용한 전자서명(Digital Signature) 시스템에서, 송신자가 자신이 보낸 메시지임을 증명하고 차후 송신 사실을 부인하지 못하게 하기 위해 서명 생성 시 사용하는 키는 '송신자의 개인키'인가, '송신자의 공개키'인가?",
            placeholder: "키 명칭 입력 (예: 송신자의 개인키)",
            answers: ["송신자의 개인키", "개인키", "송신자 개인키", "private key", "자신의 개인키"],
            explanation: "전자서명은 오직 송신자 본인만이 보유한 개인키(Private Key)로 암호화(서명)해야 타인이 위조할 수 없으며 부인 방지가 성립합니다. 수신자는 송신자의 공개키로 검증합니다."
          },
          {
            id: 5, type: "short", score: 5, origin: "서비스 거부 공격: SYN Flooding",
            text: "TCP 3-Way Handshake 취약점을 악용하여 공격자가 대량의 위조된 IP로 SYN 패킷만을 연달아 전송하고 마지막 ACK를 의도적으로 보내지 않음으로써, 피해 서버의 백로그 큐(Backlog Queue)를 가득 채워 정상 사용자의 연결을 차단하는 DoS 공격의 명칭은?",
            placeholder: "공격 명칭 입력 (예: SYN Flooding)",
            answers: ["SYN Flooding", "syn flooding", "SYN 플러딩", "syn 플러딩", "SYN Flooding 공격"],
            explanation: "SYN Flooding은 서버가 SYN_RECEIVED 상태로 대기하며 자원을 고갈시키도록 만드는 대표적인 전송 계층 DoS 공격입니다."
          },
          {
            id: 6, type: "short", score: 5, origin: "메시지 인증 코드 (HMAC)",
            text: "SHA-256과 같은 암호학적 해시 함수와 송·수신자가 공유하는 비밀 대칭키를 유기적으로 결합하여, 메시지의 무결성뿐만 아니라 정당한 송신자가 보냈음을 확인하는 출처 인증까지 동시에 제공하는 기술의 영문 약어(4글자)는?",
            placeholder: "영문 약어 입력 (예: HMAC)",
            answers: ["HMAC", "hmac"],
            explanation: "HMAC (Hash-based Message Authentication Code)는 비밀키와 해시 함수를 결합하여 중간자 변조 및 위조를 완벽히 차단합니다."
          },
          {
            id: 7, type: "short", score: 5, origin: "웹 보안 취약점: SQL Injection",
            text: "웹 애플리케이션의 사용자 입력 폼이나 URL 파라미터에 'OR 1=1 --'과 같은 악의적인 데이터베이스 질의문을 삽입하여 인증을 우회하거나 백엔드 DB의 중요 기밀 정보를 무단 탈취하는 치명적인 웹 공격 기법의 명칭은?",
            placeholder: "취약점 명칭 입력 (예: SQL Injection 또는 SQL 삽입)",
            answers: ["SQL Injection", "SQL 인젝션", "sql injection", "SQL삽입", "SQL 삽입"],
            explanation: "SQL Injection은 시큐어 코딩에서 PreparedStatement(매개변수화된 질의문)를 사용하여 입력값을 단순 데이터로 처리함으로써 방어합니다."
          },
          {
            id: 8, type: "short", score: 5, origin: "비밀 은닉 기법: 스테가노그래피",
            text: "암호화 사실 자체를 숨기기 위해 사진 파일(.bmp, .png)의 최하위 비트(LSB)나 오디오 음원 파일의 비가청 주파수 영역에 비밀 메시지를 인간이 육안이나 청각으로 인지할 수 없도록 감추어 전송하는 기법은?",
            placeholder: "기법 명칭 입력 (예: 스테가노그래피 또는 Steganography)",
            answers: ["스테가노그래피", "steganography", "Steganography"],
            explanation: "스테가노그래피(Steganography)는 암호문이 존재한다는 사실 자체를 숨기는 정보 은닉 기술입니다."
          },
          {
            id: 9, type: "short", score: 5, origin: "디피-헬만과 수학적 난제",
            text: "안전하지 않은 공개 채널에서 두 당사자가 사전에 비밀키를 공유하지 않고도 동일한 대칭키를 안전하게 공유할 수 있는 Diffie-Hellman 키 교환 알고리즘의 보안성을 보장하는 핵심 수학적 난제는?",
            placeholder: "수학적 난제 명칭 입력 (예: 이산대수 문제)",
            answers: ["이산대수 문제", "이산대수", "discrete logarithm", "이산 대수", "이산대수의 어려움"],
            explanation: "Diffie-Hellman 및 ElGamal 알고리즘은 모듈러 거듭제곱의 역연산인 이산대수(Discrete Logarithm) 계산의 난해성에 안전성을 둡니다. (RSA는 소인수분해)"
          },
          {
            id: 10, type: "short", score: 5, origin: "해시 함수 특성: 제2 역상 저항성",
            text: "암호학적 해시 함수의 3대 충돌 저항성 조건 중, '어떤 입력값 x가 이미 주어졌을 때, H(x) = H(x\')를 만족하면서 x와 다른 또 다른 메시지 x\'를 찾아내는 것이 계산적으로 불가능해야 한다'는 특성의 명칭은?",
            placeholder: "특성 명칭 입력 (예: 제2 역상 저항성 또는 약한 충돌 저항성)",
            answers: ["제2 역상 저항성", "제2역상저항성", "second preimage resistance", "약한 충돌 저항성", "약한 충돌저항성"],
            explanation: "1) 역상 저항성: H(x)로부터 x 역추적 불가, 2) 제2 역상 저항성: 특정 x와 동일 해시를 갖는 x' 탐색 불가, 3) 충돌 저항성: 동일 해시를 갖는 임의의 두 쌍 (x, y) 탐색 불가."
          },

          // [서술형 3문항: 총 50점]
          {
            id: 11, type: "essay", score: 15, origin: "대칭키 vs 비대칭키 암호 체계 완벽 비교",
            text: "[서술형 15점] 현대 암호 체계의 양대 축인 **대칭키(비밀키) 암호 방식**과 **비대칭키(공개키) 암호 방식**을 1) 암·복호화에 사용하는 키의 동일성, 2) n명의 사용자가 1:1로 안전하게 통신할 때 시스템 전체에 요구되는 총 키의 개수 수식, 3) 암·복호화 연산 속도 및 대용량 데이터 처리 적합성 측면에서 비교 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["대칭키 동일한 키", "비대칭키 공개키와 개인키 쌍", "대칭키 키 개수 n(n-1)/2", "비대칭키 키 개수 2n", "대칭키 하드웨어 고속 연산", "비대칭키 수학적 연산으로 느림", "하이브리드 암호 체계"],
            rubric: [
              { item: "1. 키의 동일성", desc: "대칭키(암복호화 동일 키 공유) vs 비대칭키(공개키 암호화, 개인키 복호화 쌍) 명시 시 5점" },
              { item: "2. 총 키의 개수 수식", desc: "n명 통신 시 대칭키는 n(n-1)/2개 필요 vs 비대칭키는 각자 1쌍씩 2n개 필요 비교 명시 시 5점" },
              { item: "3. 연산 속도 및 활용", desc: "대칭키는 고속으로 대용량 파일 암호화에 적합 vs 비대칭키는 복잡한 수학 연산으로 느려 키 교환/전자서명에 적합 명시 시 5점" }
            ],
            explanation: "1) 키의 동일성: 대칭키(AES, DES)는 암호화와 복호화에 동일한 비밀키를 사용하여 사전 공유가 필요함. 비대칭키(RSA, ECC)는 공개키(누구나 알 수 있음)와 개인키(본인만 보관)의 쌍으로 구성되어 키 분배 문제를 해결함. 2) 키 개수: n명의 참여자가 1:1 비밀 통신을 하려면 대칭키는 n(n-1)/2개의 서로 다른 키가 필요하여 관리가 어렵지만, 비대칭키는 각자 한 쌍씩 총 2n개의 키만 있으면 충분함. 3) 속도 및 활용: 대칭키는 비트 치환/치환으로 연산 속도가 매우 빨라 대용량 데이터 전송에 적합함. 비대칭키는 거듭제곱 모듈러 등 고난도 수학 연산으로 속도가 수백 배 느리므로 대칭키를 안전하게 교환하기 위한 봉투(하이브리드 암호)나 전자서명에 주로 활용됨."
          },
          {
            id: 12, type: "essay", score: 15, origin: "전자서명의 생성 및 검증 메커니즘과 3대 보안 효용",
            text: "[서술형 15점] 공개키 암호 알고리즘을 활용한 **전자서명(Digital Signature)**의 1) 서명 생성 과정(송신자 측), 2) 서명 검증 과정(수신자 측)을 단계별로 도식화하여 기술하고, 이를 통해 달성되는 3대 보안 효용(메시지 출처 인증, 무결성 보장, 부인 방지)을 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["원문 해시 생성", "송신자 개인키로 해시 암호화(서명)", "송신자 공개키로 서명 복호화", "수신자 자체 해시값과 비교 일치 확인", "인증", "무결성", "부인 방지"],
            rubric: [
              { item: "1. 서명 생성 과정", desc: "원문 메시지를 해시 함수로 축약한 후 송신자의 개인키(Private Key)로 암호화하여 서명 첨부 명시 시 5점" },
              { item: "2. 서명 검증 과정", desc: "수신자가 송신자의 공개키(Public Key)로 서명을 복호화하여 얻은 해시와 원문을 직접 해시한 결과를 비교 일치 확인 명시 시 5점" },
              { item: "3. 3대 보안 효용 규명", desc: "출처 인증(송신자 증명), 무결성(변조 감지), 부인 방지(작성 사실 부인 불가) 3요소 완벽 서술 시 5점" }
            ],
            explanation: "1) 서명 생성: 송신자는 원문 메시지를 해시 함수(SHA-256)에 통과시켜 고정 길이 다이제스트를 생성하고, 이를 '송신자의 개인키'로 암호화하여 전자서명을 만든 후 원문과 함께 전송함. 2) 서명 검증: 수신자는 전송받은 전자서명을 '송신자의 공개키'로 복호화하여 해시값 A를 얻고, 동시에 전송받은 원문 메시지를 동일한 해시 함수에 넣어 해시값 B를 자체 계산함. 해시값 A와 B가 완벽히 일치하면 검증 성공. 3) 3대 보안 효용: ① 메시지 인증: 오직 송신자만이 개인키를 가지고 있으므로 송신자가 작성했음을 증명함. ② 무결성 보장: 전송 중 1비트라도 변조되면 해시값이 달라져 검증에 실패함. ③ 부인 방지: 송신자 개인키로만 서명이 생성되므로 사후에 자신이 보내지 않았다고 발뺌할 수 없음."
          },
          {
            id: 13, type: "essay", score: 20, origin: "블록 암호 모드: ECB 취약점과 CBC 체이닝 메커니즘",
            text: "[서술형 20점] 블록 암호화의 가장 기본 모드인 **ECB(Electronic Codebook)** 모드의 구조적 작동 방식과 이로 인해 발생하는 보안상 취약점(패턴 노출)을 설명하고, 이를 해결하기 위해 고안된 **CBC(Cipher Block Chaining)** 모드가 1) IV(초기화 벡터)와 2) 직전 암호문 블록과의 XOR 피드백 체이닝을 통해 동일한 평문 블록도 완전히 다른 암호문으로 난수화시키는 암호화 및 복호화 과정을 상세히 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["ECB 독립적 암호화", "동일 평문 블록 동일 암호문", "이미지 윤곽 노출", "CBC 직전 암호문과 XOR 후 암호화", "IV 첫 블록 XOR", "복호화 시 복호화 후 직전 암호문과 XOR"],
            rubric: [
              { item: "1. ECB 모드 취약점 규명", desc: "각 블록이 독립적으로 암호화되어 동일한 평문 블록이 항상 동일한 암호문으로 치환되어 통계적 패턴(리눅스 펭귄)이 누출됨 명시 시 6점" },
              { item: "2. CBC 암호화 체이닝", desc: "첫 블록은 IV와 XOR 후 암호화, 이후 블록은 직전 암호문 블록과 XOR한 결과를 암호화하는 연쇄 구조 명시 시 7점" },
              { item: "3. CBC 복호화 메커니즘", desc: "암호문 블록을 비밀키로 복호화한 후 직전 암호문 블록(첫 블록은 IV)과 XOR하여 평문을 복원함을 명시 시 7점" }
            ],
            explanation: "1) ECB 모드와 취약점: ECB는 평문을 블록 단위로 잘라 각 블록을 독립적으로 암호화합니다. 따라서 동일한 내용을 담은 평문 블록은 항상 100% 동일한 암호문 블록으로 변환됩니다. 이로 인해 암호화 후에도 원본 비트맵 이미지의 윤곽선과 같은 통계적 데이터 패턴이 암호문에 그대로 드러나 기밀성을 침해당합니다. 2) CBC 암호화 체이닝: CBC는 블록들을 체인처럼 연결합니다. 첫 번째 평문 블록 P1은 무작위 난수인 IV(초기화 벡터)와 먼저 XOR 연산을 거친 후 비밀키로 암호화되어 C1이 됩니다. 두 번째 평문 블록 P2는 직전 암호문 블록 C1과 XOR 연산을 거친 후 암호화되어 C2가 됩니다. 즉, C_i = E_K(P_i ⊕ C_{i-1}) 형태로 연쇄되므로 설령 P1과 P2가 동일한 데이터라도 전혀 다른 무작위 암호문으로 난수화됩니다. 3) CBC 복호화: 수신 측에서는 암호문 블록 C_i를 비밀키 K로 먼저 복호화(D_K)한 뒤, 그 결과를 직전 암호문 블록 C_{i-1}(첫 블록은 IV)과 XOR 연산하여 원래의 평문 P_i를 복원합니다: P_i = D_K(C_i) ⊕ C_{i-1}."
          }
        ]
      }
    ]
  };

