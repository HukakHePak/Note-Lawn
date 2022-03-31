import React from "react";

function SettingsModal() {
  return (
    // {/* { ? "setting-modal--active" : "setting-modal"} */}
    <div>
      <div className="setting-modal--active">
        <div className="setting-modal__item setting-modal__item--main">
          Main color<span>blu</span>
        </div>
        <div className="setting-modal__item setting-modal__item--second">
          Second color<span>red</span>
        </div>
        <div className="setting-modal__item setting-modal__item--scale">
          Scale<span>40</span>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
