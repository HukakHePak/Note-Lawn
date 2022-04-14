import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/main.css";
import { selectTools } from "./tools/selectTools";

export function Editor(props) {
  const { boardId } = props;

  return (
    <div className="editor">
      <ToolPanel tools={selectTools()} />
      <ToolPanel right tools={selectTools(false)} />
      <Board />
      <BoardName boardId={boardId} />
    </div>
  );
}
