
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, setRememberMe } from '../../redux/Actions/authActions';
import { useNavigate } from 'react-router-dom';
import './signin.scss';

function Signin({ login, setRememberMe, rememberMe }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Utilisation de useNavigate pour la redirection
  const navigate = useNavigate(); 

  useEffect(() => {
    // Récupére les valeurs du localStorage si "Remember Me" est vrai dans le state
    if (rememberMe) {
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      if (storedUsername && storedPassword) {
        setUsername(storedUsername);
        setPassword(storedPassword);
      }
    }
  }, [rememberMe]);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '123') {
      login();
      // Redirection vers /dashboard après l'authentification réussie
      navigate('/dashboard'); 
      // Met à jour le "Remember Me" dans le state si coché
      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Si "Remember Me" n'est pas coché, efface les données du localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
    } else {
      console.log('Authentification échouée');
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
          <div className="input-rememberme">
            <input 
              className="input-checkbox"
              type="checkbox" 
              id="remember-me" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => ({
  rememberMe: state.auth.rememberMe,
});

export default connect(mapStateToProps, { login, setRememberMe })(Signin);
