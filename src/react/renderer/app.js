'use strict'

export function render(title = "", content = "", state = {}) {
    let resources = `<script>window.__STATE__=${JSON.stringify(state)}</script>`;
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title> ${title} </title>
      ${resources}
    </head>
    <body>
      <div class="root">
          <div id="app" class="wrap-inner">${content}</div>
      </div>
    </body>
    `;
}