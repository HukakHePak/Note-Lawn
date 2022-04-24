import { Action } from "../Action";

export const CHANGE_BOARD = "changeBoard";

export function changeBoard(id, name, color, link, isRepeat) {
  return Action(CHANGE_BOARD, {
    id,
    name,
    theme: { color, link, isRepeat },
  });
}