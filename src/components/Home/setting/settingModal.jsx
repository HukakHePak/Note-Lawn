import React, { useContext } from "react";

function SettingModal() {
  const [show, setShow] = useContext(false);

  return (
    <div className={show ? "setting-modal" : "setting-modal--active"}>
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
  );
}

export default SettingModal;
