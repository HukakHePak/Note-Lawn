import React from "react";
import { useDispatch } from "react-redux";
import "../../styles/main.css";

export function ToolItem(props) {
  const { title, icon, action, value } = props;

  const dispatch = useDispatch();

  return (
    <button
      className="tool-item"
      title={title}
      onClick={(event) => dispatch(action(event))}
      style={{ backgroundImage: `url(${icon})` }}
    >
      {value}
    </button>
  );
}
