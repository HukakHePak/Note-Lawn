import { CREATE_NOTE } from "../actions/note/createNote";
import uniqid from "uniqid";
import { REMOVE_NOTE } from "../actions/note/removeNote";
import { EDIT_NOTE } from "../actions/note/editNote";
import { NOTE_TYPES } from "../../components/Editor/Notes/TypedNotes/CreateNote";
import { changeItem } from "../../tools/immutable/list/changeItem";
import { removeItem } from "../../tools/immutable/list/removeItem";

const defaultSize = {
  width: 300,
  height: 300,
};

const defaultState = [
  {
    type: NOTE_TYPES.TEXT,
    id: 1,
    boardId: 1,
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
    boardId: 1,
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
];

export function notesReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_NOTE:
      return [
        ...state,
        {
          id: uniqid(),
          type: payload.type,
          size: defaultSize,
          ...payload,
        },
      ];

    case REMOVE_NOTE:
      return removeItem(state, payload.id);

    case EDIT_NOTE:
      return changeItem(state, payload.id, payload);

    default:
      break;
  }

  return state;
}
