import React from "react";

function banner(props) {
    return (
        <div className="banner">
            <img src={props.image} alt="banner" />
            {props.withOverlay && <div className="homeBanner-overlay"></div>}
            {props.title && <h2 className="homeBanner-title">{props.title}</h2>}
        </div>
    );
}

export default banner;
