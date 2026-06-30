const STORAGE_KEY = "tsa-hard-mode-progress-v250";

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
  result: document.getElementById("result-screen")
};

const els = {
  totalQuestions: document.getElementById("total-questions"),
  correctCount: document.getElementById("correct-count"),
  reviewCount: document.getElementById("review-count"),
  availableCount: document.getElementById("available-count"),

  start10Btn: document.getElementById("start-10-btn"),
  start20Btn: document.getElementById("start-20-btn"),
  reviewBtn: document.getElementById("review-btn"),
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
  resultHomeBtn: document.getElementById("result-home-btn")
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

function registerEvents() {
  els.start10Btn.addEventListener("click", () => startQuiz(10));
  els.start20Btn.addEventListener("click", () => startQuiz(20));
  els.reviewBtn.addEventListener("click", startReview);
  els.resetBtn.addEventListener("click", resetProgress);

  els.backHomeBtn.addEventListener("click", () => showScreen("home"));
  els.nextBtn.addEventListener("click", nextQuestion);
  els.finishBtn.addEventListener("click", finishSession);

  els.new10Btn.addEventListener("click", () => startQuiz(10));
  els.new20Btn.addEventListener("click", () => startQuiz(20));
  els.resultReviewBtn.addEventListener("click", startReview);
  els.resultHomeBtn.addEventListener("click", () => showScreen("home"));
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js?v=250").catch((error) => {
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
