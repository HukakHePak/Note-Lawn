import React from "react";
import { useDispatch } from "react-redux";
import "../../styles/main.css";

export function ToolItem(props) {
  const { title, icon, action, children, draggable } = props;

  const dispatch = useDispatch();

  return (
    <button
      className="tool-item"
      title={title}
      onClick={(event) => action && dispatch(action(event))}
      style={{ backgroundImage: `url(${icon})` }}
      draggable={draggable}
      onDragEnd={(event) => action && dispatch(action(event))}
    >
      {children}
    </button>
  );
}
