import React, { useState, useEffect } from "react";
import { ColorSetterWrapper } from "../../Global/ColorSetterWrapper";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTheme } from '../../../store/actions/appTheme.js'
import { getAppTheme, getAppBackgound } from './../../../store/selectors/appTheme';
import { setBackgroundData } from '../../../store/actions/appTheme.js'
import { ColorBackgroundSetterWrapper } from './../../Global/ColorBackgroundSetterWrapper';


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
      <ColorBackgroundSetterWrapper
        text="Main Color "
        defaultColor={colorApp.mainColor}
        setColor={setMainColor} 
        setBackground={setBackground}
        setIsRepeat={setIsRepeat}
        defaultBackground={defaultBackground}
        defaultIsRepeat={defaultIsRepeat}
        />
      <ColorSetterWrapper
        text="Second color "
        defaultColor={colorApp.secondColor}
        setColor={setSecondColor} />
    </div>
  );
}

export default SettingsModal;
