import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/editor.css";
import { selectTools } from "./tools/selectTools";
import { useSelector } from "react-redux";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";
import { getSelectedNote } from "../../store/selectors/note/getSelectedNote";

export function Editor() {
  const board = useSelector(getCurrentBoard);
  const note = useSelector(getSelectedNote);

  return (
    <div className="editor">
      <ToolPanel tools={selectTools(note?.type)} />
      <ToolPanel tools={selectTools(!!note?.id)} right />
      <Board />
      <BoardName boardId={board.id}/>
    </div>
  );
}
