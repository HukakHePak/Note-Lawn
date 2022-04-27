import fontColorContrast from "font-color-contrast";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAppTheme } from "../../store/selectors/appTheme";

export function SmallModal(props) {
  const [value, setValue] = useState("");
  const { onSubmit, filler } = props;

  const { main, second } = useSelector(getAppTheme);
  const color = fontColorContrast(second); // remove this func into theme and make func for themeToStyle

  function clickHandler(e) { // callback - app to the parent and make onChange/onCreate
    e.preventDefault();
    if (value) {
      onSubmit(value)
    }
  }

  return (
    <div className="small-modal" style={{ background: second }}>
      <form className="small-modal__form" onSubmit={(e) => e.preventDefault()}>
        <input
          style={{ color, borderBottom: "2px solid " + main }}
          className="small-modal__input"
          placeholder={filler.inputPlaceholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="small-modal__wrapper">
          <button
            className="small-modal__btn"
            style={{ background: main, color: fontColorContrast(main) }}
            onClick={clickHandler}
          >
            {filler.buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
