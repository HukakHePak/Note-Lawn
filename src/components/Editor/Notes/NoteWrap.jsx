import "../../../styles/noteWrap.css";
import { useDrag } from "react-dnd";
import { useState } from "react";

export function NoteWrap(props) {
  const { note, left, top, id } = props;

  const style = {};

  // const [{ isDragging }, drag] = useDrag(
  //   () => ({
  //     type: 'note',
  //     item: { id, left, top },
  //     collect: (monitor) => ({
  //       isDragging: monitor.isDragging(),
  //     }),
  //   }),
  //   [id, left, top]
  // );
  // if (isDragging) {
  //   return <div ref={drag} />;
  // }
  const [{ x, y }, setPos] = useState({ x: 5000, y: 5000 });
  const [clickedPosition, setClickedPosition] = useState(null);

  return (
    <div
      //ref={drag}
      className="note-wrap"
      draggable
      style={{ left: x, top: y }}
      onDragStart={(event) => {
        setClickedPosition({ startX: event.clientX, startY: event.clientY });
        //console.log({ startX: event.clientX, startY: event.clientY });
      }}
      // onDrag={(event) => {
      //   if (clickedPosition) {
      //     // setPos({
      //     //   x: x + event.clientX ,//- clickedPosition.startX,
      //     //   y: y + event.clientY //- clickedPosition.startY,
      //     // });

      //     console.log({
      //       x: x + event.clientX - clickedPosition.startX,
      //       y: y + event.clientY - clickedPosition.startY,
      //     })
      //   }
        
      //   // console.log('move')
      // }}
      onDragEnd={(event) => {
        setPos({
            x: x + event.clientX - clickedPosition.startX,
            y: y + event.clientY - clickedPosition.startY,
          });
        setClickedPosition(null)
      }}

      
      resizable="true"
      //onClick={(event) => { console.log(event)}}
      
      
      //onDragStartCapture={(event) => {console.log('dragStartCapture')}}
    >
      {note}
      <button
        onMouseDown={(event) => {setClickedPosition({ startX: event.clientX, startY: event.clientY });}}
        onMouseUp={(event) => {console.log('mouseUp')}}
      > touch </button>
    </div>
  );
}
