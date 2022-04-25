import { ToolItem } from "../ToolItem";
import uniqid from "uniqid";

export function createTool([title, icon, action, option, draggable]) {
  return (
    <ToolItem
      key={uniqid()}
      title={title}
      action={action}
      draggable={draggable}
      option={option}
    >
      {icon}
    </ToolItem>
  );
}

export function createDraggableTool([title, icon, action]) {
  return createTool([title, icon, action, undefined, true]);
}