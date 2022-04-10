import React from "react";
import { NoteImage } from "./NoteImage";
import { NoteText } from "./NoteText";
import { NoteVideo } from "./NoteVideo";

export const NOTE_TYPES = {
    TEXT: "TEXT_TYPE",
    LIST: "LIST_TYPE",
    IMAGE: "IMAGE_TYPE",
    MUSIC: "MUSIC_TYPE",
    VIDEO: "VIDEO_TYPE",
    PAINT: "PAINT_TYPE",
    HOME: "HOME_TYPE",
    BACK: "BACK_TYPE",
    FORWARD: "FORWARD_TYPE",
    COLOR: "COLOR_TYPE",
  };

export function SelectNote(type) {
  switch (type) {
    case NOTE_TYPES.TEXT:
      return NoteText;
    case NOTE_TYPES.IMAGE:
      return NoteImage;
    case NOTE_TYPES.VIDEO:
      return NoteVideo;
    default:
      break;
  }
}

export function CreateNote(note, selected) {
    return React.createElement(SelectNote(note.type), {note, editable: selected});
}
