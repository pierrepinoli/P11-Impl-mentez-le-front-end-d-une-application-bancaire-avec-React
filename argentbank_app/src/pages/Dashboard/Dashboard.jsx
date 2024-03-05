import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'; 

import Collapse from '../../components/Collapse/Collapse';
import Editname from '../../components/Editname/Editname';

import accountsData from '../../assets/data/accountsData.json';

import './dashboard.scss';

function Dashboard({ isConnected }) {
  console.log("Dashboard__isConnected:", isConnected);

  // Si l'utilisateur n'est pas connecté, il est redirigé vers la page d'accueil
  return !isConnected ? <Navigate to="/" /> : (
    <main className="main bg-dark">
          
          <Editname />
          
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
const mapStateToProps = (state) => ({
  isConnected: state.auth ? state.auth.isConnected : false,
});

export default connect(mapStateToProps)(Dashboard);