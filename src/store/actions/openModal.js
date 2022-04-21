import { Action } from "./Action";

export const OPEN_MODAL = 'openModal';

export function openModal(modal) {
    return Action(OPEN_MODAL, modal);
}