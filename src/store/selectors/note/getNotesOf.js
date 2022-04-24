export function getNotesOf(id) {
    return (state) => {
        return state.notes.filter(({boardId}) => boardId === id);
    }
}