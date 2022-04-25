import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/editor.css";
import fontColorContrast from "font-color-contrast";
import { getAppTheme } from "../../store/selectors/appTheme";

export function ToolItem(props) {
  const { title, children, action, option, draggable } = props;

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { main} = getAppTheme(state);
  const fillColor = fontColorContrast(main);

  return (
    <div
      className="tool-item"
      title={title}
      onClick={(event) => action && dispatch(action(event, state))}
      style={{
        fill: fillColor,
        background: main,
        borderColor: fillColor,
        color: fillColor
      }}
      draggable={draggable}
      onDragEnd={(event) => action && dispatch(action(event))}
    >
      {option && option(dispatch, state)}
      {children}
    </div>
  );
}
