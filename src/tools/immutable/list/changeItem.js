export function changeItem(items, id, value) {
    return items.map(item => {
        return item.id === id ? {...item, ...value} : item
    });
}