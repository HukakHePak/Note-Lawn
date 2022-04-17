import { Action } from "./Action";

export const SELECT_NOTE_EVENT = 'selectNoteEvent';

export function selectEvent(target, type) {
    return Action(SELECT_NOTE_EVENT, {target, type});
}