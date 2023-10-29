import { React } from 'react';
import { styled } from 'styled-components';
import '../../styles/style.css';

function SobreNos() {
    return (
        <Container>
            <section>
                <div>
                    <h1>Sobre Nós</h1>
                    <p>
                        O Vida Pet by Lili é uma startup da área da Tecnologia onde vem com o objetivo de trazer um Ecossistema para sanar dores, dificuldades que os donos de Pet tem.
                    </p>
                </div>
            </section>
        </Container>
    );
}

const Container = styled.section`
display: flex;
flex-direction: column;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
background-color: rgb(30, 25, 44);
position: relative;
min-width: 100%;
width: 100%;
height: 100%;

@media only screen and (min-width: 768px) {
    
    background-color: rgba(0, 0, 0, 0);
    background-attachment: scroll, scroll;
    background-image: linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%, rgba(0,0,0,0.9906162294019171) 100%, rgba(255,255,255,0) 100%);
    background-origin: padding-box, padding-box;
    background-clip: border-box, border-box;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 1rem;
  
}


>section{
  display: flex;
  justify-content: space-around;
  -moz-box-pack: center;
  -moz-box-align: center;
  margin-bottom: 0px;
  padding: 1rem;
  z-index: 2;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

@media only screen and (min-width: 768px) {
    flex-direction: row;
    -moz-box-pack: center;
    width: 100%;
    max-width: 1200px;
    }
  
    div {
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
            }                }

         h1{
              margin: 0.6em 0px;
              color: rgb(255, 255, 255);

              @media only screen and (min-width: 768px) {
                  
                    font-size: 30px;
                  }                        
          }

         p{
            line-height: 24px;
            margin: 0.6em 0px;
            color: rgb(255, 255, 255);
          }

         a{
          margin: 2rem 0px;
border-radius: 8px;
padding: 0.6rem 1.5rem;
font-size: 1rem;
font-weight: bold;
border: 1px solid linear-gradient(48deg, rgba(246,255,56,1) 0%, rgba(234,152,66,0.9878151089537377) 75%);
background: linear-gradient(48deg, rgba(246,255,56,1) 0%, rgba(234,152,66,0.9878151089537377) 75%);
color: rgb(255, 255, 255);
text-decoration: none;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 5px 6px;
max-width: 100%;

         }
  }
`

export default SobreNos;