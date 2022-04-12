import { SELECT_BOARD } from "../actions/board/selectBoard";
import { SELECT_NOTE } from "../actions/note/selectNote";

const defaultState = { boardId: null, noteId: null };

export function selectsReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SELECT_BOARD:
    case SELECT_NOTE:
      return { ...state, ...payload };
    default:
      break;
  }
  return state;
}
