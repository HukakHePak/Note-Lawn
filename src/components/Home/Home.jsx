import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/home.css";
import FavoriteNoteList from "./FavoriteNoteList";
import SearchBar from "./SearchBar";
import BoardList from "./BoardList";
import { AddBoardBar } from "./AddBoardBar";
import { getBoadrds, getFavoriteNotes } from "../../store/selectors/existenceBoards";
import { getAppTheme } from './../../store/selectors/appTheme';


function Home() {
  const [search, setSearch] = useState("");
  const boards = useSelector(getBoadrds);
  const [boardsList, setBoardsList] = useState(boards);
  const favoritesList = useSelector(getFavoriteNotes);
  const {mainColor, secondColor} = useSelector(getAppTheme);

  useEffect(() => {
    setBoardsList(
      boards.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, boards]);

  return (
    <div
      className="home home__wrapper">
      <div className="home__main">
        <div className="home__main-top">
          <AddBoardBar />
          <SearchBar setSearch={setSearch} />
        </div>
        <BoardList list={boardsList} />
      </div>
      <FavoriteNoteList list={favoritesList} />
    </div>
  );
}

export default Home;
