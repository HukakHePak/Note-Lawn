import { getSelectedNoteId } from "./getSelectedNoteId";

export function isNoteSelected(state, note) {
    return note.id = getSelectedNoteId(state);
}