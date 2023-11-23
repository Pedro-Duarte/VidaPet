import { React } from 'react';
import { styled } from 'styled-components';
import '../../styles/style.css';
import Formulario from '../../components/contatoFormulario';

const Contato = () => {
  return(
    <StyledDivForm>
      <div className='divContact'>
        <h1>Contato</h1>
        <p>Entre em contato conosco deixando sua dúvida, sugestão, crítica 
          ou elogio.
        </p>
        <Formulario />        
      </div>
    </StyledDivForm>
  );
}


const StyledDivForm = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 1rem 0 7rem 0;

  .divContact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 1rem 0 7rem 0;

    h1 {
      color: #7c7b7b;
      margin-bottom: 1rem;
      font-family: sans-serif;
      font-size: 25px;
    }

    p {
      color: #7c7b7b;
      margin: 1rem 1rem 3rem 1rem;
      font-family: sans-serif;
      text-align: center;
    }
  }
  
`;

export default Contato;