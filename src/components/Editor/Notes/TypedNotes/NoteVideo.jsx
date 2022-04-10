import React from "react";
import YouTube from "react-youtube";
import { NoteMedia } from "../NoteMedia";

export function NoteVideo(props) {
  const { src, isSelected } = props.note;

  const videoId = src.slice(-11);

  const opts = {  // TODO: сделать нормальный ресайз. сейчас высота не изменяется
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function videoOnReady(event) {
    event.target.pauseVideo();
  }

  return (
    <NoteMedia isSelected={isSelected}>
      <div className="note-item note-item--video">
        <YouTube videoId={videoId} opts={opts} onReady={videoOnReady} />
      </div>
    </NoteMedia>
  );
}
