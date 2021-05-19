const catchAsync = require('./../utils/catchAsync')
const Polyline = require('./../models/polylineModel')

exports.createPolylines = catchAsync(async(req, res, next) => {
    const newPolyline = {
        latLngs: req.body.latLngs
    }

    const polyline = await Polyline.create(newPolyline)
    
    res.status(201).json({
        message: 'success',
        polyline
    })
})

exports.getPolylines = catchAsync(async(req, res, next) => {
    const polylines = await Polyline.find()

    res.status(200).json({
        message: 'success',
        polylines
    })
})