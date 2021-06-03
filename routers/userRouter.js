const express = require('express')
const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')

const router = express.Router()

router.route('/signup')
.post(authController.signup)
router.route('/login')
.post(authController.login)

// PROTECTED ROUTES BELLOW
router.use(authController.protectRoutes)
router.route('/me').get(userController.getMe)

// ADMINSTRATOR ROUTES ONLY
router.use(authController.restrictTo('admin'))
router.route('/').get(userController.getAllUsers)

module.exports = router