import "../../styles/modal.css";
import { removeBoard } from "../../store/actions/board/removeBoard";
import { useDispatch, useSelector } from "react-redux";
import { getAppTheme } from "../../store/selectors/appTheme";
import fontColorContrast from "font-color-contrast";

export function OpenModalConfirmRemoveBoard(props) {
  const { active, setActive, id } = props;

  const dispatch = useDispatch();
  const { main, second } = useSelector(getAppTheme);

  function handleConfirmRemoveBoard() {
    setActive(false);
    dispatch(removeBoard(id));
  }

  return (
    <div
      className={
        active ? "modal modal__wrapper active" : "modal modal__wrapper"
      }
      onClick={() => setActive(false)}
    >
      <div
        className="modal__body"
        onClick={(e) => e.stopPropagation()}
        style={{ background: second, color: fontColorContrast(second) }}
      >
        <div className="modal__text"> Are you sure for remove?</div>
        <div className="modal__btns">
          <div className="modal__confirm">
            <button style={{ background: main, color: fontColorContrast(main) }} className="modal__btn" onClick={handleConfirmRemoveBoard}>
              Yes
            </button>
          </div>
          <div className="modal__cancel">
            <button style={{ background: main, color: fontColorContrast(main) }} className="modal__btn" onClick={() => setActive(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
