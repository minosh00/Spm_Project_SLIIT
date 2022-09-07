import 'antd/dist/antd.css';
import "./App.css";
import "./Components/Rooms/Rooms.css";
import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Landingscreen from './Components/Landingscreen';
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import NavBar from "./Components/Layout/NavBar";


import AddMenu from "./Components/Restaurants/AddMenu";
import Home from "./Components/Layout/Main";


//cheeee
import ViewRooms from './Components/Rooms/ViewRooms';
import AddRooms from './Components/Rooms/AddRooms';
import MainRoom from './Components/Rooms/MainRoom';
import UpdateRoom from './Components/Rooms/UpdateRoom';

import CommentsSection from './Components/Comments/CommentsSection';
import AddComment from './Components/Comments/AddComment';


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
      <Route  path="/AddMenu" element={<AddMenu/>} />
               
       
      
              
      
      <Route path="/mainroom" element={<MainRoom />} />
      <Route path="/addroom" element={<AddRooms />} />
      <Route path="/viewroom" element={<ViewRooms />} />
      <Route path="/updateroom/:id" element={<UpdateRoom />} />

      <Route path="/comments-section" element={<CommentsSection />} />
      <Route path="/comments-section/create" element={<AddComment />} />

      </Routes>
    </Router>

  );
}

export default App;
