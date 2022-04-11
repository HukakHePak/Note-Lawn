import { CREATE_NOTE } from "../actions/note/createNote";
import uniqid from "uniqid";
import { REMOVE_NOTE } from "../actions/note/removeNote";
import { EDIT_NOTE } from "../actions/note/editNote";
import { NOTE_TYPES } from "../../components/Editor/Notes/TypedNotes/CreateNote";

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
  const notes = [...state];

  switch (type) {
    case CREATE_NOTE:
      notes.push({
        id: uniqid(),
        type: payload.type,
        size: defaultSize,
        ...payload,
      });
      break;

    case REMOVE_NOTE:
      return state.filter(({ id }) => id !== payload.id);

    case EDIT_NOTE:
      let note = notes.find(({ id }) => id === payload.id);
      note = {...payload}
      break;

    default:
      break;
  }

  return state;
}
