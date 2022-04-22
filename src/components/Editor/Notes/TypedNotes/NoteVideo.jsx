import React from "react";
import YouTube from "react-youtube";
import { NoteMedia } from "../NoteMedia";

export function NoteVideo(props) {
  const { link, isSelected } = props.note;

  // const videoId = src.slice(-11);
  

  const opts = {
    // TODO: сделать нормальный ресайз. сейчас высота не изменяется
    width: "400px",
    height: "250px",
    playerVars: {
      autoplay: 1,
    },
  };

  function videoOnReady(event) {
    event.target.pauseVideo();
  }

  return (
    <NoteMedia isSelected={isSelected} note={props.note}>
      <div className="note-item note-item--video">
        <YouTube
          videoId={'8LgNa7yRW3M'}
          opts={opts}
          onReady={videoOnReady}
          className="additionalStyleYouTube"
        />
      </div>
    </NoteMedia>
  );
}
