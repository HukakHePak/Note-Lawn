import { SELECT_BOARD } from "../actions/board/selectBoard";
import { CLEAR_NOTE_EVENT } from "../actions/event/clearEvent";
import { SELECT_NOTE_EVENT } from "../actions/event/selectEvent";
import { CLOSE_MODALS } from "../actions/modals/closeModals";
import { OPEN_MODAL } from "../actions/modals/openModal";
import { FIND_NOTE } from "../actions/note/findNote";
import { SELECT_NOTE } from "../actions/note/selectNote";

const defaultState = { boardId: null, noteId: null, event: null, modals: {}, lastNoteIndex: -1 };

export function selectsReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SELECT_BOARD:
    case SELECT_NOTE:
    case FIND_NOTE:
      return { ...state, ...payload };

    case SELECT_NOTE_EVENT:
      return { ...state, event: payload };

    case CLEAR_NOTE_EVENT:
      return { ...state, event: null };

    case OPEN_MODAL:
      return { ...state, modals: { ...state.modals, ...payload } };

    case CLOSE_MODALS:
      return { ...state, modals: {} };

    default:
      break;
  }
  return state;
}
