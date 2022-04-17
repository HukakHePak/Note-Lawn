import fontFamilyIcon from "../../../img/note-icon/text-note-tools/fontFamilyIcon.svg";
import fontSizeIcon from "../../../img/note-icon/text-note-tools/fontSizeIcon.svg";
import fontBoldIcon from "../../../img/note-icon/text-note-tools/fontBoldIcon.svg";
import fontItalicIcon from "../../../img/note-icon/text-note-tools/fontItalicIcon.svg";
import textUnderlineIcon from "../../../img/note-icon/text-note-tools/textUnderlineIcon.svg";
import textColorIcon from "../../../img/note-icon/text-note-tools/textColorIcon.svg";

import { editNote } from "../../../store/actions/note/editNote";

import { createDraggableTool } from "./createTool";

const fontFamily = createDraggableTool("Шрифт", fontFamilyIcon);
const fontSize = createDraggableTool("Размер шрифта", fontSizeIcon);
const fontBold = createDraggableTool("Полужирный", fontBoldIcon);
const fontItalic = createDraggableTool("Курсив", fontItalicIcon);
const textUnderline = createDraggableTool("Подчеркнутый", textUnderlineIcon);
const textColor = createDraggableTool("Цвет фона текста", textColorIcon);

export const textNoteTools = [
  fontFamily,
  fontSize,
  fontBold,
  fontItalic,
  textUnderline,
  textColor,
];
