const mongoose = require('mongoose')

const circleSchema = new mongoose.Schema({
    coordinates: {
        type: [Number],
        required: [true, 'Molimo vas unesite kordinate kruga.']
    },
    radius: {
        type: Number,
        required: [true, 'Molimo vas unesite radius kruga.']
    },
    description: {
        type: String,
        required: [true, 'Molimo vas unesite detalje unosa.']
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dajcztbmt/image/upload/v1622551947/Infrastrukturni_Problem_qxymgr.png',
        required: [true, 'Molimo vas unesite fotografiju koja odgovara odabranom mjestu.']
    }
})

const Circle = mongoose.model('Circle', circleSchema)

module.exports = Circle