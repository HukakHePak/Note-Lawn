import React from "react";
import { ReactComponent as AddBoardSvg } from "../../img/addBoardBtn.svg";
import { SmallModal } from "../Global/SmallModal";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "../../store/reducers/boardsReducer";
import fontColorContrast from "font-color-contrast";
import { getModals } from "../../store/selectors/selects/getModals";
import { openModal, closeModals } from "../../store/reducers/selectsReducer";
import { getAppColors } from './../../store/selectors/appTheme';

const filler = {
  styleClass: "new-board-modal",
  inputPlaceholder: "Name...",
  buttonText: "Create",
};

function AddBoardBar({ theme }) {
  const active = useSelector(getModals).addBoard;
  const dispatch = useDispatch();
  const color = fontColorContrast(theme.main);
  const { second } = useSelector(getAppColors)

  return (
    <div className="home__main-btn" style={{ color }} onClick={e => e.stopPropagation()}>
      Boards
      <AddBoardSvg
        fill={color}
        onClick={(e) => {
          e.stopPropagation()
          dispatch(openModal({ addBoard: !active }));
        }}
      />
      {active && (
        <SmallModal
          onSubmit={(name) => {
            dispatch(addBoard({ name, color: second }));
            dispatch(closeModals());
          }}
          filler={filler}
        />
      )}
    </div>
  );
};

export default AddBoardBar;
