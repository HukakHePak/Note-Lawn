import { LoadingLinkModal } from "../LoadingLinkModal";

export function NoteMedia(props) {
  const { isSelected, children } = props;

  return isSelected ? <LoadingLinkModal /> : children;
}
