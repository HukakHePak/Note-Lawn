import React, { useState, useEffect } from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";


function ColorSetter({ setColor, defaultColor }) {
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
        : <div className='palette'>
          <ColorPicker
            width={456}
            height={128}
            color={paletteColor}
            onChange={setPaletteColor}
            hideHSV
            dark
          />
        </div>}
    </div>
  )
}

export default ColorSetter