import { React } from 'react';
import { styled } from 'styled-components';
import '../../styles/style.css';

function SobreNos() {
    return (
        <Container className='Sobre'>
            <section className='Sobre_Section'>
                <div className='Sobre_Div'>
                    <h1>Sobre Nós</h1>
                    <p className='Sobre_Texto'>
                        O Vida Pet by Lili é uma startup da área da Tecnologia onde vem com o 
                        objetivo de trazer um Ecossistema para sanar dores, dificuldades que os donos de Pet tem.
                    </p>
                </div>
            </section>
            <section className='Cuidando_Section'>
              <img className='Cuidando_Imagem' src='../../imagens/pet-img.png' alt='Imagem de um Cão'></img>
              <div className='Cuidando_Div'>
                  <h1 className='Cuidando_H1'>Cuidando dos Pets</h1>
                  <p className='Cuidando_Texto'>
                      Nossa missao é criar um Ecossistem onde voce pode fazer toda a gestao do seu Pet e 
                      ajudar outros abandonados ou perdidos.
                  </p>
              </div>
            </section>
        </Container>
    );
}

const Container = styled.section`
background-color: black;
display: flex;
flex-direction: column;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
min-width: 100%;
width: 100%;
height: 100%;

@media only screen and (min-width: 768px) {   
  background-color: rgba(0, 0, 0, 0);
  background-attachment: scroll, scroll;
  background-origin: padding-box, padding-box;
  background-clip: border-box, border-box;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
}

>section.Sobre_Section {
  background-color: black ;
  display: flex;
  justify-content: space-around;
  -moz-box-pack: center;
  -moz-box-align: center;
  margin-bottom: 0px;
  z-index: 2;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    -moz-box-pack: center;
    width: 100%;
  }
  
    div.Sobre_Div {
      display: flex;
      flex-direction: column;
      -moz-box-pack: center;
      justify-content: space-around;
      -moz-box-align: center;
      margin: 1.75rem 1rem 0px;   
      font-family: "Open Sans", sans-serif;
      box-sizing: border-box;
      width: 100%;
      height: 100%;

      @media only screen and (min-width: 768px) {
        align-items: center;
        text-align: center;
        max-width: 600px;
        margin: 1rem 1rem 0px;
      }                
    }

         h1{
            margin: 0.6em 0px;
            color: white;

            @media only screen and (min-width: 768px) {     
            font-size: 30px;
            }                        
          }

         p.Sobre_Texto{
            line-height: 24px;
            margin: 0.6em 0px;
            color: white;
          }
}

>section.Cuidando_Section {
  display: flex;
  background-color: white;
  -moz-box-pack: center;
  -moz-box-align: center;
  z-index: 2;
  font-family: "Open Sans", sans-serif;
  width: 50%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    -moz-box-pack: center;
    width: 100%;
    height: 445px;
  }

    img.Cuidando_Imagem {
      flex-grow: 1;
    }
  
    div.Cuidando_Div {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      -moz-box-pack: center;
      justify-content: space-around;
      -moz-box-align: center;
      margin: 1.75rem 1rem 0px;   
      font-family: "Open Sans", sans-serif;
      box-sizing: border-box;
      width: 100%;
      height: 100%;

      @media only screen and (min-width: 768px) {
        align-items: center;
        text-align: center;
        width: 100%;
        margin: 1rem 1rem 0px;
      }                
    }

      h1.Cuidando_H1 {
        margin: 0.6em 0px;
        color: black;

        @media only screen and (min-width: 768px) {
          font-size: 30px;
        }                        
      }

        p.Cuidando_Texto{
          line-height: 24px;
          margin: 0.6em 0px;
          color: black;
        }
}
`
export default SobreNos;