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

const screens = {
  home: document.getElementById("home-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
  stats: document.getElementById("stats-screen")
};

const els = {
  totalQuestions: document.getElementById("total-questions"),
  correctCount: document.getElementById("correct-count"),
  reviewCount: document.getElementById("review-count"),
  availableCount: document.getElementById("available-count"),

  start10Btn: document.getElementById("start-10-btn"),
  start20Btn: document.getElementById("start-20-btn"),
  reviewBtn: document.getElementById("review-btn"),
  statsBtn: document.getElementById("stats-btn"),
  resetBtn: document.getElementById("reset-btn"),

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
  weakAreaStats: document.getElementById("weak-area-stats")
};

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
  const available = getAvailableQuestions();
  const review = getReviewQuestions();

  els.totalQuestions.textContent = questions.length;
  els.correctCount.textContent = state.answeredCorrect.length;
  els.reviewCount.textContent = review.length;
  els.availableCount.textContent = available.length;

  els.reviewBtn.disabled = review.length === 0;
  els.resultReviewBtn.disabled = review.length === 0;

  els.start10Btn.disabled = available.length === 0;
  els.start20Btn.disabled = available.length === 0;
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("active");
  });

  screens[name].classList.add("active");

  if (name === "home") {
    updateDashboard();
  }

  if (name === "stats") {
    renderStats();
  }
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
  els.questionText.textContent = question.pergunta;

  els.answers.innerHTML = "";

  const letters = ["A", "B", "C", "D", "E"];

  letters.forEach((letter) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.dataset.letter = letter;
    button.innerHTML = `<strong>${letter})</strong> ${question.alternativas[letter]}`;
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

    if (letter === question.resposta) {
      button.classList.add("correct");
    }

    if (letter === selectedLetter && !correct) {
      button.classList.add("wrong");
    }
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
    correct: correct,
    mode: currentMode,
    date: new Date().toISOString()
  });

  saveState();

  sessionResults.push({
    id: question.id,
    selected: selectedLetter,
    correct: correct
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
  const latest = {};

  state.history.forEach((entry) => {
    latest[entry.id] = entry;
  });

  return latest;
}

function getDifficultyGroup(question) {
  const diff = normalizeText(question.dificuldade);

  if (diff.includes("muito") && (diff.includes("dificil") || diff.includes("alta"))) return "Muito difícil";
  if (diff.includes("facil")) return "Fácil";
  if (diff.includes("alta") || diff.includes("dificil")) return "Alta";
  return "Média";
}

function getAreaGroup(question) {
  if (question.area) return question.area;

  const text = normalizeText(`${question.capitulo || ""} ${question.tema || ""} ${question.pergunta || ""}`);
  if (
    text.includes("coronaria") ||
    text.includes("cardi") ||
    text.includes("valvar") ||
    text.includes("aort") ||
    text.includes("cec") ||
    text.includes("balao") ||
    text.includes("tamponamento") ||
    text.includes("marcapasso") ||
    text.includes("cdi") ||
    text.includes("transplante cardiaco") ||
    text.includes("hipertensao pulmonar") ||
    text.includes("ventriculo direito") ||
    text.includes("vasoplegia") ||
    text.includes("nirs")
  ) {
    return "Cardiovascular";
  }

  if (
    text.includes("via aerea") ||
    text.includes("intubacao") ||
    text.includes("laring") ||
    text.includes("aspiracao") ||
    text.includes("mascara laringea") ||
    text.includes("traqueostomia") ||
    text.includes("epiglotite") ||
    text.includes("tumor laringeo") ||
    text.includes("broncoscopia")
  ) {
    return "Via aérea";
  }

  if (
    text.includes("respiratorio") ||
    text.includes("torac") ||
    text.includes("pulmon") ||
    text.includes("dpoc") ||
    text.includes("asma") ||
    text.includes("sdra") ||
    text.includes("ventilacao") ||
    text.includes("pneumotorax") ||
    text.includes("peep") ||
    text.includes("shunt") ||
    text.includes("olV".toLowerCase()) ||
    text.includes("monopulmonar") ||
    text.includes("capnografia") ||
    text.includes("etco2")
  ) {
    return "Respiratório / Torácica";
  }

  if (
    text.includes("neuro") ||
    text.includes("cranio") ||
    text.includes("cerebral") ||
    text.includes("tce") ||
    text.includes("aneurisma cerebral") ||
    text.includes("pressao intracraniana") ||
    text.includes("pic") ||
    text.includes("medular") ||
    text.includes("coluna") ||
    text.includes("potenciais evocados") ||
    text.includes("diabetes insipidus") ||
    text.includes("siadh")
  ) {
    return "Neuroanestesia";
  }

  if (
    text.includes("obstetric") ||
    text.includes("gestante") ||
    text.includes("cesarea") ||
    text.includes("parto") ||
    text.includes("pre-eclampsia") ||
    text.includes("eclampsia") ||
    text.includes("placenta") ||
    text.includes("amnio") ||
    text.includes("magnesio")
  ) {
    return "Obstetrícia";
  }

  if (
    text.includes("pediatr") ||
    text.includes("crianca") ||
    text.includes("lactente") ||
    text.includes("neonato") ||
    text.includes("prematuro") ||
    text.includes("tetralogia") ||
    text.includes("fallot") ||
    text.includes("cardiopatias congenitas")
  ) {
    return "Pediatria";
  }

  if (
    text.includes("regional") ||
    text.includes("raqui") ||
    text.includes("peridural") ||
    text.includes("bloqueio") ||
    text.includes("anestesico local") ||
    text.includes("toxicidade sistemica") ||
    text.includes("last") ||
    text.includes("dor aguda") ||
    text.includes("dor cronica") ||
    text.includes("analgesia") ||
    text.includes("pca")
  ) {
    return "Regional / Dor";
  }

  if (
    text.includes("farmacologia") ||
    text.includes("propofol") ||
    text.includes("etomidato") ||
    text.includes("cetamina") ||
    text.includes("opioide") ||
    text.includes("remifentanil") ||
    text.includes("succinilcolina") ||
    text.includes("rocuronio") ||
    text.includes("sugamadex") ||
    text.includes("milrinona") ||
    text.includes("dobutamina") ||
    text.includes("noradrenalina") ||
    text.includes("vasopressina") ||
    text.includes("nitroglicerina") ||
    text.includes("dexmedetomidina") ||
    text.includes("benzodiazep")
  ) {
    return "Farmacologia";
  }

  if (
    text.includes("renal") ||
    text.includes("rim") ||
    text.includes("hipercalemia") ||
    text.includes("hipocalcemia") ||
    text.includes("hiponatremia") ||
    text.includes("diabetes") ||
    text.includes("endocrino") ||
    text.includes("tireo") ||
    text.includes("adrenal") ||
    text.includes("feocromocitoma") ||
    text.includes("crise tireotoxica") ||
    text.includes("acido-base") ||
    text.includes("eletrolitos")
  ) {
    return "Renal / Endócrino / Metabólico";
  }

  if (
    text.includes("hematologia") ||
    text.includes("transfus") ||
    text.includes("coagul") ||
    text.includes("plaqueta") ||
    text.includes("fibrinogenio") ||
    text.includes("rotem") ||
    text.includes("teg") ||
    text.includes("heparina") ||
    text.includes("protamina") ||
    text.includes("anticoagul") ||
    text.includes("anemia") ||
    text.includes("sangramento")
  ) {
    return "Hematologia / Coagulação";
  }

  if (
    text.includes("trauma") ||
    text.includes("emergencia") ||
    text.includes("choque") ||
    text.includes("sepse") ||
    text.includes("critico") ||
    text.includes("parada") ||
    text.includes("anafilaxia") ||
    text.includes("hipertermia maligna") ||
    text.includes("queimadura") ||
    text.includes("lactato") ||
    text.includes("svO2".toLowerCase()) ||
    text.includes("delta pco2")
  ) {
    return "Emergências / Crítico";
  }

  if (
    text.includes("hepatico") ||
    text.includes("hepat") ||
    text.includes("figado") ||
    text.includes("cirrotico") ||
    text.includes("gastro") ||
    text.includes("transplante hepatico") ||
    text.includes("transplante renal") ||
    text.includes("abdome") ||
    text.includes("obstrutivo")
  ) {
    return "Gastro / Hepato / Transplantes";
  }

  if (
    text.includes("ambulatorial") ||
    text.includes("remoto") ||
    text.includes("ressonancia") ||
    text.includes("tomografia") ||
    text.includes("radiologia") ||
    text.includes("endoscopia") ||
    text.includes("oftalmo") ||
    text.includes("otorrino") ||
    text.includes("urologia") ||
    text.includes("ortopedia") ||
    text.includes("robotica") ||
    text.includes("bariatrica") ||
    text.includes("laparoscopica") ||
    text.includes("laparoscopia")
  ) {
    return "Ambulatorial / Remoto / Especialidades";
  }

  if (
    text.includes("geriatria") ||
    text.includes("idoso") ||
    text.includes("fragilidade") ||
    text.includes("delirium")
  ) {
    return "Geriatria";
  }

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
  if (!statsObj[groupName]) {
    statsObj[groupName] = createEmptyStats();
  }

  statsObj[groupName].total += 1;

  if (latestAnswer) {
    statsObj[groupName].answered += 1;

    if (latestAnswer.correct) {
      statsObj[groupName].correct += 1;
    } else {
      statsObj[groupName].wrong += 1;
    }
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
        <strong>${name}</strong>
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
  const minAnswered = options.minAnswered || 0;
  const sortMode = options.sortMode || "name";

  let entries = Object.entries(statsObj);

  entries = entries.filter(([, data]) => data.total > 0);

  if (minAnswered > 0) {
    entries = entries.filter(([, data]) => data.answered >= minAnswered);
  }

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

  container.innerHTML = entries
    .map(([name, data]) => renderStatsRow(name, data))
    .join("");
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

  let overall = createEmptyStats();
  overall.total = questions.length;

  questions.forEach((question) => {
    const latestAnswer = latest[question.id];

    if (latestAnswer) {
      overall.answered += 1;

      if (latestAnswer.correct) {
        overall.correct += 1;
      } else {
        overall.wrong += 1;
      }
    }

    const area = getAreaGroup(question);
    const difficulty = getDifficultyGroup(question);

    addToStats(areaStats, area, question, latestAnswer);
    addToStats(difficultyStats, difficulty, question, latestAnswer);
  });

  const overallPct = percent(overall.correct, overall.answered);

  els.overallStats.innerHTML = `
    <div class="stats-grid">
      <div class="stat-box">
        <span class="stat-label">Respondidas</span>
        <strong>${overall.answered}/${overall.total}</strong>
      </div>

      <div class="stat-box">
        <span class="stat-label">Acertos</span>
        <strong>${overall.correct}</strong>
      </div>

      <div class="stat-box">
        <span class="stat-label">Erros</span>
        <strong>${overall.wrong}</strong>
      </div>

      <div class="stat-box">
        <span class="stat-label">Aproveitamento</span>
        <strong>${overall.answered > 0 ? overallPct + "%" : "—"}</strong>
      </div>
    </div>
  `;

  renderStatsList(els.areaStats, areaStats, { sortMode: "answered" });
  renderStatsList(els.difficultyStats, difficultyStats, { sortMode: "name" });
  renderStatsList(els.weakAreaStats, areaStats, { minAnswered: 3, sortMode: "weak" });
}

/* =========================
   EVENTOS
========================= */

function registerEvents() {
  els.start10Btn.addEventListener("click", () => startQuiz(10));
  els.start20Btn.addEventListener("click", () => startQuiz(20));
  els.reviewBtn.addEventListener("click", startReview);
  els.statsBtn.addEventListener("click", () => showScreen("stats"));
  els.resetBtn.addEventListener("click", resetProgress);

  els.backHomeBtn.addEventListener("click", () => showScreen("home"));
  els.nextBtn.addEventListener("click", nextQuestion);
  els.finishBtn.addEventListener("click", finishSession);

  els.new10Btn.addEventListener("click", () => startQuiz(10));
  els.new20Btn.addEventListener("click", () => startQuiz(20));
  els.resultReviewBtn.addEventListener("click", startReview);
  els.resultStatsBtn.addEventListener("click", () => showScreen("stats"));
  els.resultHomeBtn.addEventListener("click", () => showScreen("home"));

  els.statsBackBtn.addEventListener("click", () => showScreen("home"));
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js?v=310").catch((error) => {
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
