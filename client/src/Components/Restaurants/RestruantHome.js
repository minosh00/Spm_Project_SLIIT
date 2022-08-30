import React from 'react'
import Login from '../../images/rest.jpg';

import { Link } from "react-router-dom";

const RestruantHome = () => {
  return (


        <div class="card mb-6">
            <br></br>    <br></br>
            <h2 style={{fontSize:"40px" ,fontWeight:"bold", marginLeft:"35%"}}>All Restaurants Management  </h2>
            <br></br>

    <img src={Login} class="rounded float-left" alt="..." style={{height:"-20%", width:"100%"}}/>
    
    <div class="card-body">
    <br></br>
      <h6 class="card-title">The restaurant-bar serves a wide variety of Asian and European cuisine with an emphasis on seafood, and we have a wood-fired oven for our thin-crust pizzas.<br></br>
<br></br>
We pride ourselves on our delicious food and friendly service. Our menu has been specially selected to ensure that there is something for everyone.
</h6>
<></>
<br></br>
<Link to="/AddFoods">
      <button className="btn btn-lg btn-danger btn-block" style={{width:'50%' ,marginLeft:'25%'}}
                        type="submit">Go Inside  And Update</button> 
                  </Link>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  )
}

export default RestruantHome;