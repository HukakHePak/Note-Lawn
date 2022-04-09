import "../../../styles/noteWrap.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function NoteWrap(props) {
  const { note, children } = props;

  const dispatch = useDispatch();

  const [{ x, y }, setPos] = useState({ x: note.left, y: note.top });
  const [clickedPosition, setClickedPosition] = useState(null);

  return (
    <div
      className="note-wrap"
      draggable="true"
      style={{ left: x, top: y, width: 300, height: 300 }}
      onDragStart={(event) =>
        setClickedPosition({ startX: event.clientX, startY: event.clientY })
      }
      onDragEnd={(event) => {
        const pos = {
          x: x + event.clientX - clickedPosition.startX,
          y: y + event.clientY - clickedPosition.startY,
        };
        setPos(pos);
        
        //onReplace(pos);

        setClickedPosition(null);      
      }}
      onMouseUp={(event) => {
        //onResize({
        //   width: event.target.clientWidth,
        //   height: event.target.clientHeight,
        // });
      }}
      onDoubleClick={event => {
        // set note select
      }}
    >
      {children}
    </div>
  );
}
