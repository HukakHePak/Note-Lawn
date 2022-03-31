
import addBoardBtn from "../../img/addBoardBtn.svg";

export function AddBoardBar(params) {
    
    return (
      <button className="home__main-btn">
        Boards
        <img src={addBoardBtn} alt="Add Board" />
      </button>
    );
    
}