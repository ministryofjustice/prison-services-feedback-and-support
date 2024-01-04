const nunjucks = require('nunjucks')
const config = require('./config')

module.exports = (app) => {
  const njkEnv = nunjucks.configure(
    [
      'node_modules/govuk-frontend/dist/',
      'node_modules/govuk-frontend/dist/govuk/components/',
      'node_modules/@ministryofjustice/frontend/',
      'views',
    ],
    {
      autoescape: true,
      express: app,
    }
  )

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

  njkEnv.addGlobal('oauthUrl', config.urls.oauth)
  njkEnv.addGlobal('googleAnalyticsId', config.app.googleAnalyticsId)

  return njkEnv
}
