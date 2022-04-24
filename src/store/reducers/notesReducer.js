import uniqid from "uniqid";
import { CREATE_NOTE } from "../actions/note/createNote";
import { REMOVE_NOTE } from "../actions/note/removeNote";
import { EDIT_NOTE } from "../actions/note/editNote";
import { NOTE_TYPES } from "../../components/Editor/Notes/TypedNotes/CreateNote";
import { changeItem } from "../../tools/immutable/list/changeItem";
import { removeItem } from "../../tools/immutable/list/removeItem";
import { ContentState, convertToRaw } from "draft-js";
import { storage } from "../storage";
import data from '../../data.json';

export const defaultSize = {
  width: 300,
  height: 300,
};

const defaultTheme = { color: "#F4E6DC", link: "", isRepeat: false };

function createText(text) {
  return convertToRaw(ContentState.createFromText(text));
}

const defaultState = [
  {
    type: NOTE_TYPES.TEXT,
    id: 1,
    boardId: 1,
    position: {
      top: 300,
      left: 200,
    },
    size: {
      width: 300,
      height: 300,
    },
    rawState: createText(
      "I want to thank the guys for their help in writing the project. It was nice to have a good time!"
    ),
    theme: defaultTheme,
  },
  {
    type: NOTE_TYPES.TEXT,
    id: 2,
    boardId: 1,
    position: {
      top: 100,
      left: 600,
    },
    size: {
      width: 250,
      height: 220,
    },
    rawState: createText("\n  Malivartti\n\n  Ruslan5787\n\n  karaell"),
    theme: defaultTheme,
  },
  {
    type: NOTE_TYPES.IMAGE,
    id: 3,
    boardId: 1,
    position: {
      top: 400,
      left: 600,
    },
    size: {
      width: 350,
      height: 300,
    },
    link: "https://data.whicdn.com/images/322212937/original.gif",
    theme: defaultTheme,
  },
];


//console.log(JSON.stringify({ notes: storage.get("notes"), boards: storage.get("boards")}));



export function notesReducer(
  state = storage.get("notes") || data.notes,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_NOTE:
      return [
        ...state,
        {
          id: uniqid(),
          size: defaultSize,
          position: { left: 0, top: 0 },
          rawState: convertToRaw(ContentState.createFromText("")),
          theme: defaultTheme,
          ...payload,
        },
      ];

    case REMOVE_NOTE:
      return removeItem(state, payload.id);

    case EDIT_NOTE:
      return changeItem(state, payload.id, payload);

    default:
      return state;
  }
}

export function notes(state, payload) {
  const _state = notesReducer(state, payload);

  storage.set("notes", _state);
  return _state;
}
