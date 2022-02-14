import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  const [beers, setBeers] = useState(false);

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBeers(data);
      });
  };

  useEffect(() => {
    getBeers();
  }, []);

  return <div className="App">{beers && <Navbar beersArr={beers} />}</div>;
};

export default App;
