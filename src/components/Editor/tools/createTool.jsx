import { ToolItem } from "../ToolItem";
import { TextNoteTool } from "../TextNoteTool";

let key = 1;

export function createTool(title, icon, action, option, draggable) {
  return (
    <ToolItem
      key={key++}
      title={title}
      icon={icon}
      action={action}
      draggable={draggable}
      option={option}
    ></ToolItem>
  );
}

export function createNoteTextTool(title, icon, inlineStyle, option) {
  return (
    <TextNoteTool
      key={key++}
      title={title}
      icon={icon}
      inlineStyle={inlineStyle}
      option={option}
    ></TextNoteTool>
  );
}

export function createDraggableTool(title, icon, action) {
  return createTool(title, icon, action, undefined, true);
}

export function createOptionTool(title, action, option) {
  return createTool(title, undefined, action, option);
}
