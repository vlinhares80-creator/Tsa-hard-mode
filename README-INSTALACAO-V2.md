# TSA Hard Mode - Study Modules V2 (v830)

## O que este pacote adiciona

1. Mantém a aba **Apostilas e revisão rápida**.
2. Adiciona novas apostilas:
   - Estatuto e estrutura da SBA
   - Ética médica aplicada à anestesiologia
   - Gestante em cirurgia não obstétrica e cirurgia fetal
   - Hepatopata e transplante hepático
   - Nefropata e transplante renal
   - Doenças neuromusculares e miopatias
3. Adiciona `extraQuestions.js` com 25 novas questões TSA Ultra.
4. Atualiza `questionFilters.js` para limpeza funcional mais firme do banco: mantém apenas questões "Muito difícil" ou "TSA Ultra".
5. Atualiza cache para `v830`.

## Arquivos para substituir no GitHub

Substitua:

- `index.html`
- `app.js`
- `style.css`
- `sw.js`
- `studyModules.js`
- `questionFilters.js`

Adicione:

- `extraQuestions.js`
- `README-INSTALACAO-V2.md`

## Ordem correta dos scripts no `index.html`

```html
<script src="questions.js?v=830"></script>
<script src="questionFilters.js?v=830"></script>
<script src="extraQuestions.js?v=830"></script>
<script src="flashcards.js?v=830"></script>
<script src="studyModules.js?v=830"></script>
<script src="app.js?v=830"></script>
```

## Limpeza das questões antigas

O arquivo `questionFilters.js` não reescreve fisicamente o `questions.js`. Ele remove do array em memória as questões antigas que não estão marcadas como `Muito difícil` ou `TSA Ultra`.

Vantagem: reduz risco de corromper o banco grande.

Depois, se quiser, podemos fazer a limpeza física do `questions.js` em um branch separado.

## Teste após instalar

Abra:

```text
https://vlinhares80-creator.github.io/Tsa-hard-mode/?v=830
```

No console do navegador, deve aparecer:

```text
TSA Hard Mode filtro v830
TSA Hard Mode extras v830
```
