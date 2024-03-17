module.exports = async function ($) {
  return /* HTML */ `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${$.page.title || 'Components'}</title>
        ${$.script('/bundle.js')} ${$.style('/bundle.css')}
        ${process.env.NODE_ENV == 'development' ? $.script('/js/dev.js') : ''}
      </head>
      <body>
        <main>${$.page.content}</main>
        <script>
          ${Object.keys($.app.components)
            .map(function (name) {
              return `customElements.define('${name}', ${$.app.components[name]})`
            })
            .join('\n\n')}
        </script>
      </body>
    </html>`
}
