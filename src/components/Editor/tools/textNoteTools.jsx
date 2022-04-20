import fontFamilyIcon from "../../../img/note-icon/text-note-tools/fontFamilyIcon.svg";
import fontSizeIcon from "../../../img/note-icon/text-note-tools/fontSizeIcon.svg";
import fontBoldIcon from "../../../img/note-icon/text-note-tools/fontBoldIcon.svg";
import fontItalicIcon from "../../../img/note-icon/text-note-tools/fontItalicIcon.svg";
import textUnderlineIcon from "../../../img/note-icon/text-note-tools/textUnderlineIcon.svg";
import textColorIcon from "../../../img/note-icon/text-note-tools/textColorIcon.svg";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RichUtils } from "draft-js";

import { createTool, createOptionTool } from "./createTool";
import { getNotes } from "../../../store/selectors/note/getNotes";
import { getSelectedNote } from "../../../store/selectors/note/getSelectedNote";
import { getSelectedNoteId } from "../../../store/selectors/note/getSelectedNoteId";
import { editNote } from "../../../store/actions/note/editNote";

function L() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => getNotes(state));
  const selectedNoteId = useSelector((state) => getSelectedNoteId(state));
  const [selectedNote] = getSelectedNote(notes, selectedNoteId);

  const [noteEditorState, setNoteEditorState] = useState(
    selectedNote?.noteEditorState
  );

  function onBoldClick(event) {
    event.preventDefault();
    setNoteEditorState(RichUtils.toggleInlineStyle(noteEditorState, "BOLD"));
    dispatch(editNote(selectedNoteId, { noteEditorState: noteEditorState }));
  }

  return <div onMouseDown={(event) => onBoldClick(event)}>B</div>;
}

const fontFamily = createTool("Шрифт", fontFamilyIcon);
const fontSize = createTool("Размер шрифта", fontSizeIcon);
const fontBold = createOptionTool("Полужирный", null, <L />);
// fontBoldIcon
const fontItalic = createTool("Курсив", fontItalicIcon);
const textUnderline = createTool("Подчеркнутый", textUnderlineIcon);
const textColor = createTool("Цвет фона текста", textColorIcon);

export const textNoteTools = [
  fontFamily,
  fontSize,
  fontBold,
  fontItalic,
  textUnderline,
  textColor,
];
