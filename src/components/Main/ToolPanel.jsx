import React from "react";
import { ToolItem } from "./ToolItem";
import "../../styles/main.css";

export function ToolPanel (props) {
  const { tools, right } = props;

  return (
    <div className={"tool-panel " + (right && "tool-panel--right")}>
      { tools.map ( (tool, index) => (
        <ToolItem key={index} tool={tool} />
      )) }
    </div>
  );
}
