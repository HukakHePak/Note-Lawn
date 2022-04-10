import { noteAction } from "./noteAction";

const RELINK_NOTE = "relinkNote";

export function relinkNote(id, content) {
    return noteAction(RELINK_NOTE, id, content);
}