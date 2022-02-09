import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const { image, name, tagline, description, abv} = props;
  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{tagline}</p>
      <p>{description}</p>
      <p>{abv}</p>
    </div>
  );
}

export default Card;
