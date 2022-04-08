import React, { useState, useEffect } from "react";
import { ColorSetterWrapper } from "../../Global/ColorSetterWrapper";
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentTheme } from '../../../store/actions/appTheme.js'
import { getAppTheme } from './../../../store/selectors/appTheme';

function SettingsModal({ hiddenModal }) {
  const [mainColor, setMainColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const colorApp = useSelector(getAppTheme)
  const dispatch = useDispatch()

  useEffect(() => {
    if (mainColor || secondColor) dispatch(changeCurrentTheme(mainColor, secondColor))
  }, [dispatch, mainColor, secondColor])

  if (hiddenModal) return null;
  return (
    <div className="small-modal small-modal--setting">
      <ColorSetterWrapper text="Main Color " defaultColor={colorApp.mainColor} setColor={setMainColor} />
      <ColorSetterWrapper text="Second color " defaultColor={colorApp.secondColor} setColor={setSecondColor} />
    </div>
  );
}

export default SettingsModal;
