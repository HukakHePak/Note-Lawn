import fontSizeIcon from "../../../img/note-icon/text-note-tools/fontSizeIcon.svg";
import fontBoldIcon from "../../../img/note-icon/text-note-tools/fontBoldIcon.svg";
import fontItalicIcon from "../../../img/note-icon/text-note-tools/fontItalicIcon.svg";
import textUnderlineIcon from "../../../img/note-icon/text-note-tools/textUnderlineIcon.svg";
import textColorIcon from "../../../img/note-icon/text-note-tools/textColorIcon.svg";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RichUtils } from "draft-js";

import { getNote } from "../../../store/selectors/note/getNote";
import { editNote } from "../../../store/actions/note/editNote";
import { createTool, createNoteTextTool } from "./createTool";
import { getSelectedNoteId } from "../../../store/selectors/note/getSelectedNoteId";

export function TextNoteTool() {
  const dispatch = useDispatch();
  const selectedNoteId = useSelector((state) => getSelectedNoteId(state));
  const selectedNote = useSelector(getNote(selectedNoteId));

  const [editorState, setEditorState] = useState(selectedNote?.noteEditorState);

  useEffect(() => {
    setEditorState(selectedNote?.noteEditorState);
  }, [selectedNote?.noteEditorState]);

  function onBoldClick(event) {
    event.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    dispatch(editNote(selectedNoteId, { noteEditorState: editorState }));
  }

  return <div onMouseDown={onBoldClick}>B</div>;
}

const fontSize = createTool("Размер шрифта", fontSizeIcon);
const fontBold = createNoteTextTool("Полужирный", fontBoldIcon, "BOLD");
const fontItalic = createNoteTextTool("Курсив", fontItalicIcon, "ITALIC");
const textUnderline = createNoteTextTool(
  "Подчеркнутый",
  textUnderlineIcon,
  "UNDERLINE"
);
const textColor = createTool("Цвет фона текста", textColorIcon);

export const textNoteTools = [
  fontSize,
  fontBold,
  fontItalic,
  textUnderline,
  textColor,
];
