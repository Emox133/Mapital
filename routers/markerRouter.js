const express = require('express')
const markerController = require('../controllers/markerController')

const router = express.Router()

router.route('/')
.get(markerController.getMarkers)
.post(markerController.createMarkers)

router.route('/:id')
.get(markerController.getMarker)

module.exports = router