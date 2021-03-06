import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/editor.css";
import { NoteWrap } from "./Notes/NoteWrap";
import { CreateNote } from "./Notes/TypedNotes/CreateNote";
import { getSelectedNoteId } from "../../store/selectors/note/getSelectedNoteId";
import { editNote } from "../../store/reducers/notesReducer";
import { changeScrollPos } from "../../store/reducers/boardsReducer";
import { changeScale } from "../../store/reducers/boardsReducer";
import { getNote } from "../../store/selectors/note/getNote";
import { selectNote, clearEvent, closeModals, selectEvent } from "../../store/reducers/selectsReducer";
import { themeToStyle } from "../../tools/themeToStyle";
import { getNotesOf } from "../../store/selectors/note/getNotesOf";


export function Board({ board }) {
  const notes = useSelector(getNotesOf(board.id));
  const selectedNoteId = useSelector(getSelectedNoteId);
  const dispatch = useDispatch();
  const node = useRef(null);

  const noteEvent = useSelector((state) => state.selects.event);

  const note = useSelector(getNote(noteEvent?.noteId));

  function moveHandler(event) {
    const { buttons, movementX, movementY } = event;

    if (buttons !== 1) return;

    if (note) {
      const { type, position } = noteEvent;

      switch (type) {
        case "replace":
          dispatch(
            editNote({
              id: note.id,
              position: {
                top:
                  note.position.top -
                  (position.top - event.clientY) / board.scale,
                left:
                  note.position.left -
                  (position.left - event.clientX) / board.scale,
              },
            })
          );
          break;

        case "resize":
          dispatch(
            editNote({
              id: note.id,
              size: {
                width:
                  note.size.width -
                  (position.left - event.clientX) / board.scale,
                height:
                  note.size.height -
                  (position.top - event.clientY) / board.scale,
              },
            })
          );

          break;

        default:
          break;
      }

      dispatch(
        selectEvent({
          ...noteEvent,
          position: { left: event.clientX, top: event.clientY },
        })
      );
      return;
    }

    if (event.target !== node.current) return;

    dispatch(
      changeScrollPos({
        id: board.id,
        // export into reducer, add range
        position: {
          top: board.position.top + movementY / board.scale,
          left: board.position.left + movementX / board.scale
        }
      })
    );
  }

  function wheelHandler(event) {
    if (!event.ctrlKey) {
      dispatch(
        changeScrollPos({
          id: board.id,
          position: {
            top: board.position.top - event.deltaY / board.scale,
            left: board.position.left - event.deltaX / board.scale
          }
        })
      );
      return;
    }

    const scale = board.scale - Math.sign(event.deltaY) * (board.scale / 10);

    if (scale > 15 || scale < 0.01) return;

    dispatch(
      changeScale({
        id: board.id,
        scale,
      })
    );

    const { clientX, clientY } = event;

    dispatch(
      changeScrollPos({
        id: board.id,
        position: {
          top: board.position.top + (clientY / scale - clientY / board.scale),
          left: board.position.left + (clientX / scale - clientX / board.scale)
        }
      })
    );
  }

  function mouseUpHandler(event) {
    dispatch(clearEvent());
    dispatch(closeModals());
    dispatch(selectNote(null));
    event.stopPropagation();
  }

  useEffect(() => {
    if (!node) return;

    node.current.onwheel = (event) => {
      event.preventDefault();
    };
  }, [node]);

  return (
    <div
      className="board"
      ref={node}
      style={{
        ...themeToStyle(board.theme),
        backgroundPosition: board.theme.isRepeat
          ? `${(board.position.left * board.scale) / 2}px ${(board.position.top * board.scale) / 2
          }px`
          : "0 0",
      }}
      onMouseMove={moveHandler}
      onWheel={wheelHandler}
      onMouseUp={mouseUpHandler}
      onTouchEnd={mouseUpHandler}
    >
      {notes?.map((note) => {
        const { id } = note;
        const selected = id === selectedNoteId;
        return (
          <NoteWrap key={id} selected={selected} note={note} board={board}>
            {CreateNote(note, selected)}
          </NoteWrap>
        );
      })}
    </div>
  );
}
