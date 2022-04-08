import homeIcon from "../img/right-tool/homeIcon.svg";
import backIcon from "../img/right-tool/backIcon.svg";
import forwardIcon from "../img/right-tool/forwardIcon.svg";
import colorIcon from "../img/right-tool/colorIcon.svg";

import { Tool } from "./Tool";
import { setBoard } from './../store/actions/existenceBoards';

const home = new Tool("Домой", homeIcon, setBoard(null));
const back = new Tool("На шаг назад", backIcon);
const forward = new Tool("На шаг вперед", forwardIcon);
const color = new Tool("Выбрать цвет фона", colorIcon);

export const functionalTools = [home, back, forward, color];
