const catchAsync = require("../utils/catchAsync");
const Event = require('./../models/eventModel');
const Circle = require('./../models/circleModel')
const Rectangle = require('./../models/rectangleModel')
const Polyline = require('./../models/polylineModel')
const Polygon = require('../models/polygonModel');
const Marker = require('../models/markerModel');

exports.createEvent = catchAsync(async(req, res, next) => {
    const newEvent = {
        leafletId: req.body.leafletId,
        name: req.body.name,
        description: req.body.description,
        email: req.body.email
    }

    const event = await Event.create(newEvent)

    res.status(201).json({
        message: 'success',
        event
    })
})

