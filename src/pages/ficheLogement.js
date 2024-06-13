import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../datas/logement.json";
import Carousel from "../components/carousel";
import Collapse from "../components/collapse";
import Tags from "../components/tags";
import Rating from "../components/rating";
import Host from "../components/host";

function Fichelogement() {
    let { id } = useParams();
    const logement = Logements.find((logement) => logement.id === id);

    return (
        <>
            <div className="fiche-logement">
                <Carousel images={logement.pictures} />
                <div className="fiche-logement-content">
                    <div className="logement-information">
                        <h2>{logement.title}</h2>
                        <h3>{logement.location}</h3>
                        <div className="main-tags">
                            {logement.tags.map((tag, index) => {
                                return <Tags key={index} text={tag} />;
                            })}
                        </div>
                    </div>
                    <div className="host-and-rate">
                        <Host host={logement.host} />
                        <Rating rating={logement.rating} />
                    </div>
                </div>
            </div>
            <div className="collapse-main">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    {logement.equipments.map((equipment, index) => {
                        return <p key={index}>{equipment}</p>;
                    })}
                </Collapse>
            </div>
        </>
    );
}

export default Fichelogement;
