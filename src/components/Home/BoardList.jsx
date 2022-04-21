import React from "react";
import { useDispatch } from "react-redux";
import { selectBoard } from "../../store/actions/board/selectBoard";
import fontColorContrast from "font-color-contrast";
import { ReactComponent as TrashSvg } from "../../img/trash.svg";

export function BoardList({ list, theme, handleRemoveConfirm }) {
  return (
    <div className="home__pages">
      {list.map((board, index) => (
        <BoardItem
          key={index}
          board={board}
          theme={theme}
          handleRemoveConfirm={handleRemoveConfirm}
        />
      ))}
    </div>
  );
}

function BoardItem({ board, theme, handleRemoveConfirm }) {
  const { date, name, id } = board;
  const color = fontColorContrast(theme.secondColor);

  const dispatch = useDispatch();

  function onRemoveConfirm(e) {
    e.stopPropagation();
    handleRemoveConfirm(id);
  }

  return (
    <div
      className="home__pages-item"
      //style={{ background: "black" }}
      onClick={() => dispatch(selectBoard(id))}
    >
      <div
        className="home__pages-panel"
        style={{ color, background: theme.secondColor }}
      >
        <div className="home__pages-info">
          <h3 className="home__pages-title">{name}</h3>
          <span className="home__pages-date">{date}</span>
        </div>

        <TrashSvg
          className="home__pages-remove"
          fill={color}
          onClick={onRemoveConfirm}
        />
      </div>
    </div>
  );
}
