const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
    name: { type: String, required: true },
    maxcount: { type: String, required: true },
    rentperday: { type: String, required: true },
    imageurls: [],
    type: { type: String, required: true },
    features: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
})

const RoomModel = mongoose.model('rooms', RoomSchema)
module.exports = RoomModel