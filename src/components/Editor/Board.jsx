import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../store/selectors/note/getNotes";
import "../../styles/main.css";
import { NoteWrap } from "./Notes/NoteWrap";
import { selectNote } from "../../store/actions/note/selectNote";
import { CreateNote } from "./Notes/TypedNotes/CreateNote";
import { getSelectedNoteId } from "../../store/selectors/note/getSelectedNoteId";
import { editNote } from "../../store/actions/note/editNote";
import { changeScrollPos } from "../../store/actions/board/changeScrollPos";
import { getCurrentBoardId } from "../../store/selectors/existenceBoards";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";

export function Board() {
  const notes = useSelector(getNotes);
  const board = useSelector(getCurrentBoard);
  const selectedNoteId = useSelector(getSelectedNoteId);
  const dispatch = useDispatch();

  return (
    <div
      className="board"
      onMouseMove={(event) => {
        if (event.buttons === 1) {
          dispatch(
            changeScrollPos(board.id, {
              top: board.position.top - event.movementY,
              left: board.position.left - event.movementX,
            })
          );
        }
      }}
    >
      {notes?.map((note) => {
        const { id, position, size, theme } = note;
        const selected = id === selectedNoteId;

        return (
          <NoteWrap
            key={id}
            position={position}
            selected={selected}
            size={size}
            onChange={(note) => dispatch(editNote(id, note))}
            onSelect={() => dispatch(selectNote(id))}
            theme={theme}
          >
            {CreateNote(note, selected)}
          </NoteWrap>
        );
      })}
    </div>
  );
}
