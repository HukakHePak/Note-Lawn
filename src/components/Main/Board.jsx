import React from "react";
import "../../styles/main.css";

export function Board(props) {
  const { iconSrc, notes, title, onClick } = props;

  return (
    <div
      className="board"
      title={title}
      onClick={onClick}
      style={{ backgroundImage: `url(${iconSrc})` }}
    >
      {notes}
    </div>
  );
}
