import React from "react";
import Logo from "../assets/Logo-AltunIT-White.png";
import "./Navbar.css";

function Navbar() {
    return (
        <body>
        <nav className="navbar">
            <span></span>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <ul className="menu">
                <li><a href="#">about</a></li>
                <li><a href="#">works</a></li>
                <li><a href="#">casting</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            <div className="btn">instagram</div>
        </nav>
        </body>
    );
}

export default Navbar;
