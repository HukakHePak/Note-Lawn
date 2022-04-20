import addTextIcon from "../../../img/tools-icon/addTextIcon.svg";
import addListIcon from "../../../img/tools-icon/addListIcon.svg";
import addImageIcon from "../../../img/tools-icon/addImageIcon.svg";
import addMusicIcon from "../../../img/tools-icon/addMusicIcon.svg";
import addVideoIcon from "../../../img/tools-icon/addVideoIcon.svg";
import addPaintIcon from "../../../img/tools-icon/addPaintIcon.svg";

import { createDraggableTool } from "./createTool";
import { createNote } from "../../../store/actions/note/createNote";
import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";


const text = createDraggableTool(
  "Добавить текстовую заметку",
  addTextIcon,
  event => createNote(NOTE_TYPES.TEXT, event)
);
const list = createDraggableTool(
  "Добавить список",
  addListIcon,
  event => createNote(NOTE_TYPES.LIST, event)
);
const image = createDraggableTool(
  "Добавить картинку",
  addImageIcon,
  event => createNote(NOTE_TYPES.IMAGE, event)
);
const music = createDraggableTool(
  "Добавить музыку",
  addMusicIcon,
  event => createNote(NOTE_TYPES.MUSIC, event)
);
const video = createDraggableTool(
  "Добавить видео",
  addVideoIcon,
  event => createNote(NOTE_TYPES.VIDEO, event)
);
const paint = createDraggableTool(
  "Добавить рисунок",
  addPaintIcon,
  event => createNote(NOTE_TYPES.PAINT, event)
);

export const addNotesTools = [text, image, video];
