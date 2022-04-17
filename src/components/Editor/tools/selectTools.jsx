import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";
import { addNotesTools } from "./addNotesTools";
import { textNoteTools } from "./textNoteTools";
import { functionalTools } from "./functionalTools";
import { noteFunctionalTools } from "./noteFunctionalTools";

const someTools = functionalTools.concat(noteFunctionalTools);

export function selectTools(type) {
  switch (type) {
    case NOTE_TYPES.TEXT:
      return textNoteTools;

    case "NOTE_FUNCTIONAL_TOOLS": //TODO: спросить у Влада, куда положить 'NOTE_FUNCTIONAL_TOOLS' как const 
      return someTools;

    case NOTE_TYPES.VIDEO:
    case NOTE_TYPES.IMAGE:
      break;

    case false:
      return functionalTools;
    case true:
      break; // return note func tools

    default:
      return addNotesTools;
  }
}
