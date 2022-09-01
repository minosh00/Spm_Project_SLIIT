import 'antd/dist/antd.css';
import "./App.css";
import React, { Profiler, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Landingscreen from './Components/Landingscreen';
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import NavBar from "./Components/Layout/NavBar";

import UpdateMenus from "./Components/Restaurants/UpdateMenus";
import Restaurants from "./Components/Restaurants/Menus";
import Home from "./Components/Layout/Main";

//cheeee
import ViewRooms from './Components/Rooms/ViewRooms';
import AddRooms from './Components/Rooms/AddRooms';


let isauth = localStorage.getItem('user');


function App() {
  return (
    <Router>
      <NavBar/>	
      <Routes>
      <Route exact path="/" element={<Landingscreen/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      

      <Route exact path="/dashboard" element={<Home/>} />
      <Route  path="/Restaurants" element={<Restaurants/>} />

      <Route path="/updateFoodItem/:id" element={< UpdateMenus/>} />
      
      <Route path="/addroom" element={<AddRooms />} />
      <Route path="/viewroom" element={<ViewRooms />} />

      </Routes>
    </Router>

  );
}

export default App;
