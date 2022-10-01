import React from "react";
import "../styles/navbar.css";
import logo from "../components/logo.png"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <img className="nav-bar-logo" src={logo}
                alt="navbarlogo" />
            <h2>Surreal Estate</h2>
            <ul className="navbar-links">
                <li className="navbar-links-item">View Properties</li>
                <li className="navbar-links-item">Add a Property</li>
            </ul>
        </div>
    );
};

export default NavBar;
