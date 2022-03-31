import React from "react";
import settingBtn from "../../../img/setting.svg";
import SettingsModal from "./SettingsModal";

function Settings() {
  return (
    <div>
      <button className="setting-btn">
        <img src={settingBtn} alt="" />
      </button>
      <SettingsModal />
    </div>
  );
}

export default Settings;
