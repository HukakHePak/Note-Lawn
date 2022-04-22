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

const boardDefaults = {
  position: { left: 0, top: 0 }, // - window.size oncreate
  scale: 1,
};

const defaultBoards = [
  {
    id: 1,
    name: "Thanks to the team",
    date: "08/03/2022 09:55",
    theme: { color: "#FCF5F0", link: "https://i.pinimg.com/originals/03/42/44/034244f741ad75bd774965c7f9772879.png", isRepeat: true },
    ...boardDefaults
  },
];

export function boardsReducer(state = defaultBoards, { type, payload }) {
  // console.log(state);

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
