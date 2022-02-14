import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const {
    searchTerm,
    handleInput,
    handleCheckedABV,
    handleCheckedClassic,
    handleCheckedpH,
  } = props;

  return (
    <form className="search-box">
      {/* onInput handles the change in input into the search box using handleInput */}
      <input
        type="text"
        name="search-box"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
        placeholder="Search"
      />
      <label for="high-abv">High ABV (6%)</label>
      <input
        type="checkbox"
        name="high-abv"
        className="search-box__check"
        onChange={handleCheckedABV}
      />
      <label for="classic-range">Classic Range</label>
      <input
        type="checkbox"
        name="classic-range"
        className="search-box__check"
        onChange={handleCheckedClassic}
      />
      <label for="acidic">Acidic</label>
      <input
        type="checkbox"
        name="acidic"
        className="search-box__check"
        onChange={handleCheckedpH}
      />
    </form>
  );
};

export default SearchBox;
