import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/Actions/authActions';
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp';

import './header.scss';

function Header({ isLoggedIn, logout }) {
  
  const handleLogout = () => {
    logout();
  };
  console.log("Header__isLoggedIn:", isLoggedIn); 
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
          {isLoggedIn ? (
            <>
              <NavLink to="/Dashboard">
                <div className="main-nav-item">
                  <i className="fa fa-user-circle"></i>
                  Tony 
                </div>
              </NavLink>
              <div className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Sign out
              </div>
            </>
          ) : (
            <NavLink to="/Signin">
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth ? state.auth.isLoggedIn : false,
});

export default connect(mapStateToProps, { logout })(Header);
