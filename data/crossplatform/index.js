// ========================================================
// 📱 [CROSSPLATFORM EXAM MODULE LOADER]
// 3주차 ~ 7주차 전수 교안 문제 모듈 통합 등록
// ========================================================
window.CROSSPLATFORM_WEEKS = window.CROSSPLATFORM_WEEKS || {};
window.EXAM_DATABASE = window.EXAM_DATABASE || {};
window.EXAM_DATABASE.crossplatform = window.EXAM_DATABASE.crossplatform || {
  id: "crossplatform",
  title: "크로스플랫폼 프로그래밍",
  maxScore: 100,
  exams: []
};

// 주차별 모듈을 exams 배열의 최우선 순위로 조립 등록
(function() {
  const weeks = window.CROSSPLATFORM_WEEKS;
  const newExams = [];

  // 1. ALL 53제 올마스터
  if (weeks.all53) newExams.push(weeks.all53);
  // 2. 3주차
  if (weeks.week3) newExams.push(weeks.week3);
  // 3. 4주차
  if (weeks.week4) newExams.push(weeks.week4);
  // 4. 5주차
  if (weeks.week5) newExams.push(weeks.week5);
  // 5. 6주차
  if (weeks.week6) newExams.push(weeks.week6);
  // 6. 7주차
  if (weeks.week7) newExams.push(weeks.week7);

  // 기존 모의고사(1~4회) 보존 및 결합
  const existing = window.EXAM_DATABASE.crossplatform.exams || [];
  const existingFiltered = existing.filter(e => !e.id.startsWith("cp_week") && e.id !== "cp_all53");

  window.EXAM_DATABASE.crossplatform.exams = [...newExams, ...existingFiltered];
  console.log("✅ [CrossPlatform] 53개 전수 문제 모듈 로드 완료. 총 회차 수:", window.EXAM_DATABASE.crossplatform.exams.length);
})();
