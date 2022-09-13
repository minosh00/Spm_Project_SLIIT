const router = require('express').Router();
const RoomsReservationController = require('../Controllers/RoomsReservationController');

router.route('/rooms')
    .get(RoomsReservationController.getRooms_Reservation)
    .post(RoomsReservationController.createRooms_DescriptionReservation);

router.route('/rooms/:id')
    .get(RoomsReservationController.getRooms_ReservationByID)
    .put(RoomsReservationController.updateRooms_Reservation)
    .delete(RoomsReservationController.deleteRooms_Reservation);

router.route('/search/:type')
    .get(RoomsReservationController.getRooms_Type);

module.exports = router;