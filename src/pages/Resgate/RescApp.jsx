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
      navigator.geolocation.getCurrentPosition((position) => {
        setGeolocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
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

  const handleSubmit = () => {
    // Envie os dados para o backend aqui, similar ao que foi feito em handleCapture
    if (capturedImage) {
      const formData = new FormData();
      formData.append('capturedImage', capturedImage);
      formData.append('latitude', geolocation.latitude);
      formData.append('longitude', geolocation.longitude);
      formData.append('capture_datetime', dateTime);
      formData.append('comments', comments);

      sendFormData(formData);
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

  const sendFormData = (formData) => {
    fetch('18.230.58.0:8080/upload.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setShowMap(true);
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
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
            Toggle Camera
          </button>
          <button className="button" onClick={handleCapture}>
            Capture Photo
          </button>
          <button className="button" onClick={handleChooseImage}>
            Choose Image
          </button>
        </div>

        {capturedImage && (
          <div className="captured-image-container">
            <h2>Image Captured</h2>
            <img
              src={capturedImage}
              alt="Captured"
              className="captured-image"
            />
          </div>
        )}

        {geolocation && (
          <div className="geolocation-container">
            <h2>Geolocation</h2>
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
            <h2>Date and Time</h2>
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
            <h2>Comments</h2>
            <textarea
              value={comments}
              onChange={handleCommentChange}
              className="comments-input"
            />
            <button className="submit-button" onClick={handleSubmit}>
              Submit Rescue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RescApp;
