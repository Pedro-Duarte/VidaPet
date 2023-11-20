import React, { useState } from 'react';
import { styled } from 'styled-components';

function Commit() {
  const [texto, setTexto] = useState('');

  const handleSalvar = () => {
    // Aqui você pode fazer o que quiser com o texto, como salvá-lo em um arquivo ou enviar para um servidor.
    console.log('Texto salvo:', texto);
    alert('Texto salvo com sucesso!');
  };

  return (
    <Container>
      <div className="formulario-container">
        <h2>Observação</h2>
        <textarea
          type="text"
          id="texto"
          name="texto"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows="5"
          required
          className="caixa-texto"

        />
      </div>
      <div>
        <button type="button" onClick={handleSalvar} className="botao-salvar">
          Salvar
        </button>
      </div>
    </Container>
  );
}

export default Commit;

const Container = styled.section`

.formulario-container {
  color:white;
  font-family: Arial, sans-serif;
  left:10px;
  margin: 40px;
  max-width: 600px;
  padding:10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.caixa-texto {
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
}

.botao-salvar {
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.botao-salvar:hover {
  background-color: #45a049;
}

@media(max-width: 900px) {
  
  .caixa-texto {
    width: 400px;
    padding: 70px;
    margin-bottom: 20px;
  }

}
@media(max-width: 900px) {
  
  .caixa-texto {
    width: 250px;
    height:200px;
    padding: 10px;
    margin-bottom: 20px;
  }

}

`
