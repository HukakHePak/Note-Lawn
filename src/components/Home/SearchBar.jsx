import React, { useState } from "react";
import SearchBtn from "../../img/search.svg";

function SearchBar(props) {
  const { onGetTargetBoard } = props;

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onGetTargetBoard(e.target[0].value);

    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="home__search" onSubmit={handleSubmit}>
      <input
        className="home__search-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
      />

      <button className="home__search-btn" type="button">
        <img src={SearchBtn} alt="" />
      </button>
    </form>
  );
}

export default SearchBar;
