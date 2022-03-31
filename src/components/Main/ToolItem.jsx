import React from "react";
import '../../styles/main.css';

export function ToolItem (props) {
  const { hoverText, icon } = props.tool;

  return (
    <button
      className="tool-item"
      hoverText={hoverText}
      // onClick={onClick}
      // action
    >
      <img src={icon} alt="-" />
    </button>
  );
}
