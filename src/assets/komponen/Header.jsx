import React from 'react';
import thinkaraLogo from './thinkara.png';

function Header(props) {
  const { title, onShowLogin, onShowSignUp } = props;
return (
    <header className="kontainer-semua">
        <div className="logo">
            <h1 className="Judul">{title}</h1>
            {/* Menggunakan thinkara.png sebagai logo */}
            <img className="logothinkara" src={thinkaraLogo} alt="Thinkara Logo" />
        </div>
        <div className="containernavbar">
            <nav className="Navbar">
                <ul>
                    <li>
                        <a href="#home" className="home">Home</a>
                    </li>
                    <li>
                        <a href="#courses" className="courses">Courses</a>
                    </li>
                    <li>
                        <a href="#about" className="about">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="userinput">
            <button onClick={onShowLogin} className="login">
                Login
            </button>
            <button onClick ={onShowSignUp}className="signup">
                Sign Up
            </button>
        </div>
    </header>
);
}

export default Header;
