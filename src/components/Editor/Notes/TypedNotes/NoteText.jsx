import { Editor } from "draft-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../../../../node_modules/draft-js/dist/Draft.css";
import { editNote } from "../../../../store/actions/note/editNote";
import { getNotes } from "../../../../store/selectors/note/getNotes";
import { getNote } from "../../../../store/selectors/note/getNote";
import { getSelectedNoteId } from "../../../../store/selectors/note/getSelectedNoteId";
import "../../../../styles/textNote.css";

export function NoteText(props) {
  const dispatch = useDispatch();
  const { id, title } = props.note;

  const selectedNoteId = useSelector((state) => getSelectedNoteId(state));
  const selectedNote = useSelector(getNote(id));

  const [editorState, setEditorState] = useState(selectedNote?.noteEditorState);

  function bold() {
    dispatch(editNote(id, { noteEditorState: 123 }));
  }

  return (
    <>
      <div className="note__text text">
        <TextNoteTitle title={title} />
        <div className="text__line"></div>
        {/* <Editor
          editorState={editorState}
          onChange={onChange}
          placeholder="Your text..."
        /> */}
      </div>
      <button onClick={bold}>B</button>
    </>
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
