import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/editor.css";
import { selectTools } from "./tools/selectTools";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";
import { getSelectedNote } from "../../store/selectors/note/getSelectedNote";
import { selectBoard } from "../../store/actions/board/selectBoard";
import { closeModals } from "../../store/actions/closeModals";
import { findNote } from "../../store/actions/note/findNote";
import { removeNote } from "../../store/actions/note/removeNote";

export function Editor() {
  const board = useSelector(getCurrentBoard);
  const note = useSelector(getSelectedNote);
  const dispatch = useDispatch();

  function keyDownHandler(event) {
    console.log(event);

    switch (event.code.toLocaleLowerCase()) {
      case "home":
        dispatch(selectBoard(null));
        break;

      case "escape":
        dispatch(closeModals());
        break;

      case "tab":
        dispatch(findNote(event));
        event.preventDefault();
        break;
      
      case "delete":
        if(event.ctrlKey) dispatch(removeNote(note.id));
        break;

      default:
        break;
    }
  }

  return (
    <div className="editor" onKeyDown={keyDownHandler} tabIndex="0">
      <ToolPanel tools={selectTools(note?.type)} />
      <ToolPanel tools={selectTools(!!note?.id)} right />
      <Board board={board} />
      <BoardName board={board} />
    </div>
  );
}
