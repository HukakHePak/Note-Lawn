import "../../../styles/noteWrap.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentBoard } from "../../../store/selectors/board/getCurrentBoard";

export function NoteWrap(props) {
  const { selected, position, size, children, onChange, onSelect } = props;

  const [{ x, y }, setPos] = useState({ x: position.left, y: position.top }); // remove this
  const [clickedPosition, setClickedPosition] = useState(null); // TODO: make hook for drag element

  const scale = useSelector(getCurrentBoard).scale;

  return (
    <div
      className={"note-wrap " + (selected && "note-wrap--selected")}
      draggable="true"
      style={{
        left: position.left,
        top: position.top,
        width: size.width,
        height: size.height,
        transform: `translateY(${
          (-size.width * (1 - scale)) / 2
        }px) translateX(${
          (-size.height * (1 - scale)) / 2
        }px) scale(${scale}) `,
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
          onChange({
            size: {
              width: event.target.clientWidth,
              height: event.target.clientHeight,
            },
          });
      }}
      onDoubleClick={(event) => {
        onSelect && onSelect(event);
      }}
      onMouseMove={(event) => {
        event.stopPropagation();
      }}
    >
      {children}
      <button
        className="resize-btn tool-item"
        style={{
          transform: `translate(50%) translateY(50%) scale(${
            1 / scale < 3 ? 1 / scale : 3
          })`,
        }}
      />
    </div>
  );
}
