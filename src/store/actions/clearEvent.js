import { Action } from "./Action";

export const CLEAR_NOTE_EVENT = 'clearNoteEvent';

export function clearEvent() {
    return Action(CLEAR_NOTE_EVENT);
}