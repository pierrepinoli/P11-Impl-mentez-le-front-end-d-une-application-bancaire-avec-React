import { NavLink } from "react-router-dom";
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp'

import './header.scss';

function Header() {
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
                    <NavLink to="/User">
                        <div className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </div>
                    </NavLink>
                    
                    <NavLink to="/">
                        <div className="main-nav-item">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </div>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;