import { defaultSize } from "../../reducers/notesReducer";
import { getAppTheme } from "../../selectors/appTheme";
import { getCurrentBoard } from "../../selectors/board/getCurrentBoard";
import { createNote } from "../../reducers/notesReducer";


export function createNoteHelper(type) {
  return (event) => (dispatch, getState) => {
    const { id, position, scale } = getCurrentBoard(getState());
    const { main } = getAppTheme(getState());
    const { left, top } = position;

    dispatch(
      createNote({
        type,
        boardId: id,
        theme: { color: main },
        position:
          event.type === "click"
            ? {
              left:
                -left +
                event.view.innerWidth / 2 / scale -
                defaultSize.height / 2,
              top:
                -top +
                event.view.innerHeight / 2 / scale -
                defaultSize.height / 2,
            }
            : {
              left: getPos(left, event.clientX, scale),
              top: getPos(top, event.clientY, scale),
            },
      })
    );
  };
}

export function getPos(pos, moz, scale) {
  return moz / scale - pos;
}
