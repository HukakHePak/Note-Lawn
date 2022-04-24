import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAppTheme } from "../../store/selectors/appTheme";
import fontColorContrast from "font-color-contrast";

export function LoadingLinkModal(props) {
  const { src, onChange } = props;
  const [value, setValue] = useState(src || '');
  const { second, main } = useSelector(getAppTheme);
 
  useEffect(() => {
    if(value !== src) onChange(value);
  }, [value, src, onChange]);

  return (
    <div className="loading-link-modal--background " style={{ background: second}}>
      <div className="loading-link-modal">
        <form className="loading-link-modal__form" onSubmit={(event) => event.preventDefault()}>
          <input
            className="loading-link-modal__input"
            style={{ background: main, color: fontColorContrast(main) }}
            placeholder="link..."
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
        </form> 
      </div>
    </div>
  );
}
