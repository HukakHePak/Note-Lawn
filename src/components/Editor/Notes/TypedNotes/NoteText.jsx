import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Editor, EditorState } from "draft-js";

import "../../../../../node_modules/draft-js/dist/Draft.css";
import "../../../../styles/textNote.css";
import { editNote } from "../../../../store/actions/note/editNote";
import { getNotes } from "../../../../store/selectors/note/getNotes";
import { getSelectedNote } from "../../../../store/selectors/note/getSelectedNote";
import { getSelectedNoteId } from "../../../../store/selectors/note/getSelectedNoteId";

export function NoteText(props) {
  const dispatch = useDispatch();
  const { id, title } = props.note;

  const notes = useSelector((state) => getNotes(state));
  const [textNote] = getSelectedNote(notes, id);

  const [noteEditorState, setNoteEditorState] = useState(
    textNote?.noteEditorState
  );

  function onChange(editorState) {
    setNoteEditorState(editorState);
    dispatch(editNote(id, { noteEditorState: noteEditorState }));
  }

  return (
    <div className="note__text text">
      <TextNoteTitle title={title} />
      <div className="text__line"></div>
      <Editor
        editorState={noteEditorState}
        onChange={onChange}
        placeholder="Your text..."
        className="DraftEditor-root"
      />
    </div>
  );
}

function TextNoteTitle(props) {
  const { title } = props;

  return (
    <div className="text__title">
      {/* <div className="text__title" contentEditable="true"></div> */}
      {title}
    </div>
  );
}
