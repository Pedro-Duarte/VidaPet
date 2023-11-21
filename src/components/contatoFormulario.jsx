import React, { useState } from 'react';
import styled from 'styled-components';
import '../../src/styles/style.css';

// Componente principal do formulário
const Formulario = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Funções de alteração para atualizar os estados conforme os usuários interagem com os campos
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Renderização do componente
  return (
    <StyledFormulario>

      <div className={`form-group ${name ? 'focused' : ''}`}>
        <label htmlFor="name" onSelect={handleNameChange}>Nome</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>


      <div className={`form-group ${email ? 'focused' : ''}`}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>


      <div className={`form-group ${subject ? 'focused' : ''}`}>
        <label htmlFor="subject">Assunto</label>
        <input type="text" id="subject" value={subject} onChange={handleSubjectChange} required />
      </div>


      <div className={`form-group ${message ? 'focused' : ''}`}>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" rows="4" value={message} onChange={handleMessageChange} required></textarea>
      </div>


      <button className='botao' type="submit">Enviar</button>
    </StyledFormulario>
  );
};

// Estilização usando styled-components
const StyledFormulario = styled.form`
  color: #7c7b7b;
  display: flex;
  flex-direction: column;
  width: 400px;
  /* box-shadow: 0 0 10px rgba(215, 211, 80, .6); */
  padding: 1rem;
  border-radius: 3px;
  border: 2px solid rgba(215, 211, 80, 0.3);

  @media only screen and (max-width: 768px) {
    width: 70%;
  }

    .form-group {
      position: relative;
      margin-bottom: 1rem;
    }

    label {
      position: absolute;
      top: .5rem;
      left: .5rem;
      transition: transform 0.2s ease-out, font-size 0.2s ease-out;
      z-index: 1;
      background-color: white;
      padding: 0 5px 0 5px;
      cursor: pointer;
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      border: 1px solid #7c7b7b;
      border-radius: 5px;
      caret-color: transparent;
      cursor: pointer;
    }
    
    .form-group.focused label {
      transform: translateY(-1.3rem);
      font-size: 0.75rem;
      color: black;
    }

    input:focus,
    textarea:focus {
      transform: translateY(-.5rem);
      border-color: #7c7b7b;

    }

    .botao {
      color: white;
      font-weight: 900;
      border-radius: 5px;
      border: none;
      background-color: rgb(215, 211, 80, 0.7);
      height: 3rem;
      max-width: 6rem;
      cursor: pointer;
    }
`;

export default Formulario;
