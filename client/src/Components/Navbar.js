import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import Login from '../images/login.png';
const Navbar = props =>{
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = ()=>{
        return (
            <>
                <li class="nav-item">
              <a class="nav-link" href="/Home">
                Home
              </a>
            </li>
                <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li> 
                <li class="nav-item active">
              <a class="nav-link" href="/register">
                Register
              </a>
            </li>
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
                <li class="nav-item">
              <a class="nav-link" href="/Home">
                Home  Page
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/todos">
              Booking Room
              </a>
            </li>
              
            <li class="nav-item">
              <a class="nav-link" href="/todos">
              Restaurants
              </a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/todos">
              Halls
              </a>
            </li>

                {
                    user.role === "admin" ? 
                    <li class="nav-item">
              <a class="nav-link" href="/admin">
              Admin
              </a>
              
      

        
           </li>      
            : null
                }  
                <button type="button" 
                        className="btn btn-secondary toggle" aria-haspopup="true" aria-expanded="false"
                        onClick={onClickLogoutHandler}>Logout</button>
            </>
        )
    }
    return(
        <div>
      <nav class="navbar  navbar-expand-lg">
      <a class="navbar-brand" href="#">
      <img src={Login} alt="" width="70" height="50"/>
    </a>
        <a class="navbar-brand" href="/">
          Wijaya Beach Hotel
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
       
        >
          <span class="navbar-toggler-icon"><i className='fa fa-bars' style={{color: 'white'}}></i></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">

        <ul class="navbar-nav ml-auto">

                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;