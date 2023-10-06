import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { UserContextProvider } from "./context/UserContext";
//var firebase = require('firebase');
//var firebaseui = require('firebaseui');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <UserContextProvider>
     <App />
 </UserContextProvider>
 </BrowserRouter>
   
  
);


