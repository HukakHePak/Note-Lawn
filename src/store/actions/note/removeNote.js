import { getSelectedNoteId } from "../../selectors/note/getSelectedNoteId";
import { noteAction } from "./noteAction";
import { selectNote } from "./selectNote";

export const REMOVE_NOTE = "removeNote";

export function removeNote(id) {
  return (dispatch, getState) => {
    const id = getSelectedNoteId(getState());

    dispatch(selectNote(null))
    dispatch(noteAction(REMOVE_NOTE, id));
  }
}
