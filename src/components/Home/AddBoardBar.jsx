
import addBoardBtn from "../../img/addBoardBtn.svg";

export function AddBoardBar() {
    return (
      <button 
      className="home__main-btn"
      onClick={() => console.log(1)}
      > Boards
        <img src={addBoardBtn} alt="Add Board" />
      </button>
    );
}