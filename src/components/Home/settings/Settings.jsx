import React, { useState } from "react";
import SettingsModal from "./SettingsModal";
import { ReactComponent as SettingsSvg } from "../../../img/setting.svg";
import fontColorContrast from 'font-color-contrast'

function Settings({ theme }) {
  const [showMohal, setShowMohal] = useState(false);
  const color = fontColorContrast(theme.mainColor);

  return (
    <div className="setting">
      <SettingsSvg
        className="setting-btn"
        onClick={() => setShowMohal(!showMohal)}
        fill={color}
      />
      <SettingsModal showMohal={showMohal} />
    </div>
  );
}

export default Settings;
