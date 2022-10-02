import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../components/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="navbarlogo" />
      <h2 className="navbar-title">Surreal Estate</h2>
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link className="navbar-links-item" to="addproperty">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
