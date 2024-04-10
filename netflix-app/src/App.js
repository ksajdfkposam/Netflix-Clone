import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';

import Header from './Component/Header';
import Home from './Component/Home';
import Banner from './Component/Banner';

import Login from './Component/Login';
import List from './Component/List';
import HLog from './Component/HLog';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      
    <Router>
      <Header/>



      <Routes>


        <Route path="/" element={
          <React.Fragment>
            
           {console.log("billa")}
            <Home/>
          </React.Fragment>
        }/>



        <Route path="/login" element={
          <React.Fragment>
              {console.log("billa2")}
            <HLog/>
            <Login title={true} tit="Login"/>
          </React.Fragment>
        }/>



         <Route path="/register" element={
          <React.Fragment>
              {console.log("billa3")}
            <HLog/>
            <Login title={false} tit={"Register"}/>
          </React.Fragment>
        }/>
      
        <Route path="/dashboard" element={
          <React.Fragment>
            
            <Banner/>
            
          </React.Fragment>
        }/>



      </Routes>




    </Router>
  </React.Fragment>


  
  
         
  );
}

export default App;
