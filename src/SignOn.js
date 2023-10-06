/*import React, { useState } from "react";
import { auth } from "./firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Utilisateur inscrit avec succès
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUp;*/
import React, { useContext, useRef, useState} from "react";

import { UserContext } from './context/UserContext';


const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const {modalState, toggleModals} = useContext(UserContext)
  
  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
       }
     }
    
  const handleForm = e => {
    e.preventDefault()
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Ici, vous pouvez ajouter la logique d'inscription avec Firebase ou toute autre méthode d'authentification
    // Exemple simplifié :
    console.log('Formulaire soumis avec les données :', formData);
  };

  return (
    <>
    {modalState.signOnModal && (
    <div className="container">
      <div 
      onClick={() => toggleModals("close")}
      className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
            <button
                    onClick={() => toggleModals("close")}
                    className="btn-close"></button>
              <h2 className="card-title text-center">Inscription</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
             
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mot de passe</label>
                  <input
               
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirmer le mot de passe</label>
                  <input
                  
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};
  </>
  );
};

export default SignUp;

