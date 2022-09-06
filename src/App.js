import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/Home.js'
import Services from './components/pages/Services.js'
import SignUp from './components/pages/SignUp.js'
import Destinations from './components/pages/Destinations';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/destinations" element={<Destinations/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
