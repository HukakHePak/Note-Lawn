import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";
import { addNotesTools } from "./addNotesTools";
import { textNoteTools } from "./textNoteTools";
import { functionalTools } from "./functionalTools";

export function selectTools(type) {
  switch (type) {
    case NOTE_TYPES.TEXT:
      return textNoteTools;
    // return text tools

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
