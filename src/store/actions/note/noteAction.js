import { Action } from "../Action";

export function noteAction(type, id, ...options) {
  console.log(type, id, options);
  return Action(type, { id, ...options });
}
