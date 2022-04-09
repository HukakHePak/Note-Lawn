import React, { useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import "../../styles/main.css";
import { NOTE_TYPES } from "./Notes/noteTypes";
import { NoteWrap } from "./Notes/NoteWrap";
import { selectNote } from "./Notes/selectNote";

export function Board(props) {
  const { src, title, onClick, size } = props;

  const [notes, setNotes] = useState([
    {
      type: NOTE_TYPES.TEXT,
      id: 1,
      top: 200,
      left: 200,
      title: "nice title",
      content: "nice content",
    },
    {
      type: NOTE_TYPES.IMAGE,
      id: 2,
      top: 200,
      left: 200,
      title: "nice title",
      content: "nice content",
      isSelected: true,
    },
  ]);

  return (
    <div
      className="board"
      title={title}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      {notes.map((note) => (
        <NoteWrap note={note} key={note.id}>
          {selectNote(note)}
        </NoteWrap>
      ))}
    </div>
  );
}
