import { storage } from "../storage";
import { createSlice } from '@reduxjs/toolkit'


const defaultState = {
  colors: {
    main: "#F4E6DC",
    second: "#FCF5F0"
  },
  background: {
    link: "",
    isRepeat: false
  }
};

const appTheme = createSlice({
  name: 'appTheme',
  initialState: storage.get("theme") || defaultState,
  reducers: {
    setMainColor(state, action) {
      state.colors.main = action.payload;
    },
    setSecondColor(state, action) {
      state.colors.second = action.payload;
    },
  }
})

export default appTheme.reducer;
export const { setMainColor, setSecondColor } = appTheme.actions;
