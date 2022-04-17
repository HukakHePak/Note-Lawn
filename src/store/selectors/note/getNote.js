export function getNote(id) {
    return (state) => state.notes.find(note => note.id === id);
}