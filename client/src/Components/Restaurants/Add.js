
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from '../../images/menuss.png'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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

    <div style={{backgroundColor:"black"}}>
			      
		<br/>
   
<div className="container-fluid px-1 px-md-7 px-lg-1 px-xl-5 py-10 mx-auto " style={{backgroundColor:"black"}}>

                   <div className="card card0 border-0" style={{backgroundColor:"black"}}>
               
                     <br></br>
               
                       <div className="row d-flex" >
                  
                           <div className="col-lg-6" >
                               <div className="card1 pb-5">
                          
                                   <div className="row px-3 justify-content-center mt-4 mb-5 border-line" > <img  src={logo} style={{height:"240%" ,width:"250%" , marginTop:"40%"}} className="image" /> </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                           <h1 style={{color:"red" }} >Add New Menu item  </h1>
                               <div className="card2 card border-0 px-4 py-5" style={{backgroundColor:"black"}}>
                               <form onSubmit={changeOnClick} encType="">
                        
                               <br></br>
                            
                                   <div class="form-floating mb-3">
                                   <label for="" style={{color:"white" , fontSize:"20px"}}>  Food Name </label><br></br><br></br>
                                       <input type="text" class="form-control" id="floatingInput"  style={{width:"200%"}}    onChange={(f) => setfoodName(f.target.value)}  required placeholder="food name " />
                                   
                                   </div>
                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingPassword" style={{color:"white" , fontSize:"20px"}}  >Food Price </label>
                                       <input  class="form-control" id="floatingPassword"  style={{width:"200%"}}    onChange={(f) => setprice(f.target.value)}  required  type="number"   placeholder="Food Price " />
                                     
                                   </div>

                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"white" , fontSize:"20px"}}  >  Restaurants Type </label>
                                    
                                       <input type="text" class="form-control" id="exampleFormControlTextarea3"  style={{width:"200%"}}   onChange={(f) => setRestaurantsType(f.target.value)}  required  placeholder="  Restaurants Type"  >
                                       </input>

                                   </div>

                                  
                                   
                                   
                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"white" , fontSize:"20px"}}  >  Description </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"   style={{width:"200%"}}  onChange={(f) => setDescription(f.target.value)}  required  placeholder=" food Description"    rows="6">
                                       </textarea>

                                   </div>


                                 

                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"white" , fontSize:"20px"}}  >  Image Link </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3" style={{width:"200%"}}    onChange={(f) => setimages(f.target.value)}  required  placeholder="  food image link   "  rows="6">
                                       </textarea>

                                   </div>







                              
                                   <div className="row mb-5 px-4">
                                       <a ><button  type="submit"   style={{ fontSize:"15px"  }}   className="btn btn-danger">Add Menu  </button></a>
                                      <br></br><br></br>
                                      <a ><Link  to ="/AllMenus"><button  type="submit"   style={{ fontSize:"10px"  }}    className="btn btn-success">Back to Home    </button></Link></a>

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
