import { getCreatedDate } from "./../../tools/time.js";
import { removeItem } from "../../tools/immutable/list/removeItem";
import uniqid from "uniqid";
import { changeItem } from "../../tools/immutable/list/changeItem";
import { REMOVE_BOARD } from "../actions/board/removeBoard";
import { ADD_BOARD } from "../actions/board/addBoard.js";
import { CHANGE_BOARD } from "../actions/board/changeBoard.js";
import { CHANGE_SCROLL } from "../actions/board/changeScrollPos.js";
import { CHANGE_SCALE } from "../actions/board/changeScale.js";
import { EDIT_BOARD } from "../actions/board/editBoard.js";
import { storage } from "../storage.js";
import data from "../../data.json";

const boardDefaults = {
  position: { left: 0, top: 0 }, // - window.size oncreate
  scale: 1,
};

export function boardsReducer(
  state = storage.get("boards") || data.boards,
  { type, payload }
) {
  switch (type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          id: uniqid(),
          date: getCreatedDate(),
          ...boardDefaults,
          ...payload,
        },
      ];

    case REMOVE_BOARD:
      return removeItem(state, payload.id);

    case CHANGE_BOARD:
    case CHANGE_SCROLL:
    case EDIT_BOARD:
      return changeItem(state, payload.id, payload);

    case CHANGE_SCALE:
      return changeItem(state, payload.id, payload.scale);

    default:
      break;
  }

  return state;
}

export function boards(state, payload) {
  const _state = boardsReducer(state, payload);
  storage.set("boards", _state);
  return _state;
}
