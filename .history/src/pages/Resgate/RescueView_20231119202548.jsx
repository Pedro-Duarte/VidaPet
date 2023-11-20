import React, { useEffect, useState } from 'react';

const RescueView = () => {
  const [rescueData, setRescueData] = useState([]);

  useEffect(() => {
    // Substitua com a chamada à sua API ou script PHP
    fetch('https://18.228.95.233/rescue_list.php')
      .then(response => response.json())
      .then(data => {
        setRescueData(data);
        console.log(data); // Para verificar os dados recebidos
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  if (rescueData.length === 0) {
    return <p>Carregando dados...</p>; // Ou qualquer outra mensagem de 'loading'
  }

  return (
    <div>
      {rescueData.map((rescue, index) => (
        <div key={index}>
          <p>Latitude: {rescue.latitude}</p>
          {/* Restante do seu código JSX aqui */}
        </div>
      ))}
    </div>
  );
};

export default RescueView;
