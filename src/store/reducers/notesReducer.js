import { createSlice } from '@reduxjs/toolkit'
import uniqid from "uniqid";
import { changeItem } from "../../tools/immutable/list/changeItem";
import { removeItem } from "../../tools/immutable/list/removeItem";
import { ContentState, convertToRaw } from "draft-js";
import { storage } from "../storage";
import data from '../../data.json';


export const defaultSize = {
  width: 300,
  height: 300,
};

const defaultTheme = { color: "#F4E6DC", link: "", isRepeat: false };

const notes = createSlice({
  name: 'boards',
  initialState: storage.get("notes") || data.notes,
  reducers: {
    createNote(state, action) {
      state.push({
        id: uniqid(),
        size: defaultSize,
        position: { left: 0, top: 0 },
        rawState: convertToRaw(ContentState.createFromText("")),
        theme: defaultTheme,
        ...action.payload,
      })
    },
    removeNote(state, action) {
      return removeItem(state, action.payload)
    },
    editNote(state, action) {
      return changeItem(state, action.payload.id, action.payload);
    }
  }
});

export default notes.reducer;
export const { createNote, removeNote, editNote } = notes.actions;
