import { SET_BOARD } from "../actions/existenceBoards";
import { SELECT_NOTE } from "../actions/note/selectNote";

const defaultState = { boardId: null, noteId: null };

export function selectsReducer(state = defaultState, { type, payload }) {
  const selects = { ...state };

  switch (type) {
    case SET_BOARD:
      selects.boardId = payload.boardId;
      break;

    case SELECT_NOTE:
      selects.noteId = payload.noteId;
      break;

    default:
      break;
  }
  return state;
}
