const mongoose = require('mongoose')

const markerSchema = new mongoose.Schema({
    latLng: {
        type: [Number]
    },
    category: {
        type: String,
        required: [true, 'Molimo vas unesite kategoriju događaja.']
        // enum: ['Infrastrukturni problem', 'Saobraćajna nezgoda', 'Opasne lokacije']
    }
})

const Marker = mongoose.model('Marker', markerSchema)

module.exports = Marker