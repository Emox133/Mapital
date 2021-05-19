const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    leafletId: {
        type: Number
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    email: {
        type: String
    }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event