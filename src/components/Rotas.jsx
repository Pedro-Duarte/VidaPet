import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

// Importe os componentes das páginas aqui
import PaginaInicial from "../App";
import Resgate from '../resgate-1';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={PaginaInicial} />
        <Route path="/resgate" component={Resgate} />
        {/* Adicione mais rotas para outras páginas, se necessário */}
      </Routes>
    </Router>
  );
}

export default Rotas;
