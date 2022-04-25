import React from "react";
import SettingsModal from "./SettingsModal";
import { ReactComponent as SettingsSvg } from "../../../img/setting.svg";
import fontColorContrast from "font-color-contrast";
import { useDispatch, useSelector } from "react-redux";
import { getModals } from "../../../store/selectors/selects/getModals";
import { stopPropagation } from "../../../tools/stopPropagation";
import { openModal } from "../../../store/actions/modals/openModal";

function Settings({ theme }) {
  const active = useSelector(getModals).settings;
  const color = fontColorContrast(theme.main);
  const dispatch = useDispatch();

  return (
    <div
      className="setting"
      onClick={stopPropagation}
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
