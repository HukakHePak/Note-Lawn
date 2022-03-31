import React from "react";
import '../../styles/main.css';

export function ToolItem(props) {
  const { iconSrc, onClick, title } = props.tool;

  const style = { backgroundImage: `url(${iconSrc})`};

  if(!iconSrc) style.visibility = 'hidden';

  return (
    <button
      className="tool-item"
      title={title}
      onClick={onClick}
      style={style}
    ></button>
  );
}
