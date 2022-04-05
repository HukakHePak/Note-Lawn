import React from "react";

export function NoteImage({ imageSrc }) {
  return (
    <div className="note-item note-item--image">
      <img className="note-item__img" src={imageSrc} alt="" />
    </div>
  );
}
