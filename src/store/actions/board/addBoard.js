import { Action } from "../Action";

export const ADD_BOARD = "addBoard";

export function addBoard(name, color, img, isRepeat) {
  return Action(ADD_BOARD, {
    name,
    theme: { color, bg: { img, isRepeat } },
  });
}
