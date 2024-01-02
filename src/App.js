import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-ignore
import PageHeader from './components/PageHeaders';
import PageFooter from './components/PageFooter';
import Home from "./pages/Home/index";
import Resgate from "./pages/Resgate/resgate";
import SobreNos from './pages/SobreNos/IndexSobreNos';
import { MenuMobile } from "./components/MenuMobile";
import Commit from './pages/Resgate/Components/commit';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from "./pages/Login/Login";
import Registro from "./pages/Login/Registro";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div className="App">
      <Router>
        <PageHeader setMenuIsVisible={setMenuIsVisible} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/commit" element={<Commit />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
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
