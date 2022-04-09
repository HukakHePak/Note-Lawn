import React from "react";
import { NoteMedia } from "../NoteMedia";

export function NoteImage(props) {
  const { src, alt, isSelected } = props.note;

  return (
    <NoteMedia isSelected={isSelected}>
      <div className="note-item note-item--image">
        <img draggable="false" className="note-item__img" src={src} alt={alt} />
      </div>
    </NoteMedia>
  );
}
