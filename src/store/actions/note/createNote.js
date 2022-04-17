import { defaultSize } from "../../reducers/notesReducer";
import { getCurrentBoard } from "../../selectors/board/getCurrentBoard";
import { Action } from "../Action";

export const CREATE_NOTE = "createNote";

export function createNote(type, event) {
  return (dispatch, getState) => {
    const { id, position, scale } = getCurrentBoard(getState());
    const { left, top } = position;

    //console.log(event.clientX, event.clientY);
    //console.log(left - left * (1 - scale),  top - (10000 * scale));
    console.log({ left: getPos(left, event.clientX, event.view.innerWidth, scale), top: getPos(top, event.clientY, event.view.innerHeight, scale)})
    console.log({ left, top })

    dispatch(
      Action(CREATE_NOTE, {
        type,
        boardId: id,
        position:
          event.type === "click"
            ? {
                left: - left + (event.view.innerWidth - defaultSize.width) / 2 / scale,
                top: - top + (event.view.innerHeight - defaultSize.height) / 2 / scale,
              }
            : { left: getPos(left, event.clientX, event.view.innerWidth, scale), top: getPos(top, event.clientY, event.view.innerHeight, scale)},
      })
    );
  };
}

export function getPos(pos, moz, view, scale) {
  return ( moz / scale - pos );
}
