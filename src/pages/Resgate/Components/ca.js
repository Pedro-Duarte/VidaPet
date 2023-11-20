import React, { useRef, useState, useEffect } from 'react';
import Webcam from "react-webcam";
import { styled } from 'styled-components';
import { MdAddToPhotos, MdOutlineCamera, MdOutlineFlipCameraIos } from "react-icons/md";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import galeria from "./galeria"
import Commit from './commit';


function WebcamCapture({ closeWebcam }) {
  const webcamRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      webcamRef.current.srcObject = stream;
    } catch (error) {
      console.error('Erro ao acessar a câmera:', error);
    }
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImages([...capturedImages, imageSrc]);
  };

  useEffect(() => {
    startWebcam(); // Inicie a câmera quando o componente for montado
  }, []);

  const handleGalleryPick = (file) => {
    // Faça algo com o arquivo selecionado
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      setCapturedImages([...capturedImages, imageDataUrl]);
    };
    reader.readAsDataURL(file);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Container>
      <RiCloseCircleFill size={35} className='close' onClick={closeWebcam} />
{currentPage === 0 && (
     <>
     <div>
      <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg" 
         />
      </div>
      <MdAddToPhotos size={30} onClick={() => galeria(handleGalleryPick)} />
      <MdOutlineCamera size={50} onClick={captureImage} />
      <MdOutlineFlipCameraIos size={30} onClick={captureImage} />
      <div className="captured-images">
        {capturedImages.map((image, index) => (
          <img key={index} src={image} alt={`Capturada ${index + 1}`} />
        ))}
      </div>
      </>
      )}

{currentPage === 1 && (
<>
<Commit/>
</>

 )}

{currentPage > 0 && (
        <FaAngleDoubleLeft size={30} className='prev' onClick={handlePrevPage} />
      )}
      {currentPage < 3 && (
        <FaAngleDoubleRight size={30} className='next' onClick={handleNextPage} />
      )}
    </Container>
  );
}

export default WebcamCapture;

const Container = styled.section`
    padding: 1rem;
   position: fixed;
    top: 0;
    left: 15%;
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
margin-left: 28rem;
&:hover {
    color: red;
    /* Outros estilos para quando o mouse estiver sobre o elemento */
  }
&:active {
    transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
  }
}

.captured-images {
  display: flex;
  margin-top: 10px;
  overflow-x: auto;

  img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
}

 > svg{
    color:white;
    margin-left: 6rem;
      &:active {
      transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
    }
       }

       .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        color: white;
        background-color: #333;
        border: none;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.3s;
    
        &:hover {
          background-color: #555;
        }
    
        &.prev {
          left: -70px;
        }
    
        &.next {
          right: 10px;
        }
      }


@media(max-width: 900px) {
    left: 10%;
    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        color: white;
        background-color: #333;
        border: none;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.3s;
    
        &:hover {
          background-color: #555;
        }
    
        &.prev {
          left: -90px;
        }
    
        &.next {
          right: 10px;
        }
      }

    .captured-images {
        display: flex;
        margin-top: 20px;
        overflow-x: auto;
      
        img {
          width: 30px;
          height: 20px;
          margin-right: 5px;
        }
      }
    
    .close{
        color:white;
    margin-left: 35rem;
        }

    video {
        width: 600px;    
        justify-content: center;
        align-items: center;
    }
     > svg{
        color:white;
        margin-left: 7rem;
        &:active {
          transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
        }
        
    }

    @media(max-width: 750px) {
        left:0rem;
    
        .captured-images {
            display: flex;
            margin-top: 20px;
            overflow-x: auto;
          
            img {
              width: 30px;
              height: 20px;
              margin-right: 5px;
            }
          }
        
        .close{
            color:white;
        margin-left: 30rem;
        }
        video {
            width: 100%;    
            justify-content: center;
            align-items: center;
        }
         > svg{
            color:white;
            margin-left: 5rem;
            &:active {
              transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
            }
        }

@media(max-width: 500px) {
    left:0rem;

    .captured-images {
        display: flex;
        margin-top: 20px;
        overflow-x: auto;
      
        img {
          width: 30px;
          height: 20px;
          margin-right: 5px;
        }
      }
    
    .close{
        color:white;
    margin-left: 20rem;
    }
    video {
        width: 100%;    
        justify-content: center;
        align-items: center;
    }
     > svg{
        color:white;
        margin-left: 5rem;
        &:active {
          transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
        }
    }

    


@media(max-width: 400px) {
   
    left:0;

    .captured-images {
        display: flex;
        margin-top: 20px;
        overflow-x: auto;
      
        img {
          width: 30px;
          height: 20px;
          margin-right: 5px;
        }
      }
    
    .close{
        color:white;
    margin-left: 18rem;
    }
    video {
        width: 100%; 
        justify-content: center;
        align-items: center;
    }
     > svg{
        color:white;
        margin-left: 4rem;
        &:active {
          transform: scale(0.9); /* Diminui o tamanho do botão quando pressionado */
        }
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        color: white;
        background-color: #333;
        border: none;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.3s;
    
        &:hover {
          background-color: #555;
        }
    
        &.prev {
          left: -50px;
        }
    
        &.next {
          right: 15px;
        }
      }


  }



`