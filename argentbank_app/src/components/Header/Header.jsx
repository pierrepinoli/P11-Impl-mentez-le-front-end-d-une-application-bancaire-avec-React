import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/Actions/authActions';
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp';

import './header.scss';

function Header() {
  const isConnected = useSelector(state => state.auth.isConnected); 
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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

// // vérifie l'état de isLoggedIn : si state.auth est undefined, alors isLoggedIn sera défini sur false
// const mapStateToProps = (state) => ({
//   isConnected: state.auth ? state.auth.isConnected : false,
// });


