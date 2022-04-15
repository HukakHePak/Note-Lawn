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
    //console.log(event)
    if (event.buttons === 1) {
      dispatch(
        changeScrollPos(board.id, {
          // export into reducer, add range
          top: board.position.top - event.movementY,
          left: board.position.left - event.movementX,
        })
      );
    }
  }

  function wheelHandler(event) {
    if (!event.ctrlKey) {
      dispatch(
        changeScrollPos(board.id, {
          top: board.position.top + event.deltaY,
          left: board.position.left + event.deltaX,
        })
      );
      return;
    }

    dispatch(
      changeScale(board.id, { scale: board.scale - event.deltaY / 1000 })
    );
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
        left: -left,
        top: -top,
        background: board.theme.color,
        transform: `scale(${board.scale})`,
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

        return (
          <NoteWrap
            key={id}
            position={position}
            selected={selected}
            size={size}
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
