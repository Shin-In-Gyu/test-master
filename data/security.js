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
      // ========================================================
      // [회차 1] 제1회 족집게 스포일러 모의고사 (미니서술 10문 + 심화서술 3문)
      // ========================================================
      {
        id: "exam1",
        name: "제1회 족집게 스포일러 모의고사",
        tag: "출제 100% 스포 (100점)",
        desc: "교수님이 총정리 강의에서 '단답형 수준은 이런 것', '13문제 나온다'고 직접 콕 짚어준 핵심 13문항을 미니 서술형으로 전면 개편한 실전 모의고사입니다.",
        questions: [
          {
            id: 1, type: "essay", score: 5, origin: "1주차 CIA 3대 요소",
            text: "[미니 서술형 5점] 현대 정보보안 시스템에서 비인가자의 도청이나 무단 열람을 방지하기 위해 AES 또는 DES와 같은 암호화 알고리즘을 적용하여 달성하고자 하는 정보보안 3대 요소(CIA) 중 핵심 성질은 무엇이며, 암호화가 이를 어떻게 보장하는지 1문장으로 기술하시오.",
            placeholder: "핵심 요소와 암호화의 보장 원리를 1~2문장으로 서술하세요.",
            keywords: ["기밀성", "Confidentiality", "비인가자", "도청 방지", "열람 차단", "복호화 키"],
            rubric: [
              { item: "1. 핵심 요소 명시", desc: "기밀성(Confidentiality) 명시 시 2.5점" },
              { item: "2. 보장 원리 기술", desc: "암호화 키 없이는 평문 열람이 불가능함을 기술 시 2.5점" }
            ],
            explanation: "• 핵심 성질: 기밀성 (Confidentiality)<br>• 보장 원리: 송신자가 데이터를 암호화하여 전송하면 전송 구간에서 공격자가 패킷을 도청하더라도 복호화 키를 소유하지 못하면 원본 평문을 결코 열람할 수 없어 기밀성이 보장됩니다.",
            quote: "🗣️ 교수님 코멘트: '내가 이렇게 문제를 낼 수 있는 거야. AES를 활용한다. 보안 3대 요소 중 어떤 거를 달성하고 싶어서 그러냐? → 기밀성!'"
          },
          {
            id: 2, type: "essay", score: 5, origin: "2주차 접근 제어 4대 모델",
            text: "[미니 서술형 5점] 시스템 접근 제어 4대 모델(MAC, DAC, RBAC, ABAC) 중, 사용자의 역할(Role)뿐만 아니라 접속 시간, 접속 위치/IP, 디바이스 상태 등과 같은 '환경 조건(Context)'을 조합하여 동적으로 인가 권한을 제어하는 모델의 영문 약어를 쓰고, 실제 이상 징후 로그인 차단 예시를 1문장으로 제시하시오.",
            placeholder: "모델 약어와 이상 징후 로그인 차단 사례를 서술하세요.",
            keywords: ["ABAC", "Attribute-Based Access Control", "환경 조건", "컨텍스트", "수업 시간", "타지역 IP", "부산 IP", "이상 징후 차단"],
            rubric: [
              { item: "1. 영문 약어", desc: "ABAC 정확히 기재 시 2.5점" },
              { item: "2. 차단 사례", desc: "접속 시간/위치(예: 수업 중 타지역 IP) 기반 차단 예시 제시 시 2.5점" }
            ],
            explanation: "• 영문 약어: ABAC (Attribute-Based Access Control, 속성 기반 접근 제어)<br>• 차단 사례: 서울 강의실에서 수업 중인 교수의 계정으로 동일 시간대에 타지역(예: 부산) IP에서 로그인 시도가 감지되면, 환경 컨텍스트 불일치로 판단하여 로그인을 즉시 차단합니다.",
            quote: "🗣️ 교수님 코멘트: '서울에서 로그인했는데 1분 뒤 부산 IP로 접속하면 차단해야겠지? 환경 조건까지 보는 게 ABAC야!'"
          },
          {
            id: 3, type: "essay", score: 5, origin: "1주차 공급망 보안",
            text: "[미니 서술형 5점] 소프트웨어 공급망 공격(Supply Chain Attack)을 방어하기 위해 외부 종속성 패키지와 오픈소스의 버전 및 라이선스 정보를 투명하게 기록해 둔 '소프트웨어 자재명세서'의 공식 영문 약어를 쓰고, 이것이 보안 취약점(예: Log4j 사태) 대응에 왜 필수적인지 1문장으로 기술하시오.",
            placeholder: "영문 약어와 취약점 대응 필요성을 서술하세요.",
            keywords: ["SBOM", "Software Bill of Materials", "공급망", "구성 요소", "취약점 식별", "Log4j", "신속 대응"],
            rubric: [
              { item: "1. 영문 약어", desc: "SBOM 명시 시 2.5점" },
              { item: "2. 필수성 설명", desc: "소프트웨어 내 취약한 라이브러리 사용 여부 즉각 추적 및 신속 패치 가능 기술 시 2.5점" }
            ],
            explanation: "• 영문 약어: SBOM (Software Bill of Materials)<br>• 필수성: 소프트웨어 내부에 포함된 모든 오픈소스 라이브러리와 버전을 명세서 형태로 보유하고 있으면, 특정 오픈소스에 제로데이 취약점이 터졌을 때 조직 내 어떤 소프트웨어가 위험에 노출되었는지 즉각 식별하여 패치할 수 있습니다.",
            quote: "🗣️ 교수님 코멘트: '소프트웨어 공급망 보안에서 명세서 뭐라고 불렀지? SBOM! 꼭 기억해 둬!'"
          },
          {
            id: 4, type: "essay", score: 5, origin: "3주차 네트워크 DoS",
            text: "[미니 서술형 5점] 공격자가 패킷을 생성할 때 출발지 IP(Source IP)와 목적지 IP(Destination IP)를 피해자의 IP로 동일하게 조작하여 전송하는 DoS 공격의 명칭을 쓰고, 피해 서버가 마비되는 내부 메커니즘을 1문장으로 설명하시오.",
            placeholder: "공격 명칭과 마비 메커니즘을 서술하세요.",
            keywords: ["랜드 공격", "Land Attack", "출발지 목적지 동일", "자기 자신 응답", "무한 루프백", "자원 고갈"],
            rubric: [
              { item: "1. 공격 명칭", desc: "랜드 공격 (Land Attack) 명시 시 2.5점" },
              { item: "2. 마비 메커니즘", desc: "자기 자신에게 응답을 반복하는 무한 루프백으로 시스템 다운 규명 시 2.5점" }
            ],
            explanation: "• 공격 명칭: 랜드 공격 (Land Attack)<br>• 마비 메커니즘: 패킷을 수신한 피해 서버는 응답을 보낼 대상이 자기 자신이므로, 자기 자신에게 응답 패킷을 무한히 되돌려 보내는 루프백(Loopback)에 빠져 커널 스택 자원이 고갈되고 마비됩니다.",
            quote: "🗣️ 교수님 코멘트: '패킷 캡처해서 주면 어떤 공격인지 알아야 해. 출발지랑 목적지가 똑같네? 그럼 바로 랜드 공격이지!'"
          },
          {
            id: 5, type: "essay", score: 5, origin: "3주차 무선 AP 보안",
            text: "[미니 서술형 5점] 무선 네트워크 엔터프라이즈 환경(WPA2/WPA3-Enterprise)에서 사전 공유키(PSK)를 사용하지 않고, 802.1X 중앙 RADIUS 서버를 연동하여 사용하는 본질적인 이유를 'AAA'의 세 가지 역할과 결부하여 설명하시오.",
            placeholder: "RADIUS를 쓰는 이유와 AAA의 역할을 서술하세요.",
            keywords: ["RADIUS", "AAA", "인증", "Authentication", "인가", "Authorization", "어카운팅", "Accounting", "중앙 집중 관리"],
            rubric: [
              { item: "1. AAA 3대 요소", desc: "인증(신원 확인), 인가(권한 부여), 어카운팅(사용 내역 기록) 언급 시 2.5점" },
              { item: "2. 본질적 이유", desc: "사용자별 개별 계정 중앙 집중식 관리 및 감사 추적 가능 기술 시 2.5점" }
            ],
            explanation: "• 이유: RADIUS는 단순 인증뿐만 아니라 개별 사용자 신원 확인(Authentication), 인가된 권한 부여(Authorization), 네트워크 접속 시간 및 트래픽 사용 내역 기록(Accounting)을 중앙 집중식으로 수행하는 통합 AAA 서버이기 때문입니다.",
            quote: "🗣️ 교수님 코멘트: '기업에서 왜 엔터프라이즈 모드를 쓸까? RADIUS 서버가 AAA 서버 역할을 해주니까 쓰는 거야!'"
          },
          {
            id: 6, type: "essay", score: 5, origin: "4주차 HTTP 프로토콜",
            text: "[미니 서술형 5점] 클라이언트의 HTTP 요청이 웹 서버에 성공적으로 처리되었을 때 반환되는 상태 코드(200 OK)를 쓰고, 클라이언트 오류인 401(Unauthorized)과 403(Forbidden)의 개념적 차이를 1문장으로 비교하시오.",
            placeholder: "200 OK 및 401과 403의 차이점을 서술하세요.",
            keywords: ["200 OK", "401", "인증 실패", "로그인 안 됨", "403", "인가 실패", "접근 권한 없음"],
            rubric: [
              { item: "1. 정상 상태 코드", desc: "200 OK 명시 시 2.5점" },
              { item: "2. 401 vs 403 차이", desc: "401은 신원 인증 부재(로그인 필요), 403은 인증되었으나 해당 자원에 대한 권한 부재 대조 시 2.5점" }
            ],
            explanation: "• 상태 코드: 200 OK<br>• 401 vs 403 차이: 401(Unauthorized)은 아직 로그인이 되지 않아 사용자의 신원 인증이 필요한 상태이고, 403(Forbidden)은 사용자가 누구인지는 인증되었으나 해당 리소스에 접근할 수 있는 권한(인가)이 부여되지 않아 거부된 상태입니다.",
            quote: "🗣️ 교수님 코멘트: '정상 처리 시 반환 코드 200 OK! 정처기 실기에도 나오는 아주 단골 문제야!'"
          },
          {
            id: 7, type: "essay", score: 5, origin: "5주차 악성코드 분류",
            text: "[미니 서술형 5점] 악성코드 중 '바이러스(Virus)'와 '웜(Worm)'의 결정적인 차이점을 '숙주(Host) 파일의 필요 여부' 및 '네트워크 전파 방식'을 기준으로 비교 서술하시오.",
            placeholder: "숙주 파일 유무와 네트워크 전파 방식을 기준으로 비교하세요.",
            keywords: ["바이러스", "숙주 파일 필요", "감염", "웜", "Worm", "독립 실행", "숙주 불필요", "네트워크 자가 복제", "자가 전파"],
            rubric: [
              { item: "1. 숙주 파일 유무", desc: "바이러스는 기생할 숙주 필요 vs 웜은 독립 실행 파일 규명 시 2.5점" },
              { item: "2. 전파 방식 차이", desc: "웜은 네트워크 취약점을 타고 스스로 자가 복제하여 전파됨 명시 시 2.5점" }
            ],
            explanation: "• 바이러스: 정상 프로그램(숙주 호스트)에 코드가 기생하여 감염되며, 사용자가 해당 숙주 파일을 실행해야만 전파됩니다.<br>• 웜: 숙주 파일 없이 독립적으로 실행 가능한 완전한 프로그램이며, 사용자의 개입 없이도 네트워크의 보안 취약점을 탐색하여 스스로 복제(Self-Replication)하고 급속히 전파됩니다.",
            quote: "🗣️ 교수님 코멘트: '동작 방식에 따른 분류! 바이러스는 숙주가 필요하고, 웜은 혼자서 네트워크 타고 퍼져 나간다!'"
          },
          {
            id: 8, type: "essay", score: 5, origin: "6주차 DES 키 스케줄",
            text: "[미니 서술형 5점] DES 알고리즘에서 마스터 키로부터 제10번째 라운드 키(K₁₀)를 생성할 때 수행하는 좌측 순환 비트 시프트(Left Shift) 횟수를 적고, 총 16라운드 중 1비트 시프트를 수행하는 예외 라운드 번호 4가지를 모두 쓰시오.",
            placeholder: "10번째 시프트 횟수와 1비트 시프트 라운드 번호 4개를 적으세요.",
            keywords: ["2번", "2비트", "1", "2", "9", "16", "1비트 시프트"],
            rubric: [
              { item: "1. 10번째 시프트 횟수", desc: "2번 (2비트) 명시 시 2.5점" },
              { item: "2. 1비트 라운드 번호", desc: "제 1, 2, 9, 16 라운드 모두 명시 시 2.5점" }
            ],
            explanation: "• 10번째 라운드 키 시프트: 2번 (2비트 좌측 순환 시프트)<br>• 1비트 시프트 라운드: 총 16라운드 중 제 1, 2, 9, 16 라운드만 1비트 시프트이며, 나머지 12개 라운드(10번째 포함)는 전부 2비트 시프트입니다.",
            quote: "🗣️ 교수님 코멘트: '10번째 라운드 키 만들 때 시프트 몇 번 해야 돼? 2번이야! 1, 2, 9, 16만 1번이고 나머진 다 2번 시프트야!'"
          },
          {
            id: 9, type: "essay", score: 5, origin: "6주차 3-DES 구조",
            text: "[미니 서술형 5점] 트리플 DES (3-DES)의 2-Key 모드에서 필요한 암호화 키의 개수를 쓰고, 중간 단계에서 암호화 대신 '복호화(D)'를 수행하여 E-D-E(암호화→복호화→암호화) 구조로 설계한 본질적인 목적을 기술하시오.",
            placeholder: "키 개수와 중간에 복호화를 넣은 목적을 서술하세요.",
            keywords: ["2개", "E-D-E", "복호화", "단일 DES", "하위 호환성", "Backward Compatibility"],
            rubric: [
              { item: "1. 키 개수", desc: "2개 (K1, K2) 명시 시 2.5점" },
              { item: "2. E-D-E 설계 목적", desc: "동일 키 적용 시 단일 DES와 동일하게 동작하여 기존 레거시 시스템과의 하위 호환성 보장 기술 시 2.5점" }
            ],
            explanation: "• 키 개수: 2개 (K₁ 암호화 → K₂ 복호화 → K₁ 재암호화)<br>• 목적: 만약 동일한 키(K₁=K₂=K₃)를 설정할 경우 첫 암호화와 두 번째 복호화가 상쇄되어 단일 DES와 완전히 동일하게 동작하므로, 기존 단일 DES 레거시 하드웨어/소프트웨어 시스템과의 완벽한 하위 호환성(Backward Compatibility)을 보장하기 위함입니다.",
            quote: "🗣️ 교수님 코멘트: '트리플 데스에 암호화 키 몇 개 필요해? 트리플이지만 2개 필요해! 첫 번째 거 쓰고 두 번째 거 쓰고 다시 첫 번째 거 써서 2개!'"
          },
          {
            id: 10, type: "essay", score: 5, origin: "6주차 해시 함수 특성",
            text: "[미니 서술형 5점] 해시 함수(Hash)를 한마디로 정의하는 핵심 개념인 '일방향 함수(One-Way Function)'의 의미를 역상 저항성 관점에서 설명하고, 이것이 비밀번호를 DB에 안전하게 보관하는 데 기여하는 원리를 기술하시오.",
            placeholder: "일방향 함수의 의미와 비밀번호 보관 기여 원리를 서술하세요.",
            keywords: ["일방향 함수", "One-Way Function", "역상 저항성", "역산 불가능", "해시 다이제스트", "비밀번호 노출 방지"],
            rubric: [
              { item: "1. 일방향 함수 정의", desc: "입력값에서 해시값 계산은 빠르나 해시값에서 원본 역산은 계산상 불가능함을 기술 시 2.5점" },
              { item: "2. DB 비밀번호 기여", desc: "DB가 탈취되어도 해시값만으로는 평문 비밀번호를 복원할 수 없어 안전함 기술 시 2.5점" }
            ],
            explanation: "• 일방향 함수의 의미: 입력 x로부터 해시값 H(x)를 계산하는 것은 극도로 빠르지만, 결과값 H(x)로부터 원래의 입력 x를 역산하는 것은 수학적·계산상 불가능한 성질(역상 저항성)을 의미합니다.<br>• 비밀번호 보관 기여: 사용자의 평문 비밀번호 대신 해시 다이제스트만 DB에 저장하므로, 해커가 DB를 침투·탈취하더라도 일방향성 때문에 원본 비밀번호를 복원할 수 없습니다.",
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
              { item: "1. 서명 생성 주체 및 키", desc: "송신자의 개인키로 암호화(전자서명 생성) 명시 시 6점" },
              { item: "2. 서명 검증 주체 및 키", desc: "송신자의 공개키로 복호화 및 서명 검증 명시 시 7점" },
              { item: "3. 부인 방지 성립 근거", desc: "개인키 유일성으로 위조 불가 및 사후 발뺌 불가 논리 제시 시 7점" }
            ],
            explanation: "1. 서명 생성: 송신자는 메시지의 해시값을 전 세계에서 오직 본인만 소유한 비밀 '개인키(Private Key)'로 암호화(전자서명)하여 전송함.<br>2. 수신자 검증: 수신자는 널리 공개된 '송신자의 공개키(Public Key)'로 서명을 복호화함.<br>3. 부인방지 논리 근거: 송신자의 공개키로 정상 복호화되었다는 사실은 오직 그와 쌍을 이루는 송신자의 비밀 개인키로만 암호화되었음이 수학적으로 입증됨. 제3자는 개인키를 알 수 없어 위조가 불가능하므로, 송신자는 자신이 해당 문서를 작성·발송했음을 사후에 부인(발뺌)할 수 없음.",
            quote: "🗣️ 교수님 코멘트: '내가 내 개인키로 암호화한 걸 보내면 상대방이 내 공개키로 풀 수 있지? 풀리는 순간 발뺌할 수 없는 부인 방지가 된다!'"
          }
        ]
      },

      // ========================================================
      // [회차 2] 제2회 미니서술형 심화 모의고사
      // ========================================================
      {
        id: "exam2",
        name: "제2회 미니서술형 심화 모의고사",
        tag: "미니서술 10 + 서술 3 (100점)",
        desc: "교수님 언급: '딱 안 떨어지는 프로세스 기술형 단답 반영' (100점 만점 / 13문항: 미니서술 단답 10문항 50점 + 서술형 심화 3문항 50점)",
        questions: [
          {
            id: 1, type: "essay", score: 5, origin: "1주차 CIA 연계 기술 원리",
            text: "[미니 서술형 5점] 정보보안 3대 요소(CIA) 중 '기밀성'과 '무결성'을 보장하기 위해 주로 적용되는 대표적인 정보보안 핵심 연계 기술을 각각 1가지씩 적고, 두 기술이 각각 해당 요소를 어떻게 보장하는지 간단히 서술하시오.",
            placeholder: "기밀성 연계 기술과 무결성 연계 기술의 보장 원리를 서술하세요.",
            keywords: ["기밀성", "암호화", "AES", "DES", "무결성", "해시 함수", "Hash", "도청 방지", "위변조 감지"],
            rubric: [
              { item: "1. 기밀성 연계 기술 및 원리", desc: "암호화(AES/DES) + 비인가자 열람 차단 설명 시 2.5점" },
              { item: "2. 무결성 연계 기술 및 원리", desc: "해시 함수(Hash) + 1비트 위변조 감지 설명 시 2.5점" }
            ],
            explanation: "• 기밀성 연계 기술: 암호화 (AES, DES 등) → 비인가자가 도청하더라도 복호화 키 없이는 내용을 열람할 수 없도록 보장함.<br>• 무결성 연계 기술: 해시 함수 (Hash) → 원본 데이터가 1비트라도 위·변조되면 완전히 다른 해시값이 도출되므로 데이터 변경 여부를 즉각 감지하여 무결성을 보장함.",
            quote: "🗣️ 교수님 코멘트: '암호는 뭘 위해서 보통 한다? 기밀성을 위해서 한다! 해시는 뭘 위해서 한다? 무결성을 위해서 한다! 이 둘을 앞뒤로 연결해서 이해할 수 있어야 해!'"
          },
          {
            id: 2, type: "essay", score: 5, origin: "2주차 인증 vs 인가 시점",
            text: "[미니 서술형 5점] 사용자 인증(Authentication)과 인가(Authorization)의 적용 시점과 개념적 차이점을 '로그인' 시점을 기준으로 명확히 비교하여 서술하시오.",
            placeholder: "로그인 시점을 기준으로 인증과 인가의 차이를 서술하세요.",
            keywords: ["인증", "Authentication", "인가", "Authorization", "로그인 시점", "신원 확인", "권한 부여", "서비스 사용"],
            rubric: [
              { item: "1. 인증 개념 및 시점", desc: "로그인 시점까지 신원 증명/확인 명시 시 2.5점" },
              { item: "2. 인가 개념 및 시점", desc: "로그인 이후 허용된 권한 범위만큼 서비스/데이터 이용 허락 명시 시 2.5점" }
            ],
            explanation: "• 인증(Authentication): 로그인하는 시점까지 시스템에 접근하는 주체가 누구인지 신원을 확인하는 과정 (예: ID/PW 입력).<br>• 인가(Authorization): 로그인이 완료된 상태에서 인증된 사용자에게 허가된 권한 범위만큼 기능이나 데이터를 쓰게 해주는 과정 (예: 교수 권한과 학생 권한 분리).",
            quote: "🗣️ 교수님 코멘트: '인증과 인가는 전혀 달라! 인증은 어디까지? 로그인하는 시점까지! 로그인된 상태에서 무언가를 사용하는 건? 인가!'"
          },
          {
            id: 3, type: "essay", score: 5, origin: "2주차 세션 타임아웃",
            text: "[미니 서술형 5점] 웹 시스템에서 세션(Session)이 유지되고 있다는 것은 보안 관점에서 무엇을 의미하며, 일정 시간 미활동 시 '세션 타임아웃'을 걸어 재인증을 요구해야 하는 보안상 이유는 무엇인가?",
            placeholder: "세션의 의미와 타임아웃 적용 이유를 서술하세요.",
            keywords: ["인증된 상태 연결", "자리 비움", "계정 도용", "세션 하이재킹", "세션 탈취", "재인증 요구"],
            rubric: [
              { item: "1. 세션의 보안적 의미", desc: "이미 인증이 완료된 연결 상태가 유지됨을 기술 시 2.5점" },
              { item: "2. 타임아웃 보안상 이유", desc: "자리 비움 시 제3자의 도용 및 세션 하이재킹 방지 기술 시 2.5점" }
            ],
            explanation: "• 세션의 의미: 사용자가 이미 시스템에 성공적으로 '인증된 상태'가 서버와 연결되어 활성화되어 있음을 의미함.<br>• 세션 타임아웃 이유: 사용자가 로그아웃하지 않고 자리를 비웠을 때 제3자가 단말을 도용하거나 네트워크상에서 세션을 탈취(Session Hijacking)하는 것을 방지하기 위해, 일정 시간 미사용 시 세션을 파기하고 재인증을 강제함.",
            quote: "🗣️ 교수님 코멘트: '세션은 이미 인증된 상태를 의미해! 근데 네이버에서 어느 정도 시간 지나면 다시 로그인하라고 뜨지? 자리 비웠을 때 계정 탈취를 막으려고 세션 타임아웃을 거는 거야!'"
          },
          {
            id: 4, type: "essay", score: 5, origin: "3주차 스니핑 & 허니팟",
            text: "[미니 서술형 5점] 네트워크 카드의 '프로미스큐어스 모드(Promiscuous Mode)'가 정상 상태와 어떻게 다른지 설명하고, 보안 관리자가 스니핑 공격을 탐지하기 위해 '허니팟(Honey Pot)'을 어떻게 활용할 수 있는지 서술하시오.",
            placeholder: "프로미스큐어스 모드와 허니팟 활용 원리를 서술하세요.",
            keywords: ["프로미스큐어스", "필터링 해제", "타인 패킷 수신", "도청", "허니팟", "더미 데이터", "가짜 취약점", "유인 탐지"],
            rubric: [
              { item: "1. 프로미스큐어스 모드", desc: "자신의 MAC 주소가 아닌 타인 패킷까지 무차별 수신함을 기술 시 2.5점" },
              { item: "2. 허니팟 유인 원리", desc: "가짜 미끼 시스템/더미 데이터에 접근하는 비정상 트래픽 탐지 기술 시 2.5점" }
            ],
            explanation: "• 프로미스큐어스 모드: 정상 NIC는 자신에게 온 패킷만 수신하고 나머지는 버리지만, 이 모드로 전환하면 필터링을 해제하여 네트워크 세그먼트 내 타인의 패킷까지 전부 수신하여 도청(스니핑)함.<br>• 허니팟 활용: 공격자가 탐낼 만한 가짜 시스템이나 취약한 더미 데이터(Honey Pot)를 네트워크에 배치하고, 여기에 접근하는 비정상 패킷과 스니퍼를 즉각 포착하여 공격자를 식별함.",
            quote: "🗣️ 교수님 코멘트: 'NIC 장비가 원래 내 거 아니면 받지 말라고 명령이 들어가 있는데, 프로미스큐어스 모드로 바꾸면 내 거 아니어도 다 받지! 이걸 잡으려고 꿀단지(허니팟)에 더미 코드를 막 집어넣고 유인하는 거야!'"
          },
          {
            id: 5, type: "essay", score: 5, origin: "3주차 세션 하이재킹 보안 활용",
            text: "[미니 서술형 5점] 기업 내부 보안 관제에서 공격 기법인 '세션 하이재킹'과 동일한 중간 개입(MITM) 메커니즘을 적용하여 사내 기밀 유출을 감시하는 기술 명칭을 쓰고, 그 합법적 동작 원리를 서술하시오.",
            placeholder: "기술 명칭과 합법적 동작 원리를 서술하세요.",
            keywords: ["SSL 가시성", "SSL Visibility", "중간 개입", "복호화", "트래픽 분석", "기밀 유출 감시", "재암호화"],
            rubric: [
              { item: "1. 기술 명칭", desc: "SSL 가시성 (SSL Visibility) 확보 기술 명시 시 2.5점" },
              { item: "2. 합법적 동작 원리", desc: "종단간 암호화 트래픽을 중간에서 복호화해 악성코드/기밀유출 검사 후 재암호화 전송 기술 시 2.5점" }
            ],
            explanation: "• 기술 명칭: SSL 가시성 (SSL Visibility) 확보 기술.<br>• 합법적 동작 원리: 사용자와 외부 웹서버 간의 SSL/TLS 암호화 통신을 보안 장비가 중간에서 가로채 복호화한 후, 내부 기밀 자료 유출이나 악성코드 포함 여부를 검사하고, 다시 암호화하여 목적지로 재전송함으로써 사내 보안을 유지함.",
            quote: "🗣️ 교수님 코멘트: '세션 하이재킹을 거꾸로 보안용으로 쓰는 게 바로 SSL 가시성 확보야! 회사 직원이 암호화해서 기밀 내보내면 볼 수 없으니까 중간에서 풀어서 보고 분석한 다음에 전달하는 거지!'"
          },
          {
            id: 6, type: "essay", score: 5, origin: "4주차 SQLi 원리",
            text: "[미니 서술형 5점] SQL Injection 공격에서 공격자가 로그인 입력창에 `' OR '1'='1` 구문을 삽입할 때, 실제 올바른 비밀번호를 몰라도 인증 로직이 우회되어 로그인이 통과되는 근본적인 SQL 쿼리 해석 원리를 서술하시오.",
            placeholder: "작은따옴표와 OR 항등 조건이 쿼리를 어떻게 조작하는지 서술하세요.",
            keywords: ["작은따옴표", "문자열 닫기", "OR '1'='1", "항상 참", "WHERE절 참 판정", "인증 우회"],
            rubric: [
              { item: "1. 문법 조작 원리", desc: "작은따옴표로 기존 문자열 검증 구문을 강제 종료함을 기술 시 2.5점" },
              { item: "2. 논리 평가 무력화", desc: "OR 뒤의 항등 참 조건으로 WHERE절 전체가 무조건 참이 되어 비밀번호 검증 우회 기술 시 2.5점" }
            ],
            explanation: "• 원리: 삽입된 작은따옴표(')가 기존 SQL 쿼리의 패스워드 비교 문자열을 강제로 닫고, 뒤에 `OR '1'='1'`이라는 항상 참(True)인 항등 조건을 삽입함. DBMS의 WHERE 절 평가 시 OR 조건으로 인해 전체 조건문이 무조건 '참(True)'으로 평가되어 패스워드 일치 여부와 상관없이 사용자 계정이 조회되어 인증이 뚫림.",
            quote: "🗣️ 교수님 코멘트: '앞에 거 뒤에 거 OR로 하다 보니까 뒤에가 맞아서 갑자기 전체가 참이 되면서 패스워드가 통과되지! 그게 SQL 인젝션의 가장 기본적인 내용이야!'"
          },
          {
            id: 7, type: "essay", score: 5, origin: "6주차 AES 4대 라운드 동작 ★교수 직접 예시",
            text: "[미니 서술형 5점] \"AES의 한 라운드에서는 어떤 4가지 동작 과정이 돌아가나요?\" AES 암호화 라운드에서 순서대로 일어나는 4대 변환 과정의 명칭을 순서대로 나열하고, 각각의 역할을 간단히 기술하시오.",
            placeholder: "SubBytes, ShiftRows, MixColumns, AddRoundKey의 순서와 역할을 기술하세요.",
            keywords: ["SubBytes", "ShiftRows", "MixColumns", "AddRoundKey", "S-Box 치환", "순환 이동", "행렬 곱", "XOR"],
            rubric: [
              { item: "1. 4단계 정확한 순서", desc: "SubBytes → ShiftRows → MixColumns → AddRoundKey 순서 명시 시 2.5점" },
              { item: "2. 단계별 핵심 역할", desc: "치환(혼돈), 행이동/열섞기(확산), 키 XOR 연산 기술 시 2.5점" }
            ],
            explanation: "• 변환 순서: SubBytes → ShiftRows → MixColumns → AddRoundKey<br>1) SubBytes: S-Box 테이블을 이용한 1바이트 단위 비선형 바이트 치환 (혼돈 제공)<br>2) ShiftRows: 상태 행렬의 각 행을 특정 바이트 수만큼 좌측 순환 이동 (확산 제공)<br>3) MixColumns: 각 열에 갈루아 필드 행렬 곱셈을 수행하여 열 내부 비트 혼합 (확산 제공)<br>4) AddRoundKey: 상태 행렬과 라운드 키 간의 비트별 단순 XOR 연산",
            quote: "🗣️ 교수님 코멘트: '내 단답형 수준이라는 건 그런 거야. AES에서는 라운드마다 어떤 일이 발생하나요? 하면 서브바이트 돌리고요, 시프트로우 하고요, 믹스컬럼에서 애드라운드키까지 동작합니다 정도는 알고 있어야 돼!'"
          },
          {
            id: 8, type: "essay", score: 5, origin: "6주차 DES 세부 구조 3대 원리",
            text: "[미니 서술형 5점] DES 암호화 알고리즘에서 ① Expansion P-Box(32비트 → 48비트)를 수행하는 이유, ② S-Box(48비트 → 32비트)에서 6비트 입력으로 행과 열을 참조하는 규칙, ③ 마지막 제16라운드 종료 후 생략되는 동작을 각각 쓰시오.",
            placeholder: "확장 P-Box 이유, S-Box 행/열 참조 규칙, 16라운드 생략 동작을 각각 기술하세요.",
            keywords: ["키 길이", "48비트 맞추기", "XOR", "앞뒤 1비트", "행", "가운데 4비트", "열", "좌우 스왑", "순서 교환 생략"],
            rubric: [
              { item: "1. Expansion P-Box 이유", desc: "라운드 키(48비트)와 크기를 맞춰 XOR 연산하기 위함 명시 시 1.5점" },
              { item: "2. S-Box 행/열 참조", desc: "앞뒤 1비트(총 2비트)는 행, 가운데 4비트는 열 참조 명시 시 2점" },
              { item: "3. 16라운드 생략 동작", desc: "좌우 스왑(순서 교환 / 믹서) 생략 명시 시 1.5점" }
            ],
            explanation: "① Expansion P-Box 이유: 라운드 키의 크기(48비트)와 길이를 맞춰 비트별 XOR 연산을 수행하기 위해 32비트를 48비트로 확장함.<br>② S-Box 행·열 참조 규칙: 입력된 6비트 중 앞뒤 1비트씩(1번째와 6번째, 총 2비트)은 행(Row)을 참조하고, 가운데 4비트(2~5번째)는 열(Column)을 참조하여 4비트로 압축 출력함.<br>③ 마지막 16라운드 생략 동작: 좌우 32비트 블록을 맞바꾸는 순서 교환(좌우 스왑 / 믹서)을 수행하지 않고 생략함.",
            quote: "🗣️ 교수님 코멘트: '확장 P-Box 쓰는 이유는 키 길이 맞추려고 하는 거고, S-Box는 앞뒤가 행, 나머지가 열이야! 그리고 마지막에 믹서(순서 바꾸기) 안 해!'"
          },
          {
            id: 9, type: "essay", score: 5, origin: "6주차 플레이페어 규칙",
            text: "[미니 서술형 5점] 플레이페어(Playfair) 5×5 암호에서 두 글자 쌍(Digraph)을 암호화할 때 적용되는 3가지 기하학적 치환 규칙(같은 행, 같은 열, 다른 행/열)을 각각 설명하시오.",
            placeholder: "같은 행, 같은 열, 다른 행/열(사각형)의 치환 방향과 방식을 설명하세요.",
            keywords: ["같은 행", "오른쪽", "같은 열", "아래쪽", "다른 행열", "사각형", "대각선", "상대방 열 모서리"],
            rubric: [
              { item: "1. 같은 행 규칙", desc: "각각 오른쪽 칸(+1) 글자로 치환 명시 시 1.5점" },
              { item: "2. 같은 열 규칙", desc: "각각 아래쪽 칸(+1) 글자로 치환 명시 시 1.5점" },
              { item: "3. 다른 행열 규칙", desc: "사각형 형성 후 자신의 행을 유지하며 상대방 열의 모서리 글자로 치환 명시 시 2점" }
            ],
            explanation: "1) 같은 행(가로줄): 두 글자 각각 바로 오른쪽(+1) 칸의 글자로 치환 (맨 오른쪽 끝이면 맨 왼쪽으로 순환).<br>2) 같은 열(세로줄): 두 글자 각각 바로 아래쪽(+1) 칸의 글자로 치환 (맨 아래 끝이면 맨 위로 순환).<br>3) 서로 다른 행과 열: 두 글자를 양 모서리로 하는 직사각형을 형성하여, 자기 행을 유지한 채 상대방 열에 위치한 모서리 글자로 치환.",
            quote: "🗣️ 교수님 코멘트: '플레이페어 같은 거 시험 문제 내기 좋아! 같은 행에 있을 때, 같은 열에 있을 때, 완전히 다른 데 있을 때 찾는 방법 달랐었지? 만들 수 있어야 돼!'"
          },
          {
            id: 10, type: "essay", score: 5, origin: "6주차 해시 정의 & 눈사태 효과",
            text: "[미니 서술형 5점] 해시 함수(Hash)의 핵심 정의인 '일방향 함수(One-Way Function)'의 의미를 역상 저항성 관점에서 정의하고, '눈사태 효과(Avalanche Effect)'가 무결성 검증에 왜 결정적인 역할을 하는지 서술하시오.",
            placeholder: "일방향 함수의 의미와 눈사태 효과의 역할을 서술하세요.",
            keywords: ["일방향 함수", "순방향 빠름", "역산 불가능", "역상 저항성", "눈사태 효과", "1비트 변경", "전체 해시 변화", "무결성 감지"],
            rubric: [
              { item: "1. 일방향 함수 정의", desc: "순방향 연산은 용이하나 해시로부터 원본 역산 불가(역상 저항성) 기술 시 2.5점" },
              { item: "2. 눈사태 효과 기여", desc: "단 1비트 위변조 시에도 전체 해시가 완전히 뒤바뀌어 데이터 변조 100% 감지 기술 시 2.5점" }
            ],
            explanation: "• 일방향 함수: 입력 데이터로부터 해시값을 구하는 계산은 매우 빠르지만, 결과 해시값으로부터 원본 입력 데이터를 역산하는 것은 불가능한 성질(역상 저항성)을 의미함.<br>• 눈사태 효과의 역할: 입력값의 단 1비트(마침표 하나)만 달라져도 완전히 다른 해시값이 생성되므로, 데이터 전송 중 미세한 위·변조가 발생했는지를 원본 해시와 대조하여 즉각 100% 감지할 수 있음.",
            quote: "🗣️ 교수님 코멘트: '해시는 딱 한마디로 원 웨이 펑션! 일방향 함수다! 점 하나만 찍어도 결과 전체가 바뀌는 눈사태 효과 때문에 무결성 검증에 최고인 거야!'"
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
            explanation: "1. 개념 차이: RBAC는 사용자의 정적 역할(교수, 학생 등)에 사전 정의된 고정 권한을 부여하는 반면, ABAC는 주체/객체 속성뿐만 아니라 접속 시간, 위치/IP, 디바이스 상태 등 동적 환경 조건(Context)을 조합하여 실시간으로 권한을 평가함.<br>2. 이상징후 사례 분석: 정당한 교수 계정이라도 '수업 시간 중 서울 강의실에서 접속해야 할 계정으로 부산 IP에서 로그인'이 발생할 때, RBAC는 역할만 보므로 정상 허용해 버리는 치명적 결함이 있음. 반면 ABAC는 접속 시간과 지리적 위치라는 환경 컨텍스트를 분석하여 비정상 로그인으로 즉각 차단함.<br>3. 제로 트러스트 결론: 절대 신뢰하지 않고 지속 검증하는 제로 트러스트 환경에서, 계정 탈취와 권한 오남용을 실시간 방어할 수 있는 유일한 동적 모델이 ABAC이기 때문에 최종 지향점이 됨."
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
            explanation: "1. 2대 원리 비교: 취약점 악용형은 운영체제/프로토콜의 설계상 버그를 찔러 소량의 비정상 패킷으로도 커널 크래시나 무한 루프를 유발하는 방식이며, 자원 고갈형은 정상적인 통신 절차를 악용하여 대량의 요청을 퍼부어 시스템 자원(CPU, 메모리, 커널 큐)을 고갈시키는 방식임.<br>2. Land Attack (취약점 악용형): 공격자가 패킷의 출발지 IP와 목적지 IP를 피해자의 IP로 동일하게 조작하여 전송함. 피해 서버는 자기 자신에게 응답을 반복하는 무한 루프백에 빠져 시스템 커널이 다운됨.<br>3. SYN Flooding (자원 고갈형): TCP 3-Way Handshake에서 대량의 SYN 패킷을 보내고 서버가 보낸 SYN+ACK에 대해 마지막 ACK를 고의로 응답하지 않음. 이로 인해 서버의 연결 대기 큐인 백로그 큐(Backlog Queue)가 반개방(Half-Open) 연결로 가득 차 정상 사용자의 신규 연결을 모두 거부하게 만듦."
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
            explanation: "① 기본 규격 비교: DES는 Feistel 구조, 블록 크기 64비트, 마스터 키 64비트(유효 키 56비트), 16라운드. AES는 SPN 구조, 블록 크기 128비트 고정, 마스터 키 128/192/256비트, 10/12/14라운드.<br>② 혼돈과 확산 요소: DES는 8개의 S-Box가 혼돈(Confusion)을 제공하고 단순 P-Box가 확산(Diffusion)을 제공함. AES는 SubBytes 치환이 혼돈을 제공하고 ShiftRows(행 이동)와 MixColumns(열 행렬 곱)가 확산을 제공함.<br>③ 복호화 하드웨어 회로 차이: DES(Feistel 구조)는 라운드 함수 f 자체의 역함수가 필요 없으며, 복호화 시 라운드 키의 공급 순서만 역순(K₁₆→K₁)으로 바꾸면 암호화 하드웨어 회로를 100% 그대로 재사용할 수 있어 칩 면적과 비용이 절감됨. 반면 AES(SPN 구조)는 모든 변환이 가역 함수여야 하므로 복호화를 위해 암호화 회로와 완전히 별개의 역변환 전용 하드웨어 회로(InvSubBytes 등)를 추가 구현해야 함."
          }
        ]
      },

      // ========================================================
      // [회차 3] 제3회 전범위 파이널 모의고사
      // ========================================================
      {
        id: "exam3",
        name: "제3회 전범위 파이널 모의고사",
        tag: "전범위 총괄 (100점)",
        desc: "시스템, 네트워크, 웹, 악성코드, 암호학 전 범위를 망라한 최종 실전 마무리 13문항입니다.",
        questions: [
          {
            id: 1, type: "essay", score: 5, origin: "2주차 리눅스 파일 권한",
            text: "[미니 서술형 5점] 리눅스 파일 시스템에서 명령어 'chmod 755 test.sh'를 실행했을 때, 파일 소유자(User)와 그룹(Group)이 각각 부여받는 rwx 권한 표기를 쓰고, 각 8진수 숫자가 의미하는 3가지 기본 권한(읽기, 쓰기, 실행)의 합산 원리를 설명하시오.",
            placeholder: "소유자와 그룹의 rwx 표기 및 8진수 합산 원리를 서술하세요.",
            keywords: ["rwx", "r-x", "읽기 4", "쓰기 2", "실행 1", "합산", "소유자 7", "그룹 5"],
            rubric: [
              { item: "1. 소유자/그룹 권한 표기", desc: "소유자 rwx, 그룹 r-x 정확히 명시 시 2.5점" },
              { item: "2. 8진수 합산 원리", desc: "읽기(4) + 쓰기(2) + 실행(1)의 가중치 합산 원리 설명 시 2.5점" }
            ],
            explanation: "• 권한 표기: 소유자: rwx, 그룹: r-x (기타: r-x)<br>• 합산 원리: 읽기(r)=4, 쓰기(w)=2, 실행(x)=1의 비트 가중치를 갖습니다. 7은 4+2+1=rwx(읽기/쓰기/실행 모두 허용)이며, 5는 4+0+1=r-x(읽기 및 실행만 허용, 쓰기 금지)를 의미합니다.",
            quote: "🗣️ 교수님 코멘트: '유닉스/리눅스 rwx 권한 계산은 시험에 당연히 기본으로 알고 있어야 돼!'"
          },
          {
            id: 2, type: "essay", score: 5, origin: "2주차 AAA 보안 모델",
            text: "[미니 서술형 5점] 보안 시스템 및 RADIUS 서버의 본질적 프레임워크인 'AAA'의 세 가지 핵심 요소(인증, 인가, 어카운팅)의 영문 정식 명칭을 쓰고, 각 요소가 수행하는 역할을 1문장으로 기술하시오.",
            placeholder: "Authentication, Authorization, Accounting의 영문 단어와 역할을 기술하세요.",
            keywords: ["Authentication", "Authorization", "Accounting", "신원 확인", "권한 부여", "사용 내역 기록", "감사"],
            rubric: [
              { item: "1. 영문 정식 단어", desc: "Authentication, Authorization, Accounting 3개 명시 시 2.5점" },
              { item: "2. 요소별 역할 기술", desc: "인증(신원 확인), 인가(권한 부여), 어카운팅(사용 내역 기록 및 감사) 기술 시 2.5점" }
            ],
            explanation: "• AAA 3대 요소 및 역할:<br>1) Authentication (인증): 접속을 시도하는 사용자가 본인이 맞는지 신원을 확인하는 단계.<br>2) Authorization (인가): 인증된 사용자에게 허용된 범위만큼 시스템 자원 및 권한을 부여하는 단계.<br>3) Accounting (계정 관리/어카운팅): 사용자가 시스템을 이용한 접속 시간, 트래픽, 활동 내역을 기록하고 감사 추적하는 단계.",
            quote: "🗣️ 교수님 코멘트: 'AAA 모델! 인증, 인가, 어카운팅! 무선 RADIUS도 바로 이 AAA를 지원하기 때문에 쓰는 거야!'"
          },
          {
            id: 3, type: "essay", score: 5, origin: "3주차 DNS 스푸핑",
            text: "[미니 서술형 5점] 클라이언트가 도메인에 대한 IP 주소를 찾기 위해 DNS 질의를 보낼 때 공격자가 수행하는 'DNS 스푸핑'의 공격 원리를 설명하고, 조직 내부에서 이를 방어하기 위한 대표적 대응책을 서술하시오.",
            placeholder: "DNS 스푸핑의 공격 원리와 대응책을 서술하세요.",
            keywords: ["DNS 질의", "가짜 IP 선응답", "피싱 사이트 유도", "DNS 스푸핑", "사설 내부 DNS", "DNSSEC"],
            rubric: [
              { item: "1. 공격 원리", desc: "진짜 DNS 서버보다 먼저 위조된 IP 응답을 가로채 피싱 사이트로 유도함을 기술 시 2.5점" },
              { item: "2. 대응책", desc: "외부 DNS 쿼리 차단 및 신뢰할 수 있는 사설 내부 DNS 운용 기술 시 2.5점" }
            ],
            explanation: "• 공격 원리: 클라이언트가 DNS 질의 패킷을 발송할 때 공격자가 스니핑을 통해 질의 ID(Transaction ID)를 알아낸 후, 진짜 DNS 서버보다 먼저 위조된 IP 주소가 담긴 응답 패킷을 클라이언트에게 주입하여 가짜 피싱 사이트로 접속을 유도함.<br>• 대응책: 외부 공인 DNS로 나가는 쿼리를 차단하고 조직 내부에서 직접 사설 내부 DNS 서버를 운용하거나, DNSSEC(전자서명 검증) 프로토콜을 적용함.",
            quote: "🗣️ 교수님 코멘트: '중간에 DNS 물어볼 때 공격자가 먼저 가로채서 가짜 IP로 대답하지! 대응책은 DNS 쿼리를 외부로 보내지 말고 내부 DNS 돌리는 거야!'"
          },
          {
            id: 4, type: "essay", score: 5, origin: "3주차 무선 LAN 보안 비교",
            text: "[미니 서술형 5점] 무선 LAN 보안 프로토콜 중 가정/카페 등에서 널리 쓰이는 'WPA-PSK' 모드와 대기업/대학에서 쓰이는 'WPA-Enterprise' 모드의 사용자 인증 및 키 관리 방식 차이점을 비교 서술하시오.",
            placeholder: "WPA-PSK와 WPA-Enterprise의 인증 및 키 관리 차이를 서술하세요.",
            keywords: ["WPA-PSK", "사전 공유키", "동일 비밀번호", "단일 암호", "WPA-Enterprise", "802.1X", "RADIUS", "개별 계정 인증"],
            rubric: [
              { item: "1. WPA-PSK 방식", desc: "모든 사용자가 사전에 공유된 동일한 단일 비밀번호(PSK) 사용 명시 시 2.5점" },
              { item: "2. Enterprise 방식", desc: "802.1X 및 중앙 RADIUS 서버를 통해 사용자별 개별 ID/PW로 독립 인증 명시 시 2.5점" }
            ],
            explanation: "• WPA-PSK (Personal): 모든 접속자가 사전에 공유된 하나의 동일한 비밀번호(Pre-Shared Key)를 공유하여 접속하므로, 패스워드가 유출되면 모든 사용자의 통신이 도청될 위험이 있음.<br>• WPA-Enterprise: 802.1X 표준 및 중앙 RADIUS 서버와 연동하여 개별 사용자마다 고유한 ID/PW 또는 인증서로 독립 인증을 수행하므로 권한 통제와 보안성이 월등히 뛰어남.",
            quote: "🗣️ 교수님 코멘트: '개인용은 스타벅스처럼 PSK로 비번 하나 공유해서 쓰고, 학교나 기업은 RADIUS 서버 붙여서 개별 계정으로 들어가지!'"
          },
          {
            id: 5, type: "essay", score: 5, origin: "4주차 HTTP 상태 코드 비교",
            text: "[미니 서술형 5점] 웹 애플리케이션에서 자주 발생하는 HTTP 상태 코드 중 `404 Not Found`와 `500 Internal Server Error`의 발생 원인과 결함의 주체(클라이언트 측 원인 vs 서버 내부 로직 결함)를 비교 기술하시오.",
            placeholder: "404와 500의 원인과 주체 차이를 비교 기술하세요.",
            keywords: ["404 Not Found", "자원 없음", "클라이언트 오류", "500 Internal Server Error", "서버 내부 오류", "서버 로직 결함"],
            rubric: [
              { item: "1. 404 원인 및 주체", desc: "클라이언트가 요청한 URL 자원이 서버에 존재하지 않음 (클라이언트 측 오류) 기술 시 2.5점" },
              { item: "2. 500 원인 및 주체", desc: "서버 백엔드 소스코드 예외/DB 장애로 요청 처리 실패 (서버 측 오류) 기술 시 2.5점" }
            ],
            explanation: "• 404 Not Found: 클라이언트가 요청한 URI에 해당하는 파일이나 웹 페이지가 서버상에 존재하지 않을 때 반환되는 '클라이언트 요청 오류(4xx)'임.<br>• 500 Internal Server Error: 요청 문법은 정상이지만 서버 백엔드 코드의 런타임 예외, 데이터베이스 연결 실패 등 서버 내부 시스템의 결함으로 인해 처리가 중단되었을 때 반환되는 '서버 오류(5xx)'임.",
            quote: "🗣️ 교수님 코멘트: '상태 코드 404랑 500의 차이점! 404는 페이지가 없는 거고 500은 서버 프로그램이 에러 나서 터진 거야!'"
          },
          {
            id: 6, type: "essay", score: 5, origin: "4주차 해킹 침투 4단계",
            text: "[미니 서술형 5점] 시스템에 침투하는 일반적인 해킹 4단계 프로세스(공격 대상 선정 → 정보 수집 → 취약점 분석 → 침투/공격)의 순서를 기술하고, 왜 '취약점 분석'에 앞서 '정보 수집(Reconnaissance)' 단계가 필수적인지 이유를 설명하시오.",
            placeholder: "4단계 프로세스와 정보 수집이 선행되어야 하는 이유를 서술하세요.",
            keywords: ["공격 대상 선정", "정보 수집", "Recon", "취약점 분석", "침투 공격", "OS 식별", "오픈 포트", "서비스 버전"],
            rubric: [
              { item: "1. 4단계 정확한 순서", desc: "공격 대상 선정 → 정보 수집 → 취약점 분석 → 침투 및 공격 명시 시 2.5점" },
              { item: "2. 정보 수집 선행 이유", desc: "대상 시스템의 OS, 오픈 포트, 실행 서비스 버전을 알아야 적합한 취약점을 매핑할 수 있음을 기술 시 2.5점" }
            ],
            explanation: "• 해킹 4단계 순서: 1) 공격 대상 선정 → 2) 정보 수집 → 3) 취약점 분석 → 4) 침투 및 공격<br>• 선행 이유: 공격 대상의 운영체제(OS), 개방된 네트워크 포트, 실행 중인 웹 서버 및 데몬의 정확한 버전 정보(Banner)를 먼저 수집해야만, 해당 버전에 존재하는 정확한 보안 취약점(CVE)을 찾아내 공격 도구를 맞춤 설계할 수 있기 때문임.",
            quote: "🗣️ 교수님 코멘트: '시스템에 침투하는 일반적인 과정! 대상 고르고, 정보 수집하고, 취약점 찾아서, 공격 들어가는 거야!'"
          },
          {
            id: 7, type: "essay", score: 5, origin: "5주차 버퍼 오버플로우",
            text: "[미니 서술형 5점] 버퍼 오버플로우(Buffer Overflow) 공격의 근본적인 취약점 발생 원인을 메모리 경계 검사 관점에서 설명하고, 공격자가 시스템 침투 후 자신의 이전 침입 흔적(로그)을 은닉하기 위해 이를 어떻게 활용하는지 기술하시오.",
            placeholder: "발생 원인과 로그 은닉 활용 방식을 서술하세요.",
            keywords: ["버퍼 오버플로우", "메모리 경계 검사 부재", "할당 크기 초과", "반환 주소 변조", "로그 파일 고갈", "로그 덮어쓰기"],
            rubric: [
              { item: "1. 근본 취약점 원인", desc: "입력값의 메모리 경계 검사를 수행하지 않아 인접 메모리를 덮어씀을 기술 시 2.5점" },
              { item: "2. 로그 은닉 활용", desc: "대량의 데이터로 버퍼를 넘치게 해 로그 시스템을 마비시키거나 로그를 덮어써 지움 기술 시 2.5점" }
            ],
            explanation: "• 발생 원인: 프로그램 작성 시 입력 데이터의 크기가 할당된 버퍼 메모리 한도를 초과하는지 경계 검사(Boundary Check)를 하지 않아, 초과된 데이터가 인접 메모리의 반환 주소(Return Address) 등을 덮어써 임의 코드를 실행시킴.<br>• 로그 은닉 활용: 공격자가 시스템 침투 후 고의로 대용량 데이터를 주입하는 버퍼 오버플로우를 일으켜 로그 버퍼/파일을 덮어쓰거나 로그 데몬을 비정상 종료시켜 이전 침입 기록을 삭제·은닉함.",
            quote: "🗣️ 교수님 코멘트: '버퍼 오버플로우로 메모리 넘치게 해서 공격도 하지만, 로그를 다 지워버리는 목적으로도 쓴다고 했지!'"
          },
          {
            id: 8, type: "essay", score: 5, origin: "6주차 AES 키 확장 연산",
            text: "[미니 서술형 5점] AES 알고리즘의 라운드 키 확장(Key Expansion) 과정에서 사용되는 3대 핵심 연산 함수(RotWord, SubWord, Rcon)의 명칭을 쓰고, 각각의 변환 동작을 간단히 설명하시오.",
            placeholder: "RotWord, SubWord, Rcon의 변환 동작을 각각 기술하세요.",
            keywords: ["RotWord", "워드 순환 이동", "SubWord", "S-Box 치환", "Rcon", "라운드 상수 XOR"],
            rubric: [
              { item: "1. 3대 연산 명칭", desc: "RotWord, SubWord, Rcon 3가지 명시 시 2점" },
              { item: "2. 각 연산 동작 설명", desc: "RotWord(바이트 좌측 순환), SubWord(S-Box 1바이트 치환), Rcon(라운드 상수 비트 XOR) 설명 시 3점" }
            ],
            explanation: "• AES 키 확장 3대 연산:<br>1) RotWord: 4바이트 1워드의 바이트들을 좌측으로 1칸 순환 이동시킴 [B0,B1,B2,B3 → B1,B2,B3,B0].<br>2) SubWord: 워드의 4개 바이트 각각에 대해 S-Box 테이블을 참조하여 비선형 바이트 치환을 수행함.<br>3) Rcon (Round Constant): 각 라운드마다 고유하게 정의된 라운드 상수와 비트별 XOR 연산을 수행하여 대칭성을 파괴함.",
            quote: "🗣️ 교수님 코멘트: 'AES에서 키 만드는 거 설명할 수 있어야 돼! 롯워드 돌리고 서브워드 치환하고 알콘 XOR 하는 거!'"
          },
          {
            id: 9, type: "essay", score: 5, origin: "6주차 RSA 키 생성 공식",
            text: "[미니 서술형 5점] RSA 공개키 암호 알고리즘에서 서로 다른 두 큰 소수 p와 q를 선정했을 때, 모듈러스 n과 오일러 피 함수 φ(n)의 계산 공식을 쓰고, 개인키 d를 도출하기 위한 공개키 지수 e와의 합동식 조건을 기술하시오.",
            placeholder: "n = p*q, φ(n) 공식 및 (e * d) mod φ(n) = 1 합동식을 적으세요.",
            keywords: ["n = p * q", "φ(n) = (p-1)(q-1)", "서로소", "e * d ≡ 1 (mod φ(n))", "모듈러 역원"],
            rubric: [
              { item: "1. n 및 φ(n) 공식", desc: "n = p × q 및 φ(n) = (p - 1)(q - 1) 명시 시 2.5점" },
              { item: "2. 개인키 d 합동식", desc: "e · d ≡ 1 (mod φ(n)) 또는 (e × d) mod φ(n) = 1 명시 시 2.5점" }
            ],
            explanation: "• 모듈러스: n = p × q<br>• 오일러 피 함수: φ(n) = (p - 1)(q - 1)<br>• 공개키와 개인키 합동식: 공개키 지수 e는 φ(n)과 서로소(gcd=1)인 정수로 선정하며, 개인키 d는 `e × d ≡ 1 (mod φ(n))`을 만족하는 e의 모듈러 곱셈 역원으로 산출함.",
            quote: "🗣️ 교수님 코멘트: 'RSA에서 두 소수 곱해서 n 만들고, (p-1)(q-1)로 파이값 구해서 e랑 d 구하는 수식은 시험에 무조건이야!'"
          },
          {
            id: 10, type: "essay", score: 5, origin: "6주차 플레이페어 중복 문자",
            text: "[미니 서술형 5점] 플레이페어(Playfair) 5×5 암호화 전처리 과정에서 평문을 2글자 쌍(Digraph)으로 나눌 때, 한 쌍 내에 동일한 알파벳이 연속되는 경우(예: 'LL') 분리를 위해 삽입하는 표준 알파벳을 적고, 글자 수가 홀수 개일 때의 패딩 처리 방식을 기술하시오.",
            placeholder: "중복 분리 문자 'x'와 홀수 글자 처리 방식을 기술하세요.",
            keywords: ["x 삽입", "q", "중복 분리", "홀수 패딩", "끝에 x 추가"],
            rubric: [
              { item: "1. 중복 분리 문자", desc: "중간에 'x' (또는 'q') 삽입 명시 시 2.5점" },
              { item: "2. 홀수 글자 패딩", desc: "마지막 홀수 글자 뒤에 'x'를 추가하여 짝수 쌍 완성 기술 시 2.5점" }
            ],
            explanation: "• 중복 분리 문자: 같은 문자가 연속되면(예: BALLOON → BA, LL...), 같은 행/열 또는 사각형 치환 규칙을 적용할 수 없으므로 두 글자 사이에 'x'(또는 드물게 'q')를 삽입하여 분리함 (예: LX, LO...).<br>• 홀수 글자 처리: 전체 평문을 2글자씩 묶은 후 마지막 글자가 하나만 남아 홀수가 되면 맨 끝에 'x'를 추가하여 짝수 쌍을 완성함.",
            quote: "🗣️ 교수님 코멘트: '플레이페어에서 글자 두 개씩 묶는데 똑같은 글자 나오면 어떻게 해? x 넣어서 떼어내고, 홀수로 끝나도 뒤에 x 붙이지!'"
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

      // ========================================================
      // [회차 4] 제4회 암호학·네트워크 출제스포 마스터 모의고사
      // ========================================================
      {
        id: "exam4",
        name: "제4회 암호학·네트워크 출제스포 마스터 모의고사",
        tag: "출제스포 전범위 (100점)",
        desc: "대칭키 vs 비대칭키, 블록 암호 운영 모드(ECB/CBC), 해시 함수 3대 특성, 전자서명 원리, SYN Flooding, SQL Injection 등을 미니 서술형으로 전면 개편한 실전 13문항입니다.",
        questions: [
          {
            id: 1, type: "essay", score: 5, origin: "해시 함수와 무결성 검증",
            text: "[미니 서술형 5점] 데이터의 무결성(Integrity)을 검증하기 위해 해시 함수(Hash Function)가 임의 길이의 평문 메시지를 고정 길이 다이제스트로 변환하는 동작 원리를 설명하고, 일반 암호화와 달리 복호화가 불가능한 이유를 서술하시오.",
            placeholder: "해시 함수의 다이제스트 변환 원리와 복호화 불가능 이유를 서술하세요.",
            keywords: ["해시 함수", "고정 길이 다이제스트", "무결성", "일방향성", "복호화 불가", "정보 손실", "다대일 매핑"],
            rubric: [
              { item: "1. 다이제스트 변환 원리", desc: "임의 길이 입력을 고정 길이 해시값으로 압축 매핑함을 기술 시 2.5점" },
              { item: "2. 복호화 불가능 이유", desc: "압축 과정에서 정보 손실이 발생하여 원본 복원이 불가능한 일방향 함수임을 기술 시 2.5점" }
            ],
            explanation: "• 동작 원리: 해시 함수는 임의의 가변 길이를 가진 데이터를 입력받아 고정된 크기(예: SHA-256은 256비트)의 고유한 해시 다이제스트로 압축 변환하여 데이터 무결성을 검증함.<br>• 복호화 불가능 이유: 수많은 비트가 고정 길이로 압축되면서 수학적인 다대일(Many-to-One) 매핑과 비가역적 정보 손실이 발생하므로, 결과 다이제스트만으로는 원본 평문을 복호화할 수 없음.",
            quote: "🗣️ 교수님 코멘트: '해시는 암호화랑 달라! 복호화 키가 있는 게 아니라 원본을 못 푸는 원 웨이 펑션이야!'"
          },
          {
            id: 2, type: "essay", score: 5, origin: "블록 암호 운영 모드: ECB의 취약점",
            text: "[미니 서술형 5점] 블록 암호 운영 모드 중 ECB(Electronic Codebook)의 블록 처리 방식을 설명하고, 동일한 평문 블록이 연속될 때 비트맵 이미지의 윤곽선(패턴)이 암호문에서도 그대로 노출되는 취약점의 원인을 서술하시오.",
            placeholder: "ECB 모드의 독립 블록 처리 방식과 패턴 노출 원인을 서술하세요.",
            keywords: ["ECB", "독립적 암호화", "동일 평문 동일 암호문", "블록 연쇄 없음", "패턴 노출", "기밀성 침해"],
            rubric: [
              { item: "1. 블록 처리 방식", desc: "각 평문 블록을 이전 블록과 무관하게 독립적으로 암호화함을 기술 시 2.5점" },
              { item: "2. 패턴 노출 원인", desc: "동일한 평문 블록은 항상 100% 동일한 암호문 블록으로 치환되어 통계적 패턴 노출 기술 시 2.5점" }
            ],
            explanation: "• 블록 처리 방식: 평문을 블록 단위로 분할한 뒤, 블록 간의 상호작용(연쇄) 없이 각 블록을 독립적으로 동일한 비밀키로 암호화함.<br>• 패턴 노출 원인: 동일한 내용을 담은 평문 블록은 항상 동일한 암호문 블록으로 1:1 치환되므로, 비트맵 이미지처럼 동일 색상이 연속되는 영역은 암호화 후에도 원본의 윤곽선과 패턴이 시각적으로 그대로 드러남.",
            quote: "🗣️ 교수님 코멘트: 'ECB 모드로 리눅스 펭귄 이미지 암호화하면 펭귄 윤곽선이 그대로 보이지! 블록끼리 안 섞여서 그래!'"
          },
          {
            id: 3, type: "essay", score: 5, origin: "CBC 모드와 초기화 벡터 (IV)",
            text: "[미니 서술형 5점] CBC(Cipher Block Chaining) 모드에서 '초기화 벡터(IV)'를 사용하는 목적과, 이전 암호문 블록을 다음 평문 블록과 XOR 연쇄시키는 동작이 동일한 평문 패턴 노출을 어떻게 방지하는지 기술하시오.",
            placeholder: "IV의 사용 목적과 XOR 체이닝이 패턴 노출을 방지하는 원리를 서술하세요.",
            keywords: ["CBC", "초기화 벡터", "IV", "첫 블록 XOR", "직전 암호문 연쇄", "무작위 난수화", "패턴 은닉"],
            rubric: [
              { item: "1. IV 사용 목적", desc: "첫 번째 블록 암호화 시 참조할 직전 암호문이 없으므로 무작위 난수 IV와 XOR 수행 기술 시 2.5점" },
              { item: "2. 패턴 노출 방지 원리", desc: "직전 암호문과 XOR 연쇄되어 동일한 평문 블록도 완전히 다른 무작위 암호문으로 변환됨 기술 시 2.5점" }
            ],
            explanation: "• IV 목적: 첫 번째 블록 암호화 시 연쇄할 이전 암호문이 없으므로 무작위 난수인 IV(Initialization Vector)와 XOR 연산하여 동일 평문이라도 매번 다른 암호문이 생성되도록 보장함.<br>• 패턴 은닉 원리: C_i = E_K(P_i ⊕ C_{i-1}) 형태로 직전 암호문이 다음 평문과 XOR 결합되므로, 동일한 평문 블록이라 하더라도 앞선 블록의 암호문 결과에 따라 완전히 다른 무작위 암호문으로 난수화되어 패턴이 완전히 은닉됨.",
            quote: "🗣️ 교수님 코멘트: 'CBC는 체인처럼 엮는 거야! 첫 번째 블록은 IV랑 XOR 하고, 그 다음 블록은 직전 암호문이랑 엮어버리지!'"
          },
          {
            id: 4, type: "essay", score: 5, origin: "전자서명 생성 키와 부인 방지",
            text: "[미니 서술형 5점] 공개키 암호 알고리즘을 활용한 전자서명(Digital Signature)에서, 송신자가 서명을 생성할 때 '송신자의 개인키'를 사용해야만 하는 이유를 신원 보증 및 부인 방지(Non-repudiation) 관점에서 서술하시오.",
            placeholder: "송신자의 개인키로 서명해야 하는 이유를 신원 보증과 부인 방지 관점에서 서술하세요.",
            keywords: ["송신자 개인키", "유일성", "비밀 보관", "신원 보증", "위조 불가", "부인 방지"],
            rubric: [
              { item: "1. 신원 보증 원리", desc: "개인키는 오직 송신자만 소유하므로 송신자의 공개키로 풀리면 송신자 본인임이 증명됨 명시 시 2.5점" },
              { item: "2. 부인 방지 성립", desc: "제3자가 위조할 수 없으므로 사후에 자신이 보낸 것이 아니라고 발뺌할 수 없음 명시 시 2.5점" }
            ],
            explanation: "• 이유: 개인키(Private Key)는 전 세계에서 오직 송신자 본인만이 엄격하게 비밀로 보관하는 유일한 키임. 따라서 송신자의 개인키로 서명하고 누구나 알 수 있는 송신자의 공개키로 정상 검증(복호화)에 성공했다면, 오직 송신자만이 서명을 생성할 수 있었음이 입증되므로 송신자는 사후에 자신이 작성하지 않았다고 발뺌(부인)할 수 없음.",
            quote: "🗣️ 교수님 코멘트: '전자서명은 내 개인키로 해야 돼! 내 공개키로 풀리면 내가 보낸 게 확실하니까 발뺌을 못 하는 거야!'"
          },
          {
            id: 5, type: "essay", score: 5, origin: "서비스 거부 공격: SYN Flooding",
            text: "[미니 서술형 5점] TCP 3-Way Handshake 취약점을 악용하는 SYN Flooding 공격에서 공격자가 수행하는 패킷 전송 방식과, 피해 서버의 백로그 큐(Backlog Queue)가 고갈되어 정상 서비스가 거부되는 메커니즘을 서술하시오.",
            placeholder: "패킷 전송 방식과 백로그 큐 고갈 메커니즘을 서술하세요.",
            keywords: ["SYN 패킷", "위조 IP", "ACK 미전송", "3-Way Handshake", "백로그 큐", "반개방", "Half-Open", "정상 연결 거부"],
            rubric: [
              { item: "1. 패킷 전송 방식", desc: "대량의 SYN 패킷을 보내고 서버의 SYN+ACK에 대해 마지막 ACK를 고의로 보내지 않음 명시 시 2.5점" },
              { item: "2. 백로그 큐 고갈", desc: "서버 연결 대기 큐가 반개방 상태로 가득 차 정상 사용자의 신규 연결을 거부함 기술 시 2.5점" }
            ],
            explanation: "• 패킷 전송 방식: 공격자가 대량의 위조된 IP로 SYN 패킷만을 지속적으로 전송하고, 서버가 SYN+ACK 응답을 보내고 대기할 때 마지막 ACK 패킷을 고의로 회신하지 않음.<br>• 마비 메커니즘: 서버는 반개방(Half-Open) 연결 대기 상태로 자원을 할당해 두며, 이로 인해 서버의 연결 대기 테이블인 백로그 큐(Backlog Queue)가 가득 차서 정상적인 사용자의 합법적 3-Way Handshake 연결 요청을 모두 거부하게 됨.",
            quote: "🗣️ 교수님 코멘트: 'SYN만 엄청 보내고 마지막 ACK를 안 보내면 서버 백로그 큐가 꽉 차서 뻗어버리는 게 SYN 플러딩이야!'"
          },
          {
            id: 6, type: "essay", score: 5, origin: "메시지 인증 코드 (HMAC)",
            text: "[미니 서술형 5점] 단순 해시 함수(SHA-256 등)와 달리, HMAC(Hash-based Message Authentication Code)가 비밀 대칭키를 결합함으로써 메시지의 '무결성'뿐만 아니라 '출처 인증(Authentication)'까지 동시에 제공하는 원리를 서술하시오.",
            placeholder: "비밀키 결합으로 출처 인증까지 가능해지는 원리를 서술하세요.",
            keywords: ["HMAC", "비밀 대칭키", "해시 함수", "무결성", "출처 인증", "중간자 위조 차단"],
            rubric: [
              { item: "1. 단순 해시의 한계", desc: "단순 해시는 키가 없어 중간 공격자가 변조 후 새 해시값을 생성하면 막지 못함 기술 시 2.5점" },
              { item: "2. HMAC의 해결 원리", desc: "송수신자만 공유하는 비밀키가 없으면 해시값을 위조할 수 없으므로 정당한 송신자 증명 기술 시 2.5점" }
            ],
            explanation: "• 원리: 단순 해시 함수는 누구나 계산할 수 있어 중간 공격자가 메시지를 변조하고 해시값을 새로 계산해 바꿔치기하면 감지할 수 없음. 반면 HMAC는 송·수신자만이 공유하는 비밀 대칭키(K)를 원본 데이터와 함께 혼합하여 해싱하므로, 비밀키를 모르는 공격자는 유효한 HMAC 값을 위조할 수 없어 '데이터 위변조 감지(무결성)'와 '정당한 송신자가 보냈음(출처 인증)'을 동시에 보장함.",
            quote: "🗣️ 교수님 코멘트: '단순 해시는 공격자도 돌릴 수 있잖아? 그래서 둘만 아는 비밀키를 섞어서 만든 게 HMAC야!'"
          },
          {
            id: 7, type: "essay", score: 5, origin: "웹 보안 취약점: SQL Injection",
            text: "[미니 서술형 5점] 웹 애플리케이션의 SQL Injection 취약점이 발생하는 근본 원인을 설명하고, 시큐어 코딩에서 'PreparedStatement(매개변수화된 쿼리)'를 사용하는 것이 왜 이 공격을 원천 차단할 수 있는지 서술하시오.",
            placeholder: "발생 원인과 PreparedStatement의 방어 원리를 서술하세요.",
            keywords: ["SQL Injection", "입력값 검증 부재", "코드와 데이터 혼재", "PreparedStatement", "매개변수화", "단순 데이터 취급"],
            rubric: [
              { item: "1. 발생 근본 원인", desc: "사용자 입력값이 동적 쿼리 생성 시 문법적 코드로 해석되기 때문임 기술 시 2.5점" },
              { item: "2. PreparedStatement 원리", desc: "쿼리 문법을 미리 컴파일하고 사용자 입력을 단순 리터럴 데이터로만 취급하여 쿼리 변조 원천 차단 기술 시 2.5점" }
            ],
            explanation: "• 발생 원인: 사용자 입력 문자열을 검증 없이 SQL 쿼리문과 동적으로 결합(String Concatenation)하여 실행함으로써, 공격자의 악의적 입력값이 SQL 문법 구조(명령어)로 해석되기 때문임.<br>• 방어 원리: PreparedStatement는 쿼리 구조(문법)를 데이터베이스 엔진에 미리 컴파일해 두고 사용자 입력값은 자리표시자(?)에 단순한 문자열 '데이터(Literal)'로만 바인딩하므로, 입력값에 아무리 작은따옴표나 SQL 명령어가 포함되어도 문법 구조가 절대 변조되지 않아 공격을 원천 차단함.",
            quote: "🗣️ 교수님 코멘트: 'SQL 인젝션 막으려면 어떻게 해? 프리페어드 스테이트먼트 써서 입력값을 무조건 글자로만 인식시키면 끝나!'"
          },
          {
            id: 8, type: "essay", score: 5, origin: "비밀 은닉 기법: 스테가노그래피",
            text: "[미니 서술형 5점] 일반 암호화(Cryptography)와 비밀 은닉 기법인 '스테가노그래피(Steganography)'의 보안 접근 방식 차이점을 '메시지의 판독 불가능성'과 '메시지 존재의 은닉성' 관점에서 비교 서술하시오.",
            placeholder: "일반 암호화와 스테가노그래피의 접근 방식 차이를 비교하세요.",
            keywords: ["일반 암호화", "암호문 존재 노출", "판독 불가능", "스테가노그래피", "메시지 존재 자체 은닉", "사진 LSB", "감지 불가"],
            rubric: [
              { item: "1. 일반 암호화 접근", desc: "암호화된 데이터의 존재는 노출되나 내용을 판독하지 못하게 만듦 명시 시 2.5점" },
              { item: "2. 스테가노그래피 접근", desc: "사진/음원 파일 등에 비밀 메시지를 숨겨 통신 사실 자체를 인지하지 못하게 함 명시 시 2.5점" }
            ],
            explanation: "• 일반 암호화: 제3자가 암호문이 존재한다는 사실(암호 통신을 하고 있음)을 알 수 있지만, 복호화 키 없이는 내용을 해독하거나 판독할 수 없도록 만듦.<br>• 스테가노그래피: 이미지 파일(.png 등)의 최하위 비트(LSB)나 오디오 파일 등에 비밀 메시지를 육안이나 청각으로 식별할 수 없게 삽입하여, 비밀 통신이 이루어지고 있다는 사실(메시지의 존재 자체)을 완전히 숨김.",
            quote: "🗣️ 교수님 코멘트: '암호화는 겉으로 봐도 암호인 줄 알지만, 스테가노그래피는 그냥 평범한 사진처럼 보여서 숨기는 거야!'"
          },
          {
            id: 9, type: "essay", score: 5, origin: "디피-헬만과 수학적 난제",
            text: "[미니 서술형 5점] Diffie-Hellman 키 교환 알고리즘이 도청 가능한 공개 채널에서 대칭 세션키를 안전하게 공유할 수 있는 수학적 기반(이산대수 문제)을 설명하고, 당사자 간 상호 인증 부재로 인해 노출되는 치명적인 취약점(공격 명칭)을 기술하시오.",
            placeholder: "이산대수의 어려움과 중간자 공격(MITM) 취약점을 서술하세요.",
            keywords: ["Diffie-Hellman", "이산대수 문제", "Discrete Logarithm", "역연산 난해", "상호 인증 부재", "중간자 공격", "MITM"],
            rubric: [
              { item: "1. 수학적 기반", desc: "모듈러 거듭제곱 계산은 쉬우나 역연산인 이산대수 계산은 수학적으로 극도로 어려움 기술 시 2.5점" },
              { item: "2. 치명적 취약점", desc: "상호 인증 부재로 인한 중간자 공격 (MITM, Man-in-the-Middle Attack) 명시 시 2.5점" }
            ],
            explanation: "• 수학적 기반: 공유키 K = g^(ab) mod p를 계산할 때, 공개된 g^a와 g^b로부터 지수 a 또는 b를 역산하는 것은 거대한 소수 환경에서 '이산대수 문제(Discrete Logarithm Problem)'의 계산 복잡성 때문에 수학적으로 불가능함.<br>• 치명적 취약점: 통신 당사자 간에 상대방의 신원을 검증하는 상호 인증(Authentication) 메커니즘이 없어, 공격자가 중간에서 양측과 각각 별개의 키를 협상해 가로채는 '중간자 공격(MITM, Man-in-the-Middle Attack)'에 취약함.",
            quote: "🗣️ 교수님 코멘트: '디피-헬만은 이산대수 문제 기반인데, 중간자 공격(MITM)에 취약해! 데이터 암호화가 아니라 키 교환 알고리즘이야!'"
          },
          {
            id: 10, type: "essay", score: 5, origin: "해시 함수 충돌 저항성",
            text: "[미니 서술형 5점] 암호학적 해시 함수의 3대 충돌 저항성 특성인 1) 역상 저항성(Preimage Resistance), 2) 제2 역상 저항성(Second Preimage Resistance), 3) 충돌 저항성(Collision Resistance)의 개념적 차이를 각각 1문장으로 비교 설명하시오.",
            placeholder: "역상 저항성, 제2 역상 저항성, 충돌 저항성의 개념을 각각 기술하세요.",
            keywords: ["역상 저항성", "해시로부터 원본 역추적 불가", "제2 역상 저항성", "주어진 x와 동일 해시 갖는 x' 탐색 불가", "충돌 저항성", "동일 해시 갖는 임의의 두 쌍 탐색 불가"],
            rubric: [
              { item: "1. 역상 저항성", desc: "주어진 해시 y = H(x)로부터 원래 입력 x를 역산할 수 없음 명시 시 1.5점" },
              { item: "2. 제2 역상 저항성", desc: "특정 입력 x가 주어졌을 때 H(x)=H(x')를 만족하는 다른 x'를 찾을 수 없음 명시 시 1.5점" },
              { item: "3. 충돌 저항성", desc: "H(x)=H(y)를 만족하는 임의의 서로 다른 두 입력 쌍 (x, y)를 찾을 수 없음 명시 시 2점" }
            ],
            explanation: "1) 역상 저항성 (1st Preimage): 주어진 해시값 h에 대해 H(x) = h를 만족하는 원본 입력 x를 찾는 것이 불가능함.<br>2) 제2 역상 저항성 (2nd Preimage): 특정 입력 x가 이미 주어졌을 때, H(x) = H(x')를 만족하면서 x와 다른 제2의 입력 x'를 찾는 것이 불가능함.<br>3) 충돌 저항성 (Collision): 사전 조건 없이 동일한 해시값을 갖는 임의의 서로 다른 두 입력 쌍 (x, y)를 찾아내는 것이 불가능함.",
            quote: "🗣️ 교수님 코멘트: '해시의 3대 특성! 역상 저항성, 제2 역상 저항성, 충돌 저항성의 차이를 구분할 수 있어야 돼!'"
          },
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
            explanation: "1) 키의 동일성: 대칭키(AES, DES)는 암호화와 복호화에 동일한 비밀키를 사용하여 사전 공유가 필요함. 비대칭키(RSA, ECC)는 공개키(누구나 알 수 있음)와 개인키(본인만 보관)의 쌍으로 구성되어 키 분배 문제를 해결함.<br>2) 키 개수: n명의 참여자가 1:1 비밀 통신을 하려면 대칭키는 n(n-1)/2개의 서로 다른 키가 필요하여 관리가 어렵지만, 비대칭키는 각자 한 쌍씩 총 2n개의 키만 있으면 충분함.<br>3) 속도 및 활용: 대칭키는 비트 치환/치환으로 연산 속도가 매우 빨라 대용량 데이터 전송에 적합함. 비대칭키는 거듭제곱 모듈러 등 고난도 수학 연산으로 속도가 수백 배 느리므로 대칭키를 안전하게 교환하기 위한 봉투(하이브리드 암호)나 전자서명에 주로 활용됨."
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
            explanation: "1) 서명 생성: 송신자는 원문 메시지를 해시 함수(SHA-256)에 통과시켜 고정 길이 다이제스트를 생성하고, 이를 '송신자의 개인키'로 암호화하여 전자서명을 만든 후 원문과 함께 전송함.<br>2) 서명 검증: 수신자는 전송받은 전자서명을 '송신자의 공개키'로 복호화하여 해시값 A를 얻고, 동시에 전송받은 원문 메시지를 동일한 해시 함수에 넣어 해시값 B를 자체 계산함. 해시값 A와 B가 완벽히 일치하면 검증 성공.<br>3) 3대 보안 효용: ① 메시지 인증: 오직 송신자만이 개인키를 가지고 있으므로 송신자가 작성했음을 증명함. ② 무결성 보장: 전송 중 1비트라도 변조되면 해시값이 달라져 검증에 실패함. ③ 부인 방지: 송신자 개인키로만 서명이 생성되므로 사후에 자신이 보내지 않았다고 발뺌할 수 없음."
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
            explanation: "1) ECB 모드와 취약점: ECB는 평문을 블록 단위로 잘라 각 블록을 독립적으로 암호화합니다. 따라서 동일한 내용을 담은 평문 블록은 항상 100% 동일한 암호문 블록으로 변환됩니다. 이로 인해 암호화 후에도 원본 비트맵 이미지의 윤곽선과 같은 통계적 데이터 패턴이 암호문에 그대로 드러나 기밀성을 침해당합니다.<br>2) CBC 암호화 체이닝: CBC는 블록들을 체인처럼 연결합니다. 첫 번째 평문 블록 P1은 무작위 난수인 IV(초기화 벡터)와 먼저 XOR 연산을 거친 후 비밀키로 암호화되어 C1이 됩니다. 두 번째 평문 블록 P2는 직전 암호문 블록 C1과 XOR 연산을 거친 후 암호화되어 C2가 됩니다. 즉, C_i = E_K(P_i ⊕ C_{i-1}) 형태로 연쇄되므로 설령 P1과 P2가 동일한 데이터라도 전혀 다른 무작위 암호문으로 난수화됩니다.<br>3) CBC 복호화: 수신 측에서는 암호문 블록 C_i를 비밀키 K로 먼저 복호화(D_K)한 뒤, 그 결과를 직전 암호문 블록 C_{i-1}(첫 블록은 IV)과 XOR 연산하여 원래의 평문 P_i를 복원합니다: P_i = D_K(C_i) ⊕ C_{i-1}."
          }
        ]
      },

      // ========================================================
      // [회차 5] 제5회 실전 적중 마스터 모의고사 (신규 추가)
      // ========================================================
      {
        id: "exam5",
        name: "제5회 실전 적중 마스터 모의고사",
        tag: "신규 적중 (100점)",
        desc: "수업 교안과 총정리 녹취록을 교차 분석하여 만든 13문항 완벽 실전 모의고사입니다. (단답·미니서술 10문항 50점 + 심화서술 3문항 50점)",
        questions: [
          {
            id: 1, type: "essay", score: 5, origin: "1주차 CIA Triad 핵심 연계 기술",
            text: "[미니 서술형 5점] 정보보안의 3대 요소(CIA Triad) 중 '기밀성(Confidentiality)'과 '무결성(Integrity)'을 보장하기 위해 주로 적용되는 대표적인 핵심 연계 기술을 각각 1가지씩 적고, 각 기술이 해당 요소를 어떻게 보장하는지 1문장으로 기술하시오.",
            placeholder: "기밀성 연계 기술과 무결성 연계 기술의 보장 방식을 서술하세요.",
            keywords: ["기밀성", "암호화", "AES", "DES", "무결성", "해시 함수", "Hash", "도청 방지", "위변조 감지"],
            rubric: [
              { item: "1. 기밀성 연계 기술", desc: "암호화(AES, DES 등)로 비인가자의 데이터 열람/도청을 방지함 기술 시 2.5점" },
              { item: "2. 무결성 연계 기술", desc: "해시 함수(Hash)로 데이터 위·변조 여부를 즉각 감지함 기술 시 2.5점" }
            ],
            explanation: "• 기밀성 연계 기술: 암호화 (AES, DES 등) → 비인가자가 패킷을 가로채더라도 복호화 키 없이는 내용을 열람할 수 없도록 만들어 기밀성을 보장함.<br>• 무결성 연계 기술: 해시 함수 (Hash) → 원본 데이터가 1비트라도 위·변조되면 완전히 다른 해시값이 생성되므로 데이터 변경 여부를 즉각 검증하여 무결성을 보장함.",
            quote: "🗣️ 교수님 코멘트: '암호는 기밀성, 해시는 무결성을 위해 쓴다는 연계 관계를 정확히 이해해야 돼!'"
          },
          {
            id: 2, type: "essay", score: 5, origin: "2주차 인증 vs 인가 시점",
            text: "[미니 서술형 5점] 사용자 '인증(Authentication)'과 '인가(Authorization)'의 개념적 차이를 '로그인 시점'을 기준으로 명확히 비교하여 설명하시오.",
            placeholder: "로그인 시점을 기준으로 두 개념의 차이를 서술하세요.",
            keywords: ["인증", "인가", "로그인 시점", "신원 확인", "권한 부여", "서비스 사용"],
            rubric: [
              { item: "1. 인증 정의 및 시점", desc: "로그인 시점까지 신원 확인 단계 명시 시 2.5점" },
              { item: "2. 인가 정의 및 시점", desc: "로그인 이후 허가된 권한 범위만큼 서비스/데이터 이용 단계 명시 시 2.5점" }
            ],
            explanation: "• 인증 (Authentication): 시스템에 접근하려는 주체가 본인이 맞는지 신원을 증명하고 확인하는 단계 (로그인 시점까지).<br>• 인가 (Authorization): 신원이 증명된 사용자에게 허용된 권한 범위만큼 서비스나 데이터를 사용하도록 허락하는 단계 (로그인 이후 권한 행사).",
            quote: "🗣️ 교수님 코멘트: '인증은 로그인하는 시점까지고, 로그인된 상태에서 무언가를 사용하는 건 인가야!'"
          },
          {
            id: 3, type: "essay", score: 5, origin: "2주차 세션 타임아웃의 필요성",
            text: "[미니 서술형 5점] 웹 시스템에서 세션(Session)이 유지되고 있다는 것은 보안 관점에서 무엇을 의미하는지 설명하고, 일정 시간 미활동 시 '세션 타임아웃'을 적용해 재인증을 요구해야 하는 보안상 이유를 서술하시오.",
            placeholder: "세션 유지의 의미와 타임아웃의 필요성을 서술하세요.",
            keywords: ["인증 상태 유지", "자리 비움", "계정 도용", "세션 하이재킹", "탈취 방지", "재인증"],
            rubric: [
              { item: "1. 세션의 의미", desc: "정상적으로 인증된 연결 상태가 활성화되어 있음을 기술 시 2.5점" },
              { item: "2. 타임아웃 이유", desc: "자리 비움 시 계정 도용 및 세션 하이재킹 차단 기술 시 2.5점" }
            ],
            explanation: "• 세션의 의미: 사용자가 이미 시스템에 정상적으로 인증된 상태가 서버와 연결되어 활성화되어 있음을 의미함.<br>• 타임아웃 이유: 사용자가 로그아웃하지 않고 자리를 비웠을 때 제3자가 계정을 도용하거나 세션을 탈취(Session Hijacking)하는 위험을 방지하기 위해 일정 시간 미활동 시 세션을 만료시키고 재인증을 요구함.",
            quote: "🗣️ 교수님 코멘트: '세션은 인증된 상태야! 자리 비웠을 때 계정 털리는 걸 막으려고 세션 타임아웃을 거는 거지!'"
          },
          {
            id: 4, type: "essay", score: 5, origin: "2주차 ABAC 모델과 이상 징후 차단",
            text: "[미니 서술형 5점] 시스템 접근 제어 4대 모델(MAC, DAC, RBAC, ABAC) 중 사용자의 직무 역할뿐만 아니라 접속 시간, 접속 IP/위치, 단말기 상태 등 동적 환경 조건(Context)을 조합하여 접근 권한을 제어하는 모델의 영문 약어를 쓰고, 실제 이상 징후 로그인 차단 예시를 1문장으로 제시하시오.",
            placeholder: "ABAC 약어와 이상 징후 로그인 차단 사례를 서술하세요.",
            keywords: ["ABAC", "속성 기반 접근 제어", "환경 컨텍스트", "수업 시간", "부산 IP", "이상 징후", "동적 차단"],
            rubric: [
              { item: "1. 영문 약어", desc: "ABAC 정확히 기재 시 2.5점" },
              { item: "2. 차단 예시", desc: "접속 시간/위치 컨텍스트(예: 수업 중 타지역 IP 로그인) 차단 예시 제시 시 2.5점" }
            ],
            explanation: "• 영문 약어: ABAC (Attribute-Based Access Control, 속성 기반 접근 제어)<br>• 차단 예시: 수업 시간 중 서울 강의실에서 로그인해야 할 교수의 계정으로 부산 IP에서 접속 시도가 발생하면, 환경 컨텍스트 불일치로 판단하여 로그인을 즉시 차단함.",
            quote: "🗣️ 교수님 코멘트: '서울에서 강의 중인 교수가 부산 IP에서 로그인하면 막아야겠지? 환경 조건까지 보는 게 ABAC야!'"
          },
          {
            id: 5, type: "essay", score: 5, origin: "3주차 무선 AP 보안과 RADIUS",
            text: "[미니 서술형 5점] 무선 네트워크 보안(WPA2-Enterprise) 환경에서 개인용 공유기처럼 사전 공유키(PSK)를 사용하지 않고, 802.1X 중앙 RADIUS 서버를 반드시 연동하여 사용하는 본질적인 이유(RADIUS 서버의 역할)를 쓰시오.",
            placeholder: "RADIUS 서버를 사용하는 이유(AAA 서버)를 서술하세요.",
            keywords: ["RADIUS", "AAA 서버", "인증", "Authentication", "인가", "Authorization", "어카운팅", "Accounting", "중앙 집중 관리"],
            rubric: [
              { item: "1. AAA 서버 명시", desc: "인증, 인가, 어카운팅(기록/과금)을 수행하는 AAA 서버임을 명시 시 2.5점" },
              { item: "2. 본질적 이유", desc: "중앙 집중식 개별 사용자 인증 및 접속 감사 추적이 가능함을 기술 시 2.5점" }
            ],
            explanation: "• 이유: 사용자 인증뿐만 아니라 권한 부여(인가) 및 네트워크 접속 기록/과금(어카운팅)까지 중앙 집중식으로 한 번에 처리하는 통합 AAA(Authentication, Authorization, Accounting) 서버이기 때문임.",
            quote: "🗣️ 교수님 코멘트: '기업에서 왜 RADIUS 쓸까? RADIUS가 AAA 서버여서 사용하는 거야!'"
          },
          {
            id: 6, type: "essay", score: 5, origin: "4주차 SQL Injection 원리",
            text: "[미니 서술형 5점] 웹 해킹 공격인 SQL Injection에서 공격자가 로그인 입력창의 비밀번호 칸에 `' OR '1'='1` 구문을 삽입할 때, 실제 올바른 비밀번호를 입력하지 않아도 인증이 통과되는 쿼리 해석 원리를 기술하시오.",
            placeholder: "작은따옴표와 OR 항등 조건에 의한 WHERE절 무력화 원리를 서술하세요.",
            keywords: ["작은따옴표", "문자열 닫기", "OR '1'='1", "항상 참", "WHERE절 참 판정", "비밀번호 검증 우회"],
            rubric: [
              { item: "1. 쿼리 조작 원리", desc: "작은따옴표로 기존 검증 구문을 닫고 OR 항등 조건을 주입함을 기술 시 2.5점" },
              { item: "2. 인증 우회 결과", desc: "WHERE절 전체가 무조건 참(True)으로 평가되어 비밀번호 일치 검증을 우회함 기술 시 2.5점" }
            ],
            explanation: "• 원리: 공격자가 주입한 작은따옴표(')가 기존 SQL 쿼리의 비밀번호 검증 문자열을 닫고, 뒤에 삽입된 `OR '1'='1'` 항등 조건으로 인해 WHERE 절 조건 전체가 무조건 참(True)으로 평가되어 비밀번호 일치 검증을 우회하고 로그인이 통과됨.",
            quote: "🗣️ 교수님 코멘트: '뒤에가 맞아서 갑자기 전체가 참이 되면서 패스워드가 통과되지! 그게 SQL 인젝션이야!'"
          },
          {
            id: 7, type: "essay", score: 5, origin: "1주차 SBOM 소프트웨어 자재명세서",
            text: "[미니 서술형 5점] 소프트웨어 공급망 공격(Supply Chain Attack)을 방어하기 위해 오픈소스 라이브러리 및 외부 종속성 패키지의 버전, 제조사, 라이선스 정보를 투명하게 기록해 둔 '소프트웨어 자재명세서'의 공식 영문 약어를 쓰시오.",
            placeholder: "공식 영문 약어(SBOM)를 입력하세요.",
            keywords: ["SBOM", "Software Bill of Materials", "공급망 보안", "소프트웨어 자재명세서"],
            rubric: [
              { item: "1. 공식 영문 약어", desc: "SBOM (대소문자 무관) 정확히 기재 시 5점" }
            ],
            explanation: "• 영문 약어: SBOM (Software Bill of Materials)<br>• 설명: 소프트웨어를 구성하는 모든 부품과 오픈소스 라이브러리의 버전 및 종속성 명세서로, 공급망 공격 예방을 위한 핵심 산출물입니다.",
            quote: "🗣️ 교수님 코멘트: '소프트웨어 공급망 보안을 위한 명세서 뭐라고 했지? SBOM! 꼭 나와!'"
          },
          {
            id: 8, type: "essay", score: 5, origin: "6주차 DES 확장 P-Box 및 시프트",
            text: "[미니 서술형 5점] DES(Data Encryption Standard) 알고리즘과 관련하여 다음 물음에 답하시오.\n1) 라운드 함수 내부에서 32비트 입력을 48비트로 확장(Expansion P-Box)하는 이유는 무엇인가? (3점)\n2) 마스터 키로부터 제10번째 라운드 키(K₁₀)를 생성할 때 좌우 레지스터에서 수행하는 좌측 순환 시프트(Left Shift) 횟수는 몇 비트인가? (2점)",
            placeholder: "확장 이유와 10번째 라운드 시프트 횟수를 기술하세요.",
            keywords: ["키 길이 맞춤", "48비트 맞추기", "비트별 XOR", "2번", "2비트"],
            rubric: [
              { item: "1. 확장 P-Box 이유", desc: "라운드 키(48비트)와 크기를 맞춰 비트별 XOR 연산을 하기 위함 기술 시 3점" },
              { item: "2. 10번째 시프트 횟수", desc: "2번 (2비트) 명시 시 2점" }
            ],
            explanation: "1) 확장 이유: 라운드 키의 크기(48비트)와 길이를 일치시켜 비트별 XOR 연산을 수행하기 위함임.<br>2) 10번째 시프트 횟수: 2번 (2비트) (※ 1, 2, 9, 16 라운드만 1비트이고 10번째는 2비트임).",
            quote: "🗣️ 교수님 코멘트: '확장 P-Box는 키 길이 맞추려고 쓰는 거고, 10번째는 2번 시프트야!'"
          },
          {
            id: 9, type: "essay", score: 5, origin: "6주차 AES 마지막 라운드 생략 변환",
            text: "[미니 서술형 5점] AES(Advanced Encryption Standard) 알고리즘에서 한 라운드를 구성하는 4대 기본 변환 과정(SubBytes, ShiftRows, MixColumns, AddRoundKey) 중, 암호화의 마지막 라운드에서 연산 효율성과 대칭성을 위해 생략되는 변환 단계의 명칭을 쓰시오.",
            placeholder: "마지막 라운드에서 생략되는 변환 단계(MixColumns)를 쓰세요.",
            keywords: ["MixColumns", "믹스컬럼", "열 섞기 변환"],
            rubric: [
              { item: "1. 생략되는 단계 명칭", desc: "MixColumns (열 섞기 변환) 정확히 기재 시 5점" }
            ],
            explanation: "• 생략 단계: MixColumns (열 섞기 변환)<br>• 설명: AES의 마지막 라운드(128비트 기준 제10라운드)에서는 MixColumns 연산을 수행하지 않고, [SubBytes → ShiftRows → AddRoundKey]만 수행합니다.",
            quote: "🗣️ 교수님 코멘트: 'AES 마지막 라운드에서는 믹스컬럼 안 해! 생략되는 거야!'"
          },
          {
            id: 10, type: "essay", score: 5, origin: "6주차 해시 정의 및 눈사태 효과",
            text: "[미니 서술형 5점] 해시 함수(Hash Function)의 본질적 정의를 1가지 쓰고, 입력값의 단 1비트만 변경되어도 출력 결과 전체가 완전히 뒤바뀌는 현상의 명칭과 이 현상이 무결성 검증에 기여하는 바를 기술하시오.",
            placeholder: "일방향 함수 정의, 눈사태 효과 명칭, 무결성 검증 기여 원리를 서술하세요.",
            keywords: ["일방향 함수", "One-Way Function", "눈사태 효과", "Avalanche Effect", "미세 변조 감지", "무결성 검증"],
            rubric: [
              { item: "1. 해시 본질적 정의", desc: "일방향 함수 (One-Way Function) 명시 시 2점" },
              { item: "2. 현상 명칭", desc: "눈사태 효과 (Avalanche Effect) 명시 시 1.5점" },
              { item: "3. 무결성 기여", desc: "1비트의 미세한 변경도 즉각 100% 감지 가능 기술 시 1.5점" }
            ],
            explanation: "• 본질적 정의: 일방향 함수 (One-Way Function)<br>• 현상 명칭: 눈사태 효과 (Avalanche Effect)<br>• 무결성 기여: 입력 데이터에 단 1비트의 미세한 위변조나 손상이 발생해도 완전히 다른 해시가 도출되므로 데이터 변경 여부를 즉각 100% 검증 가능함.",
            quote: "🗣️ 교수님 코멘트: '해시는 딱 한마디로 일방향 함수! 점 하나만 찍어도 결과 전체가 바뀌는 눈사태 효과가 핵심이야!'"
          },
          {
            id: 11, type: "essay", score: 15, origin: "5주차 악성코드 분석 기법",
            text: "[서술형 15점] 악성코드 분석 방법인 정적 분석(Static Analysis)과 동적 분석(Dynamic Analysis)에 대하여 다음 세부 항목을 기술하시오.\n① 두 분석 기법의 개념적 정의 및 주된 분석 방법 (5점)\n② 정적 분석의 핵심 장점과 한계점(단점) 각 1가지 (5점)\n③ 동적 분석의 핵심 장점과 한계점(단점) 각 1가지 (5점)",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["정적 분석 실행 없이", "역공학 디스어셈블", "동적 분석 가상머신 실행", "샌드박스", "패킹 난독화 한계", "탐지 회피 우회"],
            rubric: [
              { item: "1. 개념 정의 및 방법", desc: "정적(실행 없이 역공학/코드 분석) vs 동적(가상환경에서 직접 실행하며 행위 관찰) 명시 시 5점" },
              { item: "2. 정적 장단점", desc: "장점(안전, 전체 구조 파악) + 단점(패킹/난독화 시 분석 난항) 명시 시 5점" },
              { item: "3. 동적 장단점", desc: "장점(난독화되어도 실제 행위 직관적 파악) + 단점(가상머신 탐지 우회 시 행위 은닉 위험) 명시 시 5점" }
            ],
            explanation: "① 개념 정의: 정적 분석은 대상 파일을 실행하지 않고 역공학/디스어셈블을 통해 코드 구조와 시그니처를 분석함. 동적 분석은 가상 머신(샌드박스) 환경에서 직접 실행하며 파일, 레지스트리, 네트워크 트래픽 등 실제 행위를 실시간 관찰함.<br>② 정적 분석: 장점은 감염 위험 없이 안전하며 프로그램 전체 로직을 파악할 수 있음. 단점은 패킹이나 난독화가 적용된 경우 분석이 극도로 어려움.<br>③ 동적 분석: 장점은 난독화되어 있어도 실행 시 실제 악성 행위를 직관적으로 즉시 확인 가능함. 단점은 악성코드가 가상 머신 환경을 탐지(Anti-VM)하여 행위를 숨기거나 회피할 수 있음."
          },
          {
            id: 12, type: "essay", score: 15, origin: "3주차 DoS 공격 원리 분석",
            text: "[서술형 15점] 서비스 거부(DoS) 공격은 크게 '시스템 취약점 오동작 유발형'과 '자원 고갈형'으로 나뉜다. 아래 물음에 답하시오.\n① 두 공격 원리의 차이점을 시스템 영향 관점에서 비교 서술하시오. (5점)\n② Land Attack이 두 유형 중 어디에 속하는지 밝히고, 공격 패킷의 IP 조작 방식과 피해 시스템 마비 원리를 서술하시오. (5점)\n③ SYN Flooding이 두 유형 중 어디에 속하는지 밝히고, TCP 3-Way Handshake 절차와 피해 시스템의 백로그 큐(Backlog Queue) 관점에서 공격 메커니즘을 서술하시오. (5점)",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["취약점 오동작", "자원 고갈", "Land Attack 출발지 목적지 동일", "루프백", "SYN Flooding", "3-Way Handshake", "ACK 미전송", "백로그 큐"],
            rubric: [
              { item: "1. 2대 공격 원리 비교", desc: "취약점 악용(OS 버그로 크래시 유발) vs 자원 고갈(대량 요청으로 자원 소진) 대조 시 5점" },
              { item: "2. Land Attack 분석", desc: "취약점 악용형 명시 + 출발지/목적지 동일 조작 무한 루프백 마비 기술 시 5점" },
              { item: "3. SYN Flooding 분석", desc: "자원 고갈형 명시 + ACK 미전송으로 백로그 큐 반개방 연결 포화 마비 기술 시 5점" }
            ],
            explanation: "① 원리 비교: 취약점 오동작 유발형은 운영체제나 프로토콜 설계 결함을 찔러 소량의 비정상 패킷으로도 커널 크래시나 무한 루프를 일으키는 방식임. 자원 고갈형은 정상 처리 절차를 악용해 대량의 요청을 퍼부어 CPU, 메모리, 커널 연결 테이블을 바닥내는 방식임.<br>② Land Attack: 취약점 악용형에 속함. 공격자가 패킷의 출발지 IP와 목적지 IP를 피해자 IP로 동일하게 조작하여 전송하며, 피해 서버는 자기 자신에게 응답을 반복하는 무한 루프백에 빠져 마비됨.<br>③ SYN Flooding: 자원 고갈형에 속함. TCP 3-Way Handshake에서 대량의 SYN 패킷을 보내고 서버의 SYN+ACK에 대해 마지막 ACK를 고의로 보내지 않아, 서버의 연결 대기 공간인 백로그 큐(Backlog Queue)가 반개방 연결로 가득 차 정상 사용자의 신규 연결을 모두 거부하게 됨."
          },
          {
            id: 13, type: "essay", score: 20, origin: "6주차 공개키 암호와 부인 방지 메커니즘",
            text: "[서술형 20점] RSA와 같은 비대칭키(공개키) 암호 시스템은 '기밀성 보장'과 '전자서명을 통한 부인 방지'라는 서로 다른 보안 목적에 활용된다.\n① 비대칭키 암호화로 기밀성(Confidentiality)을 달성하고자 할 때 송신자가 사용하는 암호화 키와 수신자가 사용하는 복호화 키를 밝히고 그 동작 원리를 설명하시오. (6점)\n② 전자서명(Digital Signature)을 수행할 때 송신자가 사용하는 암호화 키와 수신자가 사용하는 복호화 키를 밝히시오. (6점)\n③ 전자서명 검증에 성공했을 때, 송신자가 자신이 문서를 작성·전송했음을 발뺌(부인)할 수 없는 논리적·수학적 근거를 '개인키의 유일성'과 결부하여 구체적으로 서술하시오. (8점)",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["수신자 공개키 암호화", "수신자 개인키 복호화", "송신자 개인키 서명", "송신자 공개키 검증", "개인키 유일성", "발뺌 방지", "부인 방지"],
            rubric: [
              { item: "1. 기밀성 보장 메커니즘", desc: "수신자 공개키로 암호화, 수신자 개인키로만 복호화(비인가자 열람 차단) 기술 시 6점" },
              { item: "2. 전자서명 메커니즘", desc: "송신자 개인키로 서명(암호화), 송신자 공개키로 검증(복호화) 명시 시 6점" },
              { item: "3. 부인 방지 성립 근거", desc: "개인키는 오직 송신자만 소유하므로 송신자 공개키로 복호화 성공은 송신자 개인키로만 작성되었음을 증명하여 발뺌 불가 기술 시 8점" }
            ],
            explanation: "① 기밀성 달성: '수신자의 공개키(Public Key)'로 암호화하여 전송함. 공개키는 모두에게 공개되어 있으나 이를 복호화할 수 있는 키는 오직 '수신자의 개인키(Private Key)'뿐이므로 제3자가 도청해도 내용을 볼 수 없어 기밀성이 보장됨.<br>② 전자서명 수행: '송신자의 개인키(Private Key)'로 메시지의 해시값을 암호화(전자서명)하고, 수신자는 널리 공개된 '송신자의 공개키(Public Key)'로 복호화하여 서명을 검증함.<br>③ 부인 방지 논리 근거: 송신자의 개인키는 전 세계에서 오직 송신자 본인 1명만 엄격히 비밀로 보관하는 유일한 키임. 송신자의 공개키로 암호문이 정상 복호화되었다는 것은 수학적으로 오직 송신자의 개인키로만 생성된 서명이라는 절대적 증거가 되므로, 송신자는 사후에 자신이 보낸 문서가 아니라고 발뺌(부인)할 수 없음."
          }
        ]
      },

      // ========================================================
      // [회차 6] 제6회 실전 파이널 킬러 모의고사 (신규 추가)
      // ========================================================
      {
        id: "exam6",
        name: "제6회 실전 파이널 킬러 모의고사",
        tag: "신규 파이널 킬러 (100점)",
        desc: "출제 가능성이 매우 높은 핵심 심화 변형 문항들을 총망라한 13문항 완벽 모의고사입니다. (단답·미니서술 10문항 50점 + 심화서술 3문항 50점)",
        questions: [
          {
            id: 1, type: "essay", score: 5, origin: "1주차 다단계 인증(MFA)과 가용성 균형",
            text: "[미니 서술형 5점] 보안성을 극대화하기 위해 로그인 시 6~7단계의 과도한 인증 필터를 적용할 때 발생하는 시스템적 문제(가용성 저하 및 단일 실패 지점)와, 이를 보완하기 위한 '리스크 기반 적응형 인증(Adaptive MFA)'의 설계 원리를 서술하시오.",
            placeholder: "과도한 인증의 부작용과 적응형 인증의 설계 원리를 서술하세요.",
            keywords: ["가용성 저하", "단일 실패 지점", "SPOF", "병목", "적응형 인증", "Adaptive MFA", "이상 징후 감지", "동적 추가 인증"],
            rubric: [
              { item: "1. 과도한 인증의 부작용", desc: "사용자 편의성 급감, 인증 병목 및 시스템 단일 장애점 발생으로 가용성 저하 기술 시 2.5점" },
              { item: "2. 적응형 인증 설계 원리", desc: "평소에는 간편 인증을 제공하되 위험 징후(타지역 IP 등) 발생 시에만 추가 MFA를 요구하는 동적 설계 기술 시 2.5점" }
            ],
            explanation: "• 부작용: 인증 절차가 과도하면 사용자의 정상적 업무 수행이 방해받고, 특정 인증 서버 장애 시 전체 시스템 접근이 차단되는 가용성 마비(SPOF)가 발생함.<br>• 적응형 인증 원리: 평소 일반적인 환경에서는 간소화된 1~2차 인증으로 가용성을 보장하고, 비정상적 접속 시간, 생소한 IP 대역 등 위험 징후(Risk)가 감지될 때만 다단계 인증(MFA)을 동적으로 요구하는 균형 잡힌 보안 설계를 적용함.",
            quote: "🗣️ 교수님 코멘트: '보안 뚫리지 않겠다고 패턴 6~7개 걸면 가용성이 떨어져! 세 요소가 균형을 맞춰야 되는 거야!'"
          },
          {
            id: 2, type: "essay", score: 5, origin: "2주차 리눅스 파일 권한 chmod 644 vs 755",
            text: "[미니 서술형 5점] 리눅스 환경에서 일반 데이터 문서에 `chmod 644`를 부여하고, 실행 스크립트 파일에 `chmod 755`를 부여하는 보안적 이유와, 일반 사용자(Others)에게 실행 권한(x=1)과 쓰기 권한(w=2)을 차등 부여해야 하는 이유를 기술하시오.",
            placeholder: "chmod 644와 755의 권한 차이 및 보안적 이유를 서술하세요.",
            keywords: ["644", "rw-r--r--", "755", "rwxr-xr-x", "실행 권한 x", "쓰기 권한 차단 w", "위변조 방지"],
            rubric: [
              { item: "1. 644와 755 권한 의미", desc: "644(소유자 읽기/쓰기, 타인 읽기만) vs 755(소유자 읽기/쓰기/실행, 타인 읽기/실행만) 명시 시 2.5점" },
              { item: "2. 보안적 차등 이유", desc: "타인에게 실행 권한은 주되 쓰기 권한을 주지 않아 스크립트 악의적 변조를 방지함 기술 시 2.5점" }
            ],
            explanation: "• 권한 차이: `644`는 소유자에게 읽기/쓰기(rw-), 그룹과 타인에게는 읽기만(r--) 부여하여 문서 열람만 허용함. `755`는 소유자에게 실행까지(rwx), 타인에게는 읽기 및 실행(r-x)을 부여함.<br>• 보안 이유: 시스템 실행 파일에 타인의 쓰기(w) 권한을 허용하면 악성코드가 스크립트 내용을 변조하여 관리자 권한을 탈취할 수 있으므로 쓰기 권한은 철저히 박탈하고 실행 권한만 허용해야 함.",
            quote: "🗣️ 교수님 코멘트: '유닉스 파일 권한 rwx 비트 계산! 소유자, 그룹, 아더 권한 계산은 시험에 낼 수 있어!'"
          },
          {
            id: 3, type: "essay", score: 5, origin: "3주차 ARP 스푸핑 원리와 정적 관리 한계",
            text: "[미니 서술형 5점] 공격자가 로컬 네트워크에서 IP는 알지만 MAC 주소를 모를 때 사용하는 ARP 프로토콜의 어떤 취약점을 악용하여 ARP 스푸핑을 수행하는지 쓰고, 이에 대한 방어책인 '정적 ARP 매핑(Static ARP)'이 실제 대규모 엔터프라이즈 환경에서 적용하기 어려운 현실적 한계를 서술하시오.",
            placeholder: "ARP 스푸핑의 취약점과 정적 관리의 운영상 한계를 서술하세요.",
            keywords: ["ARP 인증 부재", "허위 MAC 응답", "ARP 캐시 오염", "정적 관리 한계", "수동 갱신 부담", "DHCP 유동 IP", "단말 이동성"],
            rubric: [
              { item: "1. ARP 취약점 및 원리", desc: "ARP 요청에 대한 인증 부재를 악용해 자신의 MAC 주소를 게이트웨이/타겟의 MAC인 것처럼 허위 응답함을 기술 시 2.5점" },
              { item: "2. 정적 관리 한계", desc: "수많은 단말의 이동성 및 DHCP 환경에서 관리자가 수동 갱신하는 것이 불가능함을 기술 시 2.5점" }
            ],
            explanation: "• 취약점 및 원리: ARP 프로토콜은 응답 패킷의 송신자가 진짜인지 검증하는 인증 메커니즘이 없어, 공격자가 '게이트웨이의 IP를 가진 장비가 바로 나(공격자 MAC)'라는 허위 ARP 응답을 뿌려 희생자의 ARP 캐시 테이블을 오염시켜 패킷을 가로챔.<br>• 정적 관리 한계: IP-MAC 매핑을 고정(Static)하면 위조 응답을 차단할 수 있으나, 단말 이동성이 잦고 DHCP 유동 IP가 쓰이는 대규모 환경에서 수천 대 단말의 매핑을 관리자가 일일이 수동 갱신하는 것은 현실적으로 불가능함.",
            quote: "🗣️ 교수님 코멘트: '스푸핑 막으려면 정적 관리 해야 되는데, 수천 대 PC를 관리자가 일일이 다 손으로 칠 수 있어? 어려워!'"
          },
          {
            id: 4, type: "essay", score: 5, origin: "3주차 IP 스푸핑과 DoS 선행 이유",
            text: "[미니 서술형 5점] 공격자가 신뢰 관계(Trust)가 형성된 클라이언트의 IP 주소를 도용하여 서버에 침투하는 'IP 스푸핑(IP Spoofing)' 공격을 수행할 때, 진짜 정상 클라이언트를 향해 'SYN Flooding' 등의 DoS 공격을 먼저 퍼부어 마비시켜야만 하는 이유를 TCP 시퀀스 번호 및 응답 충돌 관점에서 서술하시오.",
            placeholder: "정상 클라이언트를 DoS로 먼저 무력화해야 하는 이유를 서술하세요.",
            keywords: ["IP 스푸핑", "신뢰 관계", "Trust", "정상 클라이언트 DoS", "RST 패킷 차단", "응답 충돌 방지", "연결 유지"],
            rubric: [
              { item: "1. DoS 선행 목적", desc: "정상 클라이언트가 서버로부터 SYN+ACK를 받고 보낼 RST(연결 리셋) 패킷을 사전에 차단하기 위함 기술 시 3점" },
              { item: "2. 공격 성공 조건", desc: "정상 클라이언트를 마비시켜야 공격자가 위조된 IP로 대신 세션을 맺을 수 있음을 기술 시 2점" }
            ],
            explanation: "• 이유: 공격자가 신뢰받는 클라이언트의 IP를 사칭하여 서버에 SYN을 보내면, 서버는 진짜 클라이언트에게 SYN+ACK를 회신함. 이때 진짜 클라이언트가 살아있으면 '자신이 요청하지 않은 연결'이므로 즉시 RST(연결 강제 리셋) 패킷을 서버로 보내 세션을 끊어버림. 따라서 공격자는 진짜 클라이언트에 DoS를 걸어 다운시켜 두어야만 RST 패킷 발송을 막고 시퀀스 번호를 맞춰 세션을 탈취할 수 있음.",
            quote: "🗣️ 교수님 코멘트: 'IP 스푸핑 할 때 진짜 주인을 왜 DoS로 먼저 눕혀 놓을까? 주인이 깨어 있으면 리셋 패킷을 날려서 연결이 끊어지니까!'"
          },
          {
            id: 5, type: "essay", score: 5, origin: "4주차 HTTP 응답 코드 401 vs 403 보안 차이",
            text: "[미니 서술형 5점] 웹 서버가 반환하는 클라이언트 에러 코드 중 `401 Unauthorized`와 `403 Forbidden`의 보안 처리 메커니즘 차이점을 '인증(Authentication)'과 '인가(Authorization)'의 관점에서 명확히 비교 기술하시오.",
            placeholder: "401과 403을 인증과 인가 관점에서 비교 기술하세요.",
            keywords: ["401", "Unauthorized", "인증 필요", "로그인 안 됨", "403", "Forbidden", "인가 실패", "접근 권한 없음"],
            rubric: [
              { item: "1. 401 메커니즘", desc: "사용자 신원 인증 부재(로그인하지 않은 상태)로 인한 거부 기술 시 2.5점" },
              { item: "2. 403 메커니즘", desc: "인증은 완료되었으나 해당 자원에 접근할 수 있는 권한(인가) 부족으로 인한 거부 기술 시 2.5점" }
            ],
            explanation: "• 401 Unauthorized (인증 실패): 요청자 본인이 누구인지 증명하는 자격 증명(ID/PW, 토큰)이 제공되지 않았거나 유효하지 않아 로그인이 요구되는 상태임.<br>• 403 Forbidden (인가 실패): 사용자가 누구인지 신원 인증은 정상적으로 완료되었으나, 해당 사용자의 직무 역할이나 권한 등급이 해당 관리자 페이지나 데이터에 접근할 권한(인가)을 갖지 못하여 접근이 영구 거부된 상태임.",
            quote: "🗣️ 교수님 코멘트: '401은 로그인이 안 된 거, 403은 로그인했는데 권한이 없는 거! 인증과 인가의 차이야!'"
          },
          {
            id: 6, type: "essay", score: 5, origin: "5주차 트로이 목마 vs 웜 악성코드",
            text: "[미니 서술형 5점] 악성코드인 '트로이 목마(Trojan Horse)'의 2대 동작 특징(정상 소프트웨어 위장, 자체 복제 기능 부재)을 기술하고, 네트워크를 통해 취약점을 찾아 스스로 복제·전파되는 '웜(Worm)'과의 전파 방식 차이를 서술하시오.",
            placeholder: "트로이 목마의 특징과 웜과의 전파 방식 차이를 서술하세요.",
            keywords: ["트로이 목마", "정상 프로그램 위장", "자체 복제 없음", "사용자 실행 유도", "웜", "자가 복제", "네트워크 전파"],
            rubric: [
              { item: "1. 트로이 목마 특징", desc: "유용한 정상 프로그램으로 위장하며 스스로 복제하는 기능이 없음을 명시 시 2.5점" },
              { item: "2. 웜과의 전파 차이", desc: "트로이 목마는 사용자가 직접 실행해야 하나, 웜은 네트워크 취약점을 찾아 자가 복제 전파됨 기술 시 2.5점" }
            ],
            explanation: "• 트로이 목마 특징: 겉으로는 게임이나 유틸리티 등 유용한 정상 프로그램으로 위장하지만 내부적으로 백도어 설치 등 악의적 행위를 수행하며, 자체 복제(Self-Replication) 기능이 없음.<br>• 전파 방식 차이: 트로이 목마는 사용자를 속여 직접 다운로드받아 실행하도록 유도해야만 동작하는 반면, 웜(Worm)은 숙주나 사용자 개입 없이 네트워크의 포트 취약점을 스캔하여 스스로 복제하고 전파됨.",
            quote: "🗣️ 교수님 코멘트: '트로이 목마는 정상으로 속이는 거고 자가 복제는 없어! 자가 복제해서 퍼지는 건 웜이야!'"
          },
          {
            id: 7, type: "essay", score: 5, origin: "6주차 단일 치환 암호의 빈도수 분석 취약점",
            text: "[미니 서술형 5점] 고전 암호인 시저(Caesar) 암호와 같은 '단일 치환 암호(Monoalphabetic Cipher)'가 현대 보안에서 완전히 폐기된 근본적인 수학적·통계학적 이유(알파벳 출현 빈도수 보존)를 설명하시오.",
            placeholder: "단일 치환 암호가 통계적 빈도수 분석에 왜 취약한지 서술하세요.",
            keywords: ["단일 치환 암호", "1:1 매핑", "알파벳 출현 빈도수", "통계적 특성 보존", "빈도수 분석 공격", "즉각 해독"],
            rubric: [
              { item: "1. 1:1 매핑 구조", desc: "평문 알파벳과 암호문 알파벳이 1:1 고정 치환됨을 명시 시 2.5점" },
              { item: "2. 통계적 빈도수 보존", desc: "자연어 고유의 알파벳 빈도(E, T, A 등) 분포가 암호문에도 그대로 보존되어 빈도 분석에 즉각 해독됨 기술 시 2.5점" }
            ],
            explanation: "• 이유: 단일 치환 암호는 평문 알파벳 하나가 항상 동일한 암호문 알파벳으로 1:1 매핑됨. 따라서 평문 언어(예: 영어) 고유의 통계학적 문자 출현 빈도수(E가 약 12.7%로 가장 많고 T, A, O 순서)가 암호문에도 100% 그대로 보존되므로, 통계적 빈도수 분석(Frequency Analysis) 공격을 적용하면 키를 몰라도 순식간에 복호화되기 때문임.",
            quote: "🗣️ 교수님 코멘트: '단일 치환은 키가 짧아서가 아니라 통계적 빈도수가 그대로 남아서 해독되는 거야!'"
          },
          {
            id: 8, type: "essay", score: 5, origin: "6주차 Feistel 구조의 가역성 및 장점",
            text: "[미니 서술형 5점] DES가 채택한 Feistel 구조에서 내부 라운드 함수 f가 수학적 역함수가 존재하지 않는 일방향 함수여도 복호화가 완벽하게 가능한 원리를 설명하고, 이 구조가 암·복호화 칩 설계 시 제공하는 하드웨어적 이점을 쓰시오.",
            placeholder: "역함수가 없어도 복호화되는 원리와 하드웨어적 이점을 서술하세요.",
            keywords: ["Feistel 구조", "라운드 함수 f", "역함수 불필요", "XOR 성질", "라운드 키 역순 공급", "동일 하드웨어 회로 재사용"],
            rubric: [
              { item: "1. 복호화 가능 원리", desc: "XOR의 가역성과 라운드 키 역순 공급(K16→K1)만으로 평문이 복원됨을 기술 시 2.5점" },
              { item: "2. 하드웨어적 이점", desc: "복호화 회로를 별도 구현할 필요 없이 암호화 회로를 100% 그대로 재사용 가능 기술 시 2.5점" }
            ],
            explanation: "• 복호화 가능 원리: Feistel 구조는 A ⊕ B ⊕ B = A라는 XOR 연산의 자체 가역성을 이용하므로, 라운드 함수 f 자체의 역함수가 존재하지 않아도 무방함. 복호화 시 단지 라운드 키의 공급 순서를 역순(K₁₆ → K₁)으로 바꾸기만 하면 수학적으로 평문이 복원됨.<br>• 하드웨어적 이점: 복호화를 위한 별도의 역변환 연산 회로를 추가 제작할 필요 없이 암호화 회로를 100% 그대로 재사용할 수 있어 반도체 칩 면적과 제조 비용이 극도로 절감됨.",
            quote: "🗣️ 교수님 코멘트: '페이스텔의 최대 장점! 라운드 함수가 역함수가 없어도 돼! 키만 거꾸로 넣으면 똑같은 회로로 풀려!'"
          },
          {
            id: 9, type: "essay", score: 5, origin: "6주차 AES 혼돈 vs 확산 요소",
            text: "[미니 서술형 5점] AES 암호화의 4대 변환 과정(SubBytes, ShiftRows, MixColumns, AddRoundKey)을 암호학의 2대 설계 원리인 '혼돈(Confusion)'과 '확산(Diffusion)'을 제공하는 변환 단계로 각각 분류하여 명시하시오.",
            placeholder: "혼돈을 제공하는 변환과 확산을 제공하는 변환을 분류하세요.",
            keywords: ["혼돈", "Confusion", "SubBytes", "S-Box 비선형 치환", "확산", "Diffusion", "ShiftRows", "MixColumns"],
            rubric: [
              { item: "1. 혼돈 제공 변환", desc: "SubBytes (S-Box 비선형 바이트 치환) 명시 시 2.5점" },
              { item: "2. 확산 제공 변환", desc: "ShiftRows(행 순환 이동)와 MixColumns(열 행렬 곱) 명시 시 2.5점" }
            ],
            explanation: "• 혼돈 (Confusion) 제공 변환: **SubBytes** → S-Box 테이블을 이용한 1바이트 비선형 치환으로 평문과 암호문 간의 통계적 상관관계를 완전히 무너뜨림.<br>• 확산 (Diffusion) 제공 변환: **ShiftRows** 및 **MixColumns** → ShiftRows는 행 단위 바이트 위치를 순환 이동시키고, MixColumns는 열 단위로 비트들을 혼합 곱셈하여 평문의 단 1비트 변화를 암호문 전체로 널리 퍼뜨림.",
            quote: "🗣️ 교수님 코멘트: '서브바이트가 혼돈이고, 시프트로우랑 믹스컬럼이 확산이야! 이 둘을 섞어야 안전해져!'"
          },
          {
            id: 10, type: "essay", score: 5, origin: "6주차 해시 솔트(Salt)와 레인보우 테이블 방어",
            text: "[미니 서술형 5점] 데이터베이스에 비밀번호를 단순 해시값으로만 저장할 경우 미리 계산된 해시 대조표인 '레인보우 테이블(Rainbow Table)' 공격에 취약한 이유를 설명하고, 무작위 문자열인 '솔트(Salt)'를 결합하여 해싱하는 것이 이 공격을 어떻게 무력화하는지 기술하시오.",
            placeholder: "레인보우 테이블 취약 이유와 Salt의 방어 원리를 서술하세요.",
            keywords: ["단순 해시 취약", "레인보우 테이블", "사전 계산 대조표", "솔트", "Salt", "랜덤 문자열", "대조표 무력화"],
            rubric: [
              { item: "1. 레인보우 테이블 취약 이유", desc: "자주 쓰이는 비밀번호의 해시값을 미리 대량 계산해 둔 사전 공격에 즉각 매핑 노출됨 기술 시 2.5점" },
              { item: "2. Salt의 방어 원리", desc: "사용자마다 고유한 무작위 솔트를 결합하여 해싱함으로써 미리 만들어 둔 레인보우 테이블을 무용지물로 만듦 기술 시 2.5점" }
            ],
            explanation: "• 취약 이유: 단순 해시는 동일한 패스워드(예: 1234)에 대해 항상 동일한 해시값이 나오므로, 해커가 널리 쓰이는 수십억 개의 비밀번호 해시값을 미리 계산해 둔 '레인보우 테이블'과 대조하면 1초 만에 원본 비밀번호가 노출됨.<br>• 솔트의 방어 원리: 사용자마다 매번 고유한 무작위 난수 문자열인 솔트(Salt)를 패스워드 앞뒤에 덧붙여 해싱(`Hash(PW + Salt)`)하므로, 설령 동일한 비밀번호라도 사용자마다 완전히 다른 해시가 생성되어 기존에 구축된 레인보우 테이블을 완전히 무력화함.",
            quote: "🗣️ 교수님 코멘트: 'DB 털렸을 때 그냥 해시만 넣으면 레인보우 테이블로 다 털려! 그래서 랜덤 소금(Salt)을 팍팍 쳐야 안전한 거야!'"
          },
          {
            id: 11, type: "essay", score: 15, origin: "2주차 접근 제어 4대 모델(MAC, DAC, RBAC, ABAC) 완벽 비교",
            text: "[서술형 15점] 운영체제 및 정보 시스템의 접근 제어 4대 모델인 **MAC(강제적), DAC(임의적), RBAC(역할 기반), ABAC(속성 기반)**에 대하여,\n① 각 모델의 권한 결정 주체 및 핵심 특징 (8점)\n② 각 모델의 보안성 및 관리 유연성 비교 (4점)\n③ 각 모델이 가장 적합하게 활용되는 실제 실무 환경(군사, 상용 OS, 대학/기업, 제로트러스트 클라우드 등)을 매핑하여 서술하시오. (3점)",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["MAC 중앙 관리자 보안 등급", "DAC 데이터 소유자", "RBAC 사용자 직무 역할", "ABAC 주체 객체 환경 컨텍스트", "군사 정부", "유닉스 윈도우", "대학 기업", "제로 트러스트"],
            rubric: [
              { item: "1. 4대 모델 결정 주체 및 특징", desc: "MAC(중앙 보안정책), DAC(데이터 소유자 임의), RBAC(직무 역할), ABAC(다차원 속성 및 환경) 각각 명시 시 8점" },
              { item: "2. 보안성 및 유연성 비교", desc: "MAC(최고 보안, 최저 유연) vs DAC(최저 보안, 최고 유연) vs RBAC/ABAC 비교 시 4점" },
              { item: "3. 실무 적용 환경 매핑", desc: "MAC(군사/기밀), DAC(상용 OS 파일시스템), RBAC(대학 포털/기업 조직), ABAC(클라우드/제로트러스트) 연결 시 3점" }
            ],
            explanation: "① 결정 주체 및 특징: MAC(중앙 관리자가 기밀 등급에 따라 일괄 부여, 사용자 변경 불가), DAC(데이터 소유자가 자신의 판단으로 타인에게 임의로 권한 부여), RBAC(조직 내 사용자의 직무 역할(Role)에 권한을 매핑하여 대규모 관리 효율화), ABAC(사용자, 데이터, 접속 시간, 위치, 디바이스 등 동적 속성(Context)을 조합하여 세밀하게 통제).<br>② 보안성 및 유연성: MAC은 보안성이 가장 높으나 유연성이 극히 낮음. DAC은 유연성이 가장 높으나 권한 위임 오남용으로 보안성이 가장 취약함. RBAC은 관리 효율성과 보안성의 균형을 이룸. ABAC은 가장 높은 정밀도와 동적 적응형 보안을 제공함.<br>③ 실무 적용 환경: MAC은 국방·군사·정부 1급 기밀 시스템, DAC은 윈도우/리눅스 일반 PC 파일 시스템, RBAC은 대학 포털(교수/학생 분리) 및 대기업 ERP 시스템, ABAC은 클라우드 및 제로 트러스트 분산 보안 환경에 최적임."
          },
          {
            id: 12, type: "essay", score: 15, origin: "6주차 하이브리드 암호 시스템 (Hybrid Cryptography)",
            text: "[서술형 15점] 대칭키 암호와 비대칭키 암호의 장점만을 결합한 **하이브리드 암호 시스템(Hybrid Cryptography)**에 대하여 다음 물음에 답하시오.\n① 순수 비대칭키(RSA)만으로 대용량 파일을 전송하지 않고 하이브리드 암호를 고안해야 했던 이유 (5점)\n② 송신자가 대용량 파일을 수신자에게 전송할 때 거치는 암호화 3단계 과정 (5점)\n③ 수신자가 전송받은 데이터를 원본으로 복구하는 복호화 2단계 과정 (5점)",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["연산 속도 차이", "키 배송 문제", "대칭 세션키 AES 생성", "데이터 대칭키 암호화", "세션키를 수신자 공개키로 암호화", "수신자 개인키로 세션키 복호화", "세션키로 데이터 복호화"],
            rubric: [
              { item: "1. 하이브리드 암호 필요성", desc: "대칭키의 고속성과 비대칭키의 안전한 키 분배를 결합하기 위함 명시 시 5점" },
              { item: "2. 송신자 암호화 과정", desc: "임의의 대칭 세션키 생성 → 대용량 데이터를 세션키로 암호화 → 세션키만 수신자의 공개키로 암호화하여 전송 기술 시 5점" },
              { item: "3. 수신자 복호화 과정", desc: "수신자의 개인키로 암호화된 세션키를 먼저 복호화 → 복원된 세션키로 대용량 데이터를 고속 복호화 기술 시 5점" }
            ],
            explanation: "① 필요성: 대칭키 암호는 연산 속도가 극도로 빠르지만 키를 전달하는 과정(키 분배 문제)이 취약함. 반면 비대칭키 암호는 키 분배는 안전하나 복잡한 모듈러 연산으로 인해 대칭키 대비 수백~수천 배 느려 대용량 파일 암호화에 부적합함. 따라서 대칭키의 '고속성'과 비대칭키의 '안전한 키 교환'을 결합한 하이브리드 방식이 필수적임.<br>② 송신자 암호화 과정: 1단계) 송신자는 1회용 대칭 세션키(AES-128/256)를 무작위 생성함. 2단계) 대용량 원본 데이터를 고속 대칭 세션키로 암호화함. 3단계) 그 128비트 대칭 세션키만을 '수신자의 공개키(RSA Public Key)'로 암호화하여 암호문 데이터와 함께 전송함.<br>③ 수신자 복호화 과정: 1단계) 수신자는 자신의 비밀 '개인키(Private Key)'로 암호화된 대칭 세션키를 복호화하여 1회용 세션키를 복원함. 2단계) 복원된 대칭 세션키로 대용량 암호문 데이터를 고속 복호화하여 원본 평문을 복원함."
          },
          {
            id: 13, type: "essay", score: 20, origin: "3주차 네트워크 공격과 합법적 보안 기술의 양면성",
            text: "[서술형 20점] 네트워크 보안 위협인 '도청(스니핑)'과 '가로채기(세션 하이재킹)'의 악의적 공격 원리를 비교하고, 이 공격 원리가 보안 방어 관점에서 각각 어떻게 합법적인 보안 기술(허니팟 유인 탐지, 사내 SSL 가시성 확보)로 재탄생하여 활용되는지 구체적인 메커니즘을 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["스니핑 수동적 도청", "프로미스큐어스", "허니팟 유인 미끼", "더미 데이터 침투 탐지", "세션 하이재킹 중간 개입", "SSL 가시성", "트래픽 복호화 검사", "기밀 유출 차단"],
            rubric: [
              { item: "1. 스니핑 공격 vs 허니팟 보안 활용", desc: "스니핑(무차별 도청) 원리와 허니팟(가짜 시스템으로 스니퍼 유인 탐지) 메커니즘 명시 시 10점" },
              { item: "2. 세션 하이재킹 vs SSL 가시성 보안 활용", desc: "세션 하이재킹(중간 연결 가로채기) 원리와 SSL 가시성(중간에서 복호화 분석 후 재암호화하여 기밀 유출 감시) 메커니즘 명시 시 10점" }
            ],
            explanation: "1. 스니핑 공격 vs 허니팟 유인 탐지 (10점):<br>- 스니핑 공격: 네트워크 카드를 프로미스큐어스 모드로 전환하여 자신에게 오지 않은 패킷까지 조용히 훔쳐보는 수동적 도청 공격임.<br>- 허니팟 활용: 보안 관리자가 일부러 취약하게 설정된 가짜 시스템이나 매력적인 더미 기밀 데이터(Honey Pot)를 네트워크에 구축해 둠. 공격자나 스니퍼가 이 가짜 데이터를 훔쳐보거나 접근하는 순간 비정상 트래픽으로 즉각 경보를 울려 공격자의 신원과 침투 경로를 포착함.<br><br>2. 세션 하이재킹 공격 vs SSL 가시성 확보 (10점):<br>- 세션 하이재킹 공격: 이미 정상적으로 인증이 완료된 TCP 세션이나 웹 세션에 공격자가 중간에 끼어들어(MITM) 정당한 사용자의 연결 권한을 가로채고 시스템을 장악하는 공격임.<br>- SSL 가시성 활용: 사내 직원이 외부로 기밀 문서를 유출할 때 종단간 SSL/TLS 암호화를 적용하면 기존 방화벽이나 침입탐지시스템(IDS)이 내용을 들여다볼 수 없음. 이에 기업 보안 장비가 세션 하이재킹과 동일한 중간 개입 프록시 구조로 동작하여, 사내 트래픽을 중간에서 가로채 복호화한 후 악성코드나 기밀 유출 여부를 정밀 분석하고, 이상이 없을 때만 다시 암호화하여 외부로 전송함으로써 내부 보안을 철저히 유지함."
          }
        ]
      }
    ]
  };

