import "./Navbar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useState } from "react";
import Main from "../Main/Main";

const NavBar = (props) => {
  const { beersArr } = props;

  const [ABVchecked, setABVChecked] = useState(false);
  const [Classicchecked, setClassicChecked] = useState(false);
  const [pHchecked, setpHChecked] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckedABV = () => {
    setABVChecked(!ABVchecked);
  };

  const filteredByABV = beersArr.filter((beer) => {
    return beer.abv > 6;
  });

  const handleCheckedClassic = () => {
    setClassicChecked(!Classicchecked);
  };

  const filteredByClassic = beersArr.filter((beer) => {
    return beer.abv > 6;
  });

  const handleCheckedpH = () => {
    setpHChecked(!pHchecked);
  };

  const filteredBypH = beersArr.filter((beer) => {
    return beer.ph < 4;
  });

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  let filteredBeers;

  if (ABVchecked) {
    filteredBeers = filteredByABV;
  } else if (Classicchecked) {
    filteredBeers = filteredByClassic;
  } else if (pHchecked) {
    filteredBeers = filteredBypH;
  } else {
    filteredBeers = beersArr.filter((beer) => {
      return beer.name.toLowerCase().includes(searchTerm);
    });
  }

  return (
    <>
      {/* state variable and function fed into searchBox - state is set to the searchterm - upfating the state  */}
      <SearchBox
        label="beers"
        handleCheckedABV={handleCheckedABV}
        handleCheckedClassic={handleCheckedClassic}
        handleCheckedpH={handleCheckedpH}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <Main title="results" beersArr={filteredBeers} />
    </>
  );
};

export default NavBar;
