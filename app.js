const STORAGE_KEY = "tsa-hard-mode-progress-v310";

let state = {
  answeredCorrect: [],
  reviewWrong: [],
  history: []
};

let currentSession = [];
let currentIndex = 0;
let currentMode = "quiz";
let sessionResults = [];
let oralSession = [];
let oralIndex = 0;
let oralFlipped = false;

const screens = {
  home: document.getElementById("home-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
  stats: document.getElementById("stats-screen"),
  oral: document.getElementById("oral-screen"),
  modules: document.getElementById("modules-screen")
};

const els = {
  totalQuestions: document.getElementById("total-questions"),
  correctCount: document.getElementById("correct-count"),
  reviewCount: document.getElementById("review-count"),
  availableCount: document.getElementById("available-count"),
  filterSummary: document.getElementById("filter-summary"),

  start10Btn: document.getElementById("start-10-btn"),
  start20Btn: document.getElementById("start-20-btn"),
  reviewBtn: document.getElementById("review-btn"),
  statsBtn: document.getElementById("stats-btn"),
  resetBtn: document.getElementById("reset-btn"),
  modulesBtn: document.getElementById("modules-btn"),

  backHomeBtn: document.getElementById("back-home-btn"),
  quizProgress: document.getElementById("quiz-progress"),
  questionSource: document.getElementById("question-source"),
  questionChapter: document.getElementById("question-chapter"),
  questionTheme: document.getElementById("question-theme"),
  questionDifficulty: document.getElementById("question-difficulty"),
  questionText: document.getElementById("question-text"),
  answers: document.getElementById("answers"),

  feedback: document.getElementById("feedback"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackComment: document.getElementById("feedback-comment"),
  goldPhrase: document.getElementById("gold-phrase"),

  nextBtn: document.getElementById("next-btn"),
  finishBtn: document.getElementById("finish-btn"),

  resultScore: document.getElementById("result-score"),
  resultPercent: document.getElementById("result-percent"),
  resultMessage: document.getElementById("result-message"),
  new10Btn: document.getElementById("new-10-btn"),
  new20Btn: document.getElementById("new-20-btn"),
  resultReviewBtn: document.getElementById("result-review-btn"),
  resultStatsBtn: document.getElementById("result-stats-btn"),
  resultHomeBtn: document.getElementById("result-home-btn"),

  statsBackBtn: document.getElementById("stats-back-btn"),
  overallStats: document.getElementById("overall-stats"),
  areaStats: document.getElementById("area-stats"),
  difficultyStats: document.getElementById("difficulty-stats"),
  weakAreaStats: document.getElementById("weak-area-stats"),

  modulesBackBtn: document.getElementById("modules-back-btn"),
  modulesList: document.getElementById("modules-list"),
  moduleDetail: document.getElementById("module-detail"),

  oralBtn: document.getElementById("oral-btn"),
  oralBackBtn: document.getElementById("oral-back-btn"),
  oralProgress: document.getElementById("oral-progress"),
  oralArea: document.getElementById("oral-area"),
  oralDifficulty: document.getElementById("oral-difficulty"),
  oralCard: document.getElementById("oral-card"),
  oralTitle: document.getElementById("oral-title"),
  oralCase: document.getElementById("oral-case"),
  oralQuestion: document.getElementById("oral-question"),
  oralAnswer: document.getElementById("oral-answer"),
  oralRequired: document.getElementById("oral-required"),
  oralErrors: document.getElementById("oral-errors"),
  oralDeepening: document.getElementById("oral-deepening"),
  oralGold: document.getElementById("oral-gold"),
  oralPrevBtn: document.getElementById("oral-prev-btn"),
  oralFlipBtn: document.getElementById("oral-flip-btn"),
  oralNextBtn: document.getElementById("oral-next-btn"),
  oralShuffleBtn: document.getElementById("oral-shuffle-btn")
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function ensureQuestions() {
  if (!Array.isArray(window.QUESTIONS) && typeof QUESTIONS === "undefined") {
    alert("Banco de questões não encontrado. Verifique se questions.js foi carregado antes do app.js.");
    return [];
  }

  const source = typeof QUESTIONS !== "undefined" ? QUESTIONS : window.QUESTIONS;

  if (!Array.isArray(source)) {
    alert("QUESTIONS precisa ser uma lista.");
    return [];
  }

  return source;
}

function ensureFlashcards() {
  if (typeof FLASHCARDS === "undefined" || !Array.isArray(FLASHCARDS)) {
    alert("Banco de flashcards não encontrado. Verifique se flashcards.js foi carregado antes do app.js.");
    return [];
  }

  return FLASHCARDS;
}

function ensureStudyModules() {
  if (typeof STUDY_MODULES === "undefined" || !Array.isArray(STUDY_MODULES)) {
    return [];
  }

  return STUDY_MODULES;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const parsed = JSON.parse(saved);

    state.answeredCorrect = Array.isArray(parsed.answeredCorrect) ? parsed.answeredCorrect : [];
    state.reviewWrong = Array.isArray(parsed.reviewWrong) ? parsed.reviewWrong : [];
    state.history = Array.isArray(parsed.history) ? parsed.history : [];
  } catch (error) {
    console.warn("Erro ao carregar progresso:", error);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uniquePush(list, value) {
  if (!list.includes(value)) list.push(value);
}

function removeFromList(list, value) {
  return list.filter((item) => item !== value);
}

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getCurrentQuestionIds() {
  return new Set(ensureQuestions().map((q) => q.id));
}

function getAvailableQuestions() {
  const questions = ensureQuestions();

  return questions.filter((q) => {
    return !state.answeredCorrect.includes(q.id);
  });
}

function getReviewQuestions() {
  const questions = ensureQuestions();

  return questions.filter((q) => {
    return state.reviewWrong.includes(q.id);
  });
}

function updateDashboard() {
  const questions = ensureQuestions();
  const currentIds = getCurrentQuestionIds();
  const available = getAvailableQuestions();
  const review = getReviewQuestions();
  const correctedVisible = state.answeredCorrect.filter((id) => currentIds.has(id)).length;

  if (els.totalQuestions) els.totalQuestions.textContent = questions.length;
  if (els.correctCount) els.correctCount.textContent = correctedVisible;
  if (els.reviewCount) els.reviewCount.textContent = review.length;
  if (els.availableCount) els.availableCount.textContent = available.length;

  if (els.reviewBtn) els.reviewBtn.disabled = review.length === 0;
  if (els.resultReviewBtn) els.resultReviewBtn.disabled = review.length === 0;
  if (els.start10Btn) els.start10Btn.disabled = available.length === 0;
  if (els.start20Btn) els.start20Btn.disabled = available.length === 0;

  if (els.filterSummary && window.TSA_FILTER_INFO && window.TSA_FILTER_INFO.removed > 0) {
    els.filterSummary.textContent = window.TSA_FILTER_INFO.message;
  }
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => {
    if (screen) screen.classList.remove("active");
  });

  if (!screens[name]) return;
  screens[name].classList.add("active");

  if (name === "home") updateDashboard();
  if (name === "stats") renderStats();
}

function startQuiz(count) {
  const available = getAvailableQuestions();

  if (available.length === 0) {
    alert("Você já acertou todas as questões disponíveis. Use a revisão ou resete o progresso.");
    updateDashboard();
    return;
  }

  const selectedCount = Math.min(count, available.length);
  currentSession = shuffle(available).slice(0, selectedCount);
  currentIndex = 0;
  currentMode = "quiz";
  sessionResults = [];

  showScreen("quiz");
  renderQuestion();
}

function startReview() {
  const review = getReviewQuestions();

  if (review.length === 0) {
    alert("Não há questões na revisão.");
    updateDashboard();
    return;
  }

  currentSession = shuffle(review);
  currentIndex = 0;
  currentMode = "review";
  sessionResults = [];

  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = currentSession[currentIndex];

  if (!question) {
    finishSession();
    return;
  }

  els.quizProgress.textContent = `Questão ${currentIndex + 1} de ${currentSession.length}`;
  els.questionSource.textContent = question.fonte || "Yao";
  els.questionChapter.textContent = question.capitulo || "Capítulo";
  els.questionTheme.textContent = question.tema || "Tema";
  els.questionDifficulty.textContent = question.dificuldade || "média";
  els.questionText.textContent = question.pergunta || "Pergunta não cadastrada.";

  els.answers.innerHTML = "";

  const letters = ["A", "B", "C", "D", "E"];
  const alternatives = question.alternativas || {};

  letters.forEach((letter) => {
    if (!Object.prototype.hasOwnProperty.call(alternatives, letter)) return;

    const button = document.createElement("button");
    button.className = "answer-btn";
    button.dataset.letter = letter;
    button.innerHTML = `<strong>${letter})</strong> ${escapeHtml(alternatives[letter])}`;
    button.addEventListener("click", () => answerQuestion(letter));
    els.answers.appendChild(button);
  });

  els.feedback.classList.add("hidden");
  els.nextBtn.classList.add("hidden");
  els.finishBtn.classList.add("hidden");
}

function answerQuestion(selectedLetter) {
  const question = currentSession[currentIndex];
  const correct = selectedLetter === question.resposta;

  const answerButtons = document.querySelectorAll(".answer-btn");

  answerButtons.forEach((button) => {
    const letter = button.dataset.letter;
    button.disabled = true;

    if (letter === question.resposta) button.classList.add("correct");
    if (letter === selectedLetter && !correct) button.classList.add("wrong");
  });

  if (correct) {
    uniquePush(state.answeredCorrect, question.id);
    state.reviewWrong = removeFromList(state.reviewWrong, question.id);
  } else {
    uniquePush(state.reviewWrong, question.id);
  }

  state.history.push({
    id: question.id,
    selected: selectedLetter,
    correct,
    mode: currentMode,
    date: new Date().toISOString()
  });

  saveState();

  sessionResults.push({
    id: question.id,
    selected: selectedLetter,
    correct
  });

  els.feedback.classList.remove("hidden");
  els.feedbackTitle.textContent = correct ? "✅ Correto" : `❌ Incorreto — resposta: ${question.resposta}`;
  els.feedbackComment.textContent = question.comentario || "Sem comentário cadastrado.";
  els.goldPhrase.textContent = question.frase_ouro || "Sem frase de ouro cadastrada.";

  if (currentIndex < currentSession.length - 1) {
    els.nextBtn.classList.remove("hidden");
  } else {
    els.finishBtn.classList.remove("hidden");
  }

  updateDashboard();
}

function nextQuestion() {
  currentIndex += 1;
  renderQuestion();
}

function finishSession() {
  const total = sessionResults.length;
  const correct = sessionResults.filter((r) => r.correct).length;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  els.resultScore.textContent = `${correct}/${total}`;
  els.resultPercent.textContent = `${percent}%`;

  let message = "";

  if (currentMode === "review") {
    message = "Revisão concluída. Questões acertadas saíram da lista de erros.";
  } else if (percent >= 80) {
    message = "Excelente. Pode aumentar o nível de crueldade da banca.";
  } else if (percent >= 60) {
    message = "Bom resultado. Revise os erros e siga firme.";
  } else {
    message = "Resultado útil: seus erros acabaram de montar seu plano de estudo.";
  }

  els.resultMessage.textContent = message;
  showScreen("result");
}

function resetProgress() {
  const confirmReset = confirm(
    "Tem certeza que deseja resetar todo o progresso? Todas as questões voltarão para os simulados."
  );

  if (!confirmReset) return;

  state = {
    answeredCorrect: [],
    reviewWrong: [],
    history: []
  };

  saveState();
  updateDashboard();
  showScreen("home");
}

/* =========================
   ESTATÍSTICAS
========================= */

function getQuestionByIdMap() {
  const questions = ensureQuestions();
  const map = {};

  questions.forEach((q) => {
    map[q.id] = q;
  });

  return map;
}

function getLatestAnswers() {
  const currentIds = getCurrentQuestionIds();
  const latest = {};

  state.history.forEach((entry) => {
    if (currentIds.has(entry.id)) latest[entry.id] = entry;
  });

  return latest;
}

function getDifficultyGroup(question) {
  const diff = normalizeText(question.dificuldade);

  if (diff.includes("muito") && (diff.includes("dificil") || diff.includes("alta"))) return "Muito difícil";
  if (diff.includes("ultra")) return "Muito difícil";
  if (diff.includes("facil")) return "Fácil";
  if (diff.includes("alta") || diff.includes("dificil")) return "Alta";
  return "Média";
}

function getAreaGroup(question) {
  if (question.area) return question.area;

  const text = normalizeText(`${question.capitulo || ""} ${question.tema || ""} ${question.pergunta || ""}`);

  if (text.includes("cardi") || text.includes("coronaria") || text.includes("valvar") || text.includes("cec") || text.includes("marcapasso")) return "Cardiovascular";
  if (text.includes("via aerea") || text.includes("intub") || text.includes("laring") || text.includes("aspiracao")) return "Via aérea";
  if (text.includes("torac") || text.includes("pulmon") || text.includes("ventilacao") || text.includes("peep") || text.includes("olV".toLowerCase())) return "Respiratório / Torácica";
  if (text.includes("neuro") || text.includes("cerebral") || text.includes("tce") || text.includes("pic")) return "Neuroanestesia";
  if (text.includes("obstetric") || text.includes("gestante") || text.includes("cesarea") || text.includes("preeclampsia") || text.includes("magnesio")) return "Obstetrícia";
  if (text.includes("pediatr") || text.includes("crianca") || text.includes("neonato") || text.includes("lactente")) return "Pediatria";
  if (text.includes("raqui") || text.includes("peridural") || text.includes("bloqueio") || text.includes("anestesico local") || text.includes("dor")) return "Regional / Dor";
  if (text.includes("propofol") || text.includes("opioide") || text.includes("rocuronio") || text.includes("farmacologia") || text.includes("sugamadex")) return "Farmacologia";
  if (text.includes("renal") || text.includes("rim") || text.includes("hipercalemia") || text.includes("endocrino") || text.includes("tireo") || text.includes("adrenal")) return "Renal / Endócrino / Metabólico";
  if (text.includes("transfus") || text.includes("coagul") || text.includes("plaqueta") || text.includes("rotem") || text.includes("fibrinogenio")) return "Hematologia / Coagulação";
  if (text.includes("trauma") || text.includes("choque") || text.includes("sepse") || text.includes("parada") || text.includes("anafilaxia")) return "Emergências / Crítico";
  if (text.includes("hep") || text.includes("figado") || text.includes("cirrot") || text.includes("transplante")) return "Gastro / Hepato / Transplantes";
  if (text.includes("idoso") || text.includes("geriatria") || text.includes("fragilidade")) return "Geriatria";

  return "Outros";
}

function createEmptyStats() {
  return {
    total: 0,
    answered: 0,
    correct: 0,
    wrong: 0
  };
}

function addToStats(statsObj, groupName, question, latestAnswer) {
  if (!statsObj[groupName]) statsObj[groupName] = createEmptyStats();

  statsObj[groupName].total += 1;

  if (latestAnswer) {
    statsObj[groupName].answered += 1;
    if (latestAnswer.correct) statsObj[groupName].correct += 1;
    else statsObj[groupName].wrong += 1;
  }
}

function percent(correct, answered) {
  if (!answered) return 0;
  return Math.round((correct / answered) * 100);
}

function renderStatsRow(name, data) {
  const pct = percent(data.correct, data.answered);
  const answeredText = `${data.answered}/${data.total}`;
  const barWidth = data.answered > 0 ? pct : 0;

  return `
    <div class="stats-row">
      <div class="stats-row-header">
        <strong>${escapeHtml(name)}</strong>
        <span>${data.answered > 0 ? pct + "%" : "—"}</span>
      </div>
      <div class="stats-row-sub">
        <span>Respondidas: ${answeredText}</span>
        <span>Acertos: ${data.correct}</span>
        <span>Erros: ${data.wrong}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${barWidth}%"></div>
      </div>
    </div>
  `;
}

function renderStatsList(container, statsObj, options = {}) {
  if (!container) return;

  const minAnswered = options.minAnswered || 0;
  const sortMode = options.sortMode || "name";

  let entries = Object.entries(statsObj);
  entries = entries.filter(([, data]) => data.total > 0);

  if (minAnswered > 0) entries = entries.filter(([, data]) => data.answered >= minAnswered);

  if (sortMode === "weak") {
    entries.sort((a, b) => {
      const pctA = percent(a[1].correct, a[1].answered);
      const pctB = percent(b[1].correct, b[1].answered);
      if (pctA !== pctB) return pctA - pctB;
      return b[1].answered - a[1].answered;
    });
  } else if (sortMode === "answered") {
    entries.sort((a, b) => b[1].answered - a[1].answered);
  } else {
    entries.sort((a, b) => a[0].localeCompare(b[0], "pt-BR"));
  }

  if (entries.length === 0) {
    container.innerHTML = `<p class="muted">Ainda não há respostas suficientes para mostrar aqui.</p>`;
    return;
  }

  container.innerHTML = entries.map(([name, data]) => renderStatsRow(name, data)).join("");
}

function renderStats() {
  const questions = ensureQuestions();
  const latest = getLatestAnswers();

  const areaStats = {};
  const difficultyStats = {
    "Fácil": createEmptyStats(),
    "Média": createEmptyStats(),
    "Alta": createEmptyStats(),
    "Muito difícil": createEmptyStats()
  };

  const overall = createEmptyStats();
  overall.total = questions.length;

  questions.forEach((question) => {
    const latestAnswer = latest[question.id];

    if (latestAnswer) {
      overall.answered += 1;
      if (latestAnswer.correct) overall.correct += 1;
      else overall.wrong += 1;
    }

    addToStats(areaStats, getAreaGroup(question), question, latestAnswer);
    addToStats(difficultyStats, getDifficultyGroup(question), question, latestAnswer);
  });

  const overallPct = percent(overall.correct, overall.answered);

  els.overallStats.innerHTML = `
    <div class="stats-grid">
      <div class="stat-box"><span class="stat-label">Respondidas</span><strong>${overall.answered}/${overall.total}</strong></div>
      <div class="stat-box"><span class="stat-label">Acertos</span><strong>${overall.correct}</strong></div>
      <div class="stat-box"><span class="stat-label">Erros</span><strong>${overall.wrong}</strong></div>
      <div class="stat-box"><span class="stat-label">Aproveitamento</span><strong>${overall.answered > 0 ? overallPct + "%" : "—"}</strong></div>
    </div>
  `;

  renderStatsList(els.areaStats, areaStats, { sortMode: "answered" });
  renderStatsList(els.difficultyStats, difficultyStats, { sortMode: "name" });
  renderStatsList(els.weakAreaStats, areaStats, { minAnswered: 3, sortMode: "weak" });
}

/* =========================
   APOSTILAS / MÓDULOS
========================= */

function showModules() {
  showScreen("modules");
  renderModulesList();
}

function renderModulesList() {
  const modules = ensureStudyModules();

  if (!els.modulesList || !els.moduleDetail) return;

  els.moduleDetail.classList.add("hidden");
  els.modulesList.classList.remove("hidden");

  if (modules.length === 0) {
    els.modulesList.innerHTML = `<p class="muted">Nenhum módulo de estudo encontrado.</p>`;
    return;
  }

  els.modulesList.innerHTML = modules.map((module) => {
    return `
      <button class="module-card" data-module-id="${escapeHtml(module.id)}">
        <span class="module-area">${escapeHtml(module.area || "Módulo")}</span>
        <strong>${escapeHtml(module.titulo)}</strong>
        <small>${escapeHtml(module.tempo || "Revisão rápida")}</small>
      </button>
    `;
  }).join("");
}

function renderModuleDetail(moduleId) {
  const module = ensureStudyModules().find((item) => item.id === moduleId);
  if (!module || !els.moduleDetail || !els.modulesList) return;

  els.modulesList.classList.add("hidden");
  els.moduleDetail.classList.remove("hidden");

  const sectionList = (title, items, className = "module-list") => {
    if (!Array.isArray(items) || items.length === 0) return "";
    return `
      <h3>${escapeHtml(title)}</h3>
      <ul class="${className}">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  };

  const quickQuestions = Array.isArray(module.quickQuestions) ? module.quickQuestions : [];

  els.moduleDetail.innerHTML = `
    <button class="ghost-btn module-detail-back" data-module-back="true">← Voltar aos módulos</button>
    <div class="module-detail-header">
      <span class="module-area">${escapeHtml(module.area || "Módulo")}</span>
      <h2>${escapeHtml(module.titulo)}</h2>
      <p class="muted">${escapeHtml(module.tempo || "Revisão rápida")}</p>
    </div>

    ${sectionList("Resumo essencial", module.resumo)}
    ${sectionList("Frases de ouro", module.frasesOuro, "module-list gold-list")}
    ${sectionList("Pegadinhas de prova", module.pegadinhas, "module-list trap-list")}

    <h3>Questões rápidas</h3>
    <div class="quick-questions">
      ${quickQuestions.map((item, index) => `
        <details class="quick-question">
          <summary>${index + 1}. ${escapeHtml(item.pergunta)}</summary>
          <p>${escapeHtml(item.resposta)}</p>
        </details>
      `).join("")}
    </div>
  `;
}

/* =========================
   TREINAMENTO ORAL / FLASHCARDS
========================= */

function startOralTraining() {
  const cards = ensureFlashcards();

  if (cards.length === 0) {
    alert("Nenhum flashcard encontrado.");
    return;
  }

  oralSession = shuffle(cards);
  oralIndex = 0;
  oralFlipped = false;

  showScreen("oral");
  renderOralCard();
}

function renderOralCard() {
  const card = oralSession[oralIndex];
  if (!card) return;

  oralFlipped = false;
  els.oralCard.classList.remove("show-answer");
  els.oralFlipBtn.textContent = "Ver resposta";

  els.oralProgress.textContent = `Caso ${oralIndex + 1} de ${oralSession.length}`;
  els.oralArea.textContent = card.area || "Treinamento oral";
  els.oralDifficulty.textContent = card.dificuldade || "muito difícil";
  els.oralTitle.textContent = card.titulo || "Caso oral";
  els.oralCase.textContent = card.caso || "";
  els.oralQuestion.textContent = card.pergunta || "";

  els.oralAnswer.innerHTML = (card.respostaIdeal || []).map((item) => `<p>${escapeHtml(item)}</p>`).join("");
  els.oralRequired.innerHTML = (card.pontosObrigatorios || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  els.oralErrors.innerHTML = (card.errosGraves || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  els.oralDeepening.innerHTML = (card.aprofundamento || []).map((item) => {
    return `
      <div class="oral-deep-item">
        <strong>${escapeHtml(item.pergunta)}</strong>
        <p>${escapeHtml(item.resposta)}</p>
      </div>
    `;
  }).join("");

  els.oralGold.textContent = card.fraseOuro || "";
  els.oralPrevBtn.disabled = oralIndex === 0;
  els.oralNextBtn.disabled = oralIndex === oralSession.length - 1;
}

function flipOralCard() {
  oralFlipped = !oralFlipped;

  if (oralFlipped) {
    els.oralCard.classList.add("show-answer");
    els.oralFlipBtn.textContent = "Ver caso";
  } else {
    els.oralCard.classList.remove("show-answer");
    els.oralFlipBtn.textContent = "Ver resposta";
  }
}

function nextOralCard() {
  if (oralIndex >= oralSession.length - 1) return;
  oralIndex += 1;
  renderOralCard();
}

function prevOralCard() {
  if (oralIndex <= 0) return;
  oralIndex -= 1;
  renderOralCard();
}

function shuffleOralCards() {
  oralSession = shuffle(ensureFlashcards());
  oralIndex = 0;
  renderOralCard();
}

/* =========================
   EVENTOS
========================= */

function registerEvents() {
  if (els.start10Btn) els.start10Btn.addEventListener("click", () => startQuiz(10));
  if (els.start20Btn) els.start20Btn.addEventListener("click", () => startQuiz(20));
  if (els.reviewBtn) els.reviewBtn.addEventListener("click", startReview);
  if (els.statsBtn) els.statsBtn.addEventListener("click", () => showScreen("stats"));
  if (els.resetBtn) els.resetBtn.addEventListener("click", resetProgress);
  if (els.modulesBtn) els.modulesBtn.addEventListener("click", showModules);

  if (els.backHomeBtn) els.backHomeBtn.addEventListener("click", () => showScreen("home"));
  if (els.nextBtn) els.nextBtn.addEventListener("click", nextQuestion);
  if (els.finishBtn) els.finishBtn.addEventListener("click", finishSession);

  if (els.new10Btn) els.new10Btn.addEventListener("click", () => startQuiz(10));
  if (els.new20Btn) els.new20Btn.addEventListener("click", () => startQuiz(20));
  if (els.resultReviewBtn) els.resultReviewBtn.addEventListener("click", startReview);
  if (els.resultStatsBtn) els.resultStatsBtn.addEventListener("click", () => showScreen("stats"));
  if (els.resultHomeBtn) els.resultHomeBtn.addEventListener("click", () => showScreen("home"));

  if (els.statsBackBtn) els.statsBackBtn.addEventListener("click", () => showScreen("home"));

  if (els.modulesBackBtn) els.modulesBackBtn.addEventListener("click", () => showScreen("home"));
  if (els.modulesList) {
    els.modulesList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-module-id]");
      if (!button) return;
      renderModuleDetail(button.dataset.moduleId);
    });
  }
  if (els.moduleDetail) {
    els.moduleDetail.addEventListener("click", (event) => {
      const backButton = event.target.closest("[data-module-back]");
      if (!backButton) return;
      renderModulesList();
    });
  }

  if (els.oralBtn) els.oralBtn.addEventListener("click", startOralTraining);
  if (els.oralBackBtn) els.oralBackBtn.addEventListener("click", () => showScreen("home"));
  if (els.oralFlipBtn) els.oralFlipBtn.addEventListener("click", flipOralCard);
  if (els.oralNextBtn) els.oralNextBtn.addEventListener("click", nextOralCard);
  if (els.oralPrevBtn) els.oralPrevBtn.addEventListener("click", prevOralCard);
  if (els.oralShuffleBtn) els.oralShuffleBtn.addEventListener("click", shuffleOralCards);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js?v=820").catch((error) => {
      console.warn("Service worker não registrado:", error);
    });
  }
}

function init() {
  ensureQuestions();
  loadState();
  registerEvents();
  updateDashboard();
  showScreen("home");
  registerServiceWorker();
}

document.addEventListener("DOMContentLoaded", init);
