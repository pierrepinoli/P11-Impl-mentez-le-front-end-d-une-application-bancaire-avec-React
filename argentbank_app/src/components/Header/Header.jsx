import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/Actions/authActions';
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp';

import './header.scss';

// la fonction Header prend deux propriétés en argument : isConnected et logout .
function Header({ isConnected, logout }) {
  
  const handleLogout = () => {
    // Déconnecter l'utilisateur lorsqu'il clique sur "Logout"
    logout();
  };

  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/">
          <div className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={ArgentBankLogo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </div>
        </NavLink>

        <div>
          {/* Vérifier si l'utilisateur est connecté */}
          {isConnected ? (
            <>
              {/* Afficher le nom de l'utilisateur */}
              <div className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Tony 
              </div>
              {/* Bouton de déconnexion */}
              <div className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Logout
              </div>
            </>
          ) : (
            // Si l'utilisateur n'est pas connecté, afficher le lien de connexion
            <NavLink to="/sign-in">
              <div className="main-nav-item">
                <i className="fa fa-sign-in"></i>
                Sign in
              </div>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}


// vérifie l'état de isLoggedIn : si state.auth est undefined, alors isLoggedIn sera défini sur false
const mapStateToProps = (state) => ({
  isConnected: state.auth ? state.auth.isConnected : false,
});

export default connect(mapStateToProps, { logout })(Header);
