

export function NoteWrap(props) {
    const {note} = props;
    
    const style = {};

    return (
        <div className="note"
            style={style}
            >
        {note}
        <button>resize</button>
        </div>
    );
}