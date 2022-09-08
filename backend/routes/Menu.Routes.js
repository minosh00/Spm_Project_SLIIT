const express = require("express");
const router = express.Router();

const {getMenuById,createMenu,updateMenuByID,getAllMenu,RemoveFood} = require("../Controllers/Menu.controller");


router.post("/menu",createMenu);
router.get("/getAllMenu",getAllMenu);
router.get("/getMenuById/:id",getMenuById);
router.patch("/updateMenuByID/:id",updateMenuByID);
router.patch("/updateMenuByID/:id",updateMenuByID);
router.delete("/RemoveFood/:id",RemoveFood);


module.exports = router;