import React, { useState } from "react";
import { ColorSetterWrapper } from "./ColorSetterWrapper";

export function SmallModal({
  colorPallet,
  hiddenModal,
  styleClasses,
  placeholderText,
  buttonText,
}) {
  const [boardColor, setBoardColor] = useState("");
  const [value, setValue] = useState("");

  let styleClassString = "small-modal";
  for (const styleClass in styleClasses) {
    styleClassString += " " + styleClasses[styleClass];
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  if (!hiddenModal) return null;

  return (
    <div className={styleClassString}>
      <form className="small-modal__form">
        <input
          className="small-modal__input"
          placeholder={placeholderText}
          value={value}
          onChange={handleChange}
        />
        <div className="small-modal__wrapper">
          <button className="small-modal__btn">{buttonText}</button>
          {colorPallet && (
            <ColorSetterWrapper text="Color" setColor={setBoardColor} />
          )}
        </div>
      </form>
    </div>
  );
}
