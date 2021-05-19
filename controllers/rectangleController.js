const catchAsync = require('./../utils/catchAsync') 
const Rectangle = require('./../models/rectangleModel') 

exports.createRectangle = catchAsync(async(req, res, next) => {
    const newRectangle = {
        northEastCoordinates: req.body.northEast,
        southWestCoordinates: req.body.southWest
    }

    const rectangle = await Rectangle.create(newRectangle)
    
    res.status(201).json({
        message: 'success',
        rectangle
    })
})

exports.getRectangles = catchAsync(async(req, res, next) => {
    const rectangles = await Rectangle.find()

    res.status(200).json({
        message: 'success',
        rectangles
    })
})