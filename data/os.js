// ========================================================
// 💻 [DATA MODULE] 운영체제 (Operating System)
// 1장~7장 전범위 완벽 개념 총정리 & 7주차 교수님 출제스포 22문항 모의고사
// ========================================================
window.CONCEPT_DATABASE = window.CONCEPT_DATABASE || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};

// 1. 운영체제 개념 총정리 (1장~7장 백과사전급 치트시트)
window.CONCEPT_DATABASE.os = {
  id: "os",
  title: "💻 운영체제 1~7장 전범위 핵심 총정리 & 시험 오픈북 치트시트",
  filterChips: [
    { id: "all", label: "전체보기" },
    { id: "os-cheat", label: "⚡ 1초 정답 치트키 (26선)", class: "amber-chip" },
    { id: "os-sched", label: "📊 스케줄링 공식 & 간트 차트", class: "danger-chip" },
    { id: "os-ch1", label: "1장: 개요·듀얼모드·폰노이만" },
    { id: "os-ch2", label: "2장: 프로세스 상태전이도·PCB·문맥교환" },
    { id: "os-ch3", label: "3장: fork()·계층·IPC 2대모델" },
    { id: "os-ch4", label: "4장: 파이프·공유메모리·소켓·RPC (5주차)" },
    { id: "os-ch5-6", label: "5·6장: 스레드·자원구조·암달의법칙" },
    { id: "os-ch7", label: "7장: CPU 스케줄링 4대 알고리즘" }
  ],
  html: `
    <!-- SECTION: 1초 정답 치트키 26선 -->
    <section id="os-cheat" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title">
          <span>⚡ 운영체제 1초 정답 치트키 (교수님 강조 &amp; 시험 빈출 26선)</span>
        </div>
        <span style="font-size: 11.5px; opacity: 0.9;">문제 확인 즉시 작성할 단답형 핵심 키워드</span>
      </div>

      <div class="qa-grid">
        <div class="qa-card" data-tags="fork 리턴값 부모 자식 pid 0">
          <div class="qa-q"><span class="q-icon">Q1</span><span>fork() 호출 성공 시 부모와 자식 프로세스가 받는 반환값은?</span></div>
          <div class="qa-a"><span class="ans-target">부모: 생성된 자식 PID (>0) / 자식: 0 (실패 시 -1)</span><button class="copy-btn" onclick="copyText('부모: 자식 PID, 자식: 0')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 부모는 자식 제어를 위해 PID를 전달받고, 자식은 본인이 생성되었음을 알기 위해 0을 받음</div>
        </div>

        <div class="qa-card" data-tags="문맥 교환 context switch pcb 디스패처">
          <div class="qa-q"><span class="q-icon">Q2</span><span>CPU가 한 프로세스에서 다른 프로세스로 전환할 때 발생하는 오버헤드와 전담 모듈은?</span></div>
          <div class="qa-a"><span class="ans-target">문맥 교환 (Context Switch) / 디스패처 (Dispatcher)</span><button class="copy-btn" onclick="copyText('문맥 교환, 디스패처')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 디스패치 지연시간(Dispatch Latency)은 기존 프로세스를 중지하고 새 프로세스를 실행할 때까지 걸리는 시간</div>
        </div>

        <div class="qa-card" data-tags="호위 효과 convoy effect fcfs 똥차 긴 작업">
          <div class="qa-q"><span class="q-icon">Q3</span><span>FCFS 스케줄링에서 긴 프로세스 뒤에 짧은 프로세스들이 갇혀 대기하는 현상은?</span></div>
          <div class="qa-a"><span class="ans-target">호위 효과 (Convoy Effect)</span><button class="copy-btn" onclick="copyText('호위 효과 (Convoy Effect)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 교수님 비유: 고속도로에서 앞선 똥차 1대 때문에 뒤에 모든 스포츠카가 서행하는 비효율 현상</div>
        </div>

        <div class="qa-card" data-tags="기아 현상 starvation sjf 에이징 aging">
          <div class="qa-q"><span class="q-icon">Q4</span><span>SJF 스케줄링의 치명적 단점인 기아 현상(Starvation)을 해결하는 기법은?</span></div>
          <div class="qa-a"><span class="ans-target">에이징 (Aging, 나이 먹이기)</span><button class="copy-btn" onclick="copyText('에이징 (Aging)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 레디 큐에서 오랫동안 대기하는 프로세스의 우선순위를 점진적으로 증가시키는 해결책</div>
        </div>

        <div class="qa-card" data-tags="듀얼 모드 사용자 모드 커널 모드 mode bit 0 1">
          <div class="qa-q"><span class="q-icon">Q5</span><span>하드웨어 보호를 위한 운영체제 2가지 모드와 Mode Bit의 값은?</span></div>
          <div class="qa-a"><span class="ans-target">사용자 모드 (Mode Bit = 1) & 커널 모드 (Mode Bit = 0)</span><button class="copy-btn" onclick="copyText('사용자 모드(1), 커널 모드(0)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 타이머 설정, 인터럽트 제어, 입출력 직접 접근 등의 특권 명령은 커널 모드(0)에서만 실행 가능</div>
        </div>

        <div class="qa-card" data-tags="라운드 로빈 타임 퀀텀 time quantum 트레이드오프">
          <div class="qa-q"><span class="q-icon">Q6</span><span>Round Robin에서 타임 퀀텀(q)이 너무 작을 때와 너무 클 때의 문제점은?</span></div>
          <div class="qa-a"><span class="ans-target">너무 작으면: 문맥 교환 오버헤드 폭증 / 너무 크면: FCFS와 동일해짐</span><button class="copy-btn" onclick="copyText('너무 작으면 문맥교환 폭증, 너무 크면 FCFS화')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 일반적으로 10~100ms로 설정하며, CPU 버스트의 약 80%가 퀀텀보다 짧아야 최적</div>
        </div>

        <div class="qa-card" data-tags="스레드 자원 공유 code data heap stack register pc">
          <div class="qa-q"><span class="q-icon">Q7</span><span>동일 프로세스 내 스레드들이 공유하는 자원과 개별 소유하는 자원은?</span></div>
          <div class="qa-a"><span class="ans-target">공유: Code, Data, Heap, 열린 파일 / 개별 독립 소유: Stack, Register, PC</span><button class="copy-btn" onclick="copyText('공유: Code, Data, Heap / 독립: Stack, Register, PC')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 스레드는 프로세스보다 생성 및 문맥 교환 비용이 훨씬 저렴하여 경제적임</div>
        </div>

        <div class="qa-card" data-tags="ipc 2대 모델 공유 메모리 메시지 패싱 속도">
          <div class="qa-q"><span class="q-icon">Q8</span><span>IPC의 2대 대표 모델과 속도 비교는?</span></div>
          <div class="qa-a"><span class="ans-target">공유 메모리(Shared Memory) vs 메시지 패싱(Message Passing) (공유 메모리가 더 빠름)</span><button class="copy-btn" onclick="copyText('공유 메모리 vs 메시지 패싱')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 공유 메모리는 커널 개입 없이 직접 메모리 접근, 메시지 패싱은 커널 시스템콜(send/receive) 개입</div>
        </div>

        <div class="qa-card" data-tags="익명 파이프 ordinary pipe 단방향 fd 0 1">
          <div class="qa-q"><span class="q-icon">Q9</span><span>UNIX/Linux 익명 파이프(Ordinary Pipe)의 통신 방향과 디스크립터 역할은?</span></div>
          <div class="qa-a"><span class="ans-target">단방향 (Unidirectional) / fd[0] = 읽기 전용, fd[1] = 쓰기 전용</span><button class="copy-btn" onclick="copyText('단방향, fd[0] 읽기, fd[1] 쓰기')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 양방향 통신을 구현하려면 2개의 파이프가 필수적임</div>
        </div>

        <div class="qa-card" data-tags="좀비 프로세스 고아 프로세스 wait exit init systemd">
          <div class="qa-q"><span class="q-icon">Q10</span><span>자식이 종료되었으나 부모가 wait()하지 않은 상태와, 부모가 먼저 종료된 상태는?</span></div>
          <div class="qa-a"><span class="ans-target">전자: 좀비 프로세스 (Zombie) / 후자: 고아 프로세스 (Orphan)</span><button class="copy-btn" onclick="copyText('좀비 프로세스, 고아 프로세스')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 고아 프로세스는 init(PID 1) 또는 systemd가 양부모로 입양하여 wait()를 대신 호출해 정리함</div>
        </div>

        <div class="qa-card" data-tags="선점 비선점 스케줄링 preemptive nonpreemptive">
          <div class="qa-q"><span class="q-icon">Q11</span><span>실행 중인 프로세스를 강제로 중단시키고 CPU를 뺏어올 수 있는 스케줄링 방식은?</span></div>
          <div class="qa-a"><span class="ans-target">선점형 스케줄링 (Preemptive Scheduling)</span><button class="copy-btn" onclick="copyText('선점형 스케줄링 (Preemptive)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 비선점형: FCFS, SJF(기본). 선점형: Round Robin, SRTF(선점형 SJF), 우선순위 선점형</div>
        </div>

        <div class="qa-card" data-tags="최적 스케줄링 최소 평균 대기시간 sjf 지수평균">
          <div class="qa-q"><span class="q-icon">Q12</span><span>주어진 프로세스 집합에 대해 항상 최소의 평균 대기 시간(Minimum AWT)을 보장하는 최적 알고리즘은?</span></div>
          <div class="qa-a"><span class="ans-target">SJF (Shortest-Job-First, 최단 작업 우선)</span><button class="copy-btn" onclick="copyText('SJF (Shortest Job First)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 실제 환경에서는 다음 CPU 버스트를 미리 알 수 없어 지수 평균(Exponential Averaging)으로 예측</div>
        </div>

        <div class="qa-card" data-tags="부트스트랩 bootstrap rom bios 로딩">
          <div class="qa-q"><span class="q-icon">Q13</span><span>컴퓨터 전원을 켰을 때 가장 먼저 실행되어 운영체제 커널을 메모리에 로딩하는 프로그램은?</span></div>
          <div class="qa-a"><span class="ans-target">부트스트랩 프로그램 (Bootstrap Program / Bootloader)</span><button class="copy-btn" onclick="copyText('부트스트랩 프로그램 (Bootstrap)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* ROM 또는 EEPROM(BIOS/UEFI)에 저장되어 하드웨어 자가진단(POST) 후 커널을 적재함</div>
        </div>

        <div class="qa-card" data-tags="폰노이만 구조 메모리 순차처리 저장">
          <div class="qa-q"><span class="q-icon">Q14</span><span>명령어와 데이터를 메모리에 함께 저장하고 CPU가 이를 순차적으로 인출·실행하는 현대 컴퓨터 구조는?</span></div>
          <div class="qa-a"><span class="ans-target">폰 노이만 구조 (Von Neumann Architecture, 내장 프로그램 방식)</span><button class="copy-btn" onclick="copyText('폰 노이만 구조')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 프로그램 실행이란 하드디스크의 프로그램 코드가 메인 메모리로 올라와 프로세스가 되는 것을 의미</div>
        </div>

        <div class="qa-card" data-tags="프로세스 5대 상태 전이 new ready running waiting terminated diagram of process state">
          <div class="qa-q"><span class="q-icon">Q15</span><span>프로세스 상태 전이도(Diagram of Process State)의 5대 상태 명칭은?</span></div>
          <div class="qa-a"><span class="ans-target">new(생성), ready(준비), running(실행), waiting(대기), terminated(종료)</span><button class="copy-btn" onclick="copyText('new, ready, running, waiting, terminated')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* I/O 완료 시 waiting에서 곧바로 running으로 가지 않고 반드시 ready(준비 큐)로 전이됨!</div>
        </div>

        <div class="qa-card" data-tags="exec 시스템콜 껍데기 재사용 코드 교체">
          <div class="qa-q"><span class="q-icon">Q16</span><span>기존 프로세스의 뼈대(PID, 부모관계)는 유지한 채 코드와 데이터 영역만 새로운 프로그램으로 덮어쓰는 함수는?</span></div>
          <div class="qa-a"><span class="ans-target">exec() 시스템 콜 계열</span><button class="copy-btn" onclick="copyText('exec() 시스템 콜')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 프로세스를 새로 생성하고 종료하는 불필요한 PCB 할당 오버헤드를 줄여 효율적 재사용 가능</div>
        </div>

        <div class="qa-card" data-tags="멀티스레딩 3대 모델 일대일 다대일 다대다 리눅스 윈도우">
          <div class="qa-q"><span class="q-icon">Q17</span><span>현대 운영체제(Linux, Windows)가 채택한 표준 멀티스레딩 모델과 장점은?</span></div>
          <div class="qa-a"><span class="ans-target">일대일 모델 (One-to-One Model) / 우수한 동시성과 병렬 실행</span><button class="copy-btn" onclick="copyText('일대일 모델 (One-to-One)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 사용자 스레드가 블록되어도 다른 스레드가 중단되지 않고 멀티코어에서 동시 실행 가능</div>
        </div>

        <div class="qa-card" data-tags="동시성 병렬성 concurrency parallelism 차이">
          <div class="qa-q"><span class="q-icon">Q18</span><span>단일 코어에서 시분할로 교대 실행되는 개념과, 멀티 코어에서 물리적으로 동시 실행되는 개념은?</span></div>
          <div class="qa-a"><span class="ans-target">동시성 (Concurrency) vs 병렬성 (Parallelism)</span><button class="copy-btn" onclick="copyText('동시성(Concurrency) vs 병렬성(Parallelism)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* Concurrency는 논리적 동시 진행, Parallelism은 물리적(하드웨어 코어) 동시 진행</div>
        </div>

        <div class="qa-card" data-tags="스케줄링 5대 평가 기준 utilization throughput turnaround waiting response">
          <div class="qa-q"><span class="q-icon">Q19</span><span>CPU 스케줄링 5대 평가 지표 중 '최대화(Max)'해야 하는 2가지는?</span></div>
          <div class="qa-a"><span class="ans-target">CPU 이용률 (CPU Utilization) & 처리량 (Throughput)</span><button class="copy-btn" onclick="copyText('CPU 이용률, 처리량')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 최소화(Min)해야 하는 3가지: 반환 시간, 대기 시간, 응답 시간</div>
        </div>

        <div class="qa-card" data-tags="소켓 socket endpoint ip port 통신 종단점">
          <div class="qa-q"><span class="q-icon">Q20</span><span>네트워크 상에서 서로 다른 컴퓨터 간 통신의 종단점(Endpoint)으로 IP 주소와 포트 번호의 결합체는?</span></div>
          <div class="qa-a"><span class="ans-target">소켓 (Socket)</span><button class="copy-btn" onclick="copyText('소켓 (Socket)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 클라이언트-서버 구조에서 표준 IPC 통신 수단으로 사용됨</div>
        </div>

        <div class="qa-card" data-tags="프로세스 상태 전이 화살표 admitted scheduler dispatch interrupt io or event wait completion exit">
          <div class="qa-q"><span class="q-icon">Q21</span><span>Diagram of Process State의 6대 상태 전이 화살표 영문명은?</span></div>
          <div class="qa-a"><span class="ans-target">admitted / scheduler dispatch / interrupt / I/O or event wait / I/O or event completion / exit</span><button class="copy-btn" onclick="copyText('admitted, scheduler dispatch, interrupt, I/O or event wait, I/O or event completion, exit')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* Ready→Running은 scheduler dispatch, Running→Ready는 interrupt, Running→Waiting은 I/O or event wait</div>
        </div>

        <div class="qa-card" data-tags="posix 공유메모리 segmentation fault 세그멘테이션 폴트 consumer 포인터 초과">
          <div class="qa-q"><span class="q-icon">Q22</span><span>[5주차 교수님 강조] POSIX 공유 메모리 실습에서 Consumer가 데이터를 다 읽은 후 계속 읽을 때 발생하는 오류와 원인은?</span></div>
          <div class="qa-a"><span class="ans-target">Segmentation fault (매핑되지 않은 유효하지 않은 주소 접근)</span><button class="copy-btn" onclick="copyText('Segmentation fault (매핑되지 않은 유효하지 않은 메모리 주소 접근)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 버퍼 데이터 소진 후 포인터를 넘기면 매핑되지 않은 메모리에 접근하여 커널이 SIGSEGV 발송</div>
        </div>

        <div class="qa-card" data-tags="rpc 원격 프로시저 호출 마셜링 marshalling 매개변수 패킷 포장">
          <div class="qa-q"><span class="q-icon">Q23</span><span>[5주차 단답형 1순위] RPC에서 함수 파라미터들을 네트워크 전송용 표준 바이트 패킷으로 포장(직렬화)하는 과정은?</span></div>
          <div class="qa-a"><span class="ans-target">마셜링 (Marshalling)</span><button class="copy-btn" onclick="copyText('마셜링 (Marshalling)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 클라이언트 스텁이 마셜링하여 전송하고, 서버 스텁은 언마셜링(Unmarshalling)하여 실행</div>
        </div>

        <div class="qa-card" data-tags="암달의 법칙 amdahl speedup 직렬 비율 25 코어 2개 4개 계산">
          <div class="qa-q"><span class="q-icon">Q24</span><span>[5주차 교수님 수치] 암달의 법칙에서 직렬(순차) 비율 S = 0.25일 때 2코어와 4코어의 속도 향상은?</span></div>
          <div class="qa-a"><span class="ans-target">2코어: 1.6배 / 4코어: 약 2.28배 (직렬 50%이면 최대 2배 한계)</span><button class="copy-btn" onclick="copyText('2코어: 1.6배, 4코어: 2.28배')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 공식: 1 / (S + (1-S)/N) 적용. 코어를 무한히 늘려도 1/S로 수렴하여 한계 발생</div>
        </div>

        <div class="qa-card" data-tags="소켓 클래스 tcp udp 등기 우편 socket datagramsocket multicast">
          <div class="qa-q"><span class="q-icon">Q25</span><span>[5주차 비유] Java 소켓 클래스 중 수신 확인(ACK)을 받는 '등기 우편' 같은 연결 지향형 클래스는?</span></div>
          <div class="qa-a"><span class="ans-target">Socket (TCP 연결 지향형) / (참고: DatagramSocket은 무작정 보내는 일반 우편)</span><button class="copy-btn" onclick="copyText('Socket (TCP 연결 지향형)')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* MulticastSocket은 특정 지정 그룹의 여러 호스트에게 동시 전송하는 소켓</div>
        </div>

        <div class="qa-card" data-tags="프로세스 스레드 차이 면접 기출 자원공유 오버헤드 세그폴트 crash">
          <div class="qa-q"><span class="q-icon">Q26</span><span>[5주차 면접 필수] 프로세스와 스레드의 결정적 차이 3가지는?</span></div>
          <div class="qa-a"><span class="ans-target">① 메모리(스레드는 Code/Data/Heap 공유) ② 오버헤드(스레드가 훨씬 가벼움) ③ 격리성(스레드는 하나 죽으면 프로세스 전체 사망)</span><button class="copy-btn" onclick="copyText('공유 구조, 생성/전환 오버헤드, 장애 격리성')">복사</button></div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">* 프로세스는 독립 주소 공간을 가져 서로 안전하지만, 스레드는 메모리를 공유하므로 한 스레드 오류 시 프로세스 종료</div>
        </div>
      </div>
    </section>

    <!-- SECTION: CPU 스케줄링 공식 & 간트 차트 작성법 -->
    <section id="os-sched" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>📊 CPU 스케줄링 계산 공식 &amp; 간트 차트 작성법 (교수님 50% 감점 경고 파트)</span>
        </div>
        <span style="font-size: 11.5px; opacity: 0.9;">"간트 차트 없으면 답 맞아도 50%만 인정합니다"</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-header">
          <div class="concept-card-title">📐 스케줄링 5대 핵심 평가 기준(Criteria) 및 계산 공식</div>
          <div>
            <span class="badge badge-danger">시험 100% 출제</span>
            <span class="badge badge-amber">공식 암기 필수</span>
          </div>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 190px;">평가 지표 (Metric)</th>
              <th>정의 및 핵심 계산 공식</th>
              <th style="width: 120px;">최적화 방향</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1) CPU 이용률<br>(CPU Utilization)</b></td>
              <td>전체 시간 중 CPU가 쉬지 않고(Idle 상태 없이) 실제 작업을 수행한 시간의 비율 (실제 시스템에서는 보통 40% ~ 90% 범위 유지)</td>
              <td><b style="color: var(--tag-green-ink);">최대화 (Max)</b></td>
            </tr>
            <tr>
              <td><b>2) 처리량<br>(Throughput)</b></td>
              <td>단위 시간당 실행을 완전히 완료(Terminated)한 프로세스의 개수 (긴 작업은 시간당 1개, 짧은 트랜잭션은 초당 수십 개)</td>
              <td><b style="color: var(--tag-green-ink);">최대화 (Max)</b></td>
            </tr>
            <tr>
              <td><b>3) 반환 시간<br>(Turnaround Time)</b></td>
              <td>프로세스가 준비 큐에 <b>도착한 시점부터 실행을 완전히 마치고 종료될 때까지 걸린 총 시간</b><br>
              <code>반환 시간 (TT) = 완료 시간 (Completion Time) - 도착 시간 (Arrival Time)</code><br>
              <code>반환 시간 (TT) = 대기 시간 (Waiting Time) + 총 실행 시간 (CPU Burst + I/O)</code></td>
              <td><b style="color: var(--tag-danger-ink);">최소화 (Min)</b></td>
            </tr>
            <tr>
              <td><b>4) 대기 시간<br>(Waiting Time)</b></td>
              <td>프로세스가 <b>준비 큐(Ready Queue)에서 CPU를 할당받기 위해 순수하게 기다린 시간들의 총합</b><br>
              <code>대기 시간 (WT) = 반환 시간 (Turnaround Time) - 실행 시간 (CPU Burst Time)</code><br>
              • 비선점형: <code>시작 시간 - 도착 시간</code><br>
              • 선점형(SRTF, RR): <code>(첫 시작 - 도착) + Σ(재실행 시작 시점 - 직전 선점 중단 시점)</code></td>
              <td><b style="color: var(--tag-danger-ink);">최소화 (Min)</b></td>
            </tr>
            <tr>
              <td><b>5) 응답 시간<br>(Response Time)</b></td>
              <td>대화형(시분할) 시스템에서 요청을 제출한 후 <b>첫 번째 응답(출력 시작)이 나올 때까지 걸리는 시간</b> (출력 장치 속도가 아닌 첫 반응 시작까지의 시간)</td>
              <td><b style="color: var(--tag-danger-ink);">최소화 (Min)</b></td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning" style="margin-top: 14px;">
          <div class="callout-title">🚨 교수님 시험 채점 가이드라인 (7주차 녹음 직전 언급 — 필독!)</div>
          1. <b>간트 차트(Gantt Chart) 그리기 필수</b>: 스케줄링 계산 문제 풀이 시 반드시 간트 차트 막대를 그리고, 각 프로세스 이름(<code>P1</code>, <code>P2</code>...)과 아래쪽 <b>경계 시각 눈금(0, 3, 6, 24 등)</b>을 정확히 기입해야 합니다.<br>
          2. <b>부분점수 정책</b>: "답만 맞고 간트 차트가 없으면 <b>50% 감점</b>합니다. 또한 서술형 문제(예: 기아 현상과 에이징)에서 별도 배점 기준이 없으면 두 항목이 반반(50%씩) 들어갑니다."<br>
          3. <b>도착 시간(Arrival Time) 함정 주의</b>: 문제에서 "모두 0초에 도착"인지, 각 프로세스마다 <b>도착 시간이 0, 1, 2, 3초로 다른지</b> 반드시 먼저 확인하고 도착 시간을 빼주어야 합니다!
        </div>

        <div class="concept-card-title" style="margin-top: 18px;">📈 다음 CPU 버스트 시간 예측 (지수 이동평균 공식 — Exponential Averaging)</div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          SJF(최단 작업 우선) 스케줄링에서는 다음 CPU 버스트의 정확한 길이를 미리 알 수 없으므로, 과거의 실제 버스트 측정 시간(<code>t<sub>n</sub></code>)과 이전 예측값(<code>τ<sub>n</sub></code>)의 지수 이동평균으로 다음 CPU 버스트(<code>τ<sub>n+1</sub></code>)를 추정합니다.
        </p>
        <div style="padding: 12px; background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: 6px; font-family: var(--font-mono); font-size: 15px; color: var(--accent); font-weight: 700;">
          τ<sub>n+1</sub> = α · t<sub>n</sub> + (1 - α) · τ<sub>n</sub> &nbsp;&nbsp;(단, 0 ≤ α ≤ 1)
        </div>
        <table class="concept-table" style="margin-top: 10px;">
          <thead>
            <tr>
              <th style="width: 140px;">기호 / 조건</th>
              <th>의미 및 가중치(<code>α</code>)에 따른 동작 특성</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b><code>t<sub>n</sub></code> (실제 측정치)</b></td>
              <td>가장 최근인 <code>n</code>번째에 실제로 CPU를 사용한 버스트 시간 (최근의 실제 역사)</td>
            </tr>
            <tr>
              <td><b><code>τ<sub>n</sub></code> (이전 예측치)</b></td>
              <td>과거 <code>n</code>번째 CPU 버스트에 대해 예측했었던 추정치 (과거의 누적 역사)</td>
            </tr>
            <tr>
              <td><b><code>α = 0</code> 일 때</b></td>
              <td><code>τ<sub>n+1</sub> = τ<sub>n</sub></code> → <b>최근의 실제 측정 기록(<code>t<sub>n</sub></code>)은 전혀 반영하지 않고</b>, 초기 예측값만 영구 유지함</td>
            </tr>
            <tr>
              <td><b><code>α = 1</code> 일 때</b></td>
              <td><code>τ<sub>n+1</sub> = t<sub>n</sub></code> → 과거 예측치는 모두 무시하고 <b>오직 가장 최근의 실제 CPU 버스트 시간(<code>t<sub>n</sub></code>)만 100% 반영</b>함</td>
            </tr>
            <tr>
              <td><b><code>α = 0.5</code> (표준)</b></td>
              <td>최근 실제 측정치와 과거 누적 예측치를 <b>동일한 비중(50% : 50%)</b>으로 반영함<br>
              • <b>계산 예제</b>: <code>α = 0.5, τ<sub>0</sub> = 10, t<sub>0</sub> = 6</code> 일 때 <code>τ<sub>1</sub> = (0.5 × 6) + (0.5 × 10) = 3 + 5 =</code> <b>8 ms</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION: 1장 운영체제 개요 & 컴퓨터 구조 -->
    <section id="os-ch1" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>🖥️ 1장: 운영체제 개요, 하드웨어 구조, 캐시·지역성 &amp; 듀얼 모드</span>
        </div>
        <span class="badge badge-blue">1장 교안 전수 반영</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-header">
          <div class="concept-card-title">1. 컴퓨터 하드웨어 구조: CPU · 코어 · 시스템 버스 · 명령어</div>
          <span class="badge badge-blue">기본 개념 &amp; 용어 구분</span>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 190px;">구분</th>
              <th>핵심 정의 및 시험 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>CPU vs 프로세서 vs 코어</b></td>
              <td>• <b>CPU (Central Processing Unit)</b>: 명령어를 인출(Fetch)·해석(Decode)·실행(Execute)하는 중앙처리장치<br>
              • <b>코어 (Core)</b>: CPU 칩 내부에서 실제로 명령어를 읽고 연산을 수행하는 기본 연산 유닛 (ALU + 제어장치 + 레지스터 세트)<br>
              • <b>멀티코어 프로세서 (Multicore Processor)</b>: 하나의 물리적 프로세서 칩(소켓) 안에 2개 이상의 코어를 집적한 구조 (듀얼/쿼드/옥타코어)</td>
            </tr>
            <tr>
              <td><b>다중 처리기 시스템<br>(Multiprocessor System)</b></td>
              <td>• <b>비대칭형 다중 처리 (Asymmetric Multiprocessing)</b>: 주종(Master-Slave) 관계. 마스터 프로세서가 OS를 실행하며 슬레이브 프로세서들에게 작업을 할당<br>
              • <b>대칭형 다중 처리 (SMP: Symmetric Multiprocessing)</b>: <b>현대 OS의 표준!</b> 모든 프로세서(코어)가 동등한 대등 관계로 각자 OS 루틴을 수행하며 메인 메모리와 I/O 버스를 공유 (단, 각 코어는 <b>독자적인 레지스터와 L1/L2 캐시</b> 보유)</td>
            </tr>
            <tr>
              <td><b>시스템 버스 3대장<br>(System Bus)</b></td>
              <td>CPU, 메인 메모리, I/O 장치 간에 정보를 전송하는 통로:<br>
              1) <b>데이터 버스 (Data Bus)</b>: CPU와 메모리/입출력 장치 사이에 실제 데이터와 명령어를 전달 (<b>양방향</b>)<br>
              2) <b>주소 버스 (Address Bus)</b>: CPU가 읽거나 쓸 메모리 번지(주소)나 I/O 포트 번호를 지정 (<b>단방향: CPU → 메모리/I/O</b>)<br>
              3) <b>제어 버스 (Control Bus)</b>: 읽기(Read)/쓰기(Write) 신호, 인터럽트 요청/승인, 클럭 등 제어 신호 전달 (<b>양방향</b>)</td>
            </tr>
            <tr>
              <td><b>기계어 명령어 구조<br>(Instruction Format)</b></td>
              <td>• <b>명령어 = 연산 부호(OPcode) + 피연산자(Operand, 데이터 또는 주소)</b><br>
              • <b style="color: var(--tag-danger-ink);">시험 공식</b>: 연산 부호(OPcode)가 <b><code>n</code> 비트</b>이면 최대 <b><code>2<sup>n</sup></code>개</b>의 서로 다른 연산(명령어 종류)을 표현 가능 (예: 4비트면 <code>2<sup>4</sup> = 16</code>개 연산, 8비트면 <code>2<sup>8</sup> = 256</code>개 연산)</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">2. 레지스터 분류 &amp; 메모리 계층 구조 · 캐시 지역성(Locality)</div>
          <span class="badge badge-amber">객관식·단답형 단골</span>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 190px;">레지스터 분류</th>
              <th>포함 레지스터 및 상세 역할</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>사용자 가시 레지스터<br>(User-Visible Registers)</b></td>
              <td>기계어나 어셈블리어 프로그래머가 직접 참조하여 데이터나 주소를 저장할 수 있는 레지스터 (범용 레지스터, 데이터 레지스터, 주소 레지스터: 인덱스/세그먼트/스택 포인터 SP)</td>
            </tr>
            <tr>
              <td><b>사용자 불가시 레지스터<br>(제어 및 상태 레지스터)</b></td>
              <td>CPU 제어 장치가 명령어 실행을 제어하고 OS가 시스템 상태를 관리하기 위해 사용하는 레지스터 (사용자 임의 수정 불가):<br>
              • <b>PC (Program Counter, 프로그램 카운터)</b>: <b>다음에 인출(Fetch)할 명령어의 메모리 주소</b> 저장<br>
              • <b>IR (Instruction Register, 명령어 레지스터)</b>: 방금 메모리에서 인출해 온 <b>현재 실행 중인 명령어</b> 저장<br>
              • <b>MAR (Memory Address Register)</b>: 읽거나 쓸 메모리 주소를 주소 버스로 내보내기 전 임시 저장<br>
              • <b>MBR / MDR (Memory Buffer Register)</b>: 메모리에서 읽혀진 데이터나 메모리에 쓸 데이터를 임시 저장<br>
              • <b>PSW (Program Status Word, 상태 레지스터)</b>: 연산 결과 플래그(조건 코드: 부호, 영, 캐리, 오버플로우) 및 인터럽트/모드 비트 저장</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box info" style="margin-top: 12px;">
          <div class="callout-title">📌 메모리 계층 구조와 캐시 메모리(Cache) · 참조의 지역성(Locality of Reference)</div>
          • <b>속도순 (빠름 → 느림)</b>: <b>레지스터(Register) → 캐시(Cache, SRAM) → 메인 메모리(DRAM) → 보조기억장치(SSD → HDD → 광디스크/자기테이프)</b> (위로 갈수록 속도가 빠르고 비트당 가격 비쌈, 용량 작음 / 메인 메모리까지는 휘발성, SSD 이하 비휘발성)<br>
          • <b>캐시 적중(Cache Hit) vs 캐시 실패(Cache Miss)</b>: CPU가 찾는 데이터가 캐시에 있으면 <b>Hit</b>(초고속 접근), 없으면 <b>Miss</b>(메인 메모리에서 해당 데이터를 포함한 블록/라인 단위로 캐시에 복사해 옴).<br>
          • <b style="color: var(--tag-danger-ink);">참조의 지역성(Locality) 2대 원리 (필수 구분!)</b>:<br>
          &nbsp;&nbsp;1) <b>시간적 지역성 (Temporal Locality)</b>: <b>최근에 참조된 메모리 주소(변수/명령어)가 가까운 미래에 다시 참조될 가능성이 높다</b>는 성질 (예: <code>for</code>, <code>while</code> <b>반복문 루프 제어 변수 <code>i</code></b>, 누적 합계 변수 <code>sum</code>).<br>
          &nbsp;&nbsp;2) <b>공간적 지역성 (Spatial Locality)</b>: <b>현재 참조된 메모리 주소와 인접한(가까운) 주소의 데이터가 곧이어 참조될 가능성이 높다</b>는 성질 (예: <b>배열 <code>arr[0], arr[1], arr[2]</code> 순차 접근</b>, 순차적 명령어 실행).<br>
          • <b>캐시 블록 크기 트레이드오프</b>: 블록 크기가 커지면 공간적 지역성 활용도는 높아지나, 지나치게 크면 캐시에 들어갈 블록 개수가 줄고 불필요한 데이터 전송 시간이 길어져 오히려 적중률이 떨어질 수 있음.
        </div>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">3. 컴퓨터 시스템의 발전 역사 &amp; 운영체제 형태 비교</div>
          <span class="badge badge-blue">역사적 흐름 정리</span>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 195px;">시스템 형태</th>
              <th>핵심 동작 원리 및 특징</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1) 에니악(ENIAC) vs<br>폰 노이만 구조</b></td>
              <td>• <b>하드와이어링(Hard-wiring, 에니악)</b>: 전선 플러그를 직접 꽂아 회로를 구성 (다른 계산을 하려면 배선을 새로 해야 함)<br>
              • <b>폰 노이만 구조 (Program-Stored, 프로그램 내장 방식)</b>: <b>프로그램(명령어)과 데이터를 모두 메인 메모리(RAM)에 함께 저장</b>하고 CPU가 순차적으로 인출하여 실행하는 현대 컴퓨터의 표준 구조</td>
            </tr>
            <tr>
              <td><b>2) 일괄 처리 시스템<br>(Batch Processing)</b></td>
              <td>사용자 상호작용 없이 유사한 작업(천공카드 등)을 한데 모아 한꺼번에 순차 처리. 작업 준비 시간 절약했으나 응답 시간이 매우 길고 I/O 동안 CPU가 유휴(Idle) 상태로 노는 단점 존재</td>
            </tr>
            <tr>
              <td><b>3) 다중 프로그래밍<br>(Multiprogramming)</b></td>
              <td>메모리에 여러 프로그램을 동시에 적재해 두고, 실행 중인 작업이 <b>I/O 대기에 들어가면 즉시 다른 작업으로 CPU를 전환</b>.<br>
              • 핵심 목표: <b>CPU 이용률(CPU Utilization) 극대화</b> (CPU가 절대 쉬지 않게 함)</td>
            </tr>
            <tr>
              <td><b>4) 시분할 시스템<br>(Time-Sharing / Multitasking)</b></td>
              <td>다중 프로그래밍의 논리적 확장. CPU 시간을 아주 짧은 시간 조각(<b>Time Slice / Time Quantum</b>)으로 나누어 여러 사용자의 작업을 빠르게 번갈아 실행.<br>
              • 핵심 목표: <b>사용자 응답 시간(Response Time) 최소화</b> 및 대화형(Interactive) 컴퓨팅 제공</td>
            </tr>
            <tr>
              <td><b>5) 분산·클라이언트/서버·<br>P2P·클라우드·가상화</b></td>
              <td>• <b>분산 시스템(Distributed)</b>: 물리적으로 분리된 이기종 컴퓨터들을 네트워크로 묶어 자원 공유 및 신뢰성/속도 향상<br>
              • <b>클라이언트-서버 vs P2P(Peer-to-Peer)</b>: 중앙 서버가 요청을 처리하는 구조 vs 모든 노드가 클라이언트이자 서버 역할을 동등하게 수행하는 구조<br>
              • <b>가상화(Virtualization)</b>: 단일 물리 하드웨어 위에 <b>VMM(Virtual Machine Monitor, 하이퍼바이저)</b>을 두어 여러 게스트 OS(가상머신)를 동시에 독립 실행</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">4. 커널 · 시스템 콜 · 인터럽트 · DMA · 듀얼 모드 (Dual-Mode Operation)</div>
          <span class="badge badge-danger">1장 핵심 출제 포인트</span>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 170px;">구분</th>
              <th>사용자 모드 (User Mode)</th>
              <th>커널 모드 (Kernel / Supervisor / Monitor Mode)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>하드웨어 Mode Bit</b></td>
              <td><b style="color: var(--accent); font-size: 15px;">1</b></td>
              <td><b style="color: var(--tag-danger-ink); font-size: 15px;">0</b></td>
            </tr>
            <tr>
              <td><b>실행 주체</b></td>
              <td>일반 사용자 응용 프로그램 (프로세스)</td>
              <td>운영체제의 핵심인 <b>커널 (Kernel: 메모리에 상주하는 OS 핵심 부분)</b></td>
            </tr>
            <tr>
              <td><b>특권 명령(Privileged)<br>실행 가능 여부</b></td>
              <td><b>절대 불가</b> (사용자 모드에서 특권 명령 실행 시도 시 하드웨어가 불법 명령으로 간주하여 OS로 Trap 발생)</td>
              <td><b>모든 명령어 및 특권 명령 실행 가능</b><br>(I/O 직접 제어, 타이머 설정, 인터럽트 활성/비활성화, 모드 비트 변경, 메모리 보호 레지스터 설정)</td>
            </tr>
            <tr>
              <td><b>모드 전환 흐름</b></td>
              <td colspan="2">사용자 프로그램 실행(Mode=1) → <b>시스템 콜(System Call) 또는 인터럽트 발생</b> → 하드웨어가 Mode Bit를 <b>1 → 0</b>으로 전환 후 커널 진입 → 커널 작업 완료 후 복귀 시 Mode Bit를 <b>0 → 1</b>로 복원</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning" style="margin-top: 12px;">
          <div class="callout-title">⚡ 인터럽트(Interrupt) vs 트랩(Trap) vs 시스템 콜 &amp; DMA 핵심 정리</div>
          • <b>하드웨어 인터럽트(Interrupt)</b>: 입출력 장치 컨트롤러나 타이머 등 하드웨어가 작업 완료/이벤트를 알리기 위해 시스템 버스를 통해 CPU에 보내는 비동기 신호.<br>
          &nbsp;&nbsp;→ CPU는 현재 명령어 실행을 마친 뒤 <b>현재 PC(프로그램 카운터)와 레지스터 상태를 저장</b>하고, <b>인터럽트 벡터(Interrupt Vector: 서비스 루틴 주소 배열)</b>를 참조하여 해당 <b>ISR(Interrupt Service Routine, 인터럽트 핸들러)</b>로 점프하여 처리함.<br>
          • <b>트랩(Trap / Exception, 소프트웨어 인터럽트)</b>: 0으로 나누기, 잘못된 메모리 접근 등 <b>오류(Exception)</b>나 사용자 프로그램의 <b>시스템 콜(System Call) 요청</b>에 의해 발생하는 소프트웨어적 인터럽트.<br>
          • <b>타이머(Timer)</b>: 특정 프로세스가 무한 루프에 빠져 CPU를 독점하는 것을 막기 위해 지정된 시간이 흐르면 <b>타이머 인터럽트</b>를 발생시켜 OS가 제어권을 회수하게 하는 하드웨어 보호 장치.<br>
          • <b>DMA (Direct Memory Access, 직접 메모리 접근)</b>: 고속 I/O 장치에서 대량 데이터를 전송할 때 CPU가 매 바이트마다 개입하는 오버헤드를 없애기 위해, <b>DMA 제어기가 CPU 개입 없이 디바이스 버퍼와 메인 메모리 간에 블록(Block) 단위로 데이터를 직접 전송</b>하고, <b>전체 블록 전송이 완료되었을 때만 CPU에 단 1번 인터럽트</b>를 보내는 방식!
        </div>
      </div>
    </section>

    <!-- SECTION: 2장 프로세스 개념 & PCB -->
    <section id="os-ch2" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>⚙️ 2장: 프로세스 상태 전이도(Diagram of Process State), 메모리 구조, PCB &amp; 문맥 교환</span>
        </div>
        <span class="badge badge-danger">시험 출제 확정 핵심 파트</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-header">
          <div class="concept-card-title">1. 프로그램 vs 프로세스 &amp; C 프로그램 메모리 5대 영역</div>
          <span class="badge badge-blue">메모리 레이아웃 &amp; 코드 매핑</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 10px;">
          • <b>프로그램(Program)</b>: 디스크에 저장된 실행 파일 형태의 명령어 리스트로, 아직 메모리에 올라오지 않은 <b>수동적 존재(Passive Entity)</b>.<br>
          • <b>프로세스(Process)</b>: 메모리에 적재되어 현재 실행 중인 프로그램으로, 다음 실행할 명령어를 가리키는 PC와 자원 집합을 가진 <b>능동적 존재(Active Entity)</b>. 즉, <b><code>프로세스 = 프로그램(메모리 주소 공간) + PCB</code></b>입니다.
        </p>
        <table class="concept-table">
          <thead><tr><th style="width: 190px;">영역 (Section)</th><th>저장 내용 및 특징</th><th style="width: 150px;">주소 위치 &amp; 크기</th></tr></thead>
          <tbody>
            <tr><td><b>텍스트 / 코드 (Text / Code)</b></td><td>CPU가 실행할 기계어 명령어 코드 (읽기 전용 Read-only)</td><td>가장 낮은 주소 (고정 크기)</td></tr>
            <tr><td><b>데이터 (Data)</b></td><td><b>초기화된(Initialized) 전역 변수</b> 및 정적(<code>static</code>) 변수 (프로그램 시작 시 생성, 종료 시 소멸)</td><td>Text 위 (고정 크기)</td></tr>
            <tr><td><b>BSS (Block Started by Symbol)</b></td><td><b>초기화되지 않은(Uninitialized) 전역 변수</b> 및 <code>static</code> 변수 (런타임 시작 시 0으로 자동 초기화)</td><td>Data 위 (고정 크기)</td></tr>
            <tr><td><b>힙 (Heap)</b></td><td>프로그래머가 런타임 중에 <code>malloc()</code>, <code>calloc()</code>, <code>new</code>로 <b>동적 할당</b>하는 메모리 (<code>free()</code>로 해제)</td><td>동적 확장 (<b>낮은 주소 → 높은 주소 ↑</b>)</td></tr>
            <tr><td><b>스택 (Stack)</b></td><td>함수 호출 시 생성되는 임시 데이터: <b>지역 변수(Local Variables), 함수 매개변수(Parameters), 복귀 주소(Return Address)</b></td><td>가장 높은 주소에서 동적 확장 (<b>높은 주소 → 낮은 주소 ↓</b>)</td></tr>
          </tbody>
        </table>

        <div style="margin-top: 12px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color);">
          <div style="font-weight: 700; color: var(--accent); margin-bottom: 6px;">💻 [교안 실습 코드] C 프로그램 변수별 메모리 적재 영역 완벽 매핑</div>
          <pre class="code-block" style="margin: 0;">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int x;               // [BSS 영역] 초기화되지 않은 전역 변수
int y = 15;          // [Data 영역] 초기화된 전역 변수

int main(int argc, char *argv[]) { // argc, argv: [Stack 영역] 함수 매개변수
    int *values;     // values 포인터 변수 자체는 [Stack 영역]의 지역 변수
    int i;           // i: [Stack 영역]의 지역 변수

    values = (int *)malloc(sizeof(int) * 5); // 할당된 20B 공간 자체는 [Heap 영역]

    for (i = 0; i &lt; 5; i++)
        values[i] = i; // 기계어 실행 코드는 [Text(Code) 영역]에 저장됨

    return 0;
}</pre>
        </div>

        <div class="concept-card-header" style="margin-top: 24px;">
          <div class="concept-card-title">2. 프로세스 5대 상태 전이도 (Diagram of Process State)</div>
          <div>
            <span class="badge badge-danger">교수님 시험 출제 예고</span>
            <span class="badge badge-amber">빈칸·서술형 1순위</span>
          </div>
        </div>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          프로세스는 생성부터 종료까지 실행되면서 상태(State)가 변화합니다. 시험에 출제되는 <b>Diagram of Process State</b>의 <b>5개 상태(타원)</b>와 <b>6개 상태 전이(화살표)</b>의 정확한 영문/한글 명칭과 전이 원인을 완벽히 암기해야 합니다.
        </p>

        <!-- 강의 원본 슬라이드 이미지 + 한/영 번호 매핑 고해상도 벡터 다이어그램 -->
        <div class="state-diagram-showcase">
          <div class="state-diagram-box">
            <div class="state-diagram-box-header">
              <span>📌 강의 교안 원본 슬라이드 (Diagram of Process State)</span>
              <span class="badge badge-blue">원본 이미지</span>
            </div>
            <img src="assets/process-state-diagram.png" alt="Diagram of Process State 강의 슬라이드" class="state-diagram-img">
            <div style="font-size: 13px; color: var(--ink-muted); margin-top: 8px; text-align: center;">
              * 슬라이드 내 5대 상태(new, ready, running, waiting, terminated) 및 6대 화살표 라벨 영문 스펠링 확인
            </div>
          </div>

          <div class="state-diagram-box">
            <div class="state-diagram-box-header">
              <span>🎯 시험 빈칸 완벽 대비 한·영 번호 매핑 도해 (①~⑥)</span>
              <span class="badge badge-amber">번호별 전이 추적</span>
            </div>
            <div class="state-svg-wrapper">
              <svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of Process State Annotated">
                <defs>
                  <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#1d4ed8"/>
                  </marker>
                  <marker id="arrowHeadRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                  <marker id="arrowHeadGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#059669"/>
                  </marker>
                </defs>

                <!-- Background Card -->
                <rect x="4" y="4" width="672" height="352" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

                <!-- 1. new -> ready (admitted) -->
                <path d="M 148 78 Q 210 92 225 144" fill="none" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#arrowHead)"/>
                <text x="195" y="75" font-family="Pretendard, sans-serif" font-size="13.5" font-weight="800" fill="#0f172a" text-anchor="middle">① admitted</text>
                <text x="195" y="92" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="600" fill="#475569" text-anchor="middle">(승인 / Ready 큐 진입)</text>

                <!-- 3. running -> ready (interrupt) -->
                <path d="M 412 148 Q 340 94 268 148" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#arrowHeadRed)"/>
                <text x="340" y="92" font-family="Pretendard, sans-serif" font-size="13.5" font-weight="800" fill="#dc2626" text-anchor="middle">③ interrupt</text>
                <text x="340" y="109" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="600" fill="#475569" text-anchor="middle">(타임아웃 / CPU 강제 선점)</text>

                <!-- 2. ready -> running (scheduler dispatch) -->
                <path d="M 275 190 Q 340 232 405 190" fill="none" stroke="#059669" stroke-width="2.4" marker-end="url(#arrowHeadGreen)"/>
                <text x="340" y="226" font-family="Pretendard, sans-serif" font-size="13.5" font-weight="800" fill="#047857" text-anchor="middle">② scheduler dispatch</text>
                <text x="340" y="243" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="600" fill="#475569" text-anchor="middle">(스케줄러 선택 &amp; 디스패처 CPU 할당)</text>

                <!-- 4. running -> waiting (I/O or event wait) -->
                <path d="M 442 204 Q 434 275 398 298" fill="none" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#arrowHead)"/>
                <text x="515" y="268" font-family="Pretendard, sans-serif" font-size="13.5" font-weight="800" fill="#0f172a" text-anchor="middle">④ I/O or event wait</text>
                <text x="515" y="285" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="600" fill="#475569" text-anchor="middle">(I/O 요청·이벤트 대기 / CPU 반납)</text>

                <!-- 5. waiting -> ready (I/O or event completion) -->
                <path d="M 282 298 Q 244 275 236 206" fill="none" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#arrowHead)"/>
                <text x="148" y="268" font-family="Pretendard, sans-serif" font-size="13.5" font-weight="800" fill="#0f172a" text-anchor="middle">⑤ I/O or event completion</text>
                <text x="148" y="285" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="600" fill="#475569" text-anchor="middle">(I/O·이벤트 완료 → Ready 복귀!)</text>

                <!-- 6. running -> terminated (exit) -->
                <path d="M 456 146 Q 480 92 530 78" fill="none" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#arrowHead)"/>
                <text x="488" y="75" font-family="Pretendard, sans-serif" font-size="13.5" font-weight="800" fill="#0f172a" text-anchor="middle">⑥ exit</text>
                <text x="488" y="92" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="600" fill="#475569" text-anchor="middle">(실행 종료)</text>

                <!-- State Ovals -->
                <!-- new -->
                <ellipse cx="90" cy="72" rx="58" ry="30" fill="#bae6fd" stroke="#0284c7" stroke-width="2.2"/>
                <text x="90" y="69" font-family="Pretendard, sans-serif" font-size="15.5" font-weight="800" fill="#0f172a" text-anchor="middle">new</text>
                <text x="90" y="86" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1" text-anchor="middle">(생성)</text>

                <!-- ready -->
                <ellipse cx="235" cy="174" rx="58" ry="30" fill="#bae6fd" stroke="#0284c7" stroke-width="2.2"/>
                <text x="235" y="171" font-family="Pretendard, sans-serif" font-size="15.5" font-weight="800" fill="#0f172a" text-anchor="middle">ready</text>
                <text x="235" y="188" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1" text-anchor="middle">(준비 큐)</text>

                <!-- running -->
                <ellipse cx="445" cy="174" rx="58" ry="30" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.6"/>
                <text x="445" y="171" font-family="Pretendard, sans-serif" font-size="15.5" font-weight="800" fill="#0f172a" text-anchor="middle">running</text>
                <text x="445" y="188" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">(CPU 실행)</text>

                <!-- waiting -->
                <ellipse cx="340" cy="306" rx="60" ry="30" fill="#bae6fd" stroke="#0284c7" stroke-width="2.2"/>
                <text x="340" y="303" font-family="Pretendard, sans-serif" font-size="15.5" font-weight="800" fill="#0f172a" text-anchor="middle">waiting</text>
                <text x="340" y="320" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1" text-anchor="middle">(대기/Blocked)</text>

                <!-- terminated -->
                <ellipse cx="590" cy="72" rx="60" ry="30" fill="#bae6fd" stroke="#0284c7" stroke-width="2.2"/>
                <text x="590" y="69" font-family="Pretendard, sans-serif" font-size="15.5" font-weight="800" fill="#0f172a" text-anchor="middle">terminated</text>
                <text x="590" y="86" font-family="Pretendard, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1" text-anchor="middle">(종료)</text>
              </svg>
            </div>
            <div style="font-size: 13px; color: var(--ink-muted); margin-top: 8px; text-align: center;">
              * 다크/라이트 모드 및 인쇄 시에도 선명하게 보이는 번호 매핑 다이어그램
            </div>
          </div>
        </div>

        <!-- 표 2-1: 프로세스 5대 상태 상세 정리표 -->
        <div style="font-weight: 800; font-size: 16px; color: var(--ink); margin: 16px 0 8px 0;">
          📋 [표 1] 프로세스 5대 활성 상태 (5 Process States — 동그라미 빈칸 &amp; 개념 정리)
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 150px;">상태 (영문)</th>
              <th style="width: 110px;">한글 명칭</th>
              <th style="width: 140px;">머무는 곳 / 큐</th>
              <th style="width: 100px;">CPU 점유</th>
              <th>상태 정의 및 시험 핵심 특징</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">new</b></td>
              <td><b>생성 상태</b></td>
              <td>외부 디스크 → 메모리 진입 중</td>
              <td>X</td>
              <td>프로세스가 막 생성되고 있는 상태. 커널에 <b>PCB(Process Control Block)</b>가 할당되나 아직 메인 메모리 진입 승인(<code>admitted</code>)을 받기 전 단계</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">ready</b></td>
              <td><b>준비 상태</b></td>
              <td><b>Ready Queue (준비 큐)</b></td>
              <td>X (대기)</td>
              <td>실행에 필요한 모든 메모리와 자원을 할당받고 <b>오직 CPU(프로세서) 할당만을 기다리는 상태</b>. 스케줄러에 의해 선택되면 즉시 실행 가능</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">running</b></td>
              <td><b>실행 상태</b></td>
              <td><b>CPU 코어 내부</b></td>
              <td><b>O (점유 중)</b></td>
              <td>디스패처에 의해 실제로 CPU 제어권을 부여받아 <b>명령어(Instruction)를 실행 중인 상태</b> (단일 코어 기준 한 순간에 1개만 존재)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">waiting</b></td>
              <td><b>대기 상태</b><br><span style="font-size:13px; color:var(--ink-muted);">(Blocked / 봉쇄)</span></td>
              <td><b>Waiting / Device Queue (대기 큐)</b></td>
              <td>X (실행 불가)</td>
              <td>I/O 입출력 완료나 자식 프로세스 종료(<code>wait()</code>), 이벤트 신호를 기다리는 상태. <b>당장 CPU를 주더라도 이벤트가 끝나기 전까진 실행 불가</b></td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">terminated</b></td>
              <td><b>종료 상태</b></td>
              <td>자원 회수 단계</td>
              <td>X</td>
              <td>프로세스가 실행을 완전히 마쳤거나(<code>exit</code>) 강제 중단되어 <b>메모리와 할당 자원을 OS에 반납하는 상태</b> (부모가 <code>wait()</code> 전까지 PCB가 남으면 좀비 프로세스)</td>
            </tr>
          </tbody>
        </table>

        <!-- 표 2-2: 프로세스 6대 상태 전이 상세 정리표 -->
        <div style="font-weight: 800; font-size: 16px; color: var(--ink); margin: 18px 0 8px 0;">
          🔄 [표 2] 프로세스 6대 상태 전이 (6 State Transitions — 화살표 빈칸 &amp; 서술형 완벽 대비표)
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 165px;">전이 구간 (출발 → 도착)</th>
              <th style="width: 200px;">슬라이드 영문 라벨 (필수 암기!)</th>
              <th style="width: 130px;">한글 의미</th>
              <th>발생 원인 · 담당 모듈 · 시험 출제 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>① new → ready</b></td>
              <td><b style="color: var(--accent);">admitted</b></td>
              <td><b>승인 (진입 허가)</b></td>
              <td>운영체제(장기 스케줄러)가 프로세스 생성을 완료하고 메인 메모리를 할당하여 <b>준비 큐(Ready Queue)</b>에 진입시킴</td>
            </tr>
            <tr>
              <td><b>② ready → running</b></td>
              <td><b style="color: var(--tag-green-ink);">scheduler dispatch</b></td>
              <td><b>스케줄러 디스패치</b></td>
              <td><b>CPU 스케줄러(단기 스케줄러)</b>가 준비 큐에서 프로세스를 선택하고, <b>디스패처(Dispatcher)</b>가 문맥 교환을 통해 실제 CPU 제어권을 할당함</td>
            </tr>
            <tr>
              <td><b>③ running → ready</b></td>
              <td><b style="color: var(--tag-danger-ink);">interrupt</b></td>
              <td><b>인터럽트 (타임아웃)</b></td>
              <td>할당된 <b>타임 퀀텀(Time Quantum)이 만료(Timer Interrupt)</b>되거나 더 높은 우선순위 프로세스가 도착하여 <b>CPU를 강제로 빼앗김(선점)</b>. I/O 대기가 아니므로 곧장 <b>ready</b>로 이동!</td>
            </tr>
            <tr>
              <td><b>④ running → waiting</b></td>
              <td><b style="color: var(--accent);">I/O or event wait</b></td>
              <td><b>입출력·이벤트 대기</b></td>
              <td>실행 중 디스크 읽기/쓰기 등 <b>I/O 시스템 콜을 요청</b>하거나 <code>wait()</code> 등 특정 이벤트를 기다려야 해서 <b>프로세스가 스스로 CPU를 반납</b>하고 대기 큐로 이동함</td>
            </tr>
            <tr>
              <td><b>⑤ waiting → ready</b></td>
              <td><b style="color: var(--accent);">I/O or event completion</b></td>
              <td><b>입출력·이벤트 완료</b></td>
              <td>요청했던 하드웨어 I/O 작업이 끝나 인터럽트가 발생하거나 이벤트가 해결됨.<br><b style="color: var(--tag-danger-ink);">※ 주의: Running으로 바로 가지 않고 반드시 Ready(준비 큐)로 복귀함!</b></td>
            </tr>
            <tr>
              <td><b>⑥ running → terminated</b></td>
              <td><b style="color: var(--accent);">exit</b></td>
              <td><b>종료 (실행 완료)</b></td>
              <td>프로세스가 마지막 문장 실행을 완료(<code>return</code>, <code>exit()</code>)하거나 오류(abort)로 인해 완전히 종료되어 OS가 자원을 회수함</td>
            </tr>
          </tbody>
        </table>

        <!-- 시험 출제 포인트 Callout -->
        <div class="callout-box warning" style="margin-top: 14px;">
          <div class="callout-title">🚨 [시험 출제 1순위] 프로세스 상태 전이도 3대 단골 출제 포인트 + 비활성 상태(휴식/보류)</div>
          <b>1. 왜 <code>waiting</code>에서 <code>running</code>으로 직접 가는 화살표는 없는가? (서술형·객관식 함정 1위)</b><br>
          • <code>waiting</code> 상태이던 프로세스의 입출력이 완료(<code>I/O or event completion</code>)된 시점에, <b>CPU는 이미 다른 프로세스가 <code>running</code> 상태로 점유하고 있을 수 있습니다.</b> 따라서 즉시 CPU를 새치기할 수 없고, 실행 준비가 끝났다는 의미인 <b><code>ready</code> 상태(준비 큐)</b>로 들어가 줄을 선 뒤 <code>scheduler dispatch</code>를 통해서만 <code>running</code>으로 갈 수 있습니다.<br><br>
          <b>2. <code>interrupt</code> (running → ready) vs <code>I/O or event wait</code> (running → waiting) 완벽 구분</b><br>
          • <b><code>interrupt</code></b>: 프로세스는 더 실행하고 싶으나 타임 슬라이스(Time Quantum) 소진 등으로 <b>비자발적(강제)으로 CPU를 빼앗긴 경우</b> → 당장 다시 실행 가능하므로 <b><code>ready</code></b>로 이동.<br>
          • <b><code>I/O or event wait</code></b>: 느린 입출력 장치의 응답을 기다려야 해서 프로세스가 <b>자발적으로 CPU를 내려놓은 경우</b> → I/O가 끝날 때까지 실행 불가능하므로 <b><code>waiting</code></b>으로 이동.<br><br>
          <b>3. 7장 CPU 스케줄링(선점 vs 비선점)과의 연결 고리</b><br>
          • <b>비선점형(Non-preemptive)</b>: 오직 <b>④ <code>running → waiting</code> (I/O wait)</b>과 <b>⑥ <code>running → terminated</code> (exit)</b>처럼 프로세스가 스스로 CPU를 반납할 때만 스케줄링 발생.<br>
          • <b>선점형(Preemptive)</b>: 여기에 더해 <b>③ <code>running → ready</code> (interrupt)</b>와 <b>⑤ <code>waiting → ready</code> (I/O completion)</b> 시점에도 강제로 CPU를 빼앗는 스케줄링 발생!<br><br>
          <b>4. [교안 심화] 프로세스 비활성 상태: 휴식 상태(Pause) vs 보류 상태(Suspend / Swapped-out)</b><br>
          • <b>휴식 상태</b>: 프로세스가 메모리에 그대로 남아 있으나 일시적으로 멈춘 상태.<br>
          • <b>보류 상태 (Suspended)</b>: 메모리 부족, 프로그램 오류, 사용자 중단 요청, 부모의 디버깅 등으로 인해 <b>중기 스케줄러(Swapper)가 프로세스를 메인 메모리에서 디스크(Swap 영역)로 쫓아낸(Swap-out) 상태</b>. 보류 대기에서 입출력이 완료되면 보류 준비 상태로 이동하며, 다시 메모리로 재적재(Swap-in)되면 활성 준비(Ready) 상태로 복귀함.
        </div>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">3. PCB(프로세스 제어 블록) &amp; 문맥 교환(Context Switch) 메커니즘</div>
          <span class="badge badge-danger">서술형 빈출</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          <b>PCB (Process Control Block, TCB)</b>는 운영체제가 각 프로세스를 관리하기 위해 커널 영역에 생성하는 핵심 자료구조입니다. 프로그램이 프로세스가 되려면 반드시 PCB를 부여받아야 하며, 프로세스 종료 시 PCB도 폐기됩니다.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; font-size: 12.5px; margin-bottom: 14px;">
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>포인터(Pointer)</b>: 준비 큐·대기 큐의 연결 리스트 구성을 위한 다음 PCB 주소</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>프로세스 상태(State)</b>: new, ready, running, waiting, terminated</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>PID &amp; PPID</b>: 고유 프로세스 식별 번호 및 부모 프로세스 PID</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>프로그램 카운터(PC)</b>: 해당 프로세스가 다음에 실행할 명령어의 주소</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>CPU 레지스터</b>: 누산기, 인덱스 레지스터, 스택 포인터(SP), 범용 레지스터 값</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>CPU 스케줄링 정보</b>: 프로세스 우선순위, 스케줄링 큐 포인터, 매개변수</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>메모리 관리 정보</b>: 기준(Base)·한계(Limit) 레지스터 값, 페이지/세그먼트 테이블</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>회계(Accounting) &amp; I/O 정보</b>: CPU 사용 시간, 계정 번호, 할당된 장치 및 열린 파일 테이블</div>
        </div>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 195px;">문맥 교환 항목</th>
              <th>상세 동작 과정 및 성능 영향</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>문맥 교환 정의<br>(Context Switch)</b></td>
              <td>CPU가 현재 실행 중인 프로세스 <code>P<sub>0</sub></code>에서 다른 프로세스 <code>P<sub>1</sub></code>으로 넘어가기 위해, <b>기존 프로세스 <code>P<sub>0</sub></code>의 상태(Context: PC, 레지스터 등)를 <code>PCB<sub>0</sub></code>에 저장(Save)</b>하고, <b>새로 실행할 프로세스 <code>P<sub>1</sub></code>의 저장된 상태를 <code>PCB<sub>1</sub></code>에서 복원(Reload)</b>하는 과정</td>
            </tr>
            <tr>
              <td><b>단계별 실행 흐름<br>(P<sub>0</sub> → P<sub>1</sub> → P<sub>0</sub>)</b></td>
              <td><code>P0 실행 중</code> → 인터럽트 또는 시스템 콜 발생 → <b><code>save state into PCB0</code></b> (<code>P<sub>0</sub></code>는 Idle/대기 전환) → <b><code>reload state from PCB1</code></b> → <code>P1 실행</code> → 인터럽트 발생 → <b><code>save state into PCB1</code></b> → <b><code>reload state from PCB0</code></b> → <code>P0 실행 재개</code></td>
            </tr>
            <tr>
              <td><b>4대 발생 원인</b></td>
              <td>① 할당된 타임 슬라이스(Time Quantum)를 다 썼을 때 (타이머 인터럽트)<br>
              ② I/O 작업을 요청하여 스스로 대기(Waiting) 상태로 갈 때<br>
              ③ 더 높은 우선순위 프로세스가 도착하거나 시그널/인터럽트가 발생했을 때<br>
              ④ 프로세스가 실행을 마치고 종료(Exit)할 때</td>
            </tr>
            <tr>
              <td><b>오버헤드 특성<br>(Pure Overhead)</b></td>
              <td><b style="color: var(--tag-danger-ink);">문맥 교환이 진행되는 동안 시스템은 아무런 유용한 사용자 작업도 수행하지 못함 (순수 오버헤드)!</b><br>
              • 타임 슬라이스가 너무 작으면 문맥 교환이 지나치게 자주 발생하여 시스템 효율 급락.<br>
              • 하드웨어가 다중 레지스터 세트를 지원하면 레지스터 포인터만 바꾸어 문맥 교환 시간을 단축 가능.</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">4. 스케줄링 큐(Queue)와 3단계 스케줄러(장기 · 중기 · 단기) 비교</div>
          <span class="badge badge-blue">스케줄러 3종 비교</span>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 170px;">스케줄러 종류</th>
              <th style="width: 170px;">별칭 &amp; 전이 구간</th>
              <th>핵심 역할, 호출 빈도 및 다중 프로그래밍 제어</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>장기 스케줄러<br>(Long-term Scheduler)</b></td>
              <td><b>잡 스케줄러<br>(Job Scheduler)</b><br><code>New → Ready</code></td>
              <td>• 디스크 풀(Job Pool)의 작업 중 어떤 것을 <b>메인 메모리에 적재하여 준비 큐에 넣을지(admitted) 결정</b><br>
              • 메모리에 동시에 올라와 있는 프로세스 수인 <b>다중 프로그래밍 정도(Degree of Multiprogramming)를 직접 제어</b><br>
              • 호출 빈도가 매우 낮음(수 초~수 분 단위). <b>I/O 바운드 프로세스(I/O 위주)와 CPU 바운드 프로세스(연산 위주)를 적절히 혼합(Good Process Mix)</b>하여 선택해야 함 (현대 시분할 OS에는 보통 없음)</td>
            </tr>
            <tr>
              <td><b>중기 스케줄러<br>(Medium-term Scheduler)</b></td>
              <td><b>스와퍼 (Swapper)</b><br><code>메모리 ↔ 디스크 스왑</code></td>
              <td>• 메모리에 과부하가 걸리거나 여유 공간이 부족할 때, 당장 실행되지 않는 프로세스를 <b>메인 메모리에서 디스크 스왑 영역으로 내쫓고(Swap-out, 보류 상태)</b> 나중에 다시 불러들임(<b>Swap-in</b>)<br>
              • <b>다중 프로그래밍 정도를 감소(완화)</b>시키고 메모리 활용 효율을 높임</td>
            </tr>
            <tr>
              <td><b>단기 스케줄러<br>(Short-term Scheduler)</b></td>
              <td><b>CPU 스케줄러<br>(CPU Scheduler)</b><br><code>Ready → Running</code></td>
              <td>• 준비 큐(Ready Queue)에 있는 프로세스 중 <b>당장 다음에 CPU를 할당받을 프로세스를 선택</b><br>
              • 밀리초(ms) 단위로 <b>매우 빈번하게 호출</b>되므로 스케줄링 알고리즘 자체가 반드시 <b>초고속으로 동작</b>해야 함</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION: 3장 프로세스 생성 & IPC 통신 -->
    <section id="os-ch3" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>🔄 3장: 프로세스 계층, fork()/wait()/exec() 6대 실습 코드 &amp; IPC 이론</span>
        </div>
        <span class="badge badge-green">교수님 09/23 녹음 전수 수록</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-header">
          <div class="concept-card-title">1. 프로세스 계층 구조 · 생성 시스템 콜 3대장 · 좀비 vs 고아 프로세스</div>
          <span class="badge badge-danger">09/23 녹음 핵심</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 10px;">
          운영체제는 부팅 시 최초 프로세스(UNIX <code>init</code> / Linux <code>systemd</code>, <code>PID = 1</code>)를 생성하고, 이 프로세스가 자식 프로세스를 낳으며 <b>트리(Tree) 형태의 계층 구조</b>를 형성합니다. 프로세스 계층 구조의 장점은 <b>① 다중 작업의 동시 처리(로그인 쉘 등), ② 종료 시 자원 회수의 용이성</b>입니다.
        </p>
        <table class="concept-table">
          <thead><tr><th style="width: 170px;">시스템 콜 / 개념</th><th>역할 및 핵심 동작 원리</th><th style="width: 240px;">시험 필수 암기 포인트</th></tr></thead>
          <tbody>
            <tr>
              <td><b><code>fork()</code></b></td>
              <td>현재 실행 중인 부모 프로세스의 주소 공간(Code, Data, Heap, Stack)과 PCB를 그대로 <b>복제(Copy)</b>하여 새로운 자식 프로세스 생성 (자식은 <code>fork()</code> 직후 다음 문장부터 실행 시작)</td>
              <td><b>반환값(Return Value) 3가지</b>:<br>• 부모 프로세스: <b>자식의 PID (&gt; 0)</b><br>• 자식 프로세스: <b>0</b><br>• 생성 실패 시: <b>-1</b></td>
            </tr>
            <tr>
              <td><b><code>exec()</code> 계열</b><br><span style="font-size:12px;">(execlp, execvp 등)</span></td>
              <td>새로운 프로세스를 생성하지 않고, <b>현재 프로세스의 PID와 부모-자식 관계(PPID)는 그대로 유지한 채</b> 메모리 주소 공간(코드, 데이터, 힙, 스택)을 <b>새로운 실행 파일로 완전히 덮어씀(Overlay)</b></td>
              <td>• PC 등 레지스터와 열린 파일 리셋 후 새 프로그램의 <code>main()</code> 첫 줄부터 실행!<br>• <b>호출 성공 시 절대 원래 코드로 돌아오지 않음</b> (뒤쪽 코드는 영구 소멸)</td>
            </tr>
            <tr>
              <td><b><code>wait()</code> / <code>exit()</code></b></td>
              <td>• <code>exit()</code>: 자식이 실행을 마치고 종료 상태값(Exit Status)을 반환하며 OS에 자원 반납<br>• <code>wait()</code>: 부모가 자식이 종료될 때까지 <b>Waiting(Blocked) 상태로 대기</b>하다가 자식의 종료 상태값과 PCB를 수거함</td>
              <td>부모가 <code>wait()</code>를 호출해 주어야 자식의 PCB가 커널 프로세스 테이블에서 최종 제거됨 (<b>동기화 수단</b>)</td>
            </tr>
            <tr>
              <td><b>좀비 프로세스 (Zombie)</b><br>vs<br><b>고아 프로세스 (Orphan)</b></td>
              <td>• <b>좀비 프로세스</b>: 자식 프로세스가 <code>exit()</code>로 실행을 종료했으나, <b>부모가 아직 <code>wait()</code>를 호출하지 않아 커널에 자식의 PCB와 종료 상태 정보가 수거되지 않고 남아 있는 상태</b><br>• <b>고아 프로세스</b>: 자식 프로세스가 아직 실행 중인데 <b>부모 프로세스가 <code>wait()</code> 없이 먼저 종료된 상태</b></td>
              <td>고아 프로세스가 발생하면 최상위 프로세스인 <b><code>init</code>(또는 <code>systemd</code>, PID=1)이 새 부모로 입양</b>하여 주기적으로 <code>wait()</code>를 호출해 자원을 회수함</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning" style="margin-top: 14px;">
          <div class="callout-title">🚨 교수님 09/23 강의 녹음 직접 출제 예고 6대 실습 C 코드 완벽 분석</div>
          <div class="callout-box audio" style="margin: 8px 0 10px 0;">
            <div class="audio-quote-header">
              <span class="audio-quote-badge">🎙️ 교수님 강의 육성 녹음본 (09/23 실습 중 직접 출제 예고)</span>
              <span class="audio-quote-time">수업 녹음본 발언 원문</span>
            </div>
            <p class="audio-quote-text">
              "자, 이 코드 한번 보세요. <code>fork()</code>를 했을 때 자식이 전역 변수 <code>value</code>를 20으로 바꿨잖아요? 그러면 부모가 출력하는 <code>value</code>는 과연 몇일까요? <b>이거 시험 문제로 낼 수 있죠!</b> 자식은 자기 메모리만 바꾸고 끝나는 거고, 부모는 자기 주소 공간이 그대로 유지되니까 <b>부모의 value는 그대로 5가 나옵니다.</b> 메모리가 완전히 독립적으로 복제된다는 이 원리를 꼭 기억하세요!"
            </p>
          </div>
          교수님께서 09/23 강의에서 직접 한 줄씩 설명하시며 <b>"이거 결과값이 어떻게 될지 시험 문제로 낼 수 있죠!"</b>라고 강조하신 6가지 C 코드 전체와 실행 결과입니다.
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 14px; margin-top: 12px;">
          <!-- 실습 1 -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--accent); margin-bottom: 6px;">[실습 1] 기본 fork() 호출과 부모·자식 분기</div>
            <pre class="code-block" style="margin: 0;">#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;

int main() {
    pid_t pid;
    pid = fork();               // 여기서 프로세스가 2개로 복제됨!
    printf("Hello Process!\\n"); // 부모 1번 + 자식 1번 = 총 2번 출력!

    if (pid &gt; 0) {              // 부모 프로세스: 자식의 PID(양수) 반환받음
        printf("Parent process (child PID = %d)\\n", pid);
    } else if (pid == 0) {      // 자식 프로세스: 0을 반환받음
        printf("Child process (return = 0)\\n");
    }
    return 0;
}</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--accent); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--accent);">🖥️ 실제 터미널 출력 결과 (자식 PID = 1234 가정):</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">Hello Process!
Parent process (child PID = 1234)
Hello Process!
Child process (return = 0)</pre>
              • <b>핵심 해설</b>: <code>fork()</code> 직후의 <code>printf("Hello Process!\\n")</code>는 분기문 밖에 있으므로 <b>부모 1회 + 자식 1회 = 총 2번 출력</b>됩니다. (<code>wait()</code>가 없으므로 부모와 자식의 출력 순서는 스케줄링에 따라 뒤바뀔 수 있음)
            </div>
          </div>

          <!-- 실습 2 -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--tag-danger-ink); margin-bottom: 6px;">[실습 2] ⭐ 출제 1순위: fork() 후 전역 변수 독립성</div>
            <pre class="code-block" style="margin: 0;">#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;
#include &lt;sys/wait.h&gt;

int value = 5; // 전역 변수 (Data 영역)

int main() {
    pid_t pid = fork();
    if (pid == 0) {       // 자식 프로세스
        value += 15;      // 자식 메모리의 value만 20이 됨!
        return 0;
    } else if (pid &gt; 0) { // 부모 프로세스
        wait(NULL);       // 자식이 끝날 때까지 대기
        printf("PARENT: value = %d\\n", value); // LINE A (출력: 5)
        return 0;
    }
}</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--tag-danger-ink); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--tag-danger-ink);">🖥️ 실제 터미널 출력 결과 (LINE A):</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">PARENT: value = 5</pre>
              • <b>핵심 해설</b>: <code>fork()</code> 시 자식은 부모의 주소 공간(Data 영역 포함)을 <b>독립적으로 복제</b>합니다. 자식이 <code>value += 15</code>로 자신의 <code>value</code>를 <code>20</code>으로 바꾸고 종료해도 <b>부모 메모리의 <code>value</code>는 원본 <code>5</code> 그대로 유지</b>됩니다!
            </div>
          </div>

          <!-- 실습 3 -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--accent); margin-bottom: 6px;">[실습 3] 반복문 연쇄 fork() &amp; 논리 단락 평가</div>
            <pre class="code-block" style="margin: 0;">for (int i = 0; i &lt; 4; i++) { // [1] for 루프 연쇄 fork(): 2^n 공식
    fork();                   // i=0(2개) → i=1(4개) → i=2(8개) → i=3(16개)
}
printf("Hello\\n");            // 총 16번 출력! (생성된 자식은 15개)

fork() || fork();             // [2] 논리 OR: 자식(0=거짓)만 뒤 fork() 실행
printf("Hello\\n");            // 총 3번 출력! (부모 P0 + 자식 C1 + 손자 GC1)

fork() &amp;&amp; fork();             // [3] 논리 AND: 부모(>0=참)만 뒤 fork() 실행
printf("Hello\\n");            // 총 3번 출력! (부모 P0 + 첫자식 C1 + 둘째자식 C2)</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--accent); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--accent);">🖥️ 각 코드 단독 실행 시 실제 출력 결과 &amp; 총 프로세스 수:</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">[1) for문 4회] "Hello" 총 16줄 출력! (총 프로세스 = 2^4 = 16개 / 생성된 자식 = 15개)
[2) fork() || fork()] "Hello" 총 3줄 출력! (총 프로세스 = 3개: 부모 P0, 자식 C1, 손자 GC1)
[3) fork() &amp;&amp; fork()] "Hello" 총 3줄 출력! (총 프로세스 = 3개: 부모 P0, 첫자식 C1, 둘째자식 C2)</pre>
              • <b>단락 평가 원리</b>: <code>||</code>는 앞이 참(부모=양수)이면 뒤 <code>fork()</code>를 생략하므로 자식(<code>0</code>=거짓)만 뒤 <code>fork()</code>를 실행합니다. 반대로 <code>&amp;&amp;</code>는 앞이 거짓(자식=<code>0</code>)이면 뒤 <code>fork()</code>를 생략하므로 부모(양수=참)만 뒤 <code>fork()</code>를 실행합니다.
            </div>
          </div>

          <!-- 실습 4 -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--tag-danger-ink); margin-bottom: 6px;">[실습 4] ⭐ execlp() 메모리 덮어쓰기 (LINE J 미출력)</div>
            <pre class="code-block" style="margin: 0;">#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;
#include &lt;sys/wait.h&gt;

int main() {
    pid_t pid = fork();
    if (pid == 0) {                    // 자식 프로세스
        execlp("/bin/ls", "ls", NULL); // 주소 공간을 /bin/ls로 완전히 덮어씀!
        printf("LINE J\\n");            // ★ 절대 화면에 출력되지 않음!
    } else if (pid &gt; 0) {              // 부모 프로세스
        wait(NULL);                    // 자식의 /bin/ls 실행 종료까지 대기
        printf("Child Complete\\n");
    }
    return 0;
}</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--tag-danger-ink); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--tag-danger-ink);">🖥️ 실제 터미널 출력 결과:</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">a.out   main.c   test.txt   (← 자식이 실행한 /bin/ls 디렉터리 파일 목록)
Child Complete              (← 자식이 끝난 뒤 wait(NULL)에서 깨어난 부모 출력)</pre>
              • <b>핵심 해설</b>: <b style="color: var(--tag-danger-ink);"><code>LINE J</code>는 절대 화면에 출력되지 않습니다!</b> <code>execlp()</code>가 성공하는 순간 자식의 주소 공간(코드·데이터·힙·스택)이 <code>/bin/ls</code> 프로그램으로 완전히 덮어씌워져 기존 코드는 소멸되기 때문입니다. (오직 <code>execlp</code>가 오류로 실패했을 때만 <code>LINE J</code>가 출력됨)
            </div>
          </div>

          <!-- 실습 5 -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--tag-danger-ink); margin-bottom: 6px;">[실습 5] ⭐ 교수님 강조: fork() 반환값(pid) vs getpid()(pid1)</div>
            <pre class="code-block" style="margin: 0;">pid_t pid, pid1;
pid = fork(); // 가정: 부모 실제 PID = 7342, 자식 실제 PID = 7343

if (pid == 0) {                         // 자식 프로세스
    pid1 = getpid();                    // 자식 자신의 실제 PID 조회
    printf("child: pid = %d\\n", pid);   // [A] 출력: 0 (fork 반환값)
    printf("child: pid1 = %d\\n", pid1); // [B] 출력: 7343 (자식 실제 PID)
} else if (pid &gt; 0) {                   // 부모 프로세스
    wait(NULL);                         // 자식 종료 대기
    pid1 = getpid();                    // 부모 자신의 실제 PID 조회
    printf("parent: pid = %d\\n", pid);   // [C] 출력: 7343 (자식 PID 반환값)
    printf("parent: pid1 = %d\\n", pid1); // [D] 출력: 7342 (부모 실제 PID)
}</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--tag-danger-ink); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--tag-danger-ink);">🖥️ 실제 터미널 출력 결과 (부모 PID = 7342, 자식 PID = 7343 가정):</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">child: pid = 0
child: pid1 = 7343
parent: pid = 7343
parent: pid1 = 7342</pre>
              • <b>[A] <code>0</code></b>: 자식에게 반환된 <code>fork()</code> 반환값 / <b>[B] <code>7343</code></b>: <code>getpid()</code>로 조회한 자식 자신의 진짜 PID<br>
              • <b>[C] <code>7343</code></b>: 부모에게 반환된 <code>fork()</code> 반환값(=자식의 PID) / <b>[D] <code>7342</code></b>: <code>getpid()</code>로 조회한 부모 자신의 진짜 PID (부모가 <code>wait(NULL)</code>을 호출하므로 항상 자식의 A, B가 먼저 출력된 후 부모의 C, D가 출력됨!)
            </div>
          </div>

          <!-- 실습 6 -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--accent); margin-bottom: 6px;">[실습 6] 전역 배열 nums[5] 자식 수정 vs 부모 원본</div>
            <pre class="code-block" style="margin: 0;">#define SIZE 5
int nums[SIZE] = {0, 1, 2, 3, 4}; // 전역 배열

int main() {
    int i;
    pid_t pid = fork();
    if (pid == 0) {               // 자식 프로세스
        for (i = 0; i &lt; SIZE; i++) {
            nums[i] *= -i;        // 자식 배열만 0, -1, -4, -9, -16으로 변경
            printf("CHILD: %d ", nums[i]);
        }
    } else if (pid &gt; 0) {         // 부모 프로세스
        wait(NULL);               // 자식 종료 대기
        for (i = 0; i &lt; SIZE; i++)
            printf("PARENT: %d ", nums[i]); // 부모 배열은 원본 그대로!
    }
    return 0;
}</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--accent); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--accent);">🖥️ 실제 터미널 출력 결과:</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">CHILD: 0 CHILD: -1 CHILD: -4 CHILD: -9 CHILD: -16 PARENT: 0 PARENT: 1 PARENT: 2 PARENT: 3 PARENT: 4 </pre>
              • <b>자식 출력값</b>: <code>0, -1, -4, -9, -16</code> (<code>i = 0~4</code>에 대해 <code>nums[i] * (-i)</code> 연산: <code>0*0=0</code>, <code>1*-1=-1</code>, <code>2*-2=-4</code>, <code>3*-3=-9</code>, <code>4*-4=-16</code>)<br>
              • <b>부모 출력값</b>: <code>0, 1, 2, 3, 4</code> (부모가 <code>wait(NULL)</code>로 자식 종료 후 출력하며, 자식의 배열 수정은 부모 메모리에 전혀 영향을 주지 않음!)
            </div>
          </div>
        </div>

        <div class="concept-card-header" style="margin-top: 24px;">
          <div class="concept-card-title">2. 프로세스 간 통신 (IPC: Interprocess Communication) 기본 개념 &amp; 2대 모델</div>
          <span class="badge badge-blue">IPC 통신 이론</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 10px;">
          • <b>독립적 프로세스(Independent)</b>: 다른 프로세스와 데이터를 공유하지 않고 실행에 영향을 주지도 받지도 않는 프로세스.<br>
          • <b>협력적 프로세스(Cooperating)</b>: 다른 프로세스와 데이터를 주고받으며 영향을 주고받는 프로세스.<br>
          • <b>프로세스 협력을 허용하는 4대 이유</b>: <b>① 정보 공유(Information Sharing), ② 계산 가속화(Computation Speedup - 작업을 쪼개 병렬 실행), ③ 모듈성(Modularity - 시스템 기능을 별도 프로세스/스레드로 분리), ④ 편의성(Convenience)</b>.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 170px;">비교 기준</th>
              <th>공유 메모리 (Shared Memory)</th>
              <th>메시지 패싱 (Message Passing)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>핵심 동작 원리</b></td>
              <td>협력 프로세스들이 <b>특정 메모리 영역을 함께 공유</b>하고, 해당 영역에 평범한 메모리 읽기(Read)/쓰기(Write)를 수행하여 데이터를 교환</td>
              <td>공유 변수 없이 운영체제 커널이 제공하는 <b><code>send(message)</code>와 <code>receive(message)</code> 시스템 콜</b>을 통해 메시지를 주고받음</td>
            </tr>
            <tr>
              <td><b>커널 개입 여부</b></td>
              <td><b>최초에 공유 메모리 영역을 구축할 때만 시스템 콜(커널 개입)이 필요</b>하며, 이후 모든 데이터 접근은 커널 개입 없이 일반 메모리 접근으로 처리됨</td>
              <td>메시지를 주고받는 <b>매 통신마다 시스템 콜을 통해 커널이 지속적으로 개입</b>함 (프로세스 A → 커널 버퍼 복사 → 프로세스 B)</td>
            </tr>
            <tr>
              <td><b>통신 속도 &amp; 대량 데이터</b></td>
              <td><b>매우 빠름</b> (대량의 데이터를 고속으로 교환할 때 압도적으로 유리)</td>
              <td>상대적으로 느림 (커널 복사 및 시스템 콜 오버헤드 존재. <b>적은 양의 데이터 교환이나 분산 네트워크 환경</b>에 적합)</td>
            </tr>
            <tr>
              <td><b>동기화 및 충돌 책임</b></td>
              <td>동시에 같은 위치에 쓰지 않도록 <b>응용 프로그래머가 직접 동기화(Lock, 세마포어 등) 코드를 작성</b>해야 함</td>
              <td>운영체제 커널이 <code>send/receive</code> 큐 관리 및 동기화를 <b>자동으로 지원</b>하여 충돌이 적어 구현이 쉬움</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box info" style="margin-top: 12px;">
          <div class="callout-title">📡 IPC 통신 방향성 · 동기화 방식 · 직접 vs 간접 통신(Mailbox) 정리</div>
          <b>1. 통신 방향에 따른 분류 (3가지)</b><br>
          • <b>단방향 (Simplex)</b>: 한쪽 방향으로만 전송 가능 (예: 일반 익명 파이프 1개, TV/라디오 방송)<br>
          • <b>반이중 (Half-Duplex)</b>: 양방향 전송이 가능하지만 <b>동시 전송은 불가능</b>하고 한 번에 한 방향씩만 전송 (예: 무전기 워키토키)<br>
          • <b>전이중 (Full-Duplex)</b>: 양방향으로 <b>동시에 전송 가능</b> (예: 전화 통화, TCP 소켓)<br><br>
          <b>2. 통신 동기화(Synchronization) 분류</b><br>
          • <b>동기화 통신 (Synchronous / Blocking)</b>: <b>Blocking Send</b>(수신자가 받을 때까지 송신자 대기) / <b>Blocking Receive</b>(메시지가 도착할 때까지 수신자가 Sleep 대기). 데이터가 꽉 차거나 비어 있을 때 프로세스를 대기시켜 낭비를 막음 (예: 파이프, 소켓).<br>
          • <b>비동기화 통신 (Asynchronous / Non-blocking)</b>: 송신자가 메시지를 보내고 기다리지 않고 즉시 자기 작업 계속 수행, 수신자도 유효한 메시지나 Null을 즉시 반환받음 (데이터 도착 여부를 루프로 계속 확인하는 <b>바쁜 대기 Busy Waiting</b> 발생 가능).<br><br>
          <b>3. 메시지 패싱의 주소 지정: 직접 통신(Direct) vs 간접 통신(Indirect)</b><br>
          • <b>직접 통신</b>: 송수신 대상을 명시적으로 직접 지정 (<code>send(P, message)</code>, <code>receive(Q, message)</code>). 두 프로세스 사이에 정확히 1개의 링크가 자동 생성됨 (대칭형 vs 비대칭형 <code>receive(&amp;id, message)</code>). 단점: 프로세스 식별자(이름)가 바뀌면 모든 코드를 수정해야 함(모듈성 저하).<br>
          • <b>간접 통신</b>: 프로세스가 아닌 <b>메일박스(Mailbox) 또는 포트(Port)</b>라는 중간 우체통을 통해 송수신 (<code>send(A, message)</code>, <code>receive(A, message)</code>). 하나의 메일박스를 여러 프로세스가 공유할 수 있어 유연함.
        </div>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">3. 공유 메모리 대표 모델: 생산자-소비자 문제와 환형 버퍼(Circular Buffer) C 코드</div>
          <span class="badge badge-danger">빈칸·수식 암기 필수</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          • <b>무한 버퍼(Unbounded Buffer)</b>: 버퍼 크기에 제한이 없어 생산자는 항상 즉시 생산 가능(소비자만 빈 버퍼 시 대기).<br>
          • <b>유한 버퍼(Bounded Buffer)</b>: 버퍼 크기(<code>BUFFER_SIZE</code>)가 고정되어 있어, <b>버퍼가 가득 차면 생산자가 대기</b>하고 <b>버퍼가 비어 있으면 소비자가 대기</b>합니다.
        </p>
        <pre class="code-block">#define BUFFER_SIZE 10

typedef struct {
    int data;
} item;

item buffer[BUFFER_SIZE]; // 크기 10인 공유 메모리 환형 배열
int in = 0;               // 생산자가 다음 데이터를 넣을(Write) 인덱스 포인터
int out = 0;              // 소비자가 다음 데이터를 꺼낼(Read) 인덱스 포인터

item next_produced;       // [1] 생산자 프로세스 (Producer)
while (true) {
    while (((in + 1) % BUFFER_SIZE) == out) // 버퍼가 가득 찼으면(Full) 대기
        ;
    buffer[in] = next_produced;             // in 위치에 데이터 저장
    in = (in + 1) % BUFFER_SIZE;            // 포인터를 환형으로 1칸 전진
}

item next_consumed;       // [2] 소비자 프로세스 (Consumer)
while (true) {
    while (in == out)                       // 버퍼가 비어 있으면(Empty) 대기
        ;
    next_consumed = buffer[out];            // out 위치에서 데이터 추출
    out = (out + 1) % BUFFER_SIZE;          // 포인터를 환형으로 1칸 전진
}</pre>
        <div class="callout-box warning" style="margin-top: 10px;">
          <b>🎯 [시험 빈출 핵심 질문] 왜 <code>BUFFER_SIZE</code>가 10인데 최대 9개(<code>BUFFER_SIZE - 1</code>개)의 데이터만 저장할 수 있는가?</b><br>
          만약 10칸을 모두 꽉 채우면 <code>in</code>이 한 바퀴를 돌아 <code>in == out</code>이 되어버립니다. 그런데 <code>in == out</code>은 <b>버퍼가 비어 있음(Empty)</b>을 판별하는 조건식과 똑같기 때문에, 별도의 <code>count</code> 변수 없이는 버퍼가 텅 빈 것인지 꽉 찬 것인지 구분할 수 없습니다. 따라서 <b>항상 1칸을 비워두어 <code>((in + 1) % BUFFER_SIZE) == out</code>일 때를 Full 상태로 판별</b>합니다!
        </div>
      </div>
    </section>

    <!-- SECTION: 4장 IPC 실습 -->
    <section id="os-ch4" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>🔌 4장: IPC 실제 구현 (POSIX 공유 메모리, UNIX 파이프, 소켓, RPC) (5주차 강의 집중 반영)</span>
        </div>
        <span class="badge badge-blue">4장 전체 실습 C 코드 &amp; 교수님 실험 분석 수록</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-header">
          <div class="concept-card-title">1. POSIX 공유 메모리(Shared Memory) 시스템 콜 4단계 &amp; C 코드</div>
          <span class="badge badge-blue">shm_open · ftruncate · mmap · shm_unlink</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 10px;">
          • <b>POSIX(Portable Operating System Interface) 배경</b>: 유닉스가 여러 계열로 분기되자 시스템 호출 인터페이스 규격을 통일화·표준화하기 위해 제정되었습니다.<br>
          • <b>동작 원리</b>: 일반 파일처럼 느린 보조기억장치(HDD/SSD)에 파일을 쓰는 것이 아니라, <b>메인 메모리(RAM) 상에 Memory-mapped file 객체를 생성</b>하여 두 프로세스가 접근하므로 <b>통신 속도가 압도적으로 빠릅니다(High Speed)</b>.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 210px;">POSIX 공유 메모리 함수</th>
              <th>역할 및 동작 설명 (컴파일 시 반드시 <code>-lrt</code> 옵션 필수!)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1) <code>shm_open()</code></b></td>
              <td>지정된 이름(<code>"OS"</code>)으로 공유 메모리 객체를 생성하거나 열고 <b>파일 디스크립터(<code>shm_fd</code>)를 반환</b><br><code>shm_fd = shm_open(name, O_CREAT | O_RDWR, 0666);</code></td>
            </tr>
            <tr>
              <td><b>2) <code>ftruncate()</code></b></td>
              <td>생성된 공유 메모리 객체의 <b>크기(바이트 단위, 예: 4096B = 4KB 1페이지 크기)를 설정</b><br><code>ftruncate(shm_fd, 4096);</code></td>
            </tr>
            <tr>
              <td><b>3) <code>mmap()</code></b></td>
              <td>공유 메모리 객체를 현재 프로세스의 주소 공간에 <b>메모리 매핑(Mapping)하고 시작 주소 포인터(<code>ptr</code>)를 반환</b><br><code>ptr = mmap(0, SIZE, PROT_WRITE, MAP_SHARED, shm_fd, 0);</code></td>
            </tr>
            <tr>
              <td><b>4) <code>shm_unlink()</code></b></td>
              <td>소비자가 데이터를 다 읽은 후 <b>공유 메모리 객체를 시스템에서 최종 제거(삭제)</b><br><code>shm_unlink(name);</code></td>
            </tr>
          </tbody>
        </table>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); gap: 14px; margin-top: 12px;">
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--accent); margin-bottom: 6px;">[POSIX 공유 메모리 생산자 (Producer)]</div>
            <pre class="code-block" style="margin: 0;">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;string.h&gt;
#include &lt;fcntl.h&gt;
#include &lt;sys/shm.h&gt;
#include &lt;sys/stat.h&gt;
#include &lt;sys/mman.h&gt;
#include &lt;unistd.h&gt;

int main() {
    const int SIZE = 4096;                           // 공유 메모리 크기 (4096 바이트)
    const char *name = "OS";                         // 공유 메모리 식별 이름
    const char *message_0 = "Hello";                 // 기록할 메시지 0
    const char *message_1 = "World!";                // 기록할 메시지 1
    int shm_fd;                                      // 파일 디스크립터
    void *ptr;                                       // 메모리 매핑 포인터

    shm_fd = shm_open(name, O_CREAT | O_RDWR, 0666); // 1. 공유 메모리 객체 생성
    ftruncate(shm_fd, SIZE);                         // 2. 크기를 4096B로 설정
    ptr = mmap(0, SIZE, PROT_WRITE, MAP_SHARED, shm_fd, 0); // 3. 메모리 매핑

    sprintf(ptr, "%s", message_0);                   // 4. "Hello" 쓰기
    ptr += strlen(message_0);                        // 포인터 5바이트 전진
    sprintf(ptr, "%s", message_1);                   // "World!" 이어서 쓰기
    ptr += strlen(message_1);
    return 0;                                        // 화면에는 아무것도 출력되지 않음!
}</pre>
          </div>

          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--accent); margin-bottom: 6px;">[POSIX 공유 메모리 소비자 (Consumer)]</div>
            <pre class="code-block" style="margin: 0;">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;fcntl.h&gt;
#include &lt;sys/shm.h&gt;
#include &lt;sys/stat.h&gt;
#include &lt;sys/mman.h&gt;

int main() {
    const int SIZE = 4096;
    const char *name = "OS";
    int shm_fd;
    void *ptr;

    shm_fd = shm_open(name, O_RDONLY, 0666);        // 1. 공유 메모리 읽기 전용 오픈
    ptr = mmap(0, SIZE, PROT_READ, MAP_SHARED, shm_fd, 0); // 2. 메모리 매핑
    printf("%s\\n", (char *)ptr);                    // 3. 데이터 출력 ("HelloWorld!")
    shm_unlink(name);                               // 4. 공유 메모리 객체 최종 제거
    return 0;
}</pre>
          </div>
        </div>

        <!-- 5주차 강의 교수님 실험 & 세그멘테이션 폴트 분석 박스 -->
        <div class="callout-box warning" style="margin-top: 14px;">
          <div class="callout-title">🚨 [출제 1순위] 공유 메모리 생산자 출력 특성 &amp; 소비자 연속 접근 시 Segmentation fault 발생 원인</div>

          <div class="callout-box audio" style="margin: 8px 0 10px 0;">
            <div class="audio-quote-header">
              <span class="audio-quote-badge">🎙️ 교수님 강의 육성 녹음본 (생산자 무출력 &amp; 소비자 세그폴트 분석)</span>
              <span class="audio-quote-time">타임스탬프 [07:24~07:34, 13:54~14:44]</span>
            </div>
            <p class="audio-quote-text">
              "시간을 조금 드릴 테니까 한 번... 프로듀서 입장이니까 그냥 쓰기만 하는 거죠. Hello Shared Memory 이렇게 쓰기만 하는 거니까 <b>실행한다고 해서 이제 아무것도 없죠. 그쵸?</b> GCC 했을 때 프로듀서 하면 뭐 쓰기만 한 거기 때문에 아무것도 안 나타나요...<br><br>
              그러면 또 실험을 하게 되면 이 때는 이제 <b>세그멘트 폴트(Segmentation fault) 나오죠. 왜냐면 이제 더 이상 없잖아.</b> 한번 이제 버퍼에서 지금 적어 놓은 거를 컨스멜에서 한 번 읽었잖아요. 그 다음은 어떻게 돼요? <b>그 다음 없죠. 그 다음 포인터 가리키는 곳은 이제 아무것도 없기 때문에, 그 다음 갔기 때문에 없죠. 그쵸? 없기 때문에 이제 세그멘트 폴트가 날 수밖에 없다.</b> 여기까지 확인하시고 캡처 결과 화면하고 코딩한 거 올려주시면 됩니다."
            </p>
          </div>

          • <b>교수님 육성 기반 핵심 발생 메커니즘</b>:
          <ol style="margin: 6px 0 0 18px; padding-left: 0; line-height: 1.7;">
            <li><b>생산자(Producer)의 터미널 출력 없음</b>: 4096B 공유 메모리 버퍼 앞부분에 <code>"HelloWorld!"</code> 문자열을 메모리 쓰기만 하고 화면(stdout)에는 아무것도 출력하지 않고 정상 종료합니다.</li>
            <li><b>소비자(Consumer)의 1회차 정상 동작</b>: 공유 메모리를 열고 <code>"HelloWorld!"</code>를 터미널에 정상 출력한 뒤 <code>shm_unlink("OS")</code>로 객체 링크를 해제합니다.</li>
            <li><b>연속 접근/초과 접근 시 세그멘테이션 폴트 발생</b>: 이미 <code>shm_unlink</code>로 해제되었거나 매핑 범위를 벗어난 무효한 메모리 주소(Unmapped Memory / Invalid Address)에 포인터가 접근하는 순간, <b>CPU의 MMU와 운영체제 커널이 잘못된 메모리 침범을 감지하여 <code>SIGSEGV</code> 시그널을 즉시 발송</b>합니다.</li>
            <li>그 결과 화면에 <b style="color: var(--tag-danger-ink);"><code>Segmentation fault (core dumped)</code></b> 오류가 출력되며 프로세스가 강제 중단됩니다.</li>
          </ol>
        </div>

        <div class="concept-card-header" style="margin-top: 24px;">
          <div class="concept-card-title">2. 파이프(Pipes): 익명 파이프(Ordinary Pipe) vs 지명 파이프(Named Pipe / FIFO)</div>
          <span class="badge badge-danger">fd[0] · fd[1] 완벽 구분</span>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 170px;">비교 항목</th>
              <th>익명 파이프 (Ordinary Pipes)</th>
              <th>지명 파이프 (Named Pipes / FIFOs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>프로세스 관계 제약</b></td>
              <td><b>반드시 부모-자식 관계</b>가 있어야만 통신 가능 (부모가 <code>pipe(fd)</code> 생성 후 <code>fork()</code>로 자식이 파일 디스크립터 <code>fd</code>를 상속받음)</td>
              <td>파일 시스템에 이름을 가진 특수 파일(<code>mkfifo()</code>)로 생성되므로 <b>부모-자식 관계가 없는 전혀 무관한 프로세스들 간에도 통신 가능</b></td>
            </tr>
            <tr>
              <td><b>통신 방향</b></td>
              <td><b>단방향 (Simplex / One-way)</b> 전용:<br>
              • <b style="color: var(--accent);"><code>fd[0]</code> = 읽기 끝 (Read End)</b><br>
              • <b style="color: var(--tag-danger-ink);"><code>fd[1]</code> = 쓰기 끝 (Write End)</b><br>
              ※ <b>양방향 통신을 하려면 파이프를 2개 생성해야 함!</b></td>
              <td><b>양방향(반이중 Half-duplex) 통신 가능</b> (UNIX에서는 반이중, Windows Named Pipe는 전이중 및 네트워크 원격 통신까지 지원)</td>
            </tr>
            <tr>
              <td><b>생명 주기 (Lifetime)</b></td>
              <td>통신하는 부모·자식 프로세스가 종료되면 <b>파이프도 즉시 자동 소멸</b></td>
              <td>프로세스가 종료되어도 파일 시스템에 계속 남아있음 (명시적으로 삭제 필요)</td>
            </tr>
            <tr>
              <td><b>물리적 통신 범위<br>(★ 교수님 강조 한계)</b></td>
              <td><b style="color: var(--tag-danger-ink);">오직 컴퓨터 1대 내부(로컬 프로세스)</b> 통신만 가능!<br>네트워크로 연결된 다른 컴퓨터와의 통신은 불가능함</td>
              <td>UNIX FIFO는 로컬 전용, Windows Named Pipe는 원격 네트워크 통신 지원</td>
            </tr>
            <tr>
              <td><b>OS별 명칭</b></td>
              <td>UNIX/Linux <code>pipe(int fd[])</code> (쉘의 <code>ls | less</code> 파이프라인 기호) / Windows <code>Anonymous Pipe</code></td>
              <td>UNIX/Linux <b>FIFO</b> (<code>mkfifo</code>) / Windows <b>Named Pipe</b></td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 12px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color);">
          <div style="font-weight: 800; color: var(--accent); margin-bottom: 6px;">💻 [4장 교안 필수 코드] UNIX Ordinary Pipe 부모 → 자식 메시지 전송 전체 C 코드</div>
          <pre class="code-block" style="margin: 0;">#include &lt;sys/types.h&gt;
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
#include &lt;unistd.h&gt;

#define BUFFER_SIZE 25
#define READ_END 0                                      // fd[0]은 반드시 읽기 전용 끝(Read End)
#define WRITE_END 1                                     // fd[1]은 반드시 쓰기 전용 끝(Write End)

int main(void) {
    char write_msg[BUFFER_SIZE] = "Greetings";
    char read_msg[BUFFER_SIZE];
    int fd[2];
    pid_t pid;

    if (pipe(fd) == -1) {                               // 1. fork() 전에 파이프 먼저 생성!
        fprintf(stderr, "Pipe failed");
        return 1;
    }

    pid = fork();                                       // 2. 자식 프로세스 생성 (fd[0], fd[1] 상속)

    if (pid &gt; 0) {                                      // 부모 프로세스 (파이프에 쓰기)
        close(fd[READ_END]);                            // 사용하지 않는 읽기 끝(fd[0]) 닫기
        write(fd[WRITE_END], write_msg, strlen(write_msg) + 1); // fd[1]에 문자열 전송
        close(fd[WRITE_END]);                           // 쓰기 완료 후 쓰기 끝(fd[1]) 닫기
    }
    else if (pid == 0) {                                // 자식 프로세스 (파이프에서 읽기)
        close(fd[WRITE_END]);                           // 사용하지 않는 쓰기 끝(fd[1]) 닫기
        read(fd[READ_END], read_msg, BUFFER_SIZE);       // fd[0]에서 문자열 수신
        printf("read %s\\n", read_msg);                  // 실제 터미널 출력: read Greetings
        close(fd[READ_END]);                            // 읽기 완료 후 읽기 끝(fd[0]) 닫기
    }
    return 0;
}</pre>
          <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 8px;">
            💡 <b>왜 안 쓰는 파이프 끝(<code>fd[0]</code> 또는 <code>fd[1]</code>)을 반드시 <code>close()</code> 해야 하는가?</b> 읽기 프로세스가 <code>read()</code>를 호출했을 때 모든 쓰기 끝(<code>fd[1]</code>)이 닫혀야만 <code>EOF(0)</code>를 감지하고 정상 종료할 수 있습니다. 만약 자식 자신이 물려받은 <code>fd[1]</code>을 닫지 않으면 커널은 아직 쓸 프로세스가 남아있다고 판단하여 자식의 <code>read()</code>가 영원히 블록(Block)될 수 있습니다.
          </div>
        </div>

        <div class="callout-box audio" style="margin: 12px 0 14px 0;">
          <div class="audio-quote-header">
            <span class="audio-quote-badge">🎙️ 교수님 강의 육성 녹음본 (파이프의 로컬 한계 &amp; 네트워크 소켓의 필요성)</span>
            <span class="audio-quote-time">타임스탬프 [17:06~17:31, 25:36~26:31]</span>
          </div>
          <p class="audio-quote-text">
            "파이프에서는... 파이프는 네트워크 상으로 쓸 수 있는데 안 보셔요. 그래서 이제 네트워크에서 사용하는 거는 이제 소켓이죠. 왜냐하면 지금 이 파이프가 통신한다는 것은 <b>컴퓨터 내부에서만 움직이는 거예요.</b> 컴퓨터가 이렇게 여러 대 있어, 여러 대 있어서 컴퓨터 간에 통신을 한다? <b>그거는 파이프 갖고는 안 된다는 거죠.</b> 지금 계속 컴퓨터 한 대에서 여러 개의 프로세스가 진행이 될 때를 얘기하는 거예요.<br><br>
            IPC가 컴퓨터 내부에서 움직인다라고 한다면 사실 파이프에 해당되는 것은 네트워크에서는 그렇게 안 쓰죠. 포트라고 쓰죠. 외부에서 컴퓨터마다 독립적으로 있을 때 밖에서 이렇게 파이프로 연결을 사실 못하잖아요. 컴퓨터를 고유하게 구별하기 위해 IP address로 구별하고, 파이프 대신 네트워크 상의 포트(Port)라고 하죠. 그래서 네트워크 상으로는 <b>IP address와 포트, 이 두 가지를 합쳐서 사실은 소켓(Socket)</b>이라고 정의를 하죠."
          </p>
        </div>

        <div class="concept-card-header" style="margin-top: 24px;">
          <div class="concept-card-title">3. 네트워크 클라이언트-서버 통신: 소켓(Socket) &amp; 원격 프로시저 호출(RPC)</div>
          <span class="badge badge-blue">소켓 3종 &amp; RPC 스텁 &amp; 마셜링</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 10px;">
          • 파이프와 POSIX 공유 메모리는 <b>컴퓨터 1대 내부(로컬) 통신 전용</b>입니다. 반면 네트워크로 떨어진 여러 컴퓨터의 프로세스 간 통신에는 <b>소켓(Socket)</b>과 <b>RPC</b>를 사용합니다.
        </p>

        <div class="callout-box audio" style="margin: 10px 0 14px 0;">
          <div class="audio-quote-header">
            <span class="audio-quote-badge">🎙️ 교수님 강의 육성 녹음본 (소켓 3종 '등기 우편' 비유 &amp; RPC 마셜링)</span>
            <span class="audio-quote-time">타임스탬프 [28:52~29:38, 30:19~32:08]</span>
          </div>
          <p class="audio-quote-text">
            "자바를 보면 소켓 3가지 다른 타입이 있다. 첫 번째 소켓 클래스는 이제 TCP, 그리고 두 번째는 UDP, 그다음에 이제 멀티캐스트 소켓이 있다. 우리 통신 때 배웠잖아. <b>TCP는 데이터 보내고 받았을 때 '이 받았다는 걸 갖다가 증명', 이게 한 등기 우편 같은 거예요.</b> 그리고 데이터그램 소켓(DatagramSocket) 같은 경우는 그런 게 아니에요. 그냥 막 보내는 거야. 커넥션리스(Connectionless)한 거지. 그냥 막 보내고. 그다음에 멀티캐스트 소켓은 여러 사람한테 보낼 수 있는데 특정인한테, 내가 지정한 사람한테 보낸다라는 거죠. 이게 좀 다르죠.<br><br>
            그다음에 RPC 같은 경우는 별도 원격 제어를 위한 어떤 코딩 없이 다른 네트워크에 있는 컴퓨터 공간의 함수나 프로시저를 실행할 수 있게 하는 통신 기술이다... 함수를 호출하려고 그러면 어떤 함수가 있는지를 알아야 하잖아요. 그거를 RPC 시스템에서는 클라이언트 측에 있는 <b>스텁(Stub)</b>으로 제공을 해줘요. 그리고 펑션콜 하려면 형식을 맞춰야 할 거 아니야. 인티저 형이냐 스트링 형이냐... 굉장히 문법이 있을 텐데 그런 <b>파라미터들의 법칙을 맞추는 걸 마셜링(Marshalling)</b>이라고, 마셜링 한 번에 다 하거든요. 메시지 파라미터를 처음에 보낼 때도 마셜링해서 보내고 서버에서 받아서 처리합니다."
          </p>
        </div>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 190px;">통신 기법</th>
              <th>상세 구조 및 시험 출제 포인트 (교수님 5주차 비유 반영)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>소켓 (Socket)</b></td>
              <td>• 정의: 네트워크 상에서 두 프로세스가 통신하기 위한 <b>양 끝단(Endpoint of Communication)</b>.<br>
              • 구성: <b><code>IP 주소(컴퓨터 식별) + 포트 번호(프로세스 식별)</code>의 결합</b> (예: <code>146.86.5.20:1625</code> ↔ 웹 서버 <code>161.25.19.8:80</code>).<br>
              • 포트 번호 규칙: <b>1024 미만(0~1023)</b>은 잘 알려진 표준 서비스(Well-known Ports: HTTP 80, FTP 21, SSH 22, Telnet 23)용으로 예약되어 있으며, 클라이언트는 1024 이상의 임의 포트를 할당받음.<br>
              • 루프백 주소: 자기 자신 컴퓨터를 가리키는 특수 IP 주소는 <b><code>127.0.0.1</code> (localhost)</b>.</td>
            </tr>
            <tr>
              <td><b>Java의 3가지 소켓 클래스<br>(교수님 5주차 직관 비유)</b></td>
              <td>1) <b style="color: var(--accent);"><code>Socket</code> 클래스 (TCP 연결 지향형)</b>: 데이터를 보낸 뒤 상대방이 잘 받았는지 확인증을 받는 <b>"등기 우편"</b> 같은 신뢰성 있는 전송 방식! (서버는 <code>ServerSocket</code>으로 <code>accept()</code> 연결 수락)<br>
              2) <b style="color: var(--tag-gold-ink);"><code>DatagramSocket</code> 클래스 (UDP 비연결형)</b>: 확인 과정(ACK) 없이 빠르게 무작정 패킷을 전송하는 <b>"일반 우편"</b> 방식 (신뢰성/도착 순서 보장 안 됨)<br>
              3) <b style="color: var(--tag-green-ink);"><code>MulticastSocket</code> 클래스</b>: 여러 호스트 중 <b>특정 그룹으로 지정된 사람들에게만 한 번에 데이터를 전송</b>하는 소켓</td>
            </tr>
            <tr>
              <td><b>RPC<br>(Remote Procedure Call)<br>&amp; 마셜링(Marshalling)</b></td>
              <td>• <b>정의</b>: 별도의 복잡한 네트워크 통신 코드 없이, <b>원격 호스트 컴퓨터에 있는 함수(프로시저)를 마치 로컬 메모리에 있는 함수를 호출하듯 실행</b>할 수 있게 추상화해 주는 기술.<br>
              • <b>스텁 (Stub)</b>: 클라이언트 측에 제공되어 원격 프로시저 호출을 대리하고 포장해 주는 클라이언트 측 프록시 모듈.<br>
              • <b style="color: var(--tag-danger-ink);">마셜링 (Marshalling — ★ 5주차 31분 교수님 강조 단답형 1순위)</b>: 함수 호출 시 전달되는 <b>서로 다른 데이터 타입의 매개변수들(정수 int, 문자열 string, 배열 등)을 네트워크 패킷으로 전송할 수 있는 표준 바이트 스트림 형태로 포장(직렬화)하는 규칙과 변환 과정!</b><br>
              • <b>언마셜링 (Unmarshalling)</b>: 서버 측 스텁이 네트워크 패킷을 받아서 원래의 함수 파라미터 형태로 복원하여 실제 프로시저를 실행하는 과정.<br>
              • <b>데이터 표현 문제 해결</b>: CPU 아키텍처마다 다른 바이트 저장 순서(<b>Big-Endian vs Little-Endian</b>) 차이를 극복하기 위해 중립 표준 표현인 <b>XDR(External Data Representation)</b>을 사용.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION: 5·6장 스레드 & 멀티스레딩 모델 -->
    <section id="os-ch5-6" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>🧵 5·6장: 스레드(Thread) 구조, 멀티스레딩 모델, Pthreads/OpenMP &amp; 5·6주차 실습 코드</span>
        </div>
        <span class="badge badge-purple">교수님 5·6주차 출제 스포 100% 반영</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-header">
          <div class="concept-card-title">1. 스레드(Thread) 개념과 프로세스 vs 스레드 메모리 공유 구조</div>
          <div>
            <span class="badge badge-danger">교수님 "이 그림 제일 중요!"</span>
            <span class="badge badge-amber">1순위 출제</span>
          </div>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 10px;">
          • <b>스레드(Thread)의 정의</b>: <b>경량 프로세스 (Lightweight Process, LWP)</b>이자, 프로세스 내부에서 <b>CPU 스케줄링과 실행이 이루어지는 가장 작은 기본/최소 단위(Basic Unit of CPU Utilization)</b>입니다.<br>
          • <b>식별자 비교</b>: 프로세스가 <b>PID</b>로 식별된다면, 스레드는 <b>TID (Thread ID)</b>로 식별되며, 각 스레드는 고유한 <b>PC(Program Counter), Register Set, Stack</b>을 가집니다.
        </p>

        <div class="callout-box audio" style="margin: 10px 0 14px 0;">
          <div class="audio-quote-header">
            <span class="audio-quote-badge">🎙️ 교수님 강의 육성 녹음본 (오늘 특별히 하나를 뽑는다면: 스레드 메모리 공유 도해)</span>
            <span class="audio-quote-time">타임스탬프 [47:06~47:44]</span>
          </div>
          <p class="audio-quote-text">
            "오늘 만약에 특별히 이제 하나를 뽑는다면 <b>이 그림을 잘 봐야지.</b> 하나의 프로세스라면 옛날의 프로세스는 스레드 하나고 코드, 데이터, 파일, 레지스터, PC, 스택이 다 같이 이뤄졌다면, 지금의 스레드 같은 경우는 <b>코드, 데이터, 파일은 공통적으로 갖고 있고 각각의 스레드는 레지스터, 스택, PC 뭐 이런 것들...</b> 멀티 스레드를 가진 하나의 프로세스로 이뤄졌다라고 얘기를 할 수 있다면서 이 그림을 조금, <b>제가 봤을 때 이 그림 제일 중요한 거죠.</b>"
          </p>
        </div>

        <!-- 단일 스레드 vs 멀티스레드 프로세스 비교 도해 (SVG) -->
        <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 14px; margin-bottom: 14px;">
          <div style="font-weight: 800; font-size: 14.5px; color: #0f172a; margin-bottom: 8px; text-align: center;">
            📐 [5주차 교수님 직접 언급: "오늘 특별히 하나를 뽑는다면 이 그림이 제일 중요!"] 프로세스 자원 공유/독립 구조
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <div style="background: #ffffff; border: 1.5px solid #94a3b8; border-radius: 8px; padding: 10px;">
              <div style="font-weight: 800; color: #1e293b; text-align: center; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">단일 스레드 프로세스 (Single-Threaded)</div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; text-align: center; font-size: 12.5px; font-weight: 700; margin-bottom: 8px;">
                <div style="background: #dbeafe; color: #1e40af; padding: 6px; border-radius: 4px; border: 1px solid #93c5fd;">code</div>
                <div style="background: #dbeafe; color: #1e40af; padding: 6px; border-radius: 4px; border: 1px solid #93c5fd;">data</div>
                <div style="background: #dbeafe; color: #1e40af; padding: 6px; border-radius: 4px; border: 1px solid #93c5fd;">files (heap)</div>
              </div>
              <div style="background: #fef3c7; border: 1.5px dashed #d97706; border-radius: 6px; padding: 8px; text-align: center; font-size: 12.5px; color: #92400e; font-weight: 700;">
                [단일 실행 흐름 (Thread 1개)]<br>
                registers &nbsp;|&nbsp; stack &nbsp;|&nbsp; PC
              </div>
            </div>
            <div style="background: #ffffff; border: 2px solid #2563eb; border-radius: 8px; padding: 10px;">
              <div style="font-weight: 800; color: #1d4ed8; text-align: center; margin-bottom: 8px; border-bottom: 1px solid #bfdbfe; padding-bottom: 4px;">멀티스레드 프로세스 (Multithreaded — 시험 필수!)</div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; text-align: center; font-size: 12.5px; font-weight: 800; margin-bottom: 8px;">
                <div style="background: #dbeafe; color: #1e40af; padding: 6px; border-radius: 4px; border: 1px solid #60a5fa;">공유: code</div>
                <div style="background: #dbeafe; color: #1e40af; padding: 6px; border-radius: 4px; border: 1px solid #60a5fa;">공유: data</div>
                <div style="background: #dbeafe; color: #1e40af; padding: 6px; border-radius: 4px; border: 1px solid #60a5fa;">공유: files/heap</div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; text-align: center; font-size: 11.5px; font-weight: 700;">
                <div style="background: #fee2e2; border: 1.5px solid #ef4444; border-radius: 6px; padding: 6px; color: #991b1b;">
                  <b>Thread 1 (독립)</b><br>registers<br>stack / PC
                </div>
                <div style="background: #fee2e2; border: 1.5px solid #ef4444; border-radius: 6px; padding: 6px; color: #991b1b;">
                  <b>Thread 2 (독립)</b><br>registers<br>stack / PC
                </div>
                <div style="background: #fee2e2; border: 1.5px solid #ef4444; border-radius: 6px; padding: 6px; color: #991b1b;">
                  <b>Thread 3 (독립)</b><br>registers<br>stack / PC
                </div>
              </div>
            </div>
          </div>
        </div>

        <table class="concept-table">
          <thead><tr><th style="width: 220px;">구분</th><th>포함되는 구성 요소 (한글 / 영문)</th><th>이유 및 시험 핵심 포인트</th></tr></thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">스레드 간 공유하는 자원<br>(Shared across threads)</b></td>
              <td>• <b>코드 영역 (Code / Text Section)</b><br>• <b>데이터 영역 (Data Section: 전역 변수, static 변수)</b><br>• <b>힙 영역 (Heap: 동적 할당 메모리)</b><br>• <b>운영체제 자원 (Open Files 열린 파일, 시그널)</b></td>
              <td>같은 프로세스 내 모든 스레드가 전역 변수와 힙을 그대로 공유하므로 별도의 IPC 없이도 데이터를 즉시 주고받음 (단, 동시 수정 시 경쟁 조건 주의)</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-danger-ink);">각 스레드가 독립 소유하는 자원<br>(Unique per thread)</b></td>
              <td>• <b>스레드 ID (TID: Thread ID)</b><br>• <b>프로그램 카운터 (PC: Program Counter)</b><br>• <b>레지스터 집합 (Register Set)</b><br>• <b>스택 (Stack: 지역 변수, 매개변수, 복귀 주소)</b></td>
              <td>각 스레드가 서로 다른 함수를 독립적으로 호출하고 각자의 실행 위치를 기억해야 하므로 <b>PC, 레지스터, Stack은 반드시 스레드마다 따로 가져야 함!</b></td>
            </tr>
          </tbody>
        </table>

        <!-- 5주차 교수님 강조 면접 & 주관식 1순위: 프로세스 vs 스레드 5대 비교표 -->
        <div class="callout-box info" style="margin-top: 14px;">
          <div class="callout-title">💼 [면접 &amp; 기말 단골] "프로세스와 스레드의 차이가 뭐냐?" 5대 핵심 비교</div>

          <div class="callout-box audio" style="margin: 8px 0 10px 0;">
            <div class="audio-quote-header">
              <span class="audio-quote-badge">🎙️ 교수님 강의 육성 녹음본 (면접 단골 질문 강조)</span>
              <span class="audio-quote-time">타임스탬프 [47:57~48:27]</span>
            </div>
            <p class="audio-quote-text">
              "스레드에서 사실 제일 중요한 부분... <b>진짜 많이 물어봐요. 이제 면접으로 프로세스에 대해서 한번 물어봤을 때 '둘이 차이가 뭐냐?' 이런 것도 빠지지 않고 나오는 것 같아요.</b> 스레드까지 좀 하면 프로세스와 스레드의 차이를 좀 아실 수 있을 것 같고, 그다음에 각각 용어들이 좀 많이 나오는데 그런 것만 좀 잘 익히시면 됩니다."
            </p>
          </div>
          <table class="concept-table" style="margin-top: 8px;">
            <thead>
              <tr>
                <th style="width: 18%;">비교 항목</th>
                <th style="width: 41%;">프로세스 (Process)</th>
                <th>스레드 (Thread)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>1. 정의</b></td>
                <td>실행 중인 독립적인 프로그램 단위 (자원 할당의 단위)</td>
                <td>프로세스 내에서 실행 흐름의 최소 단위 (<b>CPU 스케줄링의 단위</b>)</td>
              </tr>
              <tr>
                <td><b>2. 메모리 공유</b></td>
                <td>독립된 주소 공간(Code, Data, Stack, Heap)을 가짐 (기본 공유 X)</td>
                <td>부모 프로세스의 <b>Code, Data, Heap, 열린 파일을 모든 스레드가 공유</b></td>
              </tr>
              <tr>
                <td><b>3. 생성 및 전환 비용</b></td>
                <td><code>fork()</code>로 새 주소 공간을 복제하므로 <b>생성 및 문맥 교환 오버헤드가 큼</b></td>
                <td>스택과 레지스터만 새로 할당하므로 <b>생성(약 30배) 및 전환(약 5배)이 훨씬 빠름</b></td>
              </tr>
              <tr>
                <td><b>4. 통신 (IPC)</b></td>
                <td>공유 메모리나 파이프, 소켓 등 <b>별도의 IPC 메커니즘 필수</b></td>
                <td>공유하는 전역 변수(Data)와 Heap을 통해 <b>IPC 없이 즉시 통신</b></td>
              </tr>
              <tr>
                <td><b>5. 장애 격리성</b></td>
                <td>독립적이므로 한 프로세스가 비정상 종료되어도 다른 프로세스는 안전함</td>
                <td><b style="color: var(--tag-danger-ink);">한 스레드가 오류(Segmentation fault)로 비정상 종료되면 전체 프로세스가 함께 사망!</b></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">2. 멀티스레딩 4대 이점 · 멀티코어 5대 과제 · 병렬성 유형 &amp; 암달의 법칙 (5주차 수치 완벽 수록)</div>
          <span class="badge badge-purple">이론 &amp; 계산 공식 총정리</span>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 190px;">주제</th>
              <th>핵심 내용 및 세부 분류</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>멀티스레딩의 4대 이점<br>(4 Benefits)</b></td>
              <td>1) <b>응답성 (Responsiveness)</b>: 작업 일부가 I/O로 차단되거나 긴 연산을 해도 다른 스레드가 사용자 UI 응답을 계속 유지<br>
              2) <b>자원 공유 (Resource Sharing)</b>: 공유 메모리/메시지 패싱 같은 복잡한 IPC 없이 프로세스의 Code, Data, Heap을 기본 공유<br>
              3) <b>경제성 (Economy)</b>: 프로세스 생성(<code>fork</code>)보다 메모리/자원 할당 비용이 훨씬 적고(약 30배 빠름), 문맥 교환도 약 5배 빠름<br>
              4) <b>확장성 (Scalability)</b>: 멀티프로세서/멀티코어 아키텍처에서 각 스레드가 서로 다른 코어에서 병렬로 실행되어 성능 배가</td>
            </tr>
            <tr>
              <td><b>동시성 (Concurrency)<br>vs<br>병렬성 (Parallelism)</b></td>
              <td>• <b>동시성 (Concurrency, 병행성)</b>: <b>단일 코어(Single Core)</b>에서도 가능한 개념. 타임 슬라이싱(시분할 <b>인터리빙 Interleaving</b>)으로 여러 스레드를 아주 빠르게 번갈아 실행하여 <b>마치 동시에 실행되는 것처럼 보이게 하는 논리적 특성</b> (<code>T1 → T2 → T3 → T1...</code>)<br>
              • <b>병렬성 (Parallelism)</b>: <b>반드시 멀티 코어(Multi-Core)</b>가 필요한 개념. 물리적으로 여러 개의 코어가 <b>동일한 시각에 실제로 여러 작업을 동시에 수행하는 물리적 특성</b></td>
            </tr>
            <tr>
              <td><b>병렬성의 2가지 유형<br>(Data vs Task)</b></td>
              <td>• <b>데이터 병렬성 (Data Parallelism)</b>: <b>동일한 데이터 집합을 부분집합으로 쪼개어 여러 코어에 분배</b>하고, 각 코어가 <b>동일한 연산(함수)</b>을 수행 (예: 크기 <code>N</code> 배열을 코어 2개가 각각 <code>0 ~ N/2 - 1</code>과 <code>N/2 ~ N - 1</code>의 합계를 동시에 구함)<br>
              • <b>태스크 병렬성 (Task Parallelism)</b>: 데이터가 아니라 <b>서로 다른 작업(태스크/스레드 함수)들을 여러 코어에 분배</b>하여 각 코어가 고유한 연산을 수행</td>
            </tr>
            <tr>
              <td><b>멀티코어 프로그래밍의<br>5대 도전 과제</b></td>
              <td>① <b>태스크 인식(Identifying Tasks)</b>: 병렬로 나눌 수 있는 독립 영역 찾기 / ② <b>균형(Balance)</b>: 모든 코어에 균등한 작업량 배분 / ③ <b>데이터 분리(Data Splitting)</b> / ④ <b>데이터 종속성(Data Dependency)</b>: 실행 순서 동기화 / ⑤ <b>시험 및 디버깅(Testing &amp; Debugging)</b></td>
            </tr>
            <tr>
              <td><b>암달의 법칙<br>(Amdahl's Law — ★ 5주차 43~46분 교수님 수치 계산)</b></td>
              <td>프로그램 내에 <b>반드시 순차적으로만 실행되어야 하는 비율을 <code>S</code> (Serial portion)</b>, 병렬화 가능한 비율을 <code>1 - S</code>, 코어 수를 <code>N</code>이라 할 때 최대 속도 향상(Speedup) 공식:<br>
              <div style="margin: 6px 0; padding: 8px 12px; background: var(--bg-surface-elevated); border-radius: 4px; font-family: var(--font-mono); font-weight: 700; color: var(--accent);">
                Speedup ≤ 1 / ( S + (1 - S) / N )
              </div>
              <div class="callout-box audio" style="margin: 8px 0 10px 0;">
                <div class="audio-quote-header">
                  <span class="audio-quote-badge">🎙️ 교수님 강의 육성 녹음본 (암달의 법칙 수치 계산 &amp; 직렬 50%의 한계)</span>
                  <span class="audio-quote-time">타임스탬프 [44:19~45:53]</span>
                </div>
                <p class="audio-quote-text">
                  "지금 여길 보시면 코어가 2개고 0.25 정도... 항상 연속성을 띄어야 해요. 요 일 끝나고 그 다음 일 끝나고... 그렇게 순차적으로 해야 할 일이 25%다(S = 0.25). 그 나머지는 병렬로 돌아갔다 치면 <b>N이 2일 때는 1.6배, 그리고 N이 4일 때는 2.28배가 빠르더라.</b> 근데 예상을 했을 때는 코어가 2개면 2배 빨라야 할 것 같고 4개면 4배 빨라야 할 거라고 생각을 했는데 그렇지 않다라는 거예요...<br><br>
                  만약에 <b>연속성이 50%다, 계속 시스템 자체가 이 일 끝나야지 그 다음 가고 하는 시리얼(Serial)적인 일이다... 그러면 사실은 더 효율이 떨어진다는 거예요. 스피드가 떨어진다는 거예요.</b> 좀 반 정도 차지하게 되면 거의 비슷하게 가는 거죠. 예상했던 것보다는 코어가 많으면 많을수록 그렇게 스피드가 높진 않다는 거예요. 그래서 암달의 법칙으로 '코어가 많으면 좋느냐?' 이런 공식을 하나 세웠다라는 거죠."
                </p>
              </div>
              • <b>[5주차 교수님 직접 강의 수치 예시 풀이]</b>: 순차(직렬) 작업 비율이 <b>25% (<code>S = 0.25</code>)</b>일 때:<br>
              &nbsp;&nbsp;1) <b>코어가 2개(<code>N = 2</code>)인 경우</b>: <code>1 / (0.25 + 0.75 / 2) = 1 / 0.625 = </code><b style="color: var(--accent);">1.6배 속도 향상</b> (2배가 아님!)<br>
              &nbsp;&nbsp;2) <b>코어가 4개(<code>N = 4</code>)인 경우</b>: <code>1 / (0.25 + 0.75 / 4) = 1 / 0.4375 ≈ </code><b style="color: var(--accent);">2.28배 속도 향상</b> (4배가 아님!)<br>
              • <b>핵심 결론</b>: 만약 직렬 비율이 50%(<code>S = 0.5</code>)라면 코어를 아무리 무한대(<code>N → ∞</code>)로 늘려도 최대 속도 향상은 <b><code>1 / 0.5 = 2배</code>로 수렴</b>하여 성능 개선 한계에 부딪힘!</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">3. 사용자 스레드 vs 커널 스레드 &amp; 멀티스레딩 3대 모델 (+ 투레벨)</div>
          <span class="badge badge-danger">교수님 6주차 그림·특징 강조</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          • <b>사용자 스레드(User Threads)</b>: 커널 위 사용자 공간의 스레드 라이브러리(POSIX Pthreads, Windows, Java Threads)가 관리 (커널은 존재를 모름).<br>
          • <b>커널 스레드(Kernel Threads)</b>: 운영체제 커널이 직접 생성하고 스케줄링하는 스레드 (Linux, Windows, macOS 등 모든 현대 OS가 지원).
        </p>
        <table class="concept-table">
          <thead><tr><th style="width: 170px;">멀티스레딩 모델</th><th style="width: 185px;">매핑 구조 (User : Kernel)</th><th>장점 · 치명적 단점 · 채택 사례</th></tr></thead>
          <tbody>
            <tr>
              <td><b>1) 다대일 모델<br>(Many-to-One)</b></td>
              <td><b>여러 개의 사용자 스레드<br>→ 1개의 커널 스레드</b></td>
              <td>• 장점: 사용자 공간의 라이브러리에서 스레드 관리가 이루어져 문맥 교환이 빠름.<br>
              • <b style="color: var(--tag-danger-ink);">치명적 단점 2가지</b>: ① <b>어느 한 스레드라도 블로킹 시스템 콜(I/O)을 호출하면 커널 스레드가 멈춰 전체 프로세스가 전부 봉쇄(Block)됨!</b> ② 커널 스레드가 1개뿐이므로 <b>멀티코어에서도 병렬 실행이 절대 불가능!</b> (예: 초기 Solaris Green Threads, GNU Portable Threads)</td>
            </tr>
            <tr>
              <td><b>2) 일대일 모델<br>(One-to-One)</b></td>
              <td><b>1개의 사용자 스레드<br>→ 1개의 커널 스레드</b></td>
              <td>• 장점: <b>한 스레드가 블록되어도 다른 스레드가 계속 실행 가능</b>하며, 멀티코어에서 완벽한 <b>병렬 실행(Parallelism)</b>을 제공.<br>
              • 단점: 사용자 스레드를 만들 때마다 커널 스레드를 생성해야 하므로 오버헤드가 있음.<br>
              • <b style="color: var(--tag-green-ink);">현대 OS 표준 채택</b>: <b>Linux, Windows</b> 등 거의 모든 현대 운영체제가 채택!</td>
            </tr>
            <tr>
              <td><b>3) 다대다 모델<br>(Many-to-Many)</b></td>
              <td><b><code>M</code>개의 사용자 스레드<br>→ <code>N</code>개의 커널 스레드 (<code>M ≥ N</code>)</b></td>
              <td>• 장점: 프로그래머가 원하는 만큼 많은 사용자 스레드를 만들 수 있고, 커널 스레드들이 멀티코어에서 병렬 수행 가능.<br>
              • 참고 — <b>투레벨 모델(Two-level Model)</b>: 기본적으로 다대다 모델을 유지하면서 특정 중요 사용자 스레드는 특정 커널 스레드에 1:1로 고정 바인딩(Bound)시키는 변형 모델.</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-header" style="margin-top: 24px;">
          <div class="concept-card-title">4. 교수님 6주차 실습 C 코드 4종 완벽 수록 (<code>thread.c</code>, <code>thread4.23.c</code>, <code>problem.c</code>, <code>OpenMP</code>)</div>
          <div>
            <span class="badge badge-danger">6주차 녹음 100% 반영</span>
            <span class="badge badge-amber">실행 결과 &amp; 개수 계산</span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); gap: 14px; margin-top: 10px;">
          <!-- 6주차 코드 1: thread.c -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--accent); margin-bottom: 6px;">[실습 1: thread.c] Pthreads로 1~N 누적 합계(sum) 구하기</div>
            <pre class="code-block" style="margin: 0;">#include &lt;pthread.h&gt;
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int sum;                   // 스레드들이 공유하는 전역 변수 (Data 영역)
void *runner(void *param); // 워커 스레드가 실행할 함수

int main(int argc, char *argv[]) {
    pthread_t tid;       // 스레드 식별자(TID)
    pthread_attr_t attr; // 스레드 속성

    pthread_attr_init(&amp;attr);                     // 1. 기본 스레드 속성 초기화
    pthread_create(&amp;tid, &amp;attr, runner, argv[1]); // 2. 새 스레드 생성 및 runner 실행
    pthread_join(tid, NULL);                      // 3. 워커 스레드 종료까지 main 대기

    printf("sum = %d\\n", sum);                    // ./a.out 10 실행 시 sum = 55 출력
}

void *runner(void *param) {
    int i, upper = atoi(param); // 문자열 인자를 정수로 변환
    sum = 0;
    for (i = 1; i &lt;= upper; i++)
        sum += i;
    pthread_exit(0);            // 워커 스레드 종료
}</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--accent); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--accent);">🖥️ 실제 터미널 출력 결과 (<code>./a.out 10</code> vs 인자 누락 <code>./a.out</code>):</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">$ gcc thread.c -pthread
$ ./a.out 10
sum = 55

$ ./a.out
Segmentation fault (core dumped)  (← argv[1]이 NULL이라 atoi(NULL) 참조 오류!)</pre>
              • <b>핵심 해설</b>: 워커 스레드와 <code>main</code> 스레드는 전역 변수 <code>sum</code>(Data 영역)을 공유하므로 워커가 계산한 <code>55</code>를 <code>main</code>이 그대로 출력합니다.
            </div>
          </div>

          <!-- 6주차 코드 2: thread4.23.c -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--tag-danger-ink); margin-bottom: 6px;">[실습 2: thread4.23.c] ⭐ fork() + pthread_create() 전역변수 비교</div>
            <pre class="code-block" style="margin: 0;">#include &lt;pthread.h&gt;
#include &lt;stdio.h&gt;
#include &lt;unistd.h&gt;
#include &lt;sys/wait.h&gt;

int value = 0; // 전역 변수 (초기값 0)
void *runner(void *param);

int main(int argc, char *argv[]) {
    pid_t pid;
    pthread_t tid;
    pthread_attr_t attr;

    pid = fork();

    if (pid == 0) {                              // 자식 프로세스
        pthread_attr_init(&amp;attr);
        pthread_create(&amp;tid, &amp;attr, runner, NULL);
        pthread_join(tid, NULL);
        printf("CHILD: value = %d\\n", value);    // LINE C (출력: 5)
    } else if (pid &gt; 0) {                        // 부모 프로세스
        wait(NULL);
        printf("PARENT: value = %d\\n", value);   // LINE P (출력: 0)
    }
}
void *runner(void *param) {
    value = 5;       // 자식 프로세스 내부 스레드가 value를 5로 변경!
    pthread_exit(0);
}</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--tag-danger-ink); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--tag-danger-ink);">🖥️ 실제 터미널 출력 결과 (LINE C &amp; LINE P):</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">CHILD: value = 5
PARENT: value = 0</pre>
              • <b>LINE C (<code>5</code>)</b>: 자식 프로세스와 그 내부에서 생성된 스레드는 전역 변수 <code>value</code>를 <b>공유</b>하므로 <code>5</code> 출력!<br>
              • <b>LINE P (<code>0</code>)</b>: 부모 프로세스는 <code>fork()</code>로 자식과 메모리 공간이 <b>분리</b>되어 있으므로 초기값 <code>0</code> 유지!
            </div>
          </div>

          <!-- 6주차 코드 3: problem.c -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--tag-danger-ink); margin-bottom: 6px;">[실습 3: problem.c] ⭐ 총 프로세스 개수(6개) &amp; 스레드 개수(2개)</div>
            <pre class="code-block" style="margin: 0;">pid_t pid;
pid = fork();                  // (1) 첫 번째 fork()
if (pid == 0) {                // 자식 C1만 진입
    fork();                    // (2) 두 번째 fork()
    pthread_create( ... );     // (3) 스레드 생성
}
fork();                        // (4) 세 번째 fork()</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--tag-danger-ink); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--tag-danger-ink);">🖥️ 최종 생성 개수 결과:</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">• 전체 고유 프로세스 개수 = 6개 (초기 부모 제외 새로 생성된 자식 프로세스 = 5개)
• 새로 생성된 고유 스레드 개수 = 2개</pre>
              <b>🔍 단계별 추적:</b> (1) 첫 <code>fork()</code> → <code>P0, C1</code> (2개) ▶ (2) <code>if(pid==0)</code> 안 <code>fork()</code> → <code>C1</code>만 손자 <code>C2</code> 생성하여 <code>P0, C1, C2</code> (3개) ▶ (3) <code>C1, C2</code>가 각각 <code>pthread_create</code> 실행 → <b>스레드 2개 생성</b> ▶ (4) 마지막 <code>fork()</code> → 3개 프로세스(<code>P0, C1, C2</code>)가 모두 실행하여 <b>총 6개 프로세스</b>!
            </div>
          </div>

          <!-- 6주차 코드 4: OpenMP -->
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 800; color: var(--accent); margin-bottom: 6px;">[실습 4: 암묵적 스레딩] OpenMP 병렬 리전 &amp; 배열 덧셈 C 코드</div>
            <pre class="code-block" style="margin: 0;">#include &lt;omp.h&gt;
#include &lt;stdio.h&gt;

int main(int argc, char *argv[]) {
    #pragma omp parallel             // 1. 코어 수만큼 스레드 자동 생성 및 병렬 실행
    {
        printf("I am a parallel region.\\n");
    }

    omp_set_num_threads(4);          // 2. 스레드 개수를 4개로 지정
    #pragma omp parallel for         // for 루프를 4개 스레드로 분할 병렬 처리
    for (int i = 0; i &lt; N; i++) {
        c[i] = a[i] + b[i];          // 데이터 병렬성 자동 수행!
    }
    return 0;
}</pre>
            <div style="margin-top: 8px; padding: 10px; background: var(--bg-surface); border-left: 3px solid var(--accent); border-radius: 4px; font-size: 12.5px; line-height: 1.6;">
              <b style="color: var(--accent);">🖥️ 실제 터미널 출력 결과 (4코어 CPU 환경 가정):</b>
              <pre style="margin: 4px 0 6px 0; padding: 8px; background: #0f172a; color: #f8fafc; border-radius: 4px; font-family: var(--font-mono); font-size: 12px;">$ gcc openmp.c -fopenmp
$ ./a.out
I am a parallel region.
I am a parallel region.
I am a parallel region.
I am a parallel region.</pre>
              • <b>핵심 해설</b>: <code>#pragma omp parallel</code> 블록은 CPU 코어(또는 지정된 스레드) 수만큼 스레드를 자동 생성하여 병렬 실행합니다.
            </div>
          </div>
        </div>

        <div class="callout-box info" style="margin-top: 12px;">
          <div class="callout-title">🧩 암묵적 스레딩(Implicit Threading) 4대 기법 요약</div>
          스레드 수가 수백 개로 늘어나면 개발자가 직접 스레드를 생성·관리하기 어렵기 때문에, <b>스레드 생성과 스케줄링 책임을 컴파일러와 런타임 라이브러리에게 넘기는 기법</b>입니다:<br>
          1) <b>스레드 풀 (Thread Pool)</b>: 프로세스 시작 시 미리 일정 개수의 스레드를 만들어 풀에 대기시켜 두고, 작업 요청이 오면 기존 스레드를 재사용 (생성/소멸 오버헤드 제거 및 동시 실행 스레드 최대 개수 제한하여 시스템 과부하 방지).<br>
          2) <b>Fork-Join</b>: 메인 스레드가 작업을 분할(Fork)하여 병렬 실행한 뒤 결과를 취합(Join)하는 동기적 모델.<br>
          3) <b>OpenMP</b>: C/C++/Fortran에서 <code>#pragma omp parallel</code> 컴파일러 지시어로 공유 메모리 병렬 프로그래밍 수행.<br>
          4) <b>GCD (Grand Central Dispatch)</b>: Apple macOS/iOS에서 블록(<code>^{ ... }</code>) 단위의 작업을 디스패치 큐(Serial / Concurrent Queue)에 넣어 스레드 풀에서 자동 스케줄링하는 기술.
        </div>
      </div>
    </section>

    <!-- SECTION: 7장 CPU 스케줄링 4대 알고리즘 & 교안 예제 1~7 전수 풀이 -->
    <section id="os-ch7" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>⚡ 7장: CPU 스케줄링 이론 · 6대 알고리즘 · 교안 예제(문제 1~7) 간트 차트 전수 풀이</span>
        </div>
        <span class="badge badge-amber">중간고사 최대 배점 영역</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-header">
          <div class="concept-card-title">1. CPU-I/O 버스트 사이클 · 선점 vs 비선점 4대 시점 · 디스패처(Dispatcher)</div>
          <span class="badge badge-danger">7장 핵심 이론</span>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 10px;">
          프로세스 실행은 <b>CPU 버스트(CPU 연산 구간)</b>와 <b>I/O 버스트(입출력 대기 구간)</b>의 교대 반복으로 이루어지며, 항상 CPU 버스트로 시작해 마지막 CPU 버스트의 종료 요청으로 끝납니다. 빈도 분포를 보면 <b>짧은 CPU 버스트(I/O 바운드 프로세스)가 매우 많고, 긴 CPU 버스트(CPU 바운드 프로세스)는 적습니다.</b>
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 195px;">핵심 주제</th>
              <th>상세 내용 및 시험 출제 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>CPU 스케줄링이 발생하는<br>4가지 상태 변화 시점</b></td>
              <td><b>① 실행(Running) → 대기(Waiting)</b> (예: I/O 요청이나 <code>wait()</code> 호출로 스스로 CPU 반납)<br>
              <b>② 실행(Running) → 준비(Ready)</b> (예: 타이머 인터럽트/타임 퀀텀 만료로 CPU 강제 반납)<br>
              <b>③ 대기(Waiting) → 준비(Ready)</b> (예: I/O 완료 인터럽트로 고우선순위/짧은 작업이 준비 큐에 진입)<br>
              <b>④ 실행(Running) → 종료(Terminated)</b> (프로세스 실행 완료)<br>
              👉 <b style="color: var(--accent);">비선점형(Non-preemptive)</b>: 오직 <b>①번과 ④번</b>(자발적 반납)에서만 스케줄링 발생!<br>
              👉 <b style="color: var(--tag-danger-ink);">선점형(Preemptive)</b>: <b>①, ②, ③, ④ 모든 시점</b>에서 실행 중인 프로세스의 CPU를 강제로 빼앗을 수 있음! (공유 데이터 경쟁 조건 및 커널 선점 문제 고려 필요)</td>
            </tr>
            <tr>
              <td><b>디스패처 (Dispatcher)<br>&amp; 디스패치 지연시간</b></td>
              <td>• <b>디스패처(Dispatcher)</b>: 단기 스케줄러가 선택한 프로세스에게 <b>실제로 CPU 제어권을 넘겨주는 모듈</b>.<br>
              • <b>디스패처의 3대 기능</b>: <b>① 문맥 교환(Context Switch), ② 사용자 모드로 전환(Switching to User Mode), ③ 사용자 프로그램의 적절한 위치(PC)로 점프(Jumping)하여 실행 재개</b>.<br>
              • <b>디스패치 지연 (Dispatch Latency)</b>: 디스패처가 하나의 프로세스를 정지시키고 다른 프로세스의 실행을 시작하기까지 걸리는 시간 (짧을수록 좋음).</td>
            </tr>
            <tr>
              <td><b>스케줄링의 6대 목표</b></td>
              <td>① <b>공평성(Fairness)</b>: 모든 프로세스에게 공정한 CPU 배분 / ② <b>효율성(Efficiency)</b>: 유휴 시간 없이 CPU 사용 / ③ <b>안정성(Stability)</b>: 우선순위 및 자원 점유 파괴 방지 / ④ <b>확장성(Scalability)</b> / ⑤ <b>반응 시간 보장</b> / ⑥ <b>무한 연기(Starvation) 방지</b></td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-header" style="margin-top: 22px;">
          <div class="concept-card-title">2. CPU 스케줄링 6대 알고리즘 완벽 비교표</div>
          <span class="badge badge-amber">선점 여부 · 기아 · 해결책</span>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 155px;">알고리즘</th>
              <th style="width: 95px;">선점 여부</th>
              <th style="width: 170px;">CPU 할당 선정 기준</th>
              <th>핵심 특징 및 치명적 문제점</th>
              <th style="width: 165px;">해결책 / 비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>FCFS<br>(선입선출)</b></td>
              <td><b>비선점</b></td>
              <td>준비 큐에 먼저 도착한 순서 (FIFO 큐)</td>
              <td>구현이 가장 단순하나, 도착 순서에 따라 평균 대기시간 편차가 극심하며 앞선 긴 작업 때문에 뒤따르는 짧은 작업들이 모두 묶이는 <b>콘보이 효과(Convoy Effect, 호위 효과)</b> 발생</td>
              <td>시분할(대화형) 시스템에 부적합</td>
            </tr>
            <tr>
              <td><b>SJF<br>(최단 작업 우선)</b></td>
              <td><b>비선점</b><br>(기본)</td>
              <td><b>다음 CPU 버스트 시간</b>이 가장 짧은 프로세스</td>
              <td>주어진 프로세스 집합에 대해 <b>항상 최소 평균 대기시간(Minimum AWT)을 보장(Optimal)</b>함.<br>단점: ① 다음 CPU 버스트 길이를 미리 정확히 알 수 없음, ② 긴 작업이 영원히 밀리는 <b>기아 현상(Starvation)</b> 발생</td>
              <td>① <b>지수 이동평균 공식</b>으로 버스트 예측<br>② <b>에이징(Aging)</b>으로 기아 해결</td>
            </tr>
            <tr>
              <td><b>SRTF<br>(최단 잔여시간 우선)</b></td>
              <td><b style="color: var(--tag-danger-ink);">선점형</b></td>
              <td><b>남은 CPU 버스트 시간(Remaining Time)</b>이 가장 짧은 프로세스</td>
              <td><b>선점형 SJF</b>. 새로운 프로세스가 도착했을 때 현재 실행 중인 프로세스의 <b>남은 시간보다 새 프로세스의 버스트가 더 짧으면 즉시 CPU를 선점!</b> 비선점 SJF보다 평균 대기시간이 더 짧음</td>
              <td>기아 현상 해결을 위해 <b>에이징(Aging)</b> 적용</td>
            </tr>
            <tr>
              <td><b>Round Robin<br>(RR, 라운드로빈)</b></td>
              <td><b style="color: var(--tag-danger-ink);">선점형</b></td>
              <td>도착 순서 + <b>고정 시간 할당량(Time Quantum, <code>q</code>)</b></td>
              <td>시분할 시스템을 위해 설계됨. 각 프로세스는 최대 <code>q</code>만큼만 실행 후 타이머 인터럽트로 선점되어 준비 큐 맨 뒤로 이동 (응답 시간 우수, 기아 없음).<br>• <b><code>q</code>가 너무 크면 → FCFS와 동일해짐</b><br>• <b><code>q</code>가 너무 작으면 → 잦은 문맥 교환 오버헤드로 효율 급락</b></td>
              <td>CPU 버스트의 약 <b>80%가 타임 퀀텀(<code>q</code>)보다 짧도록</b> 10~100ms로 설정</td>
            </tr>
            <tr>
              <td><b>Priority<br>(우선순위)</b></td>
              <td><b>선점 / 비선점</b> 모두 가능</td>
              <td>우선순위가 가장 높은 프로세스 (교안 기준: <b>숫자가 작을수록 높은 우선순위</b>)</td>
              <td>SJF도 다음 버스트 시간의 역수를 우선순위로 둔 우선순위 스케줄링의 일종임.<br>치명적 문제점: 낮은 우선순위 프로세스가 영원히 실행되지 못하는 <b>기아 현상(Starvation / Indefinite Blocking)</b> 발생</td>
              <td>대기 시간에 비례해 우선순위를 점진적으로 높이는 <b>에이징(Aging)</b>으로 해결!</td>
            </tr>
            <tr>
              <td><b>MLQ vs MLFQ<br>(다단계 큐 / 피드백 큐)</b></td>
              <td><b>선점형</b></td>
              <td>전경(대화형 RR) 큐 / 배경(일괄 FCFS) 큐 분리</td>
              <td>• <b>다단계 큐(MLQ)</b>: 프로세스가 한 큐에 영구 배정되어 <b>큐 간 이동 불가</b> (기아 위험)<br>• <b>다단계 피드백 큐(MLFQ)</b>: CPU를 많이 쓰면 하위 큐로 강등, 오래 대기하면 상위 큐로 승격하여 <b>큐 간 이동 허용!</b> (가장 유연하고 일반적이나 설계 복잡)</td>
              <td>MLFQ는 짧은 작업 우대 + 에이징을 통한 기아 방지 동시 달성</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-header" style="margin-top: 26px;">
          <div class="concept-card-title">3. [교안 전수 수록] 7장 강의 슬라이드 모든 스케줄링 예제 &amp; 문제 1~7 간트 차트 완벽 풀이</div>
          <div>
            <span class="badge badge-danger">7주차 강의 예제 100%</span>
            <span class="badge badge-amber">간트 차트 + 대기/반환시간</span>
          </div>
        </div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 12px;">
          7주차 강의 슬라이드와 녹음본에서 교수님이 직접 풀어주신 <b>모든 스케줄링 예제(예제 2건 + 문제 1~7)</b>의 간트 차트와 개별 대기 시간·반환 시간 풀이입니다. 시험에 그대로 또는 수치만 살짝 바뀌어 출제됩니다.
        </p>

        <!-- [예제 A & 예제 B] 도착 시간이 0, 3, 6으로 다른 FCFS vs RR(q=10) 비교 -->
        <div style="padding: 14px; background: var(--bg-surface-elevated); border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 14px;">
          <div style="font-weight: 800; font-size: 15px; color: var(--accent); margin-bottom: 8px;">
            📌 [교안 기본 예제] 도착 시간이 다른 경우 (P1: 도착 0 / 버스트 30, P2: 도착 3 / 버스트 18, P3: 도착 6 / 버스트 9)
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 14px;">
            <div>
              <div style="font-weight: 700; margin-bottom: 6px;">① FCFS 적용 시 (비선점)</div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 30;">P1 (0~30)</div>
                <div class="gantt-block" style="flex: 18;">P2 (30~48)</div>
                <div class="gantt-block" style="flex: 9;">P3 (48~57)</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>30</span><span>48</span><span>57</span></div>
              <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 8px; line-height: 1.6;">
                • <b>대기 시간(WT)</b>: P1 = <code>0 - 0 = 0</code>, P2 = <code>30 - 3 = 27</code>, P3 = <code>48 - 6 = 42</code><br>
                &nbsp;&nbsp;→ <b>평균 대기 시간(AWT)</b> = <code>(0 + 27 + 42) / 3 = 69 / 3 =</code> <b>23 초</b><br>
                • <b>반환 시간(TT = WT + Burst)</b>: P1 = <code>30</code>, P2 = <code>27 + 18 = 45</code>, P3 = <code>42 + 9 = 51</code><br>
                &nbsp;&nbsp;→ <b>평균 반환 시간(ATT)</b> = <code>(30 + 45 + 51) / 3 = 126 / 3 =</code> <b>42 초</b>
              </div>
            </div>
            <div>
              <div style="font-weight: 700; margin-bottom: 6px;">② Round Robin (타임 슬라이스 <code>q = 10초</code>) 적용 시</div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 10;">P1</div>
                <div class="gantt-block" style="flex: 10;">P2</div>
                <div class="gantt-block" style="flex: 9;">P3</div>
                <div class="gantt-block" style="flex: 10;">P1</div>
                <div class="gantt-block" style="flex: 8;">P2</div>
                <div class="gantt-block" style="flex: 10;">P1</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>10</span><span>20</span><span>29</span><span>39</span><span>47</span><span>57</span></div>
              <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 8px; line-height: 1.6;">
                • <b>대기 시간(WT = 완료 - 도착 - 버스트)</b>:<br>
                &nbsp;&nbsp;- P1: <code>(0) + (29 - 10) + (47 - 39) = 19 + 8 =</code> <b>27 초</b> (또는 <code>57 - 0 - 30 = 27</code>)<br>
                &nbsp;&nbsp;- P2: <code>(10 - 3) + (39 - 20) = 7 + 19 =</code> <b>26 초</b> (또는 <code>47 - 3 - 18 = 26</code>)<br>
                &nbsp;&nbsp;- P3: <code>20 - 6 =</code> <b>14 초</b> (29초에 종료! <code>29 - 6 - 9 = 14</code>)<br>
                &nbsp;&nbsp;→ <b>평균 대기 시간(AWT)</b> = <code>(27 + 26 + 14) / 3 = 67 / 3 =</code> <b>22.33 초</b><br>
                • <b>반환 시간(TT)</b>: P1 = <code>57</code>, P2 = <code>47 - 3 = 44</code>, P3 = <code>29 - 6 = 23</code> → <b>ATT = 41.33 초</b>
              </div>
            </div>
          </div>
        </div>

        <!-- [문제 1 & 문제 2 & 문제 3] FCFS 도착 순서에 따른 콘보이 효과 비교 -->
        <div style="padding: 14px; background: var(--bg-surface-elevated); border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 14px;">
          <div style="font-weight: 800; font-size: 15px; color: var(--accent); margin-bottom: 8px;">
            📌 [교안 문제 1 · 2 · 3] FCFS 도착 순서 역전과 콘보이 효과(Convoy Effect) 증명
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
            <div style="background: var(--bg-surface); padding: 10px; border-radius: 6px; border: 1px solid var(--border-color);">
              <div style="font-weight: 700; color: var(--tag-danger-ink); margin-bottom: 4px;">[문제 1] P1(24), P2(3), P3(3)가 P1→P2→P3 순 도착</div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 24;">P1 (0~24)</div>
                <div class="gantt-block" style="flex: 3;">P2</div>
                <div class="gantt-block" style="flex: 3;">P3</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>24</span><span>27</span><span>30</span></div>
              <div style="font-size: 12.5px; margin-top: 6px;">
                • 대기시간: P1=0, P2=24, P3=27<br>
                • <b>평균 대기시간(AWT)</b> = <code>(0 + 24 + 27) / 3 =</code> <b style="color: var(--tag-danger-ink);">17 ms</b><br>
                • <b>콘보이 효과 발생!</b> (앞선 긴 P1 때문에 짧은 P2, P3가 24ms 이상 대기)
              </div>
            </div>

            <div style="background: var(--bg-surface); padding: 10px; border-radius: 6px; border: 1px solid var(--border-color);">
              <div style="font-weight: 700; color: var(--tag-green-ink); margin-bottom: 4px;">[문제 2] 동일 작업이 P2(3)→P3(3)→P1(24) 순 도착</div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 3;">P2</div>
                <div class="gantt-block" style="flex: 3;">P3</div>
                <div class="gantt-block" style="flex: 24;">P1 (6~30)</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>3</span><span>6</span><span>30</span></div>
              <div style="font-size: 12.5px; margin-top: 6px;">
                • 대기시간: P2=0, P3=3, P1=6 (번호순: P1=6, P2=0, P3=3)<br>
                • <b>평균 대기시간(AWT)</b> = <code>(6 + 0 + 3) / 3 =</code> <b style="color: var(--tag-green-ink);">3 ms</b><br>
                • 짧은 작업이 먼저 오자 평균 대기시간이 <b>17ms → 3ms로 대폭 단축!</b>
              </div>
            </div>

            <div style="background: var(--bg-surface); padding: 10px; border-radius: 6px; border: 1px solid var(--border-color);">
              <div style="font-weight: 700; color: var(--accent); margin-bottom: 4px;">[문제 3] FCFS 도착시간 다름: P1(0, 10), P2(1, 29), P3(2, 3)</div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 10;">P1 (0~10)</div>
                <div class="gantt-block" style="flex: 29;">P2 (10~39)</div>
                <div class="gantt-block" style="flex: 3;">P3</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>10</span><span>39</span><span>42</span></div>
              <div style="font-size: 12.5px; margin-top: 6px;">
                • 대기시간(시작-도착): P1=<code>0-0=0</code>, P2=<code>10-1=9</code>, P3=<code>39-2=37</code><br>
                • <b>AWT</b> = <code>(0 + 9 + 37) / 3 = 46 / 3 =</code> <b>15.33 ms</b><br>
                • 반환시간(완료-도착): P1=10, P2=38, P3=40 → <b>ATT = 29.33 ms</b>
              </div>
            </div>
          </div>
        </div>

        <!-- [문제 4 & 문제 5] 비선점 SJF vs 선점 SRTF -->
        <div style="padding: 14px; background: var(--bg-surface-elevated); border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 14px;">
          <div style="font-weight: 800; font-size: 15px; color: var(--tag-danger-ink); margin-bottom: 8px;">
            📌 [교안 문제 4 · 5] ⭐ 비선점형 SJF vs 선점형 SJF (SRTF) 완벽 비교 (교수님 출제 1순위!)
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 14px;">
            <div>
              <div style="font-weight: 700; margin-bottom: 6px;">[문제 4] 비선점 SJF (모두 0초 도착: P1=6, P2=8, P3=7, P4=3)</div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 3;">P4 (0~3)</div>
                <div class="gantt-block" style="flex: 6;">P1 (3~9)</div>
                <div class="gantt-block" style="flex: 7;">P3 (9~16)</div>
                <div class="gantt-block" style="flex: 8;">P2 (16~24)</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>3</span><span>9</span><span>16</span><span>24</span></div>
              <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 8px; line-height: 1.6;">
                • 버스트 오름차순 실행: <b>P4(3) → P1(6) → P3(7) → P2(8)</b><br>
                • 대기 시간: P4 = 0, P1 = 3, P3 = 9, P2 = 16<br>
                • <b>평균 대기 시간(AWT)</b> = <code>(3 + 16 + 9 + 0) / 4 = 28 / 4 =</code> <b>7 ms</b><br>
                • (만약 FCFS로 실행했다면 AWT = <code>(0 + 6 + 14 + 21) / 4 = 10.25 ms</code>)
              </div>
            </div>

            <div>
              <div style="font-weight: 700; color: var(--tag-danger-ink); margin-bottom: 6px;">[문제 5] SRTF (선점형 SJF): P1(0, 8), P2(1, 4), P3(2, 9), P4(3, 5)</div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 1;">P1</div>
                <div class="gantt-block" style="flex: 4;">P2 (1~5)</div>
                <div class="gantt-block" style="flex: 5;">P4 (5~10)</div>
                <div class="gantt-block" style="flex: 7;">P1 (10~17)</div>
                <div class="gantt-block" style="flex: 9;">P3 (17~26)</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>1</span><span>5</span><span>10</span><span>17</span><span>26</span></div>
              <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 8px; line-height: 1.6;">
                • <code>t = 0</code>: P1 시작 / <code>t = 1</code>: P2(버스트 4) 도착 &lt; P1 잔여(7) → <b>P2가 즉시 선점!</b><br>
                • <code>t = 5</code>: P2 종료 후 남은 P1(7), P3(9), P4(5) 중 <b>P4 → P1 → P3 순 실행</b><br>
                • <b>SRTF 대기 시간</b>: P1 = <code>(10 - 1) = 9</code>, P2 = <code>1 - 1 = 0</code>, P3 = <code>17 - 2 = 15</code>, P4 = <code>5 - 3 = 2</code><br>
                &nbsp;&nbsp;→ <b>SRTF 평균 대기 시간(AWT)</b> = <code>(9 + 0 + 15 + 2) / 4 = 26 / 4 =</code> <b style="color: var(--tag-danger-ink);">6.5 ms</b><br>
                • <b>[참고] 만약 문제 5를 비선점형 SJF로 풀면?</b><br>
                &nbsp;&nbsp;- 간트 차트: <code>P1(0~8) → P2(8~12) → P4(12~17) → P3(17~26)</code><br>
                &nbsp;&nbsp;- 대기 시간: P1=<code>0</code>, P2=<code>8-1=7</code>, P4=<code>12-3=9</code>, P3=<code>17-2=15</code> → <b>비선점 AWT = <code>31 / 4 =</code> 7.75 ms</b>
              </div>
            </div>
          </div>
        </div>

        <!-- [문제 6 & 문제 7] Round Robin(q=4) & 우선순위 스케줄링 -->
        <div style="padding: 14px; background: var(--bg-surface-elevated); border-radius: 8px; border: 1px solid var(--border-color);">
          <div style="font-weight: 800; font-size: 15px; color: var(--accent); margin-bottom: 8px;">
            📌 [교안 문제 6 · 7] Round Robin (<code>q = 4</code>) &amp; 우선순위 스케줄링 (Priority Scheduling)
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 14px;">
            <div>
              <div style="font-weight: 700; margin-bottom: 6px;">[문제 6] Round Robin (<code>q = 4 ms</code>, 0초 도착: P1=24, P2=3, P3=3)</div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 4;">P1</div>
                <div class="gantt-block" style="flex: 3;">P2</div>
                <div class="gantt-block" style="flex: 3;">P3</div>
                <div class="gantt-block" style="flex: 4;">P1</div>
                <div class="gantt-block" style="flex: 4;">P1</div>
                <div class="gantt-block" style="flex: 4;">P1</div>
                <div class="gantt-block" style="flex: 4;">P1</div>
                <div class="gantt-block" style="flex: 4;">P1</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>4</span><span>7</span><span>10</span><span>14</span><span>18</span><span>22</span><span>26</span><span>30</span></div>
              <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 8px; line-height: 1.6;">
                • P1이 0~4 실행 후 선점 → P2(4~7, 3ms 완주) → P3(7~10, 3ms 완주) → 이후 남은 작업은 P1뿐이므로 10~30까지 P1이 4ms씩 연속 실행<br>
                • 대기 시간: P1 = <code>10 - 4 = 6</code>, P2 = <code>4</code>, P3 = <code>7</code><br>
                • <b>평균 대기 시간(AWT)</b> = <code>(6 + 4 + 7) / 3 = 17 / 3 =</code> <b>5.66 ms</b>
              </div>
            </div>

            <div>
              <div style="font-weight: 700; margin-bottom: 6px;">[문제 7] 우선순위 스케줄링 (숫자가 작을수록 고우선순위!)</div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 4px;">
                조건: P1(버스트 10, 우선순위 3), P2(1, 1), P3(2, 4), P4(1, 5), P5(5, 2)
              </div>
              <div class="gantt-chart-vis">
                <div class="gantt-block" style="flex: 1;">P2</div>
                <div class="gantt-block" style="flex: 5;">P5 (1~6)</div>
                <div class="gantt-block" style="flex: 10;">P1 (6~16)</div>
                <div class="gantt-block" style="flex: 2;">P3</div>
                <div class="gantt-block" style="flex: 1;">P4</div>
              </div>
              <div class="gantt-time-labels"><span>0</span><span>1</span><span>6</span><span>16</span><span>18</span><span>19</span></div>
              <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 8px; line-height: 1.6;">
                • 우선순위 순서(1→2→3→4→5): <b>P2(1) → P5(5) → P1(10) → P3(2) → P4(1)</b><br>
                • 대기 시간: P2 = <code>0</code>, P5 = <code>1</code>, P1 = <code>6</code>, P3 = <code>16</code>, P4 = <code>18</code><br>
                • <b>평균 대기 시간(AWT)</b> = <code>(0 + 1 + 6 + 16 + 18) / 5 = 41 / 5 =</code> <b>8.2 ms</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// 2. 운영체제 실전 모의고사 (제1회 24문항 & 제2회 파이널 10선)
window.EXAM_DATABASE.os = {
  id: "os",
  title: "운영체제",
  totalQuestions: 24,
  maxScore: 100,
  exams: [
    {
      id: "os_exam1",
      name: "제1회 운영체제 중간고사 실전 모의고사 (24문항)",
      tag: "녹음본 19대 유형 전수 반영 · 24문항 100점",
      desc: "수업 녹음본(09/23, 6주차, 7주차) 정밀 분석 100% 반영: fork() 리턴값·전역변수 독립성(5)·연쇄fork(), execlp 메모리 완전 대체, IPC 환형버퍼 수식, FCFS/SJF/SRTF/RR 간트 차트 및 평균 대기 시간(AWT) 계산, 지수 이동평균 버스트 예측, 에이징, 타임 퀀텀",
      questions: [
        // [객관식 3문항: 각 3점 = 9점]
        {
          id: 1, type: "choice", score: 3, origin: "1장 듀얼 모드 연산",
          text: "다음 중 커널 모드(Kernel Mode, mode bit=0)에서만 실행될 수 있는 특권 명령(Privileged Instruction)에 해당하는 것을 고르시오.",
          options: [
            "A. 사용자 정의 루프문(for, while) 실행 및 산술 연산(ADD, SUB)",
            "B. 타이머(Timer) 설정 및 인터럽트 비활성화(Disable Interrupts)",
            "C. 사용자 공간 메모리 변수 읽기 및 쓰기",
            "D. 표준 라이브러리 printf() 함수를 통한 콘솔 포맷 문자열 처리"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "타이머 설정, 인터럽트 금지/허용, I/O 디바이스 직접 제어 등 하드웨어 보호와 관련된 명령은 커널 모드(0)에서만 실행 가능한 특권 명령입니다."
        },
        {
          id: 2, type: "choice", score: 3, origin: "Part 3 스레드 자원 구조",
          text: "단일 프로세스 내에서 여러 스레드(Thread)를 운용할 때, 스레드끼리 서로 공유하지 않고 '각 스레드마다 독립적으로 개별 소유'하는 요소로만 바르게 짝지어진 것은?",
          options: [
            "A. 코드 영역(Code Section), 힙 영역(Heap Section)",
            "B. 전역 변수(Data Section), 열린 파일 목록(Open Files)",
            "C. 스택 영역(Stack), 레지스터 세트(Register Set), 프로그램 카운터(PC)",
            "D. 프로세스 ID(PID), 텍스트 영역(Text), 공유 메모리(Shared Memory)"
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "스레드는 프로세스의 Code, Data, Heap 영역과 열린 파일 등 OS 자원을 공유하며, 독자적인 함수 실행 흐름과 연산 상태를 유지하기 위해 Stack, Register Set, Program Counter(PC)만을 독립적으로 소유합니다."
        },
        {
          id: 3, type: "choice", score: 3, origin: "Part 4 CPU 스케줄링 분류",
          text: "다음 중 비선점형(Non-preemptive) 스케줄링 알고리즘으로만 올바르게 묶인 것은?",
          options: [
            "A. Round Robin, SRTF (Shortest Remaining Time First)",
            "B. FCFS (First-Come, First-Served), 기본 비선점형 SJF (Shortest Job First)",
            "C. 다단계 피드백 큐 (MLFQ), Round Robin",
            "D. 선점형 우선순위 스케줄링, SRTF"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "FCFS와 기본 비선점형 SJF는 한 번 CPU를 할당받으면 자발적으로 I/O를 요청하거나 프로세스가 종료될 때까지 CPU를 빼앗기지 않는 비선점형 알고리즘입니다."
        },

        // [주관식 단답형 10문항: 각 3점 = 30점]
        {
          id: 4, type: "short", score: 3, origin: "Part 1 유형 1: fork() 자식 리턴값",
          text: "UNIX/Linux 환경에서 fork() 시스템 콜을 성공적으로 호출했을 때, 새로 생성된 '자식 프로세스'에게 반환되는 고유 리턴값 숫자는 무엇인가?",
          placeholder: "숫자 입력 (예: 0)",
          answers: ["0"],
          explanation: "자식 프로세스에게는 숫자 0이 반환되며, 부모 프로세스에게는 자식의 PID(>0)가 반환됩니다. 호출 실패 시에는 -1이 반환됩니다."
        },
        {
          id: 5, type: "short", score: 3, origin: "Part 1 유형 1: fork() 부모 리턴값",
          text: "fork() 시스템 콜 호출 성공 시, '부모 프로세스'가 자식 프로세스를 식별 및 제어하기 위해 운영체제로부터 반환받는 값은 무엇인가?",
          placeholder: "식별값 명칭 입력 (예: 자식 PID)",
          answers: ["자식PID", "자식프로세스ID", "자식프로세스PID", "PID", "childpid", "자식의PID", "자식의 PID"],
          explanation: "부모 프로세스는 새로 생성된 자식 프로세스의 PID(Process ID, 0보다 큰 양의 정수)를 반환받습니다."
        },
        {
          id: 6, type: "short", score: 3, origin: "2장 PCB 구조",
          text: "운영체제가 각 프로세스를 관리하기 위해 프로세스 상태, 프로그램 카운터(PC), CPU 레지스터, 스케줄링 정보를 커널 공간에 저장해 두는 핵심 자료구조의 영문 약어(3글자)는?",
          placeholder: "영문 약어 3글자 (예: PCB)",
          answers: ["PCB", "ProcessControlBlock"],
          explanation: "PCB(Process Control Block, 프로세스 제어 블록)는 문맥 교환 시 CPU의 실행 문맥을 저장하고 복원하는 데 사용됩니다."
        },
        {
          id: 7, type: "short", score: 3, origin: "Part 4 유형 14: 디스패처",
          text: "CPU 스케줄러가 준비 큐에서 다음 실행할 프로세스를 선택한 후, 실제로 CPU의 제어권을 해당 프로세스에게 넘겨주는(문맥 교환, 사용자 모드 전환, 프로그램 시작 위치 점프) 운영체제 모듈의 명칭은?",
          placeholder: "모듈 명칭 입력 (예: 디스패처)",
          answers: ["디스패처", "dispatcher"],
          explanation: "디스패처(Dispatcher)는 스케줄러가 선택한 프로세스에게 실질적으로 CPU를 할당해 주는 모듈입니다."
        },
        {
          id: 8, type: "short", score: 3, origin: "Part 4 유형 14: 디스패치 지연",
          text: "디스패처가 하나의 프로세스를 정지하고 다른 프로세스의 실행을 시작하기까지 소요되는 순수 오버헤드 지연 시간의 명칭은?",
          placeholder: "지연시간 명칭 입력 (예: 디스패치 지연시간)",
          answers: ["디스패치지연시간", "디스패치지연", "dispatchlatency", "디스패치레이턴시"],
          explanation: "Dispatch Latency(디스패치 지연시간)는 문맥 교환 시 문맥 저장 및 복원에 소요되는 시간으로, 짧을수록 시스템 성능이 우수합니다."
        },
        {
          id: 9, type: "short", score: 3, origin: "Part 4 유형 14: 호위 효과",
          text: "FCFS 스케줄링에서 버스트 시간이 매우 긴 프로세스가 CPU를 먼저 독점하여, 뒤이어 도착한 짧은 프로세스들이 장시간 대기하게 되어 시스템 전체의 평균 대기시간이 급증하는 비효율 현상은?",
          placeholder: "현상 명칭 입력 (예: 호위 효과)",
          answers: ["호위효과", "convoyeffect", "콘보이효과", "호소효과"],
          explanation: "호위 효과(Convoy Effect / 콘보이 효과)는 FCFS 스케줄링의 대표적 한계점입니다."
        },
        {
          id: 10, type: "short", score: 3, origin: "Part 4 유형 14: 에이징",
          text: "SJF 또는 우선순위 스케줄링에서 실행 시간이 긴 작업이나 우선순위가 낮은 프로세스가 무한히 CPU를 할당받지 못하는 기아 현상(Starvation)을 해결하기 위해, 대기 시간에 비례하여 우선순위를 점진적으로 높여주는 기법은?",
          placeholder: "기법 명칭 입력 (예: 에이징)",
          answers: ["에이징", "aging", "노화"],
          explanation: "에이징(Aging)을 적용하면 준비 큐에서 오랫동안 대기한 프로세스의 우선순위가 점차 높아져 결국 반드시 실행됩니다."
        },
        {
          id: 11, type: "short", score: 3, origin: "Part 4 유형 14: 타임 퀀텀",
          text: "Round Robin(RR) 스케줄링에서 각 프로세스가 CPU를 연속적으로 독점 사용할 수 있도록 할당된 고정된 작은 실행 시간 단위를 무엇이라 부르는가?",
          placeholder: "명칭 입력 (예: 타임 퀀텀)",
          answers: ["타임퀀텀", "타임슬라이스", "timequantum", "timeslice", "퀀텀"],
          explanation: "Time Quantum(타임 퀀텀 또는 타임 슬라이스)이 만료되면 타이머 인터럽트를 통해 다음 프로세스로 선점 교체됩니다."
        },
        {
          id: 12, type: "short", score: 3, origin: "Part 2 유형 6: 생산자-소비자 환형 버퍼",
          text: "공유 메모리 환경의 생산자-소비자 문제에서 in 포인터와 out 포인터를 사용하는 환형 버퍼(Circular Buffer)가 **'비어 있는(Empty) 상태'를 판별하는 C언어 조건식**을 쓰시오.",
          placeholder: "조건식 입력 (예: in == out)",
          answers: ["in==out", "in == out", "in==out;"],
          explanation: "버퍼가 비어 있는 조건은 in 포인터와 out 포인터가 일치할 때(in == out)입니다."
        },
        {
          id: 13, type: "short", score: 3, origin: "Part 3 유형 11: 동시성 vs 병렬성",
          text: "물리적으로 여러 코어가 동일 시각에 작업을 동시에 실행하는 '병렬성(Parallelism)'과 달리, **단일 코어에서 CPU가 여러 작업을 시분할(Time-sharing) 인터리빙으로 번갈아 처리하여 마치 동시에 실행되는 것처럼 보이는 개념**은?",
          placeholder: "개념 명칭 입력 (예: 동시성)",
          answers: ["동시성", "concurrency"],
          explanation: "동시성(Concurrency)은 단일 코어에서 시분할로 빠르게 교대 수행하여 사용자에게 동시 실행 느낌을 주는 논리적 개념입니다."
        },

        // [코드 실행 결과 예측 및 시스템 콜 단답 4문항: 각 4점 = 16점]
        {
          id: 14, type: "short", score: 4, origin: "Part 1 유형 3: 연쇄 fork() 프로세스 개수",
          text: "다음 C 언어 코드가 실행되었을 때, 콘솔 화면에 <b>Hello</b> 문자열이 출력되는 총 횟수는 몇 번인가?<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n\nint main() {\n    for (int i = 0; i &lt; 4; i++) {\n        fork();\n    }\n    printf(\"Hello\\n\");\n    return 0;\n}</pre>",
          placeholder: "출력 횟수 숫자 입력 (예: 16)",
          answers: ["16", "16번", "16회"],
          explanation: "fork()를 4번 연속 호출하면 2⁴ = 16개의 프로세스가 생성됩니다. 루프 종료 후 16개 프로세스가 각각 printf()를 1회씩 실행하므로 'Hello'는 총 16번 출력됩니다."
        },
        {
          id: 15, type: "short", score: 4, origin: "Part 1 유형 2: fork() 메모리 독립성 (교수님 출제스포)",
          text: "다음 C 언어 코드가 정상적으로 실행되었을 때, 콘솔 화면에 출력되는 <b>PARENT: value =</b> 뒤의 정수값은 무엇인가?<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;sys/wait.h&gt;\n\nint value = 5; // 전역 변수\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) { // 자식 프로세스\n        value += 15;\n        return 0;\n    } else if (pid &gt; 0) { // 부모 프로세스\n        wait(NULL);\n        printf(\"PARENT: value = %d\\n\", value);\n    }\n    return 0;\n}</pre>",
          placeholder: "정수 숫자만 입력 (예: 5)",
          answers: ["5"],
          explanation: "<b>정답: 5</b><br>자식 프로세스는 부모의 메모리 주소 공간을 복사하여 '완전히 별도의 독립된 주소 공간'을 가집니다. 자식이 value를 20으로 수정하더라도 이는 자식 전용 메모리에만 반영되며, 부모 프로세스의 메모리 영역에 있는 value는 본래 값인 <b>5</b>를 그대로 유지합니다. (교수님 직전 강의 직접 언급: '이거 시험 문제 낼 수 있죠!')"
        },
        {
          id: 16, type: "short", score: 4, origin: "Part 1 유형 4: execlp 시스템 콜 동작 메커니즘",
          text: "다음 C 코드 실행 시, 자식 프로세스 블록의 <code>printf(\"LINE J\\n\");</code> 문장이 콘솔 화면에 출력되는지 여부를 쓰시오. (출력됨 / 출력안됨 중 택1)<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>pid = fork();\nif (pid == 0) {\n    execlp(\"/bin/ls\", \"ls\", NULL);\n    printf(\"LINE J\\n\");\n} else {\n    wait(NULL);\n    printf(\"Child Complete\\n\");\n}</pre>",
          placeholder: "출력 여부 입력 (출력안됨)",
          answers: ["출력안됨", "출력 안 됨", "출력되지않음", "출력되지 않음", "미출력", "아니오", "X", "false", "실행안됨", "실행 안 됨", "no"],
          explanation: "<b>정답: 출력안됨 (절대 실행되지 않음)</b><br>exec() 계열 시스템 콜은 현재 프로세스의 코드, 데이터, 스택 등 주소 공간 전체를 새로운 프로그램(/bin/ls)으로 완전히 덮어씁니다(대체). 호출 성공 시 기존 코드는 사라지고 새 프로그램의 main()부터 실행되므로, execlp() 뒤에 있는 printf(\"LINE J\\n\")은 결코 실행될 수 없습니다."
        },
        {
          id: 17, type: "calc", score: 4, origin: "Part 4 유형 17: 지수 이동평균 버스트 예측",
          text: "운영체제에서 다음 CPU 버스트 시간을 지수 이동평균 공식 <b>τ<sub>n+1</sub> = α·t<sub>n</sub> + (1 - α)·τ<sub>n</sub></b>으로 예측하고자 한다.<br>" +
                "가중치 <b>α = 0.5</b>, 직전 예측 버스트 시간 <b>τ<sub>n</sub> = 10 ms</b>, 최근 실제 CPU 버스트 측정 시간 <b>t<sub>n</sub> = 6 ms</b>일 때, 다음 예측 버스트 시간 <b>τ<sub>n+1</sub></b>은 몇 ms인가?",
          placeholder: "예측값 숫자 입력 (예: 8)",
          answers: ["8", "8ms", "8.0"],
          explanation: "공식에 대입하면:<br>τ<sub>n+1</sub> = (0.5 × 6) + (1 - 0.5) × 10 = 3 + 5 = <b>8 ms</b> 입니다."
        },

        // [간트 차트 및 계산형 4문항: 각 7점 = 28점]
        {
          id: 18, type: "calc", score: 7, origin: "Part 4 유형 15: FCFS 스케줄링 계산",
          text: "다음 3개 프로세스가 도착 시간 0에 준비 큐에 <b>P1 → P2 → P3</b> 순서로 도착하였다.<br><br>" +
                "<table class='gantt-table'>" +
                "<tr><th>프로세스</th><th>도착 시간 (Arrival)</th><th>CPU 버스트 시간 (Burst)</th></tr>" +
                "<tr><td><b>P1</b></td><td>0 ms</td><td><b>24 ms</b></td></tr>" +
                "<tr><td><b>P2</b></td><td>0 ms</td><td><b>3 ms</b></td></tr>" +
                "<tr><td><b>P3</b></td><td>0 ms</td><td><b>3 ms</b></td></tr>" +
                "</table>" +
                "<b>FCFS 알고리즘</b>을 적용할 때의 <b>평균 대기 시간(Average Waiting Time)</b>을 밀리초(ms) 단위 숫자로 계산하시오.",
          placeholder: "평균 대기시간 숫자만 입력 (예: 17)",
          answers: ["17", "17ms", "17.0"],
          explanation: "<b>[간트 차트 작성]</b><br>" +
                       "<div class='gantt-chart-vis'>" +
                       "  <div class='gantt-block' style='flex: 24;'>P1 (0 ~ 24)</div>" +
                       "  <div class='gantt-block' style='flex: 3;'>P2 (24 ~ 27)</div>" +
                       "  <div class='gantt-block' style='flex: 3;'>P3 (27 ~ 30)</div>" +
                       "</div>" +
                       "<div class='gantt-time-labels'><span>0</span><span>24</span><span>27</span><span>30</span></div><br>" +
                       "• P1 대기시간: 0 ms<br>" +
                       "• P2 대기시간: 24 ms<br>" +
                       "• P3 대기시간: 27 ms<br>" +
                       "• <b>총 대기시간</b>: 0 + 24 + 27 = 51 ms<br>" +
                       "• <b>평균 대기시간(AWT)</b>: 51 / 3 = <b>17 ms</b>"
        },
        {
          id: 19, type: "calc", score: 7, origin: "Part 4 유형 16: 비선점형 SJF 계산",
          text: "다음 4개 프로세스가 도착 시간 0에 모두 준비 큐에 도착하였다.<br><br>" +
                "<table class='gantt-table'>" +
                "<tr><th>프로세스</th><th>도착 시간</th><th>CPU 버스트 시간</th></tr>" +
                "<tr><td><b>P1</b></td><td>0 ms</td><td><b>6 ms</b></td></tr>" +
                "<tr><td><b>P2</b></td><td>0 ms</td><td><b>8 ms</b></td></tr>" +
                "<tr><td><b>P3</b></td><td>0 ms</td><td><b>7 ms</b></td></tr>" +
                "<tr><td><b>P4</b></td><td>0 ms</td><td><b>3 ms</b></td></tr>" +
                "</table>" +
                "<b>비선점형 SJF(Shortest-Job-First)</b> 알고리즘을 적용할 때의 <b>평균 대기 시간(AWT)</b>을 밀리초(ms) 단위 숫자로 계산하시오.",
          placeholder: "평균 대기시간 숫자 입력 (예: 7)",
          answers: ["7", "7ms", "7.0"],
          explanation: "<b>[실행 순서 선정]</b> 버스트가 가장 짧은 순서: <b>P4(3) → P1(6) → P3(7) → P2(8)</b><br>" +
                       "<div class='gantt-chart-vis'>" +
                       "  <div class='gantt-block' style='flex: 3;'>P4 (0~3)</div>" +
                       "  <div class='gantt-block' style='flex: 6;'>P1 (3~9)</div>" +
                       "  <div class='gantt-block' style='flex: 7;'>P3 (9~16)</div>" +
                       "  <div class='gantt-block' style='flex: 8;'>P2 (16~24)</div>" +
                       "</div>" +
                       "<div class='gantt-time-labels'><span>0</span><span>3</span><span>9</span><span>16</span><span>24</span></div><br>" +
                       "• P4 대기: 0 ms<br>" +
                       "• P1 대기: 3 ms<br>" +
                       "• P3 대기: 9 ms<br>" +
                       "• P2 대기: 16 ms<br>" +
                       "• <b>총 대기시간</b>: 0 + 3 + 9 + 16 = 28 ms<br>" +
                       "• <b>평균 대기시간(AWT)</b>: 28 / 4 = <b>7 ms</b>"
        },
        {
          id: 20, type: "calc", score: 7, origin: "Part 4 유형 18: SRTF (선점형 SJF) 스케줄링 계산 (7주차 필수)",
          text: "다음 4개 프로세스 집합에 대해 <b>SRTF (선점형 SJF)</b> 스케줄링을 적용할 때의 <b>평균 대기 시간(Average Waiting Time)</b>을 밀리초(ms) 단위 숫자로 구하시오.<br><br>" +
                "<table class='gantt-table'>" +
                "<tr><th>프로세스</th><th>도착 시간 (Arrival)</th><th>CPU 버스트 시간 (Burst)</th></tr>" +
                "<tr><td><b>P1</b></td><td>0 ms</td><td><b>8 ms</b></td></tr>" +
                "<tr><td><b>P2</b></td><td>1 ms</td><td><b>4 ms</b></td></tr>" +
                "<tr><td><b>P3</b></td><td>2 ms</td><td><b>9 ms</b></td></tr>" +
                "<tr><td><b>P4</b></td><td>3 ms</td><td><b>5 ms</b></td></tr>" +
                "</table>",
          placeholder: "평균 대기시간 숫자 입력 (예: 6.5)",
          answers: ["6.5", "6.5ms"],
          explanation: "<b>[간트 차트 작성 및 실행 추적]</b><br>" +
                       "• t = 0: P1 실행 시작<br>" +
                       "• t = 1: P2 도착(버스트 4). P1 남은 시간 7ms. P2(4) &lt; P1(7)이므로 <b>P2가 선점!</b><br>" +
                       "• t = 2: P3 도착(버스트 9). P2 남은 시간 3ms. P2 계속 실행<br>" +
                       "• t = 3: P4 도착(버스트 5). P2 남은 시간 2ms. P2 계속 실행<br>" +
                       "• t = 5: P2 완료! 남은 작업: P1(7), P3(9), P4(5) 중 가장 짧은 <b>P4 실행</b><br>" +
                       "• t = 10: P4 완료! 남은 작업: P1(7), P3(9) 중 가장 짧은 <b>P1 실행</b><br>" +
                       "• t = 17: P1 완료! 남은 <b>P3 실행</b><br>" +
                       "• t = 26: P3 완료<br><br>" +
                       "<div class='gantt-chart-vis'>" +
                       "  <div class='gantt-block' style='flex: 1;'>P1 (0~1)</div>" +
                       "  <div class='gantt-block' style='flex: 4;'>P2 (1~5)</div>" +
                       "  <div class='gantt-block' style='flex: 5;'>P4 (5~10)</div>" +
                       "  <div class='gantt-block' style='flex: 7;'>P1 (10~17)</div>" +
                       "  <div class='gantt-block' style='flex: 9;'>P3 (17~26)</div>" +
                       "</div>" +
                       "<div class='gantt-time-labels'><span>0</span><span>1</span><span>5</span><span>10</span><span>17</span><span>26</span></div><br>" +
                       "• P1 대기시간: (0 - 0) + (10 - 1) = <b>9 ms</b><br>" +
                       "• P2 대기시간: 1 - 1 = <b>0 ms</b><br>" +
                       "• P3 대기시간: 17 - 2 = <b>15 ms</b><br>" +
                       "• P4 대기시간: 5 - 3 = <b>2 ms</b><br>" +
                       "• <b>총 대기시간</b>: 9 + 0 + 15 + 2 = 26 ms<br>" +
                       "• <b>평균 대기시간(AWT)</b>: 26 / 4 = <b>6.5 ms</b>"
        },
        {
          id: 21, type: "calc", score: 7, origin: "Part 4 유형 19: Round Robin (RR) 스케줄링 계산",
          text: "다음 3개 프로세스가 도착 시간 0에 P1, P2, P3 순서로 도착하였으며, <b>타임 퀀텀(q) = 4 ms</b>인 <b>Round Robin(RR) 스케줄링</b>을 적용한다.<br><br>" +
                "<table class='gantt-table'>" +
                "<tr><th>프로세스</th><th>도착 시간</th><th>CPU 버스트 시간</th></tr>" +
                "<tr><td><b>P1</b></td><td>0 ms</td><td><b>24 ms</b></td></tr>" +
                "<tr><td><b>P2</b></td><td>0 ms</td><td><b>3 ms</b></td></tr>" +
                "<tr><td><b>P3</b></td><td>0 ms</td><td><b>3 ms</b></td></tr>" +
                "</table>" +
                "이때 <b>P2 프로세스의 대기 시간(Waiting Time)</b>은 몇 ms인가?",
          placeholder: "대기시간 숫자 입력 (예: 4)",
          answers: ["4", "4ms"],
          explanation: "<b>[간트 차트 작성]</b><br>" +
                       "• 0 ~ 4 ms: P1 실행 (남은 시간 20 ms, 퀀텀 소진으로 선점되어 큐 맨 뒤로 이동)<br>" +
                       "• 4 ~ 7 ms: P2 실행 (3 ms 실행 후 종료!)<br>" +
                       "• 7 ~ 10 ms: P3 실행 (3 ms 실행 후 종료!)<br>" +
                       "• 10 ~ 30 ms: 남은 P1 연속 실행 후 종료<br><br>" +
                       "<div class='gantt-chart-vis'>" +
                       "  <div class='gantt-block' style='flex: 4;'>P1 (0~4)</div>" +
                       "  <div class='gantt-block' style='flex: 3;'>P2 (4~7)</div>" +
                       "  <div class='gantt-block' style='flex: 3;'>P3 (7~10)</div>" +
                       "  <div class='gantt-block' style='flex: 20;'>P1 (10~30)</div>" +
                       "</div>" +
                       "<div class='gantt-time-labels'><span>0</span><span>4</span><span>7</span><span>10</span><span>30</span></div><br>" +
                       "• <b>P2의 대기시간</b>: 0에 도착하여 4 ms에 처음이자 마지막으로 실행되었으므로 <b>4 ms</b><br>" +
                       "(참고: P3 대기시간 = 7 ms, P1 대기시간 = 4(P2)+3(P3) = 6 ms, AWT = (6+4+7)/3 = 5.67 ms)"
        },

        // [개념 정의 서술형 3문항: 5+6+6 = 17점]
        {
          id: 22, type: "essay", score: 5, origin: "Part 1 유형 2: fork() 메모리 주소공간 독립성 서술",
          text: "fork() 시스템 콜을 호출하여 자식 프로세스를 생성한 후, 자식 프로세스에서 전역 변수 값을 변경하더라도 부모 프로세스의 전역 변수 값에 전혀 영향을 주지 않고 본래 값을 유지하는 이유를 <b>프로세스의 메모리 주소 공간(Address Space) 관점</b>에서 구체적으로 서술하시오.",
          placeholder: "독립된 주소 공간 복제와 데이터 격리 메커니즘을 포함하여 서술하세요.",
          rubric: [
            { criteria: "자식 프로세스가 생성될 때 부모의 주소 공간을 복제하여 별도의 독립된 메모리 주소 공간을 가짐을 명시", points: "3점" },
            { criteria: "자식의 변수 수정은 자식의 메모리 영역에만 반영되며 부모의 주소 공간에는 아무 영향을 주지 않음을 명시", points: "2점" }
          ],
          sampleAnswer: "fork() 시스템 콜로 생성된 자식 프로세스는 부모 프로세스의 주소 공간(Code, Data, Stack, Heap)을 그대로 복제하여 '완전히 별도의 독립적인 메모리 주소 공간'을 할당받게 된다. 따라서 자식 프로세스 내부에서 전역 변수나 데이터를 수정하더라도 이는 자식 프로세스 전용 메모리 영역에만 반영될 뿐, 부모 프로세스의 메모리 영역에는 아무런 영향을 주지 않는다. 이로 인해 부모 프로세스가 읽는 전역 변수는 본래의 초기값을 그대로 유지하게 된다.",
          explanation: "교수님 강의 포인트: fork()는 주소 공간을 독립적으로 복사하므로 자식에서의 변수 변경이 부모에게 전달되지 않음 (공유 메모리가 아닌 한 독립 격리)."
        },
        {
          id: 23, type: "essay", score: 6, origin: "Part 4 유형 14: 기아 현상 & 에이징",
          text: "SJF 및 우선순위 스케줄링의 공통적 한계점인 <b>'기아 현상(Starvation)'의 발생 원인</b>을 기술하고, 이를 해결하기 위한 <b>'에이징(Aging)' 기법의 동작 원리</b>를 설명하시오.",
          placeholder: "기아 현상의 발생 조건과 에이징의 우선순위 상승 원리를 서술하세요.",
          rubric: [
            { criteria: "기아 현상의 원인(실행 시간이 짧거나 우선순위가 높은 프로세스가 계속 인입되어 긴 작업이 무한 대기) 기술", points: "3점 (50%)" },
            { criteria: "에이징의 원리(시스템에서 대기하는 시간에 비례하여 프로세스의 우선순위를 점진적으로 증가) 기술", points: "3점 (50%)" }
          ],
          sampleAnswer: "기아 현상(Starvation, 무한 봉쇄)은 실행 시간이 긴 작업이나 낮은 우선순위를 가진 프로세스가 준비 큐에 대기하고 있을 때, 실행 시간이 더 짧거나 우선순위가 더 높은 프로세스가 쉬지 않고 지속적으로 유입되어 긴 작업이 영원히 CPU를 할당받지 못하는 현상이다. 이를 해결하기 위한 에이징(Aging) 기법은 프로세스가 준비 큐에서 대기하는 시간에 비례하여 해당 프로세스의 우선순위를 점진적으로 증가시키는 방식이다. 이를 통해 아무리 오래 대기하더라도 언젠가는 최상위 우선순위에 도달하게 되어 실행이 보장된다.",
          explanation: "교수님 강의 코멘트: '스타베이션 현상이 일어나고 이걸 해결하기 위해서 에이징을 해줘야 한다. 부분점수는 절반(50%)씩 배점.'"
        },
        {
          id: 24, type: "essay", score: 6, origin: "Part 4 유형 19: Round Robin 타임 퀀텀의 영향",
          text: "Round Robin(RR) 스케줄링에서 <b>타임 퀀텀(Time Quantum, q)의 크기 결정</b>이 전체 시스템 성능에 미치는 영향(너무 클 때 vs 너무 작을 때)을 비교 설명하시오.",
          placeholder: "타임 퀀텀이 너무 클 때와 너무 작을 때의 문제점을 각각 기술하세요.",
          rubric: [
            { criteria: "타임 퀀텀이 무한히 크거나 너무 클 때: FCFS 스케줄링과 동일해져 호위 효과 발생 기술", points: "3점 (50%)" },
            { criteria: "타임 퀀텀이 너무 작을 때: 잦은 문맥 교환(Context Switch) 발생으로 인한 과도한 오버헤드 기술", points: "3점 (50%)" }
          ],
          sampleAnswer: "Round Robin 스케줄링에서 타임 퀀텀(q)의 크기는 시스템의 성능을 좌우하는 핵심 매개변수이다. (1) 타임 퀀텀이 너무 크게 설정되면 프로세스들이 퀀텀 이내에 작업을 끝마치게 되므로 사실상 선입선출(FCFS) 스케줄링과 완전히 동일해져 짧은 작업들이 긴 작업 뒤에서 장시간 대기하는 호위 효과가 재발한다. (2) 반대로 타임 퀀텀이 너무 작게 설정되면 프로세스 실행 시간 대비 문맥 교환(Context Switch) 횟수가 폭증하여 디스패치 지연 및 CPU 오버헤드로 인해 시스템 처리 효율이 급격히 저하된다. 따라서 CPU 버스트 시간의 약 80%가 퀀텀보다 짧도록 적절한 절충점을 찾아야 한다.",
          explanation: "교수님 7주차 강의 1:23:14: '1초마다 퀀텀을 주면 컨텍스트 스위치가 9번 일어난다. 안 좋다. 적절하게 타임 퀀텀을 정해야 한다.'"
        }
      ]
    },

    // ========================================================
    // 제2회: [적중 파이널] 교수님 파이널 모의고사 10선 (핵심 적중)
    // ========================================================
    {
      id: "os_exam2",
      name: "제2회 [적중 파이널] 교수님 파이널 모의고사 10선",
      tag: "기출 변형 & 핵심 적중 10문항 100점",
      desc: "수업 정리자료 '파이널 모의고사 10선' 100% 반영: fork() 전역변수 서술(value=10), fork() 리턴값, 스레드 자원 분리, 콘보이 효과, 기아&에이징, 디스패처, 비선점 SJF(4.25ms), SRTF(3.0ms), RR 퀀텀 영향, 환형버퍼 수식",
      questions: [
        {
          id: 1, type: "essay", score: 10, origin: "파이널 문제 1: fork() 메모리 구조 & 전역 변수",
          text: "다음 C 코드 실행 시 printf로 출력되는 <b>PARENT: value</b>의 값을 적고, 왜 그 값이 출력되는지 프로세스의 메모리 구조(주소 공간) 관점에서 서술하시오.<br><br>" +
                "<pre style='margin-top: 8px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.5; color: var(--ink);'>#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;sys/wait.h&gt;\n\nint value = 10;\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) {\n        value += 20;\n        return 0;\n    } else if (pid &gt; 0) {\n        wait(NULL);\n        printf(\"PARENT: value = %d\\n\", value);\n    }\n    return 0;\n}</pre>",
          placeholder: "출력값과 주소 공간 복제 메커니즘을 서술하세요.",
          rubric: [
            { criteria: "출력값 PARENT: value = 10 명시", points: "5점 (50%)" },
            { criteria: "fork() 시 자식 프로세스는 부모의 주소 공간을 독립적으로 복사하여 생성되므로 부모의 value는 10으로 유지됨을 서술", points: "5점 (50%)" }
          ],
          sampleAnswer: "출력값: PARENT: value = 10\n이유: fork() 시 자식 프로세스는 부모의 주소 공간을 독립적으로 복사하여 생성된다. 자식이 수정한 value는 자식 프로세스의 메모리 공간에만 반영되므로, 부모 프로세스의 주소 공간에 있는 value는 본래 값인 10을 유지한다.",
          explanation: "교수님 힌트: '자식과 부모는 독립된 메모리를 갖는다. 자식이 아무리 지지고 볶아도 부모는 영향받지 않는다!'"
        },
        {
          id: 2, type: "short", score: 10, origin: "파이널 문제 2: fork() 반환값",
          text: "fork() 시스템 콜 호출 시 반환값(Return value)이 <b>부모 프로세스</b>와 <b>자식 프로세스</b>에서 각각 어떻게 다른지 구체적으로 기술하시오.",
          placeholder: "부모와 자식의 반환값 기술 (예: 부모: 자식 PID, 자식: 0)",
          answers: ["부모: 자식 PID, 자식: 0", "부모: 자식 PID / 자식: 0", "부모: 자식PID, 자식: 0", "자식 PID, 0", "자식PID, 0", "부모: 자식 PID", "자식 PID", "자식PID"],
          explanation: "• <b>부모 프로세스</b>: 새로 생성된 자식 프로세스의 <b>PID (0보다 큰 양의 정수)</b>를 반환받음<br>• <b>자식 프로세스</b>: 숫자 <b>0</b>을 반환받음 (실패 시 -1)"
        },
        {
          id: 3, type: "short", score: 10, origin: "파이널 문제 3: 스레드 공유 자원 vs 독립 자원",
          text: "스레드(Thread)가 동일 프로세스 내의 다른 스레드들과 <b>공유하는 자원 3가지</b>와 각 스레드가 <b>독립적으로 소유하는 자원 3가지</b>를 쓰시오.",
          placeholder: "공유 자원과 독립 자원 기술 (예: 공유: Code, Data, Heap / 독립: Stack, Register, PC)",
          answers: ["공유: Code, Data, Heap / 독립: Stack, Register, PC", "공유: Code, Data, Heap", "독립: Stack, Register, PC", "Code, Data, Heap", "Stack, Register, PC", "코드, 데이터, 힙", "스택, 레지스터, PC"],
          explanation: "• <b>공유하는 자원</b>: 코드(Code), 데이터(Data, 전역/정적 변수), 힙(Heap), 열린 파일(Open Files)<br>• <b>독립적인 자원</b>: 스레드 ID(TID), 프로그램 카운터(PC), 레지스터 세트, 스택(Stack)"
        },
        {
          id: 4, type: "essay", score: 10, origin: "파이널 문제 4: 콘보이 효과(Convoy Effect)",
          text: "FCFS 스케줄링에서 발생하는 대표적인 문제점인 <b>콘보이 효과(Convoy Effect)</b>가 무엇인지 정의하고, 이로 인해 시스템 성능에 미치는 영향을 설명하시오.",
          placeholder: "콘보이 효과의 정의와 평균 대기시간 및 자원 이용률 영향을 서술하세요.",
          rubric: [
            { criteria: "정의: CPU 버스트 시간이 매우 긴 프로세스가 먼저 CPU를 점유하여 뒤따르는 짧은 작업들이 장시간 대기함을 기술", points: "5점 (50%)" },
            { criteria: "영향: 시스템의 평균 대기 시간이 크게 증가하고 CPU 및 입출력 장치 이용률이 저하됨을 기술", points: "5점 (50%)" }
          ],
          sampleAnswer: "정의: CPU 버스트 시간이 매우 긴 프로세스가 먼저 CPU를 점유하여, 뒤이어 도착한 짧은 버스트 시간의 프로세스들이 오랜 시간 동안 대기하게 되는 현상이다.\n영향: 시스템의 평균 대기 시간(Waiting Time)이 크게 증가하고, CPU 및 입출력 장치 이용률이 저하된다.",
          explanation: "교수님 비유: 고속도로에서 앞선 덤프트럭 1대 때문에 뒤따르는 모든 스포츠카가 서행하게 되는 것과 같은 심각한 비효율."
        },
        {
          id: 5, type: "essay", score: 10, origin: "파이널 문제 5: 기아 현상 & 에이징",
          text: "SJF 스케줄링에서 발생할 수 있는 <b>기아 현상(Starvation)</b>의 개념과 이를 해결하기 위한 대표적인 기법인 <b>에이징(Aging)</b>에 대해 서술하시오.",
          placeholder: "기아 현상의 개념과 에이징의 해결 기법을 서술하세요.",
          rubric: [
            { criteria: "기아 현상: 실행 시간이 긴 프로세스가 짧은 프로세스들의 지속적인 도착으로 인해 영원히 CPU를 할당받지 못함 기술", points: "5점 (50%)" },
            { criteria: "에이징: 시스템 내에서 대기하는 시간이 길어질수록 프로세스의 우선순위를 점진적으로 증가시켜 실행을 보장함 기술", points: "5점 (50%)" }
          ],
          sampleAnswer: "기아 현상: 실행 시간이 긴 프로세스가 실행 시간이 짧은 프로세스들의 지속적인 도착으로 인해 영원히 CPU를 할당받지 못하고 무한 대기하는 현상이다.\n에이징: 시스템 내에서 대기하는 시간이 길어질수록 해당 프로세스의 우선순위를 점진적으로 증가시켜 언젠가는 CPU를 할당받아 실행되도록 보장하는 해결 기법이다.",
          explanation: "교수님 강조: Starvation과 Aging은 스케줄링 시험의 단골 짝꿍 세트 문제입니다."
        },
        {
          id: 6, type: "short", score: 10, origin: "파이널 문제 6: 디스패처 & 디스패치 지연",
          text: "스케줄러가 선택한 프로세스에게 CPU 제어권을 넘겨주는 운영체제 모듈의 명칭과, 하나의 프로세스를 중지하고 다른 프로세스를 실행하기까지 소요되는 지연 시간의 명칭을 차례대로 쓰시오.",
          placeholder: "모듈 명칭, 지연 시간 순서대로 입력 (예: 디스패처, 디스패치 지연)",
          answers: ["디스패처, 디스패치 지연", "디스패처, 디스패치 지연시간", "디스패처 / 디스패치 지연", "디스패처, 디스패치지연", "디스패처, 디스패치지연시간", "디스패처", "Dispatcher"],
          explanation: "• 모듈 명칭: <b>디스패처 (Dispatcher)</b><br>• 지연 시간 명칭: <b>디스패치 지연 (Dispatch Latency)</b>"
        },
        {
          id: 7, type: "calc", score: 10, origin: "파이널 문제 7: 비선점형 SJF 계산 (수치 변형)",
          text: "다음 프로세스 집합에 대해 <b>비선점형 SJF</b> 스케줄링을 적용할 때, 간트 차트를 그리고 <b>평균 대기 시간(AWT)</b>을 밀리초(ms) 단위 숫자로 구하시오. (도착 시간은 모두 0ms)<br><br>" +
                "<table class='gantt-table'>" +
                "<tr><th>프로세스</th><th>도착 시간</th><th>CPU 버스트 시간</th></tr>" +
                "<tr><td><b>P1</b></td><td>0 ms</td><td><b>9 ms</b></td></tr>" +
                "<tr><td><b>P2</b></td><td>0 ms</td><td><b>4 ms</b></td></tr>" +
                "<tr><td><b>P3</b></td><td>0 ms</td><td><b>1 ms</b></td></tr>" +
                "<tr><td><b>P4</b></td><td>0 ms</td><td><b>6 ms</b></td></tr>" +
                "</table>",
          placeholder: "평균 대기시간 숫자 입력 (예: 4.25)",
          answers: ["4.25", "4.25ms"],
          explanation: "<b>[실행 순서 선정]</b> 버스트가 짧은 순서: <b>P3(1) → P2(4) → P4(6) → P1(9)</b><br>" +
                       "<div class='gantt-chart-vis'>" +
                       "  <div class='gantt-block' style='flex: 1;'>P3 (0~1)</div>" +
                       "  <div class='gantt-block' style='flex: 4;'>P2 (1~5)</div>" +
                       "  <div class='gantt-block' style='flex: 6;'>P4 (5~11)</div>" +
                       "  <div class='gantt-block' style='flex: 9;'>P1 (11~20)</div>" +
                       "</div>" +
                       "<div class='gantt-time-labels'><span>0</span><span>1</span><span>5</span><span>11</span><span>20</span></div><br>" +
                       "• P3 대기시간: 0 ms<br>" +
                       "• P2 대기시간: 1 ms<br>" +
                       "• P4 대기시간: 5 ms<br>" +
                       "• P1 대기시간: 11 ms<br>" +
                       "• <b>총 대기시간</b>: 0 + 1 + 5 + 11 = 17 ms<br>" +
                       "• <b>평균 대기시간(AWT)</b>: 17 / 4 = <b>4.25 ms</b>"
        },
        {
          id: 8, type: "calc", score: 10, origin: "파이널 문제 8: SRTF (선점형 SJF) 계산 (수치 변형)",
          text: "다음 프로세스들에 대해 <b>SRTF (선점형 SJF)</b> 스케줄링을 적용할 때, 간트 차트를 그리고 <b>평균 대기 시간(AWT)</b>을 밀리초(ms) 단위 숫자로 계산하시오.<br><br>" +
                "<table class='gantt-table'>" +
                "<tr><th>프로세스</th><th>도착 시간 (Arrival)</th><th>CPU 버스트 시간 (Burst)</th></tr>" +
                "<tr><td><b>P1</b></td><td>0 ms</td><td><b>7 ms</b></td></tr>" +
                "<tr><td><b>P2</b></td><td>2 ms</td><td><b>4 ms</b></td></tr>" +
                "<tr><td><b>P3</b></td><td>4 ms</td><td><b>1 ms</b></td></tr>" +
                "<tr><td><b>P4</b></td><td>5 ms</td><td><b>4 ms</b></td></tr>" +
                "</table>",
          placeholder: "평균 대기시간 숫자 입력 (예: 3)",
          answers: ["3", "3ms", "3.0", "3.0ms"],
          explanation: "<b>[실행 과정 추적]</b><br>" +
                       "• t = 0: P1 시작 (남은 7)<br>" +
                       "• t = 2: P2 도착(버스트 4). P1 남은 시간 5. P2(4) &lt; P1(5) → <b>P2 선점!</b><br>" +
                       "• t = 4: P3 도착(버스트 1). P2 남은 시간 2. P3(1) &lt; P2(2) → <b>P3 선점!</b><br>" +
                       "• t = 5: P3 종료. P4 도착(버스트 4). 남은 작업: P2(2), P4(4), P1(5) → <b>P2 실행</b><br>" +
                       "• t = 7: P2 종료. 남은 작업: P4(4), P1(5) → <b>P4 실행</b><br>" +
                       "• t = 11: P4 종료. 남은 작업: P1(5) → <b>P1 실행</b><br>" +
                       "• t = 16: P1 종료<br><br>" +
                       "<div class='gantt-chart-vis'>" +
                       "  <div class='gantt-block' style='flex: 2;'>P1 (0~2)</div>" +
                       "  <div class='gantt-block' style='flex: 2;'>P2 (2~4)</div>" +
                       "  <div class='gantt-block' style='flex: 1;'>P3 (4~5)</div>" +
                       "  <div class='gantt-block' style='flex: 2;'>P2 (5~7)</div>" +
                       "  <div class='gantt-block' style='flex: 4;'>P4 (7~11)</div>" +
                       "  <div class='gantt-block' style='flex: 5;'>P1 (11~16)</div>" +
                       "</div>" +
                       "<div class='gantt-time-labels'><span>0</span><span>2</span><span>4</span><span>5</span><span>7</span><span>11</span><span>16</span></div><br>" +
                       "• P1 대기시간: (0 - 0) + (11 - 2) = <b>9 ms</b><br>" +
                       "• P2 대기시간: (2 - 2) + (5 - 4) = <b>1 ms</b><br>" +
                       "• P3 대기시간: 4 - 4 = <b>0 ms</b><br>" +
                       "• P4 대기시간: 7 - 5 = <b>2 ms</b><br>" +
                       "• <b>총 대기시간</b>: 9 + 1 + 0 + 2 = 12 ms<br>" +
                       "• <b>평균 대기시간(AWT)</b>: 12 / 4 = <b>3.0 ms</b>"
        },
        {
          id: 9, type: "essay", score: 10, origin: "파이널 문제 9: Round Robin 타임 퀀텀의 극단적 크기 영향",
          text: "Round Robin (RR) 스케줄링에서 시간 할당량(Time Quantum)의 크기가 <b>극단적으로 매우 클 때</b>와 <b>극단적으로 매우 작을 때</b> 시스템에 각각 어떤 현상이 발생하는지 쓰시오.",
          placeholder: "타임 퀀텀이 너무 클 때와 너무 작을 때의 현상을 각각 기술하세요.",
          rubric: [
            { criteria: "매우 클 때: 프로세스가 할당 시간 내에 작업을 마치므로 FCFS(선입선출) 스케줄링과 동일해짐 기술", points: "5점 (50%)" },
            { criteria: "매우 작을 때: 잦은 문맥 교환으로 인해 디스패치 오버헤드가 극심해져 시스템 처리 효율이 크게 떨어짐 기술", points: "5점 (50%)" }
          ],
          sampleAnswer: "• 매우 클 때: 프로세스가 할당 시간 내에 작업을 마치므로 FCFS (선입선출) 스케줄링과 동일해진다.\n• 매우 작을 때: 잦은 문맥 교환으로 인해 디스패치 오버헤드(문맥 교환 오버헤드)가 극심해져 시스템 처리 효율이 크게 떨어진다.",
          explanation: "교수님 7주차 강의 필수 체크포인트: 타임 퀀텀의 트레이드오프 관계 이해 여부 채점."
        },
        {
          id: 10, type: "short", score: 10, origin: "파이널 문제 10: 생산자-소비자 환형 버퍼 조건식",
          text: "공유 메모리 환경의 생산자-소비자 문제에서 크기가 N인 환형 버퍼가 <b>비어 있는(Empty) 판별 조건식</b>과 <b>가득 차 있는(Full) 판별 조건식</b>을 C 언어 수식 형태로 쓰시오.",
          placeholder: "Empty 조건과 Full 조건을 쉼표로 구분하여 입력 (예: in == out, (in + 1) % N == out)",
          answers: [
            "in == out, (in + 1) % N == out",
            "in==out, (in+1)%N==out",
            "in == out, (in+1)%N==out",
            "in==out, (in+1)%BUFFER_SIZE==out",
            "in == out",
            "in==out"
          ],
          explanation: "• <b>비어 있는 조건</b>: <code>in == out</code><br>• <b>가득 차 있는 조건</b>: <code>(in + 1) % N == out</code> (또는 <code>((in + 1) % BUFFER_SIZE) == out</code>)"
        }
      ]
    },

    // ========================================================
    // [회차 3] CPU 스케줄링 계산 & 임계구역 동기화 심화 모의고사 (14문항 100점)
    // ========================================================
    {
      id: "os_exam3",
      name: "제3회 CPU 스케줄링 계산 & 임계구역 동기화 심화 모의고사",
      tag: "스케줄링·동기화 14문 (100점)",
      desc: "FCFS/SJF AWT 계산, 지수이동평균 버스트 예측 수식, 디스패처, 임계구역 3대 조건, 피터슨 알고리즘, 뮤텍스 락 vs 세마포어, 스핀락",
      questions: [
        // [객관식 5문항: 각 5점 = 25점]
        {
          id: 1, type: "choice", score: 5, origin: "임계구역 3대 조건: 진행(Progress)",
          text: "임계 구역(Critical Section) 문제의 3대 필수 해결 조건(상호 배제, 진행, 유한 대기) 중, '임계 구역에서 실행 중인 프로세스가 없을 때, 진입을 원하는 프로세스들 중에서 다음에 진입할 프로세스를 유한한 시간 내에 결정해야 하며, 임계 구역 바깥에서 실행 중인 프로세스는 이 결정을 방해할 수 없다'는 조건은?",
          options: [
            "A. 상호 배제 (Mutual Exclusion)",
            "B. 진행 (Progress)",
            "C. 유한 대기 (Bounded Waiting)",
            "D. 원자성 (Atomicity)"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "진행(Progress) 조건은 임계 구역이 비어 있을 때 진입을 원하는 프로세스들이 아무 이유 없이 영원히 진입하지 못하는 교착 상태(Deadlock)를 방지하기 위한 조건입니다."
        },
        {
          id: 2, type: "choice", score: 5, origin: "세마포어 wait() & signal() 원자적 연산",
          text: "다익스트라가 제안한 동기화 도구인 세마포어(Semaphore S)의 표준 연산 `wait(S)`(또는 P 연산)와 `signal(S)`(또는 V 연산)의 동작 원리로 가장 올바른 것은?",
          options: [
            "A. wait(S)는 S 값을 1 증가시키고, signal(S)는 S 값을 1 감소시킨다.",
            "B. wait(S)는 S 값을 1 감소시키며 만약 S <= 0이면 프로세스를 대기시키고, signal(S)는 S 값을 1 증가시켜 대기 중인 프로세스를 깨운다.",
            "C. wait(S)와 signal(S)는 인터럽트에 의해 언제든지 중간에 중단될 수 있다.",
            "D. signal(S)는 S가 0보다 클 때만 실행될 수 있는 조건부 함수이다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "wait(S)는 자원을 획득하기 위해 S를 감소시키고 자원이 없으면 대기하며, signal(S)는 자원을 반납하며 S를 증가시키고 대기 중인 프로세스를 깨우는 불가분(Atomic) 연산입니다."
        },
        {
          id: 3, type: "choice", score: 5, origin: "디스패처(Dispatcher)의 역할",
          text: "CPU 스케줄러가 Ready 큐에서 실행할 다음 프로세스를 선택한 후, 실제로 CPU의 제어권을 해당 프로세스에 넘겨주며 문맥 교환(Context Switching), 사용자 모드 전환(Kernel -> User Mode), 프로그램 카운터(PC) 복원을 수행하는 커널 컴포넌트는?",
          options: [
            "A. 단기 스케줄러 (Short-term Scheduler)",
            "B. 디스패처 (Dispatcher)",
            "C. 중기 스케줄러 (Swapper)",
            "D. 인터럽트 핸들러 (Interrupt Handler)"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "스케줄러가 '누구를 실행할지 선택'하는 정책을 담당한다면, 디스패처는 실제로 '선택된 프로세스에게 CPU를 넘겨주는 메커니즘'을 담당합니다."
        },
        {
          id: 4, type: "choice", score: 5, origin: "지수 이동평균 버스트 예측 수식 해석",
          text: "다음 CPU 버스트 시간 예측 수식 τ_{n+1} = α * t_n + (1 - α) * τ_n 에서, 가중치 매개변수 α를 0으로 설정(α = 0)했을 때의 의미로 가장 적절한 것은?",
          options: [
            "A. 최근의 실제 CPU 사용 시간(t_n)만을 100% 반영한다.",
            "B. 최근의 실제 CPU 사용 시간(t_n)을 전혀 반영하지 않고, 과거의 축적된 예측값(τ_n)만을 영구히 유지한다.",
            "C. 과거의 모든 실행 이력을 완전히 무시하고 항상 고정값 0으로 예측한다.",
            "D. 예측치가 실제 값보다 항상 2배 더 커진다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "α=0이면 τ_{n+1} = τ_n이 되므로 최근의 실제 측정값 t_n은 무시되고 과거의 예측값이 변하지 않고 그대로 유지됩니다. 반대로 α=1이면 오직 최근 관측치 t_n만 반영합니다."
        },
        {
          id: 5, type: "choice", score: 5, origin: "피터슨 알고리즘(Peterson's Algorithm)",
          text: "두 프로세스 P_i와 P_j 사이에서 임계 구역 상호 배제를 해결하는 고전 소프트웨어 알고리즘인 피터슨 알고리즘에서 사용하는 두 변수의 역할로 올바른 것은?",
          options: [
            "A. boolean flag[2]는 현재 임계구역에 들어가 있는 프로세스를 나타내고, int turn은 대기 큐의 크기를 나타낸다.",
            "B. boolean flag[2]는 각 프로세스가 임계 구역에 진입할 준비가 되었음(의향)을 나타내고, int turn은 어느 프로세스가 임계 구역에 들어갈 순번(양보)인지를 나타낸다.",
            "C. turn 변수만으로 상호 배제와 진행이 모두 완벽하게 보장되므로 flag는 불필요하다.",
            "D. 현대 멀티코어 프로세서의 비순차적 명령어 실행(Out-of-order execution) 환경에서도 하드웨어 메모리 배리어 없이 100% 정상 작동한다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "flag[i]=true는 P_i가 진입 의사를 표현하는 것이고, turn=j는 상대방 P_j에게 먼저 진입 기회를 양보하는 변수입니다."
        },

        // [단답형 5문항: 각 5점 = 25점]
        {
          id: 6, type: "short", score: 5, origin: "기아 방지 기법 (Aging)",
          text: "우선순위 스케줄링에서 우선순위가 낮은 프로세스가 무한정 대기 상태에 머무는 기아(Starvation) 현상을 방지하기 위해, 준비 큐에서 오래 대기할수록 프로세스의 우선순위를 점진적으로 높여주는 기법은?",
          placeholder: "기법 명칭 입력 (예: 에이징 또는 Aging)",
          answers: ["에이징", "aging", "Aging", "노화"],
          explanation: "에이징(Aging)은 대기 시간에 비례하여 우선순위를 점진적으로 증가시켜 결국 최고 우선순위가 되어 CPU를 할당받도록 보장합니다."
        },
        {
          id: 7, type: "short", score: 5, origin: "바쁜 대기 락 (Spinlock)",
          text: "임계 구역에 진입하기 위해 락(Lock)을 획득할 때까지 CPU를 반납(Sleep)하지 않고 while 루프를 계속 돌며 락의 가용 여부를 반복 확인하는 바쁜 대기(Busy Waiting) 방식의 동기화 락은?",
          placeholder: "락 명칭 입력 (예: 스핀락 또는 Spinlock)",
          answers: ["스핀락", "spinlock", "Spinlock", "스핀 락"],
          explanation: "스핀락(Spinlock)은 문맥 교환 오버헤드가 없으므로 멀티코어 환경에서 임계 구역 실행 시간이 매우 짧을 때 효과적입니다."
        },
        {
          id: 8, type: "short", score: 5, origin: "이진 세마포어",
          text: "세마포어 카운트 값이 0과 1의 두 가지 값만 가질 수 있도록 제한되어 상호 배제(Mutual Exclusion)를 달성하며 뮤텍스 락과 사실상 동일하게 기능하는 세마포어의 종류는?",
          placeholder: "세마포어 명칭 입력 (예: 이진 세마포어)",
          answers: ["이진 세마포어", "이진세마포어", "binary semaphore", "바이너리 세마포어"],
          explanation: "이진 세마포어(Binary Semaphore)는 0과 1만을 사용하여 단일 자원에 대한 상호 배제를 구현합니다."
        },
        {
          id: 9, type: "short", score: 5, origin: "콘보이 효과 (Convoy Effect)",
          text: "비선점형 FCFS 스케줄링에서 실행 시간이 매우 긴 CPU 바운드 프로세스가 먼저 CPU를 점유함으로써 뒤따르는 짧은 I/O 바운드 프로세스들이 오래 대기하게 되어 시스템 전체의 장치 이용률이 급감하는 병목 현상은?",
          placeholder: "현상 명칭 입력 (예: 콘보이 효과)",
          answers: ["콘보이 효과", "콘보이효과", "convoy effect", "Convoy Effect", "호위 효과"],
          explanation: "콘보이 효과(Convoy Effect)는 긴 작업 뒤에 짧은 작업들이 기차처럼 줄지어 대기하면서 대기시간이 폭증하는 FCFS의 대표적인 단점입니다."
        },
        {
          id: 10, type: "short", score: 5, origin: "2장 프로세스 상태 전이도 (Diagram of Process State)",
          text: "아래 프로세스 상태 전이도(Diagram of Process State)에서 실행 중(running)인 프로세스가 I/O 장치의 입출력 완료나 특정 이벤트 발생을 기다리기 위해 스스로 CPU를 반납(`I/O or event wait`)하고 전이되는 프로세스 상태의 명칭은?<br><br><img src='assets/process-state-diagram.png' alt='Diagram of Process State' class='state-diagram-img' style='margin-top:8px;'>",
          placeholder: "상태 명칭 입력 (예: waiting 또는 대기 상태)",
          answers: ["대기", "대기 상태", "대기상태", "waiting", "Waiting", "Blocked", "블록"],
          explanation: "<b>Waiting (대기 상태 / Blocked)</b>은 I/O 완료나 이벤트 신호를 대기하는 상태입니다.<br>• <b>new → ready</b>: <code>admitted</code> (승인)<br>• <b>ready → running</b>: <code>scheduler dispatch</code> (스케줄러 디스패치)<br>• <b>running → ready</b>: <code>interrupt</code> (타임아웃/선점)<br>• <b>running → waiting</b>: <code>I/O or event wait</code> (입출력/이벤트 대기)<br>• <b>waiting → ready</b>: <code>I/O or event completion</code> (입출력/이벤트 완료 — Running 직행 불가!)<br>• <b>running → terminated</b>: <code>exit</code> (종료)"
        },

        // [계산 2문항: 각 10점 = 20점]
        {
          id: 11, type: "calc", score: 10, origin: "비선점 SJF 평균 대기 시간(AWT) 계산",
          text: "4개의 프로세스가 모두 시간 0에 동시에 도착하였으며, 각 프로세스의 CPU 버스트 시간은 다음과 같다:\n• P1: 6 ms\n• P2: 8 ms\n• P3: 7 ms\n• P4: 3 ms\n\n비선점형 SJF(Shortest Job First) 스케줄링을 적용했을 때, 4개 프로세스의 평균 대기 시간(AWT: Average Waiting Time)은 몇 ms인가?",
          placeholder: "정수 또는 소수점 숫자 입력 (예: 7)",
          answers: ["7", "7.0", "7ms"],
          explanation: "버스트 시간 오름차순 실행: P4(3) → P1(6) → P3(7) → P2(8)\n• P4 대기시간: 0 ms (0~3 실행)\n• P1 대기시간: 3 ms (3~9 실행)\n• P3 대기시간: 9 ms (9~16 실행)\n• P2 대기시간: 16 ms (16~24 실행)\n• 총 대기시간 = 0 + 3 + 9 + 16 = 28 ms\n• 평균 대기시간(AWT) = 28 / 4 = 7.0 ms입니다."
        },
        {
          id: 12, type: "calc", score: 10, origin: "지수 이동평균 버스트 예측 계산",
          text: "CPU 스케줄링에서 다음 CPU 버스트 시간을 예측하는 공식 τ_{n+1} = α * t_n + (1 - α) * τ_n 이 적용되고 있다. 가중치 매개변수 α = 0.5, 최근의 실제 버스트 시간 t_n = 6 ms, 직전 예측치 τ_n = 10 ms일 때, 다음 버스트 예측치 τ_{n+1}의 값은 몇 ms인가?",
          placeholder: "숫자만 입력",
          answers: ["8", "8.0", "8ms"],
          explanation: "τ_{n+1} = (0.5 * 6) + ((1 - 0.5) * 10) = 3 + 5 = 8 ms입니다."
        },

        // [서술형 2문항: 총 30점]
        {
          id: 13, type: "essay", score: 15, origin: "임계구역 3대 해결 필수 조건",
          text: "[서술형 15점] 멀티스레드/멀티프로세스 환경에서 경쟁 조건(Race Condition)을 방지하고 임계 구역(Critical Section) 문제를 올바르게 해결하기 위해 반드시 만족해야 하는 <b>3대 필수 조건(상호 배제, 진행, 유한 대기)</b>의 개념과 정의를 각각 명확히 서술하시오.",
          placeholder: "여기에 서술형 답안을 작성하세요.",
          keywords: ["상호 배제 Mutual Exclusion", "한 번에 하나의 프로세스만", "진행 Progress", "임계구역 비었을 때 지체 없이 진입", "유한 대기 Bounded Waiting", "기아 방지 대기 횟수 제한"],
          rubric: [
            { item: "1. 상호 배제 (Mutual Exclusion)", desc: "어떤 프로세스가 임계 구역에서 실행 중이면 다른 프로세스는 절대 진입할 수 없음 명시 시 5점" },
            { item: "2. 진행 (Progress)", desc: "임계 구역이 비어 있을 때 진입 희망자 중 다음 진입자를 유한 시간 내에 결정하며 외부 프로세스가 방해 못함 명시 시 5점" },
            { item: "3. 유한 대기 (Bounded Waiting)", desc: "진입 요청 후 실제 진입할 때까지 다른 프로세스의 진입 횟수에 한계가 있어 기아(Starvation)가 없어야 함 명시 시 5점" }
          ],
          explanation: "1) 상호 배제: 한 프로세스가 임계 구역에서 실행 중이면 다른 어떤 프로세스도 해당 임계 구역에 들어갈 수 없다. 2) 진행: 임계 구역에 진입한 프로세스가 없고 진입하려는 프로세스들이 있을 때, 임계 구역 바깥에 있는 프로세스를 제외한 진입 후보들 중에서 다음에 누가 들어갈지 지체 없이(유한 시간 내에) 결정해야 한다(교착 상태 방지). 3) 유한 대기: 프로세스가 임계 구역 진입을 요청한 후 허가될 때까지 다른 프로세스들이 임계 구역에 진입하는 횟수에 제한(한계)이 있어야 한다(기아 상태 방지)."
        },
        {
          id: 14, type: "essay", score: 15, origin: "스핀락 vs 블록-웨이크업 비교 및 적합성",
          text: "[서술형 15점] 락 획득 대기 방식인 **스핀락(Spinlock / 바쁜 대기)**과 운영체제 대기 큐를 사용하는 **블록-웨이크업(Block & Wakeup / 수면 락)** 방식을 1) CPU 자원 소모 특성, 2) 문맥 교환(Context Switch) 오버헤드, 3) 임계 구역 실행 시간에 따른 최적 적합성을 비교 서술하시오.",
          placeholder: "여기에 서술형 답안을 작성하세요.",
          keywords: ["스핀락 바쁜 대기 CPU 낭비", "블록-웨이크업 프로세스 수면 상태 전환", "문맥 교환 오버헤드", "임계 구역 짧을 때 스핀락", "임계 구역 길 때 블록-웨이크업"],
          rubric: [
            { item: "1. 스핀락 특성", desc: "while 루프로 CPU 점유하며 대기하지만 문맥 교환 비용이 없어 임계구역이 극히 짧은 멀티코어에 적합 명시 시 5점" },
            { item: "2. 블록-웨이크업 특성", desc: "CPU를 즉시 반납하고 대기 큐로 들어가 CPU 낭비가 없지만 문맥 교환 오버헤드가 발생함 명시 시 5점" },
            { item: "3. 임계 구역 길이에 따른 선택", desc: "임계 구역이 길거나 싱글 코어일 때는 블록-웨이크업, 임계 구역이 매우 짧을 때는 스핀락이 유리함 비교 시 5점" }
          ],
          explanation: "1) 스핀락: 락이 해제될 때까지 루프를 돌며 CPU를 소모(바쁜 대기)하지만, 프로세스가 수면 상태로 가지 않으므로 문맥 교환 비용이 전혀 발생하지 않음. 따라서 멀티코어 환경에서 임계 구역 작업이 매우 짧아 문맥 교환 비용보다 대기 시간이 짧을 때 가장 효율적임. 2) 블록-웨이크업: 락을 얻지 못하면 프로세스 상태를 Blocked로 전환하고 CPU를 다른 작업에 즉시 양보하므로 CPU 낭비가 없음. 그러나 대기 및 깨어나는 과정에서 2번의 문맥 교환(Context Switching) 오버헤드가 발생함. 3) 적합성: 임계 구역이 길거나 싱글 코어 환경에서는 블록-웨이크업이 필수적이며, OS 커널 내부의 매우 짧은 데이터 보호에는 스핀락이 유리함."
        }
      ]
    },

    // ========================================================
    // [회차 4] 교착상태 & 메모리 관리 전범위 파이널 실전 모의고사 (14문항 100점)
    // ========================================================
    {
      id: "os_exam4",
      name: "제4회 교착상태 & 메모리 관리 전범위 파이널 실전 모의고사",
      tag: "데드락·페이징·가상메모리 14문 (100점)",
      desc: "교착상태 4대 조건, 자원할당 그래프, 은행원 알고리즘, 페이징 주소변환, 내부 vs 외부 단편화, TLB 유효접근시간, LRU 페이지교체",
      questions: [
        // [객관식 5문항: 각 5점 = 25점]
        {
          id: 1, type: "choice", score: 5, origin: "교착상태 4대 필요조건: 점유 대기",
          text: "교착 상태(Deadlock)가 발생하기 위해 동시에 충족되어야 하는 코프만 4대 조건 중, '프로세스가 최소한 하나의 자원을 이미 보유(점유)한 상태에서, 다른 프로세스가 점유하고 있는 자원을 추가로 할당받기 위해 대기하는 상태'를 무엇이라 하는가?",
          options: [
            "A. 상호 배제 (Mutual Exclusion)",
            "B. 점유 대기 (Hold and Wait)",
            "C. 비선점 (No Preemption)",
            "D. 순환 대기 (Circular Wait)"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "점유 대기(Hold and Wait)는 이미 자원을 쥐고 있으면서 다른 자원을 추가로 요구하며 놓지 않는 조건입니다."
        },
        {
          id: 2, type: "choice", score: 5, origin: "자원 할당 그래프와 데드락 판별",
          text: "자원 할당 그래프(Resource-Allocation Graph)에서 사이클(Cycle)의 존재와 교착 상태의 관계에 대한 설명으로 가장 올바른 것은?",
          options: [
            "A. 그래프에 사이클이 없더라도 항상 교착 상태가 발생할 수 있다.",
            "B. 모든 자원 유형(Resource Type)의 인스턴스가 단 1개씩만 존재하는 경우, 사이클의 존재는 교착 상태 발생의 필요충분조건이다.",
            "C. 자원의 인스턴스가 여러 개일 때 사이클이 존재하면 반드시 100% 교착 상태이다.",
            "D. 요청 간선(Request Edge)은 자원에서 프로세스로 향하는 화살표이다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "자원 인스턴스가 1개씩뿐이면 사이클 = 데드락(필요충분조건)입니다. 반면 인스턴스가 여러 개일 때는 사이클이 있어도 다른 프로세스가 자원을 반납하면 풀릴 수 있으므로 필요조건에 불과합니다."
        },
        {
          id: 3, type: "choice", score: 5, origin: "은행원 알고리즘 (Banker's Algorithm)",
          text: "다익스트라가 고안한 교착 상태 회피(Avoidance) 기법으로, 프로세스의 자원 요청이 들어왔을 때 가상으로 할당해본 뒤 시스템이 모든 프로세스를 무사히 완료시킬 수 있는 '안전 순서열(Safe Sequence)'이 존재하는 안전 상태(Safe State)일 때만 실제 자원을 할당해주는 알고리즘은?",
          options: [
            "A. 은행원 알고리즘 (Banker's Algorithm)",
            "B. 타조 알고리즘 (Ostrich Algorithm)",
            "C. 라운드 로빈 알고리즘 (Round Robin)",
            "D. 엘리베이터 알고리즘 (SCAN)"
          ],
          answer: "A",
          answers: ["A", "a", "1"],
          explanation: "은행원 알고리즘(Banker's Algorithm)은 자원 할당 후에도 안전 상태가 유지되는지 검사하여 교착 상태를 사전에 회피합니다."
        },
        {
          id: 4, type: "choice", score: 5, origin: "페이징 시스템의 단편화 특성",
          text: "물리 메모리를 고정 크기의 프레임(Frame)으로 나누고 논리 메모리를 동일 크기의 페이지(Page)로 분할하여 연속 할당의 외부 단편화(External Fragmentation)를 완벽히 해결하는 메모리 관리 기법에서, 여전히 발생할 수 있는 단편화는?",
          options: [
            "A. 외부 단편화 (External Fragmentation)",
            "B. 내부 단편화 (Internal Fragmentation)",
            "C. 동적 단편화 (Dynamic Fragmentation)",
            "D. 세그먼트 단편화"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "페이징은 외부 단편화를 없애지만, 프로세스의 마지막 페이지가 페이지 크기의 배수가 아닐 때 페이지 내부에 남는 자투리 공간인 내부 단편화가 발생합니다."
        },
        {
          id: 5, type: "choice", score: 5, origin: "페이지 교체 알고리즘 (LRU)",
          text: "가상 메모리 페이지 교체 알고리즘 중, 과거의 참조 기록을 기반으로 '가장 오랜 기간 동안 참조되지 않은(Least Recently Used)' 페이지를 희생 페이지(Victim Page)로 선택하여 교체하는 가장 널리 쓰이는 알고리즘은?",
          options: [
            "A. FIFO (First-In, First-Out)",
            "B. OPT (Optimal Page Replacement)",
            "C. LRU (Least Recently Used)",
            "D. LFU (Least Frequently Used)"
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "LRU는 시간 지역성(Temporal Locality)에 기반하여 가장 오랫동안 쓰이지 않은 페이지가 앞으로도 쓰이지 않을 가능성이 높다고 판단하여 교체하는 최적의 현실적 알고리즘입니다."
        },

        // [단답형 5문항: 각 5점 = 25점]
        {
          id: 6, type: "short", score: 5, origin: "페이지 부재 (Page Fault)",
          text: "CPU가 참조하려는 논리 페이지가 현재 물리 메모리(RAM)의 프레임에 적재되어 있지 않아, 페이지 테이블의 유효-무효 비트(Valid-Invalid Bit)가 무효(Invalid)로 설정되어 있을 때 하드웨어가 발생시키는 인터럽트(트랩)는?",
          placeholder: "인터럽트 명칭 입력 (예: 페이지 부재 또는 Page Fault)",
          answers: ["페이지 부재", "페이지부재", "page fault", "Page Fault", "PageFault"],
          explanation: "페이지 부재(Page Fault)가 발생하면 운영체제 커널의 페이지 부재 핸들러가 디스크 스왑 영역에서 해당 페이지를 메모리로 읽어옵니다."
        },
        {
          id: 7, type: "short", score: 5, origin: "변환 색인 완충기 (TLB)",
          text: "가상 메모리 시스템에서 페이지 테이블 조회를 위해 매 메모리 접근마다 2번씩 RAM에 접근하는 속도 저하를 극복하기 위해, 최근 참조된 페이지 번호와 프레임 번호 쌍을 초고속으로 병렬 검색하는 CPU 내부 하드웨어 캐시의 영문 약어(3글자)는?",
          placeholder: "영문 약어 3글자 입력 (예: TLB)",
          answers: ["TLB", "tlb"],
          explanation: "TLB (Translation Lookaside Buffer)는 연관 메모리(Associative Memory)로 구성되어 가상 주소를 물리 주소로 초고속 변환합니다."
        },
        {
          id: 8, type: "short", score: 5, origin: "벨레이디의 모순 (Belady's Anomaly)",
          text: "페이지 교체 알고리즘 중 FIFO 알고리즘에서 프로세스에 할당된 프레임(메모리 공간) 수를 늘려주었음에도 불구하고, 오히려 페이지 부재(Page Fault) 발생 횟수가 증가하는 기이한 현상을 무엇이라 부르는가?",
          placeholder: "현상 명칭 입력 (예: 벨레이디의 모순)",
          answers: ["벨레이디의 모순", "벨레이디 모순", "벨레디의 모순", "belady's anomaly", "Belady's Anomaly"],
          explanation: "벨레이디의 모순(Belady's Anomaly)은 FIFO처럼 큐에 들어온 순서만 따지는 알고리즘에서 프레임이 증가해도 페이지 부재가 늘어나는 현상입니다."
        },
        {
          id: 9, type: "short", score: 5, origin: "스레싱 (Thrashing)",
          text: "다중 프로그래밍 정도(Degree of Multiprogramming)가 지나치게 높아져 각 프로세스가 원활히 실행되는 데 필요한 최소 프레임을 확보하지 못함으로써, CPU가 실제 연산보다 페이지 부재 처리와 디스크 입출력에 거의 모든 시간을 소모하여 CPU 이용률이 급락하는 현상은?",
          placeholder: "현상 명칭 입력 (예: 스레싱 또는 Thrashing)",
          answers: ["스레싱", "thrashing", "Thrashing", "쓰레싱"],
          explanation: "스레싱(Thrashing)은 페이지 교체 작업이 과도하게 발생하여 시스템이 사실상 멈추는 현상으로 워킹셋(Working Set) 알고리즘 등으로 예방합니다."
        },
        {
          id: 10, type: "short", score: 5, origin: "동적 메모리 할당: 최적 적합 (Best-fit)",
          text: "가변 분할 방식의 메모리 할당에서 비어 있는 여러 가용 블록(Hole)들 중, 프로세스의 요청 크기보다 크거나 같으면서 그 중 가장 크기가 작은(남는 자투리가 최소인) 블록을 찾아 할당하는 전략은?",
          placeholder: "전략 명칭 입력 (예: 최적 적합 또는 Best-Fit)",
          answers: ["최적 적합", "최적적합", "best-fit", "best fit", "Best-Fit", "Best fit"],
          explanation: "최적 적합(Best-Fit)은 가장 딱 맞는 크기의 공간에 배치하여 남는 자투리를 최소화하지만 검색 시간이 오래 걸리는 단점이 있습니다."
        },

        // [계산 2문항: 각 10점 = 20점]
        {
          id: 11, type: "calc", score: 10, origin: "페이징 논리 주소 비트 분할 계산",
          text: "어떤 컴퓨터 시스템의 논리 주소(Logical Address) 길이가 총 32비트이고, 한 페이지(Page)의 크기가 4 KB (4,096 바이트 = 2¹² 바이트)이다. 이때 논리 주소에서 페이지 오프셋(Offset, d)을 나타내는 데 필요한 비트 수를 제외한, 페이지 번호(Page Number, p)를 나타내는 비트 수는 몇 비트인가?",
          placeholder: "숫자만 입력",
          answers: ["20", "20비트"],
          explanation: "페이지 크기가 4KB = 2¹² 바이트이므로 오프셋(d) 비트는 12비트입니다. 전체 주소가 32비트이므로 페이지 번호(p) 비트는 32 - 12 = 20비트(총 2²⁰ = 약 100만 개 페이지)입니다."
        },
        {
          id: 12, type: "calc", score: 10, origin: "TLB 실효 접근 시간(EAT) 계산",
          text: "어떤 페이징 시스템에서 TLB 적중률(Hit Ratio)이 90%(0.9)이다. TLB 검색 시간이 10 ns이고 메인 메모리 접근 시간이 100 ns일 때, 이 시스템의 실효 메모리 접근 시간(EAT: Effective Access Time)은 몇 ns인가?\n(단, TLB Hit 시: TLB검색(10) + 메모리접근(100) = 110 ns / TLB Miss 시: TLB검색(10) + 페이지테이블메모리접근(100) + 실제데이터메모리접근(100) = 210 ns)",
          placeholder: "숫자만 입력",
          answers: ["120", "120ns"],
          explanation: "EAT = (Hit Ratio * Hit Time) + (Miss Ratio * Miss Time)\n= (0.9 * 110 ns) + (0.1 * 210 ns) = 99 ns + 21 ns = 120 ns입니다."
        },

        // [서술형 2문항: 총 30점]
        {
          id: 13, type: "essay", score: 15, origin: "교착상태 4대 필요조건과 순환 대기 부정",
          text: "[서술형 15점] 교착 상태(Deadlock)가 발생하기 위해 동시에 충족되어야 하는 <b>4대 필요조건(상호 배제, 점유 대기, 비선점, 순환 대기)</b>을 각각 설명하고, 이 중 가장 현실적으로 적용 가능한 예방(Prevention) 기법인 <b>'순환 대기(Circular Wait)'를 부정하는 구체적인 방안</b>을 자원 순서화(Resource Ordering) 관점에서 서술하시오.",
          placeholder: "여기에 서술형 답안을 작성하세요.",
          keywords: ["상호 배제", "점유 대기", "비선점", "순환 대기", "자원 유형별 고유 번호 부여", "오름차순 자원 요청 강제", "사이클 원천 차단"],
          rubric: [
            { item: "1. 4대 조건 명시", desc: "상호 배제, 점유 대기, 비선점, 순환 대기의 4대 조건을 명확히 설명 시 8점" },
            { item: "2. 순환 대기 부정 방안", desc: "모든 자원에 고유 정수 번호를 부여하고 오름차순(증가 순서)으로만 자원을 요청하도록 강제하여 사이클 생성을 불가능하게 함을 명시 시 7점" }
          ],
          explanation: "4대 조건: 1) 상호 배제: 최소 하나의 자원이 비공유 모드로 점유됨. 2) 점유 대기: 자원을 점유한 채 다른 자원을 요구하며 대기함. 3) 비선점: 다른 프로세스가 쥐고 있는 자원을 강제로 뺏을 수 없음. 4) 순환 대기: P0→P1→...→Pn→P0 형태로 자원 요구가 꼬리를 물고 원형 사이클을 형성함.\n순환 대기 부정 방안: 모든 자원 유형에 1, 2, 3... 과 같은 고유한 정수 번호를 부여하고, 프로세스가 자원을 요청할 때는 반드시 자신이 현재 보유한 자원 번호보다 큰 번호(오름차순)의 자원만을 요청할 수 있도록 시스템 규칙을 강제한다. 이를 통해 자원 할당 그래프 상에서 번호가 감소하는 방향의 역방향 간선이 발생하지 않으므로 원형 사이클 형성을 수학적으로 원천 차단할 수 있다."
        },
        {
          id: 14, type: "essay", score: 15, origin: "내부 단편화 vs 외부 단편화 비교",
          text: "[서술형 15점] 메모리 관리에서 발생하는 <b>내부 단편화(Internal Fragmentation)</b>와 <b>외부 단편화(External Fragmentation)</b>의 개념적 차이점을 비교하고, <b>페이징(Paging)</b>과 <b>세그멘테이션(또는 연속 메모리 할당)</b> 기법에서 각각 어떤 단편화가 주로 발생하는지와 그 해결 방안을 서술하시오.",
          placeholder: "여기에 서술형 답안을 작성하세요.",
          keywords: ["내부 단편화 할당 블록 내 잉여 공간", "외부 단편화 총 여유 공간은 충분하나 조각나서 수용 불가", "페이징은 내부 단편화", "연속할당/세그멘테이션은 외부 단편화", "압축(Compaction)과 페이징 적용"],
          rubric: [
            { item: "1. 내부 단편화 정의 & 발생", desc: "고정 크기 할당 시 프로세스 요청보다 큰 블록이 할당되어 블록 내부에 남는 자투리 공간(페이징에서 발생) 명시 시 5점" },
            { item: "2. 외부 단편화 정의 & 발생", desc: "가변 크기 할당 시 메모리 여유 총량은 충분하지만 작은 조각들로 흩어져 있어 큰 프로세스를 적재 못함(연속할당/세그멘테이션에서 발생) 명시 시 5점" },
            { item: "3. 해결 방안", desc: "외부 단편화는 페이징 기법 도입 또는 메모리 압축(Compaction)으로 해결, 내부 단편화는 적절한 페이지 크기 설정으로 최소화 명시 시 5점" }
          ],
          explanation: "1) 내부 단편화: 고정 분할이나 페이징처럼 정해진 단위(예: 4KB 프레임)로 메모리를 할당할 때, 프로세스가 필요로 하는 크기보다 더 큰 공간이 할당되어 블록 내부에서 사용되지 않고 낭비되는 자투리 공간을 말함. 주로 페이징 시스템의 마지막 페이지에서 발생함.\n2) 외부 단편화: 가변 분할 연속 할당이나 세그멘테이션에서 프로세스들이 생성/종료되면서 메모리 전체의 남은 공간 합은 충분하지만, 가용 공간들이 잘게 쪼개져 분산되어 있어 새로운 프로세스를 연속된 단일 공간에 적재하지 못하는 현상임.\n3) 해결 방안: 외부 단편화는 메모리 공간을 한곳으로 모으는 압축(Compaction)을 수행하거나, 불연속 할당 기법인 페이징(Paging)을 도입하여 완벽히 해결할 수 있다. 내부 단편화는 시스템 특성에 맞게 페이지 크기를 너무 크지 않게 적절히 작게 설계하여 낭비를 최소화한다."
        }
      ]
    }
    ,
{
      "id": "os_exam5",
      "name": "제5회 [올코드 특집] 전 범위 C 소스코드 & 실행 결과 예측 마스터 모의고사 (22문항)",
      "tag": "올코드 22문항 · 전범위 100점 실전",
      "desc": "운영체제 전 강의 슬라이드(1장~7장) 및 강의 녹음본에 등장하는 모든 C 시스템 프로그래밍 소스코드 전수 수록! fork() 반환값·메모리 격리, 연쇄 fork() 트리, 논리 단락 평가, execlp 오버레이, 공유메모리 환형버퍼, 유닉스 파이프 IPC, pthread/OpenMP, 임계구역 레이스컨디션, 피터슨 알고리즘, TAS/CAS 하드웨어 원자명령, 뮤텍스 스핀락, 세마포어 카운트/대기큐, Readers-Writers 및 식사하는 철학자까지 실제 시험에 반드시 출제되는 코드와 결과값 예측을 총망라한 100점 마스터 세트",
      "questions": [
            {
                  "id": 1,
                  "type": "choice",
                  "score": 4,
                  "origin": "3장 프로세스 생성 - fork() 반환값과 PID",
                  "text": "다음 C 프로그램을 실행했을 때 생성된 자식 프로세스의 PID가 2603이고 부모 프로세스의 PID가 2600이다. [A], [B], [C], [D] 각 라인에서 콘솔에 출력되는 정수 값으로 올바르게 짝지어진 것은?\n<pre><code class=\"language-c\">#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;sys/wait.h&gt;\n\nint main() {\n    pid_t pid, pid1;\n    pid = fork();\n    if (pid &lt; 0) {\n        return 1;\n    } else if (pid == 0) { /* 자식 프로세스 */\n        pid1 = getpid();\n        printf(\"child: pid = %d\\n\", pid);    /* [A] */\n        printf(\"child: pid1 = %d\\n\", pid1);  /* [B] */\n    } else { /* 부모 프로세스 */\n        wait(NULL);\n        pid1 = getpid();\n        printf(\"parent: pid = %d\\n\", pid);   /* [C] */\n        printf(\"parent: pid1 = %d\\n\", pid1); /* [D] */\n    }\n    return 0;\n}</code></pre>",
                  "options": [
                        "A. [A]: 0, [B]: 2603, [C]: 2603, [D]: 2600",
                        "B. [A]: 2603, [B]: 2603, [C]: 0, [D]: 2600",
                        "C. [A]: 0, [B]: 2600, [C]: 2603, [D]: 2603",
                        "D. [A]: 2603, [B]: 0, [C]: 2600, [D]: 2603"
                  ],
                  "answer": "A",
                  "answers": [
                        "A",
                        "a",
                        "1"
                  ],
                  "explanation": "자식 프로세스에게 fork()는 성공 시 0을 반환하므로 [A] pid=0입니다. getpid()는 현재 실행 중인 프로세스 자신의 PID를 반환하므로 자식 프로세스에서 [B] pid1=2603입니다. 부모 프로세스에게 fork()는 생성된 자식의 PID를 반환하므로 [C] pid=2603입니다. 부모 프로세스에서 getpid()는 부모 자신의 PID이므로 [D] pid1=2600입니다."
            },
            {
                  "id": 2,
                  "type": "calc",
                  "score": 4,
                  "origin": "3장 프로세스 메모리 독립성 - fork()와 전역변수",
                  "text": "다음 C 프로그램을 컴파일하여 실행했을 때, LINE A에서 최종 출력되는 전역 변수 'value'의 정수 값은 무엇인가? (숫자만 입력)\n<pre><code class=\"language-c\">#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;sys/wait.h&gt;\n\nint value = 5;\n\nint main() {\n    pid_t pid;\n    pid = fork();\n\n    if (pid == 0) { /* 자식 프로세스 */\n        value += 15;\n        return 0;\n    } else if (pid &gt; 0) { /* 부모 프로세스 */\n        wait(NULL);\n        printf(\"PARENT: value = %d\\n\", value); /* LINE A */\n    }\n    return 0;\n}</code></pre>",
                  "placeholder": "숫자만 입력",
                  "answers": [
                        "5",
                        "5점",
                        "value = 5",
                        "value=5"
                  ],
                  "explanation": "정답은 5입니다. fork() 시스템 콜로 생성된 자식 프로세스는 부모의 주소 공간(Code, Data, Heap, Stack)을 완전히 복제(Copy-on-Write)하여 독립된 메모리 영역을 갖습니다. 자식이 value += 15 연산으로 자신의 메모리 내 value를 20으로 수정하더라도 부모의 주소 공간에 있는 전역 변수 value는 아무런 영향을 받지 않고 원래 초기값인 5를 그대로 유지합니다."
            },
            {
                  "id": 3,
                  "type": "calc",
                  "score": 4,
                  "origin": "3장 연쇄 fork() 프로세스 트리 생성",
                  "text": "다음 C 코드를 실행했을 때, 콘솔 화면에 문자열 'OS_EXAM'이 출력되는 총 횟수(최초 부모 포함 생성된 모든 프로세스의 총합)는 몇 회인가? (숫자만 입력)\n<pre><code class=\"language-c\">#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n\nint main() {\n    for (int i = 0; i &lt; 4; i++) {\n        fork();\n    }\n    printf(\"OS_EXAM\\n\");\n    return 0;\n}</code></pre>",
                  "placeholder": "숫자만 입력",
                  "answers": [
                        "16",
                        "16번",
                        "16회",
                        "16개"
                  ],
                  "explanation": "정답은 16입니다. fork()가 n번 호출되면 기존의 모든 프로세스가 각각 새로운 자식 프로세스를 1개씩 추가 생성하므로, 프로세스의 수는 매 루프마다 2배씩 기하급수적으로 증가합니다. 4번의 루프 후 최종 프로세스 수는 2⁴ = 16개입니다. 모든 16개의 프로세스가 루프를 탈출한 후 각각 printf()를 실행하므로 총 16번 출력됩니다."
            },
            {
                  "id": 4,
                  "type": "calc",
                  "score": 4,
                  "origin": "3장 논리 연산자 단락 평가(Short-Circuit)와 fork()",
                  "text": "다음 C 코드가 실행되었을 때 터미널에 문자열 'HELLO'가 출력되는 총 횟수는 몇 번인가? (숫자만 입력)\n<pre><code class=\"language-c\">#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n\nint main() {\n    fork() || fork();\n    printf(\"HELLO\\n\");\n    return 0;\n}</code></pre>",
                  "placeholder": "숫자만 입력",
                  "answers": [
                        "3",
                        "3번",
                        "3회",
                        "3개"
                  ],
                  "explanation": "정답은 3번입니다. C 언어의 논리 OR(||) 연산자는 앞의 항이 참(0이 아닌 양수)이면 뒤의 항을 평가하지 않는 '단락 평가(Short-Circuit)' 특성을 갖습니다.\n1) 최초 부모 P0가 첫 번째 fork()를 호출하여 자식 C1을 생성합니다. 부모에게는 C1의 PID(양수, 참)가 반환되므로 부모는 뒤쪽 fork()를 실행하지 않고 바로 다음 줄로 넘어가 HELLO를 출력합니다. (1회)\n2) 자식 C1에게는 첫 번째 fork()의 리턴값으로 0(거짓)이 반환됩니다. 따라서 C1은 || 연산자의 뒤쪽 두 번째 fork()를 반드시 실행합니다.\n3) C1이 두 번째 fork()를 실행하여 손자 GC1을 생성합니다. 이제 C1과 GC1 모두 연산을 마치고 HELLO를 출력합니다. (2회)\n따라서 최종적으로 부모(P0), 자식(C1), 손자(GC1) 총 3개의 프로세스가 HELLO를 출력합니다."
            },
            {
                  "id": 5,
                  "type": "short",
                  "score": 4,
                  "origin": "3장 execlp() 시스템 콜과 주소 공간 덮어쓰기",
                  "text": "다음 C 프로그램에서 /bin/ls 실행 파일이 정상적으로 존재할 때, 자식 프로세스의 LINE X('EXEC_FAILED')가 화면에 결코 출력되지 않는 이유를 운영체제의 프로세스 '주소 공간(Address Space)' 관점에서 서술하시오.\n<pre><code class=\"language-c\">#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;sys/wait.h&gt;\n\nint main() {\n    pid_t pid = fork();\n    if (pid == 0) { /* 자식 */\n        execlp(\"/bin/ls\", \"ls\", NULL);\n        printf(\"EXEC_FAILED\\n\"); /* LINE X */\n    } else if (pid &gt; 0) { /* 부모 */\n        wait(NULL);\n        printf(\"CHILD_DONE\\n\");\n    }\n    return 0;\n}</code></pre>",
                  "placeholder": "이유를 핵심 키워드와 함께 서술하세요",
                  "answers": [
                        "주소 공간 덮어쓰기",
                        "메모리 덮어쓰기",
                        "오버레이",
                        "주소 공간 교체"
                  ],
                  "keywords": [
                        "execlp 성공",
                        "새로운 실행 파일 바이너리로 주소 공간 완전히 교체",
                        "Code Data Heap Stack 덮어씀",
                        "이후 코드 소멸"
                  ],
                  "explanation": "execlp() 시스템 콜이 성공적으로 실행되면, 현재 프로세스의 메모리 주소 공간(Code/Text, Data, Heap, Stack 영역 전체)이 호출한 새 프로그램(/bin/ls)의 바이너리로 완전히 덮어씌워집니다(Overlay). 따라서 기존에 적재되어 있던 프로그램의 다음 줄(LINE X) 명령문은 메모리상에서 영구 소멸되므로 결코 실행될 수 없습니다. LINE X는 오직 execlp()가 실패(파일 없음, 권한 오류 등)하여 -1을 리턴했을 때만 실행됩니다."
            },
            {
                  "id": 6,
                  "type": "calc",
                  "score": 4,
                  "origin": "3장 공유 메모리 환형 버퍼(Circular Buffer)",
                  "text": "다음은 공유 메모리를 이용한 환형 버퍼 생산자-소비자 C 코드의 일부이다. BUFFER_SIZE가 10으로 선언되어 있을 때, 이 알고리즘에서 버퍼에 동시에 채울 수 있는 '최대 아이템 개수'는 몇 개인가? (숫자만 입력)\n<pre><code class=\"language-c\">#define BUFFER_SIZE 10\nitem buffer[BUFFER_SIZE];\nint in = 0;\nint out = 0;\n\n/* Producer */\nwhile (true) {\n    while (((in + 1) % BUFFER_SIZE) == out)\n        ; /* 버퍼 FULL 대기 */\n    buffer[in] = next_produced;\n    in = (in + 1) % BUFFER_SIZE;\n}\n\n/* Consumer */\nwhile (true) {\n    while (in == out)\n        ; /* 버퍼 EMPTY 대기 */\n    next_consumed = buffer[out];\n    out = (out + 1) % BUFFER_SIZE;\n}</code></pre>",
                  "placeholder": "숫자만 입력",
                  "answers": [
                        "9",
                        "9개"
                  ],
                  "explanation": "정답은 9개 (BUFFER_SIZE - 1)입니다. 만약 버퍼 슬롯 10개를 모두 꽉 채우게 되면 (in + 1) % 10 연산에 의해 in의 위치가 out과 같아지게(in == out) 됩니다. 그런데 in == out은 '버퍼가 완전히 비어있는(Empty)' 조건과 동일하므로, 추가적인 count 변수 없이 포인터 위치만으로는 비어있는 상태와 꽉 찬 상태를 구분할 수 없게 됩니다. 따라서 빈 공간 1칸을 항상 보초(Sentinel)로 남겨두어 최대 9개까지만 저장합니다."
            },
            {
                  "id": 7,
                  "type": "choice",
                  "score": 4,
                  "origin": "3장 UNIX Ordinary Pipe(파이프) 통신",
                  "text": "다음 UNIX Ordinary Pipe를 사용한 프로세스 간 통신(IPC) C 프로그램에서 fd[0]과 fd[1]의 역할로 올바른 것은?\n<pre><code class=\"language-c\">#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n#include &lt;unistd.h&gt;\n\n#define BUFFER_SIZE 25\n#define READ_END 0\n#define WRITE_END 1\n\nint main() {\n    char write_msg[BUFFER_SIZE] = \"SYSTEM_PASS\";\n    char read_msg[BUFFER_SIZE];\n    int fd[2];\n    pipe(fd);\n\n    if (fork() &gt; 0) { /* 부모 */\n        close(fd[READ_END]);\n        write(fd[WRITE_END], write_msg, strlen(write_msg) + 1);\n        close(fd[WRITE_END]);\n    } else { /* 자식 */\n        close(fd[WRITE_END]);\n        read(fd[READ_END], read_msg, BUFFER_SIZE);\n        printf(\"%s\\n\", read_msg);\n        close(fd[READ_END]);\n    }\n    return 0;\n}</code></pre>",
                  "options": [
                        "A. fd[0]은 읽기 전용 끝단(Read End), fd[1]은 쓰기 전용 끝단(Write End)",
                        "B. fd[0]은 쓰기 전용 끝단(Write End), fd[1]은 읽기 전용 끝단(Read End)",
                        "C. 둘 다 양방향 읽기/쓰기가 동시에 가능한 파일 디스크립터",
                        "D. fd[0]은 부모 전용 채널, fd[1]은 자식 전용 채널"
                  ],
                  "answer": "A",
                  "answers": [
                        "A",
                        "a",
                        "1"
                  ],
                  "explanation": "UNIX 일반 파이프(Ordinary Pipe)에서 pipe(fd) 호출 시 fd[0]은 항상 읽기 끝단(READ_END), fd[1]은 쓰기 끝단(WRITE_END)으로 설정되어 단방향 통신 채널을 형성합니다. 부모는 쓰기 위해 안 쓰는 fd[0]을 닫고 fd[1]에 쓰며, 자식은 쓰지 않는 fd[1]을 닫고 fd[0]에서 읽습니다."
            },
            {
                  "id": 8,
                  "type": "choice",
                  "score": 4,
                  "origin": "4장 스레드와 fork 혼합 모델 (thread4.23.c)",
                  "text": "다음 C 프로그램을 컴파일하여 실행했을 때, LINE C와 LINE P에서 터미널에 출력되는 문자열 결과로 올바른 것은?\n<pre><code class=\"language-c\">#include &lt;pthread.h&gt;\n#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;sys/wait.h&gt;\n\nint value = 0;\n\nvoid *runner(void *param) {\n    value = 5;\n    pthread_exit(0);\n}\n\nint main(int argc, char *argv[]) {\n    pid_t pid;\n    pthread_t tid;\n\n    pid = fork();\n    if (pid == 0) { /* 자식 프로세스 */\n        pthread_create(&tid, NULL, runner, NULL);\n        pthread_join(tid, NULL);\n        printf(\"CHILD: value = %d\\n\", value); /* LINE C */\n    } else if (pid &gt; 0) { /* 부모 프로세스 */\n        wait(NULL);\n        printf(\"PARENT: value = %d\\n\", value); /* LINE P */\n    }\n    return 0;\n}</code></pre>",
                  "options": [
                        "A. CHILD: value = 5 , PARENT: value = 0",
                        "B. CHILD: value = 5 , PARENT: value = 5",
                        "C. CHILD: value = 0 , PARENT: value = 0",
                        "D. CHILD: value = 0 , PARENT: value = 5"
                  ],
                  "answer": "A",
                  "answers": [
                        "A",
                        "a",
                        "1"
                  ],
                  "explanation": "1) fork() 시 자식 프로세스는 부모로부터 완전히 독립된 메모리 주소 공간(초기 value=0)을 복제받습니다.\n2) 자식 프로세스 내부에서 생성된 POSIX 스레드는 자식 프로세스의 메모리를 공유하므로 전역 변수 value를 5로 수정합니다. pthread_join 후 자식의 LINE C는 'CHILD: value = 5'를 출력합니다.\n3) 부모 프로세스는 자식과 물리적으로 격리된 별도의 메모리 공간을 유지하므로, 자식 내부의 스레드가 무슨 값을 바꿨든 부모의 value는 여전히 0입니다. 따라서 부모의 LINE P는 'PARENT: value = 0'을 출력합니다."
            },
            {
                  "id": 9,
                  "type": "calc",
                  "score": 4,
                  "origin": "4장 프로세스 및 스레드 생성 개수 카운팅 (problem.c)",
                  "text": "다음 C 코드가 실행되는 동안 '새롭게 생성된 자식 프로세스의 총 개수'는 몇 개인가? (초기 부모 프로세스는 제외, 숫자만 입력)\n<pre><code class=\"language-c\">#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;pthread.h&gt;\n\nvoid *runner(void *param) {\n    pthread_exit(0);\n}\n\nint main() {\n    pid_t pid;\n    pthread_t tid;\n\n    pid = fork(); /* 1차 fork */\n    if (pid == 0) {\n        fork();   /* 2차 fork */\n        pthread_create(&tid, NULL, runner, NULL);\n    }\n    fork();       /* 3차 fork */\n    return 0;\n}</code></pre>",
                  "placeholder": "숫자만 입력",
                  "answers": [
                        "6",
                        "6개"
                  ],
                  "explanation": "정답은 6개입니다.\n1) 1차 fork(): 초기 부모 P0가 자식 C1을 생성 (총 2개: P0, C1)\n2) if (pid == 0): 자식 C1만 내부로 진입하여 2차 fork() 호출 -> 손자 C1_1 생성. 그리고 C1과 C1_1 둘 다 각각 스레드를 1개씩 생성(스레드는 총 2개 생성됨).\n3) 현재 프로세스 상태: P0, C1, C1_1 총 3개 존재.\n4) 3차 fork(): 이 3개의 프로세스가 모두 3차 fork()를 실행하므로 각각 1개씩 총 3개의 자식 프로세스를 추가 생성함.\n5) 최종 프로세스 총합: 기존 3개 + 새로 생긴 3개 = 6개의 프로세스가 추가 생성되어 전체는 7개(P0 포함)가 되며, '새로 생성된 프로세스'는 총 6개입니다."
            },
            {
                  "id": 10,
                  "type": "choice",
                  "score": 4,
                  "origin": "4장 POSIX Pthread sum 계산 및 pthread_join()",
                  "text": "다음 C 프로그램에서 LINE J (pthread_join)의 역할과, 만약 LINE J를 주석(//) 처리하여 제거했을 때 발생할 수 있는 문제점으로 가장 올바른 설명은?\n<pre><code class=\"language-c\">#include &lt;pthread.h&gt;\n#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\nint sum = 0;\n\nvoid *runner(void *param) {\n    int upper = atoi(param);\n    for (int i = 1; i &lt;= upper; i++) {\n        sum += i;\n    }\n    pthread_exit(0);\n}\n\nint main(int argc, char *argv[]) {\n    pthread_t tid;\n    pthread_create(&tid, NULL, runner, \"5\");\n    pthread_join(tid, NULL); /* LINE J */\n    printf(\"sum = %d\\n\", sum);\n    return 0;\n}</code></pre>",
                  "options": [
                        "A. LINE J는 스레드가 종료될 때까지 메인을 대기시키며, 제거 시 스레드가 sum을 계산하기 전에 메인이 먼저 실행되어 sum = 0이 출력될 수 있다.",
                        "B. LINE J는 스레드를 즉시 강제 종료시키는 함수이며, 제거 시 스레드가 영구 무한 루프에 빠진다.",
                        "C. LINE J는 스레드에게 CPU 권한을 양보하며, 제거하더라도 운영체제가 자동으로 스레드 종료를 대기하므로 출력 결과는 항상 15로 동일하다.",
                        "D. LINE J는 스레드의 반환값을 0으로 리셋하며, 제거 시 sum 변수가 오버플로우를 일으킨다."
                  ],
                  "answer": "A",
                  "answers": [
                        "A",
                        "a",
                        "1"
                  ],
                  "explanation": "pthread_join()은 지정한 스레드가 종료될 때까지 호출한 스레드(main 스레드)를 블록(대기)시키는 동기화 함수입니다. 이를 생략하면 메인 스레드가 백그라운드 스레드의 runner 연산(1~5의 합 15)이 끝나기도 전에 곧바로 다음 줄로 진행하여 초기값인 sum = 0을 출력하고 프로세스를 종료해버리는 경쟁 상태(Race Condition)가 발생합니다."
            },
            {
                  "id": 11,
                  "type": "short",
                  "score": 4,
                  "origin": "4장 OpenMP 병렬 컴파일 지시어",
                  "text": "다음 OpenMP 기반 병렬 프로그램을 gcc 컴파일러로 빌드할 때 OpenMP 지시어(#pragma omp)를 인식시키기 위해 반드시 추가해야 하는 컴파일 옵션 플래그는 무엇인가? (예: -option)\n<pre><code class=\"language-c\">#include &lt;omp.h&gt;\n#include &lt;stdio.h&gt;\n\nint main() {\n    #pragma omp parallel num_threads(4)\n    {\n        printf(\"OpenMP Thread Run!\\n\");\n    }\n    return 0;\n}</code></pre>",
                  "placeholder": "-option 형식으로 입력",
                  "answers": [
                        "-fopenmp",
                        "fopenmp"
                  ],
                  "explanation": "gcc에서 OpenMP 지시어(#pragma omp)를 활성화하여 다중 스레드로 병렬 컴파일하려면 컴파일 옵션으로 '-fopenmp' (예: gcc -fopenmp test.c)를 전달해야 합니다. 이 옵션이 없으면 pragma 지시어가 무시되어 단일 스레드로 순차 실행됩니다."
            },
            {
                  "id": 12,
                  "type": "calc",
                  "score": 4,
                  "origin": "5장 임계구역 문제 - count++ / count-- 어셈블리 레이스 컨디션",
                  "text": "전역 변수 count의 초기값이 5일 때, 생산자와 소비자가 CPU를 번갈아 선점하면서 아래 명령어들이 'T1 -&gt; T2 -&gt; T4 -&gt; T5 -&gt; T3 -&gt; T6' 순서로 인터리빙(Interleaving) 실행되었다. T6이 완료된 후 최종 메모리 count 변수에 저장되어 있는 정수 값은 얼마인가? (숫자만 입력)\n<pre><code class=\"language-c\">/* 생산자 */\nregister1 = count;        // T1\nregister1 = register1 + 1;// T2\ncount = register1;        // T3\n\n/* 소비자 */\nregister2 = count;        // T4\nregister2 = register2 - 1;// T5\ncount = register2;        // T6</code></pre>",
                  "placeholder": "숫자만 입력",
                  "answers": [
                        "4",
                        "4개"
                  ],
                  "explanation": "정답은 4입니다.\n1) T1: 생산자 register1 = count (5)\n2) T2: 생산자 register1 = 5 + 1 = 6\n3) T4: 소비자 CPU 선점! 소비자 register2 = count (아직 메모리 count는 5이므로 5 적재)\n4) T5: 소비자 register2 = 5 - 1 = 4\n5) T3: 생산자 CPU 재선점! count = register1 (메모리에 6 저장)\n6) T6: 소비자 CPU 재선점! count = register2 (메모리에 4를 덮어씀!)\n따라서 최종 메모리 count는 4가 됩니다. (정상적인 동기화 환경이라면 5+1-1=5여야 하지만 레이스 컨디션으로 인해 4가 저장됨)"
            },
            {
                  "id": 13,
                  "type": "choice",
                  "score": 4,
                  "origin": "5장 피터슨 알고리즘 (Peterson's Algorithm)",
                  "text": "다음 피터슨 알고리즘 코드에서 flag[i] = true와 turn = j가 수행하는 역할을 가장 올바르게 설명한 것은?\n<pre><code class=\"language-c\">int turn;\nboolean flag[2];\n\n/* Process Pi (상대방은 Pj) */\nwhile (true) {\n    flag[i] = true;\n    turn = j;\n    while (flag[j] && turn == j)\n        ; /* busy wait */\n\n    /* CRITICAL SECTION */\n\n    flag[i] = false;\n\n    /* REMAINDER SECTION */\n}</code></pre>",
                  "options": [
                        "A. flag[i]=true는 자신이 임계구역에 진입할 의사가 있음을 선언하고, turn=j는 상대방에게 먼저 진입할 수 있는 우선권을 양보하는 것이다.",
                        "B. flag[i]=true는 상대방을 임계구역에서 강제 추방하고, turn=j는 자신의 턴을 강제로 확정하는 것이다.",
                        "C. flag[i]=true는 임계구역의 잠금을 해제하고, turn=j는 하드웨어 인터럽트를 활성화하는 것이다.",
                        "D. flag[i]=true와 turn=j 모두 자식 프로세스에게만 실행 권한을 위임하는 동기화 명령이다."
                  ],
                  "answer": "A",
                  "answers": [
                        "A",
                        "a",
                        "1"
                  ],
                  "explanation": "피터슨 알고리즘에서 flag[i]는 프로세스 i가 임계구역에 들어가고 싶다는 의향(intent)을 표시하는 것이며, turn은 '양보의 미덕'으로 상대방 j에게 진입 차례를 양보하는 변수입니다. 두 프로세스가 동시에 flag를 세우더라도 turn 변수에는 마지막에 쓴 값 하나만 남으므로, 먼저 양보한 프로세스가 임계구역에 진입하고 나중에 양보한 프로세스가 while문에서 대기하여 상호 배제(Mutual Exclusion)를 완벽히 만족합니다."
            },
            {
                  "id": 14,
                  "type": "choice",
                  "score": 4,
                  "origin": "5장 하드웨어 원자적 명령어 - test_and_set",
                  "text": "다음 C 코드에서 초기 lock = false 상태일 때, 첫 번째 프로세스 P0가 test_and_set(&lock)을 호출하여 임계구역에 성공적으로 진입할 때 (1) 함수가 반환하는 값(rv)과 (2) 함수 호출 직후 lock 변수에 저장되는 새로운 값으로 올바른 것은?\n<pre><code class=\"language-c\">boolean test_and_set(boolean *target) {\n    boolean rv = *target;\n    *target = true;\n    return rv;\n}\n\n/* 임계구역 진입 제어 */\nboolean lock = false;\n\ndo {\n    while (test_and_set(&lock))\n        ; /* busy wait */\n\n    /* CRITICAL SECTION */\n\n    lock = false;\n\n    /* REMAINDER SECTION */\n} while (true);</code></pre>",
                  "options": [
                        "A. 반환값: false , lock의 새로운 값: true",
                        "B. 반환값: true , lock의 새로운 값: false",
                        "C. 반환값: false , lock의 새로운 값: false",
                        "D. 반환값: true , lock의 새로운 값: true"
                  ],
                  "answer": "A",
                  "answers": [
                        "A",
                        "a",
                        "1"
                  ],
                  "explanation": "test_and_set은 인자로 전달된 포인터의 '이전 값'을 반환하고, 메모리의 해당 값은 무조건 'true'로 갱신하는 하드웨어 원자적(Atomic) 연산입니다. 따라서 lock이 false일 때 호출하면 이전 값인 false를 반환하여 while(false) 탈출로 임계구역에 들어가고, lock 변수 자체는 true로 변경되어 뒤따라오는 다른 프로세스들을 while(true)에 묶어둡니다."
            },
            {
                  "id": 15,
                  "type": "calc",
                  "score": 4,
                  "origin": "5장 하드웨어 원자적 명령어 - compare_and_swap (CAS)",
                  "text": "다음 CAS 기반 임계구역 동기화 코드에서, 현재 다른 프로세스가 임계구역을 점유하여 lock의 값이 1인 상태이다. 이때 새로운 프로세스가 while 조건문 compare_and_swap(&lock, 0, 1)을 실행했을 때 함수가 반환하는 정수 값은 무엇인가? (숫자만 입력)\n<pre><code class=\"language-c\">int compare_and_swap(int *value, int expected, int new_value) {\n    int temp = *value;\n    if (*value == expected)\n        *value = new_value;\n    return temp;\n}\n\n/* 임계구역 제어 */\nint lock = 0;\n\nwhile (true) {\n    while (compare_and_swap(&lock, 0, 1) != 0)\n        ; /* busy wait */\n\n    /* CRITICAL SECTION */\n\n    lock = 0;\n\n    /* REMAINDER SECTION */\n}</code></pre>",
                  "placeholder": "숫자만 입력",
                  "answers": [
                        "1"
                  ],
                  "explanation": "정답은 1입니다. 현재 lock이 1이므로 compare_and_swap의 value(1)와 expected(0)가 일치하지 않습니다. 따라서 *value = 1로 교체되지 않고 원래 가지고 있던 이전 값인 temp(1)를 그대로 반환합니다. 이 리턴값 1은 != 0 조건을 만족하므로 while 루프가 계속 회전(busy wait)하며 진입을 대기하게 됩니다."
            },
            {
                  "id": 16,
                  "type": "short",
                  "score": 4,
                  "origin": "5장 뮤텍스 락 (스핀락 vs 슬립락)",
                  "text": "다음 코드처럼 임계구역 진입 조건(available)을 획득할 때까지 CPU를 점유한 채 루프를 계속 돌며 검사하는(Busy Waiting) 락을 무엇이라 부르는가? (한국어 또는 영어로 작성)\n<pre><code class=\"language-c\">acquire() {\n    while (!available)\n        ; /* busy wait */\n    available = false;\n}\n\nrelease() {\n    available = true;\n}</code></pre>",
                  "placeholder": "락 명칭 입력",
                  "answers": [
                        "스핀락",
                        "spinlock",
                        "Spinlock",
                        "스핀 락"
                  ],
                  "explanation": "바쁜 대기(Busy Waiting)를 수행하며 락 획득을 계속해서 재시도하는 뮤텍스 락을 '스핀락(Spinlock)'이라고 합니다. 스핀락은 임계구역 점유 시간이 매우 짧고 멀티코어 환경일 때 문맥 교환(Context Switch)에 따른 오버헤드를 줄일 수 있어 유용하지만, 대기 시간이 길면 CPU 사이클을 심각하게 낭비하는 단점이 있습니다."
            },
            {
                  "id": 17,
                  "type": "choice",
                  "score": 4,
                  "origin": "5장 세마포어(Semaphore) 카운팅과 대기 큐",
                  "text": "다음 비선점 세마포어 구현에서, 초기 S->value가 2인 세마포어에 대해 프로세스들이 연속으로 5번의 wait(S) 연산을 수행하고 signal(S)은 한 번도 수행하지 않았다. 이때 최종 S->value의 값과 현재 S->list에서 대기(Blocked) 상태로 잠들어 있는 프로세스의 수로 바르게 짝지어진 것은?\n<pre><code class=\"language-c\">typedef struct {\n    int value;\n    struct process *list;\n} semaphore;\n\nvoid wait(semaphore *S) {\n    S-&gt;value--;\n    if (S-&gt;value &lt; 0) {\n        add_to_list(S-&gt;list, current_process);\n        sleep();\n    }\n}\n\nvoid signal(semaphore *S) {\n    S-&gt;value++;\n    if (S-&gt;value &lt;= 0) {\n        process *P = remove_from_list(S-&gt;list);\n        wakeup(P);\n    }\n}</code></pre>",
                  "options": [
                        "A. S->value = -3 , 대기 중인 프로세스 수 = 3개",
                        "B. S->value = -5 , 대기 중인 프로세스 수 = 5개",
                        "C. S->value = -3 , 대기 중인 프로세스 수 = 2개",
                        "D. S->value = 0 , 대기 중인 프로세스 수 = 3개"
                  ],
                  "answer": "A",
                  "answers": [
                        "A",
                        "a",
                        "1"
                  ],
                  "explanation": "초기값 2에서 wait(S)가 5번 호출되면 S->value는 2 - 5 = -3이 됩니다. 비선점 바쁜 대기가 없는 세마포어에서 value가 음수일 때, 그 값의 절댓값(|-3| = 3)은 현재 세마포어 대기 큐(list)에 대기 중인 프로세스의 정확한 개수를 의미합니다."
            },
            {
                  "id": 18,
                  "type": "choice",
                  "score": 4,
                  "origin": "5장 세마포어 교착 상태 (Deadlock)",
                  "text": "두 프로세스 P0와 P1이 실행될 때 두 프로세스가 모두 영구히 대기 상태에 빠지는 교착 상태(Deadlock)를 초래하는 라인 실행 인터리빙 순서로 올바른 것은?\n<pre><code class=\"language-c\">/* semaphore S = 1, Q = 1 */\n\n/* Process P0 */\nwait(S); // 라인 1\nwait(Q); // 라인 2\n...\nsignal(S);\nsignal(Q);\n\n/* Process P1 */\nwait(Q); // 라인 3\nwait(S); // 라인 4\n...\nsignal(Q);\nsignal(S);</code></pre>",
                  "options": [
                        "A. 라인 1 (P0: wait(S)) -&gt; 라인 3 (P1: wait(Q)) -&gt; 라인 2 (P0: wait(Q)) -&gt; 라인 4 (P1: wait(S))",
                        "B. 라인 1 (P0: wait(S)) -&gt; 라인 2 (P0: wait(Q)) -&gt; 라인 3 (P1: wait(Q)) -&gt; 라인 4 (P1: wait(S))",
                        "C. 라인 3 (P1: wait(Q)) -&gt; 라인 4 (P1: wait(S)) -&gt; 라인 1 (P0: wait(S)) -&gt; 라인 2 (P0: wait(Q))",
                        "D. 라인 1 (P0: wait(S)) -&gt; signal(S) -&gt; 라인 3 (P1: wait(Q)) -&gt; signal(Q)"
                  ],
                  "answer": "A",
                  "answers": [
                        "A",
                        "a",
                        "1"
                  ],
                  "explanation": "P0가 먼저 wait(S)를 실행하여 S를 쥐고(S=0), 문맥 교환이 일어나 P1이 wait(Q)를 실행하여 Q를 쥔(Q=0) 후, P0가 Q를 요구하면(wait(Q)) P1이 쥐고 있어 블록되고, P1이 S를 요구하면(wait(S)) P0가 쥐고 있어 블록됩니다. 서로가 쥔 자원을 기다리며 무한 대기하는 전형적인 교착 상태(Deadlock) 순서입니다."
            },
            {
                  "id": 19,
                  "type": "essay",
                  "score": 7,
                  "origin": "6장 유한 버퍼 세마포어 순서 오류 분석",
                  "text": "[심층 분석 서술 7점] 생산자 코드에서 wait(empty)와 wait(mutex)의 순서가 아래와 같이 뒤바뀌었을 때, 만약 현재 버퍼가 가득 찬 상태(empty == 0)라면 어떤 치명적인 교착 상태(Deadlock)가 발생하는지 그 원인과 프로세스들의 대기 과정을 단계별로 서술하시오.\n<pre><code class=\"language-c\">/* Producer */\ndo {\n    /* produce an item */\n    wait(mutex); // 잘못 변경된 순서!\n    wait(empty);\n    /* add to buffer */\n    signal(mutex);\n    signal(full);\n} while (true);\n\n/* Consumer */\ndo {\n    wait(full);\n    wait(mutex);\n    /* remove an item */\n    signal(mutex);\n    signal(empty);\n    /* consume item */\n} while (true);</code></pre>",
                  "placeholder": "여기에 서술형 답안을 작성하세요.",
                  "keywords": [
                        "버퍼 가득 찬 상태 empty=0",
                        "생산자가 mutex 락 먼저 획득",
                        "생산자가 wait(empty)에서 블록 슬립",
                        "소비자는 wait(mutex)에서 블록",
                        "상호 대기로 교착 상태 Deadlock"
                  ],
                  "rubric": [
                        {
                              "item": "1. 생산자의 락 점유 및 블록",
                              "desc": "생산자가 mutex를 먼저 획득(0)한 후 empty=0이므로 wait(empty)에서 mutex를 쥔 채 슬립 대기 상태로 빠짐을 기술 시 3.5점"
                        },
                        {
                              "item": "2. 소비자의 진입 차단 및 상호 교착",
                              "desc": "소비자가 버퍼를 비워주려 해도 wait(mutex)에서 생산자가 쥐고 있는 락 때문에 블록되어 영원히 깨어날 수 없는 Deadlock이 발생함을 기술 시 3.5점"
                        }
                  ],
                  "explanation": "1) 버퍼가 가득 차서 empty=0인 상황에서 생산자가 실행됩니다.\n2) 생산자는 wait(mutex)를 먼저 호출하여 버퍼 접근 독점 락(mutex)을 성공적으로 획득합니다.\n3) 그 직후 생산자는 wait(empty)를 호출하지만, empty가 0이므로 음수가 되어 슬립(sleep) 대기 큐로 들어가 잠듭니다. 이때 생산자는 방금 획득한 mutex 락을 손에 쥔 채로 잠들게 됩니다.\n4) 버퍼 공간을 만들어주기 위해 소비자가 진입하여 아이템을 꺼내려 하지만, 소비자의 wait(mutex)에서 이미 생산자가 쥐고 놓지 않은 mutex 때문에 소비자마저 블록됩니다.\n5) 결국 소비자는 mutex를 얻지 못해 영원히 소비를 못 하고, 생산자는 소비자가 empty를 signal 해주지 않아 영원히 깨어나지 못하는 치명적인 Deadlock에 빠집니다."
            },
            {
                  "id": 20,
                  "type": "essay",
                  "score": 7,
                  "origin": "6장 Readers-Writers 문제 세마포어 동기화",
                  "text": "[분석형 7점] 다음 Readers-Writers 해결 알고리즘에서 (1) read_count == 1일 때만 LINE R1(wait(rw_mutex))을 호출하는 이유와, (2) read_count == 0일 때만 LINE R2(signal(rw_mutex))를 호출하는 이유를 각각 서술하시오.\n<pre><code class=\"language-c\">semaphore rw_mutex = 1;\nsemaphore mutex = 1;\nint read_count = 0;\n\n/* Reader Process */\ndo {\n    wait(mutex);\n    read_count++;\n    if (read_count == 1)\n        wait(rw_mutex); /* LINE R1 */\n    signal(mutex);\n\n    /* reading performed */\n\n    wait(mutex);\n    read_count--;\n    if (read_count == 0)\n        signal(rw_mutex); /* LINE R2 */\n    signal(mutex);\n} while (true);</code></pre>",
                  "placeholder": "여기에 서술형 답안을 작성하세요.",
                  "keywords": [
                        "첫 번째 리더가 작성자 배제 락 획득",
                        "이후 리더들은 락 대기 없이 동시 읽기 허용",
                        "마지막 리더가 읽기를 마칠 때 락 해제",
                        "대기 중인 작성자 진입 허용"
                  ],
                  "rubric": [
                        {
                              "item": "1. read_count == 1 (첫 번째 리더)의 역할",
                              "desc": "첫 번째로 진입하는 리더가 rw_mutex를 획득하여 작성자(Writer)의 진입을 원천 차단하고, 2번째 이후의 리더들은 락 대기 없이 병렬로 동시에 읽을 수 있게 함을 설명 시 3.5점"
                        },
                        {
                              "item": "2. read_count == 0 (마지막 리더)의 역할",
                              "desc": "임계구역에 남아있는 모든 리더가 다 읽고 나가는 '마지막 리더' 시점에 비로소 rw_mutex를 해제하여 대기 중인 작성자가 진입할 수 있도록 함을 설명 시 3.5점"
                        }
                  ],
                  "explanation": "(1) read_count == 1 (LINE R1): 가장 처음 진입하는 첫 번째 리더(First Reader)가 대표로 rw_mutex를 획득하여 데이터를 쓰고 있는 작성자(Writer)를 차단합니다. 일단 첫 리더가 이 락을 쥐면, 그 뒤에 들어오는 수많은 다른 리더들은 rw_mutex에 대한 추가 대기 없이 즉시 동시 병렬 읽기가 가능해집니다.\n(2) read_count == 0 (LINE R2): 임계구역에서 책을 읽고 있는 리더가 단 1명이라도 남아있으면 작성자가 써서는 안 되므로, 마지막으로 임계구역을 빠져나가는 마지막 리더(Last Reader)만이 rw_mutex를 signal()하여 대기 중이던 작성자가 임계구역에 들어올 수 있도록 잠금을 풀어줍니다."
            },
            {
                  "id": 21,
                  "type": "essay",
                  "score": 7,
                  "origin": "6장 식사하는 철학자 문제 (Dining-Philosophers)",
                  "text": "[서술형 7점] 다음 코드에서 5명의 철학자가 동시에 배가 고파져서 각자 자신의 왼쪽 젓가락(chopstick[i])을 동시에 집었을 때 발생하는 문제점의 명칭을 쓰고, 이 문제점을 해결하기 위한 대표적인 비대칭(Asymmetric) 해결 방안을 구체적으로 서술하시오.\n<pre><code class=\"language-c\">semaphore chopstick[5]; /* 모두 1로 초기화 */\n\n/* Philosopher i (0 ~ 4) */\ndo {\n    wait(chopstick[i]);\n    wait(chopstick[(i + 1) % 5]);\n\n    /* eat */\n\n    signal(chopstick[i]);\n    signal(chopstick[(i + 1) % 5]);\n\n    /* think */\n} while (true);</code></pre>",
                  "placeholder": "여기에 서술형 답안을 작성하세요.",
                  "keywords": [
                        "교착 상태 Deadlock",
                        "환형 대기 Circular Wait",
                        "홀수 번호 철학자는 왼쪽 먼저",
                        "짝수 번호 철학자는 오른쪽 먼저",
                        "비대칭 젓가락 집기 규칙"
                  ],
                  "rubric": [
                        {
                              "item": "1. 발생 문제점 명시",
                              "desc": "모두가 왼쪽 젓가락을 쥐고 오른쪽 젓가락을 기다려 발생하는 교착 상태(Deadlock / 순환 대기) 명시 시 3점"
                        },
                        {
                              "item": "2. 비대칭 해결책 서술",
                              "desc": "철학자의 번호(짝수/홀수)에 따라 젓가락을 집는 순서를 다르게 강제(예: 홀수는 왼쪽 먼저, 짝수는 오른쪽 먼저)하여 순환 대기 고리를 끊어냄을 설명 시 4점"
                        }
                  ],
                  "explanation": "1) 문제점: 교착 상태(Deadlock). 모든 철학자가 동시에 왼쪽 젓가락을 집으면 남아있는 젓가락이 하나도 없는 상태에서 모두가 오른쪽 젓가락을 요구하며 무한 대기하는 순환 대기(Circular Wait)가 형성됩니다.\n2) 비대칭(Asymmetric) 해결 방안: 모든 철학자가 동일한 방향으로 젓가락을 집는 대칭성을 깨뜨리는 것입니다. 예를 들어 홀수 번호 철학자(1, 3)는 왼쪽 젓가락을 먼저 집은 뒤 오른쪽 젓가락을 집고, 짝수 번호 철학자(0, 2, 4)는 오른쪽 젓가락을 먼저 집은 뒤 왼쪽 젓가락을 집도록 규칙을 비대칭화합니다. 이렇게 하면 인접한 두 철학자가 동일한 젓가락을 두고 먼저 경쟁하게 되므로 한 명이 두 젓가락을 모두 쥐고 식사할 수 있게 되어 순환 대기 사이클이 원천적으로 파괴됩니다."
            },
            {
                  "id": 22,
                  "type": "essay",
                  "score": 7,
                  "origin": "3장 fork 복합 실행 결과 트레이스",
                  "text": "[복합 출력 예측 서술 7점] 다음 C 코드를 실행했을 때 터미널에 출력되는 모든 라인(C1, C2, P1)의 출력 문자열과 각 라인의 정수 값을 실행 순서 및 프로세스 계층 구조(부모, 자식, 손자)와 함께 완벽히 설명하여 서술하시오.\n<pre><code class=\"language-c\">#include &lt;stdio.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;sys/wait.h&gt;\n\nint main() {\n    int val = 10;\n    pid_t pid = fork();\n\n    if (pid == 0) {\n        val += 20;\n        printf(\"C1: %d\\n\", val);\n        fork();\n        val += 5;\n        printf(\"C2: %d\\n\", val);\n    } else if (pid &gt; 0) {\n        wait(NULL);\n        val *= 2;\n        printf(\"P1: %d\\n\", val);\n    }\n    return 0;\n}</code></pre>",
                  "placeholder": "여기에 서술형 답안을 작성하세요.",
                  "keywords": [
                        "C1: 30 자식 프로세스",
                        "C2: 35 자식과 손자 각각 1번씩 총 2회 출력",
                        "P1: 20 부모 프로세스",
                        "독립된 메모리 공간 val 복제"
                  ],
                  "rubric": [
                        {
                              "item": "1. C1 출력 및 값",
                              "desc": "자식 프로세스가 val += 20을 수행하여 'C1: 30'을 1회 출력함을 정확히 명시 시 2점"
                        },
                        {
                              "item": "2. C2 출력 및 값",
                              "desc": "자식이 다시 fork()하여 자식과 손자 프로세스 2개가 각각 val += 5를 수행하여 'C2: 35'를 총 2회 출력함을 명시 시 3점"
                        },
                        {
                              "item": "3. P1 출력 및 값",
                              "desc": "부모는 wait()로 자식들의 종료를 대기한 뒤 자신의 독립된 val(10)에 곱하기 2를 하여 'P1: 20'을 1회 출력함을 명시 시 2점"
                        }
                  ],
                  "explanation": "출력 결과:\nC1: 30\nC2: 35\nC2: 35\nP1: 20\n(C2의 두 라인은 실행 순서에 따라 출력 순서가 바뀔 수 있으나 값은 동일함)\n\n상세 분석:\n1) 최초 부모가 val=10 상태에서 fork()를 호출하여 자식(C)을 생성합니다.\n2) 자식 프로세스는 자신의 독립된 메모리에서 val += 20을 실행하여 30이 되고, 'C1: 30'을 출력합니다.\n3) 자식 프로세스가 다시 내부에서 fork()를 호출하여 손자(GC) 프로세스를 생성합니다. 이때 자식과 손자 모두 현재 시점의 메모리 값인 val=30을 복제하여 갖습니다.\n4) 자식과 손자 프로세스는 각각 독립적으로 val += 5를 실행하여 둘 다 35가 되며, 각각 'C2: 35'를 1번씩 총 2회 출력합니다.\n5) 부모 프로세스는 wait(NULL)에 의해 자식 프로세스의 모든 작업이 끝날 때까지 대기합니다. 자식들의 메모리 수정은 부모에게 전혀 전파되지 않으므로 부모의 val은 여전히 10입니다. 부모는 val *= 2를 수행하여 20이 된 후 'P1: 20'을 출력합니다."
            }
      ]
    },
    // ========================================================
    // [회차 6] 5주차 강의 녹음본 집중 10대 적중 모의고사 (100점 만점)
    // ========================================================
    {
      id: "os_exam6",
      name: "제6회 [5주차 특훈] IPC(공유메모리·파이프·소켓·RPC) & 스레드·암달의법칙 10선",
      tag: "5주차 녹음 100% 반영 · 10문항 (100점)",
      desc: "운영체제 5주차 강의 녹음본('답십리동 4 복사본.m4a') 정밀 분석 전수 반영: POSIX 공유 메모리 Consumer 세그멘테이션 폴트(Segmentation fault) 원인, UNIX 파이프 fd[0]/fd[1]과 로컬 한계, 소켓 3종(TCP 등기우편·UDP·멀티캐스트), RPC 스텁과 마셜링(Marshalling), 단일 vs 멀티스레드 자원 구조, 프로세스 vs 스레드 5대 차이 면접 기출, 암달의 법칙(Amdahl's Law) 2코어(1.6배)·4코어(2.28배) 계산, 동시성 인터리빙, 데이터 vs 태스크 병렬성",
      questions: [
        {
          id: 1, type: "essay", score: 10, origin: "5주차 녹음 14분: POSIX 공유 메모리 세그멘테이션 폴트 원인",
          text: "POSIX 공유 메모리 실습에서 생산자(Producer)가 4096B 크기의 메모리 객체('OS')에 문자열을 쓰고 정상 종료하였다. 이후 소비자(Consumer)가 정상적으로 데이터를 읽고 <code>shm_unlink('OS')</code>를 호출한 상태에서, 소비자가 버퍼 끝을 넘어 계속 읽으려고 하거나 재접근할 때 발생하는 <b>오류 명칭</b>과 <b>구체적 발생 원인</b>을 운영체제 메모리 관리 관점에서 서술하시오.",
          placeholder: "발생하는 오류 명칭과 메모리 매핑 관점의 발생 원인을 서술하세요.",
          rubric: [
            { criteria: "오류 명칭: Segmentation fault (세그멘테이션 폴트 / SIGSEGV) 명시", points: "4점" },
            { criteria: "발생 원인: 버퍼 데이터 소진 후 포인터를 넘기거나 해제된 유효하지 않은/매핑되지 않은 주소(Unmapped Memory)에 접근하여 커널이 오류를 발생시킴을 서술", points: "6점" }
          ],
          sampleAnswer: "오류 명칭: Segmentation fault (세그멘테이션 폴트 / SIGSEGV)\n발생 원인: 생산자가 버퍼에 기록한 유효한 데이터를 소비자가 모두 읽은 후, 버퍼의 끝을 넘어 포인터를 계속 증가시키거나 shm_unlink로 해제된 공유 메모리 영역에 재접근하게 되면 프로세스 주소 공간에 유효하게 매핑되지 않은 메모리 주소(Unmapped Memory / Invalid Address)에 접근하게 된다. 이를 CPU의 MMU와 운영체제 커널이 감지하여 SIGSEGV 시그널을 프로세스에 보내 강제 비정상 종료시킨다.",
          explanation: "교수님 5주차 녹음 14:27: '버퍼에서 적어놓은 걸 컨슈머에서 한번 읽었잖아요. 그 다음 포인터 가리키는 곳은 아무것도 없기 때문에 세그멘트 폴트가 날 수밖에 없다!'"
        },
        {
          id: 2, type: "short", score: 10, origin: "5주차 녹음 20분: UNIX 파이프 파일 디스크립터",
          text: "UNIX 일반 파이프(Ordinary Pipe)를 생성하기 위해 <code>int fd[2]; pipe(fd);</code>를 호출했을 때, 데이터를 읽어 들이는 <b>읽기 끝(Read End)</b>의 배열 인덱스와 데이터를 쓰는 <b>쓰기 끝(Write End)</b>의 배열 인덱스를 순서대로 쓰시오. (예: fd[0], fd[1])",
          placeholder: "인덱스 순서대로 입력 (예: fd[0], fd[1])",
          answers: ["fd[0], fd[1]", "fd[0],fd[1]", "0, 1", "0,1", "0과 1", "fd[0]과 fd[1]", "fd[0]", "0"],
          explanation: "UNIX 일반 파이프에서 <code>fd[0]</code>은 항상 읽기 끝(Read End), <code>fd[1]</code>은 쓰기 끝(Write End)입니다."
        },
        {
          id: 3, type: "short", score: 10, origin: "5주차 녹음 17분: 파이프의 로컬 한계와 네트워크 IPC",
          text: "일반 파이프(Ordinary Pipe) 및 POSIX 공유 메모리와 같은 전통적 IPC 메커니즘이 가진 <b>물리적 통신 범위의 결정적 한계점</b>을 쓰고, 네트워크로 연결된 서로 다른 독립적인 컴퓨터 간 프로세스 통신을 위해 사용되는 <b>대표적인 통신 기법 2가지</b>를 쓰시오.",
          placeholder: "한계점과 통신 기법 2가지 입력 (예: 단일 컴퓨터 로컬 통신만 가능, 소켓과 RPC)",
          answers: [
            "단일 컴퓨터 로컬 통신만 가능, 소켓과 RPC",
            "단일 컴퓨터 내부만 가능, 소켓, RPC",
            "로컬 통신만 가능, 소켓과 RPC",
            "컴퓨터 1대 내부 통신만 가능, 소켓과 RPC",
            "소켓과 RPC",
            "소켓, RPC"
          ],
          explanation: "파이프와 POSIX 공유 메모리는 오직 '컴퓨터 1대 내부(로컬)'에서만 동작하며 네트워크 통신은 불가능합니다. 외부 네트워크 통신을 위해서는 소켓(Socket)과 RPC(Remote Procedure Call)를 사용합니다."
        },
        {
          id: 4, type: "short", score: 10, origin: "5주차 녹음 29분: 소켓 3종 클래스 (교수님 직관 비유)",
          text: "5주차 강의에서 교수님이 비유한 Java의 소켓 클래스 중, 데이터를 전송한 후 상대방이 잘 받았는지 수신 확인증(ACK)을 받는 <b>'등기 우편'에 비유되는 연결 지향형 소켓 클래스</b>와, 확인 과정 없이 패킷을 무작정 빠르게 전송하는 <b>비연결형 소켓 클래스</b>의 명칭을 차례대로 쓰시오.",
          placeholder: "클래스명 순서대로 입력 (예: Socket, DatagramSocket)",
          answers: [
            "Socket, DatagramSocket",
            "Socket,DatagramSocket",
            "TCP, UDP",
            "TCP 소켓, UDP 소켓",
            "Socket과 DatagramSocket",
            "Socket",
            "TCP"
          ],
          explanation: "수신 확인을 받는 등기 우편 같은 연결 지향형은 <b>Socket (TCP)</b>, 확인 없이 빠르게 막 보내는 비연결형은 <b>DatagramSocket (UDP)</b>, 특정 지정 그룹 대상은 <b>MulticastSocket</b>입니다."
        },
        {
          id: 5, type: "short", score: 10, origin: "5주차 녹음 31분: RPC 마셜링(Marshalling)",
          text: "원격 프로시저 호출(RPC)에서 클라이언트가 원격 함수를 호출할 때 전달하는 정수(int), 문자열(string) 등 서로 다른 데이터 타입의 매개변수들을 네트워크 패킷으로 전송할 수 있는 표준 바이트 스트림 형태로 포장(직렬화)하는 규칙과 변환 과정의 명칭은?",
          placeholder: "과정 명칭 입력 (예: 마셜링 또는 Marshalling)",
          answers: ["마셜링", "마샬링", "marshalling", "Marshalling"],
          explanation: "<b>마셜링 (Marshalling)</b>은 클라이언트 스텁이 함수 호출 인자들을 네트워크 표준 규격(XDR 등)으로 직렬화/패킹하는 과정이며, 서버 측 스텁은 이를 받아 언마셜링(Unmarshalling)합니다."
        },
        {
          id: 6, type: "short", score: 10, origin: "5주차 녹음 37분: 스레드 자원 구조 (교수님 강조 그림)",
          text: "5주차 강의에서 교수님이 '오늘 특별히 하나를 뽑는다면 이 그림이 제일 중요!'라고 강조한 스레드 구조에서, 동일 프로세스 내의 여러 스레드가 <b>함께 공유하는 자원 3가지</b>와 각 스레드가 <b>독립적으로 개별 소유하는 자원 3가지</b>를 각각 쓰시오.",
          placeholder: "공유 자원과 독립 자원 입력 (예: 공유: Code, Data, Files / 독립: Stack, Register, PC)",
          answers: [
            "공유: Code, Data, Files / 독립: Stack, Register, PC",
            "공유: Code, Data, Files(Heap) / 독립: Stack, Register, PC",
            "Code, Data, Files / Stack, Register, PC",
            "공유: 코드, 데이터, 파일 / 독립: 스택, 레지스터, PC",
            "코드, 데이터, 파일 / 스택, 레지스터, PC",
            "Code, Data, Files",
            "Stack, Register, PC"
          ],
          explanation: "• <b>공유하는 자원</b>: 코드(Code), 데이터(Data: 전역/정적 변수), 힙(Heap), 열린 파일(Files)<br>• <b>독립적인 자원</b>: 스레드 ID(TID), 프로그램 카운터(PC), 레지스터 세트, 스택(Stack)"
        },
        {
          id: 7, type: "essay", score: 10, origin: "5주차 녹음 48분: 면접 빈출 프로세스 vs 스레드 차이",
          text: "운영체제 기술 면접 및 중간고사 단골 질문인 <b>'프로세스(Process)'와 '스레드(Thread)'의 결정적 차이점</b>을 (1) 메모리 공유 구조, (2) 생성 및 문맥 교환 오버헤드, (3) 장애 격리성(한쪽이 오류로 사망 시 영향) 관점에서 비교 서술하시오.",
          placeholder: "메모리 공유, 오버헤드, 장애 격리성 3가지 관점에서 서술하세요.",
          rubric: [
            { criteria: "메모리 공유: 프로세스는 독립된 주소 공간을 가지나, 스레드는 부모 프로세스의 Code, Data, Heap을 공유함을 명시", points: "3점" },
            { criteria: "오버헤드: 프로세스는 fork 및 문맥 교환 비용이 크지만, 스레드는 스택/레지스터만 교체하여 생성(약 30배) 및 전환(약 5배)이 훨씬 가볍고 빠름을 명시", points: "3점" },
            { criteria: "장애 격리성: 프로세스는 독립적이므로 하나가 비정상 종료되어도 안전하지만, 스레드는 메모리를 공유하므로 한 스레드가 세그폴트로 Crash 시 전체 프로세스가 함께 비정상 종료됨을 명시", points: "4점" }
          ],
          sampleAnswer: "(1) 메모리 공유: 프로세스는 독립된 주소 공간(Code, Data, Heap, Stack)을 가져 별도의 IPC가 필요하지만, 스레드는 부모 프로세스의 Code, Data, Heap, 열린 파일을 모든 스레드가 공유하므로 IPC 없이 전역 변수로 즉시 통신한다.\n(2) 오버헤드: 프로세스는 fork() 시 주소 공간 전체를 복제해야 하고 문맥 교환 시 캐시 플러시가 발생하여 무겁지만, 스레드는 스택과 레지스터만 새로 할당하므로 생성(약 30배) 및 문맥 교환(약 5배) 비용이 훨씬 경제적이다.\n(3) 장애 격리성: 프로세스는 한 프로세스가 비정상 종료되어도 다른 프로세스에 영향을 주지 않지만, 스레드는 메모리를 공유하므로 한 스레드가 세그멘테이션 폴트 등의 오류를 내면 프로세스 내의 모든 스레드가 함께 강제 종료된다.",
          explanation: "교수님 5주차 녹음 47:57: '진짜 많이 물어봐요. 면접으로 프로세스와 스레드의 차이가 뭐냐고 물어봤을 때 빠지지 않고 나오는 것 같아요!'"
        },
        {
          id: 8, type: "calc", score: 10, origin: "5주차 녹음 43~46분: 암달의 법칙 코어 2개 계산",
          text: "암달의 법칙(Amdahl's Law) 공식 <b>Speedup ≤ 1 / (S + (1 - S) / N)</b>을 적용하여, 시스템에서 반드시 순차적으로 실행되어야 하는 직렬 작업 비율이 25% (<b>S = 0.25</b>)일 때, 프로세서 코어 수가 2개(<b>N = 2</b>)인 경우의 최대 속도 향상 배수를 소수점 첫째 자리까지 구하시오. (숫자만 입력)",
          placeholder: "속도 향상 배수 숫자 입력 (예: 1.6)",
          answers: ["1.6", "1.6배"],
          explanation: "Speedup ≤ 1 / (0.25 + (1 - 0.25) / 2) = 1 / (0.25 + 0.375) = 1 / 0.625 = <b>1.6배</b> 입니다. (코어가 2배라고 2배 빨라지는 것이 아니라 1.6배 빨라짐!)"
        },
        {
          id: 9, type: "calc", score: 10, origin: "5주차 녹음 43~46분: 암달의 법칙 코어 4개 계산",
          text: "동일한 시스템(직렬 작업 비율 <b>S = 0.25</b>)에서 프로세서 코어 수를 4개(<b>N = 4</b>)로 늘렸을 때, 암달의 법칙에 따른 최대 속도 향상 배수를 소수점 둘째 자리까지 구하시오. (숫자만 입력)",
          placeholder: "속도 향상 배수 숫자 입력 (예: 2.28 또는 2.29)",
          answers: ["2.28", "2.29", "2.28배", "2.29배"],
          explanation: "Speedup ≤ 1 / (0.25 + (1 - 0.25) / 4) = 1 / (0.25 + 0.1875) = 1 / 0.4375 ≈ <b>2.28배 (반올림 시 2.29배)</b> 입니다. (코어를 4배로 늘려도 속도는 2.28배에 그침!)"
        },
        {
          id: 10, type: "short", score: 10, origin: "5주차 녹음 40~42분: 동시성 인터리빙 & 병렬성 유형",
          text: "5주차 강의에서 다룬 다음 두 개념의 명칭을 쓰시오.<br><br>(1) 단일 코어에서 CPU가 여러 스레드를 시간 단위로 잘게 쪼개어 번갈아 끼워 넣으며 실행하는 기법의 명칭<br>(2) 동일한 데이터 집합을 여러 코어에 분배하여 동일한 연산을 동시에 수행하는 병렬성의 명칭",
          placeholder: "(1), (2) 명칭 입력 (예: 인터리빙, 데이터 병렬성)",
          answers: [
            "인터리빙, 데이터 병렬성",
            "인터리빙, 데이터병렬성",
            "인터리빙(Interleaving), 데이터 병렬성",
            "인터리빙 / 데이터 병렬성",
            "인터리빙",
            "데이터 병렬성"
          ],
          explanation: "(1) 단일 코어에서 스레드 사이를 시분할로 번갈아 끼워 넣는 기법은 <b>인터리빙 (Interleaving)</b>입니다.<br>(2) 데이터를 분할하여 동일 연산을 수행하는 것은 <b>데이터 병렬성 (Data Parallelism)</b>이며, 서로 다른 함수/작업을 분배하는 것은 태스크 병렬성(Task Parallelism)입니다."
        }
      ]
    }
  ]
};
