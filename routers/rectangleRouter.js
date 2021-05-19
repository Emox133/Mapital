const express = require('express')
const rectangleController = require('../controllers/rectangleController')

const router = express.Router()

router.route('/')
.get(rectangleController.getRectangles)
.post(rectangleController.createRectangle)

module.exports = router