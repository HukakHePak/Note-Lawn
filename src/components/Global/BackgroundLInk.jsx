import React, { useState, useEffect } from "react";
import { ReactComponent as Repeat } from '../../img/repeat.svg'


function BackgroundLInk({ defaultBackground, defaultIsRepeat, setBackground, setIsRepeat }) {
  const [backgroundValue, setBackgroundValue] = useState(defaultBackground)
  const [isRepeatValue, setIsRepeatValue] = useState(defaultIsRepeat)

  useEffect(() => {
    setBackground(backgroundValue)
    setIsRepeat(isRepeatValue)
  }, [backgroundValue, isRepeatValue, setBackground, setIsRepeat])

  return (
    <div className="background-input">
      <input className="small-modal__input"
        type="text"
        value={backgroundValue}
        onChange={e => setBackgroundValue(e.target.value)}
        placeholder="Link for background"
        style={{ margin: 0, marginBottom: 10 }}
      />
      <button className="background-input__btn" onClick={() => setIsRepeatValue(!isRepeatValue)}>
        <Repeat fill={isRepeatValue ? '#645134' : '#D8B499'} />
      </button>
    </div>
  )
}

export default BackgroundLInk