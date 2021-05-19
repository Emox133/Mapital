const catchAsync = require('./../utils/catchAsync')
const Polygon = require('./../models/polygonModel')

exports.createPolygons = catchAsync(async(req, res, next) => {
    const newPolygon = {
        latLngs: req.body.latLngs
    }

    const polygon = await Polygon.create(newPolygon)
    
    res.status(201).json({
        message: 'success',
        polygon
    })
})

exports.getPolygons = catchAsync(async(req, res, next) => {
    const polygons = await Polygon.find()

    res.status(200).json({
        message: 'success',
        polygons
    })
})