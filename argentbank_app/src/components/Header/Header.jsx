import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/Actions/authActions';
import { updateUserData } from '../../redux/Actions/editActions'; // Importez l'action pour mettre à jour les données utilisateur
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp';
import axios from 'axios'; 

import './header.scss';

function Header() {
  const isConnected = useSelector(state => state.auth.isConnected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    userName: ''
  });

// Récupére le token depuis le sessionStorage
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      if (isConnected && token) { // Vérifie si l'utilisateur est connecté et si le token est présent
        try {
          const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          });
          if (response.status === 200) {
            const { email, firstName, lastName, userName } = response.data.body;
            setUserData({ email, firstName, lastName, userName });

            // Dispatch des données de l'utilisateur pour les mettre à jour dans le state
            dispatch(updateUserData({ userData: { email, firstName, lastName, userName } }));

          } else {
            console.error('Failed to fetch user profile');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
    };
  
    fetchData(); // Appel la fonction fetchData directement
  }, [isConnected, token, dispatch]); // Dépendances de l'effet principal :  Inclus le token et la valeur de isConnected dans les dépendances de l'effet
  

  

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogoClick = () => {
    if (isConnected) {

      // Si l'utilisateur est connecté et qu'il clique sur le logo, déconnection
      // et redirection vers la page d'accueil
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

        <div className='main-nav-menu'>
          {isConnected ? (
            <>
              <div className="main-nav-item">
                <i className="fa fa-user-circle"></i>

                {/* Utilisation du nom d'utilisateur récupéré */}
                <span>{userData.userName}</span> 
              </div>
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
