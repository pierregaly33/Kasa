import React from "react";

function host(props) {
    const hostNameSplitted = props.host.name.split(" ");
    const [name, lastName] = hostNameSplitted;
    return (
        <div className="host">
            <div className="host-name">
                <p>{name}</p>
                <p>{lastName}</p>
            </div>
            <img src={props.host.picture} alt="locataire" />
        </div>
    );
}

export default host;
