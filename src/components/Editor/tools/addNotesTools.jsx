import { ReactComponent as TextSvg } from "../../../img/tools-icon/addTextIcon.svg";
import { ReactComponent as ListSvg } from "../../../img/tools-icon/addListIcon.svg";
import { ReactComponent as ImageSvg } from "../../../img/tools-icon/addImageIcon.svg";
import { ReactComponent as MusicSvg } from "../../../img/tools-icon/addMusicIcon.svg";
import { ReactComponent as VideoSvg } from "../../../img/tools-icon/addVideoIcon.svg";
import { ReactComponent as PaintSvg } from "../../../img/tools-icon/addPaintIcon.svg";

import { createDraggableTool } from "./createTool";
import { createNote } from "../../../store/actions/note/createNote";
import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";

export const addNotesTools = [
  [
    "Добавить текстовую заметку",
    <TextSvg />,
    (event) => createNote(NOTE_TYPES.TEXT, event),
  ],
  [
    "Добавить картинку",
    <ImageSvg />,
    (event) => createNote(NOTE_TYPES.IMAGE, event),
  ],
  ["Добавить видео", <VideoSvg />, (event) => createNote(NOTE_TYPES.VIDEO, event)],
].map(createDraggableTool);
