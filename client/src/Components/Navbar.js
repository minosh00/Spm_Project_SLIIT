import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';

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
                <Link to="/">
                    <li className="nav-item nav-link" style={{color: "red", fontSize:"19px"}}>
                        Home page 
                    </li>
                </Link>
                
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <form class="form-inline">

    <input class="form-control mr-sm-2" type="search"  placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>


                <Link to="/login">
                    <li className="nav-item nav-link" style={{color: "red", fontSize:"19px", marginLeft:"100px"}}>
                        Login
                    </li>
                </Link> 
                <Link to="/register">
                    <li className="nav-item nav-link" style={{color: "red", fontSize:"19px", marginLeft:"70px"}}>
                        Register
                    </li>
                </Link>  
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link> 
                <Link to="/todos">
                    <li className="nav-item nav-link">
                        Todos
                    </li>
                </Link> 
                {
                    user.role === "admin" ? 
                    <Link to="/admin">
                        <li className="nav-item nav-link">
                            Admin
                        </li>
                    </Link> : null
                }  
                <button type="button" 
                        className="btn btn-link nav-item nav-link" 
                        onClick={onClickLogoutHandler}>Logout</button>
            </>
        )
    }
    return(
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
             <a class="navbar-brand" href="#">
    <img src="./log.png" width="50" height="50" />
  </a>
            <Link to="/">
                <div className="navbar-brand" style={{color: "red" , fontSize:"25px"}}>Wijaya Beach Hotel</div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>

    
        </nav>
    )
}

export default Navbar;