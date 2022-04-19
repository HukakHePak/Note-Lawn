import deleteIcon from "../../../img/note-icon/note-functional-tools/deleteIcon.svg";
import { createTool } from "./createTool";

export const NOTE_FUNCTIONAL_TOOLS = "NOTE_FUNCTIONAL_TOOLS";

const deleteTool = createTool("Удалить заметку", deleteIcon);

export const noteFunctionalTools = [deleteTool];
