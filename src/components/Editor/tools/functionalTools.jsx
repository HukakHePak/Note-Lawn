import homeIcon from "../../../img/right-tool/homeIcon.svg";
import { createTool } from "./createTool";
import { openHome } from "../../../store/actions/openWindow/openHome";
import ColorSetter from "../../Global/ColorSetter";

const home = createTool("Домой", homeIcon, openHome);
const color = createTool("Выбрать цвет фона","", "", (<ColorSetter setColor={()=>{}}/>));

export const functionalTools = [home, color];
