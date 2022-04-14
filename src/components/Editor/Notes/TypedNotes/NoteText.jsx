import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "draft-js";
import "../../../../../node_modules/draft-js/dist/Draft.css";

import "../../../../styles/textNote.css";
import { getSelectedNoteId } from "../../../../store/selectors/note/getSelectedNoteId";

export function NoteText(props) {
  const focusNoteId = useSelector(getSelectedNoteId);
  console.log(focusNoteId);
  const { title, content } = props.note;
  //TODO: убрать во всех файлах content

  const s = useSelector((state) => state);
  console.log(s);
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
