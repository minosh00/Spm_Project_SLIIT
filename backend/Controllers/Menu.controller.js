
const mongoose = require('mongoose');
const Groups = require("../models/Menu.models");




const getAllMenu = async (req, res) => { 
    try {
        const groups = await Groups.find();
                 
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





const updateMenuByID = async (req, res) => {
    const { id } = req.params;
    const {      foodName ,price ,Description,RestaurantsType,images    } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No menu with id: ${id}`);

    const updatedGroups = {    foodName ,price ,Description,RestaurantsType,images ,_id:id};

    await Groups.findByIdAndUpdate(id, updatedGroups, { new: true });

    res.json(updatedGroups);
}




const RemoveFood = async (request,response) => {
    await Groups.findByIdAndRemove(request.params.id,(error,food) => {
        if(error){
            response.status(500).json({ error: error.message });
        }
        else{
            response.status(200).
            json({
                success: true,
                food: food
            })
        }
    })
}





const createMenu= async (req, res) => {

    const groups = req.body;

    
        if(groups.foodName.length<5)
        return res.status(400).json({
            errorMessage: "Please enter a foodName of at least 12 characters.",
        });
    
    
    


    const newGroups = new Groups({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}







const getMenuById = async (req, res) => { 
    const { id } = req.params;

    try {
        const groups = await Groups.findById(id);
        
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports ={getMenuById,createMenu,updateMenuByID,getAllMenu,RemoveFood};



