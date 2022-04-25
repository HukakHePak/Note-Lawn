import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../../../node_modules/draft-js/dist/Draft.css";
import { editNote } from "../../../../store/actions/note/editNote";
import {
  Editor,
  convertToRaw,
  convertFromRaw,
  EditorState,
  RichUtils,
} from "draft-js";
import { getEvent } from "../../../../store/selectors/selects/getEvent";
import { clearEvent } from "../../../../store/actions/event/clearEvent";

export function NoteText(props) {
  const dispatch = useDispatch();
  const { id, rawState } = props.note;
  const textEvent = useSelector(getEvent);

  const [editor, setEditor] = useState(
    EditorState.createWithContent(convertFromRaw(rawState))
  );

  useEffect(() => {
    if (!(textEvent?.type === "styleChange")) return;

    const { style, block } = textEvent;

    if (style) {
      setEditor(RichUtils.toggleInlineStyle(editor, style.toUpperCase()));
    } else {
      setEditor(RichUtils.toggleBlockType(editor, block.toLowerCase()));
    }

    dispatch(clearEvent());
  }, [textEvent, setEditor, editor, dispatch]);

  function onChange(editor) {
    setEditor(editor);

    dispatch(
      editNote(id, { rawState: convertToRaw(editor.getCurrentContent()) })
    );
  }

  return (
    <div className="note__text text">
      <Editor
        editorState={editor}
        onChange={onChange}
        readOnly={!props.editable}
      />
    </div>
  );
}
