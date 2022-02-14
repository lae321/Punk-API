import "./Main.scss";
import React from "react";
import Card from "../../components/Card/Card";

const Main = (props) => {
  const { beersArr } = props;
  const beerJSX = beersArr.map((beer) => {
    return (
      <div>
        <Card
          image={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
          description={beer.description}
          abv={beer.abv}
        />
      </div>
    );
  });
  return <div className="mainContainer">{beerJSX}</div>;
};

export default Main;
