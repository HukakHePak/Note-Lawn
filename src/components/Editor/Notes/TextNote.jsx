import "../../../styles/textNote.css";

export function TextNote() {
  return (
    <div className="note__text text">
      <TextNoteTitle title="Title" />
      <div className="text__line"></div>
      <div
        className="text__subtitle"
        contentEditable="true" // для редактирования текста в диве
      >
        Lorem Lorem
      </div>
    </div>
  );
}

function TextNoteTitle (props) {
  const {title} = props;

  return (
    <div className="text__title" contentEditable="true">
      {title}
    </div>
  );
}