import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { replaceNote } from "../../store/actions/note/replaceNote";
import { resizeNote } from "../../store/actions/note/resizeNote";
import { getNotes } from "../../store/selectors/note/getNotes";
import "../../styles/main.css";
import { NoteWrap } from "./Notes/NoteWrap";
import { selectNote } from "../../store/actions/note/selectNote";
import { CreateNote } from "./Notes/TypedNotes/CreateNote";
import { getSelectedNoteId } from "../../store/selectors/note/getSelectedNoteId";

export function Board() {
  const notes = useSelector(getNotes);
  const selectedNoteId = useSelector(getSelectedNoteId);
  const dispatch = useDispatch();

  return (
    <div className="board">
      {notes?.map((note) => {
        const { id, position, size, theme } = note;
        const selected = id === selectedNoteId; // TODO: сравнивать с selectedNote из стора

        return (
          <NoteWrap
            key={id}
            position={position}
            selected={selected}
            size={size}
            onResize={(size) => dispatch(resizeNote(id, size))}
            onReplace={(position) => dispatch(replaceNote(id, position))}
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
