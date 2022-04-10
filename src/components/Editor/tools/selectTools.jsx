import { NOTE_TYPES } from "../Notes/noteTypes";
import { addNotesTools } from "./addNotesTools";
import { functionalTools } from "./functionalTools";

export function selectTools(type) {
  switch (type) {
    case NOTE_TYPES.TEXT:
      break; // return text tools

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
