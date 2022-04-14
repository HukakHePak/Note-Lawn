import { Action } from "../Action";

export function noteAction(type, id, note) {
    return Action(type, { id, ...note });
}