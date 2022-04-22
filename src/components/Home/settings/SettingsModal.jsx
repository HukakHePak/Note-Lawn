import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAppColors, getAppBackground } from './../../../store/selectors/appTheme';
import { setBackgroundData, setMainColor, setSecondColor } from '../../../store/actions/appTheme.js'
import { ColorCircle } from './../../Global/ColorCircle';


function SettingsModal({ showModal }) {
  const color = useSelector(getAppColors);
  const { link, isRepeat } = useSelector(getAppBackground);
  const dispatch = useDispatch();
  const defaults = { color: color.main, link, isRepeat };

  function setMain(values) {
    dispatch(setBackgroundData(values.link, values.isRepeat));
    dispatch(setMainColor(values.color));
  };

  function setSecond(values) {
    dispatch(setSecondColor(values.color));
  };


  if (!showModal) return null;
  return (
    <div className="small-modal small-modal_setting">
      <div className="small-modal__item">
        <span className="small-modal__text">Main color</span>
        <ColorCircle defaults={defaults} hasLink={true} onChange={setMain} active={false} />
      </div>
      <div className="small-modal__item">
        <span className="small-modal__text">Main color</span>
        <ColorCircle defaults={{ color: color.second }} hasLink={false} onChange={setSecond} active={false} />
      </div>
    </div>
  );
};

export default SettingsModal;
