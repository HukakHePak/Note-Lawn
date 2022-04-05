import React from "react";
import "../../styles/main.css";
import { NoteImage } from "./Notes/NoteImage";
import { NoteVideo } from "./Notes/NoteVideo";

export function Board(props) {
  const { src, notes, title, onClick } = props;
  const imageSrc =
    "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f9/Film_2567_03.jpg/274px-Film_2567_03.jpg";
  const link = "https://youtu.be/fdJSYEtADxQ";

  return (
    <div
      className="board"
      title={title}
      onClick={onClick}
      style={{ backgroundImage: `url(${src})` }}
    >
      {/* {notes} */}


      <NoteImage imageSrc={imageSrc} />
      <NoteVideo link={link} />
    
    </div>
  );
}
