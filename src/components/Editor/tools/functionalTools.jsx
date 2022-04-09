import homeIcon from "../../../img/right-tool/homeIcon.svg";
import { createOptionTool, createTool } from "./createTool";
import { openHome } from "../../../store/actions/openWindow/openHome";
import ColorSetter from "../../Global/ColorSetter";

const home = createTool("Домой", homeIcon, openHome);
const color = createOptionTool("Выбрать цвет фона", (<ColorSetter setColor={()=>{}}/>));

export const functionalTools = [home, color];
