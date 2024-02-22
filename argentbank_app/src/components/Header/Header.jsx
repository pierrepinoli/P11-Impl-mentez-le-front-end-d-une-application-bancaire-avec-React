import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/Actions/authActions';
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp';

import './header.scss';

function Header({ isLoggedIn, logout }) {
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
                      <NavLink to="/User">
                          <div className="main-nav-item">
                              <i className="fa fa-user-circle"></i>
                              Tony
                          </div>
                      </NavLink>
                      
                      <NavLink to="/">
                          <div className="main-nav-item">
                              <i className="fa fa-sign-in"></i>
                              Sign in
                          </div>
                      </NavLink>
                  </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { logout })(Header);





