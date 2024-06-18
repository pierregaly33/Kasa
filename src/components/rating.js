import React from "react";
import greyStar from "../assets/img/greyStar.svg";
import redStar from "../assets/img/redStar.svg";

function rating(props) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {stars.map((star) =>
                props.rating >= star ? (
                    <img className="stars-rating" key={star} src={redStar} alt="" />
                ) : (
                    <img className="stars-rating" key={star} src={greyStar} alt="" />
                )
            )}
        </div>
    );
}

export default rating;
