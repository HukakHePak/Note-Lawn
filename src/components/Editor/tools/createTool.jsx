import { ToolItem } from "../ToolItem";

let key = 1;

export function createTool(title, icon, action, option, draggable) {
    return <ToolItem key={key++} action={action} title={title} icon={icon} draggable={draggable}  option={option} ></ToolItem>;
};

export function createDraggableTool(title, icon, action) {
    return createTool(title, icon, action, undefined, true);
}

export function createOptionTool(title, option, action) {
    return createTool(title, undefined, action, option);
}
