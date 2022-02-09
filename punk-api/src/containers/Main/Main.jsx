import "./Main.scss";
import React from "react";
import Card from "../../components/Card/Card"

const Main = (props) => {
  const {beersArr} = props;
  const beerJSX = beersArr.map((beer) => {
    return (
      <Card
        image={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        abv={beer.abv}
      />
    );
  });
  return <div>{beerJSX}</div>;
};

export default Main;
