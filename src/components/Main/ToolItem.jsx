import React from "react";
import '../../styles/main.css';

export function ToolItem (props) {
  const { hoverText, icon } = props.tool;

  const style = { backgroundImage: `url(${icon})`};

  return (
    <button
      className="tool-item"
      //hoverText={hoverText}
      // onClick={onClick}
      style={style}
    >
    </button>
  );
}
