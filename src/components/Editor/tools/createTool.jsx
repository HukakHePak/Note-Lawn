import { ToolItem } from "../ToolItem";
import { TextNoteTool } from "../TextNoteTool";
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

export function createOptionTool([title, option, action]) {
  return createTool([title, undefined, action, option]);
}

export function createNoteTextTool(title, icon, inlineStyle) {
  return (
    <TextNoteTool
      key={uniqid()}
      title={title}
      icon={icon}
      inlineStyle={inlineStyle}
    ></TextNoteTool>
  );
}
