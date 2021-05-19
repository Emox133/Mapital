const mongoose = require('mongoose')

const polygonSchema = new mongoose.Schema({
    latLngs: {
        type: [[]],
        required: [true, 'Molimo vas unesite kordinate u cilju kreacije polygona.']
    }
})

const Polygon = mongoose.model('Polygon', polygonSchema)

module.exports = Polygon