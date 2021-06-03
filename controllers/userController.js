const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const User = require('../models/UserModel')

exports.getAllUsers = catchAsync(async(req, res, next) => {
    const users = await User.find()

    if(!users) {
        return new AppError('Nijedan korisnik nije pronađen', 404)
    }

    res.status(200).json({
        status: 'success',
        users
    })
})

exports.getMe = catchAsync(async(req, res, next) => {
    const user = await User.find({_id: req.user._id})

    if(!user) return next(new AppError('Korisnik nije pronađen', 404))

    res.status(200).json({
        message: 'success',
        user
    })
})