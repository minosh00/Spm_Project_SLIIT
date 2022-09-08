
export const ValidateAddNewMenu=(formData) =>{

    const messages ={
       FOOD_NAME_EMPTY :"The Food Name should at least be 3 letters...",
       PRICE_EMPTY : "The price should at least be 3 letters...",
       RESTURANT_TYPE_EMPTY : " The resturant should at least be 3 letters...",
       DESCRIPTION_EMPTY : "The description should at least be 3 letters..."
    };

    const output ={
            status : false,
            message : null
    };

    if(formData.foodName.length <= 2 )
    {
        output.message = messages.FOOD_NAME_EMPTY;
        output.status = false;
        return output;
    
    }
    if(formData.price.length <= 2)
    {
        output.message = messages.PRICE_EMPTY;
        output.status = false;
        return output;
    } 
    if(formData.RestaurantsType.length <= 2)
    {
        output.message = messages.RESTURANT_TYPE_EMPTY;
        output.status = false;
        return output;
    } 
    if(formData.Description.length <= 2)
    {
        output.message = messages.DESCRIPTION_EMPTY;
        output.status = false;
        return output;
    } 
    else
    {
        output.status = true;
        return output;
    }
 
};