// Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/Actions/authActions';
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp';

import './header.scss';

function Header() {
  const isConnected = useSelector(state => state.auth.isConnected); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogoClick = () => {
    if (isConnected) {
      // Si l'utilisateur est connecté et qu'il clique sur le logo, déconnectez-le
      // et redirigez-le vers la page d'accueil
      handleLogout();
      navigate('/');
      console.log("Dashboard__isConnected", isConnected);
    }
  };

  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/" onClick={handleLogoClick}>
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
          {isConnected ? (
            <>
              <div className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Tony
              </div>
              <div className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Logout
              </div>
            </>
          ) : (
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

export default Header;
