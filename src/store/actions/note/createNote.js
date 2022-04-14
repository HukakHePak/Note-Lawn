import { getBoardPosition } from "../../selectors/board/getBoardPosition";
import { Action } from "../Action";

export const CREATE_NOTE = "createNote";

export function createNote(type, event) {
  return (dispatch, getState) => {
    const { left, top } = getBoardPosition(getState());

    return Action(CREATE_NOTE, {
      type,
      position:
        event.type === "click"
          ? {
              left: left + event.view.innerWidth / 2, // - defaultSize
              top: top + event.view.innerHeight / 2, // + boardScrollPos
            }
          : { left: left + event.clientX, top: top + event.clientY },
    });
  };
}
