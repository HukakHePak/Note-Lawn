import React, { useState, useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { ReactComponent as Repeat } from "../../img/repeat.svg";

export function ButtonModal(props) {
  const { modal, style, children, active, onClick } = props;
  const [hidden, setHidden] = useState(!active);

  useEffect(() => {
    setHidden(!active);
  }, [active, setHidden]); // replace into hook for modals

  return (
    <div className="color-circle">
      <div
        className="circle"
        onClick={() => {
            setHidden(!hidden);
          onClick && onClick(hidden);
        }}
        style={style}
      >{children}</div>
      {!hidden && (modal)}
    </div>
  );
}
