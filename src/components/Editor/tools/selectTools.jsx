import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";
import { addNotesTools } from "./addNotesTools";
import { textNoteTools } from "./textNoteTools";
import { functionalTools } from "./functionalTools";
import { noteFunctionalTools } from "./noteFunctionalTools";

export function selectTools(type) {
  switch (type) {
    case NOTE_TYPES.TEXT:
      return textNoteTools;

    case false:
      return functionalTools;

    case true:
      return noteFunctionalTools;

    default:
      return addNotesTools;
  }
}
