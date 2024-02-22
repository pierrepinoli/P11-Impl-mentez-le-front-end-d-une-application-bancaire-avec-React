import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/Actions/authActions';

import './signin.scss';

function SignIn({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  // ***************** TEMPORAIRE *****************
  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Vérifiez ici les informations d'identification
    // Par exemple, si username et password correspondent à des valeurs prédéfinies
    if (username === 'utilisateur' && password === 'motdepasse') {
      // Authentification réussie, mettez à jour l'état de connexion
      login();
    } else {
      // Affichez un message d'erreur ou effectuez une autre action en cas d'échec de l'authentification
      console.log('Authentification échouée');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default connect(null, { login })(SignIn);