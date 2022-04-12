import { getCreatedDate } from "./../../tools/time.js";
import { removeItem } from "../../tools/immutable/list/removeItem";
import uniqid from "uniqid";
import { changeItem } from "../../tools/immutable/list/changeItem";
import { REMOVE_BOARD } from "../actions/board/removeBoard";
import { ADD_BOARD } from "../actions/board/addBoard.js";
import { CHANGE_BOARD } from "../actions/board/changeBoard.js";

const defaultBoards = [
  {
    id: 1,
    name: "Board 1",
    date: "08/03/2022 09:55",
    theme: { color: "#98FB98", bg: { img: "", isRepeat: false } },
  },
  {
    id: 2,
    name: "Board 2",
    date: "08/03/2022 09:55",
    theme: { color: "#F08080", bg: { img: "", isRepeat: false } },
  },
  {
    id: 3,
    name: "Board 3",
    date: "08/03/2022 09:55",
    theme: { color: "#7FFFD4", bg: { img: "", isRepeat: false } },
  },
];

export function boardsReducer(state = defaultBoards, { type, payload }) {
  console.log(payload)
  console.log([
    ...state,
    {
      id: uniqid(),
      date: getCreatedDate(),
      ...payload,
    },
  ])
  switch (type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          id: uniqid(),
          date: getCreatedDate(),
          ...payload,
        },
      ];

    case REMOVE_BOARD:
      return removeItem(state, payload.id);

    case CHANGE_BOARD:
      return changeItem(state, payload.id, payload);
    default:
      break;
  }

  return state;
}
