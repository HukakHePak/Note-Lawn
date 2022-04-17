import "../../../styles/noteWrap.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentBoard } from "../../../store/selectors/board/getCurrentBoard";
import { selectNote } from "../../../store/actions/note/selectNote";
import { selectEvent } from "../../../store/actions/selectEvent";
import { clearEvent } from "../../../store/actions/clearEvent";

export function NoteWrap(props) {
  const { selected, size, children, onChange, onSelect, note } = props; // get note

  const { id } = props.note;

  const { scale, position } = useSelector(getCurrentBoard);
  const dispatch = useDispatch();

  return (
    <div
      className={"note-wrap " + (selected && "note-wrap--selected")}
      //draggable="true"
      style={{
        left: (note.position.left + position.left) * scale,
        top: (note.position.top + position.top) * scale,
        width: size.width * scale,
        height: size.height * scale,
        //transform: `translateY(${(-size.width * (1 - scale)) / 2}px) translateX(${(-size.height * (1 - scale)) / 2}px) scale(${scale}) `,
      }}

      onMouseDown={(event) => {
        dispatch(selectEvent({noteId: id}, "replace"));
        event.stopPropagation();
      }}
      onDoubleClick={() => dispatch(selectNote(id))}
    >
      <div style={{fontSize: `calc(100% * ${scale})`}}>{children}</div>  
      <button
        className="resize-btn tool-item"
        style={{
          transform: `translate(50%) translateY(50%)`,
        }}
        onMouseDown={(event) => {
          dispatch(selectEvent({noteId: id}, "resize"));
          event.stopPropagation();
        }}
      />
    </div>
  );
}
