import fontNameBtn from "../../img/text-note-icon/fontNameBtn.png";
import fontSizeBtn from "../../img/text-note-icon/fontSizeBtn.png";
import boldFontBtn from "../../img/text-note-icon/boldFontBtn.png";
import italicFontBtn from "../../img/text-note-icon/italicFontBtn.png";
import underlinedFontBtn from "../../img/text-note-icon/underlinedFontBtn.png";
import textBackgroundColorBtn from "../../img/text-note-icon/textBackgroundColorBtn.png";

import { Tool } from "../../tools/Tool";

const fontName = new Tool("Добавить текстовую заметку", fontNameBtn);
const fontSize = new Tool("Добавить список", fontSizeBtn);
const boldFont = new Tool("Добавить картинку", boldFontBtn);
const italicFont = new Tool("Добавить музыку", italicFontBtn);
const underlinedFont = new Tool("Добавить видео", underlinedFontBtn);
const textBackgroundColor = new Tool(
  "Добавить рисунок",
  textBackgroundColorBtn
);

export const toolsForTextNote = [
  fontName,
  fontSize,
  boldFont,
  italicFont,
  underlinedFont,
  textBackgroundColor,
];
