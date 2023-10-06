import React, { useState } from 'react';
//import firebase from 'firebase/app';
import 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const CVUploadPage = () => {
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };

  const handleUpload = () => {
    if (cvFile) {
      const storageRef = firebase.storage().ref();
      const cvRef = storageRef.child(`cvs/${cvFile.name}`);
      
      cvRef.put(cvFile)
        .then((snapshot) => {
          console.log('CV téléchargé avec succès.');
        })
        .catch((error) => {
          console.error('Erreur lors du téléchargement du CV :', error);
        });
    } else {
      console.error('Aucun fichier sélectionné.');
    }
  };

  return (
    <div>
      <h2 className="bg-ligth">Téléversez votre CV</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Téléverser</button>
    </div>
  );
};

export default CVUploadPage;
