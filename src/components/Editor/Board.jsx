import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../store/selectors/note/getNotes";
import "../../styles/editor.css";
import { NoteWrap } from "./Notes/NoteWrap";
import { CreateNote } from "./Notes/TypedNotes/CreateNote";
import { getSelectedNoteId } from "../../store/selectors/note/getSelectedNoteId";
import { editNote } from "../../store/actions/note/editNote";
import { changeScrollPos } from "../../store/actions/board/changeScrollPos";
import { getCurrentBoard } from "../../store/selectors/board/getCurrentBoard";
import { changeScale } from "../../store/actions/board/changeScale";
import { getNote } from "../../store/selectors/note/getNote";
import { clearEvent } from "../../store/actions/clearEvent";
import { selectEvent } from "../../store/actions/selectEvent";

export function Board() {
  const notes = useSelector(getNotes);
  const board = useSelector(getCurrentBoard);
  const selectedNoteId = useSelector(getSelectedNoteId);
  const dispatch = useDispatch();
  const boardNode = useRef(null);

  const noteEvent = useSelector((state) => state.selects.event);

  const note = useSelector(getNote(noteEvent?.noteId));

  function moveHandler(event) {
    const { buttons, movementX, movementY } = event;

    

    if (buttons !== 1 && event.type !== "onTouchMove") return;

    if (note) {
      const { type, position } = noteEvent;
      console.log(type);

      switch (type) {
        case "replace":
          dispatch(
            editNote(note.id, {
              position: {
                top: note.position.top - (position.top - event.clientY) / board.scale,
                left: note.position.left - (position.left - event.clientX) / board.scale,
              },
            })
          );
          break;

        case "resize":
          dispatch(
            editNote(note.id, {
              size: {
                width: note.size.width - (position.left - event.clientX) / board.scale,
                height: note.size.height - (position.top - event.clientY) / board.scale,
              },
            })
          );
          
          break;

        default:
          break;
      }

      
      dispatch(selectEvent({ ...noteEvent, position: { left: event.clientX, top: event.clientY }}));
      return;
    }

    dispatch(
      changeScrollPos(board.id, {
        // export into reducer, add range
        top: board.position.top + movementY / board.scale,
        left: board.position.left + movementX / board.scale,
      })
    );
  }

  function wheelHandler(event) {
    if (!event.ctrlKey) {
      dispatch(
        changeScrollPos(board.id, {
          top: board.position.top - event.deltaY / board.scale,
          left: board.position.left - event.deltaX / board.scale,
        })
      );

      return;
    }

    const scale = board.scale - (event.deltaY % 2) * (board.scale / 10);

    if (scale > 15 || scale < 0.01) return;

    dispatch(
      changeScale(board.id, {
        scale,
      })
    );

    const { innerWidth, innerHeight } = event.view;
    const { clientX, clientY } = event;
    //console.log((innerHeight / 2 / scale - innerHeight / 2 / board.scale))
    //console.log(board.position.top)

    dispatch(
      changeScrollPos(board.id, {
        top: board.position.top + (clientY / scale - clientY / board.scale), //+ event.clientX / 10 * (event.deltaY % 2),
        left: board.position.left + (clientX / scale - clientX / board.scale), // + event.clientY / 10 * (event.deltaY % 2),
      })
    );
  }

  function mouseUpHandler(event) {
    dispatch(clearEvent());
    event.stopPropagation();
  }

  useEffect(() => {
    if (!boardNode) return;

    boardNode.current.onwheel = (event) => {
      event.preventDefault();
    };
  }, [boardNode]);

  return (
    <div
      className="board"
      ref={boardNode}
      style={{
        // width: board.width,
        // height: board.height,
        background: `url(https://catherineasquithgallery.com/uploads/posts/2021-02/1613227411_48-p-fon-sinii-geometriya-62.jpg)`,
        backgroundPosition: `${board.position.left * board.scale / 2}px ${board.position.top * board.scale / 2}px`,
        backgroundSize: 1000 * board.scale
      }}
      //onTouchStart={console.log}
      onMouseMove={moveHandler}
      //onTouchMove={moveHandler}
      onWheel={wheelHandler}
      onMouseUp={mouseUpHandler}
      onTouchEnd={mouseUpHandler}
      //onTouchCancel={console.log}
    >
      {notes?.map((note) => {
        const { id } = note;
        const selected = id === selectedNoteId;

        return (
          <NoteWrap key={id} selected={selected} note={note}>
            {CreateNote(note, selected)}
          </NoteWrap>
        );
      })}
    </div>
  );
}
