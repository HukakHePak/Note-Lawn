import addTextIcon from "../../../img/tools-icon/addTextIcon.svg";
import addListIcon from "../../../img/tools-icon/addListIcon.svg";
import addImageIcon from "../../../img/tools-icon/addImageIcon.svg";
import addMusicIcon from "../../../img/tools-icon/addMusicIcon.svg";
import addVideoIcon from "../../../img/tools-icon/addVideoIcon.svg";
import addPaintIcon from "../../../img/tools-icon/addPaintIcon.svg";

import { createTool } from "./createTool";

const text = createTool("Добавить текстовую заметку", addTextIcon);
const list = createTool("Добавить список", addListIcon);
const image = createTool("Добавить картинку", addImageIcon);
const music = createTool("Добавить музыку", addMusicIcon);
const video = createTool("Добавить видео", addVideoIcon);
const paint = createTool("Добавить рисунок", addPaintIcon);

export const addNotesTools = [text, list, image, music, video, paint];
