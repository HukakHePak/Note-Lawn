import { Action } from "../Action";

export const CHANGE_SCROLL = 'changeScrollPos';

export function changeScrollPos(id, position) {
    return Action(CHANGE_SCROLL, { id, position });
}