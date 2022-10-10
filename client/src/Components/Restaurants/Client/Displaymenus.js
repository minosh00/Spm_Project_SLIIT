import styles from "./Cart.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
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

  const [number, setNumber] = useState(1);


  const [serachItem, setserachItem] = useState([]);
  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);
  const [cartData, setcartData] = useState([]);
  const [ShowCart, setShowCart] = useState(false);

  var array = [];

  const addDataToCart = (e, user) => {
    e.preventDefault();
    array.push(user);


    alert("Add to Cart  successfully  ")
  }

  const gotoCart = (e) => {
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
    <div className="">
      <div style={{ textAlign: "center" }}>


        <div class="input-group">
          <div className="col-md-9">

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input type="search" class="form-control" style={{ marginLeft: "25%" }} placeholder="Search by Food Name  " aria-label="Search" onChange={event => { setserachItem(event.target.value) }}
              aria-describedby="search-addon" />
          </div>
        </div>

        <div className="container">
          <br></br>
          <button className='btn btn-success' onClick={(e) => gotoCart(e)}> View Cart </button>
          <br></br>      <br></br>
          {ShowCart ?
            <AddToCart data={cartData} />
            :
            <div className="">
              <div className="">


                <div className="">

                </div>
                <div className="">

                  <div className="row">
                    <br></br><br></br>
                    {users &&
                      users.filter((users) => {
                        if (serachItem == "") {
                          return users
                        } else if (users.foodName.toLowerCase().includes(serachItem.toLowerCase())) {

                          return users
                        }
                      })
                        .map((user) => {
                          return (


                            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'  key={1} >
                            <div class="card p-0 overflow-hidden h-100 shadow">
                                <img src={user.images}className='card-img-top img-fluid' />
                                <div class="card-body text-center">
                                    <h5 class="card-title">{user.foodName}</h5>
                                    <p class="card-text">{user.RestaurantsType}</p>
                                    <p class="card-text">{user.Description}</p>
                                    <p class="card-text">LKR{user.price}</p>
                                    <button class="btn btn-success"    onClick={(e) => { addDataToCart(e, user) }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>


                      
                          
                          );
                        })}

                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>

  );

}
export default Displaymenus;

