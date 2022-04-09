import React, { useState } from "react";
import "../../styles/main.css";

import { NoteImage } from "./Notes/NoteImage";
import { NoteVideo } from "./Notes/NoteVideo";
import { NoteText } from "./Notes/NoteText";
import { NoteWrap } from "./Notes/NoteWrap";

import { useCallback } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";

export function Board(props) {
  const { src, title, onClick } = props;

  const [notes, setNotes] = useState({
    1: { top: 5, left: 80, title: 1 },
    2: { top: 10, left: 100, title: 2 },
    3: { top: 200, left: 150, title: 3 },
  });

  const imageSrc =
    "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f9/Film_2567_03.jpg/274px-Film_2567_03.jpg";
  const link = "https://youtu.be/fdJSYEtADxQ";

  const moveBox = useCallback(
    (id, left, top) => {
      setNotes(
        update(notes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [notes, setNotes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'note',
      drop(item, monitor) {
        const { x, y } = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + x);
        const top = Math.round(item.top + y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div
      ref={drop}
      className="board"
      title={title}
      onClick={onClick}
      style={{ backgroundImage: `url(${src})` }}
    >
      {/* <NoteWrap note={<NoteVideo link={link} />} /> */}

      {Object.keys(notes).map((item, index) => {
        const { left, top, title } = notes[item];
        return (
          <NoteWrap
            key={index}
            note={<NoteText title={title} />}
            left={left}
            top={top}
            id={item}
          />
        );
      })}
    </div>
  );
}
