import "../../styles/modal.css";
import React from "react";
import { useSelector } from "react-redux";
import { getAppTheme } from "../../store/selectors/appTheme";

export function ThemeModal({ style, active, children, full }) {
  const theme = useSelector(getAppTheme);

  return (
    <div
      className={"small-modal " + (active && "small-modal--active")}
      style={{ background: theme.mainColor, ...style }}
    >
      <div className="small-modal__body" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
