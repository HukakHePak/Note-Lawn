import React from "react";
import { useDispatch } from "react-redux";
import { removeBoard, setBoard } from "../../store/actions/existenceBoards";


function BoardList({ list, background }) {
  return (
    <div className="home__pages" >
      {list.map((item, index) => (
        <BoardItem
          key={index}
          boardTitle={item.name}
          boardDate={item.date}
          boardId={item.id}
          background={background}
        />
      ))}
    </div>
  );
}

function BoardItem({ boardDate, boardTitle, boardId, background }) {
  const dispatch = useDispatch();

  function removeBoardToStore(e) {
    e.stopPropagation()
    dispatch(removeBoard(boardId))
  }

  return (
    <div className="home__pages-item" onClick={() => dispatch(setBoard(boardId))} style={{background}}>
      <h3 className="home__pages-title">{boardTitle}</h3>
      <span className="home__pages-date">{boardDate}</span>
      <button className="home__pages-remove" onClick={removeBoardToStore}>Remove</button>
    </div>
  );
}

export default BoardList;
