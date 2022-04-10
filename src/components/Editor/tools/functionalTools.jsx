import homeIcon from "../../../img/right-tool/homeIcon.svg";
import { createOptionTool, createTool } from "./createTool";
import ColorSetter from "../../Global/ColorSetter";
import { setBoard } from "../../../store/actions/existenceBoards";

const home = createTool("Домой", homeIcon, setBoard(null));
const color = createOptionTool("Выбрать цвет фона", (<ColorSetter setColor={()=>{}}/>));

export const functionalTools = [home, color];
