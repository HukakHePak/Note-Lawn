import React, { useState } from "react";
import SearchBtn from "../../img/search.svg";

function SearchBar({setSearch, background}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setSearch(e.target.value)
  };

  return (
    <form className="home__search">
      <input
        className="home__search-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search..."
        style={{background}}
      />

      <button className="home__search-btn" type="button">
        <img src={SearchBtn} alt="" />
      </button>
    </form>
  );
}

export default SearchBar;
