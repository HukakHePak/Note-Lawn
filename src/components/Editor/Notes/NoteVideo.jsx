import React from "react";
import YouTube from "react-youtube";

export function NoteVideo({ link }) {
  const videoId = link.slice(-11);

  const opts = {
    width: "250px",
    height: "406px",
    playerVars: {
      autoplay: 1,
    },
  };

  function videoOnReady(event) {
    event.target.pauseVideo();
  }

  return (
    <div className="note-item note-item--video">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={videoOnReady}
        className="additionalPlayerStyles"
      />
    </div>
  );
}
