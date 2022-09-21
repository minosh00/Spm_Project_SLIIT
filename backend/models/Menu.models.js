const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({

    
   
    foodName:{type:String , required:true},

    price:{type:String , required:true},

    Description:{type:String, required:true},

    images:{type:String, required:true},

    RestaurantsType:{type:String, required:true},


},{
    timestamps:true,
}) 

const MenuModel =mongoose.model('menu_items' , MenuSchema)

module.exports = MenuModel