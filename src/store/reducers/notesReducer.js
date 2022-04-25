import uniqid from "uniqid";
import { CREATE_NOTE } from "../actions/note/createNote";
import { REMOVE_NOTE } from "../actions/note/removeNote";
import { EDIT_NOTE } from "../actions/note/editNote";
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
