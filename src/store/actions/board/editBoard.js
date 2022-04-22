import { Action } from "../Action";

export const EDIT_BOARD = 'editBoard';

export function editBoard(id, ...board) {
    return Action(EDIT_BOARD, { id, name: board[0], theme: { color: board[1], link: board[2], isRepeat: board[3] } });
}