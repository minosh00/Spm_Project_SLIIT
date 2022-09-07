 

import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from '../../images/menuss.png'



const AddMenu = () => {


  

  const [foodName, setfoodName] = useState("");
  const [price, setprice] = useState();
  const [RestaurantsType, setRestaurantsType] = useState("");
  const [Description, setDescription] = useState("");
  const [images, setimages] = useState("");




  const changeOnClick = (f) => {
    

    const addmenu = {

        foodName,
        price,
        RestaurantsType,
        Description,
        images,
  
    };

    axios.post("http://localhost:5000/foods/menu", addmenu);

    Swal.fire("Congrats", " New Menu Added  successfully", "success")

  

    
    
  };
  return (

    <div>
			      
		<br/>
   
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                   <div className="card card0 border-0">
                     <br></br>
               
                       <div className="row d-flex">
                           <div className="col-lg-6">
                               <div className="card1 pb-5">
                          
                                   <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img  src={logo} style={{height:"700px" ,width:"400px"}} className="image" /> </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                       
                               <div className="card2 card border-0 px-4 py-5">
                               <form onSubmit={changeOnClick} encType="">
                               <h1 style={{color:"red"}} >Add New Menu item  </h1>
                               <br></br>
                            
                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Food Name </label>
                                       <input type="text" class="form-control" id="floatingInput"      onChange={(f) => setfoodName(f.target.value)}  required placeholder="food name " />
                                   
                                   </div>
                                   <div class="form-floating mb-3">
                                   <label for="floatingPassword">Food Price </label>
                                       <input  class="form-control" id="floatingPassword"  onChange={(f) => setprice(f.target.value)}  required  type="number"   placeholder="Food Price " />
                                     
                                   </div>

                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Restaurants Type </label>
                                    
                                       <input type="text" class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setRestaurantsType(f.target.value)}  required  placeholder="  Restaurants Type"  >
                                       </input>

                                   </div>

                                  
                                   
                                   
                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Description </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setDescription(f.target.value)}  required  placeholder=" food Description"    rows="6">
                                       </textarea>

                                   </div>


                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Gruop Members Emails </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setGruopMembersEmail(f.target.value)}  required  placeholder="  Gruop Members emails"  rows="6">
                                       </textarea>

                                   </div>


                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Image Link </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setimages(f.target.value)}  required  placeholder="  food image link   "  rows="6">
                                       </textarea>

                                   </div>







                              
                                   <div className="row mb-5 px-4">
                                       <a ><button  type="submit"  className="btn btn-blue ">Add Menu  </button></a>
                                      
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

export default AddMenu;
