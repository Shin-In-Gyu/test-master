// ========================================================
// 🎮 [DATA MODULE] 게임프로그래밍 (Game Programming)
// 강남대학교 게임프로그래밍 / 담당교수 김영호
// Unity 기초 & C# 중간고사 완벽 개념 총정리 및 실전 모의고사
// ========================================================
window.CONCEPT_DATABASE = window.CONCEPT_DATABASE || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};

// 1. 게임프로그래밍 개념 총정리 (Unity & C# 전범위 치트시트)
window.CONCEPT_DATABASE.gameprog = {
  id: "gameprog",
  title: "🎮 게임프로그래밍 (Unity 기초 & C#) 중간고사 핵심 총정리",
  filterChips: [
    { id: "all", label: "전체보기" },
    { id: "gp-cheat", label: "⚡ 1초 정답 치트키 (20선)", class: "amber-chip" },
    { id: "gp-ch1", label: "1. Unity 기본 구성 & Transform 계층" },
    { id: "gp-ch2", label: "2. 컴포넌트 시스템 & Prefab 인스턴스" },
    { id: "gp-ch3", label: "3. 생명주기·시간 이동·2D 물리 & 충돌" },
    { id: "gp-ch4", label: "4. 입력 시스템 & 애니메이션 & 카메라" },
    { id: "gp-ch5", label: "5. UI 이벤트 & 코드 구조 (리팩토링·풀링)" },
    { id: "gp-ch6", label: "6. C# 기초 문법 & 코드 흐름 추적" }
  ],
  html: `
    <!-- SECTION: 1초 정답 치트키 20선 -->
    <section id="gp-cheat" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title">
          <span>⚡ 게임프로그래밍 1초 정답 치트키 (중간고사 필수 빈출 20선)</span>
        </div>
        <span style="font-size: 14px; opacity: 0.9;">문제 확인 즉시 작성할 단답형 핵심 키워드 & 교수님 강조 포인트</span>
      </div>

      <div class="qa-grid">
        <div class="qa-card" data-tags="getcomponent 컴포넌트 참조 반환 null">
          <div class="qa-q"><span class="q-icon">Q1</span><span>동일한 GameObject에 부착된 컴포넌트의 참조를 스크립트에서 가져올 때 사용하는 함수는?</span></div>
          <div class="qa-a"><span class="ans-target">GetComponent&lt;T&gt;() (없으면 null 반환)</span><button class="copy-btn" onclick="copyText('GetComponent')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 기본 GetComponent는 같은 오브젝트만 탐색하며, 자식이나 타 오브젝트는 검색하지 않음</div>
        </div>

        <div class="qa-card" data-tags="timedeltatime 시간 이동 프레임 독립">
          <div class="qa-q"><span class="q-icon">Q2</span><span>기기의 FPS(초당 프레임 수)에 상관없이 1초당 일정한 속도로 이동시키기 위해 곱해주는 시간 값은?</span></div>
          <div class="qa-a"><span class="ans-target">Time.deltaTime (이전 프레임에서 현재 프레임까지 걸린 시간)</span><button class="copy-btn" onclick="copyText('Time.deltaTime')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 프레임마다 고정 수치를 더하면 30fps와 120fps 기기에서 이동 속도가 달라지는 문제 방지</div>
        </div>

        <div class="qa-card" data-tags="gravity scale 중력 배율 가속도 rigidbody2d">
          <div class="qa-q"><span class="q-icon">Q3</span><span>Rigidbody2D에서 해당 오브젝트가 받는 중력의 영향도(가속도 크기)를 조절하는 속성은?</span></div>
          <div class="qa-a"><span class="ans-target">Gravity Scale (gravityScale)</span><button class="copy-btn" onclick="copyText('Gravity Scale')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 값을 높이면 낙하 가속도가 커짐. 시작 위치나 애니메이션 재생 속도 조절 설정이 아님</div>
        </div>

        <div class="qa-card" data-tags="is trigger 트리거 통과 감지 접촉">
          <div class="qa-q"><span class="q-icon">Q4</span><span>물리적인 충돌 저지(막힘) 없이 통과를 허용하면서 진입 여부만을 감지할 때 켜는 Collider2D 속성은?</span></div>
          <div class="qa-a"><span class="ans-target">Is Trigger (체크 시 충돌 반발력 없이 겹침 이벤트 발생)</span><button class="copy-btn" onclick="copyText('Is Trigger')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 통과시키겠다고 Collider를 삭제하면 영역 자체가 사라져 감지 불가. 반드시 Is Trigger 사용</div>
        </div>

        <div class="qa-card" data-tags="ontriggerenter2d 트리거 이벤트 진입 최초">
          <div class="qa-q"><span class="q-icon">Q5</span><span>Is Trigger가 켜진 2D 영역에 다른 오브젝트가 처음 겹쳐 들어갔을 때 호출되는 이벤트 함수는?</span></div>
          <div class="qa-a"><span class="ans-target">OnTriggerEnter2D</span><button class="copy-btn" onclick="copyText('OnTriggerEnter2D')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 물리적 충돌(Is Trigger 미체크) 접촉 시 호출되는 함수는 OnCollisionEnter2D</div>
        </div>

        <div class="qa-card" data-tags="트리거 필수 컴포넌트 rigidbody2d 한쪽 필수">
          <div class="qa-q"><span class="q-icon">Q6</span><span>2D 충돌 또는 Trigger 이벤트를 감지하기 위해 충돌하는 두 오브젝트 중 최소 한쪽에 반드시 있어야 하는 컴포넌트는?</span></div>
          <div class="qa-a"><span class="ans-target">Rigidbody2D</span><button class="copy-btn" onclick="copyText('Rigidbody2D')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 둘 다 Collider만 있고 Rigidbody2D가 전혀 없으면 물리 엔진에서 충돌 이벤트를 일으키지 않음</div>
        </div>

        <div class="qa-card" data-tags="instantiate 프리팹 인스턴스 복제 생성">
          <div class="qa-q"><span class="q-icon">Q7</span><span>에셋으로 보관된 Prefab을 바탕으로 씬(Scene)에 새로운 인스턴스를 동적으로 생성하는 함수는?</span></div>
          <div class="qa-a"><span class="ans-target">Instantiate()</span><button class="copy-btn" onclick="copyText('Instantiate')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 기존에 존재하는 객체를 검색하는 함수가 아니며, 새 객체 인스턴스를 복제 생성함</div>
        </div>

        <div class="qa-card" data-tags="오브젝트 풀링 object pool 재사용 setactive">
          <div class="qa-q"><span class="q-icon">Q8</span><span>Instantiate와 Destroy 반복으로 인한 성능 저하(GC 렉)를 막기 위해 객체를 비활성화해 보관 후 재사용하는 패턴은?</span></div>
          <div class="qa-a"><span class="ans-target">오브젝트 풀링 (Object Pooling)</span><button class="copy-btn" onclick="copyText('오브젝트 풀링')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 핵심: 생성과 삭제를 반복하지 않고 동일한 객체를 SetActive(false/true)로 반복 재사용</div>
        </div>

        <div class="qa-card" data-tags="리팩토링 최적화 차이 refactoring optimization">
          <div class="qa-q"><span class="q-icon">Q9</span><span>프로그램의 외부 동작을 유지하면서 코드의 가독성과 내부 구조를 개선하는 작업은?</span></div>
          <div class="qa-a"><span class="ans-target">리팩토링 (Refactoring)</span><button class="copy-btn" onclick="copyText('리팩토링')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 실행 시간/메모리 비용을 줄이는 것은 '최적화'. 리팩토링했다고 속도가 빨라지는 것은 아님</div>
        </div>

        <div class="qa-card" data-tags="animator controller 상태 머신 전이 clip">
          <div class="qa-q"><span class="q-icon">Q10</span><span>애니메이션의 상태(State)들과 상태 간의 전환(Transition) 흐름을 정의한 에셋은?</span></div>
          <div class="qa-a"><span class="ans-target">Animator Controller</span><button class="copy-btn" onclick="copyText('Animator Controller')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* Animation Clip은 재생 내용(속성 변화), Animator 컴포넌트는 실제 오브젝트 재생 담당</div>
        </div>

        <div class="qa-card" data-tags="parameter 파라미터 전환 조건 setbool">
          <div class="qa-q"><span class="q-icon">Q11</span><span>Animator Controller에서 상태 전환(Transition)의 조건으로 사용하기 위해 정의하는 변수는?</span></div>
          <div class="qa-a"><span class="ans-target">Parameter (파라미터 - 예: bool IsMoving)</span><button class="copy-btn" onclick="copyText('Parameter')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 스크립트에서 animator.SetBool("IsMoving", true); 처럼 값을 변경하여 전환 유도</div>
        </div>

        <div class="qa-card" data-tags="orthographic 원근감 직교 투영 size">
          <div class="qa-q"><span class="q-icon">Q12</span><span>물체와의 거리가 달라도 원근감 없이 항상 같은 크기로 보이게 투영하는 2D 게임용 카메라 모드는?</span></div>
          <div class="qa-a"><span class="ans-target">Orthographic (직교 투영)</span><button class="copy-btn" onclick="copyText('Orthographic')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 거리에 따라 크기가 달라지는 원근 투영은 Perspective (원근 투영)</div>
        </div>

        <div class="qa-card" data-tags="orthographic size 세로 반경 화면 확대 축소">
          <div class="qa-q"><span class="q-icon">Q13</span><span>직교 카메라의 Orthographic Size 값을 증가시키면 화면에 보이는 물체의 겉보기 크기는 어떻게 변하는가?</span></div>
          <div class="qa-a"><span class="ans-target">물체가 더 작게 보임 (화면 시야 영역이 넓어지므로 줌아웃 됨)</span><button class="copy-btn" onclick="copyText('물체가 더 작게 보임')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* Orthographic Size는 직교 카메라가 비추는 화면 세로 범위의 절반(반경)을 의미</div>
        </div>

        <div class="qa-card" data-tags="action binding 입력 장치 분리 일대다">
          <div class="qa-q"><span class="q-icon">Q14</span><span>Input System에서 게임 내 행동(Jump 등)과 키보드/패드 등 장치별 실제 입력을 분리하는 두 개념은?</span></div>
          <div class="qa-a"><span class="ans-target">Action (행동) & Binding (입력 연결)</span><button class="copy-btn" onclick="copyText('Action과 Binding')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 하나의 Action에 여러 Binding을 연결하면 조작 장치별 중복 코드 없이 동일 행동 수행</div>
        </div>

        <div class="qa-card" data-tags="누른 순간 누르고 있는 동안 입력 타이밍 점프 이동">
          <div class="qa-q"><span class="q-icon">Q15</span><span>키를 계속 누르고 있어도 1회만 실행되어야 하는 행동(점프)과 누르는 동안 연속 실행되어야 하는 행동(이동)의 입력 감지 방식은?</span></div>
          <div class="qa-a"><span class="ans-target">전자: 누른 순간(Down) 1회 감지 / 후자: 누르고 있는 동안(Pressed) 매 프레임 확인</span><button class="copy-btn" onclick="copyText('누른 순간 1회 감지 vs 누르고 있는 동안 매 프레임 확인')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 누른 순간은 손을 뗐다가 새로 누르기 전까지 반복 실행하지 않음</div>
        </div>

        <div class="qa-card" data-tags="setactive enabled 차이 비활성화 그림 물리">
          <div class="qa-q"><span class="q-icon">Q16</span><span>gameObject.SetActive(false)와 spriteRenderer.enabled = false의 결정적 차이는?</span></div>
          <div class="qa-a"><span class="ans-target">SetActive는 오브젝트 및 전체 자식 동작 중지 / enabled=false는 그림 표시만 중지(물리·스크립트 계속 동작)</span><button class="copy-btn" onclick="copyText('SetActive: 전체 중지 / enabled=false: 그림만 중지')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 비활성화는 객체 삭제(Destroy)나 변수 초기화가 아니며, 재활성화 시 이전 값 유지됨</div>
        </div>

        <div class="qa-card" data-tags="localposition position 월드 좌표 로컬 좌표 계층">
          <div class="qa-q"><span class="q-icon">Q17</span><span>월드 원점을 기준으로 한 위치와, 부모 Transform을 기준으로 한 상대적 위치를 나타내는 프로퍼티는?</span></div>
          <div class="qa-a"><span class="ans-target">월드 원점 기준: position / 부모 기준: localPosition</span><button class="copy-btn" onclick="copyText('position vs localPosition')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 부모를 이동/회전하면 자식도 함께 영향을 받지만, 자식만 움직이면 부모는 그대로 유지됨</div>
        </div>

        <div class="qa-card" data-tags="parameter argument 매개변수 인수 전달값">
          <div class="qa-q"><span class="q-icon">Q18</span><span>함수 선언부에서 값을 전달받기 위해 선언한 변수와, 함수 호출 시 실제로 전달하는 구체적인 값은?</span></div>
          <div class="qa-a"><span class="ans-target">매개변수 (Parameter) vs 인수 (Argument)</span><button class="copy-btn" onclick="copyText('매개변수(Parameter) vs 인수(Argument)')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* void Func(int a)에서 a는 매개변수, Func(10)에서 10은 인수</div>
        </div>

        <div class="qa-card" data-tags="대입 연산 순서 덮어쓰기 코드추적">
          <div class="qa-q"><span class="q-icon">Q19</span><span>C# 코드 'int n=3; n+=4; n=2; n++;' 실행 후 최종 n의 값은?</span></div>
          <div class="qa-a"><span class="ans-target">3 (3 → 7 → 2 대입으로 덮어씀 → 3)</span><button class="copy-btn" onclick="copyText('3')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 대입(=)은 기존 값에 누적하는 것이 아니라 새로운 값으로 완전히 대체(덮어쓰기)함</div>
        </div>

        <div class="qa-card" data-tags="bool 가드 조건 early return 중복 실행 방지">
          <div class="qa-q"><span class="q-icon">Q20</span><span>bool processed=false; 상태에서 'if (processed) return; count+=2; processed=true;'를 2회 호출 시 count 값은? (시작 count=4)</span></div>
          <div class="qa-a"><span class="ans-target">6 (1회차에 6으로 증가 후 processed=true 변경, 2회차는 return으로 즉시 종료되어 6 유지)</span><button class="copy-btn" onclick="copyText('6')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* bool 플래그와 early return을 활용한 대표적인 1회성 실행 보장(중복 방지) 코드 패턴</div>
        </div>
      </div>
    </section>

    <!-- SECTION 1: Unity 기본 구성 & Transform 계층 -->
    <section id="gp-ch1" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>1. Unity 기본 구성 & Transform 계층 구조 (복습자료 1~6페이지 완벽 해부)</span>
        </div>
        <span class="badge badge-amber">핵심 개념 & 공간 좌표 필수</span>
      </div>

      <!-- 교수님 중간고사 안내 및 출제 제외/집중 기준 (Page 1~2) -->
      <div class="callout-box warning" style="margin-bottom: 16px;">
        <div class="callout-title">📌 [교수님 공식 안내] 7주차 중간고사 시험 범위 & 출제 제외 항목 (Page 1~2)</div>
        <b>• 핵심 출제 방향</b>: Unity 기초 개념과 C# 스크립트 코드 흐름을 함께 점검하며, <b>특정 실습 프로젝트의 고유 규칙이나 이름을 외우는 시험이 아닙니다!</b><br>
        <b>• ❌ 시험에 직접 묻지 않는 항목 (외우지 않아도 됨)</b>:<br>
        &nbsp;&nbsp;1) 특정 프로젝트에서만 쓰인 게임 규칙, 오브젝트 이름, 구현 순서<br>
        &nbsp;&nbsp;2) 에디터 메뉴 경로, 단축키, 프로젝트 생성 절차<br>
        &nbsp;&nbsp;3) Inspector의 세부 수치 암기 (단, 핵심 속성의 '역할'은 출제됨!)<br>
        &nbsp;&nbsp;4) 데이터 저장 방식 및 고급 최적화 세부 기법<br>
        &nbsp;&nbsp;5) 입력 처리의 세부 API 외우기 (개념과 타이밍 차이에 집중)
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-1. Unity 4대 기본 구성요소 & 에디터 인터페이스 (Page 3)</h4>
        <div class="callout-box" style="margin-bottom: 12px;">
          <div class="callout-title">🚨 [시험 1순위 함정] 오브젝트 이름 vs 실제 기능</div>
          • 씬에 오브젝트를 배치하고 컴포넌트로 기능을 붙입니다.<br>
          • <b style="color: var(--tag-danger-ink);">GameObject의 이름(예: "Player", "Monster", "JumpZone")만으로 기능이 자동으로 정해지지 않습니다!</b><br>
          • 해당 오브젝트가 실제로 어떻게 동작하는지 알기 위해서는 반드시 <b>부착된 컴포넌트(Component)와 스크립트(Script) 코드의 동작</b>을 확인해야 합니다.
        </div>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 22%;">구성 요소 / 창</th>
              <th style="width: 43%;">교안 핵심 정의 및 역할</th>
              <th>실전 동작 원리 & 시험 체크 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">Scene (씬)</b></td>
              <td>오브젝트를 배치해 둔 가상 작업 공간 (게임 월드)</td>
              <td>타이틀 화면, 스테이지 1, 결과 화면 등 게임의 장면 단위</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">GameObject (게임오브젝트)</b></td>
              <td>씬에 존재하는 기본 객체 (빈 컨테이너 껍데기)</td>
              <td>스스로는 아무 기능도 없으며, <b>컴포넌트가 부착되어야 실제 역할을 수행</b>함 (기본으로 Transform은 항상 보유)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Component (컴포넌트)</b></td>
              <td>위치, 그림 표시, 물리, 충돌 같은 개별 기능을 담당하는 부품</td>
              <td><b>하나의 GameObject에 여러 컴포넌트가 함께 붙어 각자의 기능을 독립적으로 처리</b>함</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Script (스크립트)</b></td>
              <td>직접 작성한 동작과 게임 규칙을 C# 코드로 표현한 컴포넌트</td>
              <td><code>MonoBehaviour</code>를 상속받아 GameObject에 컴포넌트처럼 부착되어 동작함</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-gold-ink);">Hierarchy 창</b></td>
              <td>현재 씬에 배치된 <b>오브젝트 목록과 부모-자식 계층 관계</b>를 트리로 보여주는 창</td>
              <td>오브젝트를 다른 오브젝트 아래로 드래그하여 부모-자식(Parent-Child) 관계를 구성함</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-gold-ink);">Inspector 창</b></td>
              <td>현재 선택된 대상(GameObject 또는 에셋)의 <b>부착된 컴포넌트 목록과 세부 설정값(Property)</b>을 보여주는 창</td>
              <td>컴포넌트 추가/제거, 활성 체크박스 제어, public/[SerializeField] 변수값 확인 및 수정</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-2. Transform 컴포넌트: Position · Rotation · Scale (Page 4)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          모든 GameObject는 공간상의 상태 정보를 담는 <b>Transform 컴포넌트</b>를 기본으로 가집니다. 세 속성(Position, Rotation, Scale)은 서로 다른 역할을 하며 개별적으로 수정됩니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 18%;">속성 명칭</th>
              <th style="width: 24%;">담당 역할</th>
              <th style="width: 24%;">값을 수정했을 때의 변화</th>
              <th>시험 단골 오답 함정 (주의!)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">Position</b></td>
              <td>오브젝트의 공간상 <b>위치</b></td>
              <td>오브젝트의 배치 좌표가 이동함</td>
              <td>Scale이나 Rotation을 바꾼다고 해서 자기 자신의 Position 값이 자동으로 바뀌지는 않음 (단, 부모가 회전하면 자식의 월드 위치는 변함)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Rotation</b></td>
              <td>오브젝트의 <b>회전</b> 각도</td>
              <td>오브젝트가 바라보는 방향(기울기)이 바뀜</td>
              <td>2D 게임에서 화면 평면 회전은 주로 <b>Z축</b> 회전값을 조절함</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Scale</b></td>
              <td>각 축의 <b>크기 비율 (배율)</b></td>
              <td>오브젝트의 가로·세로·깊이 크기 비율이 바뀜</td>
              <td><b style="color: var(--tag-danger-ink);">Scale은 절대 길이(m, px)가 아니라 원본 대비 '크기 비율(배율)'입니다!</b><br>• Scale을 줄여도 Position 값이 자동으로 바뀌지 않습니다.<br>• 화면에 보이는 최종 크기는 <b>원본 스프라이트/메시 크기 × 자신의 Scale × 부모 Transform의 Scale</b> 영향을 함께 받습니다.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-3. 좌표와 벡터(Vector2 / Vector3) 및 거리 계산 (Page 5)</h4>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.85; padding-left: 20px; margin-bottom: 12px;">
          <li><b>Vector2</b>: <code>(x, y)</code> 두 개의 실수 값을 함께 표현하는 구조체 (2D 위치, 2D 이동 방향, 2D 크기).</li>
          <li><b>Vector3</b>: <code>(x, y, z)</code> 세 개의 실수 값을 함께 표현하는 구조체 (3D 위치, <code>transform.position</code>의 기본 타입).</li>
          <li><b>축 방향 기준</b>: 기본 월드 좌표에서 <b>X축은 좌우</b>(오른쪽이 <code>+</code>, 왼쪽이 <code>-</code>), <b>Y축은 위아래</b>(위쪽이 <code>+</code>, 아래쪽이 <code>-</code>), <b>Z축은 앞뒤 깊이</b>를 나타냅니다.</li>
          <li><b>벡터의 용도</b>: 단순히 현재 <b>위치(좌표)</b>를 나타낼 뿐만 아니라, 이동할 <b>방향(Direction)</b>이나 <b>크기 비율(Scale)</b>을 나타낼 때도 사용됩니다.</li>
          <li><b style="color: var(--tag-danger-ink);">[시험 출제 포인트] 차이(Difference) vs 거리(Distance)</b>:
            <ul style="padding-left: 18px; margin-top: 4px;">
              <li>같은 X축 위에서 좌표 <code>1</code>과 좌표 <code>5</code>를 비교할 때, 뺄셈 순서에 따라 <code>5 - 1 = 4</code> 또는 <code>1 - 5 = -4</code>로 부호가 달라집니다.</li>
              <li>하지만 두 위치 사이의 <b>거리(Distance)</b>는 크기(절댓값)이므로 어느 쪽에서 빼든 <b>항상 양수 <code>4</code>로 같습니다!</b> (<code>|5 - 1| = |1 - 5| = 4</code>)</li>
            </ul>
          </li>
        </ul>

        <pre class="code-block">// [Unity C# 예시] Vector3를 이용한 위치 확인 및 거리 계산
using UnityEngine;

public class TransformExample : MonoBehaviour
{
    void Start()
    {
        // 1. 현재 월드 위치 출력 (Vector3: x, y, z)
        Vector3 currentPos = transform.position;

        // 2. 오른쪽(X+)으로 3만큼, 위쪽(Y+)으로 2만큼 이동
        transform.position += new Vector3(3f, 2f, 0f);

        // 3. 같은 축에서 두 점(x=1, x=5) 사이의 거리 계산
        Vector2 pointA = new Vector2(1f, 0f);
        Vector2 pointB = new Vector2(5f, 0f);
        float dist1 = Vector2.Distance(pointA, pointB); // 결과: 4
        float dist2 = Vector2.Distance(pointB, pointA); // 결과: 4 (순서와 무관하게 거리는 항상 4!)
    }
}</pre>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-4. 부모-자식 계층 구조와 월드 좌표 vs 로컬 좌표 (Page 6)</h4>
        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 24%;">구분 기준</th>
              <th style="width: 38%;">월드 좌표 (<code>transform.position</code>)</th>
              <th>로컬 좌표 (<code>transform.localPosition</code>)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>기준 원점</b></td>
              <td><b>월드 공간의 절대 원점 <code>(0, 0, 0)</code></b>을 기준으로 측정한 위치</td>
              <td><b>부모(Parent) Transform의 위치</b>를 기준 원점으로 삼아 측정한 상대적 위치</td>
            </tr>
            <tr>
              <td><b>부모가 없을 때</b></td>
              <td>월드 원점 기준 좌표</td>
              <td>부모가 최상위(Root)이면 월드 좌표와 로컬 좌표의 값이 동일함</td>
            </tr>
            <tr>
              <td><b>부모가 이동할 때</b></td>
              <td>자식도 월드 공간에서 함께 끌려 이동하므로 <b>자식의 월드 <code>position</code> 값이 함께 변함!</b></td>
              <td>부모와의 상대적 떨어진 거리는 그대로이므로 <b>자식의 <code>localPosition</code> 값은 그대로 유지됨!</b></td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning">
          <div class="callout-title">🔥 [서술형 &amp; 객관식 킬러] 부모 Transform 수정 vs 자식 Transform 수정의 영향 범위</div>
          <b>1) 부모(Parent)를 이동하거나 회전시키면</b>:<br>
          • 그 아래에 속한 <b>모든 자식(Child) 오브젝트도 부모의 변화에 영향을 받아 함께 이동하고 회전</b>합니다.<br>
          • 예: 부모가 <code>(2, 0, 0)</code>에 있고 자식의 <code>localPosition</code>이 <code>(1, 0, 0)</code>이면 자식의 월드 위치는 <code>(3, 0, 0)</code>입니다. 이때 부모를 오른쪽으로 <code>+5</code> 이동시켜 <code>(7, 0, 0)</code>으로 만들면, 자식의 <code>localPosition</code>은 여전히 <code>(1, 0, 0)</code>이지만 실제 월드 위치(<code>position</code>)는 <code>(8, 0, 0)</code>으로 함께 이동합니다!<br><br>
          <b>2) 자식(Child)만 이동하거나 회전시키면</b>:<br>
          • <b>부모 오브젝트는 아무런 영향을 받지 않고 그대로 유지</b>되며, 오직 자식 자신의 위치/회전만 바뀝니다.<br><br>
          <b>3) ⚠️ [교안 6페이지 핵심 함정] 자식 오브젝트의 그림(Sprite)만 회전시켰을 때</b>:<br>
          • 캐릭터의 물리 충돌 판정을 담당하는 <code>Collider2D</code>는 <b>부모 오브젝트</b>에 붙어 있고, 눈에 보이는 그림(<code>SpriteRenderer</code>)은 <b>자식 오브젝트</b>에 분리되어 있는 구조를 생각해보세요.<br>
          • 이때 <b>자식 오브젝트(그림)의 Transform만 회전시키면, 화면에 보이는 그림만 돌아갈 뿐 부모 오브젝트에 붙어 있는 <code>Collider2D</code>(충돌 영역)는 함께 회전하지 않습니다!</b><br>
          • 결론: <b>"어느 오브젝트의 Transform을 수정하는지에 따라 영향을 받는 컴포넌트 범위가 달라진다!"</b>
        </div>
      </div>
    </section>

    <!-- SECTION 2: 컴포넌트 시스템 & Prefab 인스턴스 -->
    <section id="gp-ch2" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>2. 컴포넌트 역할 분담 · GetComponent 참조 · 비활성화 · Prefab (복습자료 7~11페이지)</span>
        </div>
        <span class="badge badge-amber">Null 방어 & 상태 구분 필수</span>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-1. 컴포넌트의 독립적 역할 분담 (Page 7)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          하나의 GameObject에는 여러 컴포넌트가 함께 붙어 <b>각자의 기능을 독립적으로 처리</b>합니다. 특정 컴포넌트의 설정을 바꾸면 그 컴포넌트가 담당하는 기능만 달라집니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 24%;">컴포넌트 명칭</th>
              <th style="width: 36%;">담당하는 고유 역할</th>
              <th>설정 변경 / 비활성화 시 영향 범위</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">SpriteRenderer</b></td>
              <td>2D 스프라이트(그림 이미지)를 화면에 표시</td>
              <td>그림의 표시 여부, 색상(Color), 좌우 반전(Flip) 등 <b>시각적 표시만</b> 달라짐</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Rigidbody2D</b></td>
              <td>2D 물리 시뮬레이션 (중력, 속도, 힘) 적용</td>
              <td>낙하 가속도, 속도, 물리적 이동 등 <b>물리 동작</b>이 달라짐</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Collider2D</b></td>
              <td>충돌이나 통과(겹침)를 감지할 물리 영역 정의</td>
              <td>접촉 판정 범위 및 통과 허용 여부(Is Trigger) 등 <b>접촉 판정</b>이 달라짐</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Transform</b></td>
              <td>위치(Position), 회전(Rotation), 크기 비율(Scale) 관리</td>
              <td>공간상의 배치 좌표와 외형 크기 배율이 달라짐</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning" style="margin-top: 12px;">
          <div class="callout-title">🚨 [시험 1순위 함정] 그림이 안 보이면 물리 충돌도 사라질까? (Page 7)</div>
          • <b>절대 아닙니다!</b> <code>SpriteRenderer</code>를 비활성화(<code>enabled = false</code>)하여 화면에 그림이 보이지 않게 되더라도, 같은 오브젝트에 붙어 있는 <code>Rigidbody2D</code>와 <code>Collider2D</code>는 여전히 살아 있으므로 <b>중력에 의해 떨어지고 바닥과 부딪히는 물리 동작은 그대로 계속 작동합니다!</b>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-2. 컴포넌트 참조 (<code>GetComponent&lt;T&gt;()</code>)와 <code>null</code> 방어 (Page 8~9)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 10px;">
          스크립트 코드에서 같은 GameObject에 붙어 있는 다른 컴포넌트를 제어하려면 먼저 <b>참조(Reference)</b>를 가져와야 합니다.
        </p>

        <pre class="code-block">// [교안 8~9페이지 핵심 코드] 컴포넌트 참조 가져오기 &amp; Null 방어
using UnityEngine;

public class PlayerPhysics : MonoBehaviour
{
    private Rigidbody2D body;

    void Awake()
    {
        // 1. 현재 스크립트가 붙어 있는 '같은 GameObject'에서 Rigidbody2D 컴포넌트를 찾아 참조 반환
        body = GetComponent&lt;Rigidbody2D&gt;();

        // 2. 만약 이 GameObject에 Rigidbody2D가 붙어 있지 않다면 body에는 null이 들어감!
        //    null인 상태에서 body.gravityScale 등에 접근하면 NullReferenceException 런타임 에러 발생!
        if (body == null)
        {
            return; // 안전하게 함수 조기 종료 (방어 코드)
        }

        // 3. body가 null이 아닐 때만 안전하게 컴포넌트 속성 제어
        body.gravityScale = 2.0f;
    }
}</pre>

        <div class="callout-box" style="margin-top: 12px;">
          <div class="callout-title">💡 [필수 암기] <code>GetComponent&lt;T&gt;()</code>와 참조(Reference)의 5대 핵심 원리 (Page 8~9)</div>
          <b>1. 같은 오브젝트만 탐색</b>: 기본 <code>GetComponent&lt;Rigidbody2D&gt;()</code>는 현재 스크립트가 부착된 <b>동일한 GameObject 내부만</b> 검색합니다. <b style="color: var(--tag-danger-ink);">자식 오브젝트나 씬의 다른 오브젝트까지 자동으로 뒤져서 찾아주지 않습니다!</b><br>
          <b>2. 컴포넌트 추가(Add)가 아님</b>: <code>GetComponent</code>는 이미 붙어 있는 컴포넌트를 <b>찾아서 가져오는 것</b>이지, 없는 컴포넌트를 새로 만들어 붙여주는(<code>AddComponent</code>) 함수가 아닙니다.<br>
          <b>3. 없으면 <code>null</code> 반환</b>: 찾는 컴포넌트가 해당 GameObject에 부착되어 있지 않다면 <b><code>null</code></b>(참조 대상 없음)을 반환합니다.<br>
          <b>4. 참조(Reference)는 복제(Copy)가 아님</b>: <code>Rigidbody2D body = GetComponent&lt;Rigidbody2D&gt;();</code>를 실행했다고 해서 <code>Rigidbody2D</code> 컴포넌트가 2개로 복사되는 것이 아닙니다. 변수 <code>body</code>는 원래 붙어 있는 컴포넌트를 <b>가리키는 리모컨(참조 변수)</b>일 뿐입니다.<br>
          <b>5. <code>null</code> 체크의 목적</b>: 참조 변수가 <code>null</code>인 상태에서 멤버 변수나 함수를 호출하면 오류(<code>NullReferenceException</code>)가 나므로, <code>if (body == null) return;</code>으로 미리 확인해 안전하게 건너뛰는 것입니다.
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-3. 재사용 상태 비교: 오브젝트 비활성화 vs 컴포넌트 비활성화 vs 변수 초기화 (Page 10)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          객체를 끄거나 다시 사용할 때 <b>무엇을 껐는지</b>, 그리고 <b>변수 값이 초기화되는지 여부</b>를 명확히 구분해야 합니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 30%;">코드 / 작업 방식</th>
              <th style="width: 35%;">중지되는 영향 범위</th>
              <th>동작 유지 항목 &amp; 필드 변수 값 변화</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--tag-danger-ink);"><code>gameObject.SetActive(false)</code></b></td>
              <td><b>해당 GameObject 전체 + 그 아래 모든 자식 오브젝트</b>의 활성 동작을 모두 중지함</td>
              <td>• 화면 표시, 물리 연산, 스크립트 <code>Update</code>가 모두 멈춤<br>• <b style="color: var(--accent);">단, 객체가 삭제된 것이 아니므로 스크립트 내부 변수(HP, 점수 등) 값은 초기화되지 않고 그대로 남아 있음!</b></td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-gold-ink);"><code>spriteRenderer.enabled = false</code></b></td>
              <td><b>오직 해당 컴포넌트(<code>SpriteRenderer</code> 그림 표시) 기능만</b> 중지함</td>
              <td>• 화면에 그림만 안 보일 뿐, <b>같은 오브젝트의 다른 컴포넌트(Rigidbody2D 물리, Collider2D 충돌, 타 스크립트)는 정상 동작 유지!</b><br>• 당연히 변수 값도 초기화되지 않음</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);">필드 변수 초기화 코드</b><br>(예: <code>hp = 100; score = 0;</code>)</td>
              <td>스크립트 내부 변수에 시작 기본값을 다시 직접 대입함</td>
              <td>• 비활성화했던 객체를 다시 켜서(<code>SetActive(true)</code>) 새 객체처럼 재사용할 때는 <b>반드시 변수 초기화 코드를 직접 실행해야 이전 값이 남지 않음!</b></td>
            </tr>
          </tbody>
        </table>

        <pre class="code-block" style="margin-top: 12px;">// [Unity C# 예시] 비활성화와 재활성화 시 변수 값 유지 확인 (Page 10 완벽 반영)
public class EnemyState : MonoBehaviour
{
    public int hp = 100;
    public SpriteRenderer spriteRenderer;

    void TakeDamage()
    {
        hp = 30; // 체력이 30으로 줄어듦

        // [케이스 A] 그림만 끄기 -&gt; 화면에만 안 보일 뿐 물리 충돌과 Update()는 계속 돌아감! hp도 30 유지!
        spriteRenderer.enabled = false;

        // [케이스 B] 오브젝트 전체 끄기 -&gt; 모든 컴포넌트와 자식 오브젝트 중지!
        // 하지만 객체가 파괴(Destroy)되거나 변수가 초기화된 것은 아니므로 hp는 여전히 30으로 남아 있음!
        gameObject.SetActive(false);
    }

    // 나중에 오브젝트 풀에서 꺼내 다시 재사용할 때:
    public void Respawn()
    {
        gameObject.SetActive(true); // 다시 켜도 hp는 이전에 깎인 30 그대로 남아 있음!
        hp = 100;                   // 따라서 새 적처럼 쓰려면 필드를 직접 초기값(100)으로 다시 대입해야 함!
        spriteRenderer.enabled = true;
    }
}</pre>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-4. Prefab(프리팹) 에셋과 씬 인스턴스 (Page 11)</h4>
        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 24%;">구분</th>
              <th style="width: 38%;">Prefab 에셋 (프로젝트 보관 원본)</th>
              <th>씬의 인스턴스 (Scene Instance)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>정의 및 위치</b></td>
              <td>반복 사용할 오브젝트 구성을 <b>프로젝트 에셋 파일(<code>.prefab</code>)로 저장해 둔 원본 설계도</b></td>
              <td>Prefab 설계도를 바탕으로 <b>현재 Scene(Hierarchy)에 실제로 배치되거나 생성된 개별 객체</b></td>
            </tr>
            <tr>
              <td><b>상태 독립성</b></td>
              <td>모든 복제본의 기준이 되는 기본 컴포넌트와 초기 설정값을 보유</td>
              <td>씬에 생성된 각 인스턴스는 <b>서로 다른 위치(Position), 회전, 개별 런타임 상태(체력, 속도 등)를 독립적으로 가질 수 있음</b></td>
            </tr>
            <tr>
              <td><b>관련 함수 (<code>Instantiate</code>)</b></td>
              <td colspan="2">
                • <b><code>Instantiate(prefab)</code></b>: 원본 Prefab이나 오브젝트를 복제하여 <b>씬에 새로운 인스턴스를 동적으로 생성</b>하는 함수입니다.<br>
                • <b style="color: var(--tag-danger-ink);">[함정 주의]</b> <code>Instantiate</code>는 씬에 이미 있는 오브젝트를 검색(Find)하거나 컴포넌트를 가져오는(<code>GetComponent</code>) 함수가 아니라 <b>새 객체를 복제 생성</b>하는 함수입니다!
              </td>
            </tr>
          </tbody>
        </table>

        <pre class="code-block">// [Unity C# 예시] Prefab 원본을 이용해 씬에 서로 다른 위치의 인스턴스 생성하기
public class Spawner : MonoBehaviour
{
    public GameObject coinPrefab; // Inspector에서 연결한 Prefab 에셋 (설계도 원본)

    void Start()
    {
        // 같은 coinPrefab 원본으로부터 씬에 2개의 독립된 인스턴스를 각각 다른 위치에 생성!
        GameObject coin1 = Instantiate(coinPrefab, new Vector3(0f, 2f, 0f), Quaternion.identity);
        GameObject coin2 = Instantiate(coinPrefab, new Vector3(5f, 2f, 0f), Quaternion.identity);
        // coin1과 coin2는 같은 Prefab에서 나왔지만 씬 안에서는 위치와 상태가 서로 독립된 별개의 인스턴스임!
    }
}</pre>
      </div>
    </section>

    <!-- SECTION 3: 생명주기·시간 이동·2D 물리 & 충돌 -->
    <section id="gp-ch3" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>3. 실행 함수(생명주기) · Time.deltaTime · 2D 물리 & 충돌 조건 (복습자료 12~16페이지)</span>
        </div>
        <span class="badge badge-amber">시험 최다 출제 파트</span>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-1. MonoBehaviour 4대 실행 함수 비교 (Page 12)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          Unity 스크립트의 생명주기 함수는 <b>언제 호출되는지</b>와 <b>한 번만 실행되는지 vs 반복 실행되는지</b>가 명확히 구분됩니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 18%;">실행 함수</th>
              <th style="width: 26%;">호출 시점 및 주기</th>
              <th style="width: 20%;">실행 횟수</th>
              <th>주요 작성 코드 & 시험 핵심 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);"><code>Awake()</code></b></td>
              <td>오브젝트 인스턴스가 생성되어 초기화될 때 <b>가장 먼저 호출</b></td>
              <td><b>단 1회</b> (초기화 시)</td>
              <td><code>GetComponent&lt;T&gt;()</code>로 자신의 컴포넌트 참조를 가져오거나 내부 초기값을 준비할 때 사용 (<code>Start</code>보다 먼저 실행됨!)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>Start()</code></b></td>
              <td>스크립트가 활성화된 상태에서 <b>첫 번째 <code>Update</code>가 실행되기 직전</b> 호출</td>
              <td><b>단 1회</b> (첫 업데이트 전)</td>
              <td>다른 오브젝트(<code>Awake</code>를 마친 상태)와 상호작용하거나 게임 시작 초기 상태를 설정할 때 사용</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);"><code>Update()</code></b></td>
              <td>스크립트가 활성화된 동안 <b>매 화면 프레임(Frame)마다</b> 호출</td>
              <td><b>매 프레임 반복</b><br>(FPS에 따라 가변)</td>
              <td>일반 게임 로직, 타이머, 프레임 기반 이동(<code>Time.deltaTime</code> 곱함), 사용자 입력 확인 처리</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-gold-ink);"><code>FixedUpdate()</code></b></td>
              <td>물리 엔진 업데이트의 <b>고정된 시간 간격(Fixed Timestep)마다</b> 호출</td>
              <td><b>고정 시간 간격 반복</b><br>(기본 0.02초 = 초당 50회)</td>
              <td><code>Rigidbody2D</code>를 이용한 물리 연산(힘, 속도 제어).<br><b style="color: var(--tag-danger-ink);">※ 화면 프레임(FPS)과 실행 주기가 다르므로 Update와 호출 횟수가 항상 같지 않음!</b></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-2. 시간에 맞춘 이동과 <code>Time.deltaTime</code>의 원리 (Page 13)</h4>
        <div class="callout-box warning" style="margin-bottom: 12px;">
          <div class="callout-title">🔥 [서술형 &amp; 계산형 1순위] 왜 <code>Update()</code>에서 이동할 때 <code>Time.deltaTime</code>을 곱하는가?</div>
          • <b><code>Time.deltaTime</code>의 정의</b>: <b>이전 프레임에서 현재 프레임까지 걸린 시간(초 단위)</b>입니다.<br>
          &nbsp;&nbsp;👉 <b>30 FPS 기기</b>: 1초에 30프레임이므로 한 프레임 간격 <code>Time.deltaTime = 1/30초 ≈ 0.0333초</code><br>
          &nbsp;&nbsp;👉 <b>120 FPS 기기</b>: 1초에 120프레임이므로 한 프레임 간격 <code>Time.deltaTime = 1/120초 ≈ 0.0083초</code><br>
          • 만약 <code>Time.deltaTime</code>을 곱하지 않고 매 프레임 고정된 값을 더하면, <b>프레임 수(FPS)가 높은 고성능 컴퓨터일수록 캐릭터가 몇 배나 더 빠르게 날아가는 심각한 문제</b>가 발생합니다!
        </div>

        <pre class="code-block">// [교안 13페이지 핵심 코드] 프레임 독립적(Frame-independent) 이동 수식
// speed가 5라면, 어떤 FPS의 기기에서 실행하든 정확히 "1초에 5만큼" 오른쪽으로 이동함!
transform.position += Vector3.right * speed * Time.deltaTime;</pre>

        <table class="concept-table" style="margin-top: 12px;">
          <thead>
            <tr>
              <th style="width: 22%;">비교 상황 (<code>speed = 10</code> 가정)</th>
              <th style="width: 39%;">❌ 잘못된 코드: 매 프레임 고정 거리 더하기<br><code>transform.position += Vector3.right * 10;</code></th>
              <th>⭕ 올바른 코드: <code>Time.deltaTime</code> 곱하기<br><code>transform.position += Vector3.right * 10 * Time.deltaTime;</code></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>낮은 프레임 기기 (30 FPS)</b><br><span style="font-size:12.5px;">(<code>Δt = 1/30초</code>, 1초에 30번 호출)</span></td>
              <td><code>10 × 30회 =</code> <b>1초 동안 <code>300</code>만큼 이동</b></td>
              <td><code>10 × (1/30초) × 30회 =</code> <b style="color: var(--tag-green-ink);">1초 동안 정확히 <code>10</code>만큼 이동</b></td>
            </tr>
            <tr>
              <td><b>높은 프레임 기기 (120 FPS)</b><br><span style="font-size:12.5px;">(<code>Δt = 1/120초</code>, 1초에 120번 호출)</span></td>
              <td><code>10 × 120회 =</code> <b style="color: var(--tag-danger-ink);">1초 동안 <code>1200</code>만큼 이동 (4배 폭주!)</b></td>
              <td><code>10 × (1/120초) × 120회 =</code> <b style="color: var(--tag-green-ink);">1초 동안 정확히 <code>10</code>만큼 이동</b></td>
            </tr>
            <tr>
              <td><b>핵심 결론</b></td>
              <td>프레임 수(FPS)에 따라 이동 속도가 제각각 달라짐</td>
              <td><b>프레임 간격에 맞춰 이동량이 자동 보정되어, 어떤 FPS에서도 1초 동안 <code>speed</code>만큼 일정하게 이동함!</b></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-3. 2D 물리: Dynamic Rigidbody2D와 Gravity Scale (Page 14)</h4>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.85; padding-left: 20px;">
          <li><b>Dynamic Rigidbody2D</b>: 중력과 물리 힘을 받아 실제로 움직이고 부딪히는 오브젝트(플레이어, 떨어지는 사과, 몬스터 등)에 사용하는 기본 물리 컴포넌트입니다.</li>
          <li><b>Gravity Scale (중력 배율)</b>: 해당 <code>Rigidbody2D</code>가 월드 중력(기본 아래 방향)을 얼마나 강하게 받을지 결정하는 <b>중력 가속도의 배율</b>입니다.
            <ul style="padding-left: 18px; margin-top: 4px;">
              <li><b>Gravity Scale 값을 키우면</b>: 중력이 아래쪽으로 작용할 때 <b>아래쪽으로 떨어지는 낙하 가속도가 더 커집니다</b> (더 빨리 떨어짐).</li>
              <li><b>Gravity Scale이 <code>0</code>이면</b>: 중력의 영향을 받지 않아 허공에 떠 있게 됩니다.</li>
              <li><b>Gravity Scale이 음수(예: <code>-1</code>)이면</b>: 중력이 반대 방향(위쪽)으로 작용하여 위로 떠오릅니다.</li>
            </ul>
          </li>
          <li><b style="color: var(--tag-danger-ink);">🚨 [교안 14페이지 명시 오답 함정]</b>: <code>Gravity Scale</code>은 오브젝트의 <b>시작 위치(Position)</b>를 바꾸거나 <b>애니메이션 재생 속도(Animator Speed)</b>를 조절하는 설정이 절대 아닙니다!</li>
        </ul>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-4. 접촉과 통과(Collider2D vs Is Trigger) 및 2D 충돌 이벤트 조건 (Page 15~16)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          오브젝트끼리 닿았을 때 <b>물리적으로 막을 것인가(Collision)</b>, 아니면 <b>그냥 통과시키면서 닿았다는 사실만 감지할 것인가(Trigger)</b>에 따라 설정과 호출 함수가 완전히 달라집니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 20%;">비교 항목</th>
              <th style="width: 40%;">물리적 충돌: 일반 <code>Collider2D</code><br>(<code>Is Trigger</code> 체크 해제)</th>
              <th>통과 영역 감지: <code>Trigger</code><br>(<code>Is Trigger</code> 체크 활성화)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>물리적 통과 여부</b></td>
              <td><b>통과 불가능 (서로 밀어내고 막힘)</b></td>
              <td><b>물리적 막힘 없이 자유롭게 통과함</b></td>
            </tr>
            <tr>
              <td><b>주요 사용 예시</b></td>
              <td>캐릭터가 밟고 서는 <b>바닥(Ground), 벽(Wall), 장애물</b></td>
              <td>먹으면 사라지는 <b>점수 코인, 골인 지점(Goal), 체크포인트, 감지 센서</b></td>
            </tr>
            <tr>
              <td><b>최초 접촉 시 호출 함수</b></td>
              <td><b style="color: var(--accent);"><code>OnCollisionEnter2D(Collision2D collision)</code></b></td>
              <td><b style="color: var(--tag-green-ink);"><code>OnTriggerEnter2D(Collider2D other)</code></b></td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning" style="margin-top: 14px;">
          <div class="callout-title">🚨 [시험 100% 출제] Collider &amp; Trigger 2대 절대 규칙 (Page 15~16)</div>
          <b>규칙 1. 왜 오브젝트를 통과시키고 싶을 때 <code>Collider2D</code>를 아예 삭제하면 안 되는가? (Page 15)</b><br>
          • <code>Collider2D</code>는 충돌이나 통과를 판정하기 위한 <b>'감지 영역(모양과 크기)' 그 자체</b>입니다.<br>
          • 통과시키겠다고 <code>Collider2D</code> 컴포넌트를 아예 없애버리면, 플레이어가 그 자리에 들어왔는지 <b>접촉을 감지할 영역 자체가 사라져 <code>OnTriggerEnter2D</code> 이벤트도 절대 발생하지 않습니다!</b> 따라서 통과하면서 감지하려면 <code>Collider2D</code>는 그대로 두고 <b><code>Is Trigger</code> 옵션만 켜야 합니다.</b><br><br>
          <b>규칙 2. 충돌/Trigger 이벤트 함수가 호출되기 위한 물리 조건 (Page 16)</b><br>
          • 두 오브젝트가 닿았을 때 <code>OnCollisionEnter2D</code> 또는 <code>OnTriggerEnter2D</code>가 실행되려면:<br>
          &nbsp;&nbsp;① <b>양쪽 오브젝트 모두에 <code>Collider2D</code></b>가 붙어 있어야 하고,<br>
          &nbsp;&nbsp;② <b style="color: var(--tag-danger-ink);">접촉하는 두 오브젝트 중 최소 한쪽에는 반드시 <code>Rigidbody2D</code>가 붙어 있어야 합니다!</b> (만약 두 오브젝트 모두 <code>Collider2D</code>만 있고 둘 다 <code>Rigidbody2D</code>가 없다면 유니티 물리 엔진은 충돌/트리거 이벤트를 발생시키지 않습니다.)
        </div>

        <pre class="code-block" style="margin-top: 12px;">// [Unity C# 예시] 바닥 물리 충돌(Collision) vs 코인 통과 감지(Trigger) 비교 코드
using UnityEngine;

public class PlayerInteraction : MonoBehaviour
{
    private int score = 0;

    // 1. Is Trigger가 꺼진 바닥/벽과 '물리적으로 부딪혔을 때' 자동 호출
    private void OnCollisionEnter2D(Collision2D collision)
    {
        Debug.Log("물리적 충돌 발생! 상대 오브젝트: " + collision.gameObject.name);
    }

    // 2. Is Trigger가 켜진 코인/골인 영역에 '통과하며 처음 들어갔을 때' 자동 호출
    private void OnTriggerEnter2D(Collider2D other)
    {
        score += 10;
        other.gameObject.SetActive(false); // 먹은 코인 비활성화
    }
}</pre>
      </div>
    </section>

    <!-- SECTION 4: 입력 시스템 & 애니메이션 & 카메라 -->
    <section id="gp-ch4" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>4. Input System · 입력 타이밍 · 애니메이션 3요소 · 카메라 투영 (복습자료 17~21페이지)</span>
        </div>
        <span class="badge badge-amber">Action/Binding & Orthographic Size 필수</span>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">4-1. 입력 시스템: Input Action과 Binding의 분리 구조 (Page 17)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          Unity의 Input System은 게임 안에서의 <b>논리적 행동(Action)</b>과 실제 물리적인 <b>장치 입력 키(Binding)</b>를 분리하여 관리합니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 24%;">구성 개념</th>
              <th style="width: 38%;">정의 및 의미</th>
              <th>실제 예시 및 연결 관계</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">Input Action (액션)</b></td>
              <td>게임 안에서 수행할 <b>추상적·논리적 행동 이름이나 값</b></td>
              <td><code>Jump</code>(점프하기), <code>Move</code>(이동하기), <code>Attack</code>(공격하기)</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);">Binding (바인딩)</b></td>
              <td>해당 Action을 발동시키기 위해 연결한 <b>실제 입력 장치의 물리적 키/버튼</b></td>
              <td><code>Jump</code> 액션에 <b>[키보드 Space 키]</b> 바인딩 + <b>[게임패드 South 버튼]</b> 바인딩 연결</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box" style="margin-top: 12px;">
          <div class="callout-title">💡 [서술형 핵심] 하나의 Action에 여러 Binding을 연결하면 왜 좋은가? (Page 17)</div>
          • 스페이스바를 누르든, 위쪽 화살표를 누르든, 게임패드 버튼을 누르든 모두 하나의 <b><code>Jump</code> Action</b>으로 모여서 스크립트의 <code>Jump()</code> 동작을 호출합니다.<br>
          • 따라서 <b>입력 장치마다 게임 캐릭터의 점프/이동 로직 코드를 중복해서 따로 작성하지 않아도 되며</b>, 나중에 조작 키를 바꾸고 싶을 때도 캐릭터 스크립트 코드를 건드리지 않고 Binding 설정만 바꾸면 됩니다!
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">4-2. 입력의 타이밍: 누른 순간(1회 감지) vs 누르고 있는 동안(연속 확인) (Page 18)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          특정 입력 API 함수 이름을 외우는 것보다, <b>"언제 1회만 실행되고 언제 매 프레임 반복 실행되는가"</b>의 타이밍 차이를 정확히 구분해야 합니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 24%;">입력 감지 타이밍</th>
              <th style="width: 38%;">동작 방식 (버튼을 꾹 누르고 있을 때)</th>
              <th>적합한 게임 동작 예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">누른 순간 감지</b><br>(Pressed Down / Started)</td>
              <td>버튼을 <b>누르기 시작한 첫 프레임에 단 1회만</b> 감지됨.<br><b style="color: var(--tag-danger-ink);">손을 떼지 않고 계속 꾹 누르고 있어도 다시 실행되지 않으며, 손을 뗐다가 새로 눌러야 다시 실행됨!</b></td>
              <td><b>점프(Jump)</b>, 단발 사격, 대화창 넘기기, 메뉴 열기</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);">누르고 있는 동안 확인</b><br>(Held / Value 읽기)</td>
              <td>버튼이 <b>눌려 있는 상태인지를 매 프레임마다</b> 계속 확인함.<br>손을 떼기 전까지 누르고 있는 동안 매 프레임 연속 실행됨.</td>
              <td><b>좌우 연속 이동(Move)</b>, 달리기 유지, 기관총 연사</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">4-3. 애니메이션 시스템 3요소와 Animator 상태 전환 (Page 19~20)</h4>
        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 25%;">애니메이션 3요소</th>
              <th style="width: 40%;">역할 및 정의 (Page 19)</th>
              <th>핵심 체크 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">Animation Clip</b></td>
              <td>시간 흐름에 따른 스프라이트 이미지나 속성 변화를 기록한 <b>개별 동작 에셋</b> (예: <code>Idle.anim</code>, <code>Move.anim</code>)</td>
              <td>같은 클립을 끝난 뒤에도 계속 반복 재생할지 여부는 Clip 에셋의 <b style="color: var(--tag-danger-ink);"><code>Loop Time</code></b> 체크 설정으로 결정함!</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Animator Controller</b></td>
              <td>여러 애니메이션 <b>상태(State)들과 상태 간의 전환(Transition) 규칙·흐름</b>을 정의한 상태 머신 에셋</td>
              <td>내부에 <b>Parameter</b>(변수)와 <b>Transition 조건(Condition)</b>을 설정하여 언제 어떤 애니메이션으로 바꿀지 관리함</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Animator 컴포넌트</b></td>
              <td>GameObject에 부착되어 Controller의 현재 상태에 연결된 Clip을 <b>실제 오브젝트에서 재생</b>하는 컴포넌트</td>
              <td>스크립트에서 <code>GetComponent&lt;Animator&gt;()</code>로 참조하여 파라미터 값을 변경함</td>
            </tr>
          </tbody>
        </table>

        <pre class="code-block">// [교안 20페이지 핵심 코드] Animator Parameter를 통한 상태 전환(Transition) 흐름
using UnityEngine;

public class PlayerAnimation : MonoBehaviour
{
    private Animator animator;

    void Awake()
    {
        animator = GetComponent&lt;Animator&gt;();
    }

    void UpdateMoveState(bool isMovingNow)
    {
        // 1. 스크립트에서 Animator Controller의 "IsMoving" bool 파라미터 값을 true로 변경!
        // 주의: "IsMoving"은 유니티 내장 키워드가 아니라 개발자가 Controller에 직접 만든 파라미터 이름임!
        animator.SetBool("IsMoving", isMovingNow);

        // 2. [내부 전환 과정]:
        //    현재 상태: [Idle State] ──(Transition 조건: IsMoving == true)──&gt; 다음 상태: [Move State]
        //    Controller가 지정된 Transition 조건을 검사하여 조건이 충족되면 Move State로 상태를 전환함!
    }
}</pre>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">4-4. 카메라 투영 방식(Perspective vs Orthographic)과 Size 원리 (Page 21)</h4>
        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 24%;">투영 방식 (Projection)</th>
              <th style="width: 40%;">원근감 및 거리별 물체 크기 변화</th>
              <th>주요 사용 장르 & 시야 범위 조절 속성</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">Perspective (원근 투영)</b></td>
              <td>사람의 눈처럼 원근감이 적용되어, <b>같은 크기의 물체라도 카메라에서 멀리 있을수록 더 작게 보임</b></td>
              <td>3D 게임에 주로 사용<br>• 시야각 조절: <b><code>Field of View (FOV)</code></b></td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);">Orthographic (직교 투영)</b></td>
              <td>원근감이 전혀 없어, <b>같은 크기의 물체는 카메라와의 거리가 달라도 항상 똑같은 크기로 보임</b></td>
              <td>2D 게임 및 UI, 쿼터뷰 게임에 주로 사용<br>• 시야 범위 조절: <b style="color: var(--tag-danger-ink);"><code>Orthographic Size</code></b></td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning">
          <div class="callout-title">🔥 [시험 1순위 킬러] <code>Orthographic Size</code>의 정확한 기하학적 의미와 크기 변화 (Page 21)</div>
          • <b>정의</b>: <code>Orthographic Size</code>는 직교 카메라가 비추는 <b>화면 세로 범위의 절반(세로 반경)</b>을 의미합니다.<br>
          &nbsp;&nbsp;👉 예: <code>Orthographic Size = 5</code>이면 카메라는 위쪽으로 <code>5</code>, 아래쪽으로 <code>5</code>하여 <b>총 세로 높이 <code>10</code> 유닛(Unit)</b>만큼의 월드 영역을 화면에 비춥니다.<br>
          • <b style="color: var(--tag-danger-ink);">[가장 많이 틀리는 함정] Orthographic Size 값을 키우면(예: 5 → 10) 화면 속 캐릭터는 커질까, 작아질까?</b><br>
          &nbsp;&nbsp;👉 Size를 키우면 카메라가 한 화면에 담아내는 월드 영역이 <b>더 넓어집니다(줌아웃 효과)</b>.<br>
          &nbsp;&nbsp;👉 똑같은 모니터 화면 안에 더 넓은 땅을 보여주어야 하므로, 그 안에 있는 <b>개별 물체(캐릭터)는 화면에서 상대적으로 더 작게 보입니다!</b> (반대로 Size를 줄이면 줌인되어 물체가 더 크게 보입니다.)
        </div>
      </div>
    </section>

    <!-- SECTION 5: UI 이벤트 & 코드 구조 (리팩토링·풀링) -->
    <section id="gp-ch5" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>5. UI 시스템과 버튼 이벤트 · 리팩토링 vs 최적화 · 오브젝트 풀 (복습자료 22~24페이지)</span>
        </div>
        <span class="badge badge-amber">개념 비교 & 서술형 단골</span>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">5-1. UI 기본 구성과 Button <code>On Click</code> 이벤트 연결 (Page 22)</h4>
        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 24%;">UI 구성 요소</th>
              <th style="width: 40%;">역할 및 특징</th>
              <th>시험 핵심 포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);">Canvas (캔버스)</b></td>
              <td>모든 UI 요소가 배치되고 그려지는 기준 영역 컴포넌트</td>
              <td>UI 요소(Button, Image, Text 등)는 반드시 Canvas의 자식으로 배치되어야 화면에 표시됨</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">RectTransform</b></td>
              <td>UI 전용 위치·크기·정렬 기준(Anchor/Pivot) 관리 컴포넌트</td>
              <td>일반 GameObject의 <code>Transform</code> 대신 UI 오브젝트에 기본 부착됨</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">Image / TextMeshPro</b></td>
              <td>화면에 아이콘/배경 이미지와 선명한 텍스트(글자)를 표시하는 UI 컴포넌트</td>
              <td>점수 표시, 체력바, 안내 문구 등에 사용</td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);">Button (버튼)</b></td>
              <td>사용자의 클릭 입력을 받아 <b><code>On Click</code> 이벤트에 등록된 함수를 호출</b>하는 UI 컴포넌트</td>
              <td><b style="color: var(--tag-danger-ink);">※ 버튼 오브젝트 이름과 스크립트 함수 이름이 같다고 해서 자동으로 연결되지 않음!</b> 반드시 Inspector의 <code>On Click ()</code> 목록이나 코드로 대상 오브젝트와 함수를 명시적으로 연결해야 호출됨</td>
            </tr>
          </tbody>
        </table>

        <pre class="code-block">// [Unity C# 예시] UI Button 클릭 시 호출될 public 함수 작성
using UnityEngine;

public class GameUIController : MonoBehaviour
{
    // Inspector의 Button -&gt; On Click () 이벤트 슬롯에 이 오브젝트를 넣고
    // 드롭다운에서 GameUIController -&gt; OnClickRestartButton()을 직접 선택해 연결해야 함!
    public void OnClickRestartButton()
    {
        Debug.Log("재시작 버튼이 클릭되어 등록된 함수가 호출되었습니다!");
    }
}</pre>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">5-2. 코드 구조: 리팩토링(Refactoring) vs 최적화(Optimization) (Page 23)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 12px;">
          리팩토링과 최적화는 목적이 완전히 다른 작업입니다. 시험에서 두 개념을 섞어 출제하는 보기를 반드시 구별해야 합니다.
        </p>

        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 22%;">구분</th>
              <th style="width: 42%;">리팩토링 (Refactoring)</th>
              <th>최적화 (Optimization)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>핵심 정의</b></td>
              <td>프로그램의 <b>외부 동작(결과)은 그대로 유지하면서 내부 코드 구조를 개선</b>하는 작업</td>
              <td>프로그램의 <b>실행 시간(속도)이나 메모리 사용량 같은 리소스 비용을 줄이는</b> 작업</td>
            </tr>
            <tr>
              <td><b>주요 목적</b></td>
              <td>가독성 향상, 유지보수 용이성 확보, 버그 수정 범위 축소</td>
              <td>프레임 드랍(렉) 방지, 연산 속도 향상, 메모리 절약</td>
            </tr>
            <tr>
              <td><b>핵심 기법 (Page 23)</b></td>
              <td>
                • <b>책임 분리</b>: 서로 다른 역할(입력, 이동, UI 등)의 코드를 분리해 수정 범위를 줄임<br>
                • <b>중복 제거</b>: 같은 처리나 규칙을 여러 곳에 복사해 두지 않고 한 함수/장소로 모음
              </td>
              <td>• <b>오브젝트 풀(Object Pool)</b> 사용<br>• 무거운 연산/탐색 줄이기 및 프로파일링 측정</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning" style="margin-top: 12px;">
          <div class="callout-title">🚨 [교안 23페이지 핵심 함정] 리팩토링을 하면 실행 속도가 무조건 빨라질까?</div>
          • <b>아닙니다!</b> 코드를 읽기 쉽게 정리(리팩토링)했다고 해서 프로그램 실행 속도가 자동으로 빨라지는 것은 아닙니다.<br>
          • 실제 성능(속도·메모리)이 개선되었는지는 느낌이나 코드 길이가 아니라 <b>측정(Profiling)</b>을 통해 확인해야 합니다.
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">5-3. 생성/삭제 비용과 오브젝트 풀(Object Pool) (Page 24)</h4>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.85; padding-left: 20px; margin-bottom: 12px;">
          <li><b><code>Instantiate</code></b>: 새 인스턴스를 메모리에 생성합니다.</li>
          <li><b><code>Destroy</code></b>: 기존 인스턴스를 파괴(제거)합니다.</li>
          <li><b>문제점</b>: 탄막 슈팅 게임의 총알이나 끝없이 나오는 장애물처럼 자주 등장하고 사라지는 객체를 매번 <code>Instantiate</code>로 만들고 <code>Destroy</code>로 지우면, <b>생성과 삭제(메모리 할당 및 가비지 컬렉션)가 짧은 시간에 반복되어 큰 성능 비용(프레임 저하)이 발생</b>합니다.</li>
          <li><b style="color: var(--tag-green-ink);">해결책 — 오브젝트 풀(Object Pool)</b>:
            <ul style="padding-left: 18px; margin-top: 4px;">
              <li>객체를 매번 새로 만들고 파괴하는 대신, <b>미리 만들어 둔(또는 한 번 생성한) 객체를 풀(Pool)에 보관</b>해 둡니다.</li>
              <li>화면에 필요할 때는 <b>활성화(<code>SetActive(true)</code>)</b>하여 꺼내 쓰고,</li>
              <li>사용이 끝나면 <code>Destroy</code>로 삭제하지 않고 <b>비활성화(<code>SetActive(false)</code>)</b>한 뒤 나중에 <b>같은 객체를 다시 꺼내 반복 재사용</b>합니다!</li>
            </ul>
          </li>
        </ul>

        <pre class="code-block">// [Unity C# 예시] Destroy 대신 비활성화 후 재사용하는 오브젝트 풀 개념 코드
using UnityEngine;

public class BulletPoolExample : MonoBehaviour
{
    // 1. 총알이 화면 밖으로 나가거나 적에게 맞았을 때: Destroy(gameObject) 하지 않음!
    public void ReturnToPool()
    {
        gameObject.SetActive(false); // 비활성화하여 풀에 대기시킴
    }

    // 2. 다시 총알을 발사할 때: Instantiate 하지 않고 비활성화된 총알을 다시 켜서 재사용!
    public void ReuseFromPool(Vector3 spawnPosition)
    {
        transform.position = spawnPosition; // 위치 재설정 (초기화)
        gameObject.SetActive(true);         // 다시 활성화하여 재사용!
    }
}</pre>
      </div>
    </section>

    <!-- SECTION 6: C# 기초 문법 & 코드 흐름 추적 -->
    <section id="gp-ch6" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>6. C# 기초 문법 & 코드 실행 흐름 추적 10대 유형 완벽 해부 (복습자료 25~34페이지)</span>
        </div>
        <span class="badge badge-amber">코드 결과값 단답형 100% 출제</span>
      </div>

      <!-- 6-1. 변수와 기본 타입 & 대입문 순서 (Page 25~26) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">6-1. 변수와 기본 타입 & 대입문 순서 추적 (Page 25~26)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 10px;">
          <b>변수 선언과 초기화</b>: <code>int value = 3;</code>에서 <code>int</code>는 저장할 값의 <b>타입(자료형)</b>, <code>value</code>는 <b>변수 이름</b>, <code>3</code>은 <b>초기값</b>입니다.
        </p>

        <table class="concept-table" style="margin-bottom: 14px;">
          <thead>
            <tr>
              <th style="width: 20%;">C# 기본 타입</th>
              <th style="width: 30%;">저장하는 데이터 종류</th>
              <th>리터럴 예시 및 주의점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b style="color: var(--accent);"><code>int</code></b></td>
              <td>소수점이 없는 <b>정수</b></td>
              <td><code>3</code>, <code>0</code>, <code>-15</code> (정수끼리의 나눗셈 <code>7 / 2</code>는 몫인 <code>3</code>이 됨)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>float</code></b></td>
              <td>소수점이 있는 <b>실수</b></td>
              <td><code>0.5f</code>, <code>3.14f</code> (숫자 뒤에 접미사 <code>f</code>를 붙임)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>bool</code></b></td>
              <td>참 또는 거짓 (<b>논리값</b>)</td>
              <td>오직 <code>true</code>(참) 또는 <code>false</code>(거짓) 두 가지 값만 가짐 (조건문 판정에 사용)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);"><code>string</code></b></td>
              <td>글자들의 나열 (<b>문자열</b>)</td>
              <td><code>"Hello"</code>, <code>"IsMoving"</code> (큰따옴표 <code>" "</code>로 감싸서 표현)</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-box warning">
          <div class="callout-title">🔍 [교안 26페이지 코드 추적 1] 대입문은 위에서 아래로 순서대로 값을 덮어쓴다!</div>
          • 복합 대입(<code>+=</code>, <code>-=</code>)이나 증감 연산자(<code>++</code>, <code>--</code>)는 <b>현재 변수에 들어 있는 값</b>을 기준으로 계산합니다.<br>
          • 반면 일반 대입 연산자(<b><code>=</code></b>)는 이전 값이 무엇이었든 상관없이 <b>이전 값을 완전히 버리고 오른쪽의 새 값으로 덮어씁니다!</b>
        </div>

        <pre class="code-block" style="margin-top: 10px;">// [교안 26페이지 원본 코드 한 줄씩 완벽 추적]
int number = 3;   // [1단계] number 변수를 선언하고 초기값 3을 저장함         (현재 number = 3)
number += 4;      // [2단계] 기존 값(3)에 4를 더해서 다시 저장함 (3 + 4 = 7)    (현재 number = 7)
number = 2;       // [3단계] ★ 함정 주의: 더하는 게 아니라 2를 새로 대입(덮어쓰기)! (현재 number = 2)
number++;         // [4단계] 현재 값(2)을 1 증가시킴 (2 + 1 = 3)               (최종 number = 3)</pre>
      </div>

      <!-- 6-2. 비교 연산자와 논리 연산자 (Page 27~28) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">6-2. 비교 연산자와 논리 연산자 (Page 27~28)</h4>
        <table class="concept-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th style="width: 22%;">분류 / 기호</th>
              <th style="width: 38%;">연산자 의미와 동작</th>
              <th>교안 코드 예시 및 결과 (<code>bool</code>)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>대입 (<code>=</code>)</b></td>
              <td>오른쪽 값을 왼쪽 변수에 <b>저장(할당)</b>함</td>
              <td><code>value = 3;</code> (변수 <code>value</code>의 값을 <code>3</code>으로 바꿈)</td>
            </tr>
            <tr>
              <td><b>비교 (<code>==</code>, <code>!=</code>)</b></td>
              <td>두 값이 <b>같은지(<code>==</code>)</b>, <b>다른지(<code>!=</code>)</b> 비교하여 <code>bool</code> 반환</td>
              <td><code>3 == 3</code> → <b><code>true</code></b> / <code>3 != 3</code> → <b><code>false</code></b></td>
            </tr>
            <tr>
              <td><b>대소 비교<br>(<code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>)</b></td>
              <td>크기를 비교하여 <code>true</code> 또는 <code>false</code>를 반환함</td>
              <td><code>3 &gt; 5</code> → <b><code>false</code></b> / <code>3 &lt;= 3</code> → <b><code>true</code></b> (같아도 포함!)</td>
            </tr>
            <tr>
              <td><b style="color: var(--accent);">AND (<code>&amp;&amp;</code>)</b></td>
              <td>양쪽 조건이 <b>모두 <code>true</code>일 때만 <code>true</code></b><br>(하나라도 <code>false</code>이면 <code>false</code>)</td>
              <td><code>true &amp;&amp; false</code> → <b><code>false</code></b><br><code>true &amp;&amp; true</code> → <b><code>true</code></b></td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-green-ink);">OR (<code>||</code>)</b></td>
              <td>양쪽 조건 중 <b>하나라도 <code>true</code>이면 <code>true</code></b><br>(둘 다 <code>false</code>일 때만 <code>false</code>)</td>
              <td><code>true || false</code> → <b><code>true</code></b><br><code>false || false</code> → <b><code>false</code></b></td>
            </tr>
            <tr>
              <td><b style="color: var(--tag-danger-ink);">NOT (<code>!</code>)</b></td>
              <td><code>bool</code> 값을 <b>반대로 뒤집음</b> (참 ↔ 거짓)</td>
              <td><code>!true</code> → <b><code>false</code></b> / <code>!false</code> → <b><code>true</code></b></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 6-3. 조건문 if와 반복문 for 추적 (Page 29~30) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">6-3. 조건문(<code>if</code>)과 반복문(<code>for</code>) 실행 흐름 추적 (Page 29~30)</h4>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          📌 [교안 29페이지 코드 추적 2] <code>if</code> 조건문: 변수 값이 바뀐 뒤 다시 비교할 때
        </div>
        <pre class="code-block">// [교안 29페이지 원본 코드] 같은 조건식이라도 실행 시점의 변수 값에 따라 결과가 달라진다!
int value = 9;
int highest = 12;

// [첫 번째 비교 시점] 현재 value(9) &gt; highest(12) 인가? --&gt; 9 &gt; 12 는 false(거짓)!
if (value &gt; highest)
{
    highest = value; // 조건이 false이므로 이 줄은 건너뜀! (highest는 여전히 12 유지)
}

// [변수 값 변경] value에 15를 새로 대입함
value = 15;

// [두 번째 비교 시점] 현재 value(15) &gt; highest(12) 인가? --&gt; 15 &gt; 12 는 true(참)!
if (value &gt; highest)
{
    highest = value; // 조건이 true이므로 실행됨! highest에 15가 대입됨!
}
// ★ 최종 결과: value = 15, highest = 15</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          📌 [교안 30페이지 코드 추적 3] <code>for</code> 반복문: 초기값 · 조건식 · 증감식 단계별 표 추적
        </div>
        <pre class="code-block">// [교안 30페이지 원본 코드]
int total = 0;
for (int i = 0; i &lt; 4; i++)
{
    total += 2;
}
// ★ 최종 결과: 반복 횟수 = 총 4회 (i = 0, 1, 2, 3), 최종 total = 8</pre>

        <table class="concept-table" style="margin-top: 10px;">
          <thead>
            <tr>
              <th>반복 회차</th>
              <th>변수 <code>i</code>의 값</th>
              <th>조건 검사 (<code>i &lt; 4</code>)</th>
              <th>본문 실행 (<code>total += 2</code>) 후 <code>total</code> 값</th>
              <th>증감식 (<code>i++</code>) 실행 후 <code>i</code></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1회차</b></td>
              <td><code>i = 0</code> (초기값)</td>
              <td><code>0 &lt; 4</code> → <b><code>true</code></b></td>
              <td><code>0 + 2 =</code> <b><code>2</code></b></td>
              <td><code>i = 1</code></td>
            </tr>
            <tr>
              <td><b>2회차</b></td>
              <td><code>i = 1</code></td>
              <td><code>1 &lt; 4</code> → <b><code>true</code></b></td>
              <td><code>2 + 2 =</code> <b><code>4</code></b></td>
              <td><code>i = 2</code></td>
            </tr>
            <tr>
              <td><b>3회차</b></td>
              <td><code>i = 2</code></td>
              <td><code>2 &lt; 4</code> → <b><code>true</code></b></td>
              <td><code>4 + 2 =</code> <b><code>6</code></b></td>
              <td><code>i = 3</code></td>
            </tr>
            <tr>
              <td><b>4회차</b></td>
              <td><code>i = 3</code></td>
              <td><code>3 &lt; 4</code> → <b><code>true</code></b></td>
              <td><code>6 + 2 =</code> <b style="color: var(--accent);"><code>8</code> (최종값)</b></td>
              <td><code>i = 4</code></td>
            </tr>
            <tr>
              <td><b>종료 판정</b></td>
              <td><code>i = 4</code></td>
              <td><code>4 &lt; 4</code> → <b style="color: var(--tag-danger-ink);"><code>false</code> (반복 종료!)</b></td>
              <td>실행 안 됨 (최종 <code>total = 8</code> 유지)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 6-4. 함수 호출, 매개변수와 인수, 반환값, bool 가드 (Page 31~34) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">6-4. 함수 호출 · 매개변수 vs 인수 · 반환값(<code>return</code>) · <code>bool</code> 중복 방지 (Page 31~34)</h4>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin-bottom: 6px;">
          📌 [교안 31페이지 코드 추적 4] 함수 선언과 호출 시점 (함수는 부르기 전까지 실행되지 않는다!)
        </div>
        <pre class="code-block">// [교안 31페이지 원본 코드 & 핵심 함정]
int value = 1;

void SetValue()
{
    value = 3; // 주의: value += 3 이 아니라 value = 3 (단순 대입)임!
}

// 1) SetValue()를 호출하기 전: 함수는 선언만 해두면 실행되지 않으므로 value = 1
// 2) SetValue(); 를 1번 호출한 후: 함수 본문이 실행되어 value = 3
// 3) ★ 함정: SetValue(); 를 2번 연속 호출하면?
//    더하는 코드(+=)가 아니라 3을 대입(=)하는 코드이므로 몇 번을 다시 호출해도 결과는 그대로 value = 3 !</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--ink); margin: 16px 0 6px 0;">
          📌 [교안 32~33페이지] 매개변수(Parameter) vs 인수(Argument) 및 반환값(<code>return</code> vs <code>void</code>)
        </div>
        <pre class="code-block">// 1. 매개변수(Parameter)와 인수(Argument) 구분 (Page 32)
void AddScore(int number) // &lt;-- 여기서 'int number'는 전달받은 값을 담는 변수인 [매개변수 (Parameter)]
{
    score += number;
}

void Test()
{
    AddScore(3); // &lt;-- 호출할 때 실제로 넘겨주는 값 '3', '7'은 [인수 (Argument)]
    AddScore(7); //     같은 함수라도 전달한 인수(3 vs 7)에 따라 실행 결과가 달라짐!
}

// 2. 반환값이 있는 함수 vs 반환값이 없는 void 함수 (Page 33)
int Add(int a, int b)
{
    return a + b; // 계산 결과(int)를 호출한 곳으로 돌려주고 함수 종료
}
int result = Add(2, 5); // 반환된 값 7을 result 변수에 저장해 이어서 사용 가능! (result = 7)

void StopIfDead(int hp)
{
    if (hp &lt;= 0)
    {
        return; // void 함수에서의 return; 은 값을 돌려주지 않고 "함수를 그 자리에서 즉시 종료"함!
    }
    // hp가 0 이하이면 위 return; 때문에 아래 코드는 실행되지 않음!
}</pre>

        <div style="font-weight: 800; font-size: 15px; color: var(--tag-danger-ink); margin: 16px 0 6px 0;">
          🚨 [교안 34페이지 코드 추적 5 — 시험 출제 1순위] <code>bool</code> 플래그와 <code>return</code>을 이용한 중복 실행 방지
        </div>
        <pre class="code-block">// [교안 34페이지 원본 코드 완벽 해부]
bool processed = false;
int count = 4;

void Process()
{
    if (processed) return; // 이미 처리되었다면(processed == true) 아래 코드를 실행하지 않고 즉시 종료!
    count += 2;
    processed = true;      // 1회 실행 후 상태를 true로 변경 (잠금)
}

// ▶ [추적 1] Process()를 첫 번째 호출했을 때:
//   1. if (processed) 검사: 현재 processed는 false이므로 return 하지 않고 통과!
//   2. count += 2 실행: count가 4에서 6으로 바뀜 (count = 6)
//   3. processed = true 실행: 이제 processed가 true가 됨!

// ▶ [추적 2] Process()를 두 번째(또는 100번째) 다시 호출했을 때:
//   1. if (processed) 검사: 현재 processed가 true이므로 조건이 참!
//   2. 즉시 return; 실행되어 함수가 그 자리에서 끝남! 아래의 count += 2 는 절대 실행되지 않음!
//   ★ 최종 결과: Process()를 2번 이상 호출해도 최종 count = 6, processed = true 유지!</pre>
      </div>
    </section>
  `
};

// 2. 게임프로그래밍 실전 모의고사 (2회분 100점 만점 데이터베이스)
window.EXAM_DATABASE.gameprog = {
  id: "gameprog",
  title: "게임프로그래밍",
  totalQuestions: 20,
  maxScore: 100,
  exams: [
    {
      id: "gp_exam1",
      name: "제1회 게임프로그래밍 중간고사 실전 모의고사",
      tag: "객관식 5 + 단답 10 + 계산 3 + 서술 2 (총 20문항 100점)",
      desc: "강남대학교 김영호 교수 7주차 복습자료 100% 반영: Unity 기본 구성, Transform, 2D 물리·충돌, 생명주기, 입력, 애니메이션, 카메라, UI, C# 코드 실행 추적",
      questions: [
        // [객관식 5문항: 각 5점 = 25점]
        {
          id: 1, type: "choice", score: 5, origin: "Unity 기본 구성 & 컴포넌트",
          text: "Unity의 GameObject와 Component에 대한 설명 중 가장 옳지 않은 것은?",
          options: [
            "A. GameObject의 이름만으로 기능이 정해지는 것은 아니며, 부착된 컴포넌트와 코드를 보아야 한다.",
            "B. 하나의 GameObject에는 여러 개의 컴포넌트가 함께 부착되어 각자의 기능을 처리할 수 있다.",
            "C. SpriteRenderer 컴포넌트를 비활성화하여 화면에 그림이 보이지 않으면 Rigidbody2D의 물리 연산도 자동으로 영구 중지된다.",
            "D. Hierarchy 창은 씬의 오브젝트와 계층 관계를 보여주고, Inspector 창은 선택된 대상의 컴포넌트 설정을 보여준다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "컴포넌트는 각자의 역할을 독립적으로 수행합니다. SpriteRenderer가 비활성화되어 화면에 그림이 나타나지 않더라도, Rigidbody2D 및 Collider2D가 부착되어 있다면 물리 시뮬레이션과 충돌 판정은 계속 정상적으로 처리됩니다."
        },
        {
          id: 2, type: "choice", score: 5, origin: "Transform & 계층 구조",
          text: "Unity의 Transform 컴포넌트와 부모-자식 계층 관계에 대한 설명으로 올바른 것은?",
          options: [
            "A. Scale 값을 줄이면 오브젝트의 Position 값도 그에 비례하여 자동으로 줄어든다.",
            "B. 부모 오브젝트를 이동하거나 회전시키면 자식 오브젝트도 부모의 변화에 영향을 받아 함께 이동·회전한다.",
            "C. 자식 오브젝트의 스프라이트만 회전시키면 부모 오브젝트에 붙은 Collider2D 충돌 영역도 함께 회전한다.",
            "D. localPosition은 항상 월드 공간의 절대 원점 (0,0,0)을 기준으로 측정한 위치를 의미한다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "부모 Transform을 이동/회전하면 자식도 함께 영향을 받아 움직입니다. Scale은 크기 비율일 뿐 변경해도 Position이 자동 수정되지 않으며, localPosition은 부모를 기준으로 한 상대 위치입니다. 또한 자식의 그림만 회전하면 부모의 Collider는 회전하지 않습니다."
        },
        {
          id: 3, type: "choice", score: 5, origin: "생명주기 실행 함수",
          text: "MonoBehaviour의 실행 함수에 대한 설명 중 가장 적절하지 않은 것은?",
          options: [
            "A. Awake는 인스턴스 초기화 시 참조와 내부 값을 준비하기 위해 가장 먼저 호출된다.",
            "B. Start는 활성화된 스크립트에서 첫 번째 Update 실행 전에 단 1회 실행된다.",
            "C. Update는 스크립트가 활성화된 동안 매 화면 프레임마다 호출된다.",
            "D. FixedUpdate는 항상 매 화면 프레임마다 실행되므로 그래픽 FPS와 호출 횟수가 언제나 완전히 일치한다."
          ],
          answer: "D",
          answers: ["D", "d", "4"],
          explanation: "Update는 화면 프레임마다 실행되지만, FixedUpdate는 물리 엔진의 고정 시간 간격(Fixed Timestep)에 맞춰 실행되므로 화면 FPS와 FixedUpdate의 호출 횟수가 항상 같지는 않습니다."
        },
        {
          id: 4, type: "choice", score: 5, origin: "2D 물리 & 충돌 조건",
          text: "2D 충돌 및 Trigger 이벤트에 대한 설명 중 올바른 것을 고르시오.",
          options: [
            "A. Is Trigger를 켜면 물리적 반발력으로 오브젝트의 통과를 차단하는 바닥이나 벽에 사용된다.",
            "B. 오브젝트를 통과시키기 위해 Collider2D를 완전히 제거하면 진입 여부를 감지할 영역도 함께 사라진다.",
            "C. 두 오브젝트 사이에 Trigger 이벤트를 발생시키려면 양쪽 모두에 반드시 Rigidbody2D가 있어야 하며 한쪽만 있으면 작동하지 않는다.",
            "D. Trigger 영역에 최초 진입할 때 호출되는 함수는 OnCollisionEnter2D이다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "통과시키려고 Collider를 없애버리면 접촉을 감지할 영역 자체가 사라지므로 Is Trigger를 사용해야 합니다. Trigger 이벤트는 두 오브젝트 중 최소 한쪽에만 Rigidbody2D가 있으면 감지되며, 최초 진입 시 호출되는 함수는 OnTriggerEnter2D입니다."
        },
        {
          id: 5, type: "choice", score: 5, origin: "카메라 & 리팩토링",
          text: "카메라 설정 및 코드 구조에 대한 설명 중 옳지 않은 것을 고르시오.",
          options: [
            "A. Orthographic 카메라는 물체와의 거리가 달라도 항상 같은 크기로 보이게 투영한다.",
            "B. Orthographic Size를 키우면 더 넓은 영역이 화면에 들어오므로 화면 속 물체는 상대적으로 더 작게 보인다.",
            "C. 리팩토링은 외부 동작을 변경하지 않고 내부 구조를 개선하는 작업이므로, 리팩토링을 완료하면 항상 실행 속도가 빨라진다.",
            "D. 오브젝트 풀(Object Pool)은 Instantiate와 Destroy를 반복하는 대신 비활성화된 객체를 재사용하여 비용을 절감한다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "리팩토링은 코드의 가독성과 유지보수성을 위해 내부 구조를 개선하는 작업이며, 성능(실행 시간, 메모리)을 개선하는 것은 '최적화'입니다. 코드를 리팩토링했다고 해서 실행 속도가 반드시 빨라지는 것은 아닙니다."
        },

        // [단답형 10문항: 각 5점 = 50점]
        {
          id: 6, type: "short", score: 5, origin: "컴포넌트 참조 API",
          text: "동일한 GameObject에 붙어 있는 컴포넌트의 참조를 스크립트에서 가져올 때 사용하는 Unity API 제네릭 함수명은?",
          placeholder: "함수명 입력 (예: GetComponent)",
          answers: ["getcomponent", "getcomponent<t>", "getcomponent()", "getcomponent<t>()"],
          explanation: "<code>GetComponent&lt;T&gt;()</code> 함수는 같은 GameObject에 부착된 대상 컴포넌트를 가져오며, 부착되어 있지 않으면 <code>null</code>을 반환합니다."
        },
        {
          id: 7, type: "short", score: 5, origin: "프레임 독립 이동",
          text: "기기 성능이나 프레임 수(FPS)에 구애받지 않고 1초 동안 speed만큼 일정한 거리를 이동시키기 위해, 속도에 곱해주는 이전 프레임 소요 시간 프로퍼티는?",
          placeholder: "Time 프로퍼티 입력 (예: Time.deltaTime)",
          answers: ["time.deltatime", "deltatime", "타임델타타임"],
          explanation: "Time.deltaTime을 곱해주면 프레임 간격에 맞춰 이동량이 보정되어 1초당 이동 거리가 프레임률과 상관없이 일정하게 유지됩니다."
        },
        {
          id: 8, type: "short", score: 5, origin: "2D 물리 중력",
          text: "Dynamic Rigidbody2D 컴포넌트에서 오브젝트가 받는 중력의 영향도(가속도 크기)를 조절하는 속성(파라미터)의 명칭은?",
          placeholder: "속성명 입력 (예: Gravity Scale)",
          answers: ["gravity scale", "gravityscale", "그래비티스케일"],
          explanation: "Gravity Scale은 중력 가속도의 배율로, 값을 높이면 아래쪽으로 떨어지는 가속이 커집니다."
        },
        {
          id: 9, type: "short", score: 5, origin: "통과 감지 속성",
          text: "물리적인 충돌 저지(막힘) 없이 오브젝트의 통과를 허용하면서, 점수 획득이나 도착 지점 진입 여부를 감지하기 위해 Collider에서 체크하는 속성은?",
          placeholder: "속성명 입력 (예: Is Trigger)",
          answers: ["is trigger", "istrigger", "trigger", "트리거", "이즈트리거"],
          explanation: "Collider의 Is Trigger를 체크하면 물리적 충돌 반발력 없이 겹침(통과) 이벤트를 감지할 수 있습니다."
        },
        {
          id: 10, type: "short", score: 5, origin: "트리거 이벤트 함수",
          text: "Is Trigger가 활성화된 2D 영역에 다른 오브젝트가 처음 겹쳐 들어가는 순간 호출되는 MonoBehaviour 이벤트 함수명은?",
          placeholder: "함수명 입력 (예: OnTriggerEnter2D)",
          answers: ["ontriggerenter2d", "ontriggerenter2d()"],
          explanation: "Trigger 영역에 진입할 때 OnTriggerEnter2D가 호출됩니다. 물리적 충돌 시에는 OnCollisionEnter2D가 호출됩니다."
        },
        {
          id: 11, type: "short", score: 5, origin: "프리팹 인스턴스 생성",
          text: "프로젝트 에셋으로 정의된 Prefab 원본을 바탕으로 씬(Scene)에 새로운 게임오브젝트 인스턴스를 동적으로 생성할 때 사용하는 Unity 함수명은?",
          placeholder: "함수명 입력 (예: Instantiate)",
          answers: ["instantiate", "instantiate()", "인스턴시에이트"],
          explanation: "Instantiate() 함수는 Prefab 등의 원본 객체를 복제하여 새로운 인스턴스를 씬에 생성합니다."
        },
        {
          id: 12, type: "short", score: 5, origin: "객체 재사용 패턴",
          text: "Instantiate와 Destroy를 반복 호출할 때 발생하는 메모리 할당 및 가비지 컬렉션(GC) 성능 저하를 방지하기 위해, 비활성화해 둔 객체를 보관했다가 재사용하는 디자인 패턴은?",
          placeholder: "패턴 명칭 입력 (예: 오브젝트 풀링)",
          answers: ["오브젝트 풀", "오브젝트 풀링", "오브젝트풀", "오브젝트풀링", "object pool", "object pooling", "objectpool"],
          explanation: "오브젝트 풀링(Object Pooling)은 객체를 매번 파괴하고 새로 생성하는 대신, 풀에 비활성화(SetActive(false)) 상태로 보관했다가 필요 시 다시 활성화하여 사용하는 기법입니다."
        },
        {
          id: 13, type: "short", score: 5, origin: "코드 구조 개선",
          text: "프로그램의 외부 동작을 바꾸지 않으면서 코드의 내부 구조를 개선하여 가독성과 유지보수성을 높이는 작업을 일컫는 용어는?",
          placeholder: "작업 명칭 입력 (예: 리팩토링)",
          answers: ["리팩토링", "리팩터링", "refactoring"],
          explanation: "리팩토링(Refactoring)은 책임 분리와 중복 제거를 통해 코드 구조를 정리하는 작업이며, 실행 비용을 줄이는 '최적화'와 구분됩니다."
        },
        {
          id: 14, type: "short", score: 5, origin: "애니메이션 상태 머신",
          text: "애니메이션 상태(State)들과 상태 간의 전이(Transition) 흐름을 정의하는 에셋의 명칭은?",
          placeholder: "에셋 명칭 입력 (예: Animator Controller)",
          answers: ["animator controller", "animatorcontroller", "애니메이터 컨트롤러", "애니메이터컨트롤러"],
          explanation: "Animator Controller는 상태 머신을 기반으로 애니메이션의 전이 조건과 재생 흐름을 관장하는 에셋입니다."
        },
        {
          id: 15, type: "short", score: 5, origin: "함수 전달 변수",
          text: "함수 선언부에서 호출자로부터 전달받을 값을 저장하기 위해 명시하는 변수를 일컫는 용어는? (예: void Foo(int number)의 number)",
          placeholder: "용어 입력 (예: 매개변수)",
          answers: ["매개변수", "파라미터", "parameter"],
          explanation: "함수 정의 시 선언된 변수는 '매개변수(Parameter)'이며, 함수 호출 시 실제로 전달하는 구체적인 값(예: Foo(3)의 3)은 '인수(Argument)'입니다."
        },

        // [계산 및 코드 실행 추적 3문항: 각 5점 = 15점]
        {
          id: 16, type: "calc", score: 5, origin: "C# 대입 연산 순서 추적",
          text: "다음 C# 코드가 위에서부터 순서대로 실행되었을 때, 최종 변수 <code>number</code>에 저장된 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int number = 3;\nnumber += 4;\nnumber = 2;\nnumber++;</pre>",
          placeholder: "정수 숫자 입력",
          answers: ["3"],
          explanation: "1) number = 3\n2) number += 4 → 7\n3) number = 2 → 이전 값 7을 버리고 2가 대입됨\n4) number++ → 1이 증가하여 최종 값은 3이 됩니다."
        },
        {
          id: 17, type: "calc", score: 5, origin: "C# for 반복문 실행 추적",
          text: "다음 C# 반복문 코드가 실행 완료된 후 최종 <code>total</code> 변수에 저장된 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int total = 0;\nfor (int i = 0; i &lt; 4; i++)\n{\n    total += 2;\n}</pre>",
          placeholder: "정수 숫자 입력",
          answers: ["8"],
          explanation: "루프는 i = 0, 1, 2, 3으로 총 4회 실행됩니다. 매 반복마다 2씩 더해지므로 0 + 2*4 = 8이 됩니다. i가 4가 되면 조건(4 &lt; 4)이 거짓이 되어 반복이 종료됩니다."
        },
        {
          id: 18, type: "calc", score: 5, origin: "C# bool 가드와 함수 호출 추적",
          text: "다음 C# 코드에서 <code>Process()</code> 함수를 연속 2회 호출하였을 때, 최종 <code>count</code> 변수에 저장된 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>bool processed = false;\nint count = 4;\n\nvoid Process()\n{\n    if (processed) return;\n    count += 2;\n    processed = true;\n}</pre>",
          placeholder: "정수 숫자 입력",
          answers: ["6"],
          explanation: "첫 번째 호출: processed가 false이므로 if문을 지나쳐 count += 2 (4 → 6)가 실행되고 processed = true가 됩니다.\n두 번째 호출: processed가 true이므로 if (processed) return; 에 의해 즉시 함수가 종료됩니다. 따라서 count는 6을 유지합니다."
        },

        // [서술형 2문항: 각 5점 = 10점]
        {
          id: 19, type: "essay", score: 5, origin: "비활성화 방식의 영향 범위 비교",
          text: "Unity에서 gameObject.SetActive(false)를 실행했을 때와 spriteRenderer.enabled = false를 실행했을 때의 영향 범위 및 동작 차이점을 서술하시오.",
          sampleAnswer: "gameObject.SetActive(false)는 해당 게임오브젝트 전체와 그 하위의 모든 자식 오브젝트의 활성 동작을 완전히 중지시켜 그래픽, 물리, 스크립트 실행이 모두 정지됩니다. 반면 spriteRenderer.enabled = false는 스프라이트 그림 표시만 중지할 뿐이며, 동일 오브젝트에 부착된 Rigidbody2D 등의 물리 연산과 다른 스크립트 컴포넌트는 계속해서 정상 동작합니다.",
          explanation: "채점 기준: 1) SetActive(false)가 오브젝트 전체 및 자식들의 모든 활성 동작을 중지시킴을 명시 (2.5점), 2) enabled=false는 그림 표시만 끄고 물리나 타 컴포넌트는 계속 동작함을 명시 (2.5점)."
        },
        {
          id: 20, type: "essay", score: 5, origin: "Time.deltaTime의 필요성",
          text: "Update() 함수 내에서 오브젝트를 이동시킬 때 'transform.position += Vector3.right * speed;'처럼 고정 수치를 더하지 않고, 반드시 'Time.deltaTime'을 곱해주는 이유를 FPS(프레임 수) 관점에서 설명하시오.",
          sampleAnswer: "Time.deltaTime은 이전 프레임에서 현재 프레임까지 소요된 시간입니다. Update 함수는 매 프레임마다 호출되므로, Time.deltaTime 없이 고정 거리를 더하면 30fps 기기보다 120fps 기기에서 1초 동안 4배 더 많이 이동하는 문제가 발생합니다. Time.deltaTime을 곱해주면 프레임 간격에 반비례하여 이동량이 보정되므로, 어떤 성능의 기기에서든 1초 동안 speed만큼 동일한 거리를 이동하는 프레임 독립적 이동이 보장됩니다.",
          explanation: "채점 기준: 1) 고정 거리를 더하면 기기 프레임률(FPS)에 따라 1초 이동 거리가 제각각 달라짐을 설명 (2.5점), 2) Time.deltaTime을 곱함으로써 프레임률에 구애받지 않고 1초당 일정한 이동 속도를 보장함을 설명 (2.5점)."
        }
      ]
    },
    {
      id: "gp_exam2",
      name: "제2회 C# 코드 흐름 & Unity 핵심 개념 심화 모의고사",
      tag: "객관식 5 + 단답 7 + 코드분석 3 (총 15문항 100점)",
      desc: "시험 직전 핵심 점검: New Input System(Action & Binding), 직교 카메라 Size 원리, C# 비교·논리 연산자, 가드 조건, 리팩토링 vs 최적화 심화",
      questions: [
        // [객관식 5문항: 각 6점 = 30점]
        {
          id: 1, type: "choice", score: 6, origin: "Input System Action & Binding",
          text: "Unity의 New Input System에서 Action과 Binding을 분리하여 구성하는 가장 주된 이유는?",
          options: [
            "A. 하나의 게임 행동(Jump 등)에 키보드, 마우스, 게임패드 등 다양한 장치의 입력을 중복 코드 없이 연결하기 위해",
            "B. 키보드를 누르는 순간과 누르고 있는 동안의 입력을 강제로 하나로 합치기 위해",
            "C. Inspector 창에서 수치를 전혀 입력하지 못하게 막기 위해",
            "D. 버튼 클릭 시 호출할 함수 이름을 버튼 이름과 일치시키기 위해"
          ],
          answer: "A",
          answers: ["A", "a", "1"],
          explanation: "Input Action은 게임의 논리적 행동을 정의하고 Binding은 장치의 입력을 연결합니다. 하나의 Action에 여러 Binding을 연결하면 장치별로 중복된 조작 코드를 작성하지 않고 동일한 행동 함수를 호출할 수 있습니다."
        },
        {
          id: 2, type: "choice", score: 6, origin: "카메라 Orthographic Size",
          text: "2D 직교 카메라(Orthographic Camera)에 대한 설명으로 올바른 것을 고르시오.",
          options: [
            "A. 물체가 카메라에서 Z축으로 멀어질수록 화면에 더 작게 렌더링된다.",
            "B. Orthographic Size를 5에서 10으로 늘리면 화면에 보이는 오브젝트의 크기가 2배 더 커진다.",
            "C. Orthographic Size는 카메라가 보여주는 화면 세로 범위의 절반(반경)을 나타내며, Size를 키우면 물체는 화면에서 더 작게 보인다.",
            "D. Perspective 카메라의 화각은 Orthographic Size 속성으로 조절한다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "직교 카메라는 거리가 달라도 같은 크기로 보입니다. Orthographic Size는 세로 반경으로, 이 값을 키우면 더 넓은 월드 영역이 한 화면에 들어오므로 화면 상의 물체는 상대적으로 더 작게(줌아웃) 보입니다."
        },
        {
          id: 3, type: "choice", score: 6, origin: "애니메이션 시스템",
          text: "Unity 2D 애니메이션 시스템의 구성 요소에 대한 설명으로 가장 적절하지 않은 것은?",
          options: [
            "A. Animation Clip은 시간에 따른 속성 변화(스프라이트 교체 등)를 기록한 에셋이다.",
            "B. Animator Controller는 상태(State)와 상태 간의 전환(Transition) 흐름을 정의한다.",
            "C. 같은 Animation Clip을 계속 반복 재생할지 여부는 Clip의 Loop Time 설정으로 정한다.",
            "D. Animator Controller의 Parameter 이름을 스크립트 코드와 다르게 적어도 유니티 엔진이 문맥을 파악해 자동으로 연결해 준다."
          ],
          answer: "D",
          answers: ["D", "d", "4"],
          explanation: "animator.SetBool(\"IsMoving\", true); 에서 \"IsMoving\"은 사용자가 직접 정의한 이름입니다. Controller에 동일한 이름의 Parameter와 전이 조건이 정의되어 있지 않으면 동작하지 않으며, 자동으로 연결되지 않습니다."
        },
        {
          id: 4, type: "choice", score: 6, origin: "C# 비교 및 논리 연산자",
          text: "다음 C# 조건식 중 평가 결과가 'true'인 것은? (단, a = true, b = false)",
          options: [
            "A. a && b",
            "B. 3 > 5",
            "C. !a",
            "D. (3 <= 3) && (a || b)"
          ],
          answer: "D",
          answers: ["D", "d", "4"],
          explanation: "A. true &amp;&amp; false → false\nB. 3 &gt; 5 → false\nC. !true → false\nD. 3 &lt;= 3은 true이고, a || b (true || false)는 true이므로 true &amp;&amp; true → true가 됩니다."
        },
        {
          id: 5, type: "choice", score: 6, origin: "UI 이벤트 연결",
          text: "Unity UI 버튼(Button)과 On Click 이벤트에 대한 설명으로 올바른 것은?",
          options: [
            "A. UI 버튼의 이름과 스크립트 함수 이름을 같게 설정하면 On Click 이벤트가 자동으로 바인딩된다.",
            "B. UI 요소는 일반 Transform 대신 Canvas 아래에서 RectTransform 컴포넌트로 위치와 크기가 관리된다.",
            "C. UI 화면을 끄면 씬에 부착된 모든 스크립트의 실행이 즉시 취소된다.",
            "D. TextMeshPro는 픽셀이 깨지는 비트맵 글자만을 지원하는 컴포넌트이다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "UI 요소는 Canvas 아래에서 RectTransform으로 위치와 앵커가 관리됩니다. 버튼 이름과 함수 이름이 같아도 자동으로 연결되지 않으며 On Click 이벤트에 직접 대상을 등록해야 합니다."
        },

        // [단답형 7문항: 각 6점 = 42점]
        {
          id: 6, type: "short", score: 6, origin: "Transform 축 방향",
          text: "Unity 기본 월드 좌표계에서 좌우를 나타내는 축과 위아래를 나타내는 축은 각각 무엇인가? (예: X축, Y축)",
          placeholder: "축 입력 (예: X, Y)",
          answers: ["x, y", "x축, y축", "x축 y축", "x,y"],
          explanation: "기본 2D/3D 월드 좌표계에서 X축은 좌우(오른쪽 양수), Y축은 위아래(위쪽 양수), Z축은 앞뒤를 나타냅니다."
        },
        {
          id: 7, type: "short", score: 6, origin: "거리 계산",
          text: "동일한 X축 상에서 위치 1과 위치 5 사이의 '거리(Distance)' 값은 얼마인가?",
          placeholder: "숫자만 입력",
          answers: ["4"],
          explanation: "위치의 차이는 5-1=4, 1-5=-4지만, 두 위치 사이의 '거리(Distance)'는 절댓값이므로 항상 양수 4입니다."
        },
        {
          id: 8, type: "short", score: 6, origin: "null 컴포넌트",
          text: "<code>GetComponent&lt;T&gt;()</code>를 호출했을 때 해당 GameObject에 찾으려는 컴포넌트가 붙어 있지 않으면 반환되는 키워드는?",
          placeholder: "키워드 입력",
          answers: ["null", "널"],
          explanation: "컴포넌트를 찾지 못하면 참조가 없음을 나타내는 null을 반환합니다."
        },
        {
          id: 9, type: "short", score: 6, origin: "반환값 없는 함수",
          text: "C#에서 결과 값을 호출한 쪽에 돌려주지 않는 함수를 선언할 때 사용하는 반환 타입 키워드는?",
          placeholder: "키워드 입력 (예: void)",
          answers: ["void", "보이드"],
          explanation: "반환값이 없는 함수는 void 키워드로 선언합니다. 값을 반환할 때는 int, float, bool 등을 명시하고 return 키워드를 사용합니다."
        },
        {
          id: 10, type: "short", score: 6, origin: "애니메이션 반복 재생",
          text: "동일한 Animation Clip을 무한 반복해서 연속 재생하도록 설정할 때 체크하는 Clip 에셋의 속성 명칭은?",
          placeholder: "속성 명칭 입력 (예: Loop Time)",
          answers: ["loop time", "looptime", "루프타임"],
          explanation: "Animation Clip의 Loop Time을 체크하면 클립이 끝났을 때 처음부터 다시 반복 재생됩니다."
        },
        {
          id: 11, type: "short", score: 6, origin: "리팩토링 2대 기법",
          text: "리팩토링에서 서로 다른 역할의 코드를 구분해 수정 범위를 줄이는 기법을 '책임 분리'라고 합니다. 같은 처리나 규칙을 여러 곳에서 따로 수정하지 않도록 한곳으로 모으는 기법은?",
          placeholder: "기법 명칭 입력 (예: 중복 제거)",
          answers: ["중복 제거", "중복제거", "코드 중복 제거"],
          explanation: "리팩토링의 핵심 기법은 책임 분리와 중복 제거입니다."
        },
        {
          id: 12, type: "short", score: 6, origin: "비활성화 상태의 유지",
          text: "GameObject를 gameObject.SetActive(false)로 비활성화했다가 나중에 SetActive(true)로 다시 켤 때, 이전에 변수에 저장되어 있던 필드 값은 초기화되는가, 그대로 남아있는가?",
          placeholder: "답변 입력 (예: 그대로 남아있음 / 초기화됨)",
          answers: ["그대로 남아있음", "남아있음", "그대로유지", "유지됨", "그대로 남아있다"],
          explanation: "비활성화는 객체 파괴나 필드 초기화가 아니므로 재활성화 시에도 이전 필드 변수 값이 그대로 유지됩니다."
        },

        // [코드 분석 및 서술 3문항: 각 9~10점 = 28점]
        {
          id: 13, type: "calc", score: 9, origin: "C# 조건문 분기 추적",
          text: "다음 C# 코드가 실행된 후 최종 <code>highest</code> 변수에 저장된 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int value = 9;\nint highest = 12;\nif (value &gt; highest)\n    highest = value;\nvalue = 15;\nif (value &gt; highest)\n    highest = value;</pre>",
          placeholder: "정수 숫자 입력",
          answers: ["15"],
          explanation: "첫 번째 if문에서는 9 &gt; 12가 false이므로 highest는 12를 유지합니다. 이후 value가 15로 바뀌고 두 번째 if문에서는 15 &gt; 12가 true이므로 highest = 15가 대입되어 최종 값은 15가 됩니다."
        },
        {
          id: 14, type: "calc", score: 9, origin: "C# 함수 호출과 값 대입",
          text: "다음 C# 코드에서 <code>SetValue()</code> 함수를 호출하기 '전'의 <code>value</code> 값과, <code>SetValue()</code>를 호출한 '후'의 <code>value</code> 값을 쉼표로 구분하여 작성하시오. (예: 1, 3)<br><pre class='code-block' style='margin-top:8px;'>int value = 1;\nvoid SetValue()\n{\n    value = 3;\n}</pre>",
          placeholder: "값 입력 (예: 1, 3)",
          answers: ["1, 3", "1,3", "1 / 3"],
          explanation: "함수는 선언만으로는 실행되지 않으므로 호출 전에는 초기값 1입니다. SetValue()를 호출하면 value = 3 대입문이 실행되어 호출 후에는 3이 됩니다."
        },
        {
          id: 15, type: "essay", score: 10, origin: "입력 감지 타이밍 비교 (Down vs Pressed)",
          text: "키보드 스페이스바를 누를 때 '누른 순간(Down)'을 감지하는 방식과 '누르고 있는 동안(Pressed)'을 매 프레임 감지하는 방식의 동작 차이점을, 점프(Jump) 동작과 연속 이동 동작에 비유하여 서술하시오.",
          sampleAnswer: "누른 순간을 감지하는 방식은 키를 누르기 시작했을 때 단 1회만 입력을 감지하므로, 스페이스바를 계속 누르고 있어도 손을 뗐다가 다시 누르기 전까지는 중복 실행되지 않아 단발성 점프 동작에 적합합니다. 반면 누르고 있는 동안을 감지하는 방식은 매 프레임마다 키가 눌려 있는 상태를 지속적으로 확인하므로, 키를 누르고 있는 동안 연속적으로 이동하거나 가속하는 동작에 적합합니다.",
          explanation: "채점 기준: 1) 누른 순간은 1회만 감지되어 손을 뗐다 누르기 전까지 중복 실행되지 않음을 설명 (5점), 2) 누르고 있는 동안은 매 프레임 연속 감지되어 누르는 동안 지속 실행됨을 설명 (5점)."
        }
      ]
    },

    // [회차 3] Unity 2D 물리 엔진 & 충돌 매트릭스 심화 모의고사 (15문항)
    {
      id: "gp_exam3",
      name: "제3회 Unity 2D 물리 엔진 & 충돌 매트릭스 심화 모의고사",
      tag: "객관식 5 + 단답 7 + 코드계산 3 (총 15문항 100점)",
      desc: "2D Rigidbody BodyType(Dynamic/Kinematic/Static), Collider2D IsTrigger, OnCollision2D vs OnTrigger2D, FixedUpdate 물리 주기, Raycast 바닥 감지, ForceMode2D, Freeze Rotation",
      questions: [
        // [객관식 5문항: 각 6점 = 30점]
        {
          id: 1, type: "choice", score: 6, origin: "Rigidbody2D Body Type",
          text: "Rigidbody2D 컴포넌트의 3가지 Body Type(Dynamic, Kinematic, Static) 중, 중력이나 다른 물리적 힘(Force)에는 일체 영향을 받지 않고 오직 스크립트 코드의 속도(velocity)나 위치 변경에 의해서만 움직이는 타입은?",
          options: [
            "A. Dynamic",
            "B. Kinematic",
            "C. Static",
            "D. Sleep"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "Kinematic 바디는 중력과 외부 물리 충돌력에 영향을 받지 않고 오직 스크립트의 코드 이동으로만 제어되는 물리 타입으로, 움직이는 발판이나 엘리베이터에 주로 사용됩니다."
        },
        {
          id: 2, type: "choice", score: 6, origin: "물리 충돌(Collision) 필수 조건",
          text: "두 개의 2D 게임 오브젝트가 서로 물리적으로 부딪혀 튕겨 나가는 실제 반발 충돌(Collision)을 발생시키기 위한 조건으로 가장 올바른 것은?",
          options: [
            "A. 양쪽 오브젝트 모두 Collider2D가 부착되어 있어야 하며, 최소 한쪽에는 Rigidbody2D가 있어야 하고 양쪽 모두 Is Trigger가 꺼져(체크 해제) 있어야 한다.",
            "B. 양쪽 모두 Is Trigger가 반드시 켜져 있어야 물리 반발력이 발생한다.",
            "C. Rigidbody2D만 있으면 Collider2D가 전혀 없어도 물리 충돌이 감지된다.",
            "D. 충돌하는 양쪽 오브젝트 모두 반드시 Rigidbody2D의 Body Type이 Static이어야 한다."
          ],
          answer: "A",
          answers: ["A", "a", "1"],
          explanation: "물리적 반발 충돌을 일으키려면 양쪽 모두 Collider2D가 있어야 하고, Is Trigger가 해제되어 있어야 하며, 최소 한쪽 오브젝트는 물리 시뮬레이션을 수행하는 Rigidbody2D를 가지고 있어야 합니다."
        },
        {
          id: 3, type: "choice", score: 6, origin: "충돌 이벤트 함수 매개변수",
          text: "물리 충돌 이벤트인 OnCollisionEnter2D와 트리거 진입 이벤트인 OnTriggerEnter2D의 매개변수 타입으로 올바르게 짝지어진 것은?",
          options: [
            "A. OnCollisionEnter2D(Collider2D), OnTriggerEnter2D(Collision2D)",
            "B. OnCollisionEnter2D(Collision2D), OnTriggerEnter2D(Collider2D)",
            "C. OnCollisionEnter2D(GameObject), OnTriggerEnter2D(Transform)",
            "D. OnCollisionEnter2D(Rigidbody2D), OnTriggerEnter2D(Rigidbody2D)"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "OnCollisionEnter2D는 접촉 지점과 상대 속도 등 물리 충돌 정보를 담은 Collision2D 매개변수를 받고, OnTriggerEnter2D는 접촉한 상대방 충돌체 영역 자체인 Collider2D 매개변수를 받습니다."
        },
        {
          id: 4, type: "choice", score: 6, origin: "물리 연산 주기 (FixedUpdate)",
          text: "Rigidbody2D에 AddForce를 가하거나 물리 이동을 제어할 때 Update() 대신 FixedUpdate()에서 수행해야 하는 주된 이유는?",
          options: [
            "A. FixedUpdate()는 모니터 주사율과 그래픽 카드 성능에 따라 실행 주기가 가변적이기 때문에",
            "B. 물리 엔진은 화면 프레임과 독립된 고정 시간 간격(Fixed Timestep)으로 연산되므로, 불규칙한 프레임에 의한 물리 연산 왜곡을 방지하기 위해",
            "C. Update()에서는 Rigidbody2D 컴포넌트의 멤버 변수에 접근할 수 없기 때문에",
            "D. FixedUpdate()가 실행 속도가 Update()보다 항상 10배 이상 빠르기 때문에"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "물리 시뮬레이션은 고정된 시간 간격(Fixed Timestep, 기본 0.02초)으로 동작하므로, 프레임률 변동에 영향받지 않는 FixedUpdate()에서 물리 연산을 수행해야 안정적인 물리 시뮬레이션이 보장됩니다."
        },
        {
          id: 5, type: "choice", score: 6, origin: "2D 회전 고정 (Freeze Rotation)",
          text: "2D 플랫폼 게임에서 캐릭터가 지면이나 모서리와 부딪혔을 때 원치 않게 Z축으로 회전하여 팽이처럼 넘어지는 현상을 막기 위해 Rigidbody2D의 Constraints 옵션에서 설정해야 하는 것은?",
          options: [
            "A. Freeze Position X",
            "B. Freeze Position Y",
            "C. Freeze Rotation Z",
            "D. Gravity Scale 0"
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "2D 물리 평면에서 회전축은 화면을 뚫고 나오는 Z축입니다. Constraints의 Freeze Rotation Z를 체크하면 캐릭터가 충돌 시 넘어지지 않고 꼿꼿이 서 있게 유지됩니다."
        },

        // [단답형 7문항: 각 6점 = 42점]
        {
          id: 6, type: "short", score: 6, origin: "AddForce 충격 모드",
          text: "Rigidbody2D.AddForce() 메서드를 호출할 때 폭발이나 점프처럼 '질량에 기반하여 순간적인 단발성 충격량(Impulse)'을 즉시 가하고자 할 때 두 번째 인자로 전달하는 ForceMode2D의 열거형 값은?",
          placeholder: "열거형 값 입력 (예: ForceMode2D.Impulse 또는 Impulse)",
          answers: ["Impulse", "ForceMode2D.Impulse", "impulse"],
          explanation: "AddForce(force, ForceMode2D.Impulse)는 시간에 걸쳐 서서히 밀어내는 연속적 Force와 달리 순간적인 강한 힘(충격량)을 가할 때 사용됩니다."
        },
        {
          id: 7, type: "short", score: 6, origin: "카메라 추적 실행 함수",
          text: "씬에 배치된 메인 카메라가 플레이어를 부드럽게 추적할 때, Update()에서 처리된 플레이어의 이동과 애니메이션 연산이 모두 완전히 종료된 직후에 카메라 위치를 갱신하기 위해 주로 사용하는 MonoBehaviour 생명주기 함수는?",
          placeholder: "함수명 입력 (예: LateUpdate)",
          answers: ["LateUpdate", "LateUpdate()", "lateupdate"],
          explanation: "LateUpdate()는 한 프레임의 모든 Update() 실행이 완료된 후 호출되므로, 이동 오브젝트를 따라다니는 카메라 추적 로직에 최적입니다."
        },
        {
          id: 8, type: "short", score: 6, origin: "2D 레이캐스트 (Raycast)",
          text: "플레이어의 발밑에서 아래 방향으로 가상의 광선을 쏘아 지면(Ground)과의 접촉 여부를 검사하여 점프 가능 여부를 판단할 때 사용하는 Physics2D 클래스의 핵심 정적 메서드는?",
          placeholder: "메서드명 입력 (예: Physics2D.Raycast)",
          answers: ["Physics2D.Raycast", "Raycast", "Physics2D.Raycast()", "raycast"],
          explanation: "Physics2D.Raycast(시작위치, 방향, 거리, 레이어마스크)는 직선 광선을 투사하여 충돌한 콜라이더 정보를 RaycastHit2D로 반환합니다."
        },
        {
          id: 9, type: "short", score: 6, origin: "선택적 레이어 마스크",
          text: "Physics2D.Raycast 또는 충돌 판정 시 특정 레이어(예: 지면 레이어)에 속한 오브젝트들만 선택적으로 필터링하여 감지하기 위해 사용하는 Unity 내장 구조체/타입의 명칭은?",
          placeholder: "타입 명칭 입력 (예: LayerMask)",
          answers: ["LayerMask", "layermask", "레이어마스크"],
          explanation: "LayerMask는 32비트 정수 비트마스크로 특정 레이어들의 조합을 정의하여 Raycast나 물리 쿼리의 감지 대상을 필터링합니다."
        },
        {
          id: 10, type: "short", score: 6, origin: "오브젝트 파괴 API",
          text: "C# 스크립트 실행 도중 수명이 다한 총알이나 사망한 적 캐릭터 GameObject를 씬과 메모리에서 안전하게 파괴(제거)할 때 호출하는 Unity 내장 정적 함수는?",
          placeholder: "함수명 입력 (예: Destroy)",
          answers: ["Destroy", "Destroy()", "destroy"],
          explanation: "Destroy(gameObject) 또는 일정 시간 지연 후 파괴하는 Destroy(gameObject, delay) 함수를 사용하여 객체를 정리합니다."
        },
        {
          id: 11, type: "short", score: 6, origin: "Inspector 변수 노출 애트리뷰트",
          text: "객체지향 캡슐화 원칙에 따라 private으로 선언된 변수를 외부 다른 스크립트에는 감추면서도, Unity 에디터의 Inspector 창에서는 값을 직접 확인하고 편집할 수 있도록 변수 위에 붙이는 C# 애트리뷰트는?",
          placeholder: "애트리뷰트 입력 (예: [SerializeField])",
          answers: ["[SerializeField]", "SerializeField", "[serializefield]"],
          explanation: "[SerializeField] 애트리뷰트를 붙이면 private 접근 제한자를 유지하면서도 유니티 직렬화 시스템을 통해 인스펙터에 노출됩니다."
        },
        {
          id: 12, type: "short", score: 6, origin: "벡터 간 직선 거리 계산",
          text: "2차원 평면에서 플레이어 위치와 몬스터 위치 사이의 직선 거리(유클리드 거리)를 스칼라(float) 값으로 계산해주는 Vector2 클래스의 정적 메서드는?",
          placeholder: "메서드명 입력 (예: Vector2.Distance)",
          answers: ["Vector2.Distance", "Vector2.Distance()", "Distance", "distance"],
          explanation: "Vector2.Distance(posA, posB)는 두 벡터의 차의 크기(magnitude)를 계산하여 직선 거리를 반환합니다."
        },

        // [코드 계산 및 서술 3문항: 총 28점]
        {
          id: 13, type: "calc", score: 9, origin: "C# 반복문과 조건문 continue",
          text: "다음 C# 코드가 실행된 후 최종 <code>sum</code> 변수에 저장되는 정수 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int sum = 0;\nfor (int i = 1; i &lt;= 5; i++)\n{\n    if (i % 2 == 0) continue;\n    sum += i;\n}</pre>",
          placeholder: "정수 숫자 입력",
          answers: ["9"],
          explanation: "i가 짝수(2, 4)일 때는 continue로 인해 sum에 더해지지 않습니다. 따라서 홀수인 1, 3, 5만 더해지므로 1 + 3 + 5 = 9입니다."
        },
        {
          id: 14, type: "calc", score: 9, origin: "2D 벡터 덧셈 및 이동 계산",
          text: "어떤 오브젝트의 현재 위치가 pos = (2, 5)이고, 이동 방향 벡터가 dir = (1, 0), 이동 속도가 speed = 4f일 때, 2초가 지난 후의 위치 finalPos = pos + dir * speed * 2f 의 최종 X 좌표값은 얼마인가?",
          placeholder: "숫자만 입력",
          answers: ["10", "10.0"],
          explanation: "X 좌표 = 2 + (1 * 4 * 2) = 2 + 8 = 10입니다. (Y 좌표는 5 그대로 유지)"
        },
        {
          id: 15, type: "essay", score: 10, origin: "Collider2D Is Trigger의 원리와 활용",
          text: "Collider2D 컴포넌트의 <b>'Is Trigger' 속성을 체크(활성화)했을 때 나타나는 물리적 거동의 변화</b>를 설명하고, 게임 내에서 이를 활용하는 <b>대표적인 실전 사례 2가지</b>를 서술하시오.",
          sampleAnswer: "Is Trigger를 활성화하면 물리 엔진의 고체 반발력(충돌 저항)이 사라져 다른 오브젝트가 물리적 방해 없이 자유롭게 통과할 수 있게 되며, 통과하는 순간 OnTriggerEnter2D 등의 트리거 이벤트 함수만 실행됩니다.\n활용 사례로는 1) 플레이어가 접촉했을 때 습득하고 사라지는 코인/포션 등 아이템 습득 영역, 2) 다음 맵으로 이동하거나 세이브포인트를 활성화하는 포탈/체크포인트 진입 감지 영역이 있습니다.",
          explanation: "채점 기준: 1) 물리 반발력 없이 통과하며 충돌 이벤트(OnTriggerEnter2D)만 발생시킴을 설명 (5점), 2) 아이템 습득, 포탈, 위험 지대 등 실전 사례 2가지 제시 (5점)."
        }
      ]
    },

    // [회차 4] 게임프로그래밍 중간고사 전범위 파이널 실전 모의고사 (20문항)
    {
      id: "gp_exam4",
      name: "제4회 게임프로그래밍 중간고사 전범위 파이널 실전 모의고사",
      tag: "전범위 20문항 (객관식 5 + 단답 10 + 계산 3 + 서술 2 / 100점)",
      desc: "Unity 생명주기 전수, Prefab과 동적 인스턴스화(Instantiate), New Input System, UI Canvas, Animator 파라미터, C# 클래스·상속, 싱글톤 패턴, 프레임 독립성 종합",
      questions: [
        // [객관식 5문항: 각 5점 = 25점]
        {
          id: 1, type: "choice", score: 5, origin: "Unity 생명주기 실행 순서",
          text: "씬이 시작되어 게임 오브젝트가 활성화되고 매 프레임 업데이트될 때, Unity MonoBehaviour 이벤트 함수들의 실행 순서로 올바른 것은?",
          options: [
            "A. Awake → Start → OnEnable → Update → FixedUpdate",
            "B. Awake → OnEnable → Start → FixedUpdate → Update → LateUpdate",
            "C. Start → Awake → OnEnable → LateUpdate → Update",
            "D. OnEnable → Awake → Start → Update → FixedUpdate"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "가장 먼저 Awake()가 호출되고, 오브젝트가 활성화될 때 OnEnable(), 첫 프레임 시작 전 Start(), 물리 연산 주기마다 FixedUpdate(), 매 화면 프레임 Update(), 모든 Update 종료 후 LateUpdate() 순으로 실행됩니다."
        },
        {
          id: 2, type: "choice", score: 5, origin: "UI Canvas Render Mode",
          text: "Unity UI Canvas의 3가지 Render Mode 중, 씬에 있는 카메라의 위치나 회전과 무관하게 항상 플레이어 모니터 화면 최상단 2D 평면에 고정되어 체력바, 스코어보드 등 일반적인 HUD에 가장 널리 쓰이는 모드는?",
          options: [
            "A. Screen Space - Overlay",
            "B. Screen Space - Camera",
            "C. World Space",
            "D. Perspective Space"
          ],
          answer: "A",
          answers: ["A", "a", "1"],
          explanation: "Screen Space - Overlay 모드는 카메라 없이도 화면의 최상단 레이어에 UI를 고정 렌더링하므로 해상도에 맞춰 항상 일정하게 HUD를 표시할 수 있습니다."
        },
        {
          id: 3, type: "choice", score: 5, origin: "Animator 전이(Transition) 속성",
          text: "Animator Controller의 Transition 설정에서 현재 재생 중인 애니메이션 클립이 끝까지 다 끝날 때까지 기다리지 않고, 조건(Condition)이 참이 되는 즉시 다음 애니메이션으로 즉각 전이되도록 하려면 해제(체크 해제)해야 하는 옵션은?",
          options: [
            "A. Fixed Duration",
            "B. Has Exit Time",
            "C. Transition Duration",
            "D. Can Transition To Self"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "Has Exit Time이 켜져 있으면 애니메이션의 특정 재생 비율이 끝날 때까지 전이가 지연됩니다. 피격이나 점프처럼 즉각 반응해야 하는 전이에서는 Has Exit Time을 체크 해제해야 합니다."
        },
        {
          id: 4, type: "choice", score: 5, origin: "객체지향 핵심 개념: 상속",
          text: "C#에서 MonoBehaviour와 같은 기본 클래스의 모든 멤버 변수와 메서드를 물려받아 새로운 자식 컴포넌트 클래스를 정의하고 기능을 확장하는 객체지향 프로그래밍 핵심 개념은?",
          options: [
            "A. 캡슐화 (Encapsulation)",
            "B. 상속 (Inheritance)",
            "C. 추상화 (Abstraction)",
            "D. 직렬화 (Serialization)"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "기존 클래스의 필드와 메서드를 물려받아 코드를 재사용하고 기능을 확장하는 객체지향의 원리는 '상속(Inheritance)'입니다."
        },
        {
          id: 5, type: "choice", score: 5, origin: "프리팹(Prefab) 개념",
          text: "Unity에서 미리 설정된 GameObject와 부착된 모든 컴포넌트, 속성 값을 에셋 파일(.prefab) 형태로 저장하여 씬에 언제든지 동일한 구조로 복제 생성할 수 있도록 만든 템플릿 에셋을 무엇이라 하는가?",
          options: [
            "A. Package",
            "B. Prefab",
            "C. Material",
            "D. Mesh"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "프리팹(Prefab)은 재사용 가능한 게임 오브젝트 템플릿으로, 씬에 동적으로 인스턴스를 생성하거나 원본 속성을 일괄 수정할 때 필수적으로 사용됩니다."
        },

        // [단답형 10문항: 각 5점 = 50점]
        {
          id: 6, type: "short", score: 5, origin: "동적 오브젝트 생성 함수",
          text: "총알 발사나 몬스터 스폰 시 미리 만들어둔 프리팹 에셋을 런타임에 복제하여 씬에 동적으로 생성할 때 사용하는 Unity의 내장 정적 함수는?",
          placeholder: "함수명 입력 (예: Instantiate)",
          answers: ["Instantiate", "Instantiate()", "instantiate"],
          explanation: "Instantiate(prefab, position, rotation) 함수를 사용하여 프리팹 에셋을 실시간으로 씬에 인스턴스화합니다."
        },
        {
          id: 7, type: "short", score: 5, origin: "싱글톤 디자인 패턴",
          text: "게임 전체에서 오직 단 하나의 인스턴스만 존재하도록 보장하고, 어디서나 GameManager.Instance 형태로 전역 접근을 가능하게 만드는 대표적인 소프트웨어 디자인 패턴의 명칭은?",
          placeholder: "패턴 명칭 입력 (예: 싱글톤 또는 Singleton)",
          answers: ["싱글톤", "singleton", "싱글톤 패턴", "Singleton pattern"],
          explanation: "싱글톤(Singleton) 패턴은 게임 매니저, 오디오 매니저처럼 유일해야 하는 관리자 객체를 구현할 때 가장 널리 사용됩니다."
        },
        {
          id: 8, type: "short", score: 5, origin: "씬 전환 시 오브젝트 유지",
          text: "SceneManager.LoadScene()으로 새로운 씬을 로드할 때 이전 씬의 오브젝트들이 파괴되는 것을 방지하고 다음 씬에서도 파괴되지 않고 유지되도록 등록하는 Unity 함수는?",
          placeholder: "함수명 입력 (예: DontDestroyOnLoad)",
          answers: ["DontDestroyOnLoad", "DontDestroyOnLoad()", "dontdestroyonload"],
          explanation: "DontDestroyOnLoad(gameObject)를 호출하면 해당 오브젝트는 씬이 전환되어도 언로드되지 않고 전역 유지됩니다."
        },
        {
          id: 9, type: "short", score: 5, origin: "게임 일시정지 프로퍼티",
          text: "게임을 일시정지(Pause)시키거나 슬로우 모션 연출을 주기 위해 인게임 시간의 흐름 배율을 조절하는 Unity의 정적 프로퍼티는? (일시정지 시 0으로 설정)",
          placeholder: "프로퍼티 입력 (예: Time.timeScale)",
          answers: ["Time.timeScale", "timeScale", "timescale"],
          explanation: "Time.timeScale을 0으로 설정하면 시간이 멈추며 Update의 Time.deltaTime이 0이 되고 FixedUpdate가 호출되지 않습니다."
        },
        {
          id: 10, type: "short", score: 5, origin: "New Input System 액션 콜백 단계",
          text: "Unity의 New Input System에서 플레이어의 버튼 입력이 완전히 성립(실행)되었을 때 호출되는 콜백 단계의 영문 명칭은? (Started, ?, Canceled)",
          placeholder: "콜백 단계 명칭 (예: performed)",
          answers: ["performed", "Performed"],
          explanation: "Input Action의 생명주기는 Started(입력 감지 시작) → Performed(조건 달성/실행) → Canceled(입력 중단/손 뗌)로 구성됩니다."
        },
        {
          id: 11, type: "short", score: 5, origin: "Animator 트리거 파라미터",
          text: "Animator Controller의 4대 파라미터(Float, Int, Bool, ?) 중 공격이나 점프처럼 한 번 활성화되면 전이가 일어난 후 자동으로 false로 꺼지는 단발성 파라미터 타입은?",
          placeholder: "타입 명칭 입력 (예: Trigger)",
          answers: ["Trigger", "trigger", "트리거"],
          explanation: "Trigger 파라미터는 단발성 이벤트 전이를 위한 불리언 플래그로 전이가 소비되면 자동으로 리셋됩니다."
        },
        {
          id: 12, type: "short", score: 5, origin: "가드 조건(Guard Clauses)",
          text: "함수의 시작 부분에서 특정 조건이 충족되지 않으면 즉시 return하여 중첩된 복잡한 if-else 들여쓰기를 제거하고 가독성을 높이는 코딩 리팩토링 기법을 무엇이라 부르는가?",
          placeholder: "기법 명칭 (예: 가드 조건 또는 Guard Clauses)",
          answers: ["가드 조건", "guard clause", "가드 절", "보호 구문", "guard clauses"],
          explanation: "가드 절(Guard Clause)은 예외적인 상황이나 미충족 조건을 함수 초반에 걸러내어 조기 반환(early return)하는 리팩토링 기법입니다."
        },
        {
          id: 13, type: "short", score: 5, origin: "2D 스프라이트 렌더 순서",
          text: "SpriteRenderer 컴포넌트에서 같은 Z축 위치에 겹쳐 있는 2D 스프라이트들 간에 어떤 그림을 더 앞쪽에 그릴지 렌더링 우선순위를 지정하는 정수 속성의 이름은?",
          placeholder: "속성명 입력 (예: Order in Layer)",
          answers: ["Order in Layer", "order in layer", "orderinlayer", "OrderInLayer"],
          explanation: "Order in Layer 수치가 클수록 화면의 더 앞쪽에 렌더링됩니다."
        },
        {
          id: 14, type: "short", score: 5, origin: "메서드 재정의 키워드",
          text: "부모 클래스에서 virtual로 선언된 가상 메서드를 자식 클래스에서 재정의하여 커스텀 동작을 구현할 때 메서드 선언부에 지정하는 C# 키워드는?",
          placeholder: "키워드 입력 (예: override)",
          answers: ["override", "오버라이드"],
          explanation: "부모의 가상 메서드를 자식이 재정의할 때는 override 키워드를 명시합니다."
        },
        {
          id: 15, type: "short", score: 5, origin: "UI 버튼 클릭 이벤트",
          text: "Unity UI Button 컴포넌트에서 사용자가 버튼을 클릭했을 때 호출할 스크립트 함수를 등록하는 UnityEvent 프로퍼티의 이름은?",
          placeholder: "프로퍼티 이름 (예: onClick)",
          answers: ["onClick", "onclick", "OnClick"],
          explanation: "Button 컴포넌트의 onClick 이벤트 목록에 게임 오브젝트와 메서드를 연결하여 클릭 시 실행을 트리거합니다."
        },

        // [계산 3문항: 각 5점 = 15점]
        {
          id: 16, type: "calc", score: 5, origin: "초당 프레임 수와 Update 호출 횟수",
          text: "어떤 모바일 기기에서 게임이 60 FPS(초당 60프레임)로 안정적으로 구동되고 있을 때, 활성화된 스크립트의 Update() 함수가 1초 동안 실행되는 총 횟수는 몇 회인가?",
          placeholder: "숫자만 입력",
          answers: ["60", "60회"],
          explanation: "Update() 함수는 화면 프레임마다 1회씩 호출되므로 60 FPS에서는 1초에 정확히 60회 실행됩니다."
        },
        {
          id: 17, type: "calc", score: 5, origin: "C# 삼항 조건 연산자",
          text: "다음 C# 코드 실행 후 <code>result</code> 문자열에 저장되는 최종 값은 무엇인가?<br><pre class='code-block' style='margin-top:8px;'>int hp = 0;\nstring result = (hp &gt; 0) ? \"ALIVE\" : \"GAME OVER\";</pre>",
          placeholder: "출력 문자열 입력 (예: GAME OVER)",
          answers: ["GAME OVER", "game over", "\"GAME OVER\""],
          explanation: "hp가 0이므로 조건식 (hp &gt; 0)은 false가 됩니다. 따라서 삼항 연산자의 콜론(:) 뒤에 있는 \"GAME OVER\"가 대입됩니다."
        },
        {
          id: 18, type: "calc", score: 5, origin: "C# List 원소 개수 추적",
          text: "다음 C# 코드 실행 후 <code>scores</code> 리스트의 최종 요소 개수(<code>Count</code>)는 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>List&lt;int&gt; scores = new List&lt;int&gt;() { 10, 20, 30 };\nscores.Add(40);\nscores.Remove(20);</pre>",
          placeholder: "숫자만 입력",
          answers: ["3"],
          explanation: "초기 요소 3개(10, 20, 30)에서 Add(40)으로 4개가 되었다가 Remove(20)으로 1개가 제거되므로 최종 개수는 3개입니다."
        },

        // [서술형 2문항: 각 5점 = 10점]
        {
          id: 19, type: "essay", score: 5, origin: "Transform 이동 vs Rigidbody 물리 이동 차이",
          text: "Unity에서 게임 오브젝트를 이동시킬 때 'transform.position'을 직접 변경하는 방식과 'Rigidbody2D.velocity' 또는 'AddForce'를 사용하는 물리 기반 방식의 차이점을, <b>벽 뚫림(터널링) 및 물리 충돌 판정 관점</b>에서 서술하시오.",
          sampleAnswer: "transform.position을 직접 수정하는 방식은 오브젝트를 목표 좌표로 순간 이동(텔레포트)시키는 방식이므로, 빠른 속도로 이동할 때 Collider가 부착된 벽이나 바닥을 그대로 뚫고 지나가는 터널링 현상이 발생할 수 있습니다.\n반면 Rigidbody2D.velocity나 AddForce를 사용하는 방식은 물리 엔진의 시뮬레이션 파이프라인 안에서 충돌 감지(연속 충돌 검사 등)와 질량, 마찰력을 종합 계산하며 이동하므로 벽에 부딪혔을 때 정상적으로 멈추거나 튕겨 나가는 정확한 물리 상호작용이 보장됩니다.",
          explanation: "채점 기준: 1) Transform 직접 변경 시 물리 연산을 건너뛰어 벽을 뚫는 터널링 발생 가능성 서술 (2.5점), 2) Rigidbody 이동 시 물리 엔진 파이프라인을 거쳐 정확한 충돌 감지와 반발력이 계산됨을 서술 (2.5점)."
        },
        {
          id: 20, type: "essay", score: 5, origin: "Time.timeScale과 unscaledDeltaTime",
          text: "게임을 일시정지하기 위해 'Time.timeScale = 0f;'를 실행했을 때, Update()와 FixedUpdate() 함수의 실행 여부 차이를 설명하고, 일시정지 상태에서도 정지 화면의 UI 애니메이션이나 일시정지 메뉴 타이머를 정상 작동시키기 위해 사용해야 하는 시간 변수(Time 프로퍼티)의 명칭을 쓰시오.",
          sampleAnswer: "Time.timeScale = 0이 되면 물리 연산 주기가 정지하므로 FixedUpdate()는 전혀 호출되지 않지만, 화면 렌더링 프레임은 계속 돌아가므로 Update() 함수는 계속 호출됩니다. 단, Update 내에서 Time.deltaTime은 0이 됩니다.\n따라서 일시정지 중에도 UI 애니메이션이나 메뉴 타이머를 정상 동작시키려면 timeScale의 배율 영향을 받지 않는 'Time.unscaledDeltaTime'(또는 Time.unscaledTime)을 사용해야 합니다.",
          explanation: "채점 기준: 1) FixedUpdate는 정지되지만 Update는 계속 호출된다는 점 및 Time.deltaTime=0이 됨을 설명 (2.5점), 2) timeScale의 영향을 받지 않는 변수인 Time.unscaledDeltaTime을 명시 (2.5점)."
        }
      ]
    }
  ]
};

