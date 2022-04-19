import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Editor } from "draft-js";

import "../../../../../node_modules/draft-js/dist/Draft.css";
import "../../../../styles/textNote.css";
import { editNote } from "../../../../store/actions/note/editNote";

export function NoteText(props) {
  const dispatch = useDispatch();
  const { id, title, noteEditorState } = props.note;
  const [editorState, setEditorState] = useState(noteEditorState);

  function onChange(editorState) {
    setEditorState(editorState);
    dispatch(editNote(id, { noteEditorState: editorState }));
  }

  return (
    <div className="note__text text">
      <TextNoteTitle title={title} />
      <div className="text__line"></div>
      <Editor
        editorState={editorState}
        onChange={onChange}
        placeholder="Your text..."
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
