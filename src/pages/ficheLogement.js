import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../datas/logement.json";
import Carousel from "../components/carousel";

function Fichelogement() {
    let { id } = useParams();
    const logement = Logements.find((logement) => logement.id === id);
    console.log(logement);

    return (
        <>
            <div className="fiche-logement">
                <Carousel images={logement.pictures} />
                <div className="fiche-logement-content">
                    <div className="logement-information">
                        <h2>{logement.title}</h2>
                        <h3>{logement.location}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fichelogement;
