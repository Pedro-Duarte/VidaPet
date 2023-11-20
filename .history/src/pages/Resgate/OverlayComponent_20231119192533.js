import React, { useState, useEffect, useRef } from 'react';
import '../../styles/App.css';
import GoogleMaps from '../../components/GoogleMaps';
import Webcam from 'react-webcam';

function RescApp() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [geolocation, setGeolocation] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [comments, setComments] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [frontCamera, setFrontCamera] = useState(false);
  const webcamRef = useRef(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Erro ao obter geolocalização:', error);
          alert('Erro ao obter geolocalização. Por favor, habilite a localização e tente novamente.');
        }
      );
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.');
    }

    const currentDateTime = new Date().toLocaleString();
    setDateTime(currentDateTime);
  }, []);

  const toggleCamera = () => {
    setFrontCamera(!frontCamera);
  };

  const handleCapture = () => {
    if (webcamRef.current) {
      const capturedImageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(capturedImageSrc);
      setShowMap(true);
    }
  };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const sendFormData = async (formData) => {
    try {
      const response = await fetch('https://18.228.95.233/upload.php', {
        method: 'POST',
        body: formData,
        mode: 'cors',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Dados enviados com sucesso:', data);
      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Dados enviados com sucesso:');
    }
  };

  const handleSubmit = async () => {
    if (capturedImage && geolocation && dateTime) {
      const formData = new FormData();

      const response = await fetch(capturedImage);
      const blob = await response.blob();

      const file = new File([blob], 'captured_image.jpg', { type: 'image/jpeg' });

      formData.append('capturedImage', file);
      formData.append('latitude', geolocation.latitude);
      formData.append('longitude', geolocation.longitude);
      formData.append('capture_datetime', dateTime);
      formData.append('comments', comments);

      sendFormData(formData);
    } else {
      console.error('Dados faltando para enviar.');
      alert('Dados faltando para enviar. Por favor, capture a imagem, verifique a geolocalização e a data/hora, e tente novamente.');
    }
  };

  const handleChooseImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = handleImageUpload;
    input.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedImage = e.target.result;
        setCapturedImage(uploadedImage);
        setShowMap(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="App-header">
        <h1>Animal Rescue App</h1>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </div>

      <div className="main-container">
        <div className="webcam-container">
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            style={{ display: 'block' }}
            ref={webcamRef}
            videoConstraints={{ facingMode: frontCamera ? 'user' : 'environment' }}
            className="webcam"
          />
          <button className="button" onClick={toggleCamera}>
            Trocar Câmera
          </button>
          <button className="button" onClick={handleCapture}>
            Capturar Foto
          </button>
          <button className="button" onClick={handleChooseImage}>
            Escolher Imagem
          </button>
        </div>

        {capturedImage && (
          <div className="captured-image-container">
            <h2>Imagem Capturada</h2>
            <img
              src={capturedImage}
              alt="Capturada"
              className="captured-image"
            />
          </div>
        )}

        {geolocation && (
          <div className="geolocation-container">
            <h2>Geolocalização</h2>
            <p className="geolocation-text">
              Latitude: {geolocation.latitude}
            </p>
            <p className="geolocation-text">
              Longitude: {geolocation.longitude}
            </p>
          </div>
        )}

        {dateTime && (
          <div className="date-time-container">
            <h2>Data e Hora</h2>
            <p className="date-time-text">{dateTime}</p>
          </div>
        )}

        {showMap && (
          <div className="google-maps-container">
            <GoogleMaps
              latitude={geolocation.latitude}
              longitude={geolocation.longitude}
            />
          </div>
        )}

        {showMap && (
          <div className="comments-container">
            <h2>Comentários</h2>
            <textarea
              value={comments}
              onChange={handleCommentChange}
              className="comments-input"
            />
            <button className="submit-button" onClick={handleSubmit}>
              Enviar Resgate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RescApp;
