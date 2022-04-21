import { RichUtils } from "draft-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../../store/actions/note/editNote";
import { getNote } from "../../store/selectors/note/getNote";
import { getSelectedNoteId } from "../../store/selectors/note/getSelectedNoteId";

export function TextNoteTool(props) {
  const { title, icon, inlineStyle, option } = props;

  const dispatch = useDispatch();
  const selectedNoteId = useSelector((state) => getSelectedNoteId(state));
  const selectedNote = useSelector(getNote(selectedNoteId));

  const [editorState, setEditorState] = useState(selectedNote?.noteEditorState);

  useEffect(() => {
    setEditorState(selectedNote?.noteEditorState);
  }, [selectedNote?.noteEditorState]);

  function onStyleClick(event) {
    event.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));

    console.log(inlineStyle);

    dispatch(editNote(selectedNoteId, { noteEditorState: editorState }));
  }

  return (
    <div
      className="tool-item"
      title={title}
      style={{ backgroundImage: `url(${icon})` }}
      onMouseDown={onStyleClick}
    >
      {option}
    </div>
  );
}
