import addTextIcon from "../../../img/tools-icon/addTextIcon.svg";
import addListIcon from "../../../img/tools-icon/addListIcon.svg";
import addImageIcon from "../../../img/tools-icon/addImageIcon.svg";
import addMusicIcon from "../../../img/tools-icon/addMusicIcon.svg";
import addVideoIcon from "../../../img/tools-icon/addVideoIcon.svg";
import addPaintIcon from "../../../img/tools-icon/addPaintIcon.svg";

import { createDraggableTool } from "./createTool";

const text = createDraggableTool("Добавить текстовую заметку", addTextIcon);
const list = createDraggableTool("Добавить список", addListIcon);
const image = createDraggableTool("Добавить картинку", addImageIcon);
const music = createDraggableTool("Добавить музыку", addMusicIcon);
const video = createDraggableTool("Добавить видео", addVideoIcon);
const paint = createDraggableTool("Добавить рисунок", addPaintIcon);

export const addNotesTools = [text, list, image, music, video, paint];
