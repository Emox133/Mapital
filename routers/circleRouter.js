const express = require('express')
const circleController = require('../controllers/circleController')

const router = express.Router()

router.route('/')
.get(circleController.getCircles)
.post(circleController.createCircle)

module.exports = router