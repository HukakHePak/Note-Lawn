import { noteAction } from "./noteAction";

export const REPLACE_NOTE = 'replaceNote';

export function replaceNote(id, position) {
    return noteAction(REPLACE_NOTE, id, position);
}