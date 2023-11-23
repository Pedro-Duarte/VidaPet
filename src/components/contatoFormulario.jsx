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

  // Estados para armazenar a condição dos campos, se clicado ou não
  const [nameClick, setNameClick] = useState(false);
  const [emailClick, setEmailClick] = useState(false);
  const [subjectClick, setSubjectClick] = useState(false);
  const [messageClick, setMessageClick] = useState(false);


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

  // Funções de alteração para atualizar os estados conforme os usuários clicam nos campos
  const handleNameClick = () => {
    setNameClick(true);
  };
  const handleNameClickBlur = () => {
    setNameClick(false);
  };


  const handleEmailClick = () => {
    setEmailClick(true);
  };
  const handleEmailClickBlur = () => {
    setEmailClick(false);
  };

  const handleSubjectClick = () => {
    setSubjectClick(true);
  };
  const handleSubjectClickBlur = () => {
    setSubjectClick(false);
  };

  const handleMessageClick = () => {
    setMessageClick(true);
  };
  const handleMessageClickBlur = () => {
    setMessageClick(false);
  };

  // Renderização do componente
  return (
    <StyledFormulario>

      <div className={`form-group ${name ? 'focused' : nameClick === true ? 'focused' : ''}`}>
        <label htmlFor="name" onSelect={handleNameChange}>Nome</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} onClick={handleNameClick} onSelect={handleNameClick} onBlur={handleNameClickBlur} required />
      </div>


      <div className={`form-group ${email ? 'focused' : emailClick === true ? 'focused' : ''}`}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} onClick={handleEmailClick} onSelect={handleEmailClick} onBlur={handleEmailClickBlur} required />
      </div>


      <div className={`form-group ${subject ? 'focused' : subjectClick === true ? 'focused' : ''}`}>
        <label htmlFor="subject">Assunto</label>
        <input type="text" id="subject" value={subject} onChange={handleSubjectChange} onClick={handleSubjectClick} onSelect={handleSubjectClick} onBlur={handleSubjectClickBlur} required />
      </div>


      <div className={`form-group ${message ? 'focused' : messageClick === true ? 'focused' : ''}`}>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" rows="4" value={message} onChange={handleMessageChange} onClick={handleMessageClick} onSelect={handleMessageClick} onBlur={handleMessageClickBlur} required></textarea>
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
      transition: transform 0.1s ease-out, font-size 0.1s ease-out;
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
      border: .5px solid #e6e6e6;
      border-radius: 5px;
      cursor: pointer;
      outline-color: #9e8f05;

      &:focus {
        transform: translateY(-.4rem);
      }

      &:hover {
        transform: translateY(-.4rem);
        border-color: #9e8f05;
      }
    }
    
    .form-group.focused label {
      transform: translateY(-1.3rem);
      font-size: 0.75rem;
      color: #9e8f05;
      border-color: #9e8f05;
      outline-color: #9e8f05;
    }

    .form-group.focused input,
    .form-group.focused textarea {
      border: 1px solid #9e8f05;
      outline-color: #9e8f05;
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
      outline-color: #9e8f05;

      &:hover {
        transform: translateY(-.4rem);
        outline-color: #9e8f05;
      }
    }
`;

export default Formulario;
