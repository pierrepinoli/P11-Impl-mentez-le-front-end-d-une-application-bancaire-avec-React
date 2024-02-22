import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./pages/Home/Home.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Error from "./pages/Error/Error.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
       <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />}/>
          </Routes>
          <Footer />
        </Router>
  );
}
export default App;

