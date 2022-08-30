import React from 'react'
import axios from 'axios';
import {useState ,useEffect }from 'react'
import { Link , useParams } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateMenus = () => {

    const[foodName,setfoodName] = useState("");
    const[price,setprice] = useState("");
    const[restaurantType,setrestaurantType] = useState("");
    const[description,setdescription] = useState(""); 
    const[image,setimage] = useState("");  




    const {id} = useParams();

    const changeOnClick = f =>{
        f.preventDefault();


        const updatefood={
            foodName,
            price,
            restaurantType,
            description,
            image,
          }; 

          setfoodName("");
          setprice("");
          setrestaurantType("");
          setdescription(""); 
          setimage("");

          axios.put(`http://localhost:5000/foods/${id}`,updatefood)
          .then(res=>
            {   Swal.fire('Congrats' , 'update successfully ' , 'success')
     
            
               }
            
            )
          .catch(err=>{console.log(err)});

        };

        useEffect(()=>{
            axios.get(`http://localhost:5000/foods/${id}`)
            .then(res=>[
                setfoodName(res.data.foodName),
                setprice(res.data.price),
                setrestaurantType(res.data.restaurantType),
                setdescription(res.data.description),
                setimage(res.data.image)
            ])
            .catch(err=> console.log(err));
        },[]);

  return (


    <div> <center>
    <div className="col-lg-6">
    <div className="card2 card border-0 px-4 py-5">
    <form onSubmit={changeOnClick} encType="multipart/form-data">
  <div className="form-group">
    <h1>Update food 
        
    </h1>
    <label for="exampleFormControlInput1">food Name</label>
    <input type="text" 
    onChange={f=>setfoodName(f.target.value)}
    value={foodName}
    class="form-control"  
    placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">price</label>
    <input type="text" 
    onChange={f=>setprice(f.target.value)}
    class="form-control" 
    value={price} 
    placeholder=""/>
  </div>
  
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">restaurantType</label>
    <textarea class="form-control"  
    onChange={f=>setrestaurantType(f.target.value)}
    value={restaurantType}
    rows="3">
    </textarea>

  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Mandertory Points and Marks for each Point</label>
    <textarea 
    class="form-control"
    onChange={f=>setdescription(f.target.value)}
    value={description}
    rows="3">
    </textarea>

  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">Mandertory Points and Marks for each Point</label>
    <textarea 
    class="form-control"
    onChange={f=>setimage(f.target.value)}
    value={image}
    rows="3">
    </textarea>

  </div>
 <button type="submit" className="btn btn-primary">Update</button>
</form>
</div>
</div>
</center>
</div>
  )
}


export default UpdateMenus