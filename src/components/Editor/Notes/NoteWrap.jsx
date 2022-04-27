import "../../../styles/noteWrap.css";
import React from "react";
import { useDispatch } from "react-redux";
import { selectNote } from "../../../store/reducers/selectsReducer";
import { themeToStyle } from "../../../tools/themeToStyle";
import { selectEvent } from "../../../store/reducers/selectsReducer";
import fontColorContrast from "font-color-contrast";

export function NoteWrap(props) {
  const { selected, children, note, board } = props;
  const { id, size, theme } = note;

  const { scale, position } = board;
  
  const dispatch = useDispatch();

  function mouseDownHandler(event) {
    if (selected) return;

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
    dispatch(
      selectEvent({
        noteId: id,
        type: "resize",
        position: { left: event.clientX, top: event.clientY },
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
        ...themeToStyle(theme),
        outlineColor: theme.color,
        borderColor: theme.color,
        color: fontColorContrast(theme.color)
      }}
      onMouseDown={mouseDownHandler}
      onMouseUp={(event) => selected && event.stopPropagation()}
      onDoubleClick={doubleClickHandler}
    >
      <div style={{ fontSize: `calc(200% * ${scale})`, overflow: "hidden" }}>
        {children}
      </div>
      <button
        className="resize-btn"
        onMouseDown={buttonClickHandler}
      />
    </div>
  );
}
