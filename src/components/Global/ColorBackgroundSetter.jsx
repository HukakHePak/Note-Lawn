import React, { useState, useEffect } from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import BackgroundLInk from './BackgroundLInk';

function ColorBackgroundSetter({ setColor, defaultColor, defaultBackground, defaultIsRepeat, setBackground, setIsRepeat }) {
  const [paletteColor, setPaletteColor] = useColor("hex", defaultColor || '#fff');
  const [hiddenPalette, setHiddenPalette] = useState(true)
  
  useEffect(() => {
    setColor(paletteColor.hex)
  }, [paletteColor, setColor])

  return (
    <div style={{ position: 'relative' }}>
      <div
        className="circle"
        onClick={() => setHiddenPalette(!hiddenPalette)}
        style={{ background: paletteColor.hex }}
      ></div>
      {hiddenPalette
        ? ''
        : <div className='palette palette_bg'>
          <ColorPicker
            width={456}
            height={128}
            color={paletteColor}
            onChange={setPaletteColor}
            hideHSV
            dark
          />
          <BackgroundLInk
          defaultBackground={defaultBackground}
          defaultIsRepeat={defaultIsRepeat}
          setBackground={setBackground}
          setIsRepeat={setIsRepeat}
        />
        </div>}
    </div>
  )
}

export default ColorBackgroundSetter