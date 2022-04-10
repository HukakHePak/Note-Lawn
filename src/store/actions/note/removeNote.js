import { noteAction } from "./noteAction";

export const REMOVE_NOTE = "removeNote";

export function removeNote(id) {
  return noteAction(REMOVE_NOTE, id);
}
