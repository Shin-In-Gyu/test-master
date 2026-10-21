// ========================================================
// 📘 [EXAM MASTER DOSSIER] 새 과목 표준 템플릿 (_template.js)
// --------------------------------------------------------
// 사용법:
// 1. 이 파일을 복사하여 `data/과목ID.js` (예: `data/network.js`)로 저장합니다.
// 2. 아래의 `subject_id`를 고유한 과목 키값(영문 소문자)으로 변경합니다.
// 3. index.html 하단에 `<script src="data/과목ID.js"></script>` 한 줄을 추가합니다.
// 4. 웹앱을 열면 상단 드롭다운에 새 과목이 자동으로 추가됩니다!
// ========================================================

window.CONCEPT_DATABASE = window.CONCEPT_DATABASE || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};

// ========================================================
// 1. 개념 총정리 (마크다운 지원 & 교수님 프로파일링 탑재)
// ========================================================
window.CONCEPT_DATABASE["subject_id"] = {
  id: "subject_id",
  title: "📘 컴퓨터네트워크 (김교수 / 중간고사 전범위)",

  // [선택 사항] 담당 교수님 출제 성향 & 감점 십계명 (상단 배너 자동 생성)
  professorProfile: {
    name: "김교수",
    timeMinutes: 50,
    notice: "교재 연습문제와 수업 슬라이드 수치가 변형되어 출제됩니다. 단순 암기보다 프로토콜 흐름 이해가 핵심입니다.",
    killerRules: [
      "⚠️ 3-Way Handshake SYN/ACK 패킷 순서 오류 시 0점 처리",
      "⚠️ 서술형에서 영문 프로토콜 명칭(TCP, UDP, ICMP 등) 약어 풀네임 병기 필수",
      "⚠️ 서브넷 마스크 계산 문제에서 풀이 과정 누락 시 50% 감점"
    ]
  },

  // 단원 바로가기 칩 (선택 사항)
  filterChips: [
    { id: "all", label: "전체보기" },
    { id: "ch1", label: "1장: OSI 7계층 & TCP/IP", class: "amber-chip" },
    { id: "ch2", label: "2장: 애플리케이션 계층" },
    { id: "ch3", label: "3장: 전송 계층 (TCP/UDP)" }
  ],

  // 💡 마크다운(Markdown) 문자열로 직접 작성 (HTML 태그를 일일이 칠 필요 없음!)
  markdown: `
# 🚨 [시험 직전 10분] 핵심 요약 치트시트

> **시험 규칙**: 50분 / 총 25문항 / 단답형 및 계산형 비중 70%

---

## 📊 1. 전송 계층 핵심 프로토콜 비교
| 항목 | TCP (Transmission Control Protocol) | UDP (User Datagram Protocol) |
| :--- | :--- | :--- |
| **연결 방식** | 연결 지향형 (3-Way Handshake) | 비연결형 (독립적 전송) |
| **신뢰성** | 높음 (패킷 재전송, 순서 보장, 흐름제어) | 낮음 (패킷 유실 가능, 순서 무작위) |
| **속도** | 헤더 오버헤드로 인해 비교적 느림 (20~60B) | 매우 빠르고 가벼움 (8B 헤더) |
| **주요 용도** | 웹(HTTP), 파일(FTP), 이메일(SMTP) | 실시간 스트리밍, DNS, 온라인 게임 |

---

## 💻 2. 킬러 서술형 모범 답안

### Q. TCP 3-Way Handshake의 목적과 단계별 플래그를 서술하시오.
* **배점**: 5점
* **핵심 질문**: 클라이언트와 서버가 신뢰성 있는 연결을 수립하는 3단계를 설명하라.

<details>
<summary><b>🔍 모범 답안 및 채점 키워드 확인 (클릭)</b></summary>

\`\`\`text
[채점 기준 키워드 (각 1.5점)]
1. 1단계: 클라이언트가 서버로 연결 요청 SYN(seq=x) 패킷 전송
2. 2단계: 서버가 수신 후 승인 ACK(x+1) 및 동기화 SYN(seq=y) 동시 전송
3. 3단계: 클라이언트가 최종 확인 ACK(y+1) 전송 후 ESTABLISHED 상태 돌입
\`\`\`
</details>
`
};

// ========================================================
// 2. 실전 모의고사 (객관식, 주관식 단답형, 계산형, 서술형)
// ========================================================
window.EXAM_DATABASE["subject_id"] = {
  title: "📘 컴퓨터네트워크 (실전 모의고사)",
  maxScore: 100,

  exams: [
    {
      id: "exam_1",
      name: "제1회 실전 모의고사 (전범위 타임어택)",
      pillLabel: "1회: 전범위", // 상단 탭에 표시될 짧은 텍스트
      tag: "객관식 + 단답형 + 계산형",
      questions: [
        {
          id: 1,
          type: "choice",
          score: 5,
          origin: "1장 네트워크 계층 모델",
          text: "OSI 7계층 중 종단 간(End-to-End)의 신뢰성 있는 데이터 전송을 담당하며, 흐름 제어 및 오류 제어를 수행하는 계층은?",
          choices: [
            "1. 물리 계층 (Physical Layer)",
            "2. 데이터 링크 계층 (Data Link Layer)",
            "3. 네트워크 계층 (Network Layer)",
            "4. 전송 계층 (Transport Layer)"
          ],
          answer: 4,
          explanation: "전송 계층(Transport Layer)은 양 끝단의 사용자들이 신뢰성 있는 데이터를 주고받을 수 있게 해주는 역할을 합니다 (TCP, UDP)."
        },
        {
          id: 2,
          type: "short",
          score: 5,
          origin: "3장 TCP 연결 수립",
          text: "TCP 통신에서 클라이언트와 서버 간의 논리적 접속을 수립하기 위해 3번의 패킷 교환을 수행하는 절차의 명칭을 쓰시오.",
          placeholder: "절차 명칭 (한글 또는 영문)",
          answers: [
            "3-way handshake",
            "3-Way Handshake",
            "3웨이 핸드셰이크",
            "3-way 핸드셰이크",
            "3방향 핸드셰이크",
            "쓰리웨이 핸드셰이크"
          ],
          explanation: "TCP는 연결 수립 시 SYN, SYN-ACK, ACK 패킷을 교환하는 3-Way Handshake 방식을 사용합니다."
        }
      ]
    }
  ]
};
