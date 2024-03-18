import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from './redux/Actions/authActions';

import Home from "./pages/Home/Home.jsx";
import Signin from "./pages/Signin/Sign-in.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Error from "./pages/Error/Error.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App({ isConnected }) {
  return (
    <Router>

      {/* ajout d'une div pour assurer l'étalement de la page sur tout l'écran */}
      <div className="wrapper">

        {/* Si l'utilisateur est connecté : fait apparaitre l'option logout */}
      <Header isConnected={isConnected} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />

        {/* Si l'utilisateur n'est pas connecté : redirection vers la page d'acceuil */}
        <Route path="/dashboard" element={isConnected ? <Dashboard /> : <Navigate to="/"/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}


// Mapper l'état Redux à des props pour le composant Dashboard
// le composant Dashboard aura accès à la prop isConnected, qui sera mise à jour chaque fois que l'état Redux change.
const mapStateToProps = (state) => ({

  // vérifie l'état de isConnected : si state.auth est undefined, alors isConnected sera défini sur false
  isConnected: state.auth ? state.auth.isConnected : false,
});

export default connect(mapStateToProps, { logout })(App);