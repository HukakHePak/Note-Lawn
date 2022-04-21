import fontFamilyIcon from "../../../img/note-icon/text-note-tools/fontFamilyIcon.svg";
import fontSizeIcon from "../../../img/note-icon/text-note-tools/fontSizeIcon.svg";
import fontBoldIcon from "../../../img/note-icon/text-note-tools/fontBoldIcon.svg";
import fontItalicIcon from "../../../img/note-icon/text-note-tools/fontItalicIcon.svg";
import textUnderlineIcon from "../../../img/note-icon/text-note-tools/textUnderlineIcon.svg";
import textColorIcon from "../../../img/note-icon/text-note-tools/textColorIcon.svg";

import { createTool } from "./createTool";

const fontFamily = createTool("Шрифт", fontFamilyIcon);
const fontSize = createTool("Размер шрифта", fontSizeIcon);
const fontBold = createTool("Полужирный", fontBoldIcon);
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
