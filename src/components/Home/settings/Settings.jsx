import React, { useState } from "react";
import SettingsModal from "./SettingsModal";
import { ReactComponent as SettingsSvg } from "../../../img/setting.svg";
import fontColorContrast from "font-color-contrast";

function Settings({ theme }) {
  const [showModal, setShowModal] = useState(false);
  const color = fontColorContrast(theme.main);

  return (
    <div className="setting">
      <SettingsSvg
        className="setting-btn"
        fill={color}
        onClick={() => setShowModal(!showModal)}
      />
      {showModal && <SettingsModal showMohal={showModal} />}
    </div>
  );
}

export default Settings;
