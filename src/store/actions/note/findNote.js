import { getCurrentBoard } from "../../selectors/board/getCurrentBoard";
import { getNotes } from "../../selectors/note/getNotes";
import { Action } from "../Action";
import { changeScrollPos } from "../board/changeScrollPos";
import { selectNote } from "./selectNote";

export const FIND_NOTE = "findNote";

export function findNote(event) {
  return (dispatch, getState) => {
    const state = getState();

    let lastIndex = state.selects.lastNoteIndex + 1;
    const notes = getNotes(state);

    if (!notes.length) return;

    if (lastIndex >= notes.length) {
      lastIndex = 0;
    }

    const { id, position, size } = notes[lastIndex];
    const { innerWidth, innerHeight } = event.view;
    const board = getCurrentBoard(state);

    dispatch(Action(FIND_NOTE, { lastNoteIndex: lastIndex }));
    dispatch(selectNote(id));
    dispatch(
      changeScrollPos(board.id, {
        left: getOffset(position.left, innerWidth, size.width, board.scale),
        top: getOffset(position.top, innerHeight, size.height, board.scale),
      })
    );
  };
}

function getOffset(pos, view, size, scale) {
  return (-pos + (view / scale - size ) / 2 ) ;
}
