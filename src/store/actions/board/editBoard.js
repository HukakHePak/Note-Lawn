import { Action } from "../Action";

export const EDIT_BOARD = 'editBoard';

export function editBoard(id, board) {
    return Action(EDIT_BOARD, { id, ...board });
}