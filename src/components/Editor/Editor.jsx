import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import "../../styles/editor.css";
import { selectTools } from "./tools/selectTools";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";
import { getSelectedNote } from "../../store/selectors/note/getSelectedNote";
import { selectBoard, closeModals, selectNote } from "../../store/reducers/selectsReducer";
import { findNoteHelper } from "../../store/actions/note/findNoteHelper";
import { removeNote } from "../../store/reducers/notesReducer";


export function Editor() {
  const board = useSelector(getCurrentBoard);
  const note = useSelector(getSelectedNote);
  const dispatch = useDispatch();

  function keyDownHandler(event) {
    switch (event.code.toLocaleLowerCase()) {
      case "home":
        dispatch(selectBoard(null));
        dispatch(selectNote(null));
        break;

      case "escape":
        dispatch(closeModals());
        dispatch(selectNote(null));
        break;

      case "tab":
        dispatch(findNoteHelper(event.view))
        event.preventDefault();
        break;
      
      case "delete":
        if (note) dispatch(removeNote(note.id));
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
