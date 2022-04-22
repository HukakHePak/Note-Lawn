import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../../../store/actions/note/editNote";
import { getSelectedNoteId } from "../../../store/selectors/note/getSelectedNoteId";
import { LoadingLinkModal } from "../LoadingLinkModal";

export function NoteMedia(props) {
  const { isSelected, children, note } = props;
  const dispatch = useDispatch();

  return isSelected ? <LoadingLinkModal src={note.link} onChange={(link) => dispatch(editNote(note.id, {link}))}/> : children;
}
