const express = require('express')
const polygonController = require('../controllers/polygonController')

const router = express.Router()

router.route('/')
.get(polygonController.getPolygons)
.post(polygonController.createPolygons)

module.exports = router