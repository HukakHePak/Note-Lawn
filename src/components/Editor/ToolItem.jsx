import React from "react";
import { useDispatch } from "react-redux";
import "../../styles/main.css";

export function ToolItem (props) {
  const { hoverText, icon, action } = props.tool;

  const dispatch = useDispatch();

  const style = { backgroundImage: `url(${icon})`};

  return (
    <button
      // onClick={onToolClick}
      //type={type}
      className="tool-item"
      //hoverText={hoverText}
      onClick={() => dispatch(action)}
      style={style}
    >
    </button>
  );
}
