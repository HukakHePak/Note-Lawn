import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/editor.css";
import { selectTools } from "./tools/selectTools";
import { useSelector } from "react-redux";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";

import { NOTE_FUNCTIONAL_TOOLS } from "./tools/noteFunctionalTools";
import { NOTE_TYPES } from "./Notes/TypedNotes/CreateNote";

export function Editor() {
  const board = useSelector(getCurrentBoard);

  return (
    <div className="editor">
      <ToolPanel tools={selectTools()} />
      <ToolPanel tools={selectTools(NOTE_TYPES.TEXT)} right />
      <Board />
      <BoardName />
    </div>
  );
}
