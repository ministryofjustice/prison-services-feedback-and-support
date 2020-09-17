const nunjucks = require('nunjucks')

module.exports = (app) => {
  const njkEnv = nunjucks.configure(['node_modules/govuk-frontend/', 'views'], {
    autoescape: true,
    express: app,
  })

  njkEnv.addFilter('findError', (array, formFieldId) => {
    if (!array) return null
    const item = array.find((error) => error.href === `#${formFieldId}`)
    if (item) {
      return {
        text: item.text,
      }
    }
    return null
  })

  return njkEnv
}
