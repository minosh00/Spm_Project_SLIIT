const express = require('express');
const router = express.Router();

const FoodService = require('../controllers/Food.Controller');

module.exports = () => {
    router.get('/', FoodService.getAllFoods);
    router.post('/add', FoodService.addFood);
    router.get('/:id', FoodService.getFoodByID);
    router.put('/', FoodService.updateFoodItem);
    router.delete('/:id',FoodService.RemoveFood)

    return router;
}

