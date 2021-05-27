const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const User = require('../models/UserModel')
const signToken = require('./../utils/signToken')

exports.signup = catchAsync(async(req, res, next) => {
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })

    const token = signToken(newUser._id)

    res.status(201).json({
        message: 'success',
        token
    })
})

exports.login = catchAsync(async(req, res, next) => {
    const {email, password} = req.body

    if(!email || !password) {
        return new AppError('Molimo vas unesite email i lozinku.', 400)
    }

    const user = await User.findOne({email}).select('+password')

    if(!user || !await user.comparePasswords(password, user.password)) {
        return new AppError('Netačan e-mail ili lozinka.', 401)
    }

    const token = signToken(user._id)

    res.status(200).json({
        message: 'success',
        token
    })
})