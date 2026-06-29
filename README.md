# TSA Hard Mode — protótipo inicial

Site/PWA simples para questões comentadas de anestesiologia.

## O que tem nesta versão

- 101 questões A–E comentadas (11 iniciais + 90 novas)
- Filtro por capítulo e tema
- Modo estudo
- Simulado de 10 questões
- Revisão de erros
- Caderno simples de progresso salvo no navegador
- Pode ser instalado no iPhone como PWA

## Como testar no computador

Abra o arquivo `index.html` no navegador.

## Como publicar grátis no GitHub Pages

1. Entre no GitHub e clique em **New repository**.
2. Nome sugerido: `tsa-hard-mode`.
3. Marque como **Public**.
4. Clique em **Create repository**.
5. Envie estes arquivos para o repositório: `index.html`, `style.css`, `app.js`, `manifest.json`, `sw.js`, `icon.svg`, `README.md`.
6. No repositório, vá em **Settings > Pages**.
7. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
8. Salve.
9. Aguarde 1–3 minutos. O GitHub mostrará uma URL do tipo:
   `https://SEU-USUARIO.github.io/tsa-hard-mode/`

## Como instalar no iPhone

1. Abra a URL no Safari.
2. Toque no botão de compartilhar.
3. Escolha **Adicionar à Tela de Início**.

## Como adicionar novas questões

No arquivo `app.js`, adicione novos objetos dentro da lista `QUESTIONS`, seguindo o modelo existente.


## Atualização

Esta versão inclui 90 questões adicionais baseadas nos capítulos cardiovasculares do Yao estudados no projeto.

