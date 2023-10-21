// App.js
import React from 'react';
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
    </div>
  );
}

export default App;
