import React, { useState, useEffect } from "react";
import "react-color-palette/lib/css/styles.css";

export function ButtonModal(props) {
  const { modal, style, children, active, onClick } = props;
  const [hidden, setHidden] = useState(!active);

  useEffect(() => {
    setHidden(!active);
  }, [active, setHidden]); // replace into hook for modals

  return (
    <div className="button-modal">
      <div
        className="button-modal__btn"
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
