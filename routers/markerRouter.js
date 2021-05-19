const express = require('express')
const markerController = require('../controllers/markerController')

const router = express.Router()

router.route('/')
.get(markerController.getMarkers)
.post(markerController.createMarkers)

module.exports = router