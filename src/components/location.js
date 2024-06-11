import React from "react";
import { NavLink } from "react-router-dom";
import logement from "../datas/logement.json";

function location() {
    return (
        <section className="product-location">
            {logement.map((logement) => {
                return (
                    <article key={logement.id}>
                        <NavLink to={`/logement/${logement.id}`}>
                            <div className="cards">
                                <img className="img-card" src={logement.cover} alt="logement" />
                                <div className="overlay-card"></div>
                                <h2 className="title-card">{logement.title}</h2>
                            </div>
                        </NavLink>
                    </article>
                );
            })}
        </section>
    );
}

export default location;
