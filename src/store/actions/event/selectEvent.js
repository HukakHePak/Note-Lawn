import { Action } from "../Action";

export const SELECT_NOTE_EVENT = 'selectNoteEvent';

export function selectEvent(event) {
    return Action(SELECT_NOTE_EVENT, {...event});
}