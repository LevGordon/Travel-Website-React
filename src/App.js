import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/Home.js'
import Services from './components/pages/Services.js'
import Products from './components/pages/Products.js'
import SignUp from './components/pages/SignUp.js'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
