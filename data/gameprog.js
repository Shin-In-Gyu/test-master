// ========================================================
// 🎮 [DATA MODULE] 게임프로그래밍 (Game Programming)
// 강남대학교 게임프로그래밍 / 담당교수 김영호
// 7주차 중간고사 복습자료(35페이지) 100% 밀착 초압축 치트시트 & 실전 모의고사
// ========================================================
window.CONCEPT_DATABASE = window.CONCEPT_DATABASE || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};

// 1. 게임프로그래밍 개념 총정리 (교안 35p 1:1 대응 컴팩트 치트시트)
window.CONCEPT_DATABASE.gameprog = {
  id: "gameprog",
  title: "게임프로그래밍 (Unity 기초 & C#) 중간고사 핵심 총정리",
  filterChips: [
    { id: "all", label: "전체보기" },
    { id: "gp-cheat", label: "1초 정답 치트키 (20선)", class: "amber-chip" },
    { id: "gp-ch1", label: "1. Unity 기본 기능 (p.3~11)" },
    { id: "gp-ch2", label: "2. 물리 · 충돌 · 입력 (p.12~18)" },
    { id: "gp-ch3", label: "3. 표현과 코드 구조 (p.19~24)" },
    { id: "gp-ch4", label: "4. C# 기초 & 5대 코드 추적 (p.25~34)" }
  ],
  html: `
    <!-- SECTION 0: 1초 정답 치트키 20선 -->
    <section id="gp-cheat" class="concept-section">
      <div class="section-banner gold-banner">
        <div class="section-banner-title">
          <span>게임프로그래밍 1초 정답 치트키 (교안 35페이지 전수 빈출 20선)</span>
        </div>
        <span style="font-size: 14px; opacity: 0.9;">문제 확인 즉시 답안을 적을 수 있는 핵심 키워드 & 교수님 오답 함정 요약</span>
      </div>

      <div class="qa-grid">
        <div class="qa-card" data-tags="오브젝트 이름 기능 컴포넌트">
          <div class="qa-q"><span class="q-icon">Q1</span><span>오브젝트의 이름만으로 기능이 자동으로 정해지는가?</span></div>
          <div class="qa-a"><span class="ans-target">정해지지 않는다 (붙어 있는 컴포넌트와 코드의 동작을 봐야 함)</span><button class="copy-btn" onclick="copyText('컴포넌트와 코드 동작')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 3p: 이름만으로 기능이 정해지지 않으며 부착된 컴포넌트를 확인해야 함</div>
        </div>

        <div class="qa-card" data-tags="scale position 좌표 크기">
          <div class="qa-q"><span class="q-icon">Q2</span><span>Transform의 Scale 크기를 줄이면 Position 값이 자동으로 바뀌는가?</span></div>
          <div class="qa-a"><span class="ans-target">자동으로 바뀌지 않는다 (Scale은 실제 길이가 아니라 크기 비율)</span><button class="copy-btn" onclick="copyText('자동으로 바뀌지 않는다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 4p: 최종 크기는 원본과 부모 Transform의 영향도 함께 받음</div>
        </div>

        <div class="qa-card" data-tags="거리 distance 차이 차">
          <div class="qa-q"><span class="q-icon">Q3</span><span>같은 축에서 위치 1과 5의 차이는 4이고 반대로 빼면 -4이다. 두 위치 사이의 '거리'는?</span></div>
          <div class="qa-a"><span class="ans-target">4 (거리는 뺄셈 순서와 무관하게 항상 같다)</span><button class="copy-btn" onclick="copyText('4')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 5p: 거리는 절댓값이므로 방향이나 순서에 관계없이 4로 동일함</div>
        </div>

        <div class="qa-card" data-tags="계층 부모 자식 회전 충돌영역">
          <div class="qa-q"><span class="q-icon">Q4</span><span>부모에 Collider가 있고 자식에 그림이 있을 때, 자식의 그림만 회전하면 부모의 충돌 영역은?</span></div>
          <div class="qa-a"><span class="ans-target">함께 회전하지 않는다 (어떤 Transform을 바꾸느냐에 따라 영향 대상이 다름)</span><button class="copy-btn" onclick="copyText('함께 회전하지 않는다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 6p: 자식의 Transform만 변경하면 부모의 컴포넌트는 영향받지 않음</div>
        </div>

        <div class="qa-card" data-tags="spriterenderer 비활성화 물리 동작 유지">
          <div class="qa-q"><span class="q-icon">Q5</span><span>SpriteRenderer가 꺼져 그림이 보이지 않아도 동일 오브젝트의 물리 동작은 계속되는가?</span></div>
          <div class="qa-a"><span class="ans-target">계속될 수 있다 (컴포넌트마다 맡는 역할이 다름)</span><button class="copy-btn" onclick="copyText('계속될 수 있다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 7p: 그림 표시와 Rigidbody2D 물리 연산은 완전히 독립적인 컴포넌트임</div>
        </div>

        <div class="qa-card" data-tags="getcomponent null 컴포넌트 참조">
          <div class="qa-q"><span class="q-icon">Q6</span><span>GetComponent 호출 시 해당 컴포넌트가 없으면 무엇을 반환하며, 자식까지 검색하는가?</span></div>
          <div class="qa-a"><span class="ans-target">null 반환 / 자식이나 다른 오브젝트까지 검색하지 않음</span><button class="copy-btn" onclick="copyText('null')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 8p: 동일 오브젝트만 탐색하며, 컴포넌트를 추가하는 기능이 아님</div>
        </div>

        <div class="qa-card" data-tags="참조 복제 null 멤버 접근 오류">
          <div class="qa-q"><span class="q-icon">Q7</span><span>컴포넌트 참조를 변수에 가져오면 컴포넌트가 복제되는가? 대상이 없는데 멤버에 접근하면?</span></div>
          <div class="qa-a"><span class="ans-target">복제되지 않는다 / 오류(NullReference)가 발생함</span><button class="copy-btn" onclick="copyText('복제되지 않는다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 9p: 참조는 객체를 가리키는 변수일 뿐이며 복제되지 않음</div>
        </div>

        <div class="qa-card" data-tags="비활성화 필드 초기화 삭제">
          <div class="qa-q"><span class="q-icon">Q8</span><span>오브젝트나 컴포넌트를 비활성화하면 내부 필드 변수 값이 자동으로 초기화되거나 삭제되는가?</span></div>
          <div class="qa-a"><span class="ans-target">초기화되지 않는다 (다시 사용할 때도 이전 값이 남을 수 있음)</span><button class="copy-btn" onclick="copyText('초기화되지 않는다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 10p: 새 시작 값을 넣으려면 필드 초기화 코드를 직접 대입해야 함</div>
        </div>

        <div class="qa-card" data-tags="instantiate 프리팹 인스턴스 검색 생성">
          <div class="qa-q"><span class="q-icon">Q9</span><span>Prefab을 Instantiate하는 기능은 씬에 기존 객체를 검색하는 기능인가?</span></div>
          <div class="qa-a"><span class="ans-target">검색 기능이 아니다 (원본을 바탕으로 새 인스턴스 객체를 생성함)</span><button class="copy-btn" onclick="copyText('새 객체 생성')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 11p: Instantiate는 기존 객체 검색이 아니며 새 객체를 만듦</div>
        </div>

        <div class="qa-card" data-tags="update fixedupdate 실행 횟수 차이">
          <div class="qa-q"><span class="q-icon">Q10</span><span>Update와 FixedUpdate의 실행 횟수는 항상 같은가? 각각의 호출 기준은?</span></div>
          <div class="qa-a"><span class="ans-target">항상 같지는 않다 (Update는 매 화면 프레임, FixedUpdate는 물리 시간 간격)</span><button class="copy-btn" onclick="copyText('항상 같지는 않다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 12p: Update는 화면 프레임마다, FixedUpdate는 일정한 물리 시간 간격으로 실행</div>
        </div>

        <div class="qa-card" data-tags="timedeltatime 시간 이동 프레임">
          <div class="qa-q"><span class="q-icon">Q11</span><span>Update에서 이동 시 프레임마다 고정 거리를 더하면 프레임 수에 따라 이동 거리가 어떻게 되는가?</span></div>
          <div class="qa-a"><span class="ans-target">1초 이동 거리가 달라진다 (따라서 지난 시간 Time.deltaTime을 곱함)</span><button class="copy-btn" onclick="copyText('Time.deltaTime')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 13p: 높은 프레임 수는 실행 횟수가 많고 간격이 작으므로 시간을 곱해야 일정함</div>
        </div>

        <div class="qa-card" data-tags="gravity scale 중력 배율 가속">
          <div class="qa-q"><span class="q-icon">Q12</span><span>Dynamic Rigidbody2D에서 Gravity Scale을 높이면 어떻게 되며, 시작 위치를 조절하는 설정인가?</span></div>
          <div class="qa-a"><span class="ans-target">아래쪽 가속이 커진다 / 시작 위치나 애니메이션 속도 조절 설정이 아님</span><button class="copy-btn" onclick="copyText('아래쪽 가속이 커진다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 14p: 중력 가속도 영향만 조절하며 위치나 애니메이션과는 무관함</div>
        </div>

        <div class="qa-card" data-tags="is trigger collider 통과 감지 삭제">
          <div class="qa-q"><span class="q-icon">Q13</span><span>오브젝트를 통과시키기 위해 Collider를 아예 없애버리면 어떻게 되는가? 해결책은?</span></div>
          <div class="qa-a"><span class="ans-target">감지할 영역도 사라진다 / Collider의 Is Trigger를 체크해 사용함</span><button class="copy-btn" onclick="copyText('Is Trigger')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 15p: 통과하면서 접촉을 감지하려면 Collider를 두고 Is Trigger를 켬</div>
        </div>

        <div class="qa-card" data-tags="트리거 이벤트 rigidbody2d 충돌">
          <div class="qa-q"><span class="q-icon">Q14</span><span>OnTriggerEnter2D 이벤트가 발생하기 위해 충돌 쌍에 반드시 필요한 최소 물리 조건은?</span></div>
          <div class="qa-a"><span class="ans-target">최소 한쪽에 Rigidbody2D가 필요하다</span><button class="copy-btn" onclick="copyText('최소 한쪽에 Rigidbody2D')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 16p: 둘 다 Collider만 있으면 물리 이벤트가 발생하지 않음</div>
        </div>

        <div class="qa-card" data-tags="action binding 하나의 action 여러 binding">
          <div class="qa-q"><span class="q-icon">Q15</span><span>하나의 Input Action에 여러 Binding(키보드, 게임패드)을 연결하는 주된 이점은?</span></div>
          <div class="qa-a"><span class="ans-target">장치별로 게임 동작 코드를 중복 작성하지 않는다</span><button class="copy-btn" onclick="copyText('코드 중복 작성 방지')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 17p: 각 장치의 입력이 같은 행동 요청과 같은 실행 함수로 연결됨</div>
        </div>

        <div class="qa-card" data-tags="누른 순간 누르고 있는 동안 입력 타이밍">
          <div class="qa-q"><span class="q-icon">Q16</span><span>키를 누른 상태로 가만히 있을 때, '누른 순간' 감지 방식은 계속 반복 실행되는가?</span></div>
          <div class="qa-a"><span class="ans-target">반복 실행하지 않는다 (새로 누르기 전까지 1회만 실행, 점프에 적합)</span><button class="copy-btn" onclick="copyText('반복 실행하지 않는다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 18p: 누르고 있는 동안 매 프레임 확인해야 연속 이동이 됨</div>
        </div>

        <div class="qa-card" data-tags="loop time clip 반복 재생 애니메이션">
          <div class="qa-q"><span class="q-icon">Q17</span><span>같은 Animation Clip을 끝난 뒤 계속 반복 재생할지 결정하는 에셋 설정은?</span></div>
          <div class="qa-a"><span class="ans-target">Clip의 Loop Time 설정</span><button class="copy-btn" onclick="copyText('Loop Time')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 19p: Clip은 내용, Controller는 흐름, 반복은 Clip의 Loop Time</div>
        </div>

        <div class="qa-card" data-tags="orthographic size 카메라 물체 크기">
          <div class="qa-q"><span class="q-icon">Q18</span><span>2D 직교 카메라(Orthographic)에서 Size를 키우면 화면 속 물체는 어떻게 보이는가?</span></div>
          <div class="qa-a"><span class="ans-target">화면에서 더 작게 보인다 (더 넓은 영역이 한 화면에 들어오기 때문)</span><button class="copy-btn" onclick="copyText('더 작게 보인다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 21p: Orthographic Size는 세로 범위의 절반이며, 키우면 줌아웃 효과</div>
        </div>

        <div class="qa-card" data-tags="button on click 함수 자동 연결">
          <div class="qa-q"><span class="q-icon">Q19</span><span>UI Button의 이름과 스크립트 함수 이름이 같으면 클릭 시 자동으로 연결되어 호출되는가?</span></div>
          <div class="qa-a"><span class="ans-target">자동으로 연결되지 않는다 (On Click 이벤트에 직접 대상을 등록해야 함)</span><button class="copy-btn" onclick="copyText('자동으로 연결되지 않는다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 22p: On Click에 등록된 대상의 함수만 호출됨</div>
        </div>

        <div class="qa-card" data-tags="리팩토링 최적화 속도 차이">
          <div class="qa-q"><span class="q-icon">Q20</span><span>코드를 읽기 쉽게 정리(리팩토링)하면 실행 속도까지 무조건 빨라지는가? 차이점은?</span></div>
          <div class="qa-a"><span class="ans-target">빨라지는 것 아니다 (구조 개선=리팩토링, 비용 절감=최적화, 성능은 측정으로 확인)</span><button class="copy-btn" onclick="copyText('빨라지는 것 아니다')">복사</button></div>
          <div style="font-size: 14px; color: var(--ink-muted); margin-top: 4px;">* 교안 23p: 리팩토링은 외부 동작 유지하며 내부 구조 개선(책임 분리·중복 제거)</div>
        </div>
      </div>
    </section>

    <!-- SECTION 1: Unity 기본 기능 (p.3~11) -->
    <section id="gp-ch1" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>1. Unity 기본 기능 (교안 3~11페이지 완벽 요약)</span>
        </div>
        <span class="badge badge-amber">씬 · 오브젝트 · 좌표 · Transform · 컴포넌트 · Prefab</span>
      </div>

      <!-- 시험 출제 원칙 및 제외 안내 (Page 2) -->
      <div class="callout-box warning" style="margin-bottom: 16px;">
        <div class="callout-title">📌 [교수님 공식 안내] 시험 출제 기준 및 제외 항목 (Page 2)</div>
        • <b>시험 범위</b>: 이 자료의 기초 개념과 코드 흐름이 시험 범위입니다.<br>
        • <b>❌ 시험에 묻지 않는 항목</b>: 프로젝트별 규칙·이름·구현 순서·Inspector 수치는 묻지 않습니다. 데이터 저장, 세부 입력 API와 리바인딩 구현도 제외합니다.
      </div>

      <!-- 1-1. 기본 구성 (Page 3) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-1. Unity 기본 구성 & 에디터 인터페이스 (Page 3)</h4>
        <div class="callout-box" style="margin-bottom: 10px;">
          <b>🚨 [핵심 원칙] 오브젝트의 이름만으로 기능이 정해지지는 않습니다. 붙어 있는 컴포넌트와 코드의 동작을 봐야 합니다.</b>
        </div>
        <table class="concept-table">
          <thead>
            <tr>
              <th style="width: 28%;">구성</th>
              <th>교안 공식 정의 (뜻)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Scene</b></td>
              <td>오브젝트를 배치하고 구성해 둔 공간</td>
            </tr>
            <tr>
              <td><b>GameObject</b></td>
              <td>씬에 있는 개별 오브젝트</td>
            </tr>
            <tr>
              <td><b>Component</b></td>
              <td>오브젝트의 위치, 표시, 물리 등 기능을 담당</td>
            </tr>
            <tr>
              <td><b>Script</b></td>
              <td>직접 작성한 동작과 규칙을 코드로 표현</td>
            </tr>
            <tr>
              <td><b>Hierarchy 창</b></td>
              <td>씬의 오브젝트와 계층 관계를 보여 줌</td>
            </tr>
            <tr>
              <td><b>Inspector 창</b></td>
              <td>선택한 대상의 컴포넌트와 설정을 보여 줌</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 1-2. Transform (Page 4) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-2. Transform: 위치, 회전, 크기를 각각 조절합니다 (Page 4)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 22%;">값</th>
              <th style="width: 38%;">역할</th>
              <th>바꾸면 나타나는 변화</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Position</b></td>
              <td>오브젝트의 위치</td>
              <td>배치가 이동함</td>
            </tr>
            <tr>
              <td><b>Rotation</b></td>
              <td>오브젝트의 회전</td>
              <td>방향이 바뀜</td>
            </tr>
            <tr>
              <td><b>Scale</b></td>
              <td>각 축의 크기 비율</td>
              <td>모양이 커지거나 작아짐</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          • <b>월드 좌표축</b>: 기본 월드 좌표에서 <b>X는 좌우, Y는 위아래, Z는 앞뒤</b> 축입니다. <code>Vector3</code>는 세 축의 값을 함께 표현합니다.<br>
          • <b>Scale의 성질</b>: Scale은 실제 길이가 아니라 <b>크기 비율</b>입니다. 크기를 줄여도 <b>Position 값이 자동으로 바뀌지는 않습니다.</b> 최종 크기는 원본과 부모 Transform의 영향도 받습니다.
        </div>
      </div>

      <!-- 1-3. 좌표와 거리 (Page 5) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-3. 좌표와 거리: 기준과 축을 함께 봅니다 (Page 5)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 32%;">구분</th>
              <th>표현 및 의미</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Vector2</b></td>
              <td>두 값으로 표현: <code>x, y</code></td>
            </tr>
            <tr>
              <td><b>Vector3</b></td>
              <td>세 값으로 표현: <code>x, y, z</code></td>
            </tr>
            <tr>
              <td><b>월드 좌표 / position</b></td>
              <td>월드 원점을 기준으로 한 위치</td>
            </tr>
            <tr>
              <td><b>로컬 좌표 / localPosition</b></td>
              <td>부모 Transform을 기준으로 한 위치</td>
            </tr>
          </tbody>
        </table>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px;">
          <li><code>Vector2</code>와 <code>Vector3</code>는 위치뿐 아니라 방향이나 다른 값도 표현할 수 있습니다. 코드에서 어떻게 사용하느냐에 따라 값의 의미가 달라집니다.</li>
          <li><b>거리(Distance) 계산</b>: 같은 축에서 위치 1과 5의 차이는 4입니다. 반대로 빼면 -4지만 <b>두 위치 사이의 거리는 같습니다 (4).</b> (벡터 타입의 세부 API는 보충 설명)</li>
        </ul>
      </div>

      <!-- 1-4. Transform과 계층 (Page 6) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-4. Transform과 계층: 부모를 움직이면 자식도 함께 움직입니다 (Page 6)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 30%;">변경 작업</th>
              <th style="width: 35%;">부모(Parent)의 변화</th>
              <th>자식(Child)의 변화</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>부모를 이동·회전</b></td>
              <td>위치·회전이 바뀜</td>
              <td><b>부모의 변화에 영향을 받음</b> (함께 이동·회전)</td>
            </tr>
            <tr>
              <td><b>자식만 이동·회전</b></td>
              <td>그대로 유지</td>
              <td>부모를 기준으로 위치·회전이 바뀜</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          • <code>localPosition</code>은 부모를 기준으로 한 위치이고 <code>position</code>은 월드 좌표의 위치입니다.<br>
          • <b>🚨 [시험 1순위 오답 함정]</b>: <b>자식의 그림만 회전하면 부모에 붙은 충돌 영역은 함께 회전하지 않습니다.</b> 어떤 Transform을 바꾸느냐에 따라 영향을 받는 대상이 달라집니다.
        </div>
      </div>

      <!-- 1-5. 컴포넌트 역할 (Page 7) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-5. 컴포넌트: 컴포넌트마다 맡는 역할이 다릅니다 (Page 7)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 25%;">컴포넌트</th>
              <th style="width: 35%;">맡은 역할</th>
              <th>설정을 바꾸면</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>SpriteRenderer</b></td>
              <td>2D 스프라이트 표시</td>
              <td>그림의 표시 여부가 달라짐</td>
            </tr>
            <tr>
              <td><b>Rigidbody2D</b></td>
              <td>2D 물리 움직임</td>
              <td>중력과 물리 동작이 달라짐</td>
            </tr>
            <tr>
              <td><b>Collider2D</b></td>
              <td>충돌·통과를 감지할 영역</td>
              <td>접촉 영역과 감지 방식이 달라짐</td>
            </tr>
            <tr>
              <td><b>Transform</b></td>
              <td>위치, 회전, 크기</td>
              <td>배치와 모양의 크기가 달라짐</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          • GameObject에 붙은 컴포넌트들이 각자의 기능을 처리합니다. 하나의 오브젝트에도 여러 컴포넌트가 함께 있을 수 있습니다.<br>
          • <b>🚨 [핵심 문장] 그림이 보이지 않아도 물리 동작은 계속될 수 있습니다.</b> (SpriteRenderer가 꺼져도 Rigidbody2D/Collider2D는 계속 작동함)
        </div>
      </div>

      <!-- 1-6. 컴포넌트 참조 (Page 8~9) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-6. 컴포넌트 참조(GetComponent)와 null (Page 8~9)</h4>
        <pre class="code-block">Rigidbody2D body = GetComponent&lt;Rigidbody2D&gt;();
if (body == null)
    return;</pre>
        <table class="concept-table" style="margin: 10px 0;">
          <thead>
            <tr>
              <th style="width: 28%;">구분 / 결과</th>
              <th>교안 공식 의미</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>컴포넌트 추가</b></td>
              <td>오브젝트에 기능을 새로 붙임</td>
            </tr>
            <tr>
              <td><b>GetComponent</b></td>
              <td>이미 붙어 있는 컴포넌트를 가져옴</td>
            </tr>
            <tr>
              <td><b>컴포넌트를 찾음</b></td>
              <td><code>body</code>로 그 컴포넌트에 접근 가능</td>
            </tr>
            <tr>
              <td><b>찾지 못해 null 반환</b></td>
              <td>사용할 대상이 없으므로 확인 필요 (방어 코드)</td>
            </tr>
          </tbody>
        </table>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.8; padding-left: 20px;">
          <li><code>body</code>는 <code>Rigidbody2D</code> 컴포넌트를 가리키는 변수입니다. <b>참조를 가져온다고 그 컴포넌트가 복제되지는 않습니다.</b></li>
          <li>해당 컴포넌트가 없으면 <code>null</code>을 반환합니다. 기본 <code>GetComponent</code>는 자식이나 다른 오브젝트까지 검색하지 않습니다.</li>
          <li>대상이 없이 멤버에 접근하면 오류가 날 수 있습니다. 이 예시는 대상이 없으면 이후 처리를 하지 않습니다. (호출 문법 및 세부 예외 종류는 시험 제외 보충 설명)</li>
        </ul>
      </div>

      <!-- 1-7. 재사용 상태 (Page 10) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-7. 재사용 상태: 오브젝트와 컴포넌트의 비활성화는 다릅니다 (Page 10)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 32%;">작업</th>
              <th>영향 범위 및 동작</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>gameObject.SetActive(false)</b></td>
              <td>오브젝트와 그 아래 자식의 활성 동작을 중지</td>
            </tr>
            <tr>
              <td><b>spriteRenderer.enabled = false</b></td>
              <td>그림 표시만 중지. 다른 컴포넌트는 계속 동작할 수 있음</td>
            </tr>
            <tr>
              <td><b>필드 초기화</b></td>
              <td>변수에 시작 값을 직접 대입</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          • <b>🚨 [시험 단골] 비활성화는 객체를 삭제하거나 필드 값을 초기화하는 일이 아닙니다. 다시 사용할 때도 이전 값이 남을 수 있습니다.</b><br>
          • 오브젝트 전체, 특정 컴포넌트, 변수의 값을 명확히 구분합니다.
        </div>
      </div>

      <!-- 1-8. Prefab과 인스턴스 (Page 11) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">1-8. Prefab을 Instantiate하면 새 객체가 생깁니다 (Page 11)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 35%;">Prefab 에셋</th>
              <th>씬의 인스턴스</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>반복 사용할 오브젝트의 구성을 보관합니다.<br>컴포넌트와 초기 설정을 함께 묶습니다.</td>
              <td>원본을 바탕으로 만들어진 실제 객체입니다.<br>인스턴스마다 위치와 상태를 따로 가집니다.</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          • <b>흐름</b>: <code>Prefab 원본</code> ➔ <b><code>Instantiate</code></b> ➔ <code>새 인스턴스</code><br>
          • <b>🚨 [주의] Instantiate는 기존 객체를 검색하는 기능이 아닙니다!</b> (새 객체를 생성하는 기능)
        </div>
      </div>
    </section>

    <!-- SECTION 2: 물리 · 충돌 · 입력 (p.12~18) -->
    <section id="gp-ch2" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>2. 물리 · 충돌 · 입력 (교안 12~18페이지 완벽 요약)</span>
        </div>
        <span class="badge badge-amber">실행 함수 · Time.deltaTime · Rigidbody2D · Collider2D · Action과 Binding</span>
      </div>

      <!-- 2-1. 실행 함수 (Page 12) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-1. 실행 함수: 초기화, 프레임 처리, 물리 처리를 구분합니다 (Page 12)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 25%;">함수</th>
              <th>호출 기준과 기본 역할</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Awake</b></td>
              <td>인스턴스 초기화 때 참조와 내부 값 준비</td>
            </tr>
            <tr>
              <td><b>Start</b></td>
              <td>활성 스크립트의 첫 Update 전에 한 번 실행</td>
            </tr>
            <tr>
              <td><b>Update</b></td>
              <td>활성화된 동안 매 프레임 실행</td>
            </tr>
            <tr>
              <td><b>FixedUpdate</b></td>
              <td>물리 업데이트의 일정한 시간 간격으로 실행</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          • <b>🚨 [호출 횟수 비교]</b>: Update는 <b>화면 프레임마다</b> 실행되고 FixedUpdate는 <b>물리 시간 간격에 맞춰</b> 실행됩니다. 따라서 <b>FixedUpdate의 실행 횟수와 화면 프레임 수가 항상 같지는 않습니다.</b><br>
          • (스크립트 사이의 세부 실행 순서는 시험 제외, FixedUpdate 세부 시간 설정은 보충 설명)
        </div>
      </div>

      <!-- 2-2. 시간에 맞춘 이동 (Page 13) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-2. 시간에 맞춘 이동: 속도에 지난 시간을 곱해 이동량을 구합니다 (Page 13)</h4>
        <pre class="code-block">transform.position += Vector3.right * speed * Time.deltaTime;</pre>
        <table class="concept-table" style="margin: 10px 0;">
          <thead>
            <tr>
              <th style="width: 25%;">비교 상황</th>
              <th style="width: 37%;">프레임마다 1만큼 이동 (잘못됨)</th>
              <th>지난 시간(Time.deltaTime)을 곱해 이동 (올바름)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>낮은 프레임 수</b></td>
              <td>1초 동안 실행 횟수가 적음</td>
              <td>각 프레임의 시간 간격이 큼</td>
            </tr>
            <tr>
              <td><b>높은 프레임 수</b></td>
              <td>1초 동안 실행 횟수가 많음</td>
              <td>각 프레임의 시간 간격이 작음</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          <b>🚨 [핵심 결론] 프레임마다 고정 거리를 더하면 프레임 수에 따라 1초 이동 거리가 달라집니다.</b> 따라서 <code>Time.deltaTime</code>(지난 시간)을 곱해주어야 어떤 프레임 수에서도 1초 이동 거리가 일정하게 유지됩니다.
        </div>
      </div>

      <!-- 2-3. 2D 물리 (Page 14) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-3. 2D 물리: Gravity Scale은 중력의 영향을 조절합니다 (Page 14)</h4>
        <ul style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.85; padding-left: 20px;">
          <li><b>Dynamic Rigidbody2D</b>: 중력과 힘의 영향을 받는 물리 움직임에 사용합니다.</li>
          <li><b>Gravity Scale의 역할</b>: 중력이 아래로 작용할 때 <b>Gravity Scale을 높이면 아래쪽 가속이 커집니다.</b></li>
          <li><b style="color: var(--tag-danger-ink);">🚨 [오답 함정] 시작 위치나 애니메이션 속도를 조절하는 설정은 아닙니다.</b> (다른 물리 설정은 같다고 가정)</li>
        </ul>
      </div>

      <!-- 2-4. 접촉과 통과 (Page 15) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-4. 접촉과 통과: Collider와 Trigger는 사용 목적이 다릅니다 (Page 15)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 45%;">물리적으로 막는 영역 (일반 Collider)</th>
              <th>통과를 감지하는 영역 (Is Trigger)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>• 오브젝트의 통과를 막는 바닥이나 벽에 사용합니다.<br>• 물리 설정에 따라 접촉과 충돌 반응을 처리합니다.</td>
              <td>• 점수 구간이나 도착 영역에서 오브젝트가 지나가는지 감지합니다.<br>• <b>Collider의 Is Trigger를 사용합니다.</b></td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          • <b>🚨 [시험 출제] 통과시키려고 Collider를 없애면 감지할 영역도 사라집니다.</b><br>
          • 이벤트를 받으려면 Rigidbody, 레이어 등 다른 물리 조건도 올바르게 구성되어 있어야 합니다.
        </div>
      </div>

      <!-- 2-5. 2D 충돌 이벤트 (Page 16) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-5. 2D 충돌 이벤트: 충돌 영역과 물리 동작, 이벤트를 구분합니다 (Page 16)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 28%;">구성</th>
              <th>교안 공식 역할</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Collider2D</b></td>
              <td>접촉하거나 겹치는 영역을 정의</td>
            </tr>
            <tr>
              <td><b>Rigidbody2D</b></td>
              <td>물리 동작과 물리 상호작용에 참여</td>
            </tr>
            <tr>
              <td><b>Collision 이벤트</b></td>
              <td>Trigger가 아닌 충돌의 접촉을 알림 (처음 접촉: <code>OnCollisionEnter2D</code>)</td>
            </tr>
            <tr>
              <td><b>Trigger 이벤트</b></td>
              <td>물리적으로 막지 않는 영역의 겹침을 알림 (영역에 들어감: <code>OnTriggerEnter2D</code>)</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          • <b>🚨 [필수 조건] Trigger 이벤트에는 최소 한쪽에 Rigidbody2D가 필요합니다.</b> Body Type과 레이어 설정도 결과에 영향을 줍니다.<br>
          • 2D와 3D 물리는 서로 다른 시스템입니다. (세부 이벤트 문법은 시험 제외 보충 설명)
        </div>
      </div>

      <!-- 2-6. Action과 Binding (Page 17) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-6. Action과 Binding: 게임 행동과 장치의 입력을 나눕니다 (Page 17)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 32%;">항목</th>
              <th>역할과 특징</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Input Action</b></td>
              <td>게임에서 받을 행동이나 값 (예: 점프, 이동)</td>
            </tr>
            <tr>
              <td><b>Binding</b></td>
              <td>그 행동에 연결할 키·버튼 등의 입력 (예: Space 키, 게임패드 A 버튼)</td>
            </tr>
            <tr>
              <td><b>하나의 Action에 여러 Binding</b></td>
              <td>각 입력으로 같은 행동을 요청할 수 있음</td>
            </tr>
            <tr>
              <td><b>같은 실행 함수로 연결</b></td>
              <td><b>장치별로 게임 동작 코드를 중복 작성하지 않음</b></td>
            </tr>
          </tbody>
        </table>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-top: 6px;">
          * 예: 키보드의 키와 게임패드의 버튼을 같은 Action에 연결하면, 두 장치에서 같은 행동을 요청할 수 있습니다.
        </p>
      </div>

      <!-- 2-7. 입력의 타이밍 (Page 18) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">2-7. 입력의 타이밍: 누른 순간과 누르고 있는 동안의 차이 (Page 18)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 26%;">입력 기준</th>
              <th style="width: 44%;">뜻</th>
              <th>사용 예</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>누른 순간</b></td>
              <td>키를 누르기 시작했을 때 한 번 감지</td>
              <td>한 번 누르면 한 번 점프</td>
            </tr>
            <tr>
              <td><b>누르고 있는 동안</b></td>
              <td>키가 눌린 상태를 계속 확인</td>
              <td>방향키를 누르는 동안 이동</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          • <b>🚨 [동작 차이]</b>: <b>누른 순간을 감지하면 키를 계속 누르고 있어도 새로 누르기 전까지 반복 실행하지 않습니다.</b> 눌린 상태를 매 프레임 확인하면 키를 누르는 동안 계속 실행할 수 있습니다.<br>
          • (Input System의 세부 이벤트 이름이나 설정 문법은 시험에서 묻지 않습니다.)
        </div>
      </div>
    </section>

    <!-- SECTION 3: 표현과 코드 구조 (p.19~24) -->
    <section id="gp-ch3" class="concept-section">
      <div class="section-banner">
        <div class="section-banner-title">
          <span>3. 표현과 코드 구조 (교안 19~24페이지 완벽 요약)</span>
        </div>
        <span class="badge badge-amber">애니메이션 · 카메라 · UI · 리팩토링 · 오브젝트 풀</span>
      </div>

      <!-- 3-1. 애니메이션 3요소 (Page 19) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-1. 애니메이션: Clip, Controller, Animator의 역할 (Page 19)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 28%;">구성</th>
              <th style="width: 44%;">역할</th>
              <th>예시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Animation Clip</b></td>
              <td>시간에 따른 속성 변화를 기록한 에셋</td>
              <td>걷기 동작, Sprite 교체</td>
            </tr>
            <tr>
              <td><b>Animator Controller</b></td>
              <td>상태와 상태 사이의 전환을 정의한 에셋</td>
              <td>대기에서 이동으로 전환</td>
            </tr>
            <tr>
              <td><b>Animator</b></td>
              <td>Controller에 따라 애니메이션을 재생하는 컴포넌트</td>
              <td>오브젝트에서 현재 상태의 동작 재생</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          • Animator에 Controller를 연결하면 Controller의 현재 상태에 지정된 Clip을 재생합니다. <b>Clip에는 재생할 내용이 담겨 있고 Controller는 재생 흐름을 정합니다.</b><br>
          • <b>🚨 [반복 재생 설정] 같은 Clip을 반복 재생할지는 Clip의 Loop Time 설정으로 정합니다.</b>
        </div>
      </div>

      <!-- 3-2. Animator 상태 전환 (Page 20) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-2. Animator의 상태 전환: Parameter 값으로 전환 조건을 판단합니다 (Page 20)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 25%;">개념</th>
              <th style="width: 45%;">뜻</th>
              <th>예</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>State</b></td>
              <td>현재 재생할 동작을 나타내는 상태</td>
              <td>Idle, Move</td>
            </tr>
            <tr>
              <td><b>Transition</b></td>
              <td>한 상태에서 다른 상태로 넘어가는 연결</td>
              <td>Idle에서 Move로 전환</td>
            </tr>
            <tr>
              <td><b>Parameter</b></td>
              <td>전환 조건 등에 사용하는 값</td>
              <td>bool 타입의 <code>IsMoving</code></td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          • <code>animator.SetBool("IsMoving", true)</code>로 값을 바꿉니다. Controller는 <code>IsMoving = true</code>와 나머지 조건을 확인한 뒤 모두 충족하면 Idle에서 Move로 전환합니다.<br>
          • <b>IsMoving은 직접 정한 이름입니다.</b> Controller에 Parameter와 전환 조건이 정의되어 있어야 합니다. (API 문법과 세부 설정은 시험 제외)
        </div>
      </div>

      <!-- 3-3. 카메라 (Page 21) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-3. 카메라: 카메라는 월드의 어느 영역을 보여 줄지 정합니다 (Page 21)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 8px;">
          카메라의 위치와 회전으로 어디서 어느 방향을 볼지 정합니다. Projection은 월드를 화면에 표현하는 방식입니다.
        </p>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 30%;">설정</th>
              <th>교안 공식 역할</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Perspective</b></td>
              <td>같은 물체도 멀리 있으면 작게 보임 (화각은 Field of View로 조절)</td>
            </tr>
            <tr>
              <td><b>Orthographic</b></td>
              <td>같은 물체는 거리가 달라도 같은 크기로 보임</td>
            </tr>
            <tr>
              <td><b>Orthographic Size</b></td>
              <td><b>직교 카메라는 보는 세로 범위의 절반</b></td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          • <b>🚨 [시험 1순위] 같은 화면 비율에서 Size를 키우면 더 넓은 영역이 들어오므로 물체는 화면에서 작게 보입니다.</b><br>
          • (수치나 화각 계산은 시험에서 묻지 않습니다.)
        </div>
      </div>

      <!-- 3-4. UI 이벤트 (Page 22) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-4. UI 이벤트: UI는 Canvas 아래에 구성합니다 (Page 22)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 30%;">구성</th>
              <th>역할</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Canvas</b></td>
              <td>UI를 그리는 기준</td>
            </tr>
            <tr>
              <td><b>RectTransform</b></td>
              <td>UI 요소의 위치와 크기, 앵커 등을 관리</td>
            </tr>
            <tr>
              <td><b>Image / TextMeshPro</b></td>
              <td>이미지 / 글자를 표시</td>
            </tr>
            <tr>
              <td><b>Button</b></td>
              <td>사용자의 클릭을 받는 UI 컴포넌트</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          • <b>🚨 [함정 주의] Button의 On Click 이벤트는 등록된 대상의 함수를 호출합니다. 버튼 이름과 함수 이름이 같아도 자동으로 연결되지는 않습니다.</b><br>
          • UI 표시와 다른 스크립트의 실행 여부는 별개입니다.
        </div>
      </div>

      <!-- 3-5. 리팩토링과 최적화 (Page 23) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-5. 리팩토링: 리팩토링과 최적화는 목적이 다릅니다 (Page 23)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 25%;">개념</th>
              <th>목적 및 설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>리팩토링</b></td>
              <td><b>외부 동작을 유지하면서 코드의 내부 구조를 개선</b></td>
            </tr>
            <tr>
              <td><b>책임 분리</b></td>
              <td>서로 다른 역할의 코드를 구분해 수정 범위를 줄임</td>
            </tr>
            <tr>
              <td><b>중복 제거</b></td>
              <td>같은 처리나 규칙을 여러 곳에서 따로 수정하지 않도록 정리</td>
            </tr>
            <tr>
              <td><b>최적화</b></td>
              <td><b>실행 시간이나 메모리 등의 비용을 줄임</b></td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          <b>🚨 [교안 명시 원칙] 코드를 읽기 쉽게 정리했다고 실행 속도까지 빨라지는 것은 아닙니다. 성능이 나아졌는지는 측정으로 확인합니다.</b>
        </div>
      </div>

      <!-- 3-6. 오브젝트 풀 (Page 24) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">3-6. 오브젝트 풀: 생성과 삭제 대신 같은 객체를 다시 사용합니다 (Page 24)</h4>
        <p style="font-size: 14.5px; color: var(--ink-secondary); margin-bottom: 8px;">
          오브젝트 풀은 인스턴스를 보관했다가 다시 사용하는 방식입니다. <b>생성과 삭제가 반복될 때 드는 비용을 줄입니다.</b>
        </p>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 35%;">작업</th>
              <th>의미</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Instantiate</b></td>
              <td>새 인스턴스를 만듦</td>
            </tr>
            <tr>
              <td><b>Destroy</b></td>
              <td>객체를 삭제함</td>
            </tr>
            <tr>
              <td><b>비활성화 후 재사용</b></td>
              <td>기존 인스턴스를 보관했다가 다시 사용함</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          풀의 용량과 객체 수명에 따라 새로 생성하거나 일부를 삭제하기도 합니다. <b>핵심은 같은 객체를 반복해서 쓰는 데 있습니다.</b>
        </div>
      </div>
    </section>

    <!-- SECTION 4: C# 기초 & 5대 코드 흐름 추적 (p.25~34) -->
    <section id="gp-ch4" class="concept-section">
      <div class="section-banner danger-banner">
        <div class="section-banner-title">
          <span>4. C# 기초 & 5대 코드 흐름 추적 (교안 25~34페이지 완벽 해부)</span>
        </div>
        <span class="badge badge-amber">변수 · 대입 · 연산자 · 조건 · 반복 · 함수 · bool 조기 return</span>
      </div>

      <!-- 4-1. 변수와 타입 (Page 25) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">4-1. 변수와 타입: 변수는 값을 보관하고 타입은 값의 종류를 정합니다 (Page 25)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 25%;">타입</th>
              <th style="width: 45%;">보관할 값</th>
              <th>예</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>int</b></td>
              <td>정수</td>
              <td><code>3</code></td>
            </tr>
            <tr>
              <td><b>float</b></td>
              <td>실수</td>
              <td><code>0.5f</code></td>
            </tr>
            <tr>
              <td><b>bool</b></td>
              <td>참 또는 거짓</td>
              <td><code>true / false</code></td>
            </tr>
            <tr>
              <td><b>string</b></td>
              <td>문자열</td>
              <td><code>"Hello"</code></td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          • <code>int value = 3;</code>에서 <code>int</code>는 타입, <code>value</code>는 변수 이름, <code>3</code>은 초기값입니다. 변수 이름은 직접 정합니다.<br>
          • 실행 중 대입문으로 값을 바꿀 수 있습니다. <b>시험 예시는 int와 bool을 중심으로 읽습니다.</b>
        </div>
      </div>

      <!-- 4-2. [추적 1] C# 대입 순서 (Page 26) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--tag-danger-ink);">📌 [코드 추적 1] 변수의 값은 실행 순서대로 바뀝니다 (Page 26)</h4>
        <pre class="code-block">int number = 3;
number += 4;
number = 2;
number++;</pre>
        <table class="concept-table" style="margin: 10px 0;">
          <thead>
            <tr>
              <th style="width: 20%;">단계</th>
              <th style="width: 35%;">실행 코드</th>
              <th>값의 변화</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1단계</td>
              <td><code>int number = 3;</code></td>
              <td>처음 값은 <b>3</b>입니다.</td>
            </tr>
            <tr>
              <td>2단계</td>
              <td><code>number += 4;</code></td>
              <td>4를 더해 <b>7</b>이 됩니다.</td>
            </tr>
            <tr>
              <td>3단계</td>
              <td><code>number = 2;</code></td>
              <td><b>★ 2를 대입하면 7을 버리고 2가 됩니다.</b></td>
            </tr>
            <tr>
              <td>4단계</td>
              <td><code>number++;</code></td>
              <td>1을 더해 <b>최종 값은 3</b>입니다.</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          <b>🚨 [핵심 규칙] 대입(=)은 기존 값에 더하는 것이 아니라 값을 바꾸는 작업입니다!</b>
        </div>
      </div>

      <!-- 4-3. 비교 및 논리 연산자 (Page 27~28) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">4-3. 비교 연산자와 논리 연산자 (Page 27~28)</h4>
        <table class="concept-table" style="margin-bottom: 10px;">
          <thead>
            <tr>
              <th style="width: 22%;">연산자</th>
              <th style="width: 38%;">의미</th>
              <th>예시 및 결과 (bool)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>=</b></td>
              <td>오른쪽 값을 대입</td>
              <td><code>value = 3</code> (값을 바꿈)</td>
            </tr>
            <tr>
              <td><b>== / !=</b></td>
              <td>같다 / 다르다</td>
              <td><code>3 == 3</code> → <b>true</b></td>
            </tr>
            <tr>
              <td><b>&gt; / &lt;</b></td>
              <td>크다 / 작다</td>
              <td><code>3 &gt; 5</code> → <b>false</b></td>
            </tr>
            <tr>
              <td><b>&gt;= / &lt;=</b></td>
              <td>크거나 같다 / 작거나 같다</td>
              <td><code>3 &lt;= 3</code> → <b>true</b></td>
            </tr>
            <tr>
              <td><b>&&</b></td>
              <td>두 조건이 모두 참이면 참</td>
              <td><code>a && b</code> → false (a=true, b=false일 때)</td>
            </tr>
            <tr>
              <td><b>||</b></td>
              <td>하나 이상의 조건이 참이면 참</td>
              <td><code>a || b</code> → true</td>
            </tr>
            <tr>
              <td><b>!</b></td>
              <td>참·거짓을 반대로 바꿈</td>
              <td><code>!a</code> → false</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          • <code>value = 3;</code>은 값을 바꾸는 문장이고, <code>value == 3</code>은 값이 3인지 비교하는 식입니다.<br>
          • <b>비교 결과는 bool입니다.</b> 조건문은 이 참·거짓 결과로 실행 여부를 판단합니다.<br>
          • <code>&&</code>와 <code>||</code>는 왼쪽 결과만으로 판단할 수 있으면 오른쪽 식을 평가하지 않습니다 (단락 평가).
        </div>
      </div>

      <!-- 4-4. [추적 2] 조건 if (Page 29) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--tag-danger-ink);">📌 [코드 추적 2] 조건: 조건이 참일 때만 안의 코드를 실행합니다 (Page 29)</h4>
        <pre class="code-block">int value = 9;
int highest = 12;
if (value &gt; highest)
    highest = value;

value = 15;
if (value &gt; highest)
    highest = value;</pre>
        <div class="callout-box" style="margin-top: 10px;">
          • <b>첫 번째 비교</b>: 9는 12보다 크지 않으므로(<code>9 &gt; 12</code>는 <code>false</code>) 대입하지 않습니다. <b>highest는 12입니다.</b><br>
          • <b>두 번째 비교</b>: <code>value</code>가 15로 바뀌었습니다. 15는 12보다 크므로(<code>15 &gt; 12</code>는 <code>true</code>) <b>highest에 15를 대입합니다. (최종 highest = 15)</b><br>
          • <b>🚨 [핵심] 같은 조건식이라도 검사할 때의 변수 값이 바뀌면 실행 결과가 달라집니다.</b>
        </div>
      </div>

      <!-- 4-5. [추적 3] 반복 for (Page 30) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--tag-danger-ink);">📌 [코드 추적 3] 반복: 시작 값과 종료 조건으로 횟수를 셉니다 (Page 30)</h4>
        <pre class="code-block">int total = 0;
for (int i = 0; i &lt; 4; i++)
{
    total += 2;
}</pre>
        <table class="concept-table" style="margin: 10px 0;">
          <thead>
            <tr>
              <th style="width: 25%;">변수 i</th>
              <th style="width: 18%;">0</th>
              <th style="width: 18%;">1</th>
              <th style="width: 18%;">2</th>
              <th>3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>실행 후 total</b></td>
              <td><b>2</b></td>
              <td><b>4</b></td>
              <td><b>6</b></td>
              <td><b style="color: var(--accent);">8</b></td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box warning">
          <b>🚨 [핵심 결론] i가 4가 되면 조건(4 &lt; 4)이 거짓이어서 반복이 끝납니다. 반복 횟수는 네 번이고, 최종 total은 8입니다.</b>
        </div>
      </div>

      <!-- 4-6. [추적 4] 함수 호출 시점 (Page 31) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--tag-danger-ink);">📌 [코드 추적 4] 함수 호출: 함수는 호출할 때 실행됩니다 (Page 31)</h4>
        <pre class="code-block">int value = 1;

void SetValue()
{
    value = 3;
}</pre>
        <div class="callout-box" style="margin-top: 10px;">
          • <b>호출 전</b>: 함수를 선언했어도 <b>value는 아직 1입니다.</b><br>
          • <b>SetValue 호출 후</b>: 함수 안의 대입이 실행되어 <b>value는 3입니다.</b><br>
          • <b>🚨 [시험 함정] 다시 호출할 때도 같은 대입이 실행됩니다. 값을 더하는 코드가 아니므로 6이 되지는 않습니다! (그대로 3 유지)</b>
        </div>
      </div>

      <!-- 4-7. 매개변수 vs 인수 & 반환값 (Page 32~33) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--accent);">4-7. 매개변수 vs 인수, 그리고 반환값(return) (Page 32~33)</h4>
        <pre class="code-block">void PrintNumber(int number) { Debug.Log(number); }
int Add(int a, int b) { return a + b; }

int result = Add(2, 3); // result에 5가 대입됨</pre>
        <table class="concept-table" style="margin: 10px 0;">
          <thead>
            <tr>
              <th style="width: 30%;">구분</th>
              <th>교안 공식 의미</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>매개변수 / int number</b></td>
              <td>함수가 값을 전달받을 자리</td>
            </tr>
            <tr>
              <td><b>인수 / 3</b></td>
              <td><code>PrintNumber(3)</code>을 호출할 때 전달하는 값</td>
            </tr>
            <tr>
              <td><b>int Add(...)</b></td>
              <td><code>int</code> 값을 반환하는 함수</td>
            </tr>
            <tr>
              <td><b>void PrintNumber(...)</b></td>
              <td>반환값이 없는 함수</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box">
          • <code>return 값;</code>은 값을 돌려주고 함수를 끝냅니다. <code>void</code> 함수의 <code>return;</code>은 값 없이 함수를 끝냅니다.<br>
          • (ref, out과 참조 타입의 전달 방식은 다루지 않음)
        </div>
      </div>

      <!-- 4-8. [추적 5] bool 조건과 return 중복 처리 (Page 34) -->
      <div class="concept-card">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: var(--tag-danger-ink);">📌 [코드 추적 5 — 시험 출제 1순위] bool 조건과 return의 역할 (Page 34)</h4>
        <pre class="code-block">bool processed = false;
int count = 4;

void Process()
{
    if (processed) return;
    count += 2;
    processed = true;
}</pre>
        <div class="callout-box warning" style="margin-top: 10px;">
          • <b>두 번 호출하면?</b><br>
          &nbsp;&nbsp;👉 <b>첫 호출</b>: <code>processed</code>는 <code>false</code>이므로 <code>count</code>에 2를 더하고 <code>processed</code>를 <code>true</code>로 바꿉니다. <b>count는 6입니다.</b><br>
          &nbsp;&nbsp;👉 <b>두 번째 호출</b>: <code>processed</code>는 <code>true</code>이므로 <code>return</code>에서 끝납니다. <b>count는 6을 유지합니다!</b><br>
          • <b>필드 값은 함수가 끝나도 다음 호출에 남아 있다고 가정합니다.</b>
        </div>
      </div>
    </section>
  `
};

// 2. 게임프로그래밍 실전 모의고사 (교안 35p 100% 밀착 3회분 100점 체제)
window.EXAM_DATABASE.gameprog = {
  id: "gameprog",
  title: "게임프로그래밍",
  totalQuestions: 20,
  maxScore: 100,
  exams: [
    // [제1회] 전범위 표준 실전 모의고사 (20문항 / 100점)
    {
      id: "gp_exam1",
      name: "제1회 게임프로그래밍 중간고사 전범위 표준 모의고사",
      tag: "객관식 5 + 단답 10 + 계산추적 3 + 서술 2 (총 20문항 100점)",
      desc: "교안 35페이지 100% 밀착: 기본 구성, Transform, 컴포넌트, 생명주기, 시간 이동, 2D 물리·충돌, 입력, 애니메이션, 카메라, UI, C# 5대 코드 흐름",
      questions: [
        // [객관식 5문항: 각 5점 = 25점]
        {
          id: 1, type: "choice", score: 5, origin: "교안 3p 기본 구성",
          text: "Unity 기본 구성과 에디터에 대한 설명 중 가장 옳지 않은 것은?",
          options: [
            "A. 오브젝트의 이름만으로 기능이 정해지는 것은 아니며, 붙어 있는 컴포넌트와 코드를 보아야 한다.",
            "B. 하나의 GameObject에는 여러 컴포넌트가 함께 있을 수 있으며 각자의 기능을 처리한다.",
            "C. Hierarchy 창은 씬의 오브젝트와 계층 관계를 보여 주고 Inspector 창은 선택한 대상의 설정을 보여 준다.",
            "D. SpriteRenderer 컴포넌트를 비활성화하여 그림이 안 보이면 Rigidbody2D의 물리 동작도 즉시 영구 정지된다."
          ],
          answer: "D",
          answers: ["D", "d", "4"],
          explanation: "교안 7페이지 명시: 그림이 보이지 않아도(SpriteRenderer 비활성화) 물리 동작은 계속될 수 있습니다."
        },
        {
          id: 2, type: "choice", score: 5, origin: "교안 4~6p Transform과 계층",
          text: "Transform과 계층(부모-자식)에 대한 설명으로 올바른 것은?",
          options: [
            "A. Scale 크기를 줄이면 Position 값이 비례하여 자동으로 줄어든다.",
            "B. 부모 Transform을 이동·회전하면 자식도 부모의 변화에 영향을 받는다.",
            "C. 자식의 그림만 회전하면 부모에 붙은 충돌 영역도 함께 회전한다.",
            "D. localPosition은 월드 원점 (0,0,0)을 기준으로 측정한 위치이다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "교안 6페이지 명시: 부모를 이동·회전하면 자식도 부모의 변화에 영향을 받습니다. 자식의 그림만 회전하면 부모의 충돌 영역은 함께 회전하지 않습니다."
        },
        {
          id: 3, type: "choice", score: 5, origin: "교안 12p 실행 함수",
          text: "MonoBehaviour 실행 함수에 대한 설명 중 옳지 않은 것은?",
          options: [
            "A. Awake는 인스턴스 초기화 때 참조와 내부 값을 준비한다.",
            "B. Start는 활성 스크립트의 첫 Update 전에 한 번 실행된다.",
            "C. Update는 활성화된 동안 매 프레임 실행된다.",
            "D. FixedUpdate는 매 화면 프레임마다 실행되므로 Update와 실행 횟수가 항상 같다."
          ],
          answer: "D",
          answers: ["D", "d", "4"],
          explanation: "교안 12페이지 명시: Update는 화면 프레임마다, FixedUpdate는 물리 시간 간격에 맞춰 실행되므로 FixedUpdate의 실행 횟수와 화면 프레임 수가 항상 같지는 않습니다."
        },
        {
          id: 4, type: "choice", score: 5, origin: "교안 15~16p 접촉과 통과",
          text: "Collider와 Trigger 및 2D 충돌 이벤트에 대한 설명으로 올바른 것은?",
          options: [
            "A. 통과시키려고 Collider를 없애면 접촉을 감지할 영역도 사라진다.",
            "B. 점수 구간이나 도착 영역 통과 감지에는 Is Trigger를 해제한 일반 Collider를 쓴다.",
            "C. Trigger 이벤트를 받으려면 두 오브젝트 모두에 Rigidbody2D가 반드시 있어야 한다.",
            "D. 물리적으로 부딪히는 충돌 접촉 시 호출되는 함수는 OnTriggerEnter2D이다."
          ],
          answer: "A",
          answers: ["A", "a", "1"],
          explanation: "교안 15~16페이지 명시: 통과시키려고 Collider를 없애면 감지할 영역도 사라집니다. 통과 감지 시에는 Is Trigger를 켜야 하며, Trigger 이벤트는 최소 한쪽에 Rigidbody2D가 필요합니다."
        },
        {
          id: 5, type: "choice", score: 5, origin: "교안 21~23p 카메라 & 리팩토링",
          text: "카메라 설정과 리팩토링에 대한 설명 중 옳은 것은?",
          options: [
            "A. Orthographic 카메라에서 Size를 키우면 물체는 화면에서 더 크게 보인다.",
            "B. Orthographic Size는 직교 카메라가 보는 세로 범위의 2배를 의미한다.",
            "C. 코드를 읽기 쉽게 정리(리팩토링)했다고 해서 실행 속도까지 빨라지는 것은 아니다.",
            "D. 리팩토링의 주된 목적은 실행 시간이나 메모리 비용을 줄이는 것이다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "교안 23페이지 명시: 코드를 읽기 쉽게 정리했다고 실행 속도까지 빨라지는 것은 아닙니다 (성능 비용 절감은 '최적화'의 목적). 또한 Orthographic Size를 키우면 더 넓은 영역이 들어오므로 물체는 화면에서 더 작게 보입니다."
        },

        // [단답형 10문항: 각 5점 = 50점]
        {
          id: 6, type: "short", score: 5, origin: "교안 8p 컴포넌트 참조",
          text: "같은 GameObject에 이미 붙어 있는 컴포넌트를 스크립트에서 가져올 때 사용하는 함수명은? (없으면 null 반환)",
          placeholder: "함수명 입력 (예: GetComponent)",
          answers: ["GetComponent", "GetComponent()", "getcomponent", "getcomponent()"],
          explanation: "교안 8p: GetComponent는 이미 붙어 있는 컴포넌트를 가져오며, 해당 컴포넌트가 없으면 null을 반환합니다."
        },
        {
          id: 7, type: "short", score: 5, origin: "교안 13p 시간 이동",
          text: "프레임 수에 관계없이 속도에 비례하여 1초 이동 거리를 일정하게 맞추기 위해 곱해주는 '지난 시간' 프로퍼티는?",
          placeholder: "프로퍼티 입력 (예: Time.deltaTime)",
          answers: ["Time.deltaTime", "deltaTime", "time.deltatime", "deltatime"],
          explanation: "교안 13p: transform.position += Vector3.right * speed * Time.deltaTime; 속도에 지난 시간을 곱해 이동량을 구합니다."
        },
        {
          id: 8, type: "short", score: 5, origin: "교안 14p 2D 물리",
          text: "Dynamic Rigidbody2D에서 중력이 아래로 작용할 때 아래쪽 가속을 키우기 위해 높여주는 설정값 명칭은?",
          placeholder: "설정 명칭 입력 (예: Gravity Scale)",
          answers: ["Gravity Scale", "gravityScale", "gravity scale", "그래비티 스케일", "그래비티스케일"],
          explanation: "교안 14p: Gravity Scale은 중력의 영향을 조절하며, 값을 높이면 아래쪽 가속이 커집니다."
        },
        {
          id: 9, type: "short", score: 5, origin: "교안 15p 통과 감지",
          text: "물리적으로 막지 않고 점수 구간이나 도착 영역에서 오브젝트가 지나가는지 감지하기 위해 Collider에서 사용하는 속성은?",
          placeholder: "속성 명칭 입력 (예: Is Trigger)",
          answers: ["Is Trigger", "isTrigger", "is trigger", "istrigger", "트리거"],
          explanation: "교안 15p: 통과를 감지하는 영역에는 Collider의 Is Trigger를 사용합니다."
        },
        {
          id: 10, type: "short", score: 5, origin: "교안 16p 충돌 이벤트",
          text: "Is Trigger가 켜진 영역에 오브젝트가 처음 들어갈 때 호출되는 2D 이벤트 함수명은?",
          placeholder: "함수명 입력 (예: OnTriggerEnter2D)",
          answers: ["OnTriggerEnter2D", "OnTriggerEnter2D()", "ontriggerenter2d"],
          explanation: "교안 16p: 처음 접촉할 때는 OnCollisionEnter2D, Trigger 영역에 들어갈 때는 OnTriggerEnter2D를 사용합니다."
        },
        {
          id: 11, type: "short", score: 5, origin: "교안 11p Prefab 인스턴스",
          text: "Prefab 에셋 원본을 바탕으로 씬에 새로운 실제 객체(인스턴스)를 생성할 때 호출하는 함수는?",
          placeholder: "함수명 입력 (예: Instantiate)",
          answers: ["Instantiate", "Instantiate()", "instantiate", "인스턴시에이트"],
          explanation: "교안 11p: Prefab을 Instantiate하면 새 객체가 생깁니다. Instantiate는 기존 객체를 검색하는 기능이 아닙니다."
        },
        {
          id: 12, type: "short", score: 5, origin: "교안 24p 오브젝트 풀",
          text: "생성과 삭제가 반복될 때 드는 비용을 줄이기 위해 인스턴스를 비활성화해 보관했다가 다시 사용하는 방식은?",
          placeholder: "방식 명칭 입력 (예: 오브젝트 풀)",
          answers: ["오브젝트 풀", "오브젝트 풀링", "오브젝트풀", "오브젝트풀링", "Object Pool", "object pool", "Object Pooling"],
          explanation: "교안 24p: 오브젝트 풀은 인스턴스를 보관했다가 다시 사용하는 방식입니다."
        },
        {
          id: 13, type: "short", score: 5, origin: "교안 19p 애니메이션",
          text: "같은 Animation Clip을 끝난 뒤 계속 반복 재생할지 여부를 결정하는 Clip 에셋의 설정 명칭은?",
          placeholder: "설정 명칭 입력 (예: Loop Time)",
          answers: ["Loop Time", "loopTime", "loop time", "루프 타임", "루프타임"],
          explanation: "교안 19p: 같은 Clip을 반복 재생할지는 Clip의 Loop Time 설정으로 정합니다."
        },
        {
          id: 14, type: "short", score: 5, origin: "교안 22p UI 이벤트",
          text: "UI 버튼을 클릭했을 때 등록된 대상의 함수를 호출하도록 연결하는 이벤트 이름은?",
          placeholder: "이벤트 명칭 입력 (예: On Click)",
          answers: ["On Click", "OnClick", "on click", "온클릭"],
          explanation: "교안 22p: Button의 On Click 이벤트는 등록된 대상의 함수를 호출합니다."
        },
        {
          id: 15, type: "short", score: 5, origin: "교안 32p C# 매개변수",
          text: "함수 선언 <code>void PrintNumber(int number)</code>에서 값을 전달받을 자리를 무엇이라 부르는가?",
          placeholder: "용어 입력 (예: 매개변수)",
          answers: ["매개변수", "parameter", "파라미터"],
          explanation: "교안 32p: 매개변수는 함수가 값을 전달받을 자리이며, 호출 시 전달하는 실제 값(3 등)은 인수입니다."
        },

        // [코드 계산 및 추적 3문항: 각 5점 = 15점]
        {
          id: 16, type: "calc", score: 5, origin: "교안 26p [추적 1] C# 대입",
          text: "다음 C# 코드가 순서대로 실행되었을 때, 최종 변수 <code>number</code>의 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int number = 3;\nnumber += 4;\nnumber = 2;\nnumber++;</pre>",
          placeholder: "숫자만 입력",
          answers: ["3"],
          explanation: "교안 26p: 1) 처음 값은 3, 2) 4를 더해 7, 3) 2를 대입하면 7을 버리고 2가 됨, 4) 1을 더해 최종 값은 3입니다."
        },
        {
          id: 17, type: "calc", score: 5, origin: "교안 30p [추적 3] C# for 반복",
          text: "다음 C# for 루프가 종료된 후, 최종 변수 <code>total</code>의 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int total = 0;\nfor (int i = 0; i &lt; 4; i++)\n{\n    total += 2;\n}</pre>",
          placeholder: "숫자만 입력",
          answers: ["8"],
          explanation: "교안 30p: i = 0(total=2), 1(4), 2(6), 3(8). i가 4가 되면 조건(4<4)이 거짓이어서 반복이 끝납니다. 반복 횟수는 4번, total은 8입니다."
        },
        {
          id: 18, type: "calc", score: 5, origin: "교안 34p [추적 5] bool과 중복 처리",
          text: "다음 C# 코드에서 <code>Process()</code> 함수를 연속으로 '두 번' 호출했을 때, 최종 <code>count</code> 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>bool processed = false;\nint count = 4;\n\nvoid Process()\n{\n    if (processed) return;\n    count += 2;\n    processed = true;\n}</pre>",
          placeholder: "숫자만 입력",
          answers: ["6"],
          explanation: "교안 34p: 첫 호출에서는 false이므로 count에 2를 더해 6이 되고 processed=true가 됩니다. 두 번째 호출에서는 true이므로 return에서 끝납니다. count는 6을 유지합니다."
        },

        // [서술형 2문항: 각 5점 = 10점]
        {
          id: 19, type: "essay", score: 5, origin: "교안 10p 재사용 상태 비활성화",
          text: "Unity에서 <code>gameObject.SetActive(false)</code>를 실행했을 때와 <code>spriteRenderer.enabled = false</code>를 실행했을 때의 동작 차이를 각각 서술하시오.",
          sampleAnswer: "gameObject.SetActive(false)는 해당 오브젝트와 그 아래 자식의 모든 활성 동작을 완전히 중지시킵니다. 반면 spriteRenderer.enabled = false는 그림 표시만 중지할 뿐이며, 동일 오브젝트에 붙은 Rigidbody2D 등의 물리 연산이나 다른 컴포넌트는 계속해서 정상 동작할 수 있습니다.",
          explanation: "채점 기준: 1) SetActive(false)가 오브젝트와 자식의 활성 동작을 모두 중지함을 명시 (2.5점), 2) enabled=false는 그림 표시만 중지하고 타 컴포넌트 물리 동작 등은 계속 유지됨을 명시 (2.5점)."
        },
        {
          id: 20, type: "essay", score: 5, origin: "교안 17p Action과 Binding",
          text: "Unity Input System에서 하나의 Input Action에 여러 Binding(예: 키보드 키, 게임패드 버튼)을 연결할 때 얻을 수 있는 가장 중요한 이점을 서술하시오.",
          sampleAnswer: "키보드나 게임패드 등 서로 다른 입력 장치에서 같은 행동을 요청할 수 있게 되며, 장치별로 게임 동작 코드를 중복해서 작성하지 않고 하나의 실행 함수로 연결하여 관리할 수 있습니다.",
          explanation: "채점 기준: 1) 각 장치 입력으로 같은 행동을 요청할 수 있음을 설명 (2.5점), 2) 장치별로 게임 동작 코드를 중복 작성하지 않아도 됨을 설명 (2.5점)."
        }
      ]
    },

    // [제2회] C# 5대 코드 흐름 추적 & 교안 함정 정복 모의고사 (20문항 / 100점)
    {
      id: "gp_exam2",
      name: "제2회 C# 5대 코드 흐름 추적 & 교안 함정 정복 모의고사",
      tag: "객관식 5 + 단답 10 + 계산추적 3 + 서술 2 (총 20문항 100점)",
      desc: "교안 핵심 코드 추적 5대 유형(대입, if, for, 함수 호출, bool 중복 방지)과 교안 속 단골 오답 함정 집중 훈련",
      questions: [
        // [객관식 5문항: 각 5점 = 25점]
        {
          id: 1, type: "choice", score: 5, origin: "교안 18p 입력 타이밍",
          text: "키보드 키를 누른 상태로 손을 떼지 않고 계속 꾹 유지하고 있을 때의 동작으로 올바른 것은?",
          options: [
            "A. '누른 순간' 감지 방식을 사용하면 손을 떼지 않아도 매 프레임 연속 실행된다.",
            "B. '누른 순간' 감지 방식을 사용하면 키를 계속 누르고 있어도 새로 누르기 전까지 반복 실행하지 않는다.",
            "C. '누르고 있는 동안' 확인 방식을 사용하면 단 1회만 실행되고 즉시 멈춘다.",
            "D. '누른 순간'과 '누르고 있는 동안'은 내부 동작과 사용 목적이 완전히 같다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "교안 18페이지 명시: 누른 순간을 감지하면 키를 계속 누르고 있어도 새로 누르기 전까지 반복 실행하지 않습니다 (점프에 적합)."
        },
        {
          id: 2, type: "choice", score: 5, origin: "교안 20p Animator 상태 전환",
          text: "Animator의 상태 전환(Transition)과 Parameter에 대한 설명으로 옳은 것은?",
          options: [
            "A. State는 한 상태에서 다른 상태로 넘어가는 연결선을 뜻한다.",
            "B. animator.SetBool('IsMoving', true)에서 'IsMoving'은 유니티 엔진이 고정한 예약어이므로 사용자가 임의로 이름을 바꿀 수 없다.",
            "C. Controller에 Parameter와 전환 조건이 정의되어 있어야 코드에서 값을 바꾸었을 때 상태가 전환된다.",
            "D. Transition 조건이 충족되어도 State는 절대 전환되지 않는다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "교안 20페이지 명시: IsMoving은 직접 정한 이름입니다. Controller에 Parameter와 전환 조건이 정의되어 있어야 Idle에서 Move 등으로 전환됩니다."
        },
        {
          id: 3, type: "choice", score: 5, origin: "교안 21p 카메라 투영",
          text: "카메라 Projection 설정에 대한 설명 중 옳은 것을 고르시오.",
          options: [
            "A. Orthographic 카메라는 물체가 멀어질수록 화면에 더 작게 보인다.",
            "B. Perspective 카메라는 같은 물체는 거리가 달라도 같은 크기로 보인다.",
            "C. Orthographic Size를 키우면 화면에 보이는 물체는 상대적으로 더 작게 보인다.",
            "D. Orthographic Size를 줄이면 더 넓은 영역이 들어오므로 물체는 더 작게 보인다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "교안 21페이지 명시: 같은 화면 비율에서 Size를 키우면 더 넓은 영역이 들어오므로 물체는 화면에서 작게 보입니다. (원근감은 Perspective, 거리에 상관없이 같은 크기는 Orthographic)"
        },
        {
          id: 4, type: "choice", score: 5, origin: "교안 27~28p C# 연산자",
          text: "다음 C# 조건식 중 최종 평가 결과가 'true'인 것은? (단, a = true, b = false)",
          options: [
            "A. 3 > 5",
            "B. a && b",
            "C. !a",
            "D. (3 <= 3) && (a || b)"
          ],
          answer: "D",
          answers: ["D", "d", "4"],
          explanation: "교안 27~28p: 3 <= 3은 true이고, a || b(true || false)는 true입니다. true && true는 true입니다."
        },
        {
          id: 5, type: "choice", score: 5, origin: "교안 23p 리팩토링 기법",
          text: "리팩토링의 핵심 기법에 대한 교안 설명으로 올바른 것은?",
          options: [
            "A. 책임 분리는 같은 처리나 규칙을 여러 곳에서 따로 수정하도록 코드를 복사하는 일이다.",
            "B. 중복 제거는 서로 다른 역할의 코드를 한데 뭉쳐 클래스를 거대하게 만드는 작업이다.",
            "C. 책임 분리는 서로 다른 역할의 코드를 구분해 수정 범위를 줄이는 것이다.",
            "D. 리팩토링을 마치면 프로그램의 외부 동작 결과 자체가 크게 바뀐다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "교안 23페이지 명시: 리팩토링은 외부 동작을 유지하면서 내부 구조를 개선하는 것이며, 책임 분리는 서로 다른 역할의 코드를 구분해 수정 범위를 줄이는 것입니다."
        },

        // [단답형 10문항: 각 5점 = 50점]
        {
          id: 6, type: "short", score: 5, origin: "교안 4p Transform 좌표축",
          text: "Unity 기본 월드 좌표계에서 '좌우'를 나타내는 축과 '위아래'를 나타내는 축은 각각 무엇인가?",
          placeholder: "축 입력 (예: X, Y)",
          answers: ["X, Y", "X축, Y축", "x, y", "X,Y", "x축, y축"],
          explanation: "교안 4p: 기본 월드 좌표에서 X는 좌우, Y는 위아래, Z는 앞뒤 축입니다."
        },
        {
          id: 7, type: "short", score: 5, origin: "교안 5p 좌표와 거리",
          text: "같은 축에서 위치 1과 위치 5의 차이는 4이고 반대로 빼면 -4이다. 두 위치 사이의 '거리' 값은 얼마인가?",
          placeholder: "숫자만 입력",
          answers: ["4"],
          explanation: "교안 5p: 같은 축에서 위치 1과 5의 차이는 4입니다. 반대로 빼면 -4지만 두 위치 사이의 거리는 같습니다 (4)."
        },
        {
          id: 8, type: "short", score: 5, origin: "교안 6p 로컬 좌표",
          text: "월드 원점을 기준으로 한 위치가 position일 때, 부모 Transform을 기준으로 한 위치를 무엇이라 부르는가?",
          placeholder: "영문 프로퍼티 입력 (예: localPosition)",
          answers: ["localPosition", "localposition", "로컬 좌표", "로컬좌표"],
          explanation: "교안 6p: localPosition은 부모를 기준으로 한 위치이고 position은 월드 좌표의 위치입니다."
        },
        {
          id: 9, type: "short", score: 5, origin: "교안 9p null 멤버 접근",
          text: "<code>body = GetComponent&lt;Rigidbody2D&gt;();</code> 실행 후 body가 null인데 멤버에 접근하면 무엇이 발생하는가?",
          placeholder: "결과 입력 (예: 오류)",
          answers: ["오류", "에러", "error", "예외", "NullReferenceException"],
          explanation: "교안 9p: 대상 없이 멤버에 접근하면 오류가 날 수 있습니다."
        },
        {
          id: 10, type: "short", score: 5, origin: "교안 10p 필드 초기화",
          text: "오브젝트를 비활성화 후 다시 사용할 때 이전 값이 남지 않도록 변수에 시작 값을 직접 대입해 주는 작업을 무엇이라 하는가?",
          placeholder: "용어 입력 (예: 필드 초기화)",
          answers: ["필드 초기화", "필드초기화", "변수 초기화", "초기화"],
          explanation: "교안 10p: 필드 초기화는 변수에 시작 값을 직접 대입하는 작업입니다."
        },
        {
          id: 11, type: "short", score: 5, origin: "교안 17p Action과 Binding",
          text: "Unity Input System에서 '게임에서 받을 행동이나 값(예: 점프)'을 정의하는 항목의 명칭은?",
          placeholder: "항목 명칭 입력 (예: Input Action)",
          answers: ["Input Action", "input action", "Action", "액션", "인풋 액션"],
          explanation: "교안 17p: Input Action은 게임에서 받을 행동이나 값이며, Binding은 그 행동에 연결할 키·버튼 입력입니다."
        },
        {
          id: 12, type: "short", score: 5, origin: "교안 21p Orthographic Size",
          text: "2D 직교 카메라(Orthographic)가 보는 '세로 범위의 절반'을 뜻하는 카메라 설정 속성의 명칭은?",
          placeholder: "속성 명칭 입력 (예: Orthographic Size)",
          answers: ["Orthographic Size", "orthographic size", "OrthographicSize", "Size"],
          explanation: "교안 21p: Orthographic Size는 직교 카메라가 보는 세로 범위의 절반입니다."
        },
        {
          id: 13, type: "short", score: 5, origin: "교안 22p Canvas",
          text: "Unity에서 UI 요소를 그리는 기준이 되는 최상위 UI 컴포넌트는?",
          placeholder: "컴포넌트 명칭 입력 (예: Canvas)",
          answers: ["Canvas", "canvas", "캔버스"],
          explanation: "교안 22p: Canvas는 UI를 그리는 기준이며, UI는 Canvas 아래에 구성합니다."
        },
        {
          id: 14, type: "short", score: 5, origin: "교안 24p 오브젝트 풀",
          text: "오브젝트 풀에서 기존 인스턴스를 파괴(Destroy)하지 않고 보관했다가 다시 사용하기 위해 변경하는 상태는?",
          placeholder: "상태 입력 (예: 비활성화)",
          answers: ["비활성화", "비활성화 후 재사용", "SetActive(false)"],
          explanation: "교안 24p: 비활성화 후 재사용 - 기존 인스턴스를 보관했다가 다시 사용합니다."
        },
        {
          id: 15, type: "short", score: 5, origin: "교안 33p 반환값",
          text: "C#에서 결과 값을 호출한 쪽에 돌려주지 않는(반환값이 없는) 함수를 선언할 때 지정하는 반환 타입 키워드는?",
          placeholder: "키워드 입력 (예: void)",
          answers: ["void", "보이드"],
          explanation: "교안 33p: void PrintNumber(...)는 반환값이 없는 함수입니다."
        },

        // [코드 계산 및 추적 3문항: 각 5점 = 15점]
        {
          id: 16, type: "calc", score: 5, origin: "교안 29p [추적 2] C# if 조건문",
          text: "다음 C# 코드가 실행된 후 최종 <code>highest</code> 변수에 저장된 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int value = 9;\nint highest = 12;\nif (value &gt; highest)\n    highest = value;\n\nvalue = 15;\nif (value &gt; highest)\n    highest = value;</pre>",
          placeholder: "숫자만 입력",
          answers: ["15"],
          explanation: "교안 29p: 1차 비교: 9 > 12는 거짓이므로 대입 안 함 (12 유지). 2차 비교: value가 15로 바뀜. 15 > 12는 참이므로 highest에 15 대입. 최종 highest = 15."
        },
        {
          id: 17, type: "calc", score: 5, origin: "교안 31p [추적 4] C# 함수 호출 시점",
          text: "다음 C# 코드에서 <code>SetValue()</code>를 호출하기 '전'의 value 값과, <code>SetValue()</code>를 두 번 연속 호출한 '후'의 value 값을 쉼표로 쓰시오. (예: 1, 3)<br><pre class='code-block' style='margin-top:8px;'>int value = 1;\n\nvoid SetValue()\n{\n    value = 3;\n}</pre>",
          placeholder: "예: 1, 3",
          answers: ["1, 3", "1,3", "1 / 3"],
          explanation: "교안 31p: 호출 전에는 1입니다. SetValue 호출 후에는 3입니다. 다시 호출할 때도 같은 대입이 실행되므로 더해지지 않고 그대로 3입니다."
        },
        {
          id: 18, type: "calc", score: 5, origin: "교안 33p C# 반환값 계산",
          text: "다음 C# 코드 실행 후 변수 <code>result</code>에 대입되는 최종 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int Add(int a, int b)\n{\n    return a + b;\n}\n\nint result = Add(2, 3);</pre>",
          placeholder: "숫자만 입력",
          answers: ["5"],
          explanation: "교안 33p: int result = Add(2, 3);에서 반환한 5가 result에 대입됩니다."
        },

        // [서술형 2문항: 각 5점 = 10점]
        {
          id: 19, type: "essay", score: 5, origin: "교안 13p Time.deltaTime 필요성",
          text: "Update() 함수에서 오브젝트를 이동시킬 때 고정 거리를 더하지 않고 <code>Time.deltaTime</code>(지난 시간)을 곱해주는 이유를 프레임 수 관점에서 서술하시오.",
          sampleAnswer: "프레임마다 고정 거리를 더하면 낮은 프레임 기기보다 높은 프레임 기기에서 1초 동안 실행 횟수가 많아져 1초 이동 거리가 기기마다 달라집니다. 지난 시간(Time.deltaTime)을 곱해주면 프레임 간격에 맞춰 이동량이 보정되므로 프레임 수와 무관하게 1초 이동 거리를 일정하게 유지할 수 있습니다.",
          explanation: "채점 기준: 1) 고정 거리를 더하면 프레임 수에 따라 1초 이동 거리가 달라짐을 명시 (2.5점), 2) 지난 시간을 곱해 프레임 수에 무관하게 일정 거리를 이동함을 명시 (2.5점)."
        },
        {
          id: 20, type: "essay", score: 5, origin: "교안 15p Collider와 Is Trigger",
          text: "물리적으로 통과시키면서 접촉 여부를 감지하려고 할 때, Collider를 완전히 삭제하지 않고 <code>Collider의 Is Trigger</code>를 사용하는 이유를 서술하시오.",
          sampleAnswer: "통과시키려고 Collider 컴포넌트를 아예 없애버리면 접촉이나 통과를 감지할 영역 자체도 함께 사라지기 때문입니다. 따라서 영역을 유지하면서 물리적 저지 없이 통과를 감지하려면 Collider를 유지한 채 Is Trigger를 활성화해야 합니다.",
          explanation: "채점 기준: 1) Collider를 없애면 감지할 영역 자체가 사라짐을 설명 (2.5점), 2) Collider를 둔 상태에서 Is Trigger를 켜야 통과 감지가 가능함을 설명 (2.5점)."
        }
      ]
    },

    // [제3회] 교안 1초 단답 & 핵심 키워드 파이널 모의고사 (20문항 / 100점)
    {
      id: "gp_exam3",
      name: "제3회 교안 1초 단답 & 핵심 용어 파이널 모의고사",
      tag: "객관식 5 + 단답 10 + 코드추적 3 + 서술 2 (총 20문항 100점)",
      desc: "시험 직전 교안 35페이지 전수 표(Table)와 핵심 키워드, C# 기본 타입/연산자 1초 컷 스피드 점검",
      questions: [
        // [객관식 5문항: 각 5점 = 25점]
        {
          id: 1, type: "choice", score: 5, origin: "교안 25p 변수와 타입",
          text: "C# 기본 타입과 보관할 값의 연결이 바르게 짝지어진 것은?",
          options: [
            "A. int - 참 또는 거짓",
            "B. float - 문자열",
            "C. bool - 참 또는 거짓",
            "D. string - 정수"
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "교안 25페이지 명시: int는 정수, float는 실수, bool은 참 또는 거짓, string은 문자열입니다."
        },
        {
          id: 2, type: "choice", score: 5, origin: "교안 27p 대입 vs 비교",
          text: "C# 대입문과 비교식에 대한 설명으로 옳은 것은?",
          options: [
            "A. value = 3; 은 값이 3인지 비교하는 식이다.",
            "B. value == 3 은 값을 3으로 바꾸는 문장이다.",
            "C. value == 3 의 비교 결과는 bool 타입이다.",
            "D. 대입 연산자 = 의 연산 결과는 항상 true이다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "교안 27페이지 명시: value = 3;은 값을 바꾸는 문장이며, value == 3은 값이 3인지 비교하는 식이고 비교 결과는 bool입니다."
        },
        {
          id: 3, type: "choice", score: 5, origin: "교안 28p 논리 연산자",
          text: "C# 논리 연산자 &&와 ||의 평가 방식에 대한 설명으로 옳은 것은?",
          options: [
            "A. &&와 ||는 왼쪽 결과만으로 판단할 수 있어도 무조건 오른쪽 식을 끝까지 평가한다.",
            "B. &&와 ||는 왼쪽 결과만으로 판단할 수 있으면 오른쪽 식을 평가하지 않는다.",
            "C. ! 연산자는 두 조건이 모두 참일 때만 참을 반환한다.",
            "D. value > 0 && value < 10 은 value가 0보다 작거나 10보다 클 때 참이다."
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "교안 28페이지 명시: &&와 ||는 왼쪽 결과만으로 판단할 수 있으면 오른쪽 식을 평가하지 않습니다 (단락 평가)."
        },
        {
          id: 4, type: "choice", score: 5, origin: "교안 11p Prefab과 인스턴스",
          text: "Prefab 에셋과 씬의 인스턴스에 대한 설명으로 가장 옳지 않은 것은?",
          options: [
            "A. Prefab 에셋은 반복 사용할 오브젝트의 구성을 보관하고 컴포넌트와 설정을 함께 묶는다.",
            "B. 씬의 인스턴스는 원본을 바탕으로 만들어진 실제 객체이며 위치와 상태를 따로 가진다.",
            "C. Instantiate는 씬 안에 이미 배치되어 있는 기존 객체를 검색하는 기능이다.",
            "D. Prefab 원본을 Instantiate하면 새로운 인스턴스가 씬에 생성된다."
          ],
          answer: "C",
          answers: ["C", "c", "3"],
          explanation: "교안 11페이지 명시: Instantiate는 기존 객체를 검색하는 기능이 아닙니다 (새 인스턴스를 만드는 기능)."
        },
        {
          id: 5, type: "choice", score: 5, origin: "교안 22p UI RectTransform",
          text: "UI 컴포넌트의 위치와 크기, 앵커 등을 관리하는 UI 전용 Transform 컴포넌트의 명칭은?",
          options: [
            "A. Transform",
            "B. RectTransform",
            "C. CanvasRenderer",
            "D. BoxCollider2D"
          ],
          answer: "B",
          answers: ["B", "b", "2"],
          explanation: "교안 22페이지 명시: RectTransform은 UI 요소의 위치와 크기, 앵커 등을 관리합니다."
        },

        // [단답형 10문항: 각 5점 = 50점]
        {
          id: 6, type: "short", score: 5, origin: "교안 3p Scene",
          text: "Unity에서 오브젝트를 배치하고 구성해 둔 가상 공간을 일컫는 기본 구성 명칭은?",
          placeholder: "영문 명칭 입력 (예: Scene)",
          answers: ["Scene", "scene", "씬"],
          explanation: "교안 3p: Scene - 오브젝트를 배치하고 구성해 둔 공간."
        },
        {
          id: 7, type: "short", score: 5, origin: "교안 4p Vector3",
          text: "X(좌우), Y(위아래), Z(앞뒤) 세 축의 값을 함께 표현하는 Unity 벡터 구조체 타입은?",
          placeholder: "타입 입력 (예: Vector3)",
          answers: ["Vector3", "vector3", "벡터3"],
          explanation: "교안 4p: Vector3는 세 축(X, Y, Z)의 값을 함께 표현합니다."
        },
        {
          id: 8, type: "short", score: 5, origin: "교안 7p SpriteRenderer",
          text: "2D 스프라이트 그림을 화면에 표시하는 역할을 맡는 컴포넌트의 명칭은?",
          placeholder: "컴포넌트명 입력 (예: SpriteRenderer)",
          answers: ["SpriteRenderer", "spriterenderer", "스프라이트 렌더러", "스프라이트렌더러"],
          explanation: "교안 7p: SpriteRenderer - 2D 스프라이트 표시. 설정을 바꾸면 그림의 표시 여부가 달라짐."
        },
        {
          id: 9, type: "short", score: 5, origin: "교안 8p null",
          text: "GetComponent로 컴포넌트를 찾지 못했을 때 대상이 없음을 나타내며 반환되는 키워드는?",
          placeholder: "키워드 입력 (예: null)",
          answers: ["null", "널"],
          explanation: "교안 8p: 해당 컴포넌트가 없으면 null을 반환합니다."
        },
        {
          id: 10, type: "short", score: 5, origin: "교안 10p SetActive",
          text: "오브젝트와 그 아래 자식의 활성 동작을 한 번에 모두 중지시킬 때 호출하는 메서드는?",
          placeholder: "메서드 호출 형태 입력 (예: gameObject.SetActive(false))",
          answers: ["gameObject.SetActive(false)", "SetActive(false)", "SetActive", "setactive"],
          explanation: "교안 10p: gameObject.SetActive(false) - 오브젝트와 그 아래 자식의 활성 동작을 중지."
        },
        {
          id: 11, type: "short", score: 5, origin: "교안 12p FixedUpdate",
          text: "화면 프레임이 아닌 물리 업데이트의 일정한 시간 간격으로 실행되는 생명주기 함수명은?",
          placeholder: "함수명 입력 (예: FixedUpdate)",
          answers: ["FixedUpdate", "FixedUpdate()", "fixedupdate"],
          explanation: "교안 12p: FixedUpdate - 물리 업데이트의 일정한 시간 간격으로 실행."
        },
        {
          id: 12, type: "short", score: 5, origin: "교안 19p Animator Controller",
          text: "애니메이션에서 상태(State)와 상태 사이의 전환(Transition)을 정의한 에셋의 명칭은?",
          placeholder: "에셋 명칭 입력 (예: Animator Controller)",
          answers: ["Animator Controller", "animator controller", "애니메이터 컨트롤러", "애니메이터컨트롤러"],
          explanation: "교안 19p: Animator Controller - 상태와 상태 사이의 전환을 정의한 에셋."
        },
        {
          id: 13, type: "short", score: 5, origin: "교안 20p Parameter",
          text: "Animator Controller에서 상태 전환 조건 등에 사용하기 위해 등록하는 값(예: bool IsMoving)은?",
          placeholder: "명칭 입력 (예: Parameter)",
          answers: ["Parameter", "parameter", "파라미터", "매개변수"],
          explanation: "교안 20p: Parameter - 전환 조건 등에 사용하는 값."
        },
        {
          id: 14, type: "short", score: 5, origin: "교안 23p 최적화",
          text: "외부 동작을 유지하며 구조를 개선하는 '리팩토링'과 달리, 실행 시간이나 메모리 등의 비용을 줄이는 작업은?",
          placeholder: "작업 명칭 입력 (예: 최적화)",
          answers: ["최적화", "Optimization", "optimization"],
          explanation: "교안 23p: 최적화 - 실행 시간이나 메모리 등의 비용을 줄임."
        },
        {
          id: 15, type: "short", score: 5, origin: "교안 33p return",
          text: "C# 함수에서 값을 돌려주고 함수를 끝내거나, void 함수에서 값 없이 즉시 함수를 끝낼 때 사용하는 키워드는?",
          placeholder: "키워드 입력 (예: return)",
          answers: ["return", "리턴"],
          explanation: "교안 33p: return 값;은 값을 돌려주고 함수를 끝냅니다. void 함수의 return;은 값 없이 함수를 끝냅니다."
        },

        // [코드 계산 및 추적 3문항: 각 5점 = 15점]
        {
          id: 16, type: "calc", score: 5, origin: "교안 26p C# 복합 대입",
          text: "다음 C# 코드에서 2단계인 <code>number += 4;</code>가 실행된 직후 변수 <code>number</code>의 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>int number = 3;\nnumber += 4;\nnumber = 2;\nnumber++;</pre>",
          placeholder: "숫자만 입력",
          answers: ["7"],
          explanation: "교안 26p: 처음 값 3에 4를 더하므로 2단계 직후 값은 7입니다. (3단계에서 2를 대입하면 2가 되고, 최종 값은 3이 됨)"
        },
        {
          id: 17, type: "calc", score: 5, origin: "교안 30p C# for 루프 횟수",
          text: "다음 C# for 루프문에서 본문(<code>total += 2;</code>)이 실제로 반복 실행되는 '총 횟수'는 몇 번인가?<br><pre class='code-block' style='margin-top:8px;'>int total = 0;\nfor (int i = 0; i &lt; 4; i++)\n{\n    total += 2;\n}</pre>",
          placeholder: "숫자만 입력 (예: 4)",
          answers: ["4", "4번", "4회"],
          explanation: "교안 30p: i = 0, 1, 2, 3으로 총 4번 반복 실행되고, i가 4가 되면 조건(4<4)이 거짓이어서 끝납니다."
        },
        {
          id: 18, type: "calc", score: 5, origin: "교안 34p bool 가드 1회차",
          text: "다음 C# 코드에서 <code>Process()</code> 함수를 '딱 한 번(1회)' 호출했을 때, 최종 <code>count</code> 값은 얼마인가?<br><pre class='code-block' style='margin-top:8px;'>bool processed = false;\nint count = 4;\n\nvoid Process()\n{\n    if (processed) return;\n    count += 2;\n    processed = true;\n}</pre>",
          placeholder: "숫자만 입력",
          answers: ["6"],
          explanation: "교안 34p: 1회차 호출 시에는 processed가 false이므로 if문을 지나쳐 count += 2 (4 + 2 = 6)가 실행됩니다."
        },

        // [서술형 2문항: 각 5점 = 10점]
        {
          id: 19, type: "essay", score: 5, origin: "교안 23p 리팩토링과 속도",
          text: "코드를 읽기 쉽게 정리(리팩토링)했다고 해서 실행 속도까지 반드시 빨라지는 것은 아닌 이유를 설명하고, 성능 개선 여부를 어떻게 확인해야 하는지 서술하시오.",
          sampleAnswer: "리팩토링은 외부 동작을 변경하지 않고 코드의 가독성과 유지보수 구조(책임 분리, 중복 제거)를 개선하는 작업이지 성능 비용을 줄이는 최적화가 아니기 때문입니다. 따라서 성능이 실제로 나아졌는지는 추측이 아닌 프로파일러 등을 통한 '측정'으로 확인해야 합니다.",
          explanation: "채점 기준: 1) 리팩토링은 구조 개선 목적이지 속도를 줄이는 최적화가 아님을 서술 (2.5점), 2) 성능 향상 여부는 '측정'으로 확인해야 함을 명시 (2.5점)."
        },
        {
          id: 20, type: "essay", score: 5, origin: "교안 24p 오브젝트 풀링 핵심",
          text: "게임에서 총알이나 적 오브젝트를 관리할 때 Instantiate와 Destroy를 반복하지 않고 오브젝트 풀 방식을 사용하는 이유와 핵심 원리를 서술하시오.",
          sampleAnswer: "객체의 생성(Instantiate)과 삭제(Destroy)가 빈번하게 반복되면 메모리 할당 및 가비지 컬렉션으로 인한 성능 비용이 크게 발생하기 때문입니다. 핵심 원리는 객체를 삭제하는 대신 비활성화(SetActive(false)) 상태로 보관했다가, 필요할 때 활성화하여 같은 객체를 반복 재사용하는 데 있습니다.",
          explanation: "채점 기준: 1) 생성과 삭제 반복 시 발생하는 성능 비용을 줄이기 위함임을 설명 (2.5점), 2) 삭제 대신 비활성화 보관 후 같은 객체를 반복 재사용하는 원리를 명시 (2.5점)."
        }
      ]
    }
  ]
};
