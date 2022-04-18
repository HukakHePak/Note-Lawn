import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeBoard } from "../../store/actions/board/changeBoard";
import { getBoard } from "../../store/selectors/existenceBoards";


export function BoardName({ boardId }) {
  const [hiddenModal, setHiddenModal] = useState(false);
  const dispatch = useDispatch()
  const board = useSelector(state => getBoard(state, boardId))
  const [value, setValue] = useState('')

  function renameBoard(e) {
    e.preventDefault()
    dispatch(changeBoard(board.id, value, board.theme.color, board.theme.bg, board.theme.isRepeat))
    setValue('')
  }

  return (
    <div className="board-name">
      <button
        className="board-name__btn"
        onClick={() => setHiddenModal(!hiddenModal)}
      >
        {board.name}
      </button>
      {hiddenModal &&
        <div className='small-modal board-name__modal'>
          <form className="small-modal__form" onSubmit={renameBoard}>
            <input
              className="small-modal__input"
              placeholder='New board name'
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <button className="small-modal__btn">Rename</button>
          </form>
        </div>
      }
    </div>
  );
}
