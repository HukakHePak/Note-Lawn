import { createSlice } from '@reduxjs/toolkit'
import { getCreatedDate } from "./../../tools/time.js";
import { removeItem } from "../../tools/immutable/list/removeItem";
import { changeItem } from "../../tools/immutable/list/changeItem";
import { storage } from "../storage.js";
import data from "../../data.json";
import uniqid from "uniqid";


const boardDefaults = {
  position: {
    left: 0,
    top: 0,
  },
  scale: 1,
};

const boards = createSlice({
  name: 'boards',
  initialState: storage.get("boards") || data.boards,
  reducers: {
    addBoard(state, action) {
      state.push({
        id: uniqid(),
        name: action.payload.name,
        date: getCreatedDate(),
        ...boardDefaults,
        theme: { color: action.payload.color }
      })
    },
    removeBoard(state, action) {
      return removeItem(state, action.payload);
    },
    editBoard(state, action) {
      return changeItem(state, action.payload.id, action.payload);
    },
    changeScrollPos(state, action) {
      return changeItem(state, action.payload.id, action.payload);
    },
    changeScale(state, action) {
      return changeItem(state, action.payload.id, action.payload);
    },
  }
});

export default boards.reducer;
export const { addBoard, removeBoard, editBoard, changeScrollPos, changeScale } = boards.actions;
