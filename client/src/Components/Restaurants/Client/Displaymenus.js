import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
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
    Input,
    Form
} from "reactstrap";
import AddToCart from "./AddTocart";

const Displaymenus = () => {

    
  const [serachItem,setserachItem] =useState([]);
  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);
  const [cartData, setcartData] = useState([]);
  const [ShowCart, setShowCart] = useState(false);

   var array = [];

  const addDataToCart = (e,user)=>{
      e.preventDefault();
      array.push(user);
  
    
    alert("Add to Cart  successfully  ")
  }

  const gotoCart = (e)=>{
      setcartData(array);
      setShowCart(true);
  }

  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:5000/foods/getAllMenu/")
      ).data;
      setusers(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);


  return (
    <div className='container'>
        <br></br>
        <br></br>   <br></br>   <br></br>
        <div class="input-group">
  <div className="col-md-9">

  <input type="search" class="form-control" style={{marginLeft:"25%" }} placeholder="Search by Food Name  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
    aria-describedby="search-addon" />
  </div>
</div>
<br></br><br></br>
        <center>
        <h1><b>Food Menus</b></h1>
        <center>
              <button className='btn btn-success' onClick={(e)=>gotoCart(e)}> View Cart </button>
            </center>

        </center>
        
        {ShowCart ? 
            <AddToCart data={cartData}/> 
          : 

            <div class="col-11 col-md-6 col-lg-3 mx-0 mb-4" >

            {users &&
                    users.filter((users)=>{
                      if(serachItem ==""){
                            return users
                      }else if(users.foodName.toLowerCase().includes(serachItem.toLowerCase())){
                  
                        return users
            }   })
                .map((user) => {
                  return (


                <article class="card" style={{ flex: '0 1 20%', borderWidth: '2px', marginBottom: '10px' }}>
                  <img src={user.images} alt='No Image Added...' style={{ width: '100%', height: 'auto' }} />
                  <h4>{user.foodName}</h4>
                  <p><b>LKR. {user.price}</b></p>
                  
                  <a className='btn btn-secondary'
                      onClick={(e)=>{addDataToCart(e,user)}}
                  ><b>Add to cart</b>
                  {/* <i className="fa-solid fa-cart-circle-plus"></i> */}
                  </a>
                </article>
                  );
          })}


          

            </div>
        }


    </div>
  )
}

export default Displaymenus;


