const express = require('express')
const healthController = require('../controllers/healthController')

const router = express.Router()

router.get('/', (req, res) => res.redirect('/feedback-and-support'))
router.get('/health', healthController.health)
router.get('/ping', (req, res) => res.send('pong'))

module.exports = router
