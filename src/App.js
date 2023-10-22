// App.js
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// @ts-ignore
import PageHeader from './components/PageHeaders';
import PageFooter from './components/PageFooter';
import Home from "./pages/Home/index"
import Resgate from "./pages/Resgate/resgate"

function App() {
  
  return (
    <div className="App">
      <Router>
        <PageHeader/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />

        </Routes>
      </Router>
      <PageFooter />
     
        
       
    </div>
  );
}

export default App;
