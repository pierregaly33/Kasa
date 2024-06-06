import React from "react";
import Banner from "../components/banner";
import image from "../assets/img/imageBanner.svg";

function home() {
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={image} withOverlay={true} />
        </>
    );
}

export default home;
