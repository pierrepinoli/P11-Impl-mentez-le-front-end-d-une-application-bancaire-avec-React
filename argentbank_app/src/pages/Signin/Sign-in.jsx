import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/Actions/authActions';
import { useNavigate } from 'react-router-dom';
import './sign-in.scss';

function Signin({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // État pour "Remember Me"
  const [rememberMe, setRememberMe] = useState(false); 

  // Utilisation de useNavigate pour la redirection
  const navigate = useNavigate(); 

  const handleSignin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '123') {
      login();
      // Redirection vers /dashboard après l'authentification réussie
      navigate('/dashboard'); 
    } else {
      console.log('Authentification échouée');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignin}>
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
          <div>
            <input 
              type="checkbox" 
              id="remember-me" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default connect(null, { login })(Signin);