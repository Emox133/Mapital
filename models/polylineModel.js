const mongoose = require('mongoose')

const polylineSchema = new mongoose.Schema({
    latLngs: {
        type: [[]],
        required: [true, 'Molimo vas unesite kordinate u cilju kreacije polyline-a.']
    }
})

const Polyline = mongoose.model('Polyline', polylineSchema)

module.exports = Polyline