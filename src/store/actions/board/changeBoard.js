import { Action } from "../Action";

export const CHANGE_BOARD = "changeBoard";

export function changeBoard(id, name, color, img, isRepeat) {
  return Action(CHANGE_BOARD, {
    id,
    name,
    theme: { color, bg: { img, isRepeat } },
  });
}