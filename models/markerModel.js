const mongoose = require('mongoose')
const validator = require('validator')

const markerSchema = new mongoose.Schema({
    latLng: {
        type: [Number],
        required: [true, 'Molimo vas unesite kordinate markera.']
    },
    name: {
        type: String,
        default: 'Pošiljaoc je želio ostati anoniman.'
    },
    email: {
        type: String,
        default: 'mapital.development750@gmail.com'
    },
    sender: {
        type: String,
        default: 'Pošiljaoc je želio ostati anoniman.'
    },
    category: {
        type: String,
        required: [true, 'Molimo vas unesite kategoriju događaja.']
    },
    description: {
        type: String,
        required: [true, 'Molimo vas unesite detalje događaja.']
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dajcztbmt/image/upload/v1622551947/Infrastrukturni_Problem_qxymgr.png'
    }
})

const Marker = mongoose.model('Marker', markerSchema)

module.exports = Marker