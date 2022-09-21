const mongoose = require('mongoose');
const ROOMS = require("../models/Rooms");

//get all rooms
const getAllRooms = async (req, res) => {
    try {
        const groups = await ROOMS.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//update rooms by ID
const updateRoomsByID = async (req, res) => {
    const { id } = req.params;
    const { name, maxcount, rentperday, imageurls, description, features, type } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No rooms with id: ${id}`);
    const updatedGroups = { name, maxcount, rentperday, imageurls, features, description, type, _id: id };
    await ROOMS.findByIdAndUpdate(id, updatedGroups, { new: true });
    res.json(updatedGroups);
}

//update rooms by ID
const updateRoomsByID1 = async (req, res) => {
    const { id } = req.params;
    const { name, maxcount, rentperday, imageurls, description, features, type } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No rooms with id: ${id}`);
    const updatedGroups = { name, maxcount, rentperday, imageurls, features, description, type, _id: id };
    await ROOMS.findByIdAndUpdate(id, updatedGroups, { new: true });
    res.json(updatedGroups);
}

//remobe room by ID
const RemoveRooms = async (request, response) => {
    await ROOMS.findByIdAndRemove(request.params.id, (error, food) => {
        if (error) {
            response.status(500).json({ error: error.message });
        }
        else {
            response.status(200).
                json({
                    success: true,
                    food: food
                })
        }
    })
}

//add new room by ID
const createRooms = async (req, res) => {
    const groups = req.body;
    if (groups.name.length < 1)
        return res.status(400).json({
            errorMessage: "Please enter a foodName of at least 23 characters.",
        });
    const newGroups = new ROOMS({ ...groups, creator: req.userId })
    try {
        await newGroups.save();
        res.status(201).json(newGroups);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get room by ID
const getRoomsById = async (req, res) => {
    const { id } = req.params;
    try {
        const groups = await ROOMS.findById(id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getAllRooms, updateRoomsByID, RemoveRooms, createRooms, getRoomsById, updateRoomsByID1 };