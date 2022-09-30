const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/bookroom', async (req, res) => {
    const {
        room,
        userid,
        fromdate,
        todate,
        totalamount,
        totDates
    } = req.body

    try {
        const newBooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totalamount,
            totDates,
            transactionID: '1234'
        })
        const booking = await newBooking.save();
        res.send('Room Booked Successfully');

    } catch (error) {
        return res.status(400).json({error})
    }
});

module.exports = router;