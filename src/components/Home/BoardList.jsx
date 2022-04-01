import React from "react";

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
  return (
    <a className="home__pages-item" href="#pageId">
      <h3 className="home__pages-title">{boardTitle}</h3>
      <span className="home__pages-date">{boardDate}</span>
    </a>
  );
}

export default BoardList
