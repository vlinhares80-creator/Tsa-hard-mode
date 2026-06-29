const QUESTIONS = [
  {
    id: "yao-08-001",
    fonte: "Yao cap. 8",
    capitulo: "8 - CIED",
    tema: "CRT-D",
    dificuldade: "média",
    pergunta: "Paciente com CRT-D será submetido a cirurgia com eletrocautério monopolar. Qual é a principal pegadinha do uso do magneto nesse dispositivo?",
    alternativas: {
      A: "O magneto sempre desliga a função de marca-passo.",
      B: "O magneto geralmente suspende terapias antitaquicardia, mas não garante pacing assíncrono.",
      C: "O magneto aumenta a energia dos choques.",
      D: "O magneto corrige falha de captura ventricular.",
      E: "O magneto remove a necessidade de desfibrilador externo."
    },
    resposta: "B",
    comentario: "Em ICD/CDI ou CRT-D, o magneto geralmente suspende detecção/terapias antitaquicardia. Ele não necessariamente muda o pacing para modo assíncrono; em paciente dependente, pode ser necessária reprogramação.",
    frase_ouro: "Magneto em CDI é botão de 'não choque', não botão de 'pacing assíncrono'."
  },
  {
    id: "yao-08-002",
    fonte: "Yao cap. 8",
    capitulo: "8 - CIED",
    tema: "EMI",
    dificuldade: "fácil",
    pergunta: "Durante cauterização monopolar, paciente dependente de marca-passo apresenta bradicardia grave e perda de pulso arterial. Qual deve ser a primeira conduta?",
    alternativas: {
      A: "Pedir para aumentar a potência do bisturi.",
      B: "Ignorar se houver espículas no ECG.",
      C: "Parar o cautério, confirmar pulso/pressão, oxigenar e iniciar suporte/pacing externo se necessário.",
      D: "Administrar nitroprussiato.",
      E: "Extubar para reduzir estímulo simpático."
    },
    resposta: "C",
    comentario: "A interferência eletromagnética pode inibir o pacing. A prioridade é cessar a fonte de interferência, confirmar captura mecânica e tratar bradicardia/assistolia com suporte apropriado.",
    frase_ouro: "Espícula sem pulso é decoração elétrica."
  },
  {
    id: "yao-09-001",
    fonte: "Yao cap. 9",
    capitulo: "9 - TAAA",
    tema: "Proteção medular",
    dificuldade: "média",
    pergunta: "Na correção de aneurisma toracoabdominal, qual fórmula expressa melhor a lógica da perfusão medular?",
    alternativas: {
      A: "Pressão de perfusão medular = PAM - pressão do LCR.",
      B: "Pressão de perfusão medular = PVC + pressão do LCR.",
      C: "Pressão de perfusão medular = PaCO₂ - PAM.",
      D: "Pressão de perfusão medular = frequência cardíaca x hemoglobina.",
      E: "Pressão de perfusão medular independe da pressão do LCR."
    },
    resposta: "A",
    comentario: "A drenagem de LCR reduz a pressão ao redor da medula, aumentando a pressão de perfusão medular. Por isso, manter PAM adequada e pressão liquórica baixa é essencial.",
    frase_ouro: "Medula perfunde melhor quando a pressão sobe e o líquor desce."
  },
  {
    id: "yao-10-001",
    fonte: "Yao cap. 10",
    capitulo: "10 - AAA",
    tema: "Clamp aórtico",
    dificuldade: "fácil",
    pergunta: "Na correção aberta de AAA infrarrenal, qual alteração é esperada logo após o clampeamento aórtico?",
    alternativas: {
      A: "Redução abrupta da pós-carga.",
      B: "Hipotensão obrigatória.",
      C: "Aumento da pós-carga e da pressão proximal.",
      D: "Ausência de repercussão cardiovascular.",
      E: "Redução da resistência vascular sistêmica proximal."
    },
    resposta: "C",
    comentario: "O clamp infrarrenal aumenta a resistência contra a qual o VE ejeta, elevando pressão proximal e consumo miocárdico, especialmente em coronariopatas.",
    frase_ouro: "O clamp aumenta a pós-carga; o desclamp tira o chão."
  },
  {
    id: "yao-10-002",
    fonte: "Yao cap. 10",
    capitulo: "10 - AAA",
    tema: "EVAR",
    dificuldade: "média",
    pergunta: "Após EVAR, há vazamento persistente no local de vedação proximal da endoprótese. Qual tipo de endoleak é mais provável?",
    alternativas: {
      A: "Tipo II.",
      B: "Tipo IV.",
      C: "Tipo V.",
      D: "Tipo I.",
      E: "Tipo III por ruptura entre componentes."
    },
    resposta: "D",
    comentario: "Endoleak tipo I ocorre por falha de vedação proximal ou distal e geralmente exige correção. Tipo II é por fluxo retrógrado de colaterais.",
    frase_ouro: "Endoleak I e III costumam pedir correção; tipo II depende do saco."
  },
  {
    id: "yao-11-001",
    fonte: "Yao cap. 11",
    capitulo: "11 - Hipertensão",
    tema: "IECA/BRA",
    dificuldade: "média",
    pergunta: "Paciente em uso de losartana no dia da cirurgia apresenta hipotensão refratária após indução. Após volume e catecolaminas, qual droga deve ser lembrada?",
    alternativas: {
      A: "Hidralazina.",
      B: "Nitroprussiato.",
      C: "Vasopressina.",
      D: "Esmolol.",
      E: "Nitroglicerina."
    },
    resposta: "C",
    comentario: "IECA/BRA podem predispor a vasoplegia após indução. Quando a resposta a catecolaminas é ruim, vasopressina pode ser útil.",
    frase_ouro: "IECA/BRA podem transformar indução em teste de vasoplegia."
  },
  {
    id: "yao-11-002",
    fonte: "Yao cap. 11",
    capitulo: "11 - Hipertensão",
    tema: "Feocromocitoma",
    dificuldade: "fácil",
    pergunta: "No preparo do feocromocitoma, qual sequência farmacológica é correta?",
    alternativas: {
      A: "Beta-bloqueador antes do alfa-bloqueador.",
      B: "Alfa-bloqueador antes do beta-bloqueador.",
      C: "Diurético antes do alfa-bloqueador.",
      D: "Vasopressina pré-operatória obrigatória.",
      E: "Suspender todos os anti-hipertensivos."
    },
    resposta: "B",
    comentario: "O alfa-bloqueio deve vir antes do beta-bloqueio para evitar vasoconstrição alfa sem oposição. Depois, se houver taquicardia, adiciona-se beta-bloqueador.",
    frase_ouro: "No feocromocitoma: alfa antes de beta. Sempre."
  },
  {
    id: "yao-12-001",
    fonte: "Yao cap. 12",
    capitulo: "12 - Tamponamento",
    tema: "Diagnóstico",
    dificuldade: "média",
    pergunta: "Pós-operatório de cirurgia cardíaca com baixo débito, PVC 23 mmHg, PAOP 14 mmHg e pele fria. Qual diagnóstico deve ser fortemente considerado?",
    alternativas: {
      A: "Vasoplegia pura.",
      B: "Hipovolemia isolada.",
      C: "Broncoespasmo.",
      D: "Tamponamento regional/compressão direita.",
      E: "Hipertireoidismo."
    },
    resposta: "D",
    comentario: "PVC muito elevada desproporcional à PAOP, baixo débito e pós-operatório cardíaco sugerem compressão direita/regional por coágulo ou tamponamento.",
    frase_ouro: "Depois de cirurgia cardíaca, tamponamento pode ser coágulo fazendo bullying em uma câmara."
  },
  {
    id: "yao-12-002",
    fonte: "Yao cap. 12",
    capitulo: "12 - Tamponamento",
    tema: "Fisiologia",
    dificuldade: "fácil",
    pergunta: "No tamponamento cardíaco agudo, qual mecanismo reduz o débito cardíaco?",
    alternativas: {
      A: "Aumento primário da contratilidade.",
      B: "Redução da pressão intrapericárdica.",
      C: "Prejuízo ao enchimento diastólico por aumento da pressão intrapericárdica.",
      D: "Vasodilatação sistêmica isolada.",
      E: "Aumento de complacência pericárdica aguda."
    },
    resposta: "C",
    comentario: "O pericárdio pressurizado limita enchimento diastólico, reduz volume sistólico e débito. A taquicardia é compensatória.",
    frase_ouro: "Tamponamento é doença de enchimento, não de contratilidade."
  },
  {
    id: "mixed-001",
    fonte: "Revisão mista",
    capitulo: "Revisão",
    tema: "Cardiovascular",
    dificuldade: "difícil",
    pergunta: "Em dissecção aguda de aorta hipertensiva, por que o beta-bloqueador deve preceder o vasodilatador?",
    alternativas: {
      A: "Porque aumenta dP/dt e melhora perfusão da falsa luz.",
      B: "Porque reduz FC, contratilidade e dP/dt, evitando taquicardia reflexa do vasodilatador.",
      C: "Porque causa vasodilatação arterial pura sem efeito cardíaco.",
      D: "Porque substitui completamente analgesia.",
      E: "Porque aumenta pressão sistólica de forma controlada."
    },
    resposta: "B",
    comentario: "Na dissecção, reduzir apenas a pressão pode gerar taquicardia reflexa e manter alta a violência da ejeção. Beta-bloqueio reduz frequência, contratilidade e dP/dt.",
    frase_ouro: "Na dissecção, não basta baixar pressão; é preciso tirar a violência da ejeção."
  },
  {
    id: "mixed-002",
    fonte: "Revisão mista",
    capitulo: "Revisão",
    tema: "Farmacologia",
    dificuldade: "média",
    pergunta: "Qual é a ação da fentolamina usada em crise hipertensiva por feocromocitoma?",
    alternativas: {
      A: "Agonista beta-1 puro.",
      B: "Bloqueador beta irreversível.",
      C: "Bloqueador alfa-adrenérgico competitivo não seletivo.",
      D: "Agonista alfa-2 central.",
      E: "Inibidor da síntese de catecolaminas."
    },
    resposta: "C",
    comentario: "Fentolamina bloqueia receptores alfa-1 e alfa-2 de forma competitiva e reversível, causando vasodilatação, mas podendo gerar taquicardia reflexa.",
    frase_ouro: "Fentolamina tira a vasoconstrição catecolaminérgica, mas pode cobrar taquicardia."
  }
];

let currentSet = [];
let currentIndex = 0;
const storageKey = "tsaHardModeProgressV1";
const state = JSON.parse(localStorage.getItem(storageKey) || '{"answers":{},"marked":{}}');

const $ = (id) => document.getElementById(id);

function save() { localStorage.setItem(storageKey, JSON.stringify(state)); }

function initFilters() {
  const chapters = [...new Set(QUESTIONS.map(q => q.capitulo))].sort();
  const tags = [...new Set(QUESTIONS.map(q => q.tema))].sort();
  chapters.forEach(c => $("chapterFilter").append(new Option(c, c)));
  tags.forEach(t => $("tagFilter").append(new Option(t, t)));
}

function updateStats() {
  const answers = Object.values(state.answers);
  const total = answers.length;
  const correct = answers.filter(a => a.correct).length;
  $("answeredCount").textContent = total;
  $("wrongCount").textContent = total - correct;
  $("correctRate").textContent = total ? Math.round((correct / total) * 100) + "%" : "0%";
}

function buildSet() {
  const chapter = $("chapterFilter").value;
  const tag = $("tagFilter").value;
  const mode = $("modeSelect").value;
  let set = [...QUESTIONS];
  if (chapter !== "all") set = set.filter(q => q.capitulo === chapter);
  if (tag !== "all") set = set.filter(q => q.tema === tag);
  if (mode === "errors") set = set.filter(q => state.answers[q.id] && !state.answers[q.id].correct);
  if (mode === "exam10") set = shuffle(set).slice(0, 10);
  return set;
}

function shuffle(arr) { return arr.map(v => [Math.random(), v]).sort((a,b) => a[0]-b[0]).map(x => x[1]); }

function start() {
  currentSet = buildSet();
  currentIndex = 0;
  if (!currentSet.length) {
    $("emptyState").classList.remove("hidden");
    $("questionSection").classList.add("hidden");
    $("emptyState").innerHTML = "<h2>Nada por aqui</h2><p>Não há questões para esse filtro. Troque capítulo/tema ou saia do modo revisar erros.</p>";
    return;
  }
  $("emptyState").classList.add("hidden");
  $("questionSection").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = currentSet[currentIndex];
  $("qSource").textContent = q.fonte;
  $("qDifficulty").textContent = q.dificuldade;
  $("qProgress").textContent = `${currentIndex + 1}/${currentSet.length}`;
  $("qTitle").textContent = `${q.capitulo} · ${q.tema}`;
  $("qText").textContent = q.pergunta;
  $("options").innerHTML = "";
  $("feedback").classList.add("hidden");
  $("feedback").innerHTML = "";

  const saved = state.answers[q.id];
  Object.entries(q.alternativas).forEach(([letter, text]) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = `${letter}) ${text}`;
    btn.onclick = () => answer(letter);
    if (saved) {
      btn.disabled = true;
      if (letter === q.resposta) btn.classList.add("correct");
      if (letter === saved.choice && letter !== q.resposta) btn.classList.add("wrong");
    }
    $("options").appendChild(btn);
  });
  if (saved) showFeedback(saved.choice);
  $("prevBtn").disabled = currentIndex === 0;
  $("nextBtn").disabled = currentIndex === currentSet.length - 1;
  $("markBtn").textContent = state.marked[q.id] ? "Revisão marcada" : "Marcar revisão";
}

function answer(choice) {
  const q = currentSet[currentIndex];
  state.answers[q.id] = { choice, correct: choice === q.resposta, date: new Date().toISOString() };
  save();
  updateStats();
  renderQuestion();
}

function showFeedback(choice) {
  const q = currentSet[currentIndex];
  const correct = choice === q.resposta;
  $("feedback").classList.remove("hidden");
  $("feedback").innerHTML = `
    <strong>${correct ? "✅ Correto" : "❌ Incorreto"}. Resposta: ${q.resposta}</strong>
    <p>${q.comentario}</p>
    <p class="gold">Frase de ouro: ${q.frase_ouro}</p>
  `;
}

$("startBtn").onclick = start;
$("prevBtn").onclick = () => { currentIndex--; renderQuestion(); };
$("nextBtn").onclick = () => { currentIndex++; renderQuestion(); };
$("markBtn").onclick = () => {
  const q = currentSet[currentIndex];
  state.marked[q.id] = !state.marked[q.id];
  save();
  renderQuestion();
};
$("resetBtn").onclick = () => {
  if (confirm("Resetar todo o progresso salvo neste navegador?")) {
    localStorage.removeItem(storageKey);
    location.reload();
  }
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

initFilters();
updateStats();
