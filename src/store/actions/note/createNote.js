import { defaultSize } from "../../reducers/notesReducer";
import { getBoardPosition } from "../../selectors/board/getBoardPosition";
import { Action } from "../Action";

export const CREATE_NOTE = "createNote";

export function createNote(type, event) {
    
  return (dispatch, getState) => {
    const { left, top } = getBoardPosition(getState());

    dispatch(Action(CREATE_NOTE, {
      type,
      position:
        event.type === "click"
          ? {
              left: left + (event.view.innerWidth - defaultSize.width) / 2,
              top: top + (event.view.innerHeight - defaultSize.height) / 2,
            }
          : { left: left + event.clientX, top: top + event.clientY },
    }));
  };
}
