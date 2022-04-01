
export const ACTIONS = {
  ADD_BOARD: 'ADD_BOARD',
  REMOVE_BOARD: 'REMOVE_BOARD',
  CHANGE_CURRENT_THEME: 'CHANGE_CURRENT_THEME',
}

export const changeCurrentTheme = (mainColor, secondColor) => ({type: ACTIONS.CHANGE_CURRENT_THEME, mainColor, secondColor})