import fontSizeIcon from "../../../img/note-icon/text-note-tools/fontSizeIcon.svg";
import fontBoldIcon from "../../../img/note-icon/text-note-tools/fontBoldIcon.svg";
import fontItalicIcon from "../../../img/note-icon/text-note-tools/fontItalicIcon.svg";
import textUnderlineIcon from "../../../img/note-icon/text-note-tools/textUnderlineIcon.svg";
import textColorIcon from "../../../img/note-icon/text-note-tools/textColorIcon.svg";

import { createTool, createNoteTextTool } from "./createTool";
import { FontSizeModal } from "../FontSizeModal";

const fontSize = createNoteTextTool(
  "Размер шрифта",
  fontSizeIcon,
  null,
  <FontSizeModal />
);
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
