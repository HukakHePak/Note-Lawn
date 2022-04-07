import addTextIcon from "../img/tools-icon/addTextIcon.svg";
import addListIcon from "../img/tools-icon/addListIcon.svg";
import addImageIcon from "../img/tools-icon/addImageIcon.svg";
import addMusicIcon from "../img/tools-icon/addMusicIcon.svg";
import addVideoIcon from "../img/tools-icon/addVideoIcon.svg";
import addPaintIcon from "../img/tools-icon/addPaintIcon.svg";

import { Tool } from "./Tool";

const text = new Tool("Добавить текстовую заметку", addTextIcon);
const list = new Tool("Добавить список", addListIcon);
const image = new Tool("Добавить картинку", addImageIcon);
const music = new Tool("Добавить музыку", addMusicIcon);
const video = new Tool("Добавить видео", addVideoIcon);
const paint = new Tool("Добавить рисунок", addPaintIcon);

export const createNotesTools = [text, list, image, music, video, paint];
