import React, { useState } from "react";
import SettingsModal from "./SettingsModal";


function Settings() {
  const [hiddenModal, setHiddenModal] = useState(true)

  return (
    <>
      <button
        className="setting-btn"
        onClick={() => setHiddenModal(!hiddenModal)}
      ></button>
      <SettingsModal hiddenModal={hiddenModal}/>
    </>
  );
}

export default Settings;


