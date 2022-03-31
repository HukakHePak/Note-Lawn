import React from "react";
import { ToolItem } from "./ToolItem";
import "../../styles/main.css";

export function ToolPanel (props) {
  const { tools } = props;

  return (
    <div className="tool-panel">
      { tools.map ( (tool, index) => (
        <ToolItem key={index} tool={tool} />
      )) }
    </div>
  );
}
