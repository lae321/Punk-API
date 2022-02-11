import React from "react";
import "./SearchBox.scss"

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

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
    </form>
  );
};

export default SearchBox;
