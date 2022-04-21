import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/editor.css";

export function ToolItem(props) {
  const { title, icon, action, option, draggable } = props;

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <div
      className="tool-item"
      title={title}
      onClick={(event) => action && dispatch(action(event))}
      style={{ backgroundImage: `url(${icon})` }}
      draggable={draggable}
      onDragEnd={(event) => action && dispatch(action(event))}
    >
      {option && option(dispatch, state)}
    </div>
  );
}
