import React from "react";
import { useDispatch } from "react-redux";
import { openEditor } from "../../store/actions/openWindow/openEditor";

function BoardList({ list }) {
  return (
    <div className="home__pages">
      {list.map((item, index) => (
        <BoardItem
          key={index}
          boardTitle={item.name}
          boardDate={item.date}
          // onClick = {}
        />
      ))}
    </div>
  );
}

function BoardItem({ boardDate, boardTitle }) {
  const dispatch = useDispatch();

  return (
    <a
      className="home__pages-item"
      onClick={() => {
        dispatch(openEditor());
        console.log("test");
      }}
    >
      <h3 className="home__pages-title">{boardTitle}</h3>
      <span className="home__pages-date">{boardDate}</span>
    </a>
  );
}

export default BoardList;
