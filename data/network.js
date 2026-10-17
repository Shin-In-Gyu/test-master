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
      },

      // [회차 2] TCP/IP 전송 계층 & 혼잡·흐름 제어 심화 모의고사 (14문항 100점)
      {
        id: "net_exam2",
        name: "제2회 TCP/IP 전송 계층 & 혼잡·흐름 제어 심화 모의고사",
        tag: "전송계층 심화 14문 (100점)",
        desc: "TCP 연결/종료 4대 핸드셰이크, 윈도우 크기 제어, 혼잡 제어 4대 알고리즘(Slow Start, AIMD, Fast Recovery), UDP 헤더, Well-known 포트",
        questions: [
          // [객관식 5문항: 각 5점 = 25점]
          {
            id: 1, type: "choice", score: 5, origin: "TCP 연결 종료 상태 천이",
            text: "TCP의 정상적인 4-Way Handshake 종료 과정에서, 클라이언트가 서버의 FIN 패킷을 수신하고 마지막 ACK를 전송한 후, 네트워크에 지연된 패킷 수거 및 마지막 ACK 유실 대비를 위해 일정 시간 머무르는 소켓 상태는?",
            options: [
              "A. ESTABLISHED",
              "B. CLOSE_WAIT",
              "C. TIME_WAIT",
              "D. LAST_ACK"
            ],
            answer: "C",
            answers: ["C", "c", "3"],
            explanation: "클라이언트는 마지막 ACK 전송 후 TIME_WAIT 상태(보통 2MSL)로 대기하여 네트워크의 잔존 패킷이 소멸되고 마지막 ACK가 서버에 확실히 전달될 때까지 소켓을 열어둡니다."
          },
          {
            id: 2, type: "choice", score: 5, origin: "TCP 혼잡 제어 Slow Start",
            text: "TCP 혼잡 제어(Congestion Control)에서 패킷 손실이 발생하기 전까지 매 왕복 시간(RTT)마다 혼잡 윈도우(CWND)의 크기를 2배씩 지수 함수적으로 증가시키는 단계는?",
            options: [
              "A. Congestion Avoidance (혼잡 회피)",
              "B. Slow Start (느린 시작)",
              "C. Fast Retransmit (빠른 재전송)",
              "D. Fast Recovery (빠른 회복)"
            ],
            answer: "B",
            answers: ["B", "b", "2"],
            explanation: "Slow Start는 이름과 달리 초기에 1 MSS부터 시작하여 매 RTT마다 1, 2, 4, 8... 형태로 지수적으로 급격히 윈도우를 키워 네트워크 대역폭을 빠르게 탐색합니다."
          },
          {
            id: 3, type: "choice", score: 5, origin: "흐름 제어 vs 혼잡 제어 차이",
            text: "전송 계층의 전송량 제어 메커니즘에 대한 설명 중 가장 옳지 않은 것은?",
            options: [
              "A. 흐름 제어(Flow Control)는 송신 측이 너무 빠르게 패킷을 보내 수신 측 버퍼가 넘치는(Buffer Overflow) 것을 방지한다.",
              "B. 혼잡 제어(Congestion Control)는 네트워크 내부 라우터들의 링크 혼잡과 패킷 손실을 방지하기 위해 송신율을 제어한다.",
              "C. TCP는 수신자가 알려주는 수신 윈도우(RWND)와 네트워크 혼잡을 감지하여 계산한 혼잡 윈도우(CWND) 중 더 큰 값을 기준으로 데이터를 보낸다.",
              "D. 슬라이딩 윈도우(Sliding Window) 메커니즘은 흐름 제어를 위해 수신 측의 가용 버퍼 크기를 지속적으로 송신 측에 통지한다."
            ],
            answer: "C",
            answers: ["C", "c", "3"],
            explanation: "TCP는 수신자의 버퍼 오버플로우와 네트워크 혼잡을 모두 방지해야 하므로, RWND와 CWND 중 '더 작은 값(min(RWND, CWND))'을 기준으로 실제 전송 윈도우를 결정합니다."
          },
          {
            id: 4, type: "choice", score: 5, origin: "UDP 헤더 규격",
            text: "UDP(User Datagram Protocol) 헤더의 고정 크기와 포함되는 4가지 필드로 바르게 짝지어진 것은?",
            options: [
              "A. 8바이트 (출발지 포트, 목적지 포트, 길이, 체크섬)",
              "B. 20바이트 (출발지 IP, 목적지 IP, 일련번호, 확인응답번호)",
              "C. 16바이트 (출발지 포트, 목적지 포트, 윈도우 크기, 헤더 길이)",
              "D. 32바이트 (데이터 오프셋, 플래그 비트, 체크섬, 긴급 포인터)"
            ],
            answer: "A",
            answers: ["A", "a", "1"],
            explanation: "UDP 헤더는 각 2바이트씩 4개 필드(Source Port, Destination Port, Length, Checksum)로 구성되어 총 8바이트의 매우 가벼운 고정 오버헤드를 가집니다."
          },
          {
            id: 5, type: "choice", score: 5, origin: "빠른 재전송 (Fast Retransmit)",
            text: "TCP 송신 측이 동일한 ACK 패킷을 연속으로 몇 번 중복 수신(Duplicate ACKs)했을 때, 재전송 타이머(Timeout)가 만료되기 전이라도 즉시 해당 패킷의 손실로 간주하고 조기 재전송을 수행하는가?",
            options: [
              "A. 1회 수신 시 즉시",
              "B. 2회 연속 수신 시",
              "C. 3회 연속 중복 수신 시 (총 4개 동일 ACK)",
              "D. 5회 연속 중복 수신 시"
            ],
            answer: "C",
            answers: ["C", "c", "3"],
            explanation: "3개의 중복 ACK(3 Duplicate ACKs)를 받으면 수신 측이 중간 패킷을 건너뛰고 있음을 확신할 수 있으므로, RTO 타임아웃을 기다리지 않고 즉시 재전송하는 'Fast Retransmit'이 발동합니다."
          },

          // [단답형 5문항: 각 5점 = 25점]
          {
            id: 6, type: "short", score: 5, origin: "DNS 표준 포트 번호",
            text: "인터넷 도메인 주소(예: google.com)를 IP 주소로 변환해주는 DNS(Domain Name System) 서버 질의 시 기본적으로 사용하는 표준 전송 프로토콜 포트 번호는?",
            placeholder: "포트 번호 숫자 입력",
            answers: ["53"],
            explanation: "DNS는 일반 질의 응답 시 빠른 속도를 위해 UDP 53번 포트를 주로 사용하며, 영역 전송(Zone Transfer) 등 대용량 데이터 전송 시 TCP 53번 포트를 사용합니다."
          },
          {
            id: 7, type: "short", score: 5, origin: "보안 원격 접속 SSH 포트",
            text: "평문으로 데이터를 전송하는 텔넷(Telnet, 23번)의 보안 취약점을 해결하고, 데이터 암호화와 강력한 인증을 제공하는 원격 터미널 프로토콜 (1)의 이름과 표준 포트 번호 (2)를 쓰시오.",
            placeholder: "프로토콜, 포트 (예: SSH, 22)",
            answers: ["SSH, 22", "ssh, 22", "SSH,22", "ssh,22"],
            explanation: "SSH(Secure Shell)는 보안 원격 접속 프로토콜로 기본 22번 포트를 사용합니다."
          },
          {
            id: 8, type: "short", score: 5, origin: "네이글 알고리즘 (Nagle)",
            text: "네트워크에 1바이트짜리 작은 패킷(Tinygram)이 무수히 쏟아져 혼잡을 유발하는 것을 방지하기 위해, 데이터가 MSS만큼 차거나 이전 전송 데이터의 ACK를 수신할 때까지 전송을 지연시켜 모아서 보내는 TCP 최적화 알고리즘의 명칭은?",
            placeholder: "알고리즘 명칭 입력 (예: Nagle 또는 네이글)",
            answers: ["Nagle", "네이글", "네이글 알고리즘", "nagle", "Nagle 알고리즘"],
            explanation: "네이글(Nagle) 알고리즘은 소량의 데이터를 모아 큰 패킷으로 전송하여 네트워크 오버헤드를 줄입니다."
          },
          {
            id: 9, type: "short", score: 5, origin: "초기 순서 번호 ISN",
            text: "TCP 3-Way Handshake 수립 시 클라이언트와 서버가 서로에게 제안하는 첫 번째 데이터 바이트 순서 번호(Sequence Number)의 시작값을 의미하는 영문 약어(3글자)는?",
            placeholder: "영문 3글자 약어 입력",
            answers: ["ISN", "isn"],
            explanation: "ISN (Initial Sequence Number)은 연결 수립 시 교환되는 첫 순서 번호입니다."
          },
          {
            id: 10, type: "short", score: 5, origin: "동적 IP 자동 할당 DHCP",
            text: "새로운 컴퓨터가 네트워크에 접속했을 때 IP 주소, 서브넷 마스크, 기본 게이트웨이, DNS 주소를 DHCP 서버로부터 자동으로 임대받아 설정하는 프로토콜의 영문 약어는?",
            placeholder: "영문 약어 입력",
            answers: ["DHCP", "dhcp"],
            explanation: "DHCP (Dynamic Host Configuration Protocol)는 호스트의 IP 네트워크 설정을 동적으로 자동화합니다."
          },

          // [계산 2문항: 각 10점 = 20점]
          {
            id: 11, type: "calc", score: 10, origin: "Slow Start 윈도우 크기 계산",
            text: "어떤 TCP 연결에서 ssthresh(임계값)가 16 MSS로 설정되어 있고, Slow Start를 초기 혼잡 윈도우 CWND = 1 MSS부터 시작하였다. 패킷 손실이 발생하지 않는다고 가정할 때, 3 RTT가 경과한 시점의 CWND 크기는 몇 MSS인가?",
            placeholder: "숫자만 입력",
            answers: ["8"],
            explanation: "Slow Start는 RTT마다 2배씩 증가합니다: 0 RTT(시작)=1, 1 RTT=2, 2 RTT=4, 3 RTT=8 MSS입니다. (이후 4 RTT에 16에 도달하여 혼잡 회피로 전환)"
          },
          {
            id: 12, type: "calc", score: 10, origin: "TCP 소켓 4-Tuple 식별",
            text: "인터넷 전송 계층에서 연결형 통신을 수행할 때 소켓을 유일하게 식별하기 위해 사용하는 4-Tuple의 총 개수는 4개(출발지 IP, 출발지 포트, 목적지 IP, 목적지 포트)이다. 이때 비연결형 프로토콜인 UDP 소켓을 식별하는 데 필요한 필수 요소의 최소 개수는 몇 개인가? (목적지 IP, 목적지 포트)",
            placeholder: "숫자만 입력 (예: 2)",
            answers: ["2", "2개"],
            explanation: "UDP 소켓은 목적지 IP 주소와 목적지 포트 번호 2가지만으로 역다중화(Demultiplexing)를 수행하므로 최소 2개입니다."
          },

          // [서술형 2문항: 총 30점]
          {
            id: 13, type: "essay", score: 15, origin: "TCP ISN 무작위 생성의 보안적 이유",
            text: "[서술형 15점] TCP 3-Way Handshake에서 양측 호스트가 사용하는 초기 순서 번호(ISN)를 항상 고정된 숫자 0부터 시작하지 않고, 시계 기반의 의사 난수(Pseudorandom)를 생성하여 예측하기 어렵게 만드는 <b>네트워크 보안적 이유</b>를 IP 스푸핑 공격 및 이전 연결의 지연 패킷 충돌 관점에서 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["TCP 시퀀스 번호 예측 공격", "IP 스푸핑", "세션 하이재킹 차단", "이전 연결 지연 패킷 충돌 방지"],
            rubric: [
              { item: "1. 시퀀스 예측 공격 방지", desc: "공격자가 ISN을 예측하여 악의적 데이터 삽입 및 세션 하이재킹/스푸핑 수행을 차단함을 명시 시 8점" },
              { item: "2. 이전 연결 패킷 혼선 방지", desc: "동일 소켓 쌍의 이전 연결에서 네트워크에 지연되어 뒤늦게 도착한 패킷과의 데이터 오염/혼선 방지 명시 시 7점" }
            ],
            explanation: "ISN이 0부터 시작하거나 예측 가능하면 공격자가 송신자 IP를 사칭(IP Spoofing)하여 ACK 번호를 추측해 위조 패킷을 주입하는 TCP 세션 하이재킹 공격이 가능해집니다. 또한 이전 연결에서 지연되어 뒤늦게 도착한 패킷의 Sequence Number가 신규 연결의 순서 번호와 겹쳐 데이터가 오염되는 문제를 원천 방지하기 위해 ISN을 무작위 난수로 설정합니다."
          },
          {
            id: 14, type: "essay", score: 15, origin: "TCP 혼잡 제어 4대 알고리즘 동작 원리",
            text: "[서술형 15점] TCP의 혼잡 제어 4대 알고리즘인 Slow Start, Congestion Avoidance(혼잡 회피), Fast Retransmit(빠른 재전송), Fast Recovery(빠른 회복)의 동작 메커니즘을, 혼잡 윈도우(CWND)와 임계값(ssthresh)의 변화 과정을 중심으로 단계별로 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["Slow Start 지수 증가", "ssthresh 도달 시 혼잡 회피", "선형 증가 AIMD", "3 Dup ACK 시 빠른 재전송", "CWND 절반 감소 후 빠른 회복"],
            rubric: [
              { item: "1. Slow Start & 혼잡 회피", desc: "CWND 2배 지수 증가 후 ssthresh 도달 시 매 RTT마다 1 MSS씩 선형 증가(혼잡 회피) 명시 시 5점" },
              { item: "2. 타임아웃 발생 시", desc: "ssthresh를 현재 CWND의 절반으로 줄이고 CWND=1로 초기화하여 Slow Start 재시작 명시 시 5점" },
              { item: "3. 3 Dup ACK 발생 시", desc: "빠른 재전송 후 ssthresh=CWND/2로 설정하고 CWND를 절반 수준에서 선형 회복(빠른 회복) 명시 시 5점" }
            ],
            explanation: "1) Slow Start: CWND=1부터 매 RTT마다 2배씩 지수 증가. 2) 혼잡 회피: CWND >= ssthresh 도달 시 매 RTT마다 1 MSS씩 선형 증가. 3) 3 Duplicate ACK 발생 시: 네트워크가 완전 단절된 것은 아니므로 빠른 재전송을 수행하고, ssthresh = CWND/2로 줄인 뒤 CWND = ssthresh + 3 MSS에서 시작하여 선형 증가(Fast Recovery)함. 4) Timeout 발생 시: 심각한 혼잡으로 판단하여 ssthresh = CWND/2, CWND = 1 MSS로 리셋 후 Slow Start부터 다시 시작함."
          }
        ]
      },

      // [회차 3] IP 주소 체계, 서브넷팅 계산 & 라우팅 프로토콜 마스터 (14문항 100점)
      {
        id: "net_exam3",
        name: "제3회 IP 주소 체계, 서브넷팅 계산 & 라우팅 프로토콜 마스터",
        tag: "IP·서브넷팅·라우팅 14문 (100점)",
        desc: "IPv4 클래스풀 vs CIDR, 서브넷 마스크 계산 실전, ARP & ICMP 메커니즘, 거리 벡터(RIP) vs 링크 상태(OSPF), NAT/PAT",
        questions: [
          // [객관식 5문항: 각 5점 = 25점]
          {
            id: 1, type: "choice", score: 5, origin: "사설 IP 주소 대역",
            text: "RFC 1918에 정의된 사설 IP 주소(Private IP) 대역에 해당하지 않는 공인 IP 주소는?",
            options: [
              "A. 10.50.1.200",
              "B. 172.25.10.1",
              "C. 192.168.100.5",
              "D. 165.132.88.10"
            ],
            answer: "D",
            answers: ["D", "d", "4"],
            explanation: "사설 IP 대역은 A클래스: 10.0.0.0 ~ 10.255.255.255 (/8), B클래스: 172.16.0.0 ~ 172.31.255.255 (/12), C클래스: 192.168.0.0 ~ 192.168.255.255 (/16)입니다. 165.132.x.x는 대학교나 기관 등에 할당되는 공인 IP 주소입니다."
          },
          {
            id: 2, type: "choice", score: 5, origin: "링크 상태 라우팅 OSPF",
            text: "다익스트라(Dijkstra)의 최단 경로 알고리즘(SPF)을 사용하여 라우터들이 링크 상태 패킷(LSA)을 플러딩하고 전체 네트워크 토폴로지 맵을 공유하여 대규모 망에 적합한 내부 라우팅 프로토콜은?",
            options: [
              "A. RIP (Routing Information Protocol)",
              "B. OSPF (Open Shortest Path First)",
              "C. BGP (Border Gateway Protocol)",
              "D. ARP (Address Resolution Protocol)"
            ],
            answer: "B",
            answers: ["B", "b", "2"],
            explanation: "OSPF는 링크 상태(Link State) 라우팅 프로토콜로, 다익스트라 최단 경로 우선(SPF) 알고리즘을 사용하며 홉 수 제한이 없어 대규모 네트워크에 널리 사용됩니다."
          },
          {
            id: 3, type: "choice", score: 5, origin: "스플릿 호라이즌 (Split Horizon)",
            text: "거리 벡터(Distance Vector) 라우팅 알고리즘인 RIP에서 인접 라우터 간에 잘못된 정보가 순환하여 발생하는 무한 루프(Count to Infinity)를 방지하기 위해, '특정 인터페이스로 수신한 라우팅 경로 정보를 다시 그 인터페이스로 광고하지 않는' 기법은?",
            options: [
              "A. Split Horizon (스플릿 호라이즌)",
              "B. Poison Reverse (포이즌 리버스)",
              "C. Route Summarization (경로 축약)",
              "D. Supernetting (슈퍼넷팅)"
            ],
            answer: "A",
            answers: ["A", "a", "1"],
            explanation: "스플릿 호라이즌(Split Horizon)은 정보를 전달받은 방향으로는 동일한 경로 정보를 되돌려 보내지 않음으로써 라우팅 루프를 차단하는 핵심 기법입니다."
          },
          {
            id: 4, type: "choice", score: 5, origin: "포트 주소 변환 (NAPT/PAT)",
            text: "단 1개의 공인 IP 주소만을 가진 환경에서, 내부 사설망의 수백 대 컴퓨터들이 동시에 인터넷과 통신할 수 있도록 IP 주소뿐만 아니라 L4 포트 번호(Port)를 매핑하여 변환하는 기술은?",
            options: [
              "A. Static NAT (정적 NAT)",
              "B. NAPT (Network Address Port Translation / PAT)",
              "C. DNS",
              "D. DHCP Relay"
            ],
            answer: "B",
            answers: ["B", "b", "2"],
            explanation: "NAPT(또는 PAT)는 공인 IP 1개에 사설 IP와 포트 번호를 결합 매핑하여 수많은 호스트가 공인 IP를 공유할 수 있게 해줍니다. 가정용 공유기가 이 방식을 사용합니다."
          },
          {
            id: 5, type: "choice", score: 5, origin: "진단 프로토콜 ICMP",
            text: "IP 프로토콜의 비신뢰성을 보완하여 패킷 전송 중 목적지 도달 불가, TTL 만료 등의 오류를 보고하고, ping 및 traceroute 진단 도구의 기반이 되는 프로토콜은?",
            options: [
              "A. IGMP",
              "B. ICMP (Internet Control Message Protocol)",
              "C. ARP",
              "D. SNMP"
            ],
            answer: "B",
            answers: ["B", "b", "2"],
            explanation: "ICMP는 네트워크 계층에서 오류 보고와 진단(Echo Request/Echo Reply)을 수행하는 프로토콜입니다."
          },

          // [단답형 5문항: 각 5점 = 25점]
          {
            id: 6, type: "short", score: 5, origin: "네트워크 주소 계산",
            text: "어떤 호스트의 IP 주소가 192.168.10.130이고 서브넷 마스크가 255.255.255.0(/24)일 때, 이 호스트가 속한 서브넷의 네트워크 대표 주소(Network Address)는?",
            placeholder: "IP 주소 형식 입력 (예: 192.168.10.0)",
            answers: ["192.168.10.0"],
            explanation: "서브넷 마스크가 /24이므로 앞의 3옥텟 192.168.10까지가 네트워크 부이고 마지막 옥텟을 0으로 둔 192.168.10.0이 네트워크 주소입니다."
          },
          {
            id: 7, type: "short", score: 5, origin: "서브넷 가용 호스트 수 계산",
            text: "서브넷 마스크가 255.255.255.240(/28)인 서브넷에서 실제 컴퓨터나 라우터 인터페이스에 할당 가능한 유효 호스트 IP 주소의 최대 개수는 몇 개인가?",
            placeholder: "숫자만 입력",
            answers: ["14", "14개"],
            explanation: "호스트 비트는 32 - 28 = 4비트입니다. 2⁴ = 16개에서 네트워크 주소와 브로드캐스트 주소 2개를 차감하면 14개입니다."
          },
          {
            id: 8, type: "short", score: 5, origin: "ARP Request 브로드캐스트 MAC",
            text: "호스트가 상대방의 IP 주소를 통해 물리적 MAC 주소를 알아내기 위해 동일 네트워크 전체로 전송하는 ARP Request 프레임의 목적지 MAC 주소(브로드캐스트 MAC) 표기는?",
            placeholder: "FF:FF:FF:FF:FF:FF 형식 입력",
            answers: ["FF:FF:FF:FF:FF:FF", "ff:ff:ff:ff:ff:ff", "FFFF.FFFF.FFFF", "ffff.ffff.ffff"],
            explanation: "이더넷 브로드캐스트 MAC 주소는 모든 48비트가 1인 FF:FF:FF:FF:FF:FF입니다."
          },
          {
            id: 9, type: "short", score: 5, origin: "루핑 방지 TTL 필드",
            text: "IPv4 패킷 헤더에서 라우터를 하나 통과할 때마다 1씩 감소하며, 값이 0에 도달하면 라우터가 패킷을 즉시 폐기하고 송신자에게 시간 초과 메시지를 반환하여 패킷의 무한 루핑을 차단하는 필드의 이름(또는 약어)은?",
            placeholder: "필드 이름 또는 영문 약어 입력 (예: TTL)",
            answers: ["TTL", "Time To Live", "ttl", "time to live"],
            explanation: "TTL (Time To Live) 필드는 라우팅 루프로 인한 영구 패킷 순환을 방지합니다."
          },
          {
            id: 10, type: "short", score: 5, origin: "경로 요약 슈퍼넷팅",
            text: "연속된 여러 개의 작은 서브넷 네트워크들을 하나의 큰 상위 네트워크로 묶어 라우팅 테이블의 항목 수를 획기적으로 줄여주는 기술(경로 축약)을 무엇이라 부르는가?",
            placeholder: "기술 명칭 입력 (예: 슈퍼넷팅 또는 Supernetting)",
            answers: ["슈퍼넷팅", "supernetting", "Supernetting", "경로 축약", "경로축약"],
            explanation: "슈퍼넷팅(Supernetting 또는 Route Aggregation)은 여러 개의 클래스나 서브넷을 하나로 결합하여 라우터의 메모리와 검색 성능을 최적화합니다."
          },

          // [계산 2문항: 각 10점 = 20점]
          {
            id: 11, type: "calc", score: 10, origin: "서브넷 분할 Prefix 계산",
            text: "C클래스 네트워크 대역 200.100.50.0/24를 동일한 크기를 가진 4개의 독립된 서브넷으로 균등 분할하고자 한다. 이때 분할된 각 서브넷에 적용해야 하는 새로운 CIDR 프리픽스는 몇인가? (/ 형태 입력, 예: /26)",
            placeholder: "/26 형식 입력",
            answers: ["/26", "26", "255.255.255.192"],
            explanation: "4개의 서브넷(2² = 4)을 만들기 위해서는 호스트 비트에서 2비트를 서브넷 비트로 빌려와야 합니다. 따라서 24 + 2 = /26 (서브넷 마스크: 255.255.255.192)이 됩니다."
          },
          {
            id: 12, type: "calc", score: 10, origin: "브로드캐스트 주소 계산",
            text: "서브넷 172.16.20.64/26 대역에서 해당 서브넷에 속한 모든 호스트에게 동시에 데이터를 송신하기 위해 예약된 브로드캐스트 주소(Broadcast Address)의 마지막 4번째 옥텟 숫자는 얼마인가? (예: 172.16.20.X에서 X의 숫자)",
            placeholder: "마지막 옥텟 정수 숫자 입력 (예: 127)",
            answers: ["127", "172.16.20.127"],
            explanation: "/26의 서브넷 크기는 64개(2⁶ = 64)입니다. 시작 주소가 64이므로 범위는 64 ~ 127입니다. 따라서 네트워크 주소는 .64, 호스트 유효 범위는 .65 ~ .126, 마지막 브로드캐스트 주소는 .127입니다."
          },

          // [서술형 2문항: 총 30점]
          {
            id: 13, type: "essay", score: 15, origin: "ARP 프로토콜의 동작 메커니즘과 캐시 테이블",
            text: "[서술형 15점] 동일 로컬 네트워크(LAN) 상에서 호스트 A가 호스트 B에게 데이터를 전송하고자 할 때, 목적지 MAC 주소를 알아내기 위한 <b>ARP의 동작 과정(ARP Request 전송 방식과 ARP Reply 전송 방식의 차이)</b>과 <b>ARP 캐시 테이블을 운용하는 이유</b>를 단계별로 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["ARP Request 브로드캐스트", "목적지 호스트만 응답", "ARP Reply 유니캐스트", "ARP 캐시 테이블", "브로드캐스트 오버헤드 감소"],
            rubric: [
              { item: "1. ARP Request", desc: "목적지 IP를 담아 FF:FF:FF:FF:FF:FF 브로드캐스트로 LAN 전체 전송 명시 시 5점" },
              { item: "2. ARP Reply", desc: "해당 IP를 가진 대상 호스트만 자신의 MAC 주소를 담아 A에게 1:1 유니캐스트 응답 명시 시 5점" },
              { item: "3. ARP 캐시 운용", desc: "매 패킷마다 브로드캐스트하는 망 오버헤드를 막기 위해 IP-MAC 매핑을 메모리에 캐싱함을 명시 시 5점" }
            ],
            explanation: "1) 호스트 A는 목적지 IP를 명시한 ARP Request 패킷을 목적지 MAC을 브로드캐스트(FF:FF:FF:FF:FF:FF)로 설정하여 전체 호스트에 전파합니다. 2) 패킷을 수신한 호스트 중 자신의 IP와 일치하는 호스트 B만이 자신의 MAC 주소를 담은 ARP Reply 패킷을 생성하여 호스트 A에게 1:1 유니캐스트로 전달합니다. 3) 호스트 A는 수신한 B의 MAC 주소를 'ARP 캐시 테이블'에 일정 시간(TTL) 저장하여, 다음 패킷 전송 시 불필요한 브로드캐스트 트래픽을 유발하지 않고 즉시 프레임을 전송할 수 있도록 최적화합니다."
          },
          {
            id: 14, type: "essay", score: 15, origin: "거리 벡터(RIP) vs 링크 상태(OSPF) 비교",
            text: "[서술형 15점] 내부 라우팅 프로토콜(IGP)의 양대 축인 <b>거리 벡터 프로토콜(RIP)</b>과 <b>링크 상태 프로토콜(OSPF)</b>을 1) 최적 경로 선정 메트릭(Metric), 2) 라우팅 정보 공유 방식 및 수렴 속도(Convergence Time), 3) 대규모 네트워크 확장성 측면에서 비교 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["RIP 홉 수(Hop Count)", "OSPF 대역폭/비용(Cost)", "벨만-포드 vs 다익스트라 SPF", "주기적 전체 광고 vs 변경 시 LSA 플러딩", "수렴 속도", "15홉 제한 vs 대규모 확장"],
            rubric: [
              { item: "1. 메트릭 비교", desc: "RIP는 단순 홉 수(최대 15홉) vs OSPF는 링크 대역폭 기반 코스트(Cost) 명시 시 5점" },
              { item: "2. 정보 공유 및 수렴 속도", desc: "RIP는 30초마다 인접 라우터와 전체 테이블 교환(느림) vs OSPF는 변경 시 LSA 플러딩 및 SPF 즉시 재계산(빠름) 명시 시 5점" },
              { item: "3. 대규모 네트워크 적합성", desc: "RIP는 소규모 망 한정 vs OSPF는 Area 분할로 대규모 망 확장 가능 명시 시 5점" }
            ],
            explanation: "1) 메트릭: RIP는 거쳐가는 라우터 수인 홉 수(Hop Count, 최대 15홉)만을 고려하여 회선 속도를 반영하지 못하지만, OSPF는 회선의 대역폭을 기반으로 산출된 Cost(비용)를 메트릭으로 사용하여 고속 회선을 우선 선택함. 2) 정보 공유 & 수렴: RIP는 30초마다 인접 라우터에게 전체 라우팅 테이블을 주기적으로 브로드캐스트하여 수렴 속도가 느리고 루프 위험이 있음. 반면 OSPF는 토폴로지 변경 시에만 LSA 패킷을 멀티캐스트 플러딩하고 다익스트라(SPF) 알고리즘으로 최적 경로를 즉시 재계산하므로 수렴 속도가 매우 빠름. 3) 확장성: RIP는 16홉 도달 불능 제한으로 대규모 망에 부적합하지만, OSPF는 Area 단위 계층적 설계를 지원하여 대규모 기업망 및 백본망에 최적화되어 있음."
          }
        ]
      },

      // [회차 4] 컴퓨터네트워크 전범위 파이널 실전 모의고사 (14문항 100점)
      {
        id: "net_exam4",
        name: "제4회 컴퓨터네트워크 전범위 파이널 실전 모의고사",
        tag: "전범위 14문 (100점)",
        desc: "OSI 7계층, CSMA/CD, L2 스위치 5대 동작, VLAN, HTTP/1.1 vs 2.0 vs 3.0, 전구간 패킷 흐름 종합",
        questions: [
          // [객관식 5문항: 각 5점 = 25점]
          {
            id: 1, type: "choice", score: 5, origin: "이더넷 충돌 제어 CSMA/CD",
            text: "유선 이더넷(IEEE 802.3)에서 하나의 통신 매체를 여러 단말이 공유할 때 발생하는 충돌을 제어하는 CSMA/CD 메커니즘에 대한 설명으로 올바른 것은?",
            options: [
              "A. 데이터를 전송하기 전에 회선이 사용 중인지 감지(Carrier Sense)하고, 충돌이 감지되면 즉시 전송을 중단하고 잼 신호(Jam Signal)를 브로드캐스트한 후 랜덤 시간(백오프) 대기한다.",
              "B. 충돌을 사전에 100% 회피(Avoidance)하기 위해 RTS/CTS 패킷을 먼저 교환한다.",
              "C. 풀 듀플렉스(Full-Duplex) 스위치 환경에서도 항상 CSMA/CD 충돌 감지 연산이 필수적으로 요구된다.",
              "D. 충돌 발생 시 모든 호스트가 동일한 고정 시간(1초) 동안 대기한 후 동시에 재전송한다."
            ],
            answer: "A",
            answers: ["A", "a", "1"],
            explanation: "CSMA/CD는 반이중(Half-Duplex) 공유 회선에서 통신 전 회선 감지, 충돌 감지 시 즉시 전송 중단 및 잼 신호 송출, 지수 백오프(Exponential Backoff) 랜덤 시간 대기 후 재전송하는 매체 접근 제어 방식입니다."
          },
          {
            id: 2, type: "choice", score: 5, origin: "L2 스위치 MAC 학습 (Learning)",
            text: "L2 스위치가 어떤 포트로 프레임을 수신했을 때 수행하는 5대 기본 동작 중, 프레임의 '출발지 MAC 주소'와 '수신 포트 번호'를 자신의 MAC 주소 테이블에 기록하는 동작은?",
            options: [
              "A. Flooding (플러딩)",
              "B. Forwarding (포워딩)",
              "C. Learning (러닝 / 학습)",
              "D. Aging (에이징)"
            ],
            answer: "C",
            answers: ["C", "c", "3"],
            explanation: "스위치는 프레임이 들어온 포트와 그 프레임의 출발지 MAC 주소를 보고 '이 MAC 주소를 가진 장비는 이 포트에 연결되어 있구나'를 학습(Learning)합니다."
          },
          {
            id: 3, type: "choice", score: 5, origin: "가상 랜 VLAN",
            text: "물리적으로 동일한 스위치 장비에 연결되어 있는 컴퓨터들이라도 논리적으로 브로드캐스트 도메인을 분할하여 보안을 강화하고 불필요한 트래픽 확산을 차단하는 기술은?",
            options: [
              "A. VPN",
              "B. VLAN (Virtual Local Area Network)",
              "C. NAT",
              "D. Subnetting"
            ],
            answer: "B",
            answers: ["B", "b", "2"],
            explanation: "VLAN은 물리적 배치와 상관없이 스위치 포트별로 논리적인 LAN(브로드캐스트 도메인)을 분리하는 가상 랜 기술입니다."
          },
          {
            id: 4, type: "choice", score: 5, origin: "HTTP 2.0 Multiplexing",
            text: "HTTP 2.0이 기존 HTTP 1.1의 파이프라이닝 한계와 HOL(Head-of-Line) 블로킹 문제를 해결하기 위해 도입한, 단 하나의 TCP 연결 안에서 여러 개의 양방향 요청과 응답을 독립된 프레임 단위로 나누어 병렬 전송하는 기술은?",
            options: [
              "A. Keep-Alive",
              "B. Multiplexing (다중화)",
              "C. Chunked Transfer",
              "D. Gzip Compression"
            ],
            answer: "B",
            answers: ["B", "b", "2"],
            explanation: "HTTP 2.0의 스트림 다중화(Multiplexing)는 요청 순서와 무관하게 프레임을 쪼개어 단일 TCP 연결로 병렬 송수신함으로써 지연 시간을 대폭 개선했습니다."
          },
          {
            id: 5, type: "choice", score: 5, origin: "HTTP 3.0 QUIC",
            text: "최신 HTTP 3.0 프로토콜이 TCP의 고질적인 3-Way Handshake 연결 지연과 TCP 계층 HOL 블로킹을 근본적으로 극복하기 위해, 전송 계층에서 TCP 대신 채택한 UDP 기반의 전송 프로토콜은?",
            options: [
              "A. SCTP",
              "B. QUIC (Quick UDP Internet Connections)",
              "C. TLS 1.3",
              "D. RSVP"
            ],
            answer: "B",
            answers: ["B", "b", "2"],
            explanation: "HTTP 3.0은 구글이 개발한 UDP 기반의 QUIC 프로토콜 위에서 동작하여 0-RTT 연결 수립과 독립적인 스트림 처리를 지원합니다."
          },

          // [단답형 5문항: 각 5점 = 25점]
          {
            id: 6, type: "short", score: 5, origin: "OSI 최하위 계층",
            text: "OSI 7계층 참조 모델 중 가장 최하위 계층으로, 상위 계층에서 내려온 0과 1의 디지털 비트 열을 전압, 빛, 전파 등 물리적 신호로 변환하여 전송 매체로 내보내는 계층은?",
            placeholder: "계층 명칭 입력 (예: 물리 계층 또는 Physical Layer)",
            answers: ["물리 계층", "물리계층", "physical", "Physical Layer", "1계층"],
            explanation: "물리 계층(Physical Layer, 1계층)은 케이블, 커넥터, 전압 규격 등을 다룹니다."
          },
          {
            id: 7, type: "short", score: 5, origin: "웹 상태 유지 쿠키",
            text: "비상태성(Stateless) 프로토콜인 HTTP에서 클라이언트의 로그인 상태나 장바구니 정보를 유지하기 위해, 웹 서버가 클라이언트 브라우저에 저장하도록 전달하는 작은 텍스트 데이터 조각의 이름은?",
            placeholder: "명칭 입력 (예: 쿠키 또는 Cookie)",
            answers: ["쿠키", "cookie", "Cookie"],
            explanation: "쿠키(Cookie)는 클라이언트 측에 저장되어 매 HTTP 요청 헤더에 자동으로 실려 전송되는 상태 정보입니다."
          },
          {
            id: 8, type: "short", score: 5, origin: "스위치 플러딩 동작",
            text: "L2 스위치가 수신한 프레임의 목적지 MAC 주소가 자신의 MAC 테이블에 존재하지 않을 때(Unregistered), 프레임이 유실되지 않도록 수신된 포트를 제외한 모든 포트로 프레임을 복제하여 뿌리는 동작을 무엇이라 하는가?",
            placeholder: "동작 명칭 입력 (예: 플러딩 또는 Flooding)",
            answers: ["플러딩", "flooding", "Flooding"],
            explanation: "스위치는 목적지를 모를 때 플러딩(Flooding)을 수행하여 목적지 장비가 응답하도록 유도합니다."
          },
          {
            id: 9, type: "short", score: 5, origin: "HTTP 1.1 지속 연결",
            text: "웹 페이지 하나를 불러올 때 수십 개의 이미지와 CSS 파일마다 TCP 3-Way Handshake를 반복하지 않고, 하나의 TCP 연결을 유지한 채 여러 개의 HTTP 요청/응답을 연속 처리할 수 있도록 지원하는 HTTP 1.1의 헤더 속성은?",
            placeholder: "속성 명칭 입력 (예: Keep-Alive)",
            answers: ["Keep-Alive", "keep-alive", "지속 연결", "KeepAlive"],
            explanation: "Connection: Keep-Alive 헤더를 통해 TCP 연결을 재사용하여 오버헤드를 대폭 절감합니다."
          },
          {
            id: 10, type: "short", score: 5, origin: "L2 vs L3 도메인 구분",
            text: "스위치의 각 포트마다 분리되는 것은 '충돌 도메인(Collision Domain)'이다. 그렇다면 라우터의 각 인터페이스마다 분리되며, 브로드캐스트 패킷이 도달하는 전체 유효 범위를 일컫는 도메인의 명칭은?",
            placeholder: "도메인 명칭 입력 (예: 브로드캐스트 도메인)",
            answers: ["브로드캐스트 도메인", "broadcast domain", "브로드캐스트도메인", "Broadcast Domain"],
            explanation: "스위치는 충돌 도메인을 나누고, 라우터는 브로드캐스트 도메인을 나눕니다."
          },

          // [계산 2문항: 각 10점 = 20점]
          {
            id: 11, type: "calc", score: 10, origin: "전송 지연 시간(Transmission Delay) 계산",
            text: "대역폭(전송 속도)이 100 Mbps (초당 100 메가비트 = 100,000,000 bps)인 네트워크 링크에서, 크기가 1,250,000 바이트 (1 바이트 = 8 비트이므로 10,000,000 비트)인 데이터 패킷을 링크에 밀어 넣는 데 소요되는 순수 전송 지연 시간(Transmission Delay = L / R)은 몇 초인가?",
            placeholder: "초 단위 소수점 숫자 입력 (예: 0.1)",
            answers: ["0.1", "0.1초"],
            explanation: "전송 지연 = 패킷 크기(L) / 대역폭(R) = (1,250,000 * 8 비트) / 100,000,000 bps = 10,000,000 / 100,000,000 = 0.1초 (100ms)입니다."
          },
          {
            id: 12, type: "calc", score: 10, origin: "IPv6 주소 비트 길이",
            text: "기존 IPv4 주소의 길이는 32비트(4바이트)이다. IPv4 주소 고갈 문제를 해결하기 위해 16진수 8개 그룹으로 표기하는 차세대 IPv6 주소의 전체 길이는 총 몇 비트(bit)인가?",
            placeholder: "숫자만 입력",
            answers: ["128", "128비트"],
            explanation: "IPv6 주소는 128비트(16바이트) 길이로 사실상 무한대에 가까운 2¹²⁸개의 주소를 제공합니다."
          },

          // [서술형 2문항: 총 30점]
          {
            id: 13, type: "essay", score: 15, origin: "L2 스위치의 5대 동작 메커니즘",
            text: "[서술형 15점] L2 스위치가 프레임을 수신하고 처리할 때 수행하는 5대 핵심 동작인 <b>Learning(학습)</b>, <b>Flooding(플러딩)</b>, <b>Forwarding(포워딩)</b>, <b>Filtering(필터링)</b>, <b>Aging(에이징)</b>의 개념을 MAC 주소 테이블 처리 관점에서 각각 설명하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["Learning 출발지 MAC 학습", "Flooding 미등록 목적지 전체 포트 전송", "Forwarding 목적지 특정 포트 전달", "Filtering 다른 포트로 못 나가게 차단", "Aging 일정 시간 후 테이블 삭제"],
            rubric: [
              { item: "1. Learning & Flooding", desc: "출발지 MAC-포트 매핑 기록(러닝) 및 미등록 목적지 프레임의 전체 포트 복제(플러딩) 명시 시 6점" },
              { item: "2. Forwarding & Filtering", desc: "목적지 MAC이 있는 특정 포트로만 전송(포워딩) 및 나머지 포트로는 나가지 않도록 차단(필터링) 명시 시 6점" },
              { item: "3. Aging", desc: "장비 이동/교체를 반영하기 위해 일정 시간 동안 통신 없는 MAC 항목 자동 삭제 명시 시 3점" }
            ],
            explanation: "1) Learning: 프레임 수신 시 출발지 MAC 주소와 해당 수신 포트 번호를 MAC 테이블에 기록함. 2) Flooding: 목적지 MAC이 테이블에 없을 경우 수신 포트를 제외한 모든 포트로 프레임을 복제 전송함. 3) Forwarding: 목적지 MAC이 테이블에 등록되어 있을 경우 해당 목적지 포트로만 프레임을 직접 전달함. 4) Filtering: 목적지 포트 이외의 다른 포트들로는 프레임이 전달되지 않도록 충돌 도메인을 격리함. 5) Aging: 일정 시간(기본 300초 등) 동안 프레임이 수신되지 않은 오래된 MAC 주소 항목을 테이블에서 자동 삭제하여 테이블 메모리를 최적화하고 단말 이동을 지원함."
          },
          {
            id: 14, type: "essay", score: 15, origin: "웹 브라우저 URL 입력 시 전구간 네트워크 동작",
            text: "[서술형 15점] 사용자가 웹 브라우저 주소창에 'https://www.google.com'을 입력하고 엔터를 눌렀을 때, 웹 서버의 첫 HTML 페이지가 브라우저에 표시되기까지 일어나는 네트워크 패킷의 흐름을 <b>1) DNS 질의 및 응답</b>, <b>2) ARP 주소 변환</b>, <b>3) TCP 3-Way Handshake</b>, <b>4) HTTP(S) 요청 및 응답</b>의 4단계로 나누어 서술하시오.",
            placeholder: "여기에 서술형 답안을 작성하세요.",
            keywords: ["DNS 질의로 IP 획득", "기본 게이트웨이 MAC 위해 ARP", "TCP 3-Way Handshake SYN ACK", "TLS 핸드셰이크", "HTTP GET 요청 및 200 OK"],
            rubric: [
              { item: "1. DNS 단계", desc: "도메인 이름을 목적지 IP 주소로 변환하기 위해 DNS 서버에 질의함을 명시 시 4점" },
              { item: "2. ARP 단계", desc: "외부망 통신을 위해 기본 게이트웨이(공유기/라우터)의 MAC 주소를 ARP로 알아냄을 명시 시 4점" },
              { item: "3. TCP 연결 단계", desc: "목적지 IP와 443번 포트로 SYN -> SYN+ACK -> ACK 3-Way Handshake 수립 명시 시 4점" },
              { item: "4. HTTP(S) 통신 단계", desc: "TLS 보안 채널 수립 후 HTTP GET 요청 전송 및 200 OK 응답 수신 명시 시 3점" }
            ],
            explanation: "1) DNS 질의: 브라우저는 www.google.com의 IP 주소를 알아내기 위해 로컬 DNS 캐시를 확인하고, 없으면 DNS 서버에 UDP 53번으로 질의하여 목적지 IP를 획득함. 2) ARP 주소 해석: 패킷을 전송하기 위해 기본 게이트웨이(라우터)의 물리적 MAC 주소가 필요하므로 ARP Request(브로드캐스트)를 보내고 게이트웨이의 MAC 주소를 담은 ARP Reply를 수신함. 3) TCP 연결 수립: 목적지 IP와 웹 보안 포트(443)로 SYN, SYN+ACK, ACK 3-Way Handshake를 거쳐 신뢰성 있는 가상 회선을 수립함(HTTPS의 경우 이후 TLS 암호화 핸드셰이크 수행). 4) HTTP 요청 및 렌더링: 연결된 소켓을 통해 클라이언트가 'GET / HTTP/1.1' 요청 메시지를 전송하고, 웹 서버가 '200 OK'와 함께 HTML 문서를 응답하여 브라우저가 화면에 페이지를 렌더링함."
          }
        ]
      }
    ]
  };

