import fontFamilyIcon from "../../../img/note-icon/text-note-tools/fontFamilyIcon.svg";
import fontSizeIcon from "../../../img/note-icon/text-note-tools/fontSizeIcon.svg";
import fontBoldIcon from "../../../img/note-icon/text-note-tools/fontBoldIcon.svg";
import fontItalicIcon from "../../../img/note-icon/text-note-tools/fontItalicIcon.svg";
import textUnderlineIcon from "../../../img/note-icon/text-note-tools/textUnderlineIcon.svg";
import textColorIcon from "../../../img/note-icon/text-note-tools/textColorIcon.svg";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RichUtils } from "draft-js";

import { createTool, createOptionTool } from "./createTool";
import { getNotes } from "../../../store/selectors/note/getNotes";
import { getSelectedNote } from "../../../store/selectors/note/getSelectedNote";
import { getSelectedNoteId } from "../../../store/selectors/note/getSelectedNoteId";
import { Action } from "../../../store/actions/Action";
import { editNote } from "../../../store/actions/note/editNote";

let selectedNoteId;


function L() {
  const notes = useSelector((state) => getNotes(state));
  let selectedNoteId = useSelector((state) => getSelectedNoteId(state));
  const selectedNote = getSelectedNote(notes, selectedNoteId);

  const [noteEditorState, setNoteEditorState] = useState(
    selectedNote?.noteEditorState
  );

  function onBoldClick() {
    setNoteEditorState(RichUtils.toggleInlineStyle(noteEditorState, "BOLD"));
  }

  return <span onMouseDown={onBoldClick}>12</span>;
}

const fontFamily = createTool("Шрифт", fontFamilyIcon);
const fontSize = createTool("Размер шрифта", fontSizeIcon);
const fontBold = createOptionTool(
  "Полужирный",
  editNote(selectedNoteId),
  <L />
); //fontBoldIcon
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
