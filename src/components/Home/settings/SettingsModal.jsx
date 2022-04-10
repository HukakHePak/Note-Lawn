import React, { useState, useEffect } from "react";
import { ColorSetterWrapper } from "../../Global/ColorSetterWrapper";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTheme } from '../../../store/actions/appTheme.js'
import { getAppTheme, getAppBackgound } from './../../../store/selectors/appTheme';
import BackgroundLInk from "../../Global/BackgroundLInk";
import { setBackgroundData } from '../../../store/actions/appTheme.js'


function SettingsModal({ showMohal }) {
  const [mainColor, setMainColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const [background, setBackground] = useState(null)
  const [isRepeat, setIsRepeat] = useState(false)
  const colorApp = useSelector(getAppTheme)
  const {img: defaultBackground, isRepeat: defaultIsRepeat} = useSelector(getAppBackgound)
  const dispatch = useDispatch()

  useEffect(() => {
    if (mainColor || secondColor) dispatch(setCurrentTheme(mainColor, secondColor))
  }, [dispatch, mainColor, secondColor])

  useEffect(() => {
    if (background !== null) dispatch(setBackgroundData(background, isRepeat))
  }, [dispatch, background, isRepeat])

  if (!showMohal) return null

  return (
    <div className="small-modal small-modal_setting">
      <ColorSetterWrapper
        text="Main Color "
        defaultColor={colorApp.mainColor}
        setColor={setMainColor} />
      <ColorSetterWrapper
        text="Second color "
        defaultColor={colorApp.secondColor}
        setColor={setSecondColor} />
      <BackgroundLInk
        defaultBackground={defaultBackground}
        defaultIsRepeat={defaultIsRepeat}
        setBackground={setBackground}
        setIsRepeat={setIsRepeat}
      />
    </div>
  );
}

export default SettingsModal;
