import { getCurrentBoard } from "../../selectors/board/getCurrentBoard";
import { getNotes } from "../../selectors/note/getNotes";
import { editBoard } from "../../reducers/boardsReducer";
import { selectNote, findNote } from "../../reducers/selectsReducer";


export function findNoteHelper(view) {
  return (dispatch, getState) => {
    const state = getState();
    let lastIndex = state.selects.lastNoteIndex + 1;
    const notes = getNotes(state);

    if (!notes.length) return;
    if (lastIndex >= notes.length) {
      lastIndex = 0;
    };

    const { id, position, size } = notes[lastIndex];
    const { innerWidth, innerHeight } = view;
    const board = getCurrentBoard(state);

    dispatch(findNote(lastIndex))
    dispatch(selectNote(id));
    dispatch(
      editBoard({
        id: board.id,
        scale: 1,
        position: {
          left: getOffset(position.left, innerWidth, size.width),
          top: getOffset(position.top, innerHeight, size.height),
        },
      })
    );
  };
};

function getOffset(pos, view, size) {
  return - pos + (view - size) / 2;
};
