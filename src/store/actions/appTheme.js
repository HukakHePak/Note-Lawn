export const SET_CURRENT_THEME = 'SET_CURRENT_THEME'
export const SET_BACKGROUND = 'SET_BACKGROUND'

export const setCurrentTheme = (mainColor, secondColor) => ({type: SET_CURRENT_THEME, mainColor, secondColor})
export const setBackgroundData = (background, isRepeat) => ({type: SET_BACKGROUND, background, isRepeat})
