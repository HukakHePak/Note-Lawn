import saveIcon from "../../../img/note-icon/note-functional-tools/saveIcon.svg";
import deleteIcon from "../../../img/note-icon/note-functional-tools/deleteIcon.svg";
import favoriteIcon from "../../../img/note-icon/note-functional-tools/favoriteIcon.svg";

import { createDraggableTool } from "./createTool";
import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";

const saveTool = createDraggableTool("Добавить текстовую заметку", saveIcon);
const deleteTool = createDraggableTool("Добавить список", deleteIcon);
const favoriteTool = createDraggableTool("Добавить картинку", favoriteIcon);

export const noteFunctionalTools = [saveTool, deleteTool, favoriteTool];
