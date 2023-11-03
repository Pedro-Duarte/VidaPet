import { React } from 'react';
import { styled } from 'styled-components';
import '../../styles/style.css';
import PetImagem from '../../imagens/pet1.png'
import PetImagem2 from '../../imagens/pet-img.png'

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
                <img className='Sobre_Imagem' src={PetImagem} alt='Imagem de um cão'></img>
            </section>
            <section className='Cuidando_Section'>
              <img className='Cuidando_Imagem' src={PetImagem2} alt='Imagem de um Cão'></img>
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
  flex-direction: column-reverse;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  width: auto;
  height: auto;
  padding: 2rem 2rem 2rem 2rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 3rem 3rem 3rem 3rem;
  }
  
    div.Sobre_Div {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: space-around;
      font-family: "Open Sans", sans-serif;
      max-width: 100%;
      height: auto;

      @media only screen and (min-width: 768px) {
        justify-content: space-around;
        max-width: 600px;
        margin: 1rem 1rem 0px;
      } 
      
      h1{
            margin: 0.6em 0px;
            color: white;
            text-align: center;
            font-size: 35px;

            @media only screen and (min-width: 768px) {     
            font-size: 30px;
            }                        
          }

         p.Sobre_Texto{
            line-height: 28px;
            margin: 0.6em 0px;
            color: white;
            text-decoration: justify;
            font-size: 20px;

            @media only screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 24px;
            }
          }
    }

    img.Sobre_Imagem {
      flex-grow: 1;
      max-width: 235px;
      height: auto;
      margin: 0px;
      
      @media only screen and (min-width: 768px) {
        max-width: 235px;
        height: auto;
        /* max-width: 100%;
        max-height: 100%; */
        margin:0px 0px 0px 3rem;

      }
    }        
}

>section.Cuidando_Section {
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  width: auto;
  height: auto;
  padding: 2rem 2rem 2rem 2rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3rem 3rem 3rem 3rem;
  }

    img.Cuidando_Imagem {
      flex-grow: 1;
      max-width: 100%;
      height: auto;
      margin: 0px;
      
      @media only screen and (min-width: 768px) {
        /* width: 510px;
        height: 454.8px;
        max-width: 100%;
        max-height: 100%; */
        margin:0px 3rem 0px 0px;
      }
    }
  
    div.Cuidando_Div {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      align-items: center;
      margin: 1.75rem 0rem 0rem;   
      font-family: "Open Sans", sans-serif;
      max-width: 100%;
      height: auto;

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
        text-align: center;
        font-size: 35px;

        @media only screen and (min-width: 768px) {
          font-size: 30px;
        }                        
      }

        p.Cuidando_Texto{
          line-height: 28px;
          margin: 0.6em 0px;
          color: black;
          text-align:justify;
          font-size: 20px;

          @media only screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 24px;
          }
        }
}
`
export default SobreNos;