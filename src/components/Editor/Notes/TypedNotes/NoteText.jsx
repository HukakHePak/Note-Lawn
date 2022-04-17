import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Editor } from "draft-js";

import "../../../../../node_modules/draft-js/dist/Draft.css";
import "../../../../styles/textNote.css";

export function NoteText(props) {
  const { title, noteEditorState } = props.note;
  const [editorState, setEditorState] = useState(noteEditorState);

  function onChange(editorState) {
    setEditorState(editorState);
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
