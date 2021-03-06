const catchAsync = require('./../utils/catchAsync') 
const Marker = require('./../models/markerModel') 
const {uploadMarkerPhoto} = require('../utils/uploadMarkerPhoto')
const cloudinary = require('cloudinary').v2
const Email = require('./../utils/nodemailer')
const AppError = require('../utils/appError')

exports.checkForPhoto = catchAsync(async (req, res, next) => {
    if(req.files) {
        uploadMarkerPhoto(req)
        await cloudinary.uploader.upload(req.files.joinedTemp, (err, img) => {
            if(img) {
                // console.log(img)
                req.files.image = img.secure_url
            }
            if(err) {
                console.log(err)
            }
        })
    }
    next()
})

exports.createMarkers = catchAsync(async(req, res, next) => {
    const newMarker = await Marker.create({
        latLng: [Number.parseFloat(req.body.latLng.split(',')[0]), Number.parseFloat(req.body.latLng.split(',')[1])],
        name: req.body.name,
        category: req.body.category,
        sender: req.body.sender,
        description: req.body.description,
        image: req.files ? req.files.image : req.body.image
    })

    // const email = await new Email(newMarker).send()
    // console.log(email)

    res.status(201).json({
        message: 'success',
        newMarker
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

exports.updateMarker = catchAsync(async(req, res, next) => {
    const updatedMarker = await Marker.findOneAndUpdate({_id: req.params.id, })

    if(!updatedMarker) {
        return next(new AppError('Marker neuspješno ažuriran...'))
    }


})