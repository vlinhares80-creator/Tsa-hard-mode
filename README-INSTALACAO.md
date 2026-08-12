# TSA Hard Mode — Study Modules v1

Pacote v820.

## Arquivos incluídos

- `index.html`
- `app.js`
- `style.css`
- `sw.js`
- `studyModules.js`
- `questionFilters.js`

## O que mudou

1. Adicionada nova aba: **Apostilas e revisão rápida**.
2. Adicionados 3 módulos iniciais:
   - Sulfato de magnésio na pré-eclâmpsia
   - Anestésicos locais e toxicidade sistêmica
   - Marcapasso e cardiodesfibrilador implantável
3. Corrigidas versões de cache para `v820`.
4. Adicionado `questionFilters.js`, que remove do app as questões antigas marcadas como:
   - média / médio
   - difícil
   - alta

As questões `Muito difícil` e `TSA Ultra` são preservadas.

## Importante sobre o `questions.js`

Este pacote **não substitui fisicamente** o arquivo gigante `questions.js`. Em vez disso, o arquivo `questionFilters.js` filtra o banco em memória logo após o carregamento.

Na prática, as questões antigas fáceis deixam de aparecer no app, nos simulados e nas estatísticas. Essa abordagem é mais segura porque evita corromper o `questions.js`, que já está grande.

Se depois quiser uma limpeza física definitiva do `questions.js`, o ideal é fazer em um branch separado e validar com teste antes de publicar.

## Como instalar no GitHub

1. Abra o repositório `Tsa-hard-mode`.
2. Substitua os arquivos existentes:
   - `index.html`
   - `app.js`
   - `style.css`
   - `sw.js`
3. Adicione os novos arquivos:
   - `studyModules.js`
   - `questionFilters.js`
4. Faça commit.
5. Abra o app com:

```text
https://vlinhares80-creator.github.io/Tsa-hard-mode/?v=820
```

## Se o app parecer antigo

No navegador:

1. Atualize com `Ctrl + F5`.
2. Se estiver instalado como PWA, feche e abra novamente.
3. Se necessário, limpe dados do site ou aguarde o novo service worker assumir.

## Verificação rápida

No dashboard deve aparecer uma linha informando quantas questões antigas foram removidas desta sessão.

Exemplo:

```text
120 questões médias/difíceis antigas foram removidas desta sessão.
```

O número exato depende do banco atual.
