import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/img/Logo.svg";

function navbar() {
    return (
        <header className="navbar-main">
            <img src={image} alt="Logo" />
            <nav className="navbar">
                <ul>
                    <NavLink className="accueil" to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink className="a-propos" to="/about">
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default navbar;
