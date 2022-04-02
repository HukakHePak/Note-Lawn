import React from "react";
import "../../styles/main.css";

export function ToolItem(props) {
  const { type, hoverText, icon } = props.tool;

  const style = { backgroundImage: `url(${icon})` };

  return (
    <button
      // onClick={onToolClick}
      type={type}
      className="tool-item"
      //hoverText={hoverText}
      style={style}
    ></button>
  );
}
