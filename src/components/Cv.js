import cv from "../assets/Cv.png"
import "../styles/Cv.css"
import React, { useState } from 'react';
import DownloadButton from './DownloadButton'; // Assurez-vous que le chemin d'accès est correct

function CV() {
  const [imageContent, setImageContent] = useState(null);

  // Charger le contenu de l'image lorsqu'elle est prête
  const handleImageLoad = () => {
    const img = document.getElementById('cv-image');
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const dataURL = canvas.toDataURL('image/png'); // Le contenu de l'image sous forme de Data URL
    setImageContent(dataURL);
  };

  return (
    <div>
    {imageContent && <DownloadButton content={imageContent} />}
      {/* L'image avec un id pour pouvoir la récupérer */}
      <img
        id="cv-image"
        src={cv}
        alt="Votre CV"
        onLoad={handleImageLoad}
        className="cv"
      />

      {/* Le reste du contenu du CV */}
      {/* ... */}

      {/* Bouton de téléchargement */}
    </div>
  );
}

export default CV;
