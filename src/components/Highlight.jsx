import React from "react";
import "../App.css";
import pin from "../assets/pin.svg";

export default function Highlight(props) {
  return (
    <div className="container">
      <div className="card-container">
        <img src={props.image} alt="travel destination" />
        <section>
          <div className="location-container">
            <img src={pin} alt="destination pin" />
            <span>{props.location}</span>
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
          <h2>{props.title}</h2>
          <span className="date">
            {props.startDate} - {props.endDate}
          </span>
          <p className="description">{props.description}</p>
        </section>
      </div>
      <hr />
    </div>
  );
}
