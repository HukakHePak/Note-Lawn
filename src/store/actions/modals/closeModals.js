import { Action } from "../Action";

export const CLOSE_MODALS = 'closeModals';

export function closeModals() {
    return Action(CLOSE_MODALS);
}