const mongoose = require('mongoose')

const markerSchema = new mongoose.Schema({
    latLng: {
        type: [Number],
        required: [true, 'Molimo vas unesite kordinate markera.']
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
        type: String,
        default: 'https://res.cloudinary.com/dajcztbmt/image/upload/v1621880539/Infrastrukturni_Problem_tnsgg0.png'
    }
})

const Marker = mongoose.model('Marker', markerSchema)

module.exports = Marker