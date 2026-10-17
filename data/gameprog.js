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
          <span>1. Unity 기본 구성 & Transform 계층 구조 (1~6페이지)</span>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">Unity 4대 기본 구성요소 & 에디터 인터페이스</h4>
        <p style="font-size: 14px; color: var(--ink-secondary); margin-bottom: 12px;">
          씬에 오브젝트를 배치하고 컴포넌트로 기능을 부착합니다. <b>오브젝트의 이름만으로 기능이 결정되지 않으며</b>, 부착된 컴포넌트와 스크립트 코드의 동작을 보아야 합니다.
        </p>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 25%;">구성 요소</th><th style="width: 45%;">정의 및 역할</th><th>핵심 확인 사항</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">Scene (씬)</td>
              <td>오브젝트를 배치하고 구성해 둔 가상 3D/2D 작업 공간</td>
              <td>게임의 레벨, 메뉴 화면, 전투 필드 등</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">GameObject (게임오브젝트)</td>
              <td>씬에 존재하는 모든 개별 객체의 기본 단위 (껍데기 컨테이너)</td>
              <td>컴포넌트가 붙어야 실제 기능(위치, 그래픽, 물리 등)을 수행</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Component (컴포넌트)</td>
              <td>오브젝트의 위치, 그래픽 표시, 물리 연산 등 구체적 기능을 담당</td>
              <td>하나의 GameObject에 여러 개의 컴포넌트를 동시에 부착 가능</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Script (스크립트)</td>
              <td>직접 작성한 사용자 정의 동작과 게임 규칙을 C# 코드로 표현</td>
              <td>MonoBehaviour를 상속받아 컴포넌트 형태로 부착</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Hierarchy (하이에라키)</td>
              <td>현재 씬에 존재하는 모든 GameObject와 <b>부모-자식 계층 관계</b>를 트리로 표시</td>
              <td>드래그 앤 드롭으로 부모-자식 종속 설정</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Inspector (인스펙터)</td>
              <td>Hierarchy에서 선택한 GameObject의 <b>모든 컴포넌트 및 세부 프로퍼티 설정</b>을 표시</td>
              <td>수치 조절, 리소스 연결, 활성화 체크박스 제공</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">Transform 컴포넌트 & 좌표계 (Page 4~6)</h4>
        <div style="font-size: 14px; line-height: 1.7; color: var(--ink-secondary); margin-bottom: 12px;">
          모든 GameObject는 반드시 하나의 <b>Transform 컴포넌트</b>를 기본으로 가집니다. 위치, 회전, 크기를 개별 조절합니다.
        </div>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 22%;">속성</th><th style="width: 28%;">역할</th><th>수정 시 변화 & 시험 필수 함정</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">Position (위치)</td>
              <td>오브젝트의 3차원 공간 내 위치</td>
              <td>오브젝트의 배치가 이동함. X=좌우, Y=위아래, Z=앞뒤 축</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Rotation (회전)</td>
              <td>오브젝트의 각 축별 회전각</td>
              <td>오브젝트의 바라보는 방향이 회전됨</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Scale (크기)</td>
              <td>각 축의 <b>크기 비율</b> (배율)</td>
              <td><b>실제 절대 길이가 아닌 크기 비율</b>입니다. Scale을 줄여도 Position 값이 자동으로 바뀌지는 않습니다. 최종 크기는 원본 크기와 부모 Transform의 영향을 함께 받습니다.</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 14px; padding: 14px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
          <div style="font-weight: 700; color: var(--tag-gold-ink); margin-bottom: 6px;">[핵심 비교] 월드 좌표(position) vs 로컬 좌표(localPosition) & 계층 상호작용</div>
          <ul style="font-size: 14px; color: var(--ink-secondary); padding-left: 20px; line-height: 1.8;">
            <li><b>Vector2 vs Vector3:</b> Vector2는 (x, y) 2개 값, Vector3는 (x, y, z) 3개 값 표현. 위치뿐 아니라 방향이나 크기 표현에도 사용됨.</li>
            <li><b>월드 좌표 (position):</b> 월드 원점 (0, 0, 0)을 절대적 기준으로 측정한 위치.</li>
            <li><b>로컬 좌표 (localPosition):</b> <b>부모 Transform</b>을 원점으로 삼아 측정한 상대적 위치. (부모가 없으면 월드 좌표와 동일)</li>
            <li><b>부모를 이동·회전시키면:</b> 부모의 Transform이 바뀌며, <b>자식 오브젝트도 부모의 변화에 따라 함께 이동·회전</b>합니다.</li>
            <li><b>자식만 이동·회전시키면:</b> 부모는 아무런 영향 없이 그대로 유지되고, 자식의 로컬 Transform만 변경됩니다.</li>
            <li><b>거리(Distance)의 불변성:</b> 같은 축에서 1과 5의 차이는 4, 5-1=4, 1-5=-4지만 두 위치 사이의 <b>거리</b>는 항상 4로 동일합니다.</li>
            <li><b>자식 스프라이트 회전 주의:</b> 자식 오브젝트의 Sprite(그림)만 회전시키면 부모에 붙어 있는 Collider2D(충돌 영역)는 함께 회전하지 않습니다! 어떤 Transform을 수정하는지에 따라 영향 범위가 완전히 다릅니다.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 2: 컴포넌트 시스템 & Prefab 인스턴스 -->
    <section id="gp-ch2" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>2. 컴포넌트 시스템 & 참조, 비활성화, Prefab 인스턴스 (7~11페이지)</span>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">컴포넌트의 독립성 & 역할 분담 (Page 7)</h4>
        <div style="font-size: 14px; color: var(--ink-secondary); margin-bottom: 12px;">
          하나의 GameObject에는 여러 컴포넌트가 함께 부착되어 각자의 기능을 독립적으로 처리합니다.
        </div>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 25%;">컴포넌트 명칭</th><th style="width: 35%;">전담 역할</th><th>설정 변경 시 영향</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">SpriteRenderer</td>
              <td>2D 스프라이트(이미지)를 화면에 렌더링</td>
              <td>그림의 표시 여부, 색상 틴트, 뒤집기(Flip) 등이 달라짐</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Rigidbody2D</td>
              <td>2D 물리 시뮬레이션 (질량, 중력, 속도, 힘)</td>
              <td>중력 가속, 충돌 반발, 마찰력 등 물리 동작이 달라짐</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Collider2D</td>
              <td>충돌 또는 겹침(통과)을 감지할 기하학적 영역 정의</td>
              <td>접촉 감지 영역 및 충돌 판정 형태가 달라짐</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Transform</td>
              <td>공간 상의 위치, 회전, 크기 비율 관리</td>
              <td>배치 위치와 겉보기 크기가 달라짐</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size: 14px; color: var(--tag-danger-ink); margin-top: 10px; font-weight: 600;">
          * 시험 핵심 포인트: SpriteRenderer를 꺼서 그림이 보이지 않아도, Rigidbody2D와 Collider2D가 살아 있다면 물리 동작과 충돌 연산은 정상적으로 계속 수행됩니다!
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">컴포넌트 참조 (GetComponent) & null 처리 (Page 8~9)</h4>
        <div style="padding: 10px; background: var(--bg-input); border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 14px; margin-bottom: 12px;">
          Rigidbody2D body = GetComponent&lt;Rigidbody2D&gt;();<br>
          if (body == null) return;
        </div>
        <ul style="font-size: 14px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px;">
          <li><b>GetComponent의 역할:</b> 스크립트가 부착된 <b>'같은 GameObject'에 부착된 대상 컴포넌트의 참조를 가져옵니다.</b></li>
          <li><b>새 컴포넌트 추가(Add)와의 차이:</b> AddComponent는 새 컴포넌트를 부착하는 것이고, GetComponent는 이미 붙어 있는 컴포넌트의 주소(참조)를 가져오는 것입니다.</li>
          <li><b>null 반환:</b> 해당 컴포넌트가 붙어 있지 않으면 <code>null</code>을 반환합니다.</li>
          <li><b>검색 범위:</b> 기본 <code>GetComponent&lt;T&gt;()</code>는 <b>자식 오브젝트나 다른 외부 오브젝트까지 자동으로 검색하지 않습니다.</b></li>
          <li><b>참조(Reference)의 의미:</b> 변수 body는 이미 메모리에 존재하는 컴포넌트 객체를 '가리키는 주소 변수'일 뿐입니다. <b>참조를 가져온다고 컴포넌트가 복제(복사)되는 것이 아닙니다!</b></li>
          <li><b>NullReference 방어:</b> 컴포넌트를 찾지 못해 null인 상태에서 멤버(속성/함수)에 접근하면 런타임 오류가 발생하므로, <code>if (body == null) return;</code>과 같이 방어 코드를 작성합니다.</li>
        </ul>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">재사용 상태 vs 비활성화 vs 초기화 (Page 10)</h4>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 32%;">코드 / 작업</th><th style="width: 38%;">영향 범위</th><th>특징 및 주의사항</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;"><code>gameObject.SetActive(false)</code></td>
              <td>오브젝트 전체와 그 하위 <b>모든 자식 오브젝트의 활성 동작을 완전히 중지</b></td>
              <td>렌더링, 물리, Update 등 스크립트 실행이 모두 일시 정지됨</td>
            </tr>
            <tr>
              <td style="font-weight: 700;"><code>spriteRenderer.enabled = false</code></td>
              <td>해당 컴포넌트(스프라이트 그림 표시)만 중지</td>
              <td><b>다른 컴포넌트(물리, 스크립트 등)는 정상 동작 유지!</b></td>
            </tr>
            <tr>
              <td style="font-weight: 700;">필드 초기화 (변수 대입)</td>
              <td>변수에 시작 기본값을 직접 대입</td>
              <td>상태를 처음으로 되돌리기 위해 수동 작성 필요</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 10px; font-size: 14px; color: var(--ink-secondary); line-height: 1.6;">
          <b>* 중요 개념:</b> 비활성화(SetActive(false) 또는 enabled=false)는 <b>객체를 삭제(Destroy)하거나 필드 변수 값을 초기화하는 작업이 아닙니다!</b> 다시 활성화(SetActive(true))할 때도 이전에 변경되었던 필드 값(HP, 스코어 등)이 그대로 남아 있습니다.
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">Prefab(프리팹)과 씬 인스턴스 (Page 11)</h4>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 260px; padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
            <div style="font-weight: 700; color: var(--accent); margin-bottom: 6px;">Prefab 에셋 (설계도 원본)</div>
            <p style="font-size: 14px; color: var(--ink-secondary); line-height: 1.6;">
              반복 사용할 GameObject의 구성(부착된 컴포넌트들과 초기 속성 설정값)을 프로젝트 폴더에 에셋 파일 형태로 묶어 보관해 둔 원본 템플릿입니다.
            </p>
          </div>
          <div style="flex: 1; min-width: 260px; padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
            <div style="font-weight: 700; color: var(--tag-green-ink); margin-bottom: 6px;">씬의 인스턴스 (실체화된 객체)</div>
            <p style="font-size: 14px; color: var(--ink-secondary); line-height: 1.6;">
              Prefab 원본을 바탕으로 씬(Scene)에 실제 배치되거나 동적으로 생성된 객체입니다. 인스턴스마다 서로 다른 위치, 회전, 개별 상태값을 독립적으로 가집니다.
            </p>
          </div>
        </div>
        <div style="font-size: 14px; color: var(--ink-secondary); margin-top: 10px;">
          * <code>Instantiate()</code> 함수는 원본 Prefab을 복제하여 씬에 <b>새로운 인스턴스를 생성</b>하는 함수입니다. 기존 객체를 검색하는 기능이 아닙니다.
        </div>
      </div>
    </section>

    <!-- SECTION 3: 생명주기·시간 이동·2D 물리 & 충돌 -->
    <section id="gp-ch3" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>3. 생명주기 실행 함수·시간 이동·2D 물리 & 충돌 (12~16페이지)</span>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">MonoBehaviour 핵심 생명주기 실행 함수 (Page 12)</h4>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 20%;">함수명</th><th style="width: 40%;">호출 시점</th><th>주요 용도 및 특징</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">Awake()</td>
              <td>인스턴스 생성/초기화 시 <b>가장 먼저 1회 호출</b></td>
              <td>스크립트 활성화 여부와 무관하게 호출됨. 타 컴포넌트 참조 연결 및 내부 상태 준비</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Start()</td>
              <td>스크립트가 활성화된 후 <b>첫 번째 Update 직전 1회 호출</b></td>
              <td>초기화 데이터 세팅, 타 객체와 상호작용 준비</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Update()</td>
              <td>스크립트가 활성화된 동안 <b>매 화면 프레임(Frame)마다 호출</b></td>
              <td>키보드/마우스 입력 감지, 일반 타이머, 게임 로직 처리 (가변 프레임률)</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">FixedUpdate()</td>
              <td><b>물리 업데이트의 일정한 고정 시간 간격</b>마다 호출</td>
              <td>Rigidbody2D 물리 연산(힘 가하기, 속도 변경 등). 화면 주사율과 무관하게 일정 간격 실행</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size: 14px; color: var(--tag-danger-ink); margin-top: 10px; font-weight: 600;">
          * Update는 그래픽 렌더링 프레임마다 실행되고, FixedUpdate는 고정 물리 시간 간격으로 실행되므로 FixedUpdate의 실행 횟수와 화면 FPS가 항상 같지는 않습니다!
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">시간에 맞춘 이동과 Time.deltaTime (Page 13)</h4>
        <div style="padding: 10px; background: var(--bg-input); border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 14px; margin-bottom: 10px;">
          transform.position += Vector3.right * speed * Time.deltaTime;
        </div>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 25%;">비교 구분</th><th style="width: 38%;">매 프레임 고정 거리(1)씩 더할 때</th><th>Time.deltaTime을 곱해줄 때 (권장)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">낮은 프레임 (30 FPS)</td>
              <td>1초에 Update가 30회 실행 → 총 30만큼 이동</td>
              <td>프레임 간격(dt)이 큼 (약 0.033초) → <b>1초 동안 speed만큼 동일 이동</b></td>
            </tr>
            <tr>
              <td style="font-weight: 700;">높은 프레임 (120 FPS)</td>
              <td>1초에 Update가 120회 실행 → 총 120만큼 이동 (4배 빠름!)</td>
              <td>프레임 간격(dt)이 작음 (약 0.008초) → <b>1초 동안 speed만큼 동일 이동</b></td>
            </tr>
            <tr>
              <td style="font-weight: 700;">결과 결론</td>
              <td><b>기기 성능/프레임에 따라 속도가 제각각 달라지는 심각한 버그 발생</b></td>
              <td><b>모든 기기에서 1초당 이동 거리가 항상 일정(speed)하게 보장됨</b></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">2D 물리: Dynamic Rigidbody2D & Gravity Scale (Page 14)</h4>
        <ul style="font-size: 14px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px;">
          <li><b>Dynamic Rigidbody2D:</b> 중력, 힘, 토크, 충돌 반발력 등 물리 법칙의 영향을 받는 실제 움직이는 오브젝트에 사용합니다.</li>
          <li><b>Gravity Scale:</b> Rigidbody2D에 적용되는 중력 가속도의 배율입니다. 기본값은 1입니다.</li>
          <li><b>Gravity Scale 증가 시:</b> 중력이 아래로 작용할 때 아래쪽 낙하 가속도가 더 커집니다. (0이면 무중력 상태처럼 동작)</li>
          <li><b>시험 빈출 함정:</b> Gravity Scale은 <b>시작 위치나 애니메이션 재생 속도를 조절하는 설정이 절대 아닙니다!</b></li>
        </ul>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">접촉과 통과: Collider vs Trigger (Page 15~16)</h4>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 25%;">구분</th><th style="width: 35%;">물리적 Collider (Is Trigger 해제)</th><th>통과 감지 Trigger (Is Trigger 체크)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">사용 목적</td>
              <td>오브젝트의 관통을 물리적으로 막는 바닥, 벽, 장애물</td>
              <td>통과를 허용하면서 진입 여부만 감지 (점수 코인, 포탈, 체크포인트)</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">물리적 반응</td>
              <td>튕겨 나가거나 밀리는 물리 반발력 발생</td>
              <td>물리적인 저항/반발력 없음 (자유롭게 통과)</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">호출 이벤트 함수</td>
              <td><code>OnCollisionEnter2D</code>, Stay2D, Exit2D</td>
              <td><code>OnTriggerEnter2D</code>, Stay2D, Exit2D</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 12px; padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
          <div style="font-weight: 700; color: var(--tag-danger-ink); margin-bottom: 4px;">[중간고사 100% 출제 조건] Trigger 이벤트 발생 필수 조건</div>
          <p style="font-size: 14px; color: var(--ink-secondary); line-height: 1.6;">
            1. 두 오브젝트 모두 <b>Collider2D</b>를 가지고 있어야 함 (통과시키겠다고 Collider를 없애면 감지 영역도 사라짐!)<br>
            2. 최소 둘 중 하나는 <b>Is Trigger가 체크</b>되어 있어야 함.<br>
            3. <b>충돌하는 두 오브젝트 중 최소 한쪽에는 반드시 Rigidbody2D 컴포넌트가 부착되어 있어야 합니다!</b> (둘 다 Collider만 있으면 물리 이벤트 미발생)
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 4: 입력 시스템 & 애니메이션 & 카메라 -->
    <section id="gp-ch4" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>4. 입력 시스템 & 애니메이션 & 카메라 프로젝션 (17~21페이지)</span>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">Input Action & Binding (New Input System) (Page 17~18)</h4>
        <ul style="font-size: 14px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px;">
          <li><b>Input Action:</b> 게임에서 플레이어가 행할 논리적 행동이나 값 (예: "Jump", "Fire", "Move").</li>
          <li><b>Binding:</b> 그 행동에 연결할 실제 하드웨어 입력 장치의 키/버튼 (예: 스페이스바 키, 게임패드 A 버튼).</li>
          <li><b>분리의 장점:</b> <b>하나의 Action에 여러 Binding을 연결</b>할 수 있으므로, 키보드든 게임패드든 동일한 실행 함수에 매핑되어 장치별 게임 조작 코드를 중복 작성하지 않아도 됩니다.</li>
          <li><b>누른 순간 vs 누르고 있는 동안:</b>
            <ul style="padding-left: 18px; margin-top: 4px;">
              <li><b>누른 순간 (Down):</b> 키를 누르기 시작했을 때 단 1회만 감지 (예: 단발 점프). 키를 계속 누르고 있어도 손을 뗐다 누르기 전까지 반복 실행하지 않음.</li>
              <li><b>누르고 있는 동안 (Pressed):</b> 키가 눌려 있는 상태를 매 프레임 계속 확인 (예: 달리기, 방향 이동). 누르는 동안 계속 실행됨.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">애니메이션 시스템 3요소 & 상태 머신 (Page 19~20)</h4>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 25%;">구성 요소</th><th style="width: 35%;">정의 및 역할</th><th>핵심 속성 및 동작</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">Animation Clip</td>
              <td>시간에 따른 오브젝트 속성(스프라이트 교체, 위치 등)의 변화를 기록한 에셋</td>
              <td>걷기, 대기, 점프 동작 에셋. <b>Loop Time</b> 설정으로 반복 재생 여부 결정</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Animator Controller</td>
              <td>애니메이션 상태(State)들과 상태 간의 전환(Transition) 흐름을 정의한 상태 머신 에셋</td>
              <td>재생 흐름을 관장. <b>Parameter</b> 조건을 검사하여 상태 전이 수행</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Animator 컴포넌트</td>
              <td>Controller의 현재 상태에 지정된 Clip을 실제 오브젝트에서 재생하는 컴포넌트</td>
              <td>GameObject에 부착되어 실제 그래픽 변경을 적용</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 12px; font-size: 14px; color: var(--ink-secondary); line-height: 1.6;">
          <b>* Parameter와 상태 전환:</b> 스크립트에서 <code>animator.SetBool("IsMoving", true);</code>로 값을 변경하면, Controller는 지정된 조건(Condition: IsMoving == true)을 확인하고 조건을 모두 충족하면 Idle State에서 Move State로 전이(Transition)합니다.
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">카메라 투영 방식 (Projection) & 직교 사이즈 (Page 21)</h4>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 25%;">투영 모드</th><th style="width: 40%;">특징</th><th>사용처 및 설정</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">Perspective (원근 투영)</td>
              <td>같은 크기의 물체도 카메라에서 멀리 있으면 작게 보임 (3D 원근감)</td>
              <td>3D 게임에 주로 사용. 시야각은 Field of View (FOV)로 조절</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">Orthographic (직교 투영)</td>
              <td>같은 물체는 거리가 달라도 <b>항상 동일한 크기</b>로 보임 (원근감 없음)</td>
              <td>2D 게임에 주로 사용. 시야 범위는 <b>Orthographic Size</b>로 조절</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 10px; padding: 10px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); font-size: 14px; color: var(--tag-gold-ink);">
          <b>* Orthographic Size의 의미와 시험 함정:</b> Orthographic Size는 직교 카메라가 비추는 <b>화면 세로 범위의 절반(반경)</b>입니다. 같은 화면 비율에서 Size를 키우면 더 넓은 월드 영역이 한 화면에 잡히므로, 화면 속 물체는 상대적으로 <b>더 작게 보입니다 (줌아웃 효과)!</b>
        </div>
      </div>
    </section>

    <!-- SECTION 5: UI 이벤트 & 코드 구조 (리팩토링·풀링) -->
    <section id="gp-ch5" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>5. UI 이벤트 & 코드 구조 (리팩토링·오브젝트 풀) (22~24페이지)</span>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">UI 시스템 구성 & 버튼 On Click 이벤트 (Page 22)</h4>
        <ul style="font-size: 14px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px;">
          <li><b>Canvas:</b> 모든 UI 요소들이 배치되고 렌더링되는 기준 도화지 역할을 하는 필수 컴포넌트.</li>
          <li><b>RectTransform:</b> 일반 Transform 대신 UI 요소의 2D 위치, 크기, 앵커(Anchor), 피벗(Pivot)을 관리하는 전용 컴포넌트.</li>
          <li><b>Image / TextMeshPro:</b> UI 이미지 및 고해상도 글자를 화면에 표시.</li>
          <li><b>Button On Click:</b> 사용자의 클릭을 받는 UI 컴포넌트로, On Click 이벤트 목록에 등록된 대상 객체의 함수를 호출합니다.</li>
          <li><b>주의:</b> 버튼 이름과 함수 이름이 같다고 자동으로 연결되지 않으며, 인스펙터나 코드를 통해 명시적으로 함수를 이벤트에 등록해야 합니다.</li>
        </ul>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">리팩토링 vs 최적화 목적 구분 (Page 23)</h4>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 25%;">개념</th><th style="width: 45%;">정의 및 주요 목적</th><th>대표적 활동</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700; color: var(--accent);">리팩토링 (Refactoring)</td>
              <td><b>외부 동작을 유지하면서</b> 코드의 내부 구조를 개선하여 가독성과 유지보수성을 높이는 작업</td>
              <td><b>책임 분리</b> (역할별 분리), <b>중복 제거</b> (공통 로직 모듈화)</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: var(--tag-green-ink);">최적화 (Optimization)</td>
              <td>프로그램의 <b>실행 시간, CPU 연산량, 메모리 사용량 등의 비용</b>을 줄이는 작업</td>
              <td>알고리즘 개선, 메모리 캐싱, 가비지 컬렉션 부담 완화</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size: 14px; color: var(--tag-danger-ink); margin-top: 10px; font-weight: 600;">
          * 시험 핵심: 코드를 읽기 쉽게 정리(리팩토링)했다고 해서 실행 속도(성능)까지 반드시 빨라지는 것은 아닙니다. 성능이 개선되었는지는 프로파일러 측정을 통해서만 검증할 수 있습니다.
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">오브젝트 풀링 (Object Pooling) 패턴 (Page 24)</h4>
        <p style="font-size: 14px; color: var(--ink-secondary); margin-bottom: 10px;">
          총알, 몬스터, 파티클 등 빈번하게 등장하는 객체를 매번 <code>Instantiate</code>로 생성하고 <code>Destroy</code>로 삭제하면 심각한 메모리 할당 및 가비지 컬렉터(GC) 렉이 발생합니다.
        </p>
        <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
          <ul style="font-size: 14px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px;">
            <li><b>Instantiate:</b> 새 인스턴스를 힙 메모리에 할당하여 생성 (비용 큼)</li>
            <li><b>Destroy:</b> 객체를 파괴하고 가비지 컬렉터(GC)의 수거 대상이 됨 (비용 큼)</li>
            <li><b>오브젝트 풀:</b> 인스턴스를 미리 만들어 보관해 둔 뒤, 필요할 때 활성화(<code>SetActive(true)</code>)하여 쓰고, 사용이 끝나면 파괴하지 않고 비활성화(<code>SetActive(false)</code>)하여 풀에 반환합니다.</li>
            <li><b>핵심 가치:</b> 생성과 삭제를 반복하는 대신 <b>같은 객체를 반복 재사용</b>하여 프레임 드랍을 원천 방지함.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 6: C# 기초 문법 & 코드 흐름 추적 -->
    <section id="gp-ch6" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>6. C# 기초 문법 & 코드 실행 흐름 추적 (25~34페이지)</span>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">기본 자료형과 대입문 순서 추적 (Page 25~26)</h4>
        <div style="font-size: 14px; color: var(--ink-secondary); margin-bottom: 10px;">
          기본 타입: <code>int</code> (정수 3), <code>float</code> (실수 0.5f), <code>bool</code> (참/거짓 true/false), <code>string</code> (문자열 "Hello")
        </div>
        <div style="padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); margin-bottom: 12px;">
          <div style="font-weight: 700; color: var(--tag-gold-ink); margin-bottom: 6px;">[코드 추적 1] 대입 연산 순서 (Page 26)</div>
          <pre style="font-family: var(--font-mono); font-size: 14px; color: var(--ink); line-height: 1.6;">
int number = 3;  // 1. 초기값 3
number += 4;     // 2. 4를 더해 7이 됨
number = 2;      // 3. 2를 대입! 이전 값 7을 버리고 2로 덮어씀
number++;        // 4. 1을 증가시켜 최종 값은 3이 됨</pre>
          <div style="font-size: 14px; color: var(--ink-secondary); margin-top: 6px;">
            * 핵심: 대입(=)은 이전 값에 덧붙이는 것이 아니라 완전히 새로운 값으로 대체하는 것입니다.
          </div>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">비교 연산자 & 논리 연산자 (Page 27~28)</h4>
        <table class="custom-table">
          <thead>
            <tr><th style="width: 25%;">연산자</th><th style="width: 35%;">의미</th><th>예시 및 평가 결과 (bool)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">= vs ==</td>
              <td>= 는 대입 연산자 / == 는 동등 비교 연산자</td>
              <td><code>value = 3;</code> (값 변경) vs <code>3 == 3</code> (결과: true)</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">&gt;, &lt;, &gt;=, &lt;=</td>
              <td>크다, 작다, 크거나 같다, 작거나 같다</td>
              <td><code>3 &gt; 5</code> (결과: false), <code>3 &lt;= 3</code> (결과: true)</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">&amp;&amp; (AND)</td>
              <td>두 조건이 <b>모두 참</b>일 때만 참</td>
              <td><code>true &amp;&amp; false</code> → false (앞이 false면 뒤 평가 생략)</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">|| (OR)</td>
              <td>하나 이상의 조건이 참이면 참</td>
              <td><code>true || false</code> → true (앞이 true면 뒤 평가 생략)</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">! (NOT)</td>
              <td>참과 거짓을 반대로 뒤집음</td>
              <td><code>!true</code> → false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">조건문 & 반복문 실행 추적 (Page 29~30)</h4>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 280px; padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
            <div style="font-weight: 700; color: var(--accent); margin-bottom: 6px;">[코드 추적 2] if 조건문 (Page 29)</div>
            <pre style="font-family: var(--font-mono); font-size: 14px; color: var(--ink); line-height: 1.5;">
int value = 9;
int highest = 12;
if (value > highest) highest = value;
// 9 > 12는 거짓이므로 highest는 12 유지

value = 15;
if (value > highest) highest = value;
// 15 > 12는 참이므로 highest에 15 대입!
// 최종 highest = 15</pre>
          </div>
          <div style="flex: 1; min-width: 280px; padding: 12px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm);">
            <div style="font-weight: 700; color: var(--tag-green-ink); margin-bottom: 6px;">[코드 추적 3] for 반복문 (Page 30)</div>
            <pre style="font-family: var(--font-mono); font-size: 14px; color: var(--ink); line-height: 1.5;">
int total = 0;
for (int i = 0; i < 4; i++) {
    total += 2;
}
// i = 0: total = 2
// i = 1: total = 4
// i = 2: total = 6
// i = 3: total = 8
// i = 4가 되면 4 < 4 거짓 → 종료
// 반복 횟수 4회, 최종 total = 8</pre>
          </div>
        </div>
      </div>

      <div class="concept-card">
        <h4 style="font-weight: 700; margin-bottom: 8px; color: var(--accent);">함수 호출, 매개변수, 반환값, bool 가드 (Page 31~34)</h4>
        <ul style="font-size: 14px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px;">
          <li><b>호출 시점:</b> 함수는 선언만 해두면 실행되지 않으며, <code>SetValue();</code> 처럼 <b>직접 호출할 때 비로소 실행</b>됩니다.</li>
          <li><b>매개변수(Parameter) vs 인수(Argument):</b> <code>void Print(int number)</code>에서 <code>int number</code>는 값을 받을 자리인 <b>매개변수</b>이고, <code>Print(3);</code>에서 <code>3</code>은 실제로 전달하는 값인 <b>인수</b>입니다.</li>
          <li><b>반환값과 void:</b> <code>int Add(int a, int b) { return a + b; }</code>는 int 값을 반환하고, <code>void</code>는 반환값이 없는 함수입니다. void 함수에서 <code>return;</code>은 값 없이 함수를 조기 종료합니다.</li>
          <li><b>bool 조건과 조기 반환(early return)을 이용한 중복 방지 (Page 34):</b>
            <pre style="margin-top: 6px; padding: 8px; background: var(--bg-input); border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 14px; color: var(--ink);">
bool processed = false;
int count = 4;

void Process() {
    if (processed) return;
    count += 2;
    processed = true;
}

// 1번째 Process() 호출: processed가 false이므로 통과 → count는 6이 되고 processed = true
// 2번째 Process() 호출: processed가 true이므로 return에서 즉시 종료 → count는 그대로 6 유지!</pre>
          </li>
        </ul>
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
          explanation: "GetComponent<T>() 함수는 같은 GameObject에 부착된 대상 컴포넌트를 가져오며, 부착되어 있지 않으면 null을 반환합니다."
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
          text: "다음 C# 코드가 위에서부터 순서대로 실행되었을 때, 최종 변수 number에 저장된 값은 얼마인가?\n\nint number = 3;\nnumber += 4;\nnumber = 2;\nnumber++;",
          placeholder: "정수 숫자 입력",
          answers: ["3"],
          explanation: "1) number = 3\n2) number += 4 → 7\n3) number = 2 → 이전 값 7을 버리고 2가 대입됨\n4) number++ → 1이 증가하여 최종 값은 3이 됩니다."
        },
        {
          id: 17, type: "calc", score: 5, origin: "C# for 반복문 실행 추적",
          text: "다음 C# 반복문 코드가 실행 완료된 후 최종 total 변수에 저장된 값은 얼마인가?\n\nint total = 0;\nfor (int i = 0; i < 4; i++)\n{\n    total += 2;\n}",
          placeholder: "정수 숫자 입력",
          answers: ["8"],
          explanation: "루프는 i = 0, 1, 2, 3으로 총 4회 실행됩니다. 매 반복마다 2씩 더해지므로 0 + 2*4 = 8이 됩니다. i가 4가 되면 조건(4 < 4)이 거짓이 되어 반복이 종료됩니다."
        },
        {
          id: 18, type: "calc", score: 5, origin: "C# bool 가드와 함수 호출 추적",
          text: "다음 C# 코드에서 Process() 함수를 연속 2회 호출하였을 때, 최종 count 변수에 저장된 값은 얼마인가?\n\nbool processed = false;\nint count = 4;\n\nvoid Process()\n{\n    if (processed) return;\n    count += 2;\n    processed = true;\n}",
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
          explanation: "A. true && false → false\nB. 3 > 5 → false\nC. !true → false\nD. 3 <= 3은 true이고, a || b (true || false)는 true이므로 true && true → true가 됩니다."
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
          text: "GetComponent<T>()를 호출했을 때 해당 GameObject에 찾으려는 컴포넌트가 붙어 있지 않으면 반환되는 키워드는?",
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
          text: "다음 C# 코드가 실행된 후 최종 highest 변수에 저장된 값은 얼마인가?\n\nint value = 9;\nint highest = 12;\nif (value > highest)\n    highest = value;\nvalue = 15;\nif (value > highest)\n    highest = value;",
          placeholder: "정수 숫자 입력",
          answers: ["15"],
          explanation: "첫 번째 if문에서는 9 > 12가 false이므로 highest는 12를 유지합니다. 이후 value가 15로 바뀌고 두 번째 if문에서는 15 > 12가 true이므로 highest = 15가 대입되어 최종 값은 15가 됩니다."
        },
        {
          id: 14, type: "calc", score: 9, origin: "C# 함수 호출과 값 대입",
          text: "다음 C# 코드에서 SetValue() 함수를 호출하기 '전'의 value 값과, SetValue()를 호출한 '후'의 value 값을 쉼표로 구분하여 작성하시오. (예: 1, 3)\n\nint value = 1;\nvoid SetValue()\n{\n    value = 3;\n}",
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
    }
  ]
};
