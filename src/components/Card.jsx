import React from "react";

export default function Card(props) {
    return (
        <div className="travel-card">
            <div className="column-left">
                <img src={`../images/${props.url}`} />
            </div>
            <div className="column-right">
                <h3 className="country"><i class="fa-sharp fa-solid fa-location-dot"></i>{props.country}</h3>
                <h1>{props.attraction}</h1>
                <span className="start-date">{props.start}</span> to <span className="end-date">{props.end}</span>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}