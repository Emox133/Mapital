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
    }
})

const Circle = mongoose.model('Circle', circleSchema)

module.exports = Circle