import 'antd/dist/antd.css';
import "./App.css";
import "./Components/Rooms/Rooms.css";
import React, { Profiler, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Landingscreen from './Components/Landingscreen';
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import AllMenus from "./Components/Restaurants/AllMenus";
import Home from "./Components/Layout/Main";
import EditMenu from "./Components/Restaurants/EditMenu";
import AddMenu from "./Components/Restaurants/AddMenu"

//sadumini
import AllEmployee from "./Components/Employee/AllEmployee"
import AddEmployee from "./Components/Employee/AddEmployee"


//cheee
import ViewRooms from './Components/Rooms/ViewRooms';
import AddRooms from './Components/Rooms/AddRooms';
import MainRoom from './Components/Rooms/MainRoom';
import UpdateRoom from './Components/Rooms/UpdateRoom';


let isauth = localStorage.getItem('user');


function App() {
  return (
    <Router>
      <NavBar/>	
      <Routes>
      <Route exact path="/" element={<Landingscreen/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      

      <Route exact path="/AllEmployee" element={<AllEmployee/>} />
      <Route exact path="/addemployee" element={<AddEmployee/>} />

      <Route exact path="/dashboard" element={<Home/>} />
      <Route  path="/AllMenus" element={<AllMenus/>} />
      <Route path="/updateMenuByID/:id" element={<EditMenu />} />    
      <Route  path="/addMenu" element={<AddMenu/>} />


      
      <Route path="/mainroom" element={<MainRoom />} />
      <Route path="/addroom" element={<AddRooms />} />
      <Route path="/viewroom" element={<ViewRooms />} />
      <Route path="/mainroom/updateroom/:id" element={<UpdateRoom />} />

    
      </Routes>
      <br></br>
      <Footer/>
    </Router>

  );
}

export default App;
