import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Header isConnected={isConnected} logout={logout} />
      <Routes>

        {/* Si l'utilisateur est connecté : navigate vers dashboard sinon page d'acceuil */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
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