import React, { useState } from "react";
import { ColorSetterWrapper } from "./ColorSetterWrapper";
import BackgroundLInk from './BackgroundLInk';

export function SmallModal({ hiddenModal, action, defaultColor, defaultBackground, defaultIdRepeat, styleClasses, placeholderText, buttonText }) {
  const [boardColor, setBoardColor] = useState("");
  const [value, setValue] = useState("");
  const [background, setBackground] = useState(defaultBackground || '')
  const [isRepeat, setIsRepeat] = useState(defaultIdRepeat || false);

  let styleClassString = "small-modal";
  for (const styleClass in styleClasses) {
    styleClassString += " " + styleClasses[styleClass];
  }

  function addBoardToStore(e) {
    e.preventDefault()
    action(value, boardColor, background, isRepeat)
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
        <BackgroundLInk
          defaultBackground={background}
          defaultIsRepeat={isRepeat}
          setBackground={setBackground}
          setIsRepeat={setIsRepeat}
        />
        <div className="small-modal__wrapper">
          <button className="small-modal__btn">{buttonText}</button>
          <ColorSetterWrapper text="Color" setColor={setBoardColor} defaultColor={defaultColor} />
        </div>
      </form>
    </div>
  );
}
