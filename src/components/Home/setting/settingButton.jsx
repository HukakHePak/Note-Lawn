import React from "react";
import settingBtn from "../../../img/setting.svg";

function SettingButton() {
  function showModal() {
    
  }

  return (
    <button 
      className="setting-btn"
      onClick={showModal}
    >
      <img src={settingBtn} alt="" />
    </button>
  );
}

export default SettingButton;
