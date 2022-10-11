  

 import Swal from "sweetalert2";
 import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMenuById, updateMenuByID } from "./services/MenuServices";
import logo from '../../images/menuss.png'

const EditMenu = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setfoodName] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setimages] = useState("");



  const handleGroupID = (e) => {
    setfoodName(e.target.value);
  };

  const handleGruopLeaderItNumber = (e) => {
    setprice(e.target.value);
  };


  const handleGruopMembersNames= (e) => {
    setDescription(e.target.value);
  };

  const handleGroupIDemail = (e) => {
    setimages(e.target.value);
  };
 



  const GetData = async () => {

    let data = await getMenuById(id);
    console.log("Update groups", data);

    setfoodName(data?.data?.name);
    setprice(data?.data?.price);
    setDescription(data?.data?.description);
    setimages(data?.data?.images);


  };

  useEffect(() => {
    GetData();
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    let newdata = {

      name:name,
        price:price,

        description  :description,
        images:images,
           
    };

    let data = await updateMenuByID(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.name) {
      {   Swal.fire('Congrats' , 'Update menu  successfully ' , 'success')

      navigate("/AllMenus");
   }


    
    } else {

      {   Swal.fire('Congrats' , 'Update Menu successfully ' , 'success')

      navigate("/AllMenus");
			  }
     

     
    
    }
  };

  return (

    <div style={{backgroundColor:""}}>
			      
    <br/>

<div className="container-fluid px-1 px-md-7 px-lg-1 px-xl-5 py-10 mx-auto " style={{backgroundColor:""}}>

               <div className="card card0 border-0" style={{backgroundColor:""}}>
           
                 <br></br>
           
                   <div className="row d-flex" >
                  
                       <div className="col-lg-6" >
                       <h2 style={{color:"red" , fontSize:"40px" , marginLeft:"10%"}} >Update  Menu item  </h2>
                           <div className="card1 pb-5">
                      
                               <div className="row px-3 justify-content-center mt-4 mb-5 border-line" > <img  src={logo} style={{height:"240%" ,width:"250%" , marginTop:"40%"}} className="image" /> </div>
                           </div>

                   
                       </div>

                       
                       <div className="col-lg-6">
                   
                           <div className="col-lg-6" style={{backgroundColor:""}}>
                           <form  encType="">
                       
                           <br></br>
                        
                               <div class="form-floating mb-3">
                               <label for="" style={{color:"" , fontSize:"20px"}}>  Food Name </label><br></br><br></br>
                                   <input type="text" class="form-control" id="floatingInput"  style={{width:"190%"}}      value={name}   onChange={handleGroupID}   required placeholder="food name " />
                               
                               </div>
                               <div class="form-floating mb-3"><br></br><br></br>
                               <label for="floatingPassword" style={{color:"" , fontSize:"20px"}} >Food Price </label>
                                   <input  class="form-control" id="floatingPassword"  style={{width:"190%"}}   value={price}   onChange={handleGruopLeaderItNumber}  required  type="number"   placeholder="Food Price " />
                                 
                               </div>

                          

                              
                               
                               
                               <div class="form-floating mb-3"><br></br><br></br>
                               <label for="floatingInput" style={{color:"" , fontSize:"20px"}} >  Description </label>
                                
                                   <textarea class="form-control" id="exampleFormControlTextarea3"   style={{width:"190%"}}    value={description}

onChange={handleGruopMembersNames}  required  placeholder=" food Description"    rows="6">
                                   </textarea>

                               </div>


                             

                               <div class="form-floating mb-3"><br></br><br></br>
                               <label for="floatingInput" style={{color:"" , fontSize:"20px"}} >  Image Link </label>
                                
                                   <textarea class="form-control" id="exampleFormControlTextarea3" style={{width:"190%"}}  value={images}  onChange={handleGroupIDemail} required  placeholder="  food image link   "  rows="6">
                                   </textarea>

                               </div>







                          
                               <div className="row mb-7 px-6">
                                   <a ><button  type="submit"   style={{ fontSize:"15px"  }}   onClick={(e) => UpdateData(e)} className="btn btn-warning">Update Menu     </button></a><br></br><br></br><br></br>
                                   <a ><Link  to ="/AllMenus"><button  type="submit"   style={{ fontSize:"15px"  }}    className="btn btn-success">Back to Home    </button></Link></a>

                               </div>
                               </form>
                               <div>
                                 
                           
                                   
                               </div>
                               
                           </div>
                       </div>
                   </div>
                 
           
               </div>
           </div>
           </div>
  );
};

export default EditMenu;