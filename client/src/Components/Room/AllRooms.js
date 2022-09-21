import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Restaurants/Loader";
import { Link } from "react-router-dom";


const AllRooms = () => {

    
  const [serachItem,setserachItem] =useState([]);
  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);



  
  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:5000/room/getAllRooms/")
      ).data;
      setusers(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);



  const removeRoom = id =>{
    axios.delete(`http://localhost:5000/room/RemoveRooms/${id}`)
    .then(res => 
      
      {Swal.fire('Congrats' , ' remove Room successfully ' , 'success')
  
  }    )
  setusers(users.filter(elem=>elem._id !== id))
  }

  
  return (



    <div className="">
        
        <br></br>   <br></br>   <br></br>
        <div class="input-group">
  <div className="col-md-9">

  <input type="search" class="form-control" style={{width:"30%", marginLeft:"60%" }} placeholder="Search by room Name  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
    aria-describedby="search-addon" />
  </div>
</div>
<br></br><br></br>
        
        
        
<div  className="container">


<div className="container">
    <div className="">
                  <div className="">
                  
                          <div className="">
                            
                          <div className="row">
      <br></br><br></br>

      {users &&
              users.filter((users)=>{
                if(serachItem ==""){
                      return users
                }else if(users.name.toLowerCase().includes(serachItem.toLowerCase())){
             
                  return users
   }   })
      
      .map((user , key) => (
        <div className="col-md-3 card me-5 mt-2 p-1 mb-2  d-flex"  key={1}><br></br>
          <img src={user.imageurls} alt="" marginLeft={"200px"} width={"40%"} height={"40%"} />
       

     
          <div className="p-2">
          <h4> room ID  :{key+1}</h4>
          <h4> room name  :{user.name}</h4>
            <h5>  Type :{user.type}</h5>

            <a
           className="button"
           style={{ marginLeft: "10%" }}
           href={user.maxcount}
         >
            <Link to ={{pathname:`/updateRoomsByID1/${user?._id}`}}><span   type="submit" class="badge rounded-pill badge-warning">view info</span></Link><br></br><br></br>
           <Link to ={{pathname:`/updateRoomsByID/${user?._id}`}}><span   type="submit" class="badge rounded-pill badge-warning">Update</span></Link> <br></br><br></br>
           <span  onClick={()=>removeRoom(user._id)}  type="submit" class="badge rounded-pill badge-danger">remove</span><br></br>
         </a>
          </div>
        </div>
      ))}
    </div>
                          </div>
                      </div>
                  </div>
                  </div>

        </div>
        
        
        </div>
  )
}

export default AllRooms