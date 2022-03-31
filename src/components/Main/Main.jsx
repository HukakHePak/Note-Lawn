import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import '../../styles/main.css';

export function Main(props) {
  const { tools, notes} = {
    tools: [
      {
        iconSrc: "f",
        title: "create note",
        onClick: console.log,
      },
      {
        iconSrc: "f",
        title: "create note",
        onClick: console.log,
      },
      {
        iconSrc: "f",
        title: "create note",
        onClick: console.log,
      },
    ],
  };

  return (
    <div className="main-board">
      <ToolPanel tools={tools} />
      <ToolPanel tools={[...tools.slice(2),{}, ...tools]} />
      <Board notes={notes}/>
    </div>
  );
}
