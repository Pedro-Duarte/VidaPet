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

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div className="App">
      <Router>
        <PageHeader setMenuIsVisible={setMenuIsVisible} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/commit" element={<Commit />} />
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
