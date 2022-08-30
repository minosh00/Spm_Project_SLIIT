const mongoose = require('mongoose')

//create Rooms Reservation Schema
const RoomsReservationSchema = new mongoose.Schema({
    RoomID: {
        type: String,
        required: true,
        unique: true
    },

    RoomType: {
        type: String,
        required: true,
        unique: true
    },

    Description: {
        type: String,
        required: true
    },

    Features: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Rooms_Reservation", RoomsReservationSchema)