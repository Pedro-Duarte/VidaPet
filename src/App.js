// App.js
import React from 'react';
<<<<<<< HEAD
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
     
        
       
=======
import './App.css';
import RescApp from './components/RescApp'; // Importe o componente RescApp

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VidaPet by Lili</h1>
        <h1>Resgate de Pets</h1>
      </header>
      <main>
        <RescApp /> {/* Renderize o componente RescApp aqui */}
      </main>
>>>>>>> 3675b053a9406fe7a053409751d33099c6c9221f
    </div>
  );
}

export default App;
