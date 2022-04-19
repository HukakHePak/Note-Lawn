import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/editor.css";
import { selectTools } from "./tools/selectTools";
import { NOTE_FUNCTIONAL_TOOLS } from "./tools/noteFunctionalTools";
import { NOTE_TYPES } from "./Notes/TypedNotes/CreateNote";
import { useSelector } from "react-redux";

export function Editor() {
  return (
    <div className="editor">
      <ToolPanel tools={selectTools()} />
      <ToolPanel tools={selectTools(NOTE_TYPES.TEXT)} right /> //NOTE_FUNCTIONAL_TOOLS
      <Board />
      <BoardName />
    </div>
  );
}
