import { createSlice } from '@reduxjs/toolkit'


const defaultState = {
  boardId: null,
  noteId: null,
  event: null,
  modals: {},
  lastNoteIndex: -1
};

const selects = createSlice({
  name: 'selects',
  initialState: defaultState,
  reducers: {
    selectBoard(state, action) {
      state.boardId = action.payload;
    },
    selectNote(state, action) {
      state.noteId = action.payload;
    },
    findNote(state, action) {
      state.lastNoteIndex = action.payload;
    },
    selectEvent(state, action) {
      state.event = action.payload
    },
    clearEvent(state) {
      state.event = null;
    },
    openModal(state, action) {
      state.modals = { ...state.modals, ...action.payload };
    },
    closeModals(state) {
      state.modals = {};
    },
  }
});

export default selects.reducer;
export const { selectBoard, selectNote, findNote, selectEvent, clearEvent, openModal, closeModals } = selects.actions;
