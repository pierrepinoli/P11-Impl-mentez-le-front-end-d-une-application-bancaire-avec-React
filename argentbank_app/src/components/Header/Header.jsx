import { NavLink } from "react-router-dom";

// import './header.scss';

function Header() {
    return (
        <header>
            <nav className="main-nav">   
                <NavLink to="/Home">
                    <div className="main-nav-logo">
                        <img
                        className="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
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
                    <NavLink to="/Home">
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