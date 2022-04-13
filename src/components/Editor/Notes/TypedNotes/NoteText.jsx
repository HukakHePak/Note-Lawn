import React, { useState } from "react";
import "../../../../styles/textNote.css";
import { Editor, EditorState } from "draft-js";
import "../../../../../node_modules/draft-js/dist/Draft.css";

export function NoteText(props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const { title, content } = props.note;

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
      {/* <div
        className="text__subtitle"
        //contentEditable="true" // для редактирования текста в диве
      > */}
      {/* {content} */}
      {/* </div> */}
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
