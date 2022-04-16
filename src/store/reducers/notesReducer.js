import uniqid from "uniqid";
import { CREATE_NOTE } from "../actions/note/createNote";
import { REMOVE_NOTE } from "../actions/note/removeNote";
import { EDIT_NOTE } from "../actions/note/editNote";
import { NOTE_TYPES } from "../../components/Editor/Notes/TypedNotes/CreateNote";
import { changeItem } from "../../tools/immutable/list/changeItem";
import { removeItem } from "../../tools/immutable/list/removeItem";

import { EditorState } from "draft-js";

export const defaultSize = {
  width: 300,
  height: 300,
};

const defaultPosition = {
  top: 500,
  left: 500,
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
    editorState: EditorState.createEmpty(), //
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

  //console.log(payload)

  switch (type) {
    case CREATE_NOTE:
      return [
        ...state,
        {
          id: uniqid(),
          size: defaultSize,
          theme: { color: "#98FB98", bg: { img: "", isRepeat: false } },
          position: defaultPosition,
          boardId: 1,
          editorState: EditorState.createEmpty(),
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
