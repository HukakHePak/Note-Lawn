import { getCreatedDate } from "./../../tools/time.js";
import { removeItem } from "../../tools/immutable/list/removeItem";
import uniqid from "uniqid";
import { changeItem } from "../../tools/immutable/list/changeItem";
import { REMOVE_BOARD } from "../actions/board/removeBoard";
import { ADD_BOARD } from "../actions/board/addBoard.js";
import { CHANGE_BOARD } from "../actions/board/changeBoard.js";
import { CHANGE_SCROLL } from "../actions/board/changeScrollPos.js";
import { CHANGE_SCALE } from "../actions/board/changeScale.js";

const boardDefaults = {
  size: { left: 10000, top: 10000 },
  position: { left: 5000, top: 5000 }, // - window.size oncreate
  scale: 1
};

const defaultBoards = [
  {
    id: 1,
    name: "Board 1",
    date: "08/03/2022 09:55",
    theme: { color: "#FCF5F0", bg: { img: "", isRepeat: false } },
    ...boardDefaults
  },
  {
    id: 2,
    name: "Board 2",
    date: "08/03/2022 09:55",
    theme: { color: "#FCF5F0", bg: { img: "", isRepeat: false } },
    ...boardDefaults
  },
  {
    id: 3,
    name: "Board 3",
    date: "08/03/2022 09:55",
    theme: { color: "#7FFFD4", bg: { img: "", isRepeat: false } },
    ...boardDefaults
  },
];

export function boardsReducer(state = defaultBoards, { type, payload }) {
  

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
      return changeItem(state, payload.id, payload);

    case CHANGE_SCALE:
      return changeItem(state, payload.id, payload.scale);  

    default:
      break;
  }

  return state;
}
