import { SET_BACKGROUND, SET_MAIN_COLOR, SET_SECOND_COLOR } from "../actions/appTheme"
import { storage } from "../storage"

const defaultState = {
  colors: { main: '#F4E6DC', second: '#FCF5F0' },
  background: { link: '', isRepeat: false }
};

export const appThemeReducer = (state = storage.get('theme') || defaultState, action) => {
  switch (action.type) {
    case SET_MAIN_COLOR:
      return { ...state, colors: { ...state.colors, main: action.main } };
    case SET_SECOND_COLOR:
      return { ...state, colors: { ...state.colors, second: action.second } };
    case SET_BACKGROUND:
      return { ...state, background: { link: action.background, isRepeat: action.isRepeat } };
    default:
      return state
  }
}


export function appTheme(state, payload) {
  const _state = appThemeReducer(state, payload);

  storage.set('theme', _state);
  return _state;
}
