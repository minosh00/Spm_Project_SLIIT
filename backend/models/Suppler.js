const mongoose = require("mongoose");

const SupplySchema = mongoose.Schema({

    
   
    suppliername:{type:String , required:true},

    supplierCompanyName:{type:String , required:true},

    SupplyItemsname:{type:String, required:true},

    SupplyDate:{type:String, required:true},

    totalPrice:{type:String, required:true},


},{
    timestamps:true,
}) 

const SupplyModel =mongoose.model('supplier' , SupplySchema)

module.exports = SupplyModel