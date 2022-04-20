import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/editor.css";
import { selectTools } from "./tools/selectTools";
import { useSelector } from "react-redux";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";

export function Editor() {
  const board = useSelector(getCurrentBoard);

  return (
    <div className="editor">
      <ToolPanel tools={selectTools()} />
      <ToolPanel right tools={selectTools(false)} />
      <Board boardId={board.id} />
      <BoardName />
    </div>
  );
}
