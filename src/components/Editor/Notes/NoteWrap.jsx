import "../../../styles/noteWrap.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../../store/selectors/board/getCurrentBoard";
import { selectNote } from "../../../store/actions/note/selectNote";
import { selectEvent } from "../../../store/actions/selectEvent";
import { themeToStyle } from "../../../tools/themeToStyle";

export function NoteWrap(props) {
  const { selected, children, note } = props;
  const { id, size, theme } = props.note;

  const { scale, position } = useSelector(getCurrentBoard);
  const dispatch = useDispatch();

  function mouseDownHandler(event) {
    if(selected) return;

    dispatch(
      selectEvent({
        noteId: id,
        type: "replace",
        position: { left: event.clientX, top: event.clientY },
      })
    );
    event.stopPropagation();
  }

  function doubleClickHandler() {
    dispatch(selectNote(id));
  }

  function buttonClickHandler(event) {
    if(selected) return;

    dispatch(
      selectEvent({
        noteId: id,
        type: "resize",
        position: { left: event.clientX, top: event.clientY },
      })
    );
    event.stopPropagation();
  }

  function touchHandler(event) {
    console.log("touch");
    const touch = event.touches[0];
    dispatch(
      selectEvent({
        noteId: id,
        type: "replace",
        position: { left: touch.clientX, top: touch.clientY },
      })
    );
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
        ...themeToStyle(theme)
      }}
      onMouseDown={mouseDownHandler}
      onMouseUp={(event) => selected && event.stopPropagation()}
      //onTouchStart={touchHandler}
      onDoubleClick={doubleClickHandler}
    >
      <div style={{ fontSize: `calc(100% * ${scale})`, overflow: "hidden" }}>
        {children}
      </div>
      <button
        className="resize-btn tool-item"
        style={{
          transform: `translate(50%) translateY(50%)`,
        }}
        onMouseDown={buttonClickHandler}
        //onTouchStart={touchHandler}
      />
    </div>
  );
}
