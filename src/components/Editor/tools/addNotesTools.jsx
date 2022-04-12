import addTextIcon from "../../../img/tools-icon/addTextIcon.svg";
import addListIcon from "../../../img/tools-icon/addListIcon.svg";
import addImageIcon from "../../../img/tools-icon/addImageIcon.svg";
import addMusicIcon from "../../../img/tools-icon/addMusicIcon.svg";
import addVideoIcon from "../../../img/tools-icon/addVideoIcon.svg";
import addPaintIcon from "../../../img/tools-icon/addPaintIcon.svg";

import { createDraggableTool } from "./createTool";
import { createNote } from "../../../store/actions/note/createNote";
import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";

function Positor(action) {
  return (event) => {
    if(event.type === "click") return action;

    return {
      ...action,
      payload: {
        ...action.payload,
        position: { left: event.clientX, top: event.clientY },
      },
    };
  };
}

const text = createDraggableTool(
  "Добавить текстовую заметку",
  addTextIcon,
  Positor(createNote(NOTE_TYPES.TEXT))
);
const list = createDraggableTool(
  "Добавить список",
  addListIcon,
  Positor(createNote(NOTE_TYPES.LIST))
);
const image = createDraggableTool(
  "Добавить картинку",
  addImageIcon,
  Positor(createNote(NOTE_TYPES.IMAGE))
);
const music = createDraggableTool(
  "Добавить музыку",
  addMusicIcon,
  Positor(createNote(NOTE_TYPES.MUSIC))
);
const video = createDraggableTool(
  "Добавить видео",
  addVideoIcon,
  Positor(createNote(NOTE_TYPES.VIDEO))
);
const paint = createDraggableTool(
  "Добавить рисунок",
  addPaintIcon,
  Positor(createNote(NOTE_TYPES.PAINT))
);

export const addNotesTools = [text, list, image, music, video, paint];
