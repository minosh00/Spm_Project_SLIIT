const mongoose = require('mongoose')

//create Rooms Reservation Schema
const RoomsReservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    maxcount: {
        type: Number,
        required: true
    },

    rentperday: {
        type: Number,
        required: true
    },

    imageurls: [],

    currentbookings: [],

    type: {
        type: String,
        required: true
    },

    features: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Rooms_Reservation", RoomsReservationSchema)