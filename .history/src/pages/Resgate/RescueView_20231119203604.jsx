import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RescueView = () => {
  const [rescueData, setRescueData] = useState([]);

  useEffect(() => {
    fetch('http://18.228.95.233/rescue_list.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha na rede ao tentar buscar os dados.');
        }
        return response.json();
      })
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
    <RescueList>
      {rescueData.map((rescue, index) => (
        <RescueItem key={index}>
          <RescueImage src={`path/to/uploads/${rescue.image_path}`} alt="Foto do animal" />
          <RescueInfo>
            <p>Latitude: {rescue.latitude}</p>
            <p>Longitude: {rescue.longitude}</p>
            <p>Data e hora da captura: {rescue.capture_datetime}</p>
            <p>Comentários: {rescue.comments}</p>
          </RescueInfo>
        </RescueItem>
      ))}
    </RescueList>
  );
};

const RescueList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const RescueItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const RescueImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 1rem;
  object-fit: cover;
  border-radius: 50%;
`;

const RescueInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RescueView;
