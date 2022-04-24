import React, { useState } from "react";
import { ReactComponent as SearchBtn } from "../../img/search.svg";
import fontColorContrast from "font-color-contrast";

function SearchBar({ setSearch, theme }) {
  const [value, setValue] = useState("");
  const color = fontColorContrast(theme.second);

  const handleChange = (e) => {
    setValue(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <form className="home__search">
      <input
        className="home__search-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search..."
        style={{ background: theme.second, color }}
      />
      <SearchBtn className="home__search-ico" fill={color} />
    </form>
  );
}

export default SearchBar;
