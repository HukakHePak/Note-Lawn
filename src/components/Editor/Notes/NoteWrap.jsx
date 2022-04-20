import "../../../styles/noteWrap.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../../store/selectors/board/getCurrentBoard";
import { selectNote } from "../../../store/actions/note/selectNote";
import { selectEvent } from "../../../store/actions/selectEvent";

export function NoteWrap(props) {
  const { selected, children, note } = props;
  const { id, size } = props.note;

  const { scale, position } = useSelector(getCurrentBoard);
  const dispatch = useDispatch();

  function mouseDownHandler(event) {
    console.log('mouse')
    dispatch(selectEvent({ noteId: id, type: "replace", position: { left: event.clientX, top: event.clientY }}));
    event.stopPropagation();
  }

  function doubleClickHandler() {
    dispatch(selectNote(id));
  }

  function buttonClickHandler(event) {
    dispatch(selectEvent({ noteId: id , type: "resize", position: { left: event.clientX, top: event.clientY }}));
    event.stopPropagation();
  }

  // function doubleTouchHandler() {
  //   let time = null;

  //   return () => {
  //     if(time) {
  //       if(Date.now() - time < 700) {
  //         doubleClickHandler();
  //       }
  //       time = null;
  //       return;
  //     }
  //     time = Date.now();
  //   }
  // }

  function touchHandler(event) {
    console.log('touch')
    const touch = event.touches[0];
    dispatch(selectEvent({ noteId: id, type: "replace", position: { left: touch.clientX, top: touch.clientY }}));
    event.stopPropagation();
  }

  return (
    <div
      className={"note-wrap " + (selected && "note-wrap--selected")}
      style={{
        left: (note.position.left + position.left) * scale,
        top: (note.position.top + position.top) * scale,
        width: size.width * scale,
        height: size.height * scale,
      }}
      onMouseDown={mouseDownHandler}
      onTouchStart={touchHandler}
      onDoubleClick={doubleClickHandler}
    >
      <div style={{ fontSize: `calc(100% * ${scale})`, overflow: 'hidden' }}>{children}</div>
      <button
        className="resize-btn tool-item"
        style={{
          transform: `translate(50%) translateY(50%)`,
        }}
        onMouseDown={buttonClickHandler}
        onTouchStart={touchHandler}
      />
    </div>
  );
}
