import { getNote } from "./getNote";
import { getSelectedNoteId } from "./getSelectedNoteId";

export function getSelectedNote(state) {
   return getNote(getSelectedNoteId(state))(state);
}