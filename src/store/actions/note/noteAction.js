import { Action } from "../template";

export function noteAction(type, id, ...options) {
    return Action(type, { id, ...options });
}