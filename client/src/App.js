import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import 'antd/dist/antd.css';
import "./App.css";
import Landingscreen from './Components/Landingscreen';

import Register from './Components/Register';
import Admin  from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route   exact path="/" component={Landingscreen}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>

    </Router>

  );
}

export default App;
