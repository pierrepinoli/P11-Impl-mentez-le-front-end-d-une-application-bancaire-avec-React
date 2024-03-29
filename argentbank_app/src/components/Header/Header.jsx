import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/Actions/authActions';
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp';

import './header.scss';

function Header() {
  const isConnected = useSelector(state => state.auth.isConnected);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector(state => state.edit.userData?.userName);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogoClick = () => {  
      navigate('/');
  };

  const handleIconUserClick = () => {
      navigate('/dashboard');
  }

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

        <div className='main-nav-menu'>
          {isConnected ? (
            <>

            {/* redirection sur le dashboard au clic du username */}
              <NavLink to="/dashboard" onClick={handleIconUserClick}>
              <div className="main-nav-item">
                <i className="fa fa-user-circle"></i>

                {/* Utilisation du nom d'utilisateur récupéré */}
                <span>{username}</span> 
              </div>

              {/* déconnection au clic sur logout */}
              </NavLink>
              <div className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                <span>Logout</span>
              </div>
            </>
          ) : (
            <NavLink to="/sign-in">
              <div className="main-nav-item">
                <i className="fa fa-sign-in"></i>
                <span>Sign in</span>
              </div>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
