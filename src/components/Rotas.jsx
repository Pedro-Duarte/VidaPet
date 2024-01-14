import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Resgate from '../pages/Resgate/resgat';
import SobreNos from '../pages/SobreNos/IndexSobreNos';

function Rotas() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/commit" element={<Commit />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
