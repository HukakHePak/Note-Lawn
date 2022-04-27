import { getSelectedNoteId } from "../../selectors/note/getSelectedNoteId";
import { selectNote } from "../../reducers/selectsReducer";
import { removeNote } from "../../reducers/notesReducer";

export function removeNoteHelper() {
  return (dispatch, getState) => {
    const id = getSelectedNoteId(getState());
    dispatch(selectNote(null))
    dispatch(removeNote(id));
  }
}