import React, { useState, useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { ReactComponent as Repeat } from "../../img/repeat.svg";

export function ColorCircle(props) {
  const { defaults, hasLink, onChange, active, onClick } = props;

  const [paletteColor, setPaletteColor] = useColor(
    "hex",
    defaults.color || "#fff"
  );
  const [backgroundValue, setBackgroundValue] = useState(defaults.link || "");
  const [isRepeatValue, setIsRepeatValue] = useState(defaults.isRepeat);
  const [hiddenPalette, setHiddenPalette] = useState(!active);

  useEffect(() => {
    setHiddenPalette(!active);
  }, [active, setHiddenPalette]); // replace into hook for modals

  useEffect(() => {
    const theme = {
      color: paletteColor.hex,
      link: backgroundValue,
      isRepeat: isRepeatValue,
    };

    for (let i in defaults) {
      if (defaults[i] !== theme[i]) {
        onChange(theme);
        return;
      }
    }
  });

  return (
    <div className="color-circle">
      <div
        className="circle"
        onClick={() => {
          setHiddenPalette(!hiddenPalette);
          onClick && onClick(hiddenPalette);
        }}
        style={{
          backgroundImage: `url(${backgroundValue})`, // replace into stylize func
          backgroundColor: paletteColor.hex,
        }}
      ></div>
      {!hiddenPalette && (
        <div className="palette palette_bg">
          <ColorPicker
            width={400}
            height={200}
            color={paletteColor}
            onChange={setPaletteColor}
            hideHSV
            hideHEX
            hideRGB
            dark
          />
          {hasLink && (
            <div className="background-input">
              {" "}
              {/* replace into re-use component */}
              <input
                className="small-modal__input"
                type="text"
                value={backgroundValue}
                onChange={(e) => setBackgroundValue(e.target.value)}
                placeholder="Link for background"
              />
              <button
                className={"background-input__btn " + (isRepeatValue && "background-input__btn--active ")}
                onClick={() => setIsRepeatValue(!isRepeatValue)}
              >
                <Repeat />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
