import React, { useState } from "react";
import { ColorCircle } from './ColorCircle';



export function SmallModal({ hiddenModal, action, filler, defaults = { name: '', color: '', link: '', isRepeat: false } }) {
  const [value, setValue] = useState(defaults.name);
  const [theme, setTheme] = useState({})


  let styleClassString = "small-modal";

  function addBoardToStore(e) {
    e.preventDefault()
    if (value) {
      action(value, theme.color, theme.link, theme.isRepeat)
      hiddenModal()
    }
  }

  return (
    <div className={`${styleClassString} ${filler.styleClass}`}>
      <form className="small-modal__form" onSubmit={e => e.preventDefault()}>
        <input
          className="small-modal__input"
          placeholder={filler.inputPlaceholder}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="small-modal__wrapper">
          <button className="small-modal__btn" onClick={addBoardToStore}>{filler.buttonText}</button>
          <ColorCircle defaults={defaults} hasLink={true} onChange={setTheme} active={false} />
        </div>
      </form>
    </div>
  );
}
