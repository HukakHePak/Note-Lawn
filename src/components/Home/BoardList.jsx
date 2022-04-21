import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectBoard } from "../../store/actions/board/selectBoard";
import removeBoardIcon from "../../img/removeBoardIcon.svg";

function BoardList({ list, background, handleRemoveConfirm }) {
  return (
    <div className="home__pages">
      {list.map((board, index) => (
        <BoardItem
          key={index}
          board={board}
          background={background}
          handleRemoveConfirm={handleRemoveConfirm}
        />
      ))}
    </div>
  );
}

function BoardItem({ board, background, handleRemoveConfirm }) {
  const { date, name, id } = board;

  const dispatch = useDispatch();

  function onRemoveConfirm(e) {
    e.stopPropagation();
    handleRemoveConfirm(id);
    console.log(id)
  }

  return (
    <div
      className="home__pages-item"
      onClick={() => dispatch(selectBoard(id))}
      //style={{ background }}
    >
      <h3 className="home__pages-title">{name}</h3>
      <span className="home__pages-date">{date}</span>
      <button className="home__pages-remove" onClick={onRemoveConfirm}>
        <img src={removeBoardIcon} />
      </button>
    </div>
  );
}

export default BoardList;
