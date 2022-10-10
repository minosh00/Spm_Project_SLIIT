const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const ROOMS = require("../models/Rooms");

router.post('/bookroom', async (req, res) => {
    const {
        room,
        userid,
        fromdate,
        todate,
        totAmount,
        totDates
    } = req.body

    try {
        const newBooking = new Booking({
            room,
            userid,
            fromdate,
            todate,
            totAmount,
            totDates,
            transactionID: '1234'
        })
        const booking = await newBooking.save();
        const roomtemp = await ROOMS.findOne({ _id: userid._id })
        roomtemp.currentbookings.push({
            bookingid: booking._id,
            fromdate: fromdate,
            todate: todate,
            userid: userid,
            status: booking.status
        });

        await roomtemp.save()
        res.send('Room Booked Successfully');

    } catch (error) {
        return res.status(400).json({ error })
    }
});

router.get('/viewbook', async (req, res) => {
    try {
        const book = await Booking.find();
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

module.exports = router;