import React from "react";
import "../../styles/editor.css";

export function ToolPanel(props) {
  const { tools, right } = props;

  return (
    <div className={"tool-panel " + (right && "tool-panel--right")}>
      {tools}
    </div>
  );
}
