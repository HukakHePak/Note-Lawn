import { ReactComponent as BoldIcon } from "../../../img/note-icon/text-note-tools/fontBoldIcon.svg";
import { ReactComponent as ItalicIcon } from "../../../img/note-icon/text-note-tools/fontItalicIcon.svg";
import { ReactComponent as UnderlineIcon } from "../../../img/note-icon/text-note-tools/textUnderlineIcon.svg";
import { blockEvent, styleEvent } from "../../../store/actions/event/textEvent";

import { createTool } from "./createTool";

export const textNoteTools = [
  ["Bold", <BoldIcon />,  styleEvent("bold")],
  ["Italic", <ItalicIcon />, styleEvent("ITALIC")],
  ["Underline", <UnderlineIcon />, styleEvent("UNDERLINE")],
  ["Header One", <div> H1 </div>, blockEvent("header-one")],
  ["Header Three", <div> H3 </div>, blockEvent("header-three")],
  ["Header Five", <div> H5 </div>, blockEvent("header-five")],
  ["Point list", <div> UL </div>, blockEvent("unordered-list-item")],
  ["Number list", <div> OL </div>, blockEvent("ordered-list-item")],
].map(createTool);
