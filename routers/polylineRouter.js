const express = require('express')
const polylineController = require('../controllers/polylineController')

const router = express.Router()

router.route('/')
.get(polylineController.getPolylines)
.post(polylineController.createPolylines)

module.exports = router