import React from "react";
import { useDispatch } from "react-redux";
import { removeBoard } from "../../store/actions/board/removeBoard";
import { selectBoard } from "../../store/actions/board/selectBoard";

function BoardList({ list, background }) {
  return (
    <div className="home__pages">
      {list.map((board, index) => (
        <BoardItem key={index} board={board} background={background} />
      ))}
    </div>
  );
}

function BoardItem({ board, background }) {
  const { date, name, id } = board;

  const dispatch = useDispatch();

  function removeBoardToStore(e) {
    e.stopPropagation();
    dispatch(removeBoard(id));
  }

  return (
    <div
      className="home__pages-item"
      onClick={() => dispatch(selectBoard(id))}
      style={{ background }}
    >
      <h3 className="home__pages-title">{name}</h3>
      <span className="home__pages-date">{date}</span>
      <button className="home__pages-remove" onClick={removeBoardToStore}>
        Remove
      </button>
    </div>
  );
}

export default BoardList;
