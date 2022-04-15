import "../../../styles/noteWrap.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentBoard } from "../../../store/selectors/board/getCurrentBoard";

export function NoteWrap(props) {
  const { selected, position, size, children, onChange, onSelect } = props;

  const [{ x, y }, setPos] = useState({ x: position.left, y: position.top });
  const [clickedPosition, setClickedPosition] = useState(null);

  const scale = useSelector(getCurrentBoard).scale;

  return (
    <div
      className={"note-wrap " + (selected && "note-wrap--selected")}
      draggable="true"
      style={{
        left: x,
        top: y,
        width: size.width,
        height: size.height,
      }}
      onDragStart={(event) =>
        setClickedPosition({ startX: event.clientX, startY: event.clientY })
      }
      onDragEnd={(event) => {
        const pos = {
          x: x + (event.clientX - clickedPosition.startX) / scale,
          y: y + (event.clientY - clickedPosition.startY) / scale,
        };
        setPos(pos);

        onChange && onChange({ position: { top: pos.y, left: pos.x } });

        setClickedPosition(null);
      }}
      onMouseUp={(event) => {
        onChange &&
          onChange(
            {
              size: {
                width: event.target.clientWidth,
                height: event.target.clientHeight,
              },
            }
          );
      }}
      onDoubleClick={(event) => {
        onSelect && onSelect(event);
      }}

      onMouseMove={(event) => {event.stopPropagation();}}
    >
      {children}
    </div>
  );
}
