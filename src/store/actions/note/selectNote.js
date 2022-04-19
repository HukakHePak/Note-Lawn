import { Action } from "../Action";

export const SELECT_NOTE = "selectNote";

export function selectNote(id) {
  return Action(SELECT_NOTE, { noteId: id });
}
