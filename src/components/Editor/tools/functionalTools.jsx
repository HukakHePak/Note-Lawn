import homeIcon from "../../../img/right-tool/homeIcon.svg";
import { createOptionTool, createTool } from "./createTool";
import { selectBoard } from "../../../store/actions/board/selectBoard";
import ColorBackgroundSetter from './../../Global/ColorBackgroundSetter';

const home = createTool("Домой", homeIcon, () => selectBoard(null));
const color = createOptionTool("Выбрать цвет фона", <ColorBackgroundSetter setColor={() => { }} setBackground={() => { }} setIsRepeat={() => { }} />);

export const functionalTools = [home, color];
