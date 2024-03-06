import React from 'react';
import { NavLink } from 'react-router-dom';

import './error.scss';

function Home() {

    return ( 
        <main className="main main-404 bg-dark">
            <div className='main-404-content'>
                <h1>ERROR 404</h1>
                <p>La page demandée n'existe pas</p>
            </div>
            
            <NavLink to="/" className="return-link-404">Retourner à la page d'accueil</NavLink>
        </main>
    );
}

export default Home;
