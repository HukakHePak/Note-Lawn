import { noteAction } from "./noteAction";

const CHANGE_NOTE_CONTENT = "changeNoteContent";

export function changeNoteContent(id, content) {
    return noteAction(CHANGE_NOTE_CONTENT, id, content);
}