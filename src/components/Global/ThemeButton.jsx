import React from "react";
import { useSelector } from "react-redux";
import { getAppTheme } from "../../store/selectors/appTheme";

export function ThemeButton({ style, children, onClick }) {
  const theme = useSelector(getAppTheme);

  return (
    <button
      className="small-modal__btn"
      style={{ background: theme.mainColor, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
