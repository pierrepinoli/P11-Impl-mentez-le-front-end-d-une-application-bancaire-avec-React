import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { login, logfail, logout } from '../../redux/Actions/authActions';

import './signin.scss';

function Signin({ login, logfail, logout }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberChecked, setRememberChecked] = useState(false);
  const [error, setError] = useState('');

// Utilisation de useNavigate pour la redirection
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberChecked(true);
    } else {
      setUsername('');
      setPassword('');
      setRememberChecked(false);
    }
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: username,
        password: password
      });
      

      // Si la réponse est OK (status 200)
      if (response.status === 200) {
        const token = response.data.body.token;
        
        // Dispatch l'action login avec le token
        login(token);
        // Redirection vers /dashboard après l'authentification réussie
        navigate('/dashboard');

        if (rememberChecked) {
          // Si "Remember Me" est coché, sauvegarde les identifiants dans le localStorage
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          // Si "Remember Me" n'est pas coché, vide le localStorage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }
         // Stockage du token dans le sessionStorage
         sessionStorage.setItem('token', token);  
      }
    } catch (error) {

      // Gestion de l'erreur 400 "utilisateur non trouvé"
      if (error.response && error.response.status === 400) {
        setError('Identifiants incorrects');
        
        // Gestion de l'erreur 500 "Erreur interne du serveur"
      } else if (error.response && error.response.status === 500) {
        setError('Erreur interne du serveur. Veuillez réessayer plus tard.');
      } else {
        console.error('Authentication failed:', error);
        logfail();
      }
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
              type="email" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="input-rememberme">
            <input 
              className="input-checkbox"
              type="checkbox" 
              id="remember-me" 
              checked={rememberChecked} 
              onChange={() => setRememberChecked(!rememberChecked)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>

          {/* Affichage du message d'erreur */}
          {error && <div className="input-error"><span className="input-error-txt">{error}</span></div>}
        </form>
      </section>
    </main>
  );
}

export default connect(null, { login, logfail, logout })(Signin);


