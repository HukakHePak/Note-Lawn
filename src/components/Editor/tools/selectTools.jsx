import { NOTE_TYPES } from "../Notes/TypedNotes/CreateNote";
import { addNotesTools } from "./addNotesTools";
import { textNoteTools } from "./textNoteTools";
import { functionalTools } from "./functionalTools";
import {
  noteFunctionalTools,
  NOTE_FUNCTIONAL_TOOLS,
} from "./noteFunctionalTools";

//const someTools = functionalTools.concat(noteFunctionalTools);

export function selectTools(type) {
  switch (type) {
    case NOTE_TYPES.TEXT:
      //return textNoteTools;

    // case NOTE_FUNCTIONAL_TOOLS:
    //   return someTools;

    case NOTE_TYPES.VIDEO:
    case NOTE_TYPES.IMAGE:
      return [];

    case false:
      return functionalTools;

    case true:
      return noteFunctionalTools;

    default:
      return addNotesTools;
  }
}
