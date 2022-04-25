import { selectEvent } from "./selectEvent";

export function styleEvent(style) {
  return () => selectEvent({ type: "styleChange", style });
}

export function blockEvent(block) {
  return () => selectEvent({ type: "styleChange", block });
}