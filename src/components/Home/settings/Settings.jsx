import React from "react";
import SettingsModal from "./SettingsModal";
import { ReactComponent as SettingsSvg } from "../../../img/setting.svg";
import fontColorContrast from "font-color-contrast";
import { useDispatch, useSelector } from "react-redux";
import { getModals } from "../../../store/selectors/selects/getModals";
import { openModal } from "../../../store/reducers/selectsReducer";

function Settings({ theme }) {
  const active = useSelector(getModals).settings;
  const color = fontColorContrast(theme.main);
  const dispatch = useDispatch();

  return (
    <div
      className="setting"
      onClick={e => e.stopPropagation()}
    >
      <SettingsSvg
        className="setting-btn"
        fill={color}
        onClick={() => {
          dispatch(openModal({ settings: !active }));
        }}
      />
      {active && <SettingsModal />}
    </div>
  );
}

export default Settings;
