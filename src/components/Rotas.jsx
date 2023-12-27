import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicial from "../App";
import Resgate from '../pages/Resgate/resgat';
import SobreNos from '../pages/SobreNos/IndexSobreNos';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={PaginaInicial} />
        <Route path="/home" component={PaginaInicial} />
        <Route path="/resgate" component={Resgate} />
        <Route path="/sobrenos" component={SobreNos} />
        <Route path="/resgate" component={Resgate} />
        {/* Adicione mais rotas para outras páginas. */}
      </Routes>
    </Router>
  );
}

export default Rotas;
