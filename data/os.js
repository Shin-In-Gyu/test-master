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
    { id: "os-cheat", label: "⚡ 1초 정답 치트키 (21선)", class: "amber-chip" },
    { id: "os-sched", label: "📊 스케줄링 공식 & 간트 차트", class: "danger-chip" },
    { id: "os-ch1", label: "1장: 개요·듀얼모드·폰노이만" },
    { id: "os-ch2", label: "2장: 프로세스 상태전이도·PCB·문맥교환" },
    { id: "os-ch3", label: "3장: fork()·계층·IPC 2대모델" },
    { id: "os-ch4", label: "4장: 파이프·공유메모리·소켓" },
    { id: "os-ch5-6", label: "5·6장: 스레드·3대모델·동시성" },
    { id: "os-ch7", label: "7장: CPU 스케줄링 4대 알고리즘" }
  ],
  html: `
    <!-- SECTION: 1초 정답 치트키 21선 -->
    <section id="os-cheat" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title">
          <span>⚡ 운영체제 1초 정답 치트키 (교수님 강조 & 시험 빈출 21선)</span>
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
      </div>
    </section>

    <!-- SECTION: CPU 스케줄링 공식 & 간트 차트 작성법 -->
    <section id="os-sched" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>📊 CPU 스케줄링 계산 공식 & 간트 차트 작성법 (교수님 50% 감점 경고 파트)</span>
        </div>
        <span style="font-size: 11.5px; opacity: 0.9;">"간트 차트 없으면 답 맞아도 50%만 인정합니다"</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">📐 스케줄링 3대 핵심 시간 지표 및 공식</div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 180px;">지표 (Metric)</th>
              <th>정의 및 핵심 공식</th>
              <th style="width: 100px;">목표</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>완료 시간 (Completion Time)</b></td>
              <td>프로세스가 CPU 실행을 완전히 마치고 종료된 시점 (간트 차트 우측 끝 시각)</td>
              <td>-</td>
            </tr>
            <tr>
              <td><b>반환 시간 (Turnaround Time)</b></td>
              <td><code>반환 시간 = 완료 시간 (Completion) - 도착 시간 (Arrival)</code></td>
              <td>최소화 (Min)</td>
            </tr>
            <tr>
              <td><b>대기 시간 (Waiting Time)</b></td>
              <td><code>대기 시간 = 반환 시간 (Turnaround) - 실행 시간 (CPU Burst)</code><br>또는 간트 차트 상에서 프로세스가 레디 큐에서 순수하게 기다린 시간들의 누적합</td>
              <td>최소화 (Min)</td>
            </tr>
            <tr>
              <td><b>평균 대기 시간 (AWT)</b></td>
              <td><code>AWT = (P1 대기시간 + P2 대기시간 + ... + Pn 대기시간) / n</code></td>
              <td>최소화 (Min)</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning" style="margin-top: 14px;">
          <b>🚨 교수님 시험 채점 가이드라인 (7주차 녹음 직전 언급):</b><br>
          1. <b>간트 차트(Gantt Chart) 그리기 필수</b>: 문제 풀이 시 간트 차트 직사각형을 그리고 각 프로세스 블록 아래에 시간 눈금(0, 3, 6, 24 등)을 반드시 표시할 것.<br>
          2. <b>부분점수 정책</b>: "답만 맞고 간트 차트가 없으면 50% 감점, 별도 기준 없으면 부분점수는 반반(50%)"
        </div>

        <div class="concept-card-title" style="margin-top: 18px;">📈 다음 CPU 버스트 시간 예측 (지수 이동평균 공식)</div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          SJF 스케줄링에서 프로세스의 다음 CPU 버스트 시간을 과거 실제 측정치와 이전 예측치를 가중합하여 추정하는 공식:
        </p>
        <div style="padding: 12px; background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: 6px; font-family: var(--font-mono); font-size: 14.5px; color: var(--accent); font-weight: 700;">
          τ<sub>n+1</sub> = α · t<sub>n</sub> + (1 - α) · τ<sub>n</sub>
        </div>
        <ul style="margin: 8px 0 0 18px; font-size: 13px; color: var(--text-secondary); line-height: 1.7;">
          <li><b>t<sub>n</sub></b>: 가장 최근 실제 측정한 n번째 CPU 버스트 시간</li>
          <li><b>τ<sub>n</sub></b>: n번째 CPU 버스트에 대한 이전 예측값</li>
          <li><b>α</b>: 가중치 ($0 \le \alpha \le 1$, 보통 α = 0.5 적용)</li>
          <li><b>계산 예시</b>: α = 0.5, t<sub>n</sub> = 6, τ<sub>n</sub> = 10 이면 τ<sub>n+1</sub> = (0.5 × 6) + (0.5 × 10) = <b>8 ms</b></li>
        </ul>
      </div>
    </section>

    <!-- SECTION: 1장 운영체제 개요 & 컴퓨터 구조 -->
    <section id="os-ch1" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>🖥️ 1장: 운영체제의 개념, 듀얼 모드 & 폰노이만 구조</span>
        </div>
        <span class="badge badge-blue">컴퓨터 시스템 구성 & 보호</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. 컴퓨터 시스템의 4대 구성 요소</div>
        <table class="concept-table">
          <thead><tr><th>구성 요소</th><th>역할 및 특징</th></tr></thead>
          <tbody>
            <tr><td><b>하드웨어 (Hardware)</b></td><td>기본 계산 자원 제공 (CPU, 메모리, I/O 디바이스)</td></tr>
            <tr><td><b>운영체제 (Operating System)</b></td><td>다양한 응용 프로그램 간 하드웨어 자원 배분 및 입출력 제어 총괄 (커널)</td></tr>
            <tr><td><b>응용 프로그램 (Application)</b></td><td>사용자의 컴퓨팅 문제 해결을 위해 자원 사용 (웹브라우저, 컴파일러, DB 등)</td></tr>
            <tr><td><b>사용자 (Users)</b></td><td>사람, 기계, 다른 컴퓨터</td></tr>
          </tbody>
        </table>

        <div class="concept-card-title" style="margin-top: 18px;">2. 듀얼 모드 연산 (Dual-Mode Operation) & 하드웨어 보호</div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          잘못된 프로그램이 다른 프로그램이나 운영체제 자체를 파괴하지 못하도록 하드웨어적으로 실행 모드를 분리합니다.
        </p>
        <table class="concept-table">
          <thead><tr><th>구분</th><th>사용자 모드 (User Mode)</th><th>커널 모드 (Kernel / Supervisor Mode)</th></tr></thead>
          <tbody>
            <tr><td><b>Mode Bit</b></td><td><b>1</b></td><td><b>0</b></td></tr>
            <tr><td><b>실행 주체</b></td><td>일반 사용자 응용 프로그램</td><td>운영체제 핵심 커널 코드</td></tr>
            <tr><td><b>명령 실행 범위</b></td><td>비특권 명령(Non-privileged)만 가능</td><td>모든 하드웨어 제어 및 <b>특권 명령(Privileged)</b> 가능</td></tr>
            <tr><td><b>특권 명령 예시</b></td><td>직접 I/O 접근 불가, 타이머 조작 불가</td><td>타이머 설정, 인터럽트 활성/비활성화, I/O 직접 제어, 메모리 맵 변경</td></tr>
            <tr><td><b>모드 전환 통로</b></td><td colspan="2">사용자 프로그램이 커널 자원을 요청할 때는 오직 <b>시스템 호출(System Call)</b> 또는 <b>인터럽트(Trap)</b>를 통해서만 커널 모드(0)로 진입 가능</td></tr>
          </tbody>
        </table>

        <div class="concept-card-title" style="margin-top: 18px;">3. 멀티프로그래밍 vs 시분할 시스템</div>
        <table class="concept-table">
          <thead><tr><th>개념</th><th>멀티프로그래밍 (Multiprogramming)</th><th>시분할 시스템 (Time-Sharing / Multitasking)</th></tr></thead>
          <tbody>
            <tr><td><b>주요 목적</b></td><td><b>CPU 이용률(Utilization) 극대화</b> (CPU가 쉬지 않게 함)</td><td><b>응답 시간(Response Time) 최소화</b> (사용자와 상호작용)</td></tr>
            <tr><td><b>동작 원리</b></td><td>한 프로세스가 I/O 대기에 들어가면 다른 프로세스로 CPU 전환</td><td>매우 짧은 시간(타임 퀀텀) 단위로 작업을 번갈아 실행하여 동시 실행 착각 유도</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION: 2장 프로세스 개념 & PCB -->
    <section id="os-ch2" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>⚙️ 2장: 프로세스 상태 전이도(Diagram of Process State), 메모리 구조 & PCB</span>
        </div>
        <span class="badge badge-danger">시험 출제 확정 핵심 파트</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. 프로세스의 메모리 4대 구조 (Memory Layout of C Program)</div>
        <table class="concept-table">
          <thead><tr><th>영역 (Section)</th><th>저장 내용</th><th>크기 결정 시점</th></tr></thead>
          <tbody>
            <tr><td><b>텍스트 / 코드 (Text)</b></td><td>실행 가능한 기계어 명령어 코드</td><td>컴파일 시점 고정</td></tr>
            <tr><td><b>데이터 (Data)</b></td><td>초기화된 전역 변수 및 정적(static) 변수</td><td>컴파일 시점 고정</td></tr>
            <tr><td><b>BSS (Block Started by Symbol)</b></td><td>초기화되지 않은 전역 변수 (0으로 자동 초기화)</td><td>컴파일 시점 고정</td></tr>
            <tr><td><b>힙 (Heap)</b></td><td>프로그래머가 런타임에 동적으로 할당하는 메모리 (malloc, new) (낮은 주소 → 높은 주소)</td><td>동적 팽창 (런타임)</td></tr>
            <tr><td><b>스택 (Stack)</b></td><td>함수 호출 시 생성되는 매개변수, 지역변수, 복귀주소 (높은 주소 → 낮은 주소)</td><td>동적 팽창 (런타임)</td></tr>
          </tbody>
        </table>

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
          📋 [표 1] 프로세스 5대 상태 (5 Process States — 동그라미 빈칸 & 개념 정리)
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
          🔄 [표 2] 프로세스 6대 상태 전이 (6 State Transitions — 화살표 빈칸 & 서술형 완벽 대비표)
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
          <div class="callout-title">🚨 [시험 출제 1순위] 프로세스 상태 전이도 3대 단골 출제 포인트</div>
          <b>1. 왜 <code>waiting</code>에서 <code>running</code>으로 직접 가는 화살표는 없는가? (서술형·객관식 함정 1위)</b><br>
          • <code>waiting</code> 상태이던 프로세스의 입출력이 완료(<code>I/O or event completion</code>)된 시점에, <b>CPU는 이미 다른 프로세스가 <code>running</code> 상태로 점유하고 있을 수 있습니다.</b> 따라서 즉시 CPU를 새치기할 수 없고, 실행 준비가 끝났다는 의미인 <b><code>ready</code> 상태(준비 큐)</b>로 들어가 줄을 선 뒤 <code>scheduler dispatch</code>를 통해서만 <code>running</code>으로 갈 수 있습니다.<br><br>
          <b>2. <code>interrupt</code> (running → ready) vs <code>I/O or event wait</code> (running → waiting) 완벽 구분</b><br>
          • <b><code>interrupt</code></b>: 프로세스는 더 실행하고 싶으나 타임 슬라이스(Time Quantum) 소진 등으로 <b>비자발적(강제)으로 CPU를 빼앗긴 경우</b> → 당장 다시 실행 가능하므로 <b><code>ready</code></b>로 이동.<br>
          • <b><code>I/O or event wait</code></b>: 느린 입출력 장치의 응답을 기다려야 해서 프로세스가 <b>자발적으로 CPU를 내려놓은 경우</b> → I/O가 끝날 때까지 실행 불가능하므로 <b><code>waiting</code></b>으로 이동.<br><br>
          <b>3. 7장 CPU 스케줄링(선점 vs 비선점)과의 연결 고리</b><br>
          • <b>비선점형(Non-preemptive)</b>: 오직 <b>④ <code>running → waiting</code> (I/O wait)</b>과 <b>⑥ <code>running → terminated</code> (exit)</b>처럼 프로세스가 스스로 CPU를 반납할 때만 스케줄링 발생.<br>
          • <b>선점형(Preemptive)</b>: 여기에 더해 <b>③ <code>running → ready</code> (interrupt)</b>와 <b>⑤ <code>waiting → ready</code> (I/O completion)</b> 시점에도 강제로 CPU를 빼앗는 스케줄링 발생!
        </div>

        <div class="concept-card-title" style="margin-top: 18px;">3. PCB (Process Control Block) 구성 요소</div>
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 6px;">
          운영체제가 프로세스를 관리하기 위해 커널 영역에 저장하는 데이터 블록 (프로그램 + PCB = 프로세스):
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px; font-size: 12.5px;">
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>PID & PPID</b>: 프로세스 및 부모 프로세스 ID</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>프로세스 상태</b>: New, Ready, Running 등</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>프로그램 카운터 (PC)</b>: 다음 실행할 명령어 주소</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>CPU 레지스터</b>: 누산기, 인덱스, 스택포인터 등</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>스케줄링 정보</b>: 우선순위, 큐 포인터</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>메모리 관리 정보</b>: 베이스/한계 레지스터, 페이지 테이블</div>
          <div style="background: var(--bg-surface); padding: 8px 10px; border-radius: 4px; border: 1px solid var(--border-color);">• <b>I/O 상태 정보</b>: 할당된 입출력 장치, 열린 파일 목록</div>
        </div>
      </div>
    </section>

    <!-- SECTION: 3장 프로세스 생성 & IPC 통신 -->
    <section id="os-ch3" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>🔄 3장: fork(), wait(), exec() & 프로세스 간 통신(IPC)</span>
        </div>
        <span class="badge badge-green">교수님 09 23 녹음 빈출</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. 프로세스 생성 핵심 시스템 콜 3대장</div>
        <table class="concept-table">
          <thead><tr><th>시스템 콜</th><th>역할 및 특징</th><th>시험 주의사항</th></tr></thead>
          <tbody>
            <tr>
              <td><b>fork()</b></td>
              <td>현재 프로세스를 복제하여 자식 프로세스 생성 (부모 주소 공간 복사)</td>
              <td><b>반환값 구분 필수</b>: 부모에게는 자식 PID(>0), 자식에게는 0, 실패 시 -1</td>
            </tr>
            <tr>
              <td><b>exec() 계열</b></td>
              <td>기존 프로세스 골격(PID, 부모관계)은 유지하고 코드와 데이터 영역을 새 프로그램으로 덮어씀</td>
              <td>호출 성공 시 기존 코드는 사라지고 새 프로그램 메인부터 실행 (반환되지 않음)</td>
            </tr>
            <tr>
              <td><b>wait()</b></td>
              <td>자식 프로세스가 종료될 때까지 부모 프로세스를 대기(Blocked) 상태로 전환</td>
              <td>자식의 종료 상태 코드를 수거하고 <b>좀비 프로세스(Zombie)</b> 방지</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box info" style="margin-top: 14px;">
          <b>💡 교수님 09 23 강의 출제 스포일러 (부모와 자식의 메모리 격리):</b><br>
          "자식 프로세스가 fork() 이후 전역 변수나 지역 변수를 변경하더라도, 부모 프로세스의 변수 값은 영향을 받지 않고 그대로 유지됩니다. fork()는 완전히 독립된 주소 공간 복사본을 생성하기 때문입니다!"
        </div>

        <div class="concept-card-title" style="margin-top: 18px;">🔥 시험 단골: fork() 실행 흐름 & 메모리 독립성 코드 분석</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 12px; margin-top: 8px;">
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 700; color: var(--accent); margin-bottom: 6px;">[유형 2] fork() 후 전역 변수 독립성 (Copy-on-Write)</div>
            <pre class="code-block" style="margin: 0;">int value = 5;
int main() {
    pid_t pid = fork();
    if (pid == 0) { // 자식 프로세스
        value += 15;
        return 0;
    } else if (pid &gt; 0) { // 부모 프로세스
        wait(NULL);
        printf("PARENT: value = %d\\n", value);
    }
}
// 출력: PARENT: value = 5 (부모 변수는 5 그대로 유지!)</pre>
          </div>
          <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px; border: 1px solid var(--border-color); min-width: 0; overflow-x: auto;">
            <div style="font-weight: 700; color: var(--accent); margin-bottom: 6px;">[유형 4] execlp() 메모리 대체 메커니즘</div>
            <pre class="code-block" style="margin: 0;">pid = fork();
if (pid == 0) {
    execlp("/bin/ls", "ls", NULL);
    printf("LINE J\\n"); // 절대 실행되지 않음!
} else {
    wait(NULL);
    printf("Child Complete\\n");
}
// 이유: execlp는 현재 프로세스 메모리를 새 프로그램으로
// 완전히 대체(덮어쓰기)하므로 기존 코드는 사라짐</pre>
          </div>
        </div>

        <div class="concept-card-title" style="margin-top: 18px;">2. 프로세스 간 통신 (IPC) 2대 모델 비교</div>
        <table class="concept-table">
          <thead><tr><th>항목</th><th>공유 메모리 (Shared Memory)</th><th>메시지 패싱 (Message Passing)</th></tr></thead>
          <tbody>
            <tr><td><b>메커니즘</b></td><td>두 프로세스가 메모리의 특정 영역을 함께 공유</td><td>운영체제 커널을 통해 send() / receive() 메시지 교환</td></tr>
            <tr><td><b>속도</b></td><td><b>매우 빠름</b> (최초 공유 영역 설정 후 커널 개입 없음)</td><td>상대적 느림 (메시지 전송마다 시스템 콜 및 커널 개입)</td></tr>
            <tr><td><b>동기화 책임</b></td><td>응용 프로그래머가 직접 동기화(Lock 등) 처리 필요</td><td>운영체제가 통신 동기화를 자동으로 지원</td></tr>
            <tr><td><b>통신 형태</b></td><td>생산자-소비자 버퍼 모델</td><td>직접 통신(Direct) 또는 간접 통신(Indirect - 메일박스/포트)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION: 4장 IPC 실습 -->
    <section id="os-ch4" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>🔌 4장: IPC 실습 (파이프, POSIX 공유메모리, 소켓)</span>
        </div>
        <span class="badge badge-blue">실습 코드 & 네트워크</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. 익명 파이프 (Ordinary Pipes)의 구조 및 규칙</div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          UNIX/Linux에서 부모-자식 간에 데이터를 주고받는 가장 고전적인 단방향(Half-duplex) 도구:
        </p>
        <div class="code-block">
int fd[2];
pipe(fd); // fd[0] = 파이프 읽기 끝 (Read End), fd[1] = 파이프 쓰기 끝 (Write End)
        </div>
        <ul style="margin: 8px 0 0 18px; font-size: 13px; color: var(--text-secondary);">
          <li><b>단방향 통신</b>: 한쪽 끝에서는 쓰기만, 다른 쪽 끝에서는 읽기만 가능</li>
          <li><b>양방향 통신 구현</b>: 부모→자식용 파이프 1개 + 자식→부모용 파이프 1개 = <b>총 2개의 파이프 필요</b></li>
          <li><b>사용 규칙</b>: 통신에 사용하지 않는 파일 디스크립터(예: 부모가 쓰기만 할 때 fd[0])는 반드시 <code>close()</code>할 것</li>
        </ul>

        <div class="concept-card-title" style="margin-top: 18px;">2. 클라이언트-서버 통신 기법 (소켓 & RPC)</div>
        <table class="concept-table">
          <thead><tr><th>기법</th><th>정의 및 핵심 내용</th></tr></thead>
          <tbody>
            <tr>
              <td><b>소켓 (Socket)</b></td>
              <td>네트워크 통신의 종단점(Endpoint). <b>IP 주소와 포트(Port) 번호의 조합</b>으로 식별 (예: 192.168.0.1:80). TCP(연결지향 Stream), UDP(비연결지향 Datagram) 지원</td>
            </tr>
            <tr>
              <td><b>RPC (Remote Procedure Call)</b></td>
              <td>원격 시스템에 있는 함수/프로시저를 마치 로컬 함수 호출하듯 호출할 수 있도록 추상화한 원격 서비스 인터페이스. 스텁(Stub)이 매개변수 마샬링(Marshaling) 수행</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-title" style="margin-top: 18px;">🔄 생산자-소비자 문제 환형 버퍼 (Circular Buffer) 판별 조건식</div>
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          공유 메모리 환경에서 생산자(Producer)와 소비자(Consumer)가 환형 버퍼를 사용할 때의 필수 판별 수식:
        </p>
        <table class="concept-table">
          <thead><tr><th>상태 구분</th><th>C 언어 수식 형태</th><th>핵심 메커니즘</th></tr></thead>
          <tbody>
            <tr>
              <td><b>버퍼가 비어 있음 (Empty)</b></td>
              <td><code>in == out</code></td>
              <td>생산자 포인터(in)와 소비자 포인터(out)가 같을 때 (소비자가 busy wait 대기)</td>
            </tr>
            <tr>
              <td><b>버퍼가 가득 참 (Full)</b></td>
              <td><code>((in + 1) % BUFFER_SIZE) == out</code></td>
              <td>버퍼 크기가 N일 때 최대 N-1개만 채워 비어있음과 가득참을 명확히 구분 (생산자가 busy wait 대기)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION: 5·6장 스레드 & 멀티스레딩 모델 -->
    <section id="os-ch5-6" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>🧵 5·6장: 스레드(Thread), 3대 모델 & 동시성 vs 병렬성</span>
        </div>
        <span class="badge badge-purple">교수님 6주차 출제 스포</span>
      </div>

      <div class="concept-card">
        <div class="concept-card-title">1. 멀티스레딩의 4대 이점 (Benefits)</div>
        <table class="concept-table">
          <thead><tr><th>이점 (Benefit)</th><th>상세 설명</th></tr></thead>
          <tbody>
            <tr><td><b>1) 응답성 (Responsiveness)</b></td><td>프로세스의 일부 스레드가 긴 I/O 작업으로 블록되어도 다른 스레드가 UI 상호작용 지속 가능</td></tr>
            <tr><td><b>2) 자원 공유 (Resource Sharing)</b></td><td>별도 IPC(공유메모리/메시지) 없이도 프로세스 내 Code, Data, Heap을 자연스럽게 공유</td></tr>
            <tr><td><b>3) 경제성 (Economy)</b></td><td>새 프로세스를 생성/문맥교환하는 것보다 스레드 생성/문맥교환 오버헤드가 현저히 낮음</td></tr>
            <tr><td><b>4) 확장성 (Scalability)</b></td><td>멀티코어/멀티프로세서 아키텍처에서 각 스레드가 서로 다른 코어에서 병렬 실행 가능</td></tr>
          </tbody>
        </table>

        <div class="concept-card-title" style="margin-top: 18px;">2. 멀티스레딩 3대 모델 비교 (교수님 6주차 그림 강조!)</div>
        <table class="concept-table">
          <thead><tr><th>모델</th><th>구조 매핑</th><th>장단점 및 특징</th></tr></thead>
          <tbody>
            <tr>
              <td><b>다대일 (Many-to-One)</b></td>
              <td>여러 사용자 스레드 → 1개 커널 스레드</td>
              <td>사용자 공간에서 관리되어 빠르나, <b>한 스레드가 블록되면 전체 프로세스가 정지</b>되며 멀티코어 병렬 실행 불가</td>
            </tr>
            <tr>
              <td><b>일대일 (One-to-One)</b></td>
              <td>1개 사용자 스레드 → 1개 커널 스레드</td>
              <td><b>현대 OS 표준 (Linux, Windows 채택)</b>. 한 스레드가 블록되어도 다른 스레드 계속 실행 가능, 병렬성 우수. 단, 커널 스레드 생성 오버헤드 존재</td>
            </tr>
            <tr>
              <td><b>다대다 (Many-to-Many)</b></td>
              <td>여러 사용자 스레드 → 같거나 적은 수의 커널 스레드</td>
              <td>필요한 만큼 커널 스레드 다중화. 유연하나 구현 복잡도가 너무 높아 실제 현대 OS는 일대일 모델 선호</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-title" style="margin-top: 18px;">3. 동시성(Concurrency) vs 병렬성(Parallelism) 비교</div>
        <table class="concept-table">
          <thead><tr><th>개념</th><th>실행 환경</th><th>동작 메커니즘</th></tr></thead>
          <tbody>
            <tr>
              <td><b>동시성 (Concurrency)</b></td>
              <td>단일 코어 (Single Core) 또는 멀티 코어</td>
              <td>CPU가 여러 작업을 <b>시분할(Time-sharing) 인터리빙</b>으로 번갈아 실행하여 사용자에게 <b>동시에 실행되는 것처럼 보이게 함</b> (논리적 동시)</td>
            </tr>
            <tr>
              <td><b>병렬성 (Parallelism)</b></td>
              <td>반드시 멀티 코어 (Multi-Core)</td>
              <td>여러 물리 코어가 각기 다른 스레드를 <b>동일한 시각에 실제로 동시에 실행</b> (물리적 동시)</td>
            </tr>
          </tbody>
        </table>

        <div class="concept-card-title" style="margin-top: 18px;">4. 프로세스 vs 스레드 메모리 격리/공유 구조 (시험 단골 도식화)</div>
        <table class="concept-table">
          <thead><tr><th>구분</th><th>포함 자원</th><th>특징</th></tr></thead>
          <tbody>
            <tr>
              <td><b>스레드 간 공유 자원 (프로세스 영역)</b></td>
              <td><b>Code, Data(전역/정적 변수), Heap, 열린 파일 및 OS 리소스</b></td>
              <td>같은 프로세스 내 스레드는 전역 변수 값을 즉시 공유함 (동기화 필요)</td>
            </tr>
            <tr>
              <td><b>각 스레드 독자 소유 자원 (독립 영역)</b></td>
              <td><b>스레드 ID (TID), 프로그램 카운터 (PC), 레지스터 세트, 스택 (Stack)</b></td>
              <td>개별 함수 호출 및 연산 상태 보존을 위해 독립 할당</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION: 7장 CPU 스케줄링 4대 알고리즘 -->
    <section id="os-ch7" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>⚡ 7장: CPU 스케줄링 4대 알고리즘 심층 비교</span>
        </div>
        <span class="badge badge-amber">중간고사 최대 배점 영역</span>
      </div>

      <div class="concept-card">
        <table class="concept-table">
          <thead>
            <tr>
              <th>알고리즘</th>
              <th>선점 여부</th>
              <th>선정 기준</th>
              <th>핵심 특징 및 문제점</th>
              <th>해결책</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>FCFS (선입선출)</b></td>
              <td><b>비선점</b></td>
              <td>레디 큐 도착 순서</td>
              <td>구현이 단순하나, 앞선 긴 작업 때문에 짧은 작업들이 대기하는 <b>호위 효과(Convoy Effect)</b> 발생</td>
              <td>도착 순서 최적화 또는 선점형 전환</td>
            </tr>
            <tr>
              <td><b>SJF (최단 작업 우선)</b></td>
              <td>비선점 (기본)</td>
              <td>다음 CPU 버스트가 가장 짧은 프로세스</td>
              <td><b>항상 최소 평균 대기시간(Minimum AWT) 보장</b>. 단, 버스트 긴 작업이 무한 대기하는 <b>기아 현상(Starvation)</b> 발생</td>
              <td><b>에이징 (Aging)</b> 기법 적용 (대기 시간에 비례해 우선순위 상향)</td>
            </tr>
            <tr>
              <td><b>SRTF (최단 잔여시간 우선)</b></td>
              <td><b>선점형</b></td>
              <td>남은 실행 시간(Remaining Time)이 가장 짧은 프로세스</td>
              <td>선점형 SJF. 새 프로세스가 도착했을 때 남은 시간이 더 짧으면 즉시 선점. 잦은 문맥 교환 주의</td>
              <td>에이징 적용</td>
            </tr>
            <tr>
              <td><b>Round Robin (RR)</b></td>
              <td><b>선점형</b></td>
              <td>도착 순서 + <b>고정 타임 퀀텀(q)</b></td>
              <td>모든 프로세스가 공평하게 CPU 분할. 퀀텀 소진 시 레디 큐 맨 뒤로 이동.<br>• q 너무 큼 → FCFS화<br>• q 너무 작음 → 문맥교환 폭증</td>
              <td>CPU 버스트의 약 80%가 퀀텀보다 짧도록 10~100ms 설정</td>
            </tr>
          </tbody>
        </table>
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
}
  ]
};
