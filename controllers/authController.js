const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const User = require('../models/UserModel')
const signToken = require('./../utils/signToken')
const jwt = require('jsonwebtoken')
const {promisify} = require('util')

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
        return next(new AppError('Molimo vas unesite email i lozinku.', 400))
    }

    const user = await User.findOne({email}).select('+password')

    if(!user || !await user.comparePasswords(password, user.password)) {
        return next(new AppError('Netačan e-mail ili lozinka.', 401))
    }

    const token = signToken(user._id)

    res.status(201).json({
        message: 'success',
        token
    })
})

exports.protectRoutes = catchAsync(async(req, res, next) => {
    let token

    // 1) Check if we have a authorization header
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token) {
        return next(new AppError('Neispravan token.', 401))
    }

    // 2) In this place we know that there is a token, so we verify it
    const decodedToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    const currentUser = await User.findById(decodedToken.id)

    if(!currentUser) {
        return next(new AppError('Korisnik povezan sa ovim tokenom više ne postoji.', 401))
    }

    // 3) Assing currently authenticated user to req.obj and send it further through "stack"
    req.user = currentUser

    next()
})

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(new AppError('Nemate neophodna ovlaštenja da bi ste izvršili ovaj tip akcije.'))
        }
        next()
    }
}
