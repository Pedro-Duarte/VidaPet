import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RescueView = () => {
  const [rescueData, setRescueData] = useState([]);

  useEffect(() => {
    fetch('https://vidapet.tech/rescue_list.php')
      .then(response => response.json())
      .then(data => {
        setRescueData(data);
        console.log(data); // Para verificar os dados recebidos
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  const openMap = (latitude, longitude) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, 'mapPopup', 'width=600,height=600'); // Abre um popup para o mapa
  };

  if (rescueData.length === 0) {
    return <p>Carregando dados...</p>;
  }

  return (
    <RescueList>
      {rescueData.map((rescue, index) => (
        <RescueItem key={index}>
          <RescueImage src={`https://vidapet.tech/${rescue.image_path}`} alt="Foto do animal" />
          <RescueContent>
            <GeoLink onClick={() => openMap(rescue.latitude, rescue.longitude)}>Geolocalização</GeoLink>
            <Comments>{rescue.comments}</Comments>
          </RescueContent>
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
  cursor: pointer;
`;

const GeoLink = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  text-decoration: underline;
  margin-right: 1rem;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
`;

const RescueContent = styled.div`
  display: flex;
  align-items: center; // Isso centraliza verticalmente o conteúdo dentro de RescueContent
`;

const Comments = styled.p`
  margin-left: 1rem; // Isso adiciona espaço entre o link da geolocalização e o comentário
`;

export default RescueView;
