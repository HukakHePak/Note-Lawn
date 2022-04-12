import { Action } from "../Action";

export const REMOVE_BOARD = "removeBoard";

export function removeBoard(id) {
  return Action(REMOVE_BOARD, { id });
}
