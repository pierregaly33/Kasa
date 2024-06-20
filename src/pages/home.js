import React from "react";
import Banner from "../components/banner";
import image from "../assets/img/imageBanner.svg";
import Location from "../components/location";

function home() {
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={image} withOverlay={true} />
            <Location />
        </>
    );
}

export default home;
