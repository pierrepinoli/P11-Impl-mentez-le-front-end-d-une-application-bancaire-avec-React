import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home.jsx";
import SignIn from "./pages/Signin/SignIn.jsx";
import User from "./pages/User/User.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
       <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/User" element={<User />} />
          </Routes>
          <Footer />
        </Router>
  );
}
export default App;

