import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './Context/AuthContext';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById('root'));

