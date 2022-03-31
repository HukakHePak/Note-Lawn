import React, { useState } from "react";
import "../../styles/home.css";
import FavoritesList from "./FavoritesList";
import SearchBar from "./SearchBar";
import PagesList from "./PagesList";

function Home() {
  const [search, setSearch] = useState("");
  const Pageitems = [
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
    { name: "de", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
    { name: "Late", date: "29/03/22" },
  ];
  const FavoritesItems = ["First", "Second", "Thirt"];

  return (
    <div className="home home__wrapper">
      <div className="home__main">
        <div className="home__search">
          <SearchBar setSearch={setSearch} />
        </div>
        <PagesList items={Pageitems} search={search} />
      </div>
      <FavoritesList items={FavoritesItems} />
    </div>
  );
}

export default Home;
