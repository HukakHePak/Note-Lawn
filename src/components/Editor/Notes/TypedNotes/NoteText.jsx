import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../../../styles/textNote.css";
import { Editor } from "draft-js";
import "../../../../../node_modules/draft-js/dist/Draft.css";

export function NoteText(props) {
  const { title, content } = props.note;
  //TODO: убрать во всех файлах content

  const notes = useSelector((state) => state.notes);
  let noteEditorState;
  
  notes.forEach((note) => {
    if (note.id === 1) {
      noteEditorState = note.editorState;
    }
  });
  
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
