import React, { useRef, useEffect } from 'react';
import Webcam from "react-webcam";
import { styled } from 'styled-components';
import { MdAddToPhotos, MdOutlineCamera, MdOutlineFlipCameraIos } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";


function WebcamCapture() {
    const webcamRef = useRef(null);

    const startWebcam = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          webcamRef.current.srcObject = stream;
        } catch (error) {
          console.error('Erro ao acessar a câmera:', error);
        }
      };

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // Faça algo com a imagem capturada, como exibi-la na página ou enviá-la para o servidor.
    };
    useEffect(() => {
        startWebcam(); // Inicie a câmera quando o componente for montado
      }, []);

    return (
        <Container>
            <RiCloseCircleFill size={35} className='close'/>
            <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            </div>  
            <MdAddToPhotos size={30}/>
            <MdOutlineCamera size={50} onClick={capture}/>
            <MdOutlineFlipCameraIos size={30}/>
        </Container>
       
    );
}

export default WebcamCapture;

const Container = styled.section`
    padding: 1rem;
   position: fixed;
    top: 0;
    left: 20rem;
    background-color: rgba(0, 0, 0, 0.8); /* Adicione um fundo semi-transparente para destacar a câmera */
    z-index: 151; /* Certifique-se de que a câmera esteja na parte superior de todos os elementos */
    justify-content: center;
    align-items: center;

video {
    width: 500px;
    justify-content: center;
    align-items: center;
}
.close{
    color:white;
margin-left: 29rem;
}
 > svg{
    color:white;
    margin-left: 6rem;
}


@media(max-width: 750px) {
    width: 100%;

    .close{
        color:white;
    margin-left: 40rem;
    }
     > svg{
        color:white;
        margin-left: 10rem;
    }

@media(max-width: 650px) {
    width: 100%;

    .close{
        color:white;
    margin-left: 25rem;
    }
     > svg{
        color:white;
        margin-left: 6rem;
    }



@media(max-width: 400px) {
    width: 100%;

    .close{
        color:white;
    margin-left: 18rem;
    }
     > svg{
        color:white;
        margin-left: 4rem;
    }


  }

`
