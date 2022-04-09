import { SET_BACKGROUND, SET_CURRENT_THEME } from "../actions/appTheme"


const defaultState = {
  appTheme: { mainColor: '#f7d7c1', secondColor: '#fff' },
  background: {img: 'https://kartinkin.net/uploads/posts/2020-07/1593665274_36-p-tsvetnoi-fon-63.jpg', isRepeat: false}
}

export const appTheme = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME:
      return { ...state, appTheme: { mainColor: action.mainColor, secondColor: action.secondColor } }
    case SET_BACKGROUND:
      return { ...state, background: {img: action.background, isRepeat: action.isRepeat} }
    default:
      return state
  }
}
