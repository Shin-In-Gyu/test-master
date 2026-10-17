// ========================================================
// EXAM MASTER DOSSIER - Core Application Logic Engine
// Supports dynamic subjects, diverse question types, live grading,
// 7-min timer, quiz masking, and multi-faceted search.
// ========================================================

// Global State
let currentSubject = "crossplatform";
let currentMode = "concept"; // "concept" | "exam"
let currentExamIndex = 0;
let userAnswers = {}; // { qKey: answerVal }
let shortScores = {}; // { qKey: score }
let essayScores = {}; // { qKey: score }
let bookmarkedQuestions = new Set();
let timerSeconds = 7 * 60; // 7분
let timerInterval = null;
let isTimerRunning = false;
let currentFontSize = 16;

// ========================================================
// 1. 앱 초기화
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("dossier_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) themeBtn.textContent = savedTheme === "dark" ? "DARK" : "LIGHT";

  const sel = document.getElementById("subjectSelect");
  if (sel && sel.value && sel.value !== "__add__") {
    currentSubject = sel.value;
  }
  loadBookmarks();
  switchMainMode("concept");
});

// 과목 변경
function changeSubject(subKey) {
  if (subKey === "__add__") {
    document.getElementById("addSubjectModal").style.display = "flex";
    const sel = document.getElementById("subjectSelect");
    if (sel) sel.value = currentSubject;
    return;
  }
  currentSubject = subKey;
  currentExamIndex = 0;
  isWrongNotesMode = false;
  userAnswers = {};
  shortScores = {};
  essayScores = {};
  updateSubjectView();
  resetTimer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const title = window.CONCEPT_DATABASE[subKey]?.title || subKey;
  showToast(`[과목 변경] ${title}로 전환되었습니다.`);

  // Sync dossier folder tabs & selector
  document.querySelectorAll(".dossier-tab").forEach(tab => {
    if (tab.dataset.subject === subKey) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  const sel = document.getElementById("subjectSelect");
  if (sel && sel.value !== subKey) sel.value = subKey;
}

function cleanTasteString(str) {
  if (!str) return "";
  return str
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}]/gu, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function cleanTasteHtml(html) {
  if (!html) return "";
  return html
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}]/gu, '')
    .replace(/class="q-icon"/g, 'class="q-num-tag"')
    .replace(/font-size:\s*(?:[0-9]|1[0-2])(?:\.\d+)?px/gi, 'font-size: 14px')
    .replace(/font-size:\s*(?:[0-9]|1[0-2])(?:\.\d+)?pt/gi, 'font-size: 14px');
}

// 과목 전체 뷰 갱신
function updateSubjectView() {
  const conceptData = window.CONCEPT_DATABASE[currentSubject];
  const examData = window.EXAM_DATABASE[currentSubject];

  // 배너 텍스트 갱신 (요소가 존재하는 경우만 안전하게 처리)
  const heroTitleEl = document.getElementById("heroTitle");
  if (heroTitleEl) {
    if (currentMode === "concept") {
      heroTitleEl.textContent = cleanTasteString(conceptData?.title || "개념 총정리");
    } else {
      const currentExam = examData?.exams[currentExamIndex];
      heroTitleEl.textContent = currentExam ? cleanTasteString(currentExam.name) : "실전 모의고사";
    }
  }

  // 1. 개념 뷰 렌더링
  renderConceptFilterBar();
  renderConceptContent();

  // 2. 모의고사 뷰 렌더링
  renderExamTabs();
  renderCurrentExam();
  updateProgressAndScore();
}

// 메인 모드 전환 (개념 총정리 vs 실전 모의고사)
function switchMainMode(mode) {
  currentMode = mode;
  const conceptSec = document.getElementById("conceptViewSection");
  const examSec = document.getElementById("examViewSection");
  const btnConcept = document.getElementById("modeBtnConcept");
  const btnExam = document.getElementById("modeBtnExam");
  const bottomBar = document.getElementById("bottomBar");
  const chapterBar = document.getElementById("conceptFilterBar");
  const examFilterBar = document.getElementById("examFilterBar");

  if (mode === "concept") {
    conceptSec.style.display = "block";
    examSec.style.display = "none";
    btnConcept.classList.add("active");
    btnExam.classList.remove("active");
    bottomBar.style.display = "none";
    if (chapterBar) chapterBar.style.display = "flex";
    if (examFilterBar) examFilterBar.style.display = "none";
    showToast("[개념 총정리] 뷰로 전환되었습니다.");
  } else {
    isWrongNotesMode = false;
    conceptSec.style.display = "none";
    examSec.style.display = "block";
    btnConcept.classList.remove("active");
    btnExam.classList.add("active");
    bottomBar.style.display = "flex";
    if (chapterBar) chapterBar.style.display = "none";
    if (examFilterBar) examFilterBar.style.display = "flex";
    showToast("[실전 모의고사] 뷰로 전환되었습니다.");
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateSubjectView();
}

// ========================================================
// 2. 개념 총정리 렌더링 및 인터랙션
// ========================================================
function renderConceptFilterBar() {
  const bar = document.getElementById("conceptFilterBar");
  const data = window.CONCEPT_DATABASE[currentSubject];
  if (!bar) return;
  if (!data || !data.filterChips) {
    bar.innerHTML = "";
    bar.style.display = "none";
    return;
  }

  let optionsHtml = "";
  data.filterChips.forEach((chip) => {
    optionsHtml += `<option value="${chip.id}">${cleanTasteString(chip.label)}</option>`;
  });

  bar.innerHTML = `
    <div class="chapter-select-box">
      <span class="chapter-select-tag">단원 선택</span>
      <select id="conceptChapterSelect" class="chapter-select" onchange="filterConceptSection(this.value)">
        ${optionsHtml}
      </select>
    </div>
  `;
  bar.style.display = currentMode === "concept" ? "flex" : "none";
}

function renderConceptContent() {
  const container = document.getElementById("conceptContainer");
  const data = window.CONCEPT_DATABASE[currentSubject];
  if (!data || !data.html) {
    container.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--ink-muted);">해당 과목의 개념 총정리가 준비 중입니다.</div>`;
    return;
  }
  container.innerHTML = cleanTasteHtml(data.html);
}

function filterConceptSection(sectionId) {
  const select = document.getElementById("conceptChapterSelect");
  if (select && select.value !== sectionId) {
    select.value = sectionId;
  }

  const sections = document.querySelectorAll(".concept-section");
  if (sectionId === "all") {
    sections.forEach(s => s.style.display = "block");
  } else {
    sections.forEach(s => {
      if (s.id === sectionId) {
        s.style.display = "block";
      } else {
        s.style.display = "none";
      }
    });
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// 원클릭 복사 기능 (시각적 피드백 강화)
function copyText(text, btn) {
  const el = btn || (window.event ? window.event.currentTarget || window.event.target : null);
  const feedback = () => {
    showToast("클립보드에 복사되었습니다: " + text);
    if (el && el.tagName === "BUTTON") {
      const prevText = el.textContent;
      el.textContent = "복사완료";
      el.style.backgroundColor = "var(--accent)";
      el.style.color = "var(--accent-ink)";
      setTimeout(() => {
        el.textContent = prevText;
        el.style.backgroundColor = "";
        el.style.color = "";
      }, 1200);
    }
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(feedback).catch(() => {
      fallbackCopy(text);
      feedback();
    });
  } else {
    fallbackCopy(text);
    feedback();
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch(e) {
    prompt("복사할 텍스트입니다 (Ctrl+C를 누르세요):", text);
  }
  document.body.removeChild(ta);
}

// 자가 테스트 (정답 가리기) 토글
function toggleQuizMode() {
  const isActive = document.body.classList.toggle("quiz-mode-active");
  const btn = document.getElementById("quizModeBtn");
  const label = document.getElementById("quizBtnLabel");

  if (isActive) {
    btn.classList.add("active");
    label.textContent = "퀴즈 풀이 중";
    showToast("자가 테스트 모드 활성화 (정답 카드를 누르면 정답이 보입니다)");
  } else {
    btn.classList.remove("active");
    label.textContent = "자가 테스트";
    document.querySelectorAll(".qa-a.revealed").forEach(el => el.classList.remove("revealed"));
    showToast("정답 가리기가 해제되었습니다.");
  }
}

document.addEventListener("click", (e) => {
  if (!document.body.classList.contains("quiz-mode-active")) return;
  const qaA = e.target.closest(".qa-a");
  if (qaA && !e.target.closest(".copy-btn")) {
    qaA.classList.toggle("revealed");
  }
});

let isWrongNotesMode = false;

// ========================================================
// 3. 실전 모의고사 렌더링 및 채점 로직
// ========================================================
function renderExamFilterBar() {
  const bar = document.getElementById("examFilterBar");
  const subjectData = window.EXAM_DATABASE[currentSubject];
  if (!bar) return;
  if (!subjectData || !subjectData.exams || subjectData.exams.length === 0) {
    bar.innerHTML = "";
    bar.style.display = "none";
    return;
  }

  let optionsHtml = "";
  subjectData.exams.forEach((exam, idx) => {
    const isSelected = (!isWrongNotesMode && idx === currentExamIndex) ? "selected" : "";
    optionsHtml += `<option value="${idx}" ${isSelected}>${cleanTasteString(exam.name)}</option>`;
  });
  const wrongSelected = isWrongNotesMode ? "selected" : "";
  optionsHtml += `<option value="wrong" ${wrongSelected}>오답 집중 모아보기</option>`;

  bar.innerHTML = `
    <div class="chapter-select-box">
      <span class="chapter-select-tag">회차 선택</span>
      <select id="examChapterSelect" class="chapter-select" onchange="handleExamSelect(this.value)">
        ${optionsHtml}
      </select>
    </div>
  `;
  bar.style.display = currentMode === "exam" ? "flex" : "none";
}

function handleExamSelect(val) {
  if (val === "wrong") {
    showWrongNotes();
  } else {
    switchExam(parseInt(val, 10));
  }
}

function toggleWrongNotesView() {
  if (isWrongNotesMode) {
    switchExam(currentExamIndex);
  } else {
    showWrongNotes();
  }
}

function renderExamTabs() {
  renderExamFilterBar();

  const container = document.getElementById("examTabsContainer");
  const subjectData = window.EXAM_DATABASE[currentSubject];
  if (!container) return;
  if (!subjectData || !subjectData.exams || subjectData.exams.length === 0) {
    container.innerHTML = "";
    return;
  }

  const exam = subjectData.exams[currentExamIndex];
  if (!exam) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <div class="exam-active-header">
      <div class="exam-active-info">
        <span class="exam-active-title">${isWrongNotesMode ? '[오답 집중] 틀린 문제 모아보기' : cleanTasteString(exam.name)}</span>
        <span class="badge ${isWrongNotesMode ? 'badge-accent' : 'badge-amber'}" style="font-size:12.5px;">
          ${isWrongNotesMode ? '오답(0점) 문제 필터링' : cleanTasteString(exam.tag)}
        </span>
      </div>
      <div class="exam-active-actions">
        <button class="exam-header-btn ${isWrongNotesMode ? 'active' : ''}" id="wrongTabBtn" onclick="toggleWrongNotesView()">
          <span>${isWrongNotesMode ? '전체 문제 보기' : '오답 집중 모아보기'}</span>
        </button>
      </div>
    </div>
  `;
}

function switchExam(idx) {
  isWrongNotesMode = false;
  currentExamIndex = idx;
  const examSel = document.getElementById("examChapterSelect");
  if (examSel && examSel.value !== String(idx)) {
    examSel.value = String(idx);
  }
  renderExamTabs();
  renderCurrentExam();
  updateProgressAndScore();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCurrentExam() {
  const subjectData = window.EXAM_DATABASE[currentSubject];
  const exam = subjectData?.exams[currentExamIndex];
  const container = document.getElementById("questionsContainer");
  if (!exam) {
    container.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-muted);">해당 과목의 모의고사가 준비 중입니다.</div>`;
    return;
  }

  document.getElementById("totalQuestionsDisplay").textContent = exam.questions.length;

  let html = "";
  exam.questions.forEach((q) => {
    const qKey = `${exam.id}_${q.id}`;
    const savedAns = userAnswers[qKey] || "";
    const isBookmarked = bookmarkedQuestions.has(qKey);

    let typeBadge = "단답";
    if (q.type === "choice") typeBadge = "객관식";
    else if (q.type === "calc") typeBadge = "계산형";
    else if (q.type === "essay") typeBadge = "서술형";

    html += `
      <div class="q-card" id="card_${qKey}">
        <div class="q-header">
          <div class="q-title-group">
            <span class="q-num">[문제 ${q.id}]</span>
            <span class="q-points">${typeBadge} ${q.score}점</span>
            <span class="q-origin">${q.origin}</span>
          </div>
          <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${qKey}')" title="중요 문제 북마크">
            ${isBookmarked ? '북마크됨' : '북마크'}
          </button>
        </div>

        <div class="q-text">${q.text.split(/(<pre[\s\S]*?<\/pre>)/gi).map(part => /^<pre/i.test(part) ? part : part.replace(/\n/g, '<br>')).join('')}</div>
    `;

    // 1) 객관식 (Choice)
    if (q.type === "choice") {
      html += `<div class="choice-list">`;
      q.options.forEach((opt) => {
        const optLetter = opt.trim().charAt(0);
        const isSelected = (savedAns === optLetter || savedAns === opt);
        html += `
          <div class="choice-item ${isSelected ? 'selected' : ''}" onclick="selectChoice('${exam.id}', ${q.id}, '${optLetter}', this)">
            <input type="radio" name="radio_${qKey}" value="${optLetter}" ${isSelected ? 'checked' : ''} style="pointer-events:none;">
            <span>${opt}</span>
          </div>
        `;
      });
      html += `</div>`;
    }

    // 2) 단답형 & 계산형 (Short / Calc)
    else if (q.type === "short" || q.type === "calc") {
      html += `
        <div class="short-answer-group">
          <input type="text" id="input_${qKey}" class="short-input" placeholder="답안을 입력하세요 (작성 후 Enter 또는 채점 버튼)" value="${savedAns}" onkeydown="if(event.key==='Enter') gradeQuestion('${exam.id}', ${q.id})">
          <button class="btn btn-primary" onclick="gradeQuestion('${exam.id}', ${q.id})">채점하기</button>
        </div>
      `;
    }

    // 3) 서술형 (Essay)
    else if (q.type === "essay") {
      html += `
        <div class="essay-group">
          <textarea id="input_${qKey}" class="essay-textarea" placeholder="핵심 키워드를 포함하여 서술 답안을 작성해보세요." oninput="userAnswers['${qKey}']=this.value">${savedAns}</textarea>
          <div class="self-score-row">
            <span style="font-weight: 700; font-size: 14px; color: var(--text-secondary);">채점 기준표 확인 후 자가 점수 부여:</span>
            <div style="display:flex; gap: 6px;">
              <button class="score-chip ${essayScores[qKey]===0 ? 'active':''}" onclick="setEssayScore('${exam.id}', ${q.id}, 0)">0점</button>
              <button class="score-chip ${essayScores[qKey]===Math.round(q.score/2) ? 'active':''}" onclick="setEssayScore('${exam.id}', ${q.id}, ${Math.round(q.score/2)})">부분점수 (${Math.round(q.score/2)}점)</button>
              <button class="score-chip ${essayScores[qKey]===q.score ? 'active':''}" onclick="setEssayScore('${exam.id}', ${q.id}, ${q.score})">만점 (${q.score}점)</button>
            </div>
          </div>
        </div>
      `;
    }

    // 정답 및 해설 토글 박스
    html += `
      <div style="margin-top: 14px; display: flex; justify-content: flex-end;">
        <button class="solution-toggle-btn" onclick="toggleSolution('${qKey}')">
          해설 및 모범답안 보기
        </button>
      </div>

      <div class="solution-box" id="sol_${qKey}">
        <div><span class="sol-correct-ans">정답: ${q.answers ? q.answers.map(a => String(a).replace(/</g, '&lt;').replace(/>/g, '&gt;')).join(' / ') : (q.answer || '모범 답안 참조')}</span></div>
        <div style="color: var(--text-secondary); margin-top: 6px;">${(q.explanation || '').split(/(<pre[\s\S]*?<\/pre>)/gi).map(part => /^<pre/i.test(part) ? part : part.replace(/\n/g, '<br>')).join('')}</div>
    `;

    if (q.sampleAnswer) {
      html += `
        <div style="margin-top: 10px; padding: 12px; background: var(--bg-surface-elevated); border-radius: 6px;">
          <div style="font-weight: 800; color: var(--accent); margin-bottom: 4px;">모범 답안 예시:</div>
          <div style="font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${q.sampleAnswer}</div>
        </div>
      `;
    }

    if (q.rubric) {
      if (Array.isArray(q.rubric) && q.rubric.length > 0) {
        html += `
          <div style="font-weight: 800; font-size: 14px; margin-top: 10px; color: var(--tag-gold);">교수님 채점 기준표 (루브릭):</div>
          <table class="rubric-table">
            <thead><tr><th>평가 항목 (Criteria)</th><th style="width: 120px;">배점 / 기준</th></tr></thead>
            <tbody>
        `;
        q.rubric.forEach(r => {
          const itemText = r.criteria || r.item || "";
          const pointsText = r.points || r.desc || "";
          html += `<tr><td>${itemText}</td><td><b>${pointsText}</b></td></tr>`;
        });
        html += `</tbody></table>`;
      } else if (typeof q.rubric === "string" && q.rubric.trim().length > 0) {
        html += `
          <div style="font-weight: 800; font-size: 14px; margin-top: 10px; color: var(--tag-gold);">교수님 채점 기준표 (루브릭):</div>
          <div style="margin-top: 6px; padding: 10px 12px; background: var(--bg-surface-elevated); border-radius: 6px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: var(--ink);">
            ${q.rubric}
          </div>
        `;
      }
    }

    html += `</div></div>`;
  });

  container.innerHTML = html;

  // 서술형 기본 점수 세팅
  exam.questions.forEach((q) => {
    if (q.type === "essay") {
      const qKey = `${exam.id}_${q.id}`;
      if (essayScores[qKey] === undefined) {
        essayScores[qKey] = q.score;
      }
    }
  });
}

// 텍스트 정규화 (공백, 특수문자, 대소문자 제거)
function normalizeText(str) {
  if (!str) return "";
  return str.toLowerCase().replace(/[\s()_\-+,'"]/g, "").trim();
}

// 객관식 보기 선택
function selectChoice(examId, qId, choiceLetter, itemEl) {
  const qKey = `${examId}_${qId}`;
  userAnswers[qKey] = choiceLetter;

  const card = document.getElementById(`card_${qKey}`);
  card.querySelectorAll(".choice-item").forEach(el => el.classList.remove("selected"));
  itemEl.classList.add("selected");
  const radio = itemEl.querySelector("input[type='radio']");
  if (radio) radio.checked = true;

  // 자동 채점 실행
  gradeQuestion(examId, qId);
}

// 단답형, 객관식, 계산형 통합 채점
function gradeQuestion(examId, qId) {
  const subjectData = window.EXAM_DATABASE[currentSubject];
  const exam = subjectData.exams.find(e => e.id === examId) || subjectData.exams[currentExamIndex];
  const q = exam.questions.find(item => item.id === qId);
  const qKey = `${examId}_${qId}`;
  const cardEl = document.getElementById(`card_${qKey}`);

  let val = "";
  if (q.type === "choice") {
    val = userAnswers[qKey] || "";
  } else {
    const inputEl = document.getElementById(`input_${qKey}`);
    val = inputEl ? inputEl.value : (userAnswers[qKey] || "");
  }

  const normVal = normalizeText(val);
  if (!normVal) {
    showToast(`${qId}번 답안을 먼저 작성해주세요.`);
    return;
  }

  let validKeys = [];
  if (q.answers) {
    validKeys = q.answers.map(k => normalizeText(k));
  } else if (q.answer) {
    validKeys = [normalizeText(q.answer)];
  }

  const isCorrect = validKeys.some(k => normVal === k || normVal.includes(k) || k.includes(normVal));

  if (isCorrect) {
    shortScores[qKey] = q.score;
    cardEl.classList.add("correct");
    cardEl.classList.remove("wrong");
    showToast(`[문제 ${qId}] 정답입니다! (+${q.score}점)`);
  } else {
    shortScores[qKey] = 0;
    cardEl.classList.add("wrong");
    cardEl.classList.remove("correct");
    showToast(`[문제 ${qId}] 오답입니다. 해설을 확인해보세요.`);
  }

  updateProgressAndScore();
}

function setEssayScore(examId, qId, scoreVal) {
  const qKey = `${examId}_${qId}`;
  essayScores[qKey] = scoreVal;

  const cardEl = document.getElementById(`card_${qKey}`);
  cardEl.querySelectorAll(".score-chip").forEach(chip => chip.classList.remove("active"));
  event.target.classList.add("active");

  updateProgressAndScore();
  showToast(`[서술형 ${qId}번] ${scoreVal}점 반영되었습니다.`);
}

// 실시간 진행도 및 점수 계산
function updateProgressAndScore() {
  const subjectData = window.EXAM_DATABASE[currentSubject];
  const exam = subjectData?.exams[currentExamIndex];
  if (!exam) return;

  let totalScore = 0;
  let answeredCount = 0;

  exam.questions.forEach((q) => {
    const qKey = `${exam.id}_${q.id}`;
    if (q.type === "essay") {
      if (essayScores[qKey] !== undefined) {
        totalScore += essayScores[qKey];
        if (userAnswers[qKey]) answeredCount++;
      }
    } else {
      if (shortScores[qKey] !== undefined) {
        totalScore += shortScores[qKey];
        answeredCount++;
      }
    }
  });

  const totalQuestions = exam.questions.length;
  document.getElementById("currentScoreDisplay").textContent = totalScore;
  document.getElementById("answeredCountDisplay").textContent = answeredCount;

  const percent = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;
  document.getElementById("progressBarFill").style.width = `${percent}%`;
}

// 전체 일괄 채점
function gradeAllQuestions() {
  const exam = window.EXAM_DATABASE[currentSubject].exams[currentExamIndex];
  let correctCount = 0;
  let totalGradeable = 0;

  exam.questions.forEach((q) => {
    const qKey = `${exam.id}_${q.id}`;
    if (q.type === "choice" || q.type === "short" || q.type === "calc") {
      totalGradeable++;
      gradeQuestion(exam.id, q.id);
      if (shortScores[qKey] > 0) correctCount++;
    }
  });

  showToast(`채점 완료! 총 ${totalGradeable}문항 중 ${correctCount}개 정답`);
}

function toggleSolution(qKey) {
  const sol = document.getElementById(`sol_${qKey}`);
  if (sol) sol.classList.toggle("show");
}

function toggleAllSolutions() {
  const sols = document.querySelectorAll(".solution-box");
  const anyHidden = Array.from(sols).some(s => !s.classList.contains("show"));
  sols.forEach(s => {
    if (anyHidden) s.classList.add("show");
    else s.classList.remove("show");
  });
  showToast(anyHidden ? "모든 해설을 열었습니다." : "해설을 모두 닫았습니다.");
}

// 현재 회차 초기화
function resetCurrentExam() {
  if (!confirm("현재 회차의 작성 답안과 채점 결과를 모두 초기화하시겠습니까?")) return;
  const exam = window.EXAM_DATABASE[currentSubject].exams[currentExamIndex];
  exam.questions.forEach((q) => {
    const qKey = `${exam.id}_${q.id}`;
    delete userAnswers[qKey];
    delete shortScores[qKey];
    delete essayScores[qKey];
  });
  renderCurrentExam();
  updateProgressAndScore();
  showToast("현재 회차가 초기화되었습니다.");
}

// 틀린 문제 모아보기
function showWrongNotes() {
  const exam = window.EXAM_DATABASE[currentSubject]?.exams[currentExamIndex];
  if (!exam) return;
  let wrongCount = 0;

  exam.questions.forEach(q => {
    const qKey = `${exam.id}_${q.id}`;
    const card = document.getElementById(`card_${qKey}`);
    if (q.type !== "essay") {
      const isWrong = shortScores[qKey] === 0;
      if (card) {
        card.style.display = isWrong ? "block" : "none";
        if (isWrong) wrongCount++;
      }
    }
  });

  isWrongNotesMode = true;
  renderExamTabs();
  const examSel = document.getElementById("examChapterSelect");
  if (examSel) examSel.value = "wrong";

  if (wrongCount === 0) {
    showToast("현재 오답으로 채점된 문제가 없습니다. (전체 채점을 먼저 눌러보세요)");
  } else {
    showToast(`틀린 문제 ${wrongCount}개를 모았습니다.`);
  }
}

// 북마크
function toggleBookmark(qKey) {
  if (bookmarkedQuestions.has(qKey)) {
    bookmarkedQuestions.delete(qKey);
    showToast("북마크가 해제되었습니다.");
  } else {
    bookmarkedQuestions.add(qKey);
    showToast("중요 문제로 북마크되었습니다.");
  }
  saveBookmarks();
  renderCurrentExam();
}

function saveBookmarks() {
  try {
    localStorage.setItem("exam_bookmarks", JSON.stringify([...bookmarkedQuestions]));
  } catch(e){}
}

function loadBookmarks() {
  try {
    const saved = localStorage.getItem("exam_bookmarks");
    if (saved) bookmarkedQuestions = new Set(JSON.parse(saved));
  } catch(e){}
}

// ========================================================
// 4. 오픈북 실전 타이머
// ========================================================
function toggleTimer() {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    document.getElementById("timerToggleBtn").textContent = "시작";
    showToast("타이머가 일시정지되었습니다.");
  } else {
    isTimerRunning = true;
    document.getElementById("timerToggleBtn").textContent = "정지";
    showToast("7분 오픈북 타이머 시작!");
    timerInterval = setInterval(() => {
      timerSeconds--;
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        document.getElementById("timerToggleBtn").textContent = "종료";
        alert("[7분 종료] 시험 오픈북 열람 제한 시간이 종료되었습니다!");
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerSeconds = 7 * 60;
  document.getElementById("timerToggleBtn").textContent = "시작";
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const s = String(timerSeconds % 60).padStart(2, "0");
  const el = document.getElementById("timerDisplay");
  if (el) el.textContent = `${m}:${s}`;
}

// ========================================================
// 5. 통합 검색 기능
// ========================================================
function handleGlobalSearch(keyword) {
  const q = keyword.trim().toLowerCase();
  const clearBtn = document.getElementById("searchClearBtn");
  clearBtn.style.display = q ? "block" : "none";

  if (!q) {
    const chSelect = document.getElementById("conceptChapterSelect");
    if (chSelect && chSelect.value && chSelect.value !== "all") {
      filterConceptSection(chSelect.value);
    } else {
      document.querySelectorAll(".concept-card, .qa-card, .q-card, .concept-section").forEach(el => {
        el.style.display = "";
      });
    }
    return;
  }

  document.querySelectorAll(".qa-card").forEach(card => {
    const text = card.textContent.toLowerCase();
    const tags = (card.getAttribute("data-tags") || "").toLowerCase();
    card.style.display = (text.includes(q) || tags.includes(q)) ? "flex" : "none";
  });

  document.querySelectorAll(".concept-card").forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(q) ? "block" : "none";
  });

  document.querySelectorAll(".concept-section").forEach(sec => {
    const text = sec.textContent.toLowerCase();
    sec.style.display = text.includes(q) ? "block" : "none";
  });

  document.querySelectorAll(".q-card").forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(q) ? "block" : "none";
  });
}

function clearSearch() {
  const input = document.getElementById("globalSearchInput");
  input.value = "";
  handleGlobalSearch("");
}

// ========================================================
// 6. 글자 크기, 테마, 모달
// ========================================================
function changeFontSize(delta) {
  currentFontSize = Math.min(22, Math.max(14, currentFontSize + delta));
  document.documentElement.style.setProperty("--base-font-size", `${currentFontSize}px`);
  showToast(`글자 크기: ${currentFontSize}px`);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) themeBtn.textContent = next === "dark" ? "DARK" : "LIGHT";
  localStorage.setItem("dossier_theme", next);
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.style.display = "block";
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    el.style.display = "none";
  }, 2200);
}

function closeModal() {
  document.getElementById("addSubjectModal").style.display = "none";
}
