import React, { useState } from "react";
import arrowLeft from "../assets/img/arrowLeft.svg";
import arrowRight from "../assets/img/arrowRight.svg";

function Carousel(props) {
    const [carousel, setCarousel] = useState(0);

    const next = () => {
        if (carousel < props.images.length - 1) {
            setCarousel(carousel + 1);
        } else {
            setCarousel(0);
        }
    };

    const previous = () => {
        if (carousel > 0) {
            setCarousel(carousel - 1);
        } else {
            setCarousel(props.images.length - 1);
        }
    };

    return (
        <div className="carousel">
            {props.images.length > 1 && (
                <>
                    <div className="left">
                        <img onClick={previous} src={arrowLeft} alt="précédent" />
                    </div>
                    <div className="right">
                        <img onClick={next} src={arrowRight} alt="suivant" />
                    </div>
                    <p className="compteur">
                        {carousel + 1} / {props.images.length}
                    </p>
                </>
            )}
            {props.images.map((image, index) => {
                return (
                    <div key={index} className={`${carousel === index ? "active" : "inactive"}`}>
                        <img className="img-carousel" src={image} alt="images appartement" />
                    </div>
                );
            })}
        </div>
    );
}

export default Carousel;
