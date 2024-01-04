const express = require('express')
const path = require('path')

const router = express.Router()

module.exports = () => {
  router.use(express.static(path.join(__dirname, 'build/static')))

  const assetPaths = ['./node_modules/govuk-frontend/dist/govuk/assets', './node_modules/govuk-frontend/dist']

  assetPaths.forEach((dir) => {
    router.use('/assets', express.static(path.join(__dirname, dir)))
  })

  return router
}
