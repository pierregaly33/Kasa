import React from "react";
import image from "../assets/img/imgAbout.svg";
import Banner from "../components/banner";
import Data from "../datas/about.json";
import Collapse from "../components/collapse";

function about() {
    return (
        <>
            <Banner image={image} />
            <section className="collapse-main">
                {Data.map((data) => (
                    <Collapse key={data.id} title={data.title}>
                        <p>{data.text}</p>
                    </Collapse>
                ))}
            </section>
        </>
    );
}

export default about;
