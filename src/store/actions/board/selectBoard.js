import { Action } from "../Action";


export const SELECT_BOARD = 'selectBoard';

export function selectBoard(id) {
    return Action(SELECT_BOARD, { boardId: id });
}