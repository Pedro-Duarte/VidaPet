import React from 'react';
import styled from 'styled-components';
import '../../src/styles/style.css';


const Formulario = () => {
    return (
        <StyledFormulario action="/enviar-contato" method="post">
            <label className='label' htmlFor="nome"></label>
            <input className='campo' type="text" id="nome" name="nome" required/>

            <label className='label' htmlFor="email"></label>
            <input className='campo' type="email" id="email" name="email" required/>

            <label className='label' htmlFor="assunto"></label>
            <input className='campo' type="text" id="assunto" name="assunto" required/>

            <label className='label' htmlFor="mensagem"></label>
            <textarea className='texto' id="mensagem" name="mensagem" rows="4" required></textarea>

            <button className='botao' type="submit">Enviar</button>
        </StyledFormulario>
    );
};

const StyledFormulario = styled.form`
  color: #7c7b7b;
  display: flex;
  flex-direction: column;
  width: 50%;
  box-shadow: #dbdbdb;
  padding: 1rem 1rem 1rem 1rem;
  background-color: rgb(215, 211, 80, .3);
  border-radius: 10px;

  .label {

  }

  .campo {
    border: none;
    border-radius: 10px;
    margin-bottom: 1rem;
    height: 1.5rem;
  }

  .texto {
    border: none;
    margin-bottom: 1rem;
    border-radius: 10px;
  }

  .botao {
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    background-color: #c9c8c8;
    height: 1.5rem;
    max-width: 6rem;
  }
`;
export default Formulario;
