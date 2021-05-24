const mongoose = require('mongoose')

const markerSchema = new mongoose.Schema({
    latLng: {
        type: [Number]
    },
    category: {
        type: String,
        required: [true, 'Molimo vas unesite kategoriju događaja.']
        // enum: ['Infrastrukturni problem', 'Saobraćajna nezgoda', 'Opasne lokacije']
    },
    description: {
        type: String,
        required: [true, 'Molimo vas unesite detalje događaja.']
    },
    image: {
        type: String
    }
})

const Marker = mongoose.model('Marker', markerSchema)

module.exports = Marker