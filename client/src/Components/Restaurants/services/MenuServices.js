import axios from 'axios';


let getGroupURL = "http://localhost:5000/foods/getAllMenu/"; 
let getGroupByIdURL = "http://localhost:5000/foods/getMenuById/";
let updateGroupByIdURL = "http://localhost:5000/foods/updateMenuByID/";



export async function updateMenuByID(id,data) {
    const alldata = {
      
        foodName:data.foodName,
        price:data.price,
        RestaurantsType:data.RestaurantsType,
        Description:data.Description,
        images:data.images,
    
    };


    return await axios.patch(updateGroupByIdURL + id,alldata);
}

export async function getAllMenu() { 
    return await axios.get(getGroupURL);
}

export async function getMenuById(id) { 
    return await axios.get(getGroupByIdURL + id);
}





