import { noteAction } from "./noteAction";

export const EDIT_NOTE = "changeNoteContent";

export function editNote(id, note) {
    return noteAction(EDIT_NOTE, id, note);
}
