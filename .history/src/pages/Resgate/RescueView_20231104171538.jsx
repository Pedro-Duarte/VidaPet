import React, { useEffect, useState } from 'react';

// Este componente precisa importar um ícone de cachorro e um método para buscar dados da API
import dogIcon from '../path-to-your-assets/dog-icon.svg';
import { getRescueData } from '../services/api'; // Este é um exemplo, ajuste para o seu serviço de API

function RescueView() {
  const [rescueData, setRescueData] = useState([]);

  useEffect(() => {
    const fetchRescueData = async () => {
      try {
        const data = await getRescueData(); // Substitua esta função pela sua função real de chamada de API
        setRescueData(data);
      } catch (error) {
        console.error('Erro ao buscar dados de resgate:', error);
      }
    };

    fetchRescueData();
  }, []);

  return (
    <div className="rescue-list">
      {rescueData.map((item) => (
        <div key={item.id} className="rescue-item">
          <img src={item.image_path} alt="Foto do animal" />
          <img src={dogIcon} alt="Ícone do cachorro" />
          <p>Latitude: {item.latitude}</p>
          <p>Longitude: {item.longitude}</p>
          <p>Data e hora da captura: {item.capture_datetime}</p>
          <p>Comentários: {item.comments}</p>
        </div>
      ))}
    </div>
  );
}

export default RescueView;
