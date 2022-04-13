import fontFamilyIcon from "../../../img/note-icon/text-note-tools/font-family-btn.svg";
import fontSizeIcon from "../../../img/note-icon/text-note-tools/font-size-btn.svg";
import fontBoldIcon from "../../../img/note-icon/text-note-tools/font-bold-btn.svg";
import fontItalicIcon from "../../../img/note-icon/text-note-tools/font-italic-btn.svg";
import textUnderlineIcon from "../../../img/note-icon/text-note-tools/text-underline-btn.svg";
import textColorIcon from "../../../img/note-icon/text-note-tools/text-color-btn.svg";

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
