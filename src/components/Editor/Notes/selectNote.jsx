import { NoteImage } from "./TypedNotes/NoteImage";
import { NoteText } from "./TypedNotes/NoteText";
import { NOTE_TYPES } from "./noteTypes";
import { NoteVideo } from "./TypedNotes/NoteVideo";

export function selectNote(note) {
  switch (note.type) {
    case NOTE_TYPES.TEXT:
      return <NoteText note={note} />;

    case NOTE_TYPES.IMAGE:
      return <NoteImage note={note} />;

    case NOTE_TYPES.VIDEO:
      return <NoteVideo note={note} />;

    default:
      break;
  }
}
