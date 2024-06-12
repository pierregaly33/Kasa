import React from "react";
import { useState } from "react";
import image from "../assets/img/vectorCollapse.svg";

function Collapse(props) {
    const [hidden, setHidden] = useState(true);
    const handleShow = () => {
        setHidden(!hidden);
    };
    return (
        <>
            <div className={`collapse ${hidden ? "collapsed" : "expended"}`} onClick={handleShow}>
                <h3 className="collapse-header">
                    {props.title}
                    <img src={image} alt="vector" />
                </h3>
                <div className="collapse-content">{props.children}</div>
            </div>
        </>
    );
}

export default Collapse;
