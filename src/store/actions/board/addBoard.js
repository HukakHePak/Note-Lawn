import { Action } from "../Action";

export const ADD_BOARD = "addBoard";

export function addBoard(name, color, link, isRepeat) {
  return Action(ADD_BOARD, {
    name,
    theme: { color, link, isRepeat },
  });
}
