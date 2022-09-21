const express = require("express");
const router = express.Router();

const { getAllRooms, updateRoomsByID, RemoveRooms, createRooms, getRoomsById, updateRoomsByID1 } = require("../Controllers/Room.controller");

router.post("/room", createRooms);
router.get("/getAllRooms", getAllRooms);
router.get("/getRoomsById/:id", getRoomsById);
router.patch("/updateRoomsByID/:id", updateRoomsByID);
router.delete("/RemoveRooms/:id", RemoveRooms);
router.patch("/updateRoomsByID1/:id", updateRoomsByID1);

module.exports = router;