import React , {useState , useEffect} from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import Error from "../messages/Error";
import Loader from "../messages/Loader";
import Success from '../messages/Success';
import { Link , useNavigate } from "react-router-dom";

import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";


function Menus() {

  const [room, setrooms] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);
  const [serachItem,setserachItem] =useState([]);



  useEffect(async () => {

    try {
      setloading(true);
      const data = await axios.get("http://localhost:5000/foods/");
      console.log(data?.data?.foods);
      setrooms(data?.data?.foods);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  }, []);



  const removefood = id =>{
    axios.delete(`http://localhost:5000/foods/${id}`)
    .then(res => 
      
      {Swal.fire('Congrats' , ' remove successfully ' , 'success')
  
  }    )
  setrooms(room.filter(elem=>elem._id !== id))
  }

    return (
        <div className='col-md-14'>
          <br></br>
         <br></br>
            <h4 style={{marginLeft:"50%" , fontSize:"30px"}}>All Food Item</h4>
            <br></br>
            <div class="input-group">
  <div className="col-md-9">
  <h4 style={{ marginLeft:"20%" , marginTop:"30px"}} > You Can Search Food Items   </h4>
  <input type="search" class="form-control rounded" style={{ marginLeft:"20%" , marginTop:"30px"}} placeholder="Search by Food name   " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
    aria-describedby="search-addon" />
  </div>
</div>
            {loading ? (<Loader/>) : error ? (<Error/>) : (<div>
              <br></br><br></br>
                   <table className='table table-bordered table-sm table-striped ' style={{marginRight:"20%"  , marginRight:"40%"} } >
                       <thead className='bs'>
                           <tr>
                             
                               <th>food name </th>
                               <th>price </th>
                               <th>restaurant Type</th>
                               <th>food description</th>
                               <th>food images</th>
                               <th>update </th>
                               <th>delete </th>
                           </tr>
                       </thead>
                       <tbody>
                        {room && 
                         room.filter((room)=>{

                          if(serachItem ==""){
                            return room
                      }else if(room.foodName.toLowerCase().includes(serachItem.toLowerCase())){
                   
                        return room
         }   })
                         .map((room)=>{
                        
                               return( 
                                    <tr>
                                 
                                      <td>  {room.foodName}
                        
                                     </td>
                                      <td>{room.price}</td>
                                      <td>{room.restaurantType}</td>
                                     <td> {room.description}</td>
                                      <td>  <img src={room.image} style={{height: "55px" ,width: "94px" }}  className="container" /></td>
                                   <td>      <a href={`/updateFoodItem/${room._id}`}><Button className="btn btn-info" style={{ fontSize: "13px", marginLeft: "40%" }} href=""><b>Update</b></Button></a></td>
                                  <td><Button className="btn btn-danger"  onClick={()=>removefood(room._id)} style={{ fontSize: "13px", marginLeft: "40%" }} href=""><b>delete</b></Button>
                                    </td> 
                                



                                 
                 
             


                                  </tr>
                                );
                           })}
                       </tbody>
                   </table>

            </div>)}
            <br></br><br></br>
        </div>
        
    )
}

export default Menus ;