// ========================================================
// 🌐 [DATA MODULE] 컴퓨터네트워크 (개념 총정리 & 모의고사)
// ========================================================
window.CONCEPT_DATABASE = window.CONCEPT_DATABASE || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};

window.CONCEPT_DATABASE.network = {
    id: "network",
    title: "🌐 컴퓨터네트워크 (Computer Network) 중간고사 핵심 총정리",
    filterChips: [
      { id: "all", label: "전체보기" },
      { id: "net-cheat", label: "🎯 1초 정답 치트키", class: "amber-chip" },
      { id: "net-osi", label: "OSI 7계층 & TCP/IP" },
      { id: "net-transport", label: "전송계층 (TCP 3-Way)" },
      { id: "net-ip", label: "IP 주소 & 서브넷팅 계산" }
    ],
    html: `
      <!-- 치트키 -->
      <section id="net-cheat" class="concept-section">
        <div class="section-banner gold-banner">
          <div class="section-banner-title"><span>🎯 컴퓨터네트워크 1초 정답 치트키</span></div>
        </div>

        <div class="qa-grid">
          <div class="qa-card">
            <div class="qa-q"><span class="q-icon">Q1</span><span>종단 간 신뢰성 있는 전송, 흐름/오류/혼잡 제어를 담당하는 계층은?</span></div>
            <div class="qa-a"><span class="ans-target">전송 계층 (Transport Layer, 4계층)</span><button class="copy-btn" onclick="copyText('전송 계층')">복사</button></div>
          </div>

          <div class="qa-card">
            <div class="qa-q"><span class="q-icon">Q2</span><span>C클래스 /26 서브넷 마스크(255.255.255.192)에서 실제 호스트 할당 가능 IP 개수는?</span></div>
            <div class="qa-a"><span class="ans-target">62개 (2⁶ = 64 - 2)</span><button class="copy-btn" onclick="copyText('62개')">복사</button></div>
          </div>
        </div>
      </section>

      <!-- OSI 7계층 -->
      <section id="net-osi" class="concept-section">
        <div class="section-banner">
          <div class="section-banner-title"><span>🌐 OSI 7계층 모델 & PDU</span></div>
        </div>

        <div class="concept-card">
          <table class="custom-table">
            <thead><tr><th style="width: 20%;">계층</th><th style="width: 25%;">PDU (데이터 단위)</th><th>핵심 장비 / 대표 프로토콜</th></tr></thead>
            <tbody>
              <tr><td style="font-weight: 800;">7. 응용 (Application)</td><td>Data</td><td>HTTP, DNS, FTP, SMTP</td></tr>
              <tr><td style="font-weight: 800;">4. 전송 (Transport)</td><td>Segment / Datagram</td><td>TCP (신뢰성/연결형), UDP (비연결형/속도)</td></tr>
              <tr><td style="font-weight: 800;">3. 네트워크 (Network)</td><td>Packet</td><td>라우터, IP, ICMP, ARP</td></tr>
              <tr><td style="font-weight: 800;">2. 데이터링크 (DataLink)</td><td>Frame</td><td>L2 스위치, MAC 주소</td></tr>
              <tr><td style="font-weight: 800;">1. 물리 (Physical)</td><td>Bit</td><td>허브, 리피터, 케이블</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    `
  };

window.EXAM_DATABASE.network = {
    id: "network",
    title: "🌐 컴퓨터네트워크 (실전 대비)",
    exams: [
      {
        id: "net_exam1",
        name: "제1회 OSI 7계층 & 프로토콜 핵심 모의고사",
        tag: "기초 필수 13문",
        desc: "OSI 7계층, TCP 3-Way Handshake, IP 서브넷팅 계산을 점검하는 100점 만점 모의고사입니다.",
        questions: [
          {
            id: 1, type: "short", score: 5, origin: "4계층 전송 계층",
            text: "OSI 7계층 중 종단 간 신뢰성 있는 데이터 전송을 담당하며 흐름 제어, 오류 제어, 혼잡 제어를 수행하는 계층의 명칭은?",
            placeholder: "계층 명칭 입력",
            answers: ["전송계층", "전송 계층", "transport", "transportlayer"],
            explanation: "전송 계층(Transport Layer, 4계층)은 TCP, UDP 프로토콜이 동작합니다."
          },
          {
            id: 2, type: "short", score: 5, origin: "IP 서브넷팅 계산",
            text: "C클래스 네트워크에서 서브넷 마스크가 255.255.255.192(/26)일 때, 하나의 서브넷에서 실제 호스트에 할당 가능한 IP 주소의 최대 개수는?",
            placeholder: "숫자만 입력",
            answers: ["62", "62개"],
            explanation: "호스트 비트 6비트 → 2⁶ = 64개에서 네트워크 주소와 브로드캐스트 주소 2개를 뺀 62개입니다."
          },
          {
            id: 3, type: "short", score: 5, origin: "TCP 연결 수립",
            text: "TCP 프로토콜에서 클라이언트와 서버 간에 신뢰성 있는 가상 회선을 수립하기 위해 주고받는 3단계 핸드셰이크의 플래그 순서는? (SYN → ? → ACK)",
            placeholder: "SYN+ACK",
            answers: ["syn+ack", "synack", "syn ack", "syn/ack"],
            explanation: "SYN → SYN+ACK → ACK 순서로 연결을 수립합니다."
          },
          {
            id: 4, type: "short", score: 5, origin: "IP 주소 변환",
            text: "사설 IP 주소를 공인 IP 주소로 변환하여 인터넷 접속을 가능하게 하고 IPv4 주소 고갈을 완화하는 기술의 영문 약어는?",
            placeholder: "영문 약어 입력",
            answers: ["nat", "napt"],
            explanation: "NAT (Network Address Translation) 기술입니다."
          },
          {
            id: 5, type: "short", score: 5, origin: "주소 결정 프로토콜",
            text: "논리적인 IP 주소를 기반으로 동일 네트워크 상의 물리적인 MAC 주소를 알아내기 위해 사용하는 프로토콜의 영문 약어는?",
            placeholder: "영문 약어 입력",
            answers: ["arp"],
            explanation: "ARP (Address Resolution Protocol)입니다."
          },
          {
            id: 6, type: "short", score: 5, origin: "전송 계층 비교",
            text: "비연결형 프로토콜로 신뢰성은 낮으나 오버헤드가 적어 실시간 스트리밍이나 DNS 질의에 주로 쓰이는 프로토콜은?",
            placeholder: "영문 약어 입력",
            answers: ["udp"],
            explanation: "UDP (User Datagram Protocol)입니다."
          },
          {
            id: 7, type: "short", score: 5, origin: "포트 번호",
            text: "웹 브라우저와 웹 서버 간에 보안 암호화 통신을 수행하는 HTTPS의 기본 표준 포트 번호는 몇 번인가?",
            placeholder: "포트 번호 숫자 입력",
            answers: ["443"],
            explanation: "HTTP는 80번, HTTPS는 443번 포트를 사용합니다."
          },
          {
            id: 8, type: "short", score: 5, origin: "라우팅 프로토콜",
            text: "거리 벡터(Distance Vector) 알고리즘 기반으로 홉(Hop) 수를 메트릭으로 사용하며 최대 15홉 제한이 있는 내부 라우팅 프로토콜은?",
            placeholder: "프로토콜 약어 입력",
            answers: ["rip"],
            explanation: "RIP (Routing Information Protocol)입니다."
          },
          {
            id: 9, type: "short", score: 5, origin: "TCP 흐름 제어",
            text: "수신 측의 수신 버퍼 여유 공간 크기(Receive Window)를 송신 측에 알려주어 송신 패킷 양을 조절하는 TCP 흐름 제어 기법은?",
            placeholder: "기법 명칭 입력",
            answers: ["슬라이딩윈도우", "슬라이딩 윈도우", "slidingwindow"],
            explanation: "슬라이딩 윈도우(Sliding Window) 메커니즘입니다."
          },
          {
            id: 10, type: "short", score: 5, origin: "2계층 데이터링크",
            text: "OSI 2계층 데이터링크 계층의 프로토콜 데이터 단위(PDU)의 명칭은 무엇인가?",
            placeholder: "PDU 명칭 입력",
            answers: ["프레임", "frame"],
            explanation: "물리-비트, 데이터링크-프레임, 네트워크-패킷, 전송-세그먼트입니다."
          },
          {
            id: 11, type: "essay", score: 15, origin: "전송 계층: TCP vs UDP 비교",
            text: "[서술형 15점] 전송 계층의 대표 프로토콜인 TCP와 UDP에 대하여 연결 지향성, 신뢰성 보장 메커니즘, 헤더 오버헤드, 그리고 각각의 적합한 응용 서비스 분야를 비교 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["TCP 연결형 3-Way", "신뢰성 흐름/혼잡제어", "UDP 비연결형", "오버헤드 적음", "실시간 스트리밍"],
            rubric: [
              { item: "1. 연결성 및 신뢰성", desc: "TCP(3-Way Handshake 신뢰성 보장) vs UDP(비연결형 비신뢰성) 비교 시 5점" },
              { item: "2. 오버헤드 및 속도", desc: "TCP(20바이트 이상 헤더/속도 느림) vs UDP(8바이트 헤더/속도 빠름) 비교 시 5점" },
              { item: "3. 응용 분야", desc: "TCP(HTTP, 파일전송) vs UDP(DNS, 실시간 스트리밍) 적절 매핑 시 5점" }
            ],
            explanation: "TCP는 3-Way Handshake로 가상 회선을 수립하고 순서 보장, 오류/흐름 제어를 수행하여 신뢰성을 보장하지만 헤더가 크고 속도가 느려 웹/파일 전송에 적합함. UDP는 연결 수립 없이 패킷을 즉시 발송하여 헤더(8바이트)가 작고 빠르나 신뢰성을 보장하지 않아 실시간 영상/DNS에 적합함."
          },
          {
            id: 12, type: "essay", score: 15, origin: "네트워크 계층: 서브넷팅 계산 및 주소 체계",
            text: "[서술형 15점] C클래스 사설 IP 대역 192.168.10.0/24를 서브넷 마스크 255.255.255.224(/27)로 서브넷팅할 때,\n① 생성 가능한 총 서브넷의 개수 (5점)\n② 각 서브넷당 할당 가능한 실제 유효 호스트 IP의 개수 (5점)\n③ 호스트 개수 계산 시 2개를 차감하는 네트워크 이론적 이유를 서술하시오. (5점)",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["서브넷 8개", "유효 호스트 30개", "네트워크 주소", "브로드캐스트 주소"],
            rubric: [
              { item: "1. 서브넷 개수", desc: "서브넷 비트 3비트 → 2³ = 8개 명시 시 5점" },
              { item: "2. 유효 호스트 개수", desc: "호스트 비트 5비트 → 2⁵ - 2 = 30개 명시 시 5점" },
              { item: "3. 2개 차감 이유", desc: "첫 번째(네트워크 대표 주소)와 마지막(브로드캐스트 주소) 예약 명시 시 5점" }
            ],
            explanation: "1) /24에서 /27로 3비트를 빌려왔으므로 서브넷 개수는 2³ = 8개임. 2) 남은 호스트 비트는 5비트이므로 2⁵ - 2 = 30개임. 3) 2개를 제외하는 이유는 호스트 비트가 모두 0인 첫 주소는 '해당 네트워크 자체를 대표하는 주소'이고, 모두 1인 마지막 주소는 '네트워크 전체에 전송하는 브로드캐스트 주소'로 사전 예약되어 개별 호스트에 할당할 수 없기 때문임."
          },
          {
            id: 13, type: "essay", score: 20, origin: "TCP 3-Way Handshake & 4-Way Teardown",
            text: "[서술형 20점] TCP의 연결 수립 과정인 3-Way Handshake(SYN, SYN+ACK, ACK)와 연결 해제 과정인 4-Way Handshake(FIN, ACK, FIN, ACK)의 동작 메커니즘을 단계별로 기술하고, 연결 종료 시 클라이언트가 즉시 소켓을 닫지 않고 일정 시간 TIME_WAIT 상태를 유지해야 하는 이유를 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["3-Way Handshake SYN ACK", "4-Way Handshake FIN", "TIME_WAIT", "지연 패킷 수거", "마지막 ACK 유실 방지"],
            rubric: [
              { item: "1. 3-Way 연결 수립", desc: "SYN → SYN+ACK → ACK 3단계 교환 명시 시 7점" },
              { item: "2. 4-Way 연결 해제", desc: "FIN → ACK (반종료) → FIN → ACK 4단계 교환 명시 시 7점" },
              { item: "3. TIME_WAIT 유지 이유", desc: "지연된 패킷의 이전 소켓 오염 방지 및 마지막 ACK 유실 시 재전송 대응 명시 시 6점" }
            ],
            explanation: "연결 수립: 클라이언트 SYN → 서버 SYN+ACK → 클라이언트 ACK. 연결 해제: 클라이언트 FIN → 서버 ACK (하프 클로즈) → 서버 잔여 데이터 전송 후 FIN → 클라이언트 ACK. TIME_WAIT 이유: 마지막 ACK가 유실되었을 경우 서버가 FIN을 재전송할 때 이를 정상 수신하기 위함이며, 네트워크상에 지연되어 떠돌던 이전 연결의 패킷이 뒤늦게 도착하여 신규 연결의 데이터를 오염시키는 문제를 방지하기 위함임."
          }
        ]
      }
    ]
  };
