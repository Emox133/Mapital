const express = require('express')
const circleController = require('../controllers/circleController')
// CHANGE THIS BELLOW LATER
const markerController = require('../controllers/markerController')

const router = express.Router()

router.route('/')
.get(circleController.getCircles)
.post(markerController.checkForPhoto, circleController.createCircle)

module.exports = router