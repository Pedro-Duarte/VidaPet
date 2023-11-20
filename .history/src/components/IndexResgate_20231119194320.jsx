import React from 'react';
import { styled } from "styled-components";

export function IndexResgate() {

    return (

        <Container>
            <section>
                <div>
                    <h1>
                    Seu Ecossistema para gerenciar Pets
                    </h1>
                    <p>
                    Nossa missao é criar um Ecossistem onde voce pode fazer toda a gestao do seu Pet e ajudar outros abandonados ou perdidos.
                    </p>
                    <a href="/resgate">Saiba Mais</a>
                </div>
            </section>

            <section>
                <div>
                    <h1>
                    Porque se Cadastrar?
                    </h1>
                    <p>
                    Tenha o Historico de saúde do seu Pet na palma da mão, sem ter que guardar papeis, cartoes de vacinação em cada atendimento que seu Pet faz.
                    </p>
                    <a href="/resgate">Saiba Mais</a>
                </div>
            </section>
        </Container>

    )
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
max-height: 100%;

@media only screen and (min-width: 768px) {
    
    background-color: rgba(0, 0, 0, 0);
    background-attachment: scroll, scroll;
    background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 46%, rgba(0,0,0,0.9906162294019171) 59%, rgba(255,255,255,0) 100%), url("https://s2-vidadebicho.glbimg.com/ERE7xaNfficR7A59T91v1s7CS2w=/0x0:620x455/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/j/a/BAHLuARx2IhCBjnO1H1w/2022-05-04-como-aumentar-a-longevidade-do-pet-dog-3344414-1280.jpeg");
    background-origin: padding-box, padding-box;
    background-clip: border-box, border-box;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 1rem;  
  }
  
>section{
    display: flex;
    flex-direction: column;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    margin-bottom: 0px;
    padding: 1rem;
    z-index: 2;
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;

@media only screen and (min-width: 768px) {
    flex-direction: row;
    -moz-box-pack: start;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    }
    
    div {
      display: flex;
      flex-direction: column;
      -moz-box-pack: center;
      justify-content: center;
      -moz-box-align: center;
      align-items: center;
      text-align: center;
      margin: 1.75rem 1rem 0px;   
      font-family: "Open Sans", sans-serif;
      box-sizing: border-box;

       @media only screen and (min-width: 768px) {
          align-items: flex-start;
          text-align: start;
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

           
    }
    
  
`

export default IndexResgate;

