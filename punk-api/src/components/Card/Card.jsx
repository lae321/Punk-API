import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { image, name, tagline, description, abv } = props;
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={image} alt="" className="card__image" />
        <h3>{name}</h3>
        <p>{tagline}</p>
        <p>{description}</p>
        <p>{abv}</p>
      </div>
    </div>
  );
};

export default Card;
