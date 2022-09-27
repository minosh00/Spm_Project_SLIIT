

import React, { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsPersonLinesFill } from "react-icons/bs"
import { BsFillPersonPlusFill } from "react-icons/bs"
import { MdOutlineChecklistRtl } from "react-icons/md"
import { MdPictureAsPdf } from "react-icons/md"
import { FaFileUpload } from "react-icons/fa"
import Login from '../../images/login.png';
const NavBar = () => {

  const navigate = useNavigate();

  let userRole = localStorage.getItem('userRole');

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    navigate("/");
  }



  return (
    <div>
      <div>
        <nav class="navbar  navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <img src={Login} alt="" width="70" height="50" />
          </a>
          <a class="navbar-brand" href="/">
            Wijaya Beach Hotel
          </a>

          <div className="container-fluid">

            <>
            </>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                <li class="nav-item">
                  <a style={{ display: userRole == "customer" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/cusroom" aria-current="page">   Booking Room</a>
                </li>
                <li class="nav-item">
                  <a style={{ display: userRole == "customer" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/Displaymenus" aria-current="page">Restaurants</a>
                </li>

                <li class="nav-item">
                  <a style={{ display: userRole == "customer" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/comments-section" aria-current="page">comment section </a>
                </li>



                <li class="nav-item">
                  <a style={{ display: userRole == "admin" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/" aria-current="page">Edit  Halls </a>
                </li>

                <li class="nav-item">
                  <a style={{ display: userRole == "admin" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/AllMenus" aria-current="page">Edit  Restaurants</a>
                </li>

                <li class="nav-item">
                  <a style={{ display: userRole == "admin" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/mainroom" aria-current="page">Edit  Room</a>

                </li>
                <li class="nav-item">
                  <a style={{ display: userRole == "admin" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/AllEmployee" aria-current="page">Edit  Employee</a>
                </li>
              </div>
            </div>
          </div>

          <button onClick={handleSubmit} className="btn btn-secondary toggle" aria-haspopup="true" aria-expanded="false" type="submit" style={{ float: "right", marginRight: "10px", display: userRole ? "flex" : "none" }}>
            {"Logout"}
          </button>

        </nav>
      </div>
    </div>

  );
};



export default NavBar;