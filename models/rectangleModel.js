const mongoose = require('mongoose')

const rectangleSchema = new mongoose.Schema({
    northEastCoordinates: {
        type: [Number],
        required: [true, 'Molimo vas unesite sjeveroistočne kordinate pravougaonika']
    },
    southWestCoordinates: {
        type: [Number],
        required: [true, 'Molimo vas unesite jugozapadne kordinate pravougaonika']
    }
})

const Rectangle = mongoose.model('Rectangle', rectangleSchema)

module.exports = Rectangle