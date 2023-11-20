import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

// Importe os componentes das páginas aqui
import PaginaInicial from "../App";
import Resgate from '../resgate-1';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicial from "../App";
import Resgate from '../resgate-1';
import SobreNos from '../pages/SobreNos/IndexSobreNos';
>>>>>>> 793f5a2800438c0c45e16dce15a374848ec8d8e4

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={PaginaInicial} />
<<<<<<< HEAD
        <Route path="/resgate" component={Resgate} />
        {/* Adicione mais rotas para outras páginas, se necessário */}
=======
        <Route path="/home" component={PaginaInicial} />
        <Route path="/resgate" component={Resgate} />
        <Route path="/sobrenos" component={SobreNos} />
        {/* Adicione mais rotas para outras páginas. */}
>>>>>>> 793f5a2800438c0c45e16dce15a374848ec8d8e4
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default Rotas;
=======
export default Rotas;
>>>>>>> 793f5a2800438c0c45e16dce15a374848ec8d8e4
