import "../../styles/modal.css";
import { removeBoard } from "../../store/actions/board/removeBoard";
import { useDispatch } from "react-redux";

export function OpenModalConfirmRemoveBoard(props) {
  const { active, setActive, id } = props;

  const dispatch = useDispatch();

  function handleConfirmRemoveBoard() {
    setActive(false);
    dispatch(removeBoard(id));
    console.log(id)
  }

  return (
    <div
      className={
        active ? "modal modal__wrapper active" : "modal modal__wrapper"
      }
      onClick={() => setActive(false)}
    >
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__text"> Are you sure for remove?</div>
        <div className="modal__btns">
          <div className="modal__confirm">
            <button className="modal__btn" onClick={handleConfirmRemoveBoard}>
              Yes
            </button>
          </div>
          <div className="modal__cancel">
            <button className="modal__btn" onClick={() => setActive(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
