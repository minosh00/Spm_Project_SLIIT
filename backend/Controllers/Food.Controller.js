const Foods = require('../models/Food');


//add new food item

const addFood = async (request, response) => {

    const food = new Foods(request.body);

    console.log(food);

    await food.save((error, food) => {
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
    });
}


//get all foods 

const getAllFoods = async (request, response) => {
    try{
        const foods = await Foods.find();
        response.status(200).
        json({
            success: true,
            foods: foods
        })
    } catch (error) {
        response.status(404).json({
            success: false,
            error: error.message
        });
    }
}



//get food item by id 
const getFoodByID = async(request,response) => {
    try {
        Foods.findById(request.params.id, (error, data) => {
            if (error) {
                response.status(500).json({error: error.message});
            } else {
                response.status(200).json({
                    success: true,
                    food: data
                })
            }
        })
    } catch (e) {
        console.log(e);
    }
}



//update food item 

const updateFoodItem = async (request,response) => {
    const food = new Foods(request.body);

    console.log(food);

    await Foods.findByIdAndUpdate(request.body._id,food,
        (error,food) => {
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
        });
}


//remove food item

const RemoveFood = async (request,response) => {
    await Foods.findByIdAndRemove(request.params.id,(error,food) => {
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


module.exports = {
    addFood,
    getFoodByID,
    RemoveFood,
    updateFoodItem,
    getAllFoods
}