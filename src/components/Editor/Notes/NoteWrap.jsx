import { TextNote } from "./TextNote";
import "../../../styles/noteWrap.css";


export function NoteWrap(props) {
    const {note} = props;
    console.log(note)
    
    const style = {};

    return (
      <div className="note-wrap" draggable="true" style={style}>
        {note}
      </div>
    );
}