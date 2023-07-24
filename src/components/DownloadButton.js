import React from 'react';

function DownloadButton({ content }) {
  const handleDownload = () => {
    // Créer un lien de téléchargement avec le contenu de l'image
    const a = document.createElement('a');
    a.href = content;
    a.download = 'CV_Jerome_Pringue.png'; // Le nom du fichier de téléchargement
    a.click();
  };

  return (
    <button onClick={handleDownload}>Télécharger le CV</button>
  );
}

export default DownloadButton;