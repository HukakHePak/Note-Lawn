import { ReactComponent as TextSvg } from "../../../img/tools-icon/addTextIcon.svg";
import { ReactComponent as ImageSvg } from "../../../img/tools-icon/addImageIcon.svg";
import { ReactComponent as VideoSvg } from "../../../img/tools-icon/addVideoIcon.svg";

import { createDraggableTool } from "./createTool";
import { createNote } from "../../../store/actions/note/createNote";
import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";

export const addNotesTools = [
  ["Добавить текстовую заметку", <TextSvg />, createNote(NOTE_TYPES.TEXT)],
  ["Добавить картинку", <ImageSvg />, createNote(NOTE_TYPES.IMAGE)],
  ["Добавить видео", <VideoSvg />, createNote(NOTE_TYPES.VIDEO)],
].map(createDraggableTool);
