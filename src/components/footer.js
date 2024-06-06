import React from "react";
import image from "../assets/img/logoFooter.svg";

function footer() {
    return (
        <footer className="footer-container">
            <img src={image} alt="logo" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer>
    );
}

export default footer;
