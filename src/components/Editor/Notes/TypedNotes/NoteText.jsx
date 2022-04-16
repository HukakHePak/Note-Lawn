import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Editor, EditorState } from "draft-js";

import "../../../../../node_modules/draft-js/dist/Draft.css";
import "../../../../styles/textNote.css";
import { getSelectedNoteId } from "../../../../store/selectors/note/getSelectedNoteId";
import { selectNote } from "../../../../store/actions/note/selectNote";

export function NoteText(props) {
  const { note } = props;
  console.log(note);
  const [editorState, setEditorState] = useState(() => note.editorState || EditorState.createEmpty());
  const { title, content } = props.note;
  //TODO: убрать во всех файлах content т.к он уже не используется

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
