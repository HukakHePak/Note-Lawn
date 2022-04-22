import React from "react";
import { NoteMedia } from "../NoteMedia";

export function NoteImage(props) {
  const { link, alt } = props.note;

  return (
    <NoteMedia isSelected={props.editable} note={props.note}>
      <div className="note-item note-item--image">
        <img draggable="false" className="note-item__img" src={link} alt={alt} />
      </div>
    </NoteMedia>
  );
}
