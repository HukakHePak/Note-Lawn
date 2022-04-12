export function getItem(list, id) {
    return list.find((item) => item.id === id)
  }