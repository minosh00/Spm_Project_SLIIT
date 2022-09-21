
import Swal from "sweetalert2";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRoomsById, updateRoomsByID } from "./services/Room";
import logo from '../../images/hotel-room.jpg'

const UpdateRooms = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setname] = useState("");
  const [maxcount, setmaxcount] = useState();
  const [rentperday, setrentperday] = useState("");
  const [type, settype] = useState("");
  const [imageurls, setimageurls] = useState("");
  const [features, setfeatures] = useState("");
  const [description, setdescription] = useState("");


  const handlename = (e) => {
    setname(e.target.value);
  };

  const handlemaxcount = (e) => {
    setmaxcount(e.target.value);
  };

  const handlerentperday = (e) => {
    setrentperday(e.target.value);
  };

  const handletype= (e) => {
    settype(e.target.value);
  };

  const handleimageurls = (e) => {
    setimageurls(e.target.value);
  };
 

  const handlefeaturess= (e) => {
    setfeatures(e.target.value);
  };

  const handledescription = (e) => {
    setdescription(e.target.value);
  };
 




  const GetData = async () => {

    let data = await getRoomsById(id);
    console.log("Update rooms", data);

    setname(data?.data?.name);
    setmaxcount(data?.data?.maxcount);
    setrentperday(data?.data?.rentperday);
    settype(data?.data?.description);
    setimageurls(data?.data?.imageurls);
    setfeatures(data?.data?.features);
    setdescription(data?.data?.description);

  };

  useEffect(() => {
    GetData();
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    let newdata = {

        name:name,
        maxcount:maxcount,
        rentperday:rentperday,
        description  :description,
        type:type,
        imageurls  :imageurls,
        features:features,  
           
    };

    let data = await updateRoomsByID(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.foodName) {
      {   Swal.fire('Congrats' , 'Update room  successfully ' , 'success')

      navigate("");
   }


    
    } else {

      {   Swal.fire('Congrats' , 'Update room successfully ' , 'success')

      navigate("");
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
                       <h2 style={{color:"red" , fontSize:"40px" , marginLeft:"10%"}} >Update  Room   </h2>
                           <div className="card1 pb-5">
                      
                               <div className="row px-3 justify-content-center mt-4 mb-5 border-line" > <img  src={logo} style={{height:"240%" ,width:"250%" , marginTop:"40%"}} className="image" /> </div>
                           </div>

                   
                       </div>

                       
                       <div className="col-lg-6">
                   
                           <div className="col-lg-6" style={{backgroundColor:""}}>
                           <form  encType="">
                       
                           <br></br>
                        
                               <div class="form-floating mb-3">
                               <label for="" style={{color:"" , fontSize:"20px"}}>  room  Name </label><br></br><br></br>
                                   <input type="text" class="form-control" id="floatingInput"  style={{width:"190%"}}      value={name}   onChange={handlename}   required placeholder="  " />
                               
                               </div>
                               <div class="form-floating mb-3"><br></br><br></br>
                               <label for="floatingPassword" style={{color:"" , fontSize:"20px"}} >max count  </label>
                                   <input  class="form-control" id="floatingPassword"  style={{width:"190%"}}   value={maxcount}   onChange={handlemaxcount}  required  type="number"   placeholder=" " />
                                 
                               </div>

                               <div class="form-floating mb-3"><br></br><br></br>
                               <label for="floatingInput"style={{color:"" , fontSize:"20px"}} >  rentnper day </label>
                                
                                   <input type="text" class="form-control" id="exampleFormControlTextarea3"  style={{width:"190%"}}     value={rentperday} onChange={handlerentperday} required  placeholder="  Restaurants Type"  >
                                   </input>

                               </div>

                              
                               
                               
                               <div class="form-floating mb-3"><br></br><br></br>
                               <label for="floatingInput" style={{color:"" , fontSize:"20px"}} >  Description </label>
                                
                                   <textarea class="form-control" id="exampleFormControlTextarea3"   style={{width:"190%"}}    value={description}

onChange={handledescription}  required  placeholder=" food Description"    rows="6">
                                   </textarea>

                               </div>


                             

                               <div class="form-floating mb-3"><br></br><br></br>
                               <label for="floatingInput" style={{color:"" , fontSize:"20px"}} >  Image Link </label>
                                
                                   <textarea class="form-control" id="exampleFormControlTextarea3" style={{width:"190%"}}  value={imageurls}  onChange={handleimageurls} required  placeholder="   image link   "  rows="6">
                                   </textarea>

                               </div>







                          
                               <div className="row mb-7 px-6">
                                   <a ><button  type="submit"   style={{ fontSize:"15px"  }}   onClick={(e) => UpdateData(e)} className="btn btn-warning">Update room     </button></a><br></br><br></br><br></br>
                                   <a ><Link  to =""><button  type="submit"   style={{ fontSize:"15px"  }}    className="btn btn-success">Back to Home    </button></Link></a>

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

export default UpdateRooms;

