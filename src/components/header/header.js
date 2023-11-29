import React from "react";
import './header.css'
import metallicaLogo from '../../assets/metallica-logo.png'

const Header = () => {
    return(
        <header>
            <a href="#">
                <img src={metallicaLogo} alt="Logo Metallica" className="logo-metallica"/>
            </a>
        </header>
    );
};

export default Header;