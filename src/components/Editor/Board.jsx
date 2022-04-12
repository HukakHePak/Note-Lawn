import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../store/selectors/note/getNotes";
import "../../styles/main.css";
import { NoteWrap } from "./Notes/NoteWrap";
import { selectNote } from "../../store/actions/note/selectNote";
import { CreateNote } from "./Notes/TypedNotes/CreateNote";
import { getSelectedNoteId } from "../../store/selectors/note/getSelectedNoteId";
import { editNote } from "../../store/actions/note/editNote";

export function Board() {
  const notes = useSelector(getNotes);
  const selectedNoteId = useSelector(getSelectedNoteId);
  const dispatch = useDispatch();

  return (
    <div className="board">
      {notes?.map((note) => {
        const { id, position, size, theme } = note;
        const selected = id === selectedNoteId;

        return (
          <NoteWrap
            key={id}
            position={position}
            selected={selected}
            size={size}
            onChange={note => dispatch(editNote(id, note))}
            onSelect={()=> dispatch(selectNote(id))}
            theme={theme}
          >
            {CreateNote(note, selected)}
          </NoteWrap>
        );
      })}
    </div>
  );
}
