const express = require('express')
const markerController = require('../controllers/markerController')

const router = express.Router()

router.route('/')
.get(markerController.getMarkers)
.post(markerController.checkForPhoto, markerController.createMarkers)

router.route('/:id')
.get(markerController.getMarker)
.patch(markerController.updateMarker)

module.exports = router