import { useSelector } from "react-redux";
import { defaultSize } from "../../reducers/notesReducer";
import { getBoardPosition } from "../../selectors/board/getBoardPosition";
import { getNotes } from "../../selectors/note/getNotes";
import { Action } from "../Action";
import { selectNote } from "./selectNote";

export const CREATE_NOTE = "createNote";

export function createNote(type, event) {
  return (dispatch, getState) => {
    const { left, top } = getBoardPosition(getState());
    const [lastAddedNote] = getNotes(getState()).slice(-1);

    dispatch(
      Action(CREATE_NOTE, {
        type,
        position:
          event.type === "click"
            ? {
                left: left + (event.view.innerWidth - defaultSize.width) / 2,
                top: top + (event.view.innerHeight - defaultSize.height) / 2,
              }
            : { left: left + event.clientX, top: top + event.clientY },
      })
    );

    dispatch(selectNote(lastAddedNote.id));
  };
}
