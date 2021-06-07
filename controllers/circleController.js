const catchAsync = require('./../utils/catchAsync') 
const Circle = require('./../models/circleModel') 

exports.createCircle = catchAsync(async(req, res, next) => {
    const newCircle = {
        coordinates: [Number.parseFloat(req.body.coordinates.split(',')[0]), Number.parseFloat(req.body.coordinates.split(',')[1])],
        radius: req.body.radius,
        description: req.body.description,
        image: req.files ? req.files.image : req.body.image
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