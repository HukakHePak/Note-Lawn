export function getSelectedNote(notes, selectedNoteId) {
  return notes.filter((item) => item.id === selectedNoteId);
}
