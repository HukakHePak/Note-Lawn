import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppColors,
  getAppBackground,
} from "./../../../store/selectors/appTheme";
import {
  setBackgroundData,
  setMainColor,
  setSecondColor,
} from "../../../store/actions/appTheme.js";
import { ColorCircle } from "./../../Global/ColorCircle";
import fontColorContrast from "font-color-contrast";
import { getModals } from "../../../store/selectors/selects/getModals";
import { openModal } from "../../../store/actions/openModal";
import { closeModals } from "../../../store/actions/closeModals";

function SettingsModal() {
  const color = useSelector(getAppColors);
  const { link, isRepeat } = useSelector(getAppBackground);
  const dispatch = useDispatch();

  const {mainCircle, secondCircle} = useSelector(getModals);

  const defaults = { color: color.main, link, isRepeat };

  function setMain(values) {
    dispatch(setBackgroundData(values.link, values.isRepeat));
    dispatch(setMainColor(values.color));
  }

  function setSecond(values) {
    dispatch(setSecondColor(values.color));
  }

  function clickHandler(circle) {
    dispatch(closeModals());
    dispatch(openModal({ settings: true }));
    dispatch(openModal(circle));
  }

  return (
    <div
      className="small-modal small-modal_setting"
      style={{
        background: color.second,
        color: fontColorContrast(color.second),
      }}
      onClick={(event) => {
        clickHandler()
        event.stopPropagation();
      }}
    >
      <div className="small-modal__item">
        <span className="small-modal__text">Main color</span>
        <ColorCircle
          defaults={defaults}
          onChange={setMain}
          active={mainCircle}
          onClick={() => clickHandler({ mainCircle: !mainCircle })}
        />
      </div>
      <div className="small-modal__item">
        <span className="small-modal__text">Second color</span>
        <ColorCircle
          defaults={{ color: color.second }}
          onChange={setSecond}
          active={secondCircle}
          onClick={() => clickHandler({ secondCircle: !secondCircle })}
        />
      </div>
    </div>
  );
}

export default SettingsModal;
