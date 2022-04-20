import React from "react";
import ColorBackgroundSetter from "./ColorBackgroundSetter";

export function ColorBackgroundSetterWrapper({ text, setColor, defaultColor, setBackground, setIsRepeat, defaultBackground, defaultIsRepeat }) {
  return (
    <div className="small-modal__item">
      <span className="small-modal__text">{text}</span>
      <ColorBackgroundSetter
        setColor={setColor}
        defaultColor={defaultColor}
        setBackground={setBackground}
        setIsRepeat={setIsRepeat}
        defaultBackground={defaultBackground}
        defaultIsRepeat={defaultIsRepeat} />
    </div>
  );
}