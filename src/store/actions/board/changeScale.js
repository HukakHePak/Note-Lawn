import { Action } from "../Action";

export const CHANGE_SCALE = 'changeScale';

export function changeScale(id, scale) {
    return Action(CHANGE_SCALE, { id, scale });
}