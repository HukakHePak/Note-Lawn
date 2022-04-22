import { defaultSize } from "../../reducers/notesReducer";
import { getCurrentBoard } from "../../selectors/board/getCurrentBoard";
import { Action } from "../Action";

export const CREATE_NOTE = "createNote";

export function createNote(type, event) {
  return (dispatch, getState) => {
    const { id, position, scale } = getCurrentBoard(getState());
    const { left, top } = position;

    dispatch(
      Action(CREATE_NOTE, {
        type,
        boardId: id,
        position:
          event.type === "click"
            ? {
                left: - left + (event.view.innerWidth) / 2 / scale - defaultSize.height / 2,
                top: - top + (event.view.innerHeight) / 2 / scale - defaultSize.height / 2,
              }
            : { left: getPos(left, event.clientX, scale), top: getPos(top, event.clientY, scale)},
      })
    );
  };
}

export function getPos(pos, moz, scale) {
  return ( moz / scale - pos )
}