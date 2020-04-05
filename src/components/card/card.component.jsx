import React from "react";

import "./card.style.css";

const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`}
    />
    <h2>{props.cat.name}</h2>
    <p>{props.cat.email}</p>
  </div>
);

export default Card;
