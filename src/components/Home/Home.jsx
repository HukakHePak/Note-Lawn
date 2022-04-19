import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/home.css";
import FavoriteNoteList from "./FavoriteNoteList";
import SearchBar from "./SearchBar";
import BoardList from "./BoardList";
import { AddBoardBar } from "./AddBoardBar";
import {
  getBoadrds,
  getCurrentBoardId,
  getFavoriteNotes,
} from "../../store/selectors/existenceBoards";
import { getAppTheme } from "./../../store/selectors/appTheme";
import Settings from "./settings/Settings";
import useColor from "../../hooks/useColor";

function Home() {
  const [search, setSearch] = useState("");
  const boards = useSelector(getBoadrds);
  const [boardsList, setBoardsList] = useState(boards); // вынести фильтр в редюсер
  const theme = useSelector(getAppTheme);
  const style = useColor(useSelector(getCurrentBoardId));

  useEffect(() => {
    setBoardsList(
      boards.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, boards]);

  return (
    <div className="home" style={style}>
      <div className="home__wrapper">
        <div className="home__top">
          <div className="home__top-search">
            <AddBoardBar />
            <SearchBar setSearch={setSearch} background={theme.secondColor} />
          </div>
          <Settings />
        </div>
        <BoardList list={boardsList} background={theme.secondColor} />
      </div>
    </div>
  );
}

export default Home;
