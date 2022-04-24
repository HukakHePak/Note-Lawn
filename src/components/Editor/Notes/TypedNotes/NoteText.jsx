import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Editor } from "draft-js";
import "../../../../../node_modules/draft-js/dist/Draft.css";

import "../../../../styles/textNote.css";

import { editNote } from "../../../../store/actions/note/editNote";
import EditorState from "draft-js/lib/EditorState";
import { convertToRaw } from "draft-js";
import { convertFromRaw } from "draft-js";

export function NoteText(props) {
  const dispatch = useDispatch();
  const { id, rawState } = props.note;

  
  const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(rawState)));

  function onChange(editorState) {
    setEditorState(editorState);

    dispatch(editNote(id, { rawState: convertToRaw(editorState.getCurrentContent()) }));
  }

  return (
    <div className="note__text text">
      <Editor
        editorState={editorState}
        onChange={onChange}
        readOnly={!props.editable}
      />
    </div>
  );
}
