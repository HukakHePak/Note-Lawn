import { noteAction } from "./noteAction";

export const RESIZE_NOTE = 'resizeNote';

export function resizeNote(id, size) {
    return noteAction(RESIZE_NOTE, id, size);
}