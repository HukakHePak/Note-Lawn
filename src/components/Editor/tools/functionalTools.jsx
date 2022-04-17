import homeIcon from "../../../img/right-tool/homeIcon.svg";
import { createOptionTool, createTool } from "./createTool";
import ColorSetter from "../../Global/ColorSetter";
import { selectBoard } from "../../../store/actions/board/selectBoard";

const home = createTool("Домой", homeIcon, () => selectBoard(null));
const color = createOptionTool("Выбрать цвет фона", <ColorSetter setColor={()=>{}} />);

export const functionalTools = [home, color];
