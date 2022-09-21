
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from '../../images/hotel-room.jpg'
import { Validateroom } from "./roomVaildate";

const AddRoom = () => {

  const [name, setname] = useState("");
  const [maxcount, setmaxcount] = useState();
  const [rentperday, setrentperday] = useState("");
  const [type, settype] = useState("");
  const [imageurls, setimageurls] = useState("");
  const [features, setfeatures] = useState("");
  const [description, setdescription] = useState("");

 


  const navigate = useNavigate();


  const changeOnClick = (f) => {
    

    const AddRoom = {

        name,
        maxcount,
        rentperday,
        type,
        imageurls,
        features,
        description
  
    };

    let validate = Validateroom(AddRoom);
    let msg = validate?.message;
    if(validate.status == false)
    {
        Swal.fire({
            toast: true,
            icon: 'warning',
           html:alert(`${msg}`),
           
            animation: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
        });
    } else {
       
            axios.post("http://localhost:5000/room/room", AddRoom);

            Swal.fire("Congrats", " New room  Added  successfully", "success")
            navigate("/allrooms");;
    

    }

    
    
  };
  return (

    <div style={{backgroundColor:"#D5D5CE"}}>
			      
		<br/>
   
<div className="container-fluid px-1 px-md-7 px-lg-1 px-xl-5 py-10 mx-auto " style={{backgroundColor:"#D5D5CE"}}>

                   <div className="card card0 border-0" style={{backgroundColor:"#D5D5CE"}}>
               
                     <br></br>
               
                       <div className="row d-flex" >
                  
                           <div className="col-lg-6" >
                               <div className="card1 pb-5">
                          
                                   <div className="row px-3 justify-content-center mt-4 mb-5 border-line" > <img  src={logo} style={{height:"240%" ,width:"250%" , marginTop:"40%"}} className="image" /> </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                           <h1 style={{color:"red" }} >Add New Room   </h1>
                               <div className="col-lg-6" style={{backgroundColor:"#D5D5CE"}}>
                               <form onSubmit={changeOnClick} encType="">
                        
                               <br></br>
                            
                                   <div class="form-floating mb-3">
                                   <label for="" style={{color:"" , fontSize:"20px"}}>  room Name </label><br></br><br></br>
                                       <input type="text" class="form-control" id="floatingInput"  style={{width:"190%"}}    onChange={(f) => setname(f.target.value)}   placeholder="room name " />
                                   
                                   </div>
                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingPassword" style={{color:"" , fontSize:"20px"}}  >Max count </label>
                                       <input  class="form-control" id="floatingPassword"  style={{width:"190%"}}    onChange={(f) => setmaxcount(f.target.value)}    type="number"   placeholder="max count  " />
                                     
                                   </div>

                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"" , fontSize:"20px"}}  >  Rent  Per day </label>
                                    
                                   <input  class="form-control" id="floatingPassword"  style={{width:"190%"}}    onChange={(f) => setrentperday(f.target.value)}    type="number"   placeholder="rent per day    " />
                                      

                                   </div>

                                  
                                   
                                   
                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"" , fontSize:"20px"}}  >  Type  </label>
                                    
                                       <input  class="form-control" id="exampleFormControlTextarea3"   style={{width:"190%"}}  onChange={(f) => settype(f.target.value)}    placeholder=" enter type "    >
                                       </input>

                                   </div>


                                 

                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingInput"  style={{color:"" , fontSize:"20px"}}  >  Image Link </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3" style={{width:"190%"}}    onChange={(f) => setimageurls(f.target.value)}    placeholder="  room image link   "  rows="6">
                                       </textarea>

                                   </div>



                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingPassword" style={{color:"" , fontSize:"20px"}}  >Features  </label>
                                       <input  class="form-control" id="floatingPassword"  style={{width:"190%"}}    onChange={(f) => setfeatures(f.target.value)}    type="text"   placeholder="features" />
                                     
                                   </div>

                                   <div class="form-floating mb-3"><br></br><br></br>
                                   <label for="floatingPassword" style={{color:"" , fontSize:"20px"}}  >Description   </label>
                                       <textarea  class="form-control" id="floatingPassword"  style={{width:"190%"}}    onChange={(f) => setdescription(f.target.value)}    type="text"   placeholder="Description"    rows="6" />
                                     
                                   </div>





                              
                                   <div className="row mb-5 px-4">
                                       <a ><button  type="submit"   style={{ fontSize:"15px"  }}   className="btn btn-danger">Add  new Rooms   </button></a>
                                      <br></br><br></br>
                                      <a ><Link  to ="/"><button  type="submit"   style={{ fontSize:"10px"  }}    className="btn btn-success">Back to Home    </button></Link></a>

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

export default AddRoom; 