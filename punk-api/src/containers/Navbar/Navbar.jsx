import "./Navbar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useState } from "react";
import Main from "../Main/Main";

const NavBar = (props) => {
  const { beersArr } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beersArr.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      {/* state variable and function fed into searchBox - state is set to the searchterm - upfating the state  */}
      <SearchBox
        label="beers"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <Main title="results" beersArr={filteredBeers} />
    </>
  );
};

export default NavBar;
