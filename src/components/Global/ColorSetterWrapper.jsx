import React from "react";
import ColorSetter from "./ColorSetter";

export function ColorSetterWrapper({ text, setColor, defaultColor }) {
  return (
    <div className="small-modal__item">
      <span className="small-modal__text">{text}</span>
      <ColorSetter setColor={setColor} defaultColor={defaultColor} />
    </div>
  );
}
