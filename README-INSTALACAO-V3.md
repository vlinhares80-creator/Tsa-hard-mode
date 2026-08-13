# TSA Hard Mode – V3 (v840)

Esta versão mantém a V2 funcionando e adiciona uma etapa segura para a limpeza física do banco.

## Arquivos incluídos

- `index.html`
- `app.js`
- `style.css`
- `sw.js`
- `studyModules.js`
- `questionFilters.js`
- `extraQuestions.js`
- `extraQuestions2.js`
- `README-INSTALACAO-V3.md`

## O que mudou

1. Nova versão de cache: `v840`.
2. Mantida a limpeza funcional das questões antigas por `questionFilters.js`.
3. Adicionado `extraQuestions2.js` com 20 novas questões TSA Ultra.
4. Adicionados 5 novos módulos/apostilas:
   - Segurança do paciente em anestesia
   - Anestesia fora do centro cirúrgico
   - Sustentabilidade em anestesia
   - Hemoterapia e reações transfusionais
   - Extubação de risco e via aérea difícil
5. Adicionado botão dentro de **Apostilas & Revisão Rápida**:
   - `Exportar questions.js limpo`

## Como fazer a limpeza física definitiva

1. Suba todos os arquivos desta versão no GitHub.
2. Abra o app em:
   `https://vlinhares80-creator.github.io/Tsa-hard-mode/?v=840`
3. Entre em **Apostilas e revisão rápida**.
4. Clique em **Exportar questions.js limpo**.
5. O navegador vai gerar `questions-clean-v840.js`.
6. Renomeie esse arquivo para `questions.js`.
7. Substitua o `questions.js` antigo no GitHub.

Esse arquivo exportado já contém apenas o banco consolidado carregado pelo app, depois do filtro e dos extras.

## Observação importante

Depois de substituir fisicamente o `questions.js`, você pode manter `questionFilters.js`, `extraQuestions.js` e `extraQuestions2.js` sem duplicar questões, porque os extras checam IDs antes de adicionar. Porém, numa versão futura, podemos simplificar o `index.html` e remover esses scripts redundantes.
