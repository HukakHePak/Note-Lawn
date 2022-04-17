import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../store/selectors/note/getNotes";
import "../../styles/editor.css";
import { NoteWrap } from "./Notes/NoteWrap";
import { selectNote } from "../../store/actions/note/selectNote";
import { CreateNote } from "./Notes/TypedNotes/CreateNote";
import { getSelectedNoteId } from "../../store/selectors/note/getSelectedNoteId";
import { editNote } from "../../store/actions/note/editNote";
import { changeScrollPos } from "../../store/actions/board/changeScrollPos";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";
import { getBoardPosition } from "../../store/selectors/board/getBoardPosition";
import { changeScale } from "../../store/actions/board/changeScale";

export function Board() {
  const notes = useSelector(getNotes);
  const board = useSelector(getCurrentBoard);
  const selectedNoteId = useSelector(getSelectedNoteId);
  const dispatch = useDispatch();
  const { left, top } = useSelector(getBoardPosition);
  const boardNode = useRef(null);

  function moveHandler(event) {
    //console.log(top, left)
    if (event.buttons === 1) {
      dispatch(
        changeScrollPos(board.id, {
          // export into reducer, add range
          top: board.position.top + event.movementY / board.scale,
          left: board.position.left + event.movementX / board.scale,
        })
      );
    }
  }

  function wheelHandler(event) {
    //console.log(event);

    if (!event.ctrlKey) {
      dispatch(
        changeScrollPos(board.id, {
          top: board.position.top - event.deltaY / board.scale,
          left: board.position.left - event.deltaX / board.scale,
        })
      );
      return;
    }

    dispatch(
      changeScale(board.id, { scale: board.scale - (event.deltaY % 2) * 0.2 * board.scale * (board.scale) })
    );

    // dispatch(
    //   changeScrollPos(board.id, {
    //     top: board.position.top + event.deltaY,
    //     left: board.position.left + event.deltaX,
    //   })
    // );
  }

  useEffect(() => {
    if (!boardNode) return;

    boardNode.current.onwheel = (event) => {
      event.preventDefault();
    };
  }, [boardNode]);

  return (
    <div
      style={{
        // left: -left,
        // top: -top,
        width: board.width,
        height: board.height,
        background: board.theme.color,
        //transform: `scale(${board.scale})`,
      }}
      className="board"
      onMouseMove={moveHandler}
      ref={boardNode}
      onWheel={wheelHandler}
      onMouseDown={(event) => {
        //console.log(event)
      }}
    >
      {notes?.map((note) => {
        const { id, position, size, theme } = note;
        const selected = id === selectedNoteId;

        //console.log({left: left + position.left, top: top + position.top})

        return (
          <NoteWrap
            key={id}
            position={{left: (left + position.left) * board.scale, top: (top + position.top) * board.scale}}
            selected={selected}
            size={size}
            scale={board.scale}
            onChange={(note) => dispatch(editNote(id, note))}
            onSelect={() => dispatch(selectNote(id))}
            theme={theme}
          >
            {CreateNote(note, selected)}
          </NoteWrap>
        );
      })}
    </div>
  );
}
