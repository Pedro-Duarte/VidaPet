import "../../styles/style.css";
import { styled } from 'styled-components';

import WebcamCapture from './Components/camera';
import React, { useState } from 'react';
import RescueView from '../Resgate/RescueView';


function App() {
  const [isWebcamVisible, setIsWebcamVisible] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]);

 
  const handleCaptureImage = (imageSrc) => {
    setCapturedImages([...capturedImages, imageSrc]);
  };

  const openWebcam = () => {
    setIsWebcamVisible(true);
  };

  const closeWebcam = () => {
    setIsWebcamVisible(false);
  };

  return (
    <>
      <Container >
        <section>
          <div>
            <h1>
              Encontrou um animal de estimação que pode estar precisando de ajuda ou que foi abandonado.
            </h1>
            <p>1. Fotografe o animal de estimação.</p>
            <p>2. Guarde a imagem capturada para registrar esse momento especial.</p>
            <p>3. A imagem capturada, juntamente com informações de geolocalização e horário da captura, são enviadas para nosso banco de dados.</p>
            <p>Isso não apenas ajuda a localizar rapidamente o animal, mas também cria oportunidades para resgatadores e pessoas interessadas em adotar fazerem a diferença na vida desses animais de estimação.</p>
            <h2> Junte-se a nós nesta missão de cuidar e encontrar um lar para os peludos necessitados! 🐶🏡🐱</h2>
            <div>
              <button onClick={openWebcam} className="myButton">Iniciar Câmera</button>

            </div>
          </div>
        </section>

      </Container>
      {isWebcamVisible && <WebcamCapture
        closeWebcam={closeWebcam}
        onCaptureImage={handleCaptureImage}

      />}
      <RescueView />

    </>
  )
};

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

.myButton {
  padding: 0.6rem 1.5rem;
  background-color:#3fdb28;
  border-radius:34px;
  border:4px solid #b4edba;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Impact;
  font-size:17px;
  font-weight:bold;
  padding:15px 32px;
  text-decoration:none;
  text-shadow:-1px 2px 7px #2f6627;
}
.myButton:hover {
  background-color:#1e4f03;
}
.myButton:active {
  position:relative;
  top:1px;
}


>section{
display: flex;
    flex-direction: column;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    margin-bottom: 30px;
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
          max-width: 100%;
          margin: 1rem 1rem 0px;
              }                }

           h1{
                margin: 0.6em 0px;
                color: rgb(255, 255, 255);

                @media only screen and (min-width: 768px) {
                  text-align: center;
                      font-size: 25px;
                      margin: 0.6em 0px;
                     color: rgb(255, 255, 255);
                    }                        
            }

           p{
            text-align: center;
              line-height: 24px;
              margin: 0.6em 0px;
              color: rgb(255, 255, 255);
            }

      button{
            margin: 1rem 0rem; 

  @media only screen and (min-width: 768px) {
    
    margin: 1rem 28rem;
  } 
           }

           h2{
            text-align: center;
              line-height: 30px;
              margin: 0.6em 0px;
              color: rgb(255, 255, 255);
           }
    }
    
    
  
`

export default App;
