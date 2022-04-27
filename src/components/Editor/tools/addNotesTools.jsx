import { ReactComponent as TextSvg } from "../../../img/tools-icon/addTextIcon.svg";
import { ReactComponent as ImageSvg } from "../../../img/tools-icon/addImageIcon.svg";
import { ReactComponent as VideoSvg } from "../../../img/tools-icon/addVideoIcon.svg";

import { createDraggableTool } from "./createTool";
import {createNoteHelper} from '../../../store/actions/note/createNoteHelper'
import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";

export const addNotesTools = [
  ["Добавить текстовую заметку", <TextSvg />, createNoteHelper(NOTE_TYPES.TEXT)],
  ["Добавить картинку", <ImageSvg />, createNoteHelper(NOTE_TYPES.IMAGE)],
  ["Добавить видео", <VideoSvg />, createNoteHelper(NOTE_TYPES.VIDEO)],
].map(createDraggableTool);
