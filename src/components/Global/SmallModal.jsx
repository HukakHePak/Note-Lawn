import React, { useState } from "react";
import { ColorBackgroundSetterWrapper } from './ColorBackgroundSetterWrapper';


export function SmallModal({ hiddenModal, action, styleClasses, placeholderText, buttonText }) {
  const [boardColor, setBoardColor] = useState("");
  const [value, setValue] = useState("");
  const [background, setBackground] = useState(null)
  const [isRepeat, setIsRepeat] = useState(false)


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
      <form className="small-modal__form" onSubmit={e => e.preventDefault()}>
        <input
          className="small-modal__input"
          placeholder={placeholderText}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="small-modal__wrapper">
          <button className="small-modal__btn" onClick={addBoardToStore}>{buttonText}</button>
          <ColorBackgroundSetterWrapper
            text="Color"
            setColor={setBoardColor}
            defaultColor={boardColor}
            setBackground={setBackground}
            setIsRepeat={setIsRepeat}
            defaultBackground={background}
            defaultIsRepeat={isRepeat}
          />
        </div>
      </form>
    </div>
  );
}
