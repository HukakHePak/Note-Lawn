import React, { useState } from "react";
import SettingsModal from "./SettingsModal";


function Settings() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="setting">
      <button
        className="setting-btn"
        onClick={() => setShowModal(!showModal)}
      ></button>
      <SettingsModal showModal={showModal} />
    </div>
  );
}

export default Settings;


