import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import ColorSetter from "../../Global/ColorSetter";
import {changeCurrentTheme} from '../../../store/actions'

function SettingsModal({ hiddenModal }) {
  const [mainColor, setMainColor] = useState('')
  const [secondColor, setSecondColor] = useState('')
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(changeCurrentTheme(mainColor, secondColor))
  // }, [mainColor, secondColor])

  if (hiddenModal) return null
  return (
    <div className="setting-modal" >
      <div className="setting-modal__item">
        <div>Main Color </div>
        <ColorSetter setColor={setMainColor}/>

      </div>
      <div className="setting-modal__item">
        <div>Second color </div>
        <ColorSetter setColor={setSecondColor}/>
      </div>
    </div>
  );
}

export default SettingsModal;
