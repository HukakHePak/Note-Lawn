import { noteAction } from "./noteAction";

export const SELECT_NOTE = 'selectNote';

export function selectNote(id) {
    return noteAction(SELECT_NOTE, id);
}