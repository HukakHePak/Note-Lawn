import { SELECT_BOARD } from "../actions/board/selectBoard";
import { CLEAR_NOTE_EVENT } from "../actions/clearEvent";
import { CLOSE_MODALS } from "../actions/closeModals";
import { SELECT_NOTE } from "../actions/note/selectNote";
import { OPEN_MODAL } from "../actions/openModal";
import { SELECT_NOTE_EVENT } from "../actions/selectEvent";

const defaultState = { boardId: null, noteId: null, event: null, modals: {} };

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

    case OPEN_MODAL:
      return { ...state, modals: { ...state.modals, ...payload}}

    case CLOSE_MODALS:
      return { ...state, modals: {}};

    default:
      break;
  }
  return state;
}
