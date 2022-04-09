import React, { useState, useEffect } from "react";


function BackgroundLInk({ defaultBackground, defaultIsRepeat, setBackground, setIsRepeat }) {
  const [backgroundValue, setBackgroundValue] = useState(defaultBackground)
  const [isRepeatValue, setIsRepeatValue] = useState(defaultIsRepeat)

  useEffect(() => {
    setBackground(backgroundValue)
    setIsRepeat(isRepeatValue)
  }, [backgroundValue, isRepeatValue, setBackground, setIsRepeat])

  return (
    <div>
      <input className="small-modal__input"
        type="text"
        value={backgroundValue}
        onChange={e => setBackgroundValue(e.target.value)}
        placeholder="Link for background"
        style={{ margin: 0, marginBottom: 10 }}
      />
      <div className="small-modal__item">
        <label htmlFor="link">Repeat?</label>
        <input
          id="link"
          type="checkbox"
          checked={isRepeatValue}
          onChange={() => setIsRepeatValue(!isRepeatValue)}
          style={{ transform: 'scale(1.5)' }}
        />
      </div>
    </div>
  )
}

export default BackgroundLInk