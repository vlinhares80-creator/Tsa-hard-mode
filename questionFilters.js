/*
  TSA Hard Mode - filtro de banco v840
  Limpeza funcional do banco: preserva apenas questões em nível realmente alto
  ("Muito difícil" ou "TSA Ultra") e remove os blocos antigos fáceis/médios/difíceis.

  Este arquivo NÃO altera fisicamente questions.js. Ele muta o array QUESTIONS em memória
  antes do app.js iniciar, evitando corromper o banco grande.
*/
(function () {
  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function shouldKeepQuestion(question) {
    const difficulty = normalizeText(question && question.dificuldade);
    const id = normalizeText(question && question.id);
    const source = normalizeText(question && question.fonte);

    // Mantém todo conteúdo novo explicitamente ultra/difícil.
    if (difficulty.includes("ultra")) return true;
    if (difficulty.includes("muito") && difficulty.includes("dificil")) return true;

    // Rede de segurança para blocos novos que porventura tenham dificuldade mal preenchida.
    if (id.startsWith("tsa-ultra")) return true;
    if (id.startsWith("oral-ultra")) return true;
    if (source.includes("prova tsa") && difficulty.includes("dificil")) return true;

    return false;
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
      if (!shouldKeepQuestion(source[index])) {
        source.splice(index, 1);
      }
    }

    window.TSA_FILTER_INFO = {
      enabled: true,
      removed: originalTotal - source.length,
      remaining: source.length,
      originalTotal,
      message: `${originalTotal - source.length} questões antigas não-ultra foram removidas desta sessão.`
    };

    console.info("TSA Hard Mode filtro v840:", window.TSA_FILTER_INFO);
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
