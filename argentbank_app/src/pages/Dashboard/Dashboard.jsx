import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateUserData } from '../../redux/Actions/editActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Collapse from '../../components/Collapse/Collapse';
import Editname from '../../components/Editname/Editname';
import WelcomeBack from '../../components/Welcome_back/Welcome_back';

import accountsData from '../../assets/data/accountsData.json';

import './dashboard.scss';

function Dashboard({ isConnected }) {
  const dispatch = useDispatch();
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {

    // appel API pour récuperer les données de l'utilisateur
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        });
        if (response.status === 200) {
          const { email, firstName, lastName, userName } = response.data.body;
          
          // Dispatch des données de l'utilisateur pour les mettre à jour dans le state
          dispatch(updateUserData({ userData: { email, firstName, lastName, userName } }));
          console.log("reponse data body" , response.data.body);
          
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (isConnected) {
      fetchUserData();
    }
  }, [isConnected, dispatch]);

  const handleEditNameClick = () => {
    setIsEditingName(true);
  };

  const handleEditNameSubmit = () => {
    setIsEditingName(false);
  };

  // Si l'utilisateur n'est pas connecté, il est redirigé vers la page d'accueil
  return !isConnected ? <Navigate to="/" /> : (
    <main className="main bg-dark">

  <section className="editname-wrapper">
        {isEditingName ? (
          // appel du formulaire editname sinon appel du composant welcome back 
          <div className="editname-content">
          <Editname onEditNameSubmit={handleEditNameSubmit} />
          </div>
        ) : (
          <div className="editname-content">
            <WelcomeBack />
            <button className="editname-button" onClick={handleEditNameClick}>
              Edit Name
            </button>
          </div>
        )}
      </section>
      
      <section>
        <h3 className="sr-only">Accounts</h3>
        {accountsData.accountsdata.map((account) => (
          <Collapse 
            key={account.id}
            accountTitle={account.accountTitle}
            accountAmount={account.accountAmount} 
            accountDescription={account.accountDescription}
          />
        ))}
      </section>
    </main>
  );
}

// Mapper l'état Redux à des props pour le composant Dashboard
// le composant Dashboard aura accès à la prop isConnected, qui sera mise à jour chaque fois que l'état Redux change.
const mapStateToProps = (state) => ({
  isConnected: state.auth ? state.auth.isConnected : false,
});

export default connect(mapStateToProps)(Dashboard);
