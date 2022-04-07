import "../../../styles/noteWrap.css";
import { useDrag } from "react-dnd";

export function NoteWrap(props) {
  const { note, left, top, id } = props;
  console.log(note);

  const style = {};

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'note',
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );
  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div
      ref={drag}
      className="note-wrap"
      draggable="true"
      style={{ left, top }}
    >
      {note}
    </div>
  );
}
