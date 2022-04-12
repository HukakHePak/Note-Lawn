export function removeItem(list, id) {
  return list.filter((item) => item.id !== id);
}