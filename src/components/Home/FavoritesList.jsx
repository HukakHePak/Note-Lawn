import React from "react";
import SettingButton from "./setting/settingButton";
import SettingModal from "./setting/settingModal";

function FavoritesList({ items }) {
  return (
    <div className="home__favorites">
      <h2 className="home__favorites-title">Favourites</h2>
      {items.map((item) => (
        <a className="home__favorites-item" href="#pageId">
          {item}
        </a>
      ))}
      <SettingButton />
      {/* <SettingModal /> */}
    </div>
  );
}

export default FavoritesList;