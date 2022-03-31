import React from "react";

function FavoriteNoteList(props) {
  const { list } = props;

  return (
    <div className="home__favorites">
      <h2 className="home__favorites-title">Favourites</h2>
      {list.map((item, index) => (
        <FavoriteNoteItem 
          item={item}
          key={index} 
        />
      ))}
    </div>
  );
}

function FavoriteNoteItem(props) {
  const { item } = props;

  return (
    <a className="home__favorites-item" href="#pageId">
      {item}
    </a>
  );
}

export default FavoriteNoteList;
