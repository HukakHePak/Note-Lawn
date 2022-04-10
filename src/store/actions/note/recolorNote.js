import { noteAction } from "./noteAction";

export const RECOLOR_NOTE = 'recolorNote';

export function recolorNote(id) {
    return noteAction(RECOLOR_NOTE, id);
}