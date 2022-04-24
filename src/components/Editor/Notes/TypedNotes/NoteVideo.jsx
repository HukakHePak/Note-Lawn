import React from "react";
import YouTube from "react-youtube";
import { NoteMedia } from "../NoteMedia";

export function NoteVideo(props) {
  const { link } = props.note;

  const videoId = link?.slice(-11);
  

  const opts = {
    width: "400px",
    height: "250px",
    playerVars: {
      autoplay: 0,
    },
  };

  function videoOnReady(event) {
    event.target.pauseVideo();
  }

  return (
    <NoteMedia isSelected={props.editable} note={props.note}>
      <div className="note-item note-item--video">
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={videoOnReady}
          className="additionalStyleYouTube"
        />
      </div>
    </NoteMedia>
  );
}
