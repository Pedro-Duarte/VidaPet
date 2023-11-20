import React from 'react';
import styled from 'styled-components';

// Mock de dados que você poderia ter recebido de um backend.
const rescueData = [
  // ... adicione seus dados aqui
];

const RescueView = () => {
  return (
    <RescueList>
      {rescueData.map((rescue) => (
        <RescueItem key={rescue.id}>
          <RescueImage src={`/${rescue.image_path}`} alt="Foto do animal" />
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
  width: 50px; // ou qualquer tamanho que você deseje para o ícone
  height: 50px;
  margin-right: 1rem;
  object-fit: cover; // Isso vai garantir que a imagem cubra o espaço designado sem deformar
  border-radius: 50%; // Isso vai tornar a imagem redonda como um ícone
`;

const RescueInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RescueView;
