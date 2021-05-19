const catchAsync = require('./../utils/catchAsync') 
const Circle = require('./../models/circleModel') 

exports.createCircle = catchAsync(async(req, res, next) => {
    const newCircle = {
        coordinates: req.body.coordinates,
        radius: req.body.radius,
    }

    const circle = await Circle.create(newCircle)
    
    res.status(201).json({
        message: 'success',
        circle
    })
})

exports.getCircles = catchAsync(async(req, res, next) => {
    const circles = await Circle.find()
    
    res.status(200).json({
        message: 'success',
        circles
    })
})