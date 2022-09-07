const express = require("express");
const router = express.Router();

const {getMenuById,createMenu,updateMenuByID,getAllMenu} = require("../Controllers/Menu.controller");


router.post("/menu",createMenu);
router.get("/menu",getAllMenu);
router.get("/menu/:id",getMenuById);
router.patch("/menu/:id",updateMenuByID);



module.exports = router;