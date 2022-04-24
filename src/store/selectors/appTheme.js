export const getAppColors = (state) => (state.appTheme.colors)
export const getAppBackground = (state) => (state.appTheme.background)
export const getAppTheme = (state) => ({ ...state.appTheme.colors, ...state.appTheme.background })
