import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Editor } from "draft-js";
import "../../../../../node_modules/draft-js/dist/Draft.css";

import "../../../../styles/textNote.css";

import { editNote } from "../../../../store/actions/note/editNote";
import { getSelectedNoteId } from "../../../../store/selectors/note/getSelectedNoteId";

export function NoteText(props) {
  const dispatch = useDispatch();
  const { id, noteEditorState } = props.note;

  const selectedNoteId = useSelector((state) => getSelectedNoteId(state));
  const isReadOnly = id === selectedNoteId;

  const [editorState, setEditorState] = useState(noteEditorState);

  useEffect(() => {
    setEditorState(noteEditorState);
  }, [noteEditorState]);

  function onChange(editorState) {
    setEditorState(editorState);
    dispatch(editNote(selectedNoteId, { noteEditorState: editorState }));
  }

  return (
    <div className="note__text text">
      <Editor
        editorState={editorState}
        onChange={onChange}
        readOnly={!isReadOnly}
        placeholder="Your text..."
      />
    </div>
  );
}
