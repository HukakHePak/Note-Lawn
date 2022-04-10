import "../../../../styles/textNote.css";

export function NoteText(props) {
  const { title, content, backgroundImage, backgroundColor } = props.note;

  return (
    <div className="note__text text">
      <TextNoteTitle title={title} />
      <div className="text__line"></div>
      <div
        className="text__subtitle"
        //contentEditable="true" // для редактирования текста в диве
      >
        {content}
      </div>
    </div>
  );
}

function TextNoteTitle(props) {
  const { title } = props;

  return (
    <div className="text__title">
      {/* <div className="text__title" contentEditable="true"></div> */}
      {title}
    </div>
  );
}
