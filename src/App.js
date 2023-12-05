import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-ignore
import PageHeader from './components/PageHeaders.jsx';
import PageFooter from './components/PageFooter.jsx';
import Home from "./pages/Home/index.jsx";
import Resgate from "./pages/Resgate/resgate.jsx";
import SobreNos from './pages/SobreNos/IndexSobreNos.jsx';
import Contato from './pages/Contact/indexContato.jsx';
import { MenuMobile } from "./components/MenuMobile.jsx";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleClick = (evento) => {
    evento.preventDefault();
  }

  return (
    <div className="App">
      <Router>
        <PageHeader setMenuIsVisible={setMenuIsVisible} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </Router>
      <PageFooter />
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </div>
  );
}

export default App;
