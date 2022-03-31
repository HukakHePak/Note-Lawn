import React from "react";
import "../../styles/main.css";

export function Board(props) {
  const { src, notes, title, onClick } = props;

  return (
    <div
      className="board"
      title={title}
      onClick={onClick}
      style={{ backgroundImage: `url(${src})` }}
    >
      {notes}
    </div>
  );
}
