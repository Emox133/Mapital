const mongoose = require('mongoose')

const circleSchema = new mongoose.Schema({
    coordinates: {
        type: [Number],
        required: [true, 'Molimo vas unesite kordinate kruga.']
    },
    radius: {
        type: Number,
        required: [true, 'Molimo vas unesite radius kruga.']
    }
})

const Circle = mongoose.model('Circle', circleSchema)

module.exports = Circle