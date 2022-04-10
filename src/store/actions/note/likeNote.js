import { noteAction } from "./noteAction";

export const LIKE_NOTE = 'likeNote';

export function likeNote(id) {
    return noteAction(LIKE_NOTE, id);
}