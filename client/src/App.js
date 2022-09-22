import 'antd/dist/antd.css';
import "./App.css";

import React, { Profiler, useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import AddRoom from './Components/Room/AddRoom';
import UpdateRooms from './Components/Room/UpdateRooms';
import DisplayOneRoom from './Components/Room/DisplayOneRoom';
import AllRooms from './Components/Room/AllRooms'
import MainRoom from './Components/Room/MainRoom';

let isauth = localStorage.getItem('user');
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/rooms/")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landingscreen />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/AllEmployee" element={<AllEmployee />} />
        <Route exact path="/addemployee" element={<AddEmployee />} />

        <Route exact path="/dashboard" element={<Home />} />
        <Route path="/AllMenus" element={<AllMenus />} />
        <Route path="/updateMenuByID/:id" element={<EditMenu />} />
        <Route path="/addMenu" element={<AddMenu />} />

        <Route path="/AddRoom" element={<AddRoom />} />
        <Route path="/mainroom" element={<MainRoom />} />
        <Route path="/allroom" element={<AllRooms />} />
        <Route path="/updateRoomsByID/:id" element={<UpdateRooms />} />
        <Route path="/updateRoomsByID1/:id/:fromdate/:todate" element={<DisplayOneRoom />} />

      </Routes>
      <br></br>
      <Footer />
    </Router>

  );
}

export default App;