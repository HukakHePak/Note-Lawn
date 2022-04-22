import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/home.css";
import SearchBar from "./SearchBar";
import BoardList from "./BoardList";
import Settings from "./settings/Settings";
import { AddBoardBar } from "./AddBoardBar";
import { getBoadrds, } from "../../store/selectors/existenceBoards";
import { getAppTheme } from "./../../store/selectors/appTheme";


function Home(props) {
  const { handleRemoveConfirm } = props;

  const [search, setSearch] = useState("");
  const boards = useSelector(getBoadrds);
  const [boardsList, setBoardsList] = useState(boards); // вынести фильтр в редюсер
  const theme = useSelector(getAppTheme);
  const style = (theme.link ? `url(${theme.link}) ${theme.isRepeat ? 'repeat' : 'center / cover no-repeat'}, ` : '') + theme.main

  useEffect(() => {
    setBoardsList(
      boards.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, boards]);

  return (
    <div className="home" style={
      {
        background: style
      }
    }>
      <div className="home__wrapper">
        <div className="home__top">
          <div className="home__top-search">
            <AddBoardBar />
            <SearchBar setSearch={setSearch} background={theme.second} />
          </div>
          <Settings />
        </div>
        <BoardList
          list={boardsList}
          background={theme.second}
          handleRemoveConfirm={handleRemoveConfirm}
        />
      </div>
    </div >
  );
}

export default Home;
