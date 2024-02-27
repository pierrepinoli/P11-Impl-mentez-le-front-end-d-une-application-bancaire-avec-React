import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/Actions/authActions';
import { setConnected } from '../../redux/Actions/authActions';
import { useNavigate } from 'react-router-dom';
import './sign-in.scss';

function Signin({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Utilisation de useNavigate pour la redirection
  const navigate = useNavigate(); 

  const handleSignin = (e) => {
    e.preventDefault();

    if (username === 'utilisateur' && password === 'motdepasse') {
      login();
      setConnected(); // Dispatch de l'action setConnected
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
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

// vérifie l'état de isLoggedIn : si state.auth est undefined, alors isLoggedIn sera défini sur false
const mapStateToProps = (state) => ({
  isConnected: state.auth ? state.auth.isConnected : false,
});

export default connect(mapStateToProps, { login })(Signin);