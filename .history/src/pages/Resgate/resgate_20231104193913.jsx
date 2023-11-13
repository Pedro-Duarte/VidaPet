import "../../styles/style.css";
import styled from 'styled-components'; // Correção: styled-components é a exportação padrão
import OverlayComponent from './OverlayComponent';
import React, { useState } from 'react';
import RescueView from './RescueView';

// Estilos para o Container como você forneceu
const Container = styled.section`
  /* seus estilos já existentes para Container */
  /* ... */
  /* Restante do seu CSS foi removido para brevidade */
`;

// Estilos para o StyledRescueView
const StyledRescueView = styled(RescueView)`
  /* Adicione seus estilos customizados aqui para RescueView */
  width: 100%;
  padding: 20px;
  /* Exemplo de cor de fundo, sombra, etc. */
  background: #ececec; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
`;

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openOverlay = () => {
    setIsOverlayVisible(true);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <>
      <Container>
        {/* Conteúdo existente do Container */}
        <section>
          <div>
            <h1>Encontrou um animal de estimação que pode estar precisando de ajuda ou que foi abandonado.</h1>
            {/* Outros elementos <p> e <h2> como no seu código original */}
            <div>
              <button onClick={openOverlay}>Abrir Componente Sobreposto</button>
              {isOverlayVisible && <OverlayComponent onClose={closeOverlay} />}
            </div>
          </div>
        </section>
      </Container>
      <StyledRescueView />
    </>
  );
}

export default App;
