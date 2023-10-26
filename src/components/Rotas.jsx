import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicial from "../App";
import Resgate from '../resgate-1';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={PaginaInicial} />
        <Route path="/home" component={PaginaInicial} />
        <Route path="/resgate" component={Resgate} />
        {/* Adicione mais rotas para outras páginas. */}
      </Routes>
    </Router>
  );
}

export default Rotas;
