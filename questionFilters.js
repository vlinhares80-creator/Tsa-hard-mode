/*
  TSA Hard Mode - filtro de banco v820
  Remove do app as questões antigas marcadas como média/médio, difícil ou alta,
  preservando as questões "Muito difícil" e "TSA Ultra".

  Observação: este arquivo não precisa reescrever o questions.js. Ele muta o array
  QUESTIONS em memória logo após o carregamento do banco, antes do app.js iniciar.
*/
(function () {
  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function shouldRemoveQuestion(question) {
    const difficulty = normalizeText(question && question.dificuldade);

    if (!difficulty) return false;

    // Preserva todo o material TSA Ultra / Muito difícil.
    if (difficulty.includes("muito") || difficulty.includes("ultra")) return false;

    // Remove os blocos antigos que estavam atrapalhando o estudo.
    return (
      difficulty.includes("medio") ||
      difficulty.includes("media") ||
      difficulty === "alta" ||
      difficulty.includes("dificil") ||
      difficulty.includes("dificuldade alta")
    );
  }

  try {
    const source = typeof QUESTIONS !== "undefined" ? QUESTIONS : window.QUESTIONS;

    if (!Array.isArray(source)) {
      window.TSA_FILTER_INFO = {
        enabled: true,
        removed: 0,
        remaining: 0,
        message: "Banco QUESTIONS não encontrado para filtragem."
      };
      return;
    }

    const originalTotal = source.length;

    for (let index = source.length - 1; index >= 0; index -= 1) {
      if (shouldRemoveQuestion(source[index])) {
        source.splice(index, 1);
      }
    }

    window.TSA_FILTER_INFO = {
      enabled: true,
      removed: originalTotal - source.length,
      remaining: source.length,
      originalTotal,
      message: `${originalTotal - source.length} questões médias/difíceis antigas foram removidas desta sessão.`
    };

    console.info("TSA Hard Mode filtro v820:", window.TSA_FILTER_INFO);
  } catch (error) {
    console.warn("Erro ao aplicar filtro de questões:", error);
    window.TSA_FILTER_INFO = {
      enabled: false,
      removed: 0,
      remaining: 0,
      message: "Erro ao aplicar filtro de questões."
    };
  }
})();
