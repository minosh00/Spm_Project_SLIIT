
export const Validateroom=(formData) =>{

    const messages ={
       NAME :"The room Name should at least be 3 letters...",
       MAXCOUNT : "The max count  value   should at least be 1 letters...",
       RENTPERDAY : " The RENT PER DAY  should at least be 3 letters...",
       DESCRIPTION : "The description should at least be 3 letters..."
    };

    const output ={
            status : false,
            message : null
    };

    if(formData.name.length <= 2 )
    {
        output.message = messages.NAME;
        output.status = false;
        return output;
    
    }
    if(formData.maxcount.length <= 2)
    {
        output.message = messages.MAXCOUNT;
        output.status = false;
        return output;
    } 
    if(formData.rentperday.length <= 2)
    {
        output.message = messages.RENTPERDAY;
        output.status = false;
        return output;
    } 
    if(formData.description.length <= 2)
    {
        output.message = messages.DESCRIPTION;
        output.status = false;
        return output;
    } 
    else
    {
        output.status = true;
        return output;
    }
 
};