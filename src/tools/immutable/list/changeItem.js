import { getItem } from "./getItem";

export function changeItem(items, index, value) {
    const list = [...items];
    const item = getItem(list, index);
    
    item = {...value};

    return list;
}