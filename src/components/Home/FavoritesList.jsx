import React, { useState } from "react";
import Settings from "./settings/Settings";

function FavoritesList({ items }) {
  const [active, setActive] = useState(false);

  return (
    <div className="home__favorites">
      <h2 className="home__favorites-title">Favourites</h2>
      {items.map((item) => (
        <a className="home__favorites-item" href="#pageId">
          {item}
        </a>
      ))}
      
      <Settings />
    </div>
  );
}

export default FavoritesList;
