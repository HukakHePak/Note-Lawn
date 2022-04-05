import React, { useState, useEffect } from "react";
import ColorSetter from "../../Global/ColorSetter";
import { ColorSetterWrapper } from "../../Global/ColorSetterWrapper";

function SettingsModal({ hiddenModal }) {
  const [mainColor, setMainColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  // useEffect(() => {
  //   dispatch(changeCurrentTheme(mainColor, secondColor))
  // }, [mainColor, secondColor])

  if (hiddenModal) return null;
  return (
    <div className="setting-modal">
      <ColorSetterWrapper text="Main Color " setColor={setMainColor} />
      <ColorSetterWrapper text="Second color " setColor={setSecondColor} />
    </div>
  );
}

export default SettingsModal;
