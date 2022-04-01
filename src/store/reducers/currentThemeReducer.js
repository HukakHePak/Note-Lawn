import { defaultState } from "../index.js";
import { ACTIONS } from './../actions/index';

export const currentThemeReducer = (state=defaultState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_CURRENT_THEME:
      return {...state, currentTheme: {mainColor: action.mainColor, secondColor: action.secondColor}}
    default:
      return state
  }
}