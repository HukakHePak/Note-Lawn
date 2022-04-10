import {
  ADD_BOARD,
  CHANGE_BOARD,
  REMOVE_BOARD,
} from "../actions/existenceBoards";
import { SET_BOARD } from "./../actions/existenceBoards";
import { getCreatedDate } from "./../../tools/time.js";
import { NOTE_TYPES } from "../../components/Editor/Notes/TypedNotes/CreateNote";
import { CREATE_NOTE } from "../actions/note/createNote";
import { EDIT_NOTE } from "../actions/note/editNote";

const defaultState = {
  currentBoardId: null,
  selectedNoteId: null,
  boards: [
    {
      id: 1,
      name: "Board 1",
      date: "08/03/2022 09:55",
      notes: [
        {
          type: NOTE_TYPES.TEXT,
          id: 1,
          position: {
            top: 200,
            left: 200,
          },
          size: {
            width: 400,
            height: 500,
          },
          title: "nice title",
          content: "nice content",
          theme: { color: "#98FB98", bg: { img: "", isRepeat: false } },
        },
        {
          type: NOTE_TYPES.TEXT,
          id: 2,
          position: {
            top: 600,
            left: 800,
          },
          size: {
            width: 350,
            height: 300,
          },
          title: "nice title",
          content: "nice content",
          theme: { color: "#98FB98", bg: { img: "", isRepeat: false } },
        },
      ],
      theme: { color: "#98FB98", bg: { img: "", isRepeat: false } },
    },
    {
      id: 2,
      name: "Board 2",
      date: "08/03/2022 09:55",
      notes: [],
      theme: { color: "#F08080", bg: { img: "", isRepeat: false } },
    },
    {
      id: 3,
      name: "Board 3",
      date: "08/03/2022 09:55",
      notes: [],
      theme: { color: "#7FFFD4", bg: { img: "", isRepeat: false } },
    },
  ],
  favoriteNotes: ["First", "Second", "Thirt"],
};

export const existenceBoards = (state = defaultState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return { ...state, currentBoardId: action.boardId };

    case ADD_BOARD:
      return {
        ...state,
        boards: [
          ...state.boards,
          {
            id: Date.now(),
            name: action.name,
            date: getCreatedDate(),
            theme: {
              // дублирование
              color: action.color,
              bg: { img: action.background, isRepeat: action.isRepeat },
            },
            notes: [],
          },
        ],
      };

    case REMOVE_BOARD:
      return {
        ...state,
        boards: removeItem(state.boards, action.id),
      };

    case CHANGE_BOARD:
      return {
        ...state,
        boards: [
          ...removeItem(state.boards, action.id),
          {
            ...getItem(state.boards,action.id),
            name: action.name,
            theme: {
              // дублирование
              color: action.color,
              bg: { img: action.background, isRepeat: action.isRepeat },
            },
          },
        ],
      };

    case CREATE_NOTE:
      // return {
      //   ...state,
      //   boards: [
      //     ...boards
      //   ]
      // }
      break;

    case EDIT_NOTE:

      break;
      
    default:
      break;
  }
  return state;
};

function removeItem(list, id) {
  return list.filter((item) => item.id !== id);
}

function getItem(list, id) {
  return list.find((item) => item.id === id)
}