import React, { useState } from "react";
import { ColorSetterWrapper } from "./ColorSetterWrapper";

export function SmallModal({
  hiddenModal,
  action,
  defaultColor,
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

  function addBoardToStore(e) {
    e.preventDefault()
    action(value, boardColor)
    hiddenModal()
  } 

  return (
    <div className={styleClassString}>
      <form className="small-modal__form" onSubmit={addBoardToStore}>
        <input
          className="small-modal__input"
          placeholder={placeholderText}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="small-modal__wrapper">
          <button className="small-modal__btn">{buttonText}</button>

            <ColorSetterWrapper text="Color" setColor={setBoardColor} defaultColor={defaultColor}/>
        </div>
      </form>
    </div>
  );
}
