import { ToolItem } from "../ToolItem";

let key = 1;

export function createTool(title, icon, action, value) {
    return <ToolItem key={key++} action={action} title={title} icon={icon} value={value} />;
};
