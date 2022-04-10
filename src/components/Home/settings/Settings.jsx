import React, { useState } from "react";
import SettingsModal from "./SettingsModal";


function Settings() {
  const [showMohal, setShowMohal] = useState(false)

  return (
    <div className="setting">
      <button
        className="setting-btn"
        onClick={() => setShowMohal(!showMohal)}
      ></button>
      <SettingsModal showMohal={showMohal} />
    </div>
  );
}

export default Settings;


