import { TextNote } from "./TextNote";
import "../../../styles/noteWrap.css";

export function NoteWrap(props) {
    const {note} = props;
    
    const style = {};

    return (
      <div className="note-wrap" draggable="true" style={style}>
        {note}
        <TextNote />
        {/* <button>resize</button> */}
      </div>
    );
}