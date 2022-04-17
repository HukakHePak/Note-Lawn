import { SELECT_BOARD } from "../actions/board/selectBoard";
import { CLEAR_NOTE_EVENT } from "../actions/clearEvent";
import { SELECT_NOTE } from "../actions/note/selectNote";
import { SELECT_NOTE_EVENT } from "../actions/selectEvent";

const defaultState = { boardId: null, noteId: null, event: null};

export function selectsReducer(state = defaultState, { type, payload }) {
  //console.log(payload);
  switch (type) {
    case SELECT_BOARD:
    case SELECT_NOTE:
      return { ...state, ...payload };

    case SELECT_NOTE_EVENT:
      return { ...state, event: payload };

    case CLEAR_NOTE_EVENT:
      return { ...state, event: null };

    default:
      break;
  }
  return state;
}
