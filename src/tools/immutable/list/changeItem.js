import { getItem } from "./getItem";

export function changeItem(items, id, value) {
    const list = [...items];
    const index = list.indexOf(getItem(list, id));
    
    list[index] = {...value};
    console.log(value)

    return list;
}