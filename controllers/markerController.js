const catchAsync = require('./../utils/catchAsync') 
const Marker = require('./../models/markerModel') 

exports.createMarkers = catchAsync(async(req, res, next) => {
    const newMarker = {
        latLng: req.body.latLng,
        category: req.body.category,
        description: req.body.description
    }

    const marker = await Marker.create(newMarker)
    
    res.status(201).json({
        message: 'success',
        marker
    })
})

exports.getMarkers = catchAsync(async(req, res, next) => {
    const markers = await Marker.find()

    res.status(200).json({
        message: 'success',
        markers
    })
})

exports.getMarker = catchAsync(async(req, res, next) => {
    const marker = await Marker.findById(req.params.id)

    res.status(200).json({
        message: 'success',
        marker
    })
})