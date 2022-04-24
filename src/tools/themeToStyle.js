export function themeToStyle(theme) {
  return {
    backgroundImage: `url(${theme.link})`,
    backgroundColor: theme.color,
  };
}
