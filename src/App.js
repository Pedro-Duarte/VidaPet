import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// @ts-ignore
import PageHeader from './components/PageHeaders';
import PageFooter from './components/PageFooter';
import Home from "./pages/Home/index";
import Resgate from "./pages/Resgate/resgate";
import SobreNos from './pages/SobreNos/IndexSobreNos';

function App() {
  
  return (
    <div className="App">
      <Router>
        <PageHeader/>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resgate" element={<Resgate />} />
          <Route path="/SobreNos" element={<SobreNos />} />

        </Routes>
      </Router>
      <PageFooter />
     
        
       
    </div>
  );
}

export default App;
