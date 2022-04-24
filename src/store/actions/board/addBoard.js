import { getAppTheme } from "../../selectors/appTheme";
import { Action } from "../Action";

export const ADD_BOARD = "addBoard";

export function addBoard(name) {
  return (dispatch, getState) => {
    const { second } = getAppTheme(getState());

    dispatch(
      Action(ADD_BOARD, {
        name,
        theme: { color: second },
      })
    );
  };
}
