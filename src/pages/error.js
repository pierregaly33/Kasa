import React from "react";
import image from "../assets/img/404.svg";
import { NavLink } from "react-router-dom";

function error() {
    return (
        <>
            <main className="error">
                <img src={image} alt="erreur-404" />
                <h3>Oups! la page que vous demandez n'existe pas</h3>
            </main>
            <div className="retour-accueil">
                <NavLink to="/">
                    <p>Retournez sur la page d'accueil</p>
                </NavLink>
            </div>
        </>
    );
}

export default error;
