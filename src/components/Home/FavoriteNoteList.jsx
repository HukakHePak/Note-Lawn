import React from "react";
import "react-color-palette/lib/css/styles.css";
import Settings from "./settings/Settings";


function FavoriteNoteList({ list }) {
  

  return (
    <div className="home__favorites">
      <h2 className="home__favorites-title">Favourites</h2>
      {list.map((item, index) => (
        <a className="home__favorites-item" href="#pageId" key={index}>
          {item}
        </a>
      ))}
      <Settings />
    </div>
  );
}


export default FavoriteNoteList;
